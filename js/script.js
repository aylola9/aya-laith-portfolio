const button=document.querySelector('.menu'),links=document.querySelector('.nav-links');

    button.addEventListener('click',()=>{
  const open=links.classList.toggle('open');
button.setAttribute('aria-expanded',open);
button.textContent=open?'×':'☰'
});

    links.addEventListener('click',e=>{if(e.target.matches('a')){links.classList.remove('open');
button.setAttribute('aria-expanded','false');
button.textContent='☰'}
});

    document.querySelectorAll('[data-copy]').forEach(copyButton=>{
      copyButton.addEventListener('click',async()=>{
        const value=copyButton.dataset.copy;

        const status=document.querySelector('.copy-status');

        try{
          await navigator.clipboard.writeText(value);

          status.textContent='Copied: '+value;

          copyButton.textContent='Copied';

          setTimeout(()=>{copyButton.textContent='Copy';
status.textContent=''},2200);

        }catch(error){
          status.textContent='Select and copy: '+value;

        }
      
});

    
});

    document.getElementById('year').textContent=new Date().getFullYear();

