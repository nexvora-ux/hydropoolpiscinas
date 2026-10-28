const APP_URL='https://nexvora-ux.github.io/hydropoolpiscinas/';
const $=id=>document.getElementById(id);let deferredPrompt=null;let toastTimer;
function toast(message){const t=$('toast');t.textContent=message;t.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('visible'),3200)}
function dialog(id){$(id).showModal()}
$('qrBtn').addEventListener('click',()=>dialog('qrDialog'));
$('installBtn').addEventListener('click',()=>dialog('installDialog'));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
$('copyBtn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(APP_URL);toast('Enlace copiado')}catch{toast(APP_URL)}});
$('shareBtn').addEventListener('click',async()=>{try{if(navigator.share)await navigator.share({title:'HydroPool Piscinas',text:'Instala el aplicativo HydroPool',url:APP_URL});else{await navigator.clipboard.writeText(APP_URL);toast('Enlace copiado para compartir')}}catch(e){if(e.name!=='AbortError')toast('No se pudo compartir')}});
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;$('nativeInstall').hidden=false});
$('nativeInstall').addEventListener('click',async()=>{if(!deferredPrompt){toast('Sigue las instrucciones de tu navegador');return}deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$('nativeInstall').hidden=true;$('installDialog').close()});
window.addEventListener('appinstalled',()=>toast('HydroPool instalado'));
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
