document.addEventListener('DOMContentLoaded',function(){
  // year
  const y=document.getElementById('year');if(y) y.textContent=new Date().getFullYear();

  // mobile nav
  const nav=document.getElementById('nav'),btn=document.getElementById('nav-toggle');
  btn.addEventListener('click',()=>{nav.classList.toggle('open');nav.classList.toggle('hidden')});

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const href=a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();document.querySelector(href).scrollIntoView({behavior:'smooth',block:'start'});
        if(window.innerWidth<700){nav.classList.add('hidden')}
      }
    })
  })

  // contact form simple validation + fake submit
  const form=document.getElementById('contact-form');
  if(form){
    const status=document.getElementById('form-status');
    form.addEventListener('submit',async function(e){
      e.preventDefault();
      const name=form.name.value.trim(),email=form.email.value.trim(),msg=form.message.value.trim();
      if(!name||!email||!msg){status.textContent='Please complete all fields.';return}
      status.textContent='Sending…';
      try{
        // simulate network
        await new Promise(r=>setTimeout(r,800));
        form.reset();status.textContent='Thanks! We received your message.'
      }catch(err){status.textContent='Failed to send. Try again later.'}
    })
    // booking form
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();

    document.getElementById("message").textContent =
      "✅ Table booked successfully!";

    this.reset();
  });
}
  }
});
