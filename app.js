// Simple navigation & accessibility for mobile-like single-page app
document.addEventListener('click', function(e){
  const btn = e.target.closest('.nav-btn');
  if(btn){
    const target = btn.getAttribute('data-target');
    navigateTo(target);
  }
});

function navigateTo(id){
  if(!id) return;
  document.querySelectorAll('.screen').forEach(s => s.hidden = true);
  const el = document.getElementById(id);
  if(el){ el.hidden = false; el.scrollIntoView({behavior:'smooth'}); }
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const active = document.querySelector('.nav-btn[data-target="'+id+'"]');
  if(active) active.classList.add('active');
  // For accessibility focus
  el && el.setAttribute('tabindex','-1') && el.focus();
}

// expose to inline buttons
window.navigateTo = navigateTo;