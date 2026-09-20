(() => {
  const state = {
    data: null,
    currentProject: null,
    lastView: 'hoy'
  };

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  function statusClass(status){
    if(status === 'OPERATIVO') return 'status-ok';
    if(status === 'BLOQUEADO') return 'status-blocked';
    return 'status-attention';
  }

  function setView(name){
    $$('.view').forEach(v => v.classList.remove('is-active'));
    const view = $('#view-' + name);
    if(view) view.classList.add('is-active');
    $$('.bottom-nav [data-nav]').forEach(b => b.classList.toggle('is-active', b.dataset.nav === name));
    if(name !== 'project-detail') state.lastView = name;
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function projectCard(p){
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'project-card';
    b.innerHTML =
      '<div class="project-title"><strong>' + p.name + '</strong><span class="status-badge ' + statusClass(p.visual_status) + '">' + p.visual_status + '</span></div>' +
      '<div class="project-meta">' + p.summary + '</div>' +
      '<div class="project-meta">' + p.pending + ' pendientes · ' + p.blocked + ' bloqueos · ' + p.waiting_user + ' espera humana</div>';
    b.addEventListener('click', () => openProject(p.id));
    return b;
  }

  function render(){
    const d = state.data;
    $('#count-operativos').textContent = d.summary.operational;
    $('#count-atencion').textContent = d.summary.attention;
    $('#count-bloqueados').textContent = d.summary.blocked;

    $('#next-project').textContent = d.primary_action.project;
    $('#next-action').textContent = d.primary_action.action;
    $('#next-reason').textContent = d.primary_action.reason;
    $('#next-mode').textContent = d.primary_action.mode;
    $('#next-status').textContent = d.primary_action.visual_status;
    $('#next-status').className = 'status-badge ' + statusClass(d.primary_action.visual_status);

    const cards = $('#project-cards');
    const list = $('#projects-list');
    cards.innerHTML = '';
    list.innerHTML = '';
    d.projects.forEach((p, i) => {
      if(i < 4) cards.appendChild(projectCard(p));
      list.appendChild(projectCard(p));
    });

    const decisions = $('#decisions-list');
    decisions.innerHTML = '';
    if(!d.decisions.length){
      decisions.innerHTML = '<div class="panel"><p>No hay decisiones pendientes.</p></div>';
    } else {
      d.decisions.forEach(item => {
        const el = document.createElement('article');
        el.className = 'decision-card';
        el.innerHTML =
          '<div class="section-label">' + item.project + '</div>' +
          '<h2 style="margin-top:8px">' + item.title + '</h2>' +
          '<p>' + item.context + '</p>' +
          '<div class="note">Estado: ' + item.status + '. La resolución se escribe en la fuente dueña, no en esta consola pública.</div>';
        decisions.appendChild(el);
      });
    }

    const activity = $('#activity-list');
    activity.innerHTML = '';
    d.activity.forEach(item => {
      const el = document.createElement('div');
      el.className = 'activity-item';
      el.innerHTML = '<strong>' + item.title + '</strong><span>' + item.detail + '</span>';
      activity.appendChild(el);
    });
  }

  function openProject(id){
    const p = state.data.projects.find(x => x.id === id);
    if(!p) return;
    state.currentProject = p;
    $('#detail-name').textContent = p.name;
    $('#detail-status').textContent = p.visual_status;
    $('#detail-status').className = 'status-badge ' + statusClass(p.visual_status);
    $('#detail-summary').textContent = p.summary;
    $('#detail-pending').textContent = p.pending;
    $('#detail-blocked').textContent = p.blocked;
    $('#detail-waiting').textContent = p.waiting_user;
    $('#detail-next').textContent = p.next_action;
    $('#detail-note').classList.add('is-hidden');
    const link = $('#detail-public-link');
    if(p.public_url){
      link.href = p.public_url;
      link.textContent = p.public_label || 'ABRIR SITIO';
      link.classList.remove('is-hidden');
    } else {
      link.classList.add('is-hidden');
    }
    setView('project-detail');
  }

  function runQuery(raw){
    const q = raw.trim().toLowerCase();
    const out = $('#query-result');
    if(!q){
      out.textContent = 'Escribe una pregunta o usa una consulta rápida.';
      out.classList.remove('is-hidden');
      return;
    }
    let text = 'ROOT resolvería primero proyecto → fuente dueña → estado → siguiente acción.';
    if(q.includes('atencion') || q.includes('atención')){
      text = state.data.summary.attention + ' proyecto(s) requieren atención. La acción principal actual es: ' + state.data.primary_action.action;
    } else if(q.includes('afl')){
      const p = state.data.projects.find(x => x.id === 'afl-autos');
      text = p.name + ': ' + p.visual_status + '. ' + p.next_action;
    } else if(q.includes('fuente') || q.includes('verdad')){
      text = 'ROOT_CONSOLE no es fuente de verdad. Presenta estado sanitizado; la autoridad permanece en ROOT_ECOSISTEMA y en el proyecto dueño correspondiente.';
    } else if(q.includes('bloque')){
      text = state.data.summary.blocked + ' proyecto(s) bloqueados en el estado público sanitizado.';
    }
    out.textContent = text;
    out.classList.remove('is-hidden');
  }

  async function init(){
    try{
      const res = await fetch('./data/state.json', {cache:'no-store'});
      if(!res.ok) throw new Error('state');
      state.data = await res.json();
      render();

      $$('[data-nav]').forEach(b => b.addEventListener('click', () => setView(b.dataset.nav)));
      $('#continue-primary').addEventListener('click', () => {
        const p = state.data.projects.find(x => x.id === state.data.primary_action.project_id);
        if(p) openProject(p.id);
      });
      $('#back-projects').addEventListener('click', () => setView(state.lastView || 'proyectos'));
      $('#detail-continue').addEventListener('click', () => {
        const n = $('#detail-note');
        n.textContent = 'Acción preparada. Para modificar una fuente real se requiere una ejecución autorizada mediante ROOT; esta interfaz pública no escribe directamente.';
        n.classList.remove('is-hidden');
      });
      $('#query-form').addEventListener('submit', e => {
        e.preventDefault();
        runQuery($('#query-input').value);
      });
      $$('[data-query]').forEach(b => b.addEventListener('click', () => {
        const map = {atencion:'¿Qué requiere mi atención?', afl:'Abre AFL AUTOS', fuente:'¿Qué fuente de verdad manda?'};
        $('#query-input').value = map[b.dataset.query] || '';
        $('#query-input').focus();
      }));
      $$('.summary-card').forEach(b => b.addEventListener('click', () => {
        const map = {operativo:'operativos', atencion:'atención', bloqueado:'bloqueados'};
        $('#query-input').value = 'Muéstrame ' + map[b.dataset.filter];
        setView('consulta');
        runQuery($('#query-input').value);
      }));
    } catch(err){
      $('#app').innerHTML = '<section class="panel"><h2>No fue posible cargar el estado</h2><p>La interfaz está disponible, pero el archivo de estado sanitizado no respondió.</p></section>';
    }
  }

  init();
})();