
// app.js - navigation, splash hide, simple animations and accessibility
document.addEventListener('DOMContentLoaded', function(){
  // splash hide after small delay to simulate app loading
  setTimeout(()=>{
    const s = document.getElementById('splash');
    if(s){ s.style.opacity='0'; setTimeout(()=>s.remove(),600); }
  }, 700);

  // nav buttons
  document.querySelectorAll('.nav-btn').forEach(b=>{
    b.addEventListener('click', ()=>{
      const t = b.getAttribute('data-target');
      navigate(t);
    });
  });

  // outline buttons
  document.querySelectorAll('[data-nav]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      navigate(btn.getAttribute('data-nav'));
    });
  });

  // support keyboard navigation
  document.addEventListener('keyup', (e)=>{
    if(e.key === '1') navigate('home');
    if(e.key === '2') navigate('profile');
    if(e.key === '3') navigate('programs');
    if(e.key === '4') navigate('news');
    if(e.key === '5') navigate('contact');
  });
});

function navigate(target){
  if(!target) return;
  document.querySelectorAll('.screen').forEach(s=> s.hidden = true);
  const el = document.getElementById(target);
  if(el){ el.hidden = false; el.scrollIntoView({behavior:'smooth'}); }
  document.querySelectorAll('.nav-btn').forEach(n=> n.classList.remove('active'));
  const active = document.querySelector('.nav-btn[data-target="'+target+'"]');
  if(active) active.classList.add('active');
}
