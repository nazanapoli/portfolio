document.getElementById('jsVelas').addEventListener('click',()=>{
    window.location.href = "https://no-me-olvides.netlify.app/index.html";
});
document.getElementById('appTareas').addEventListener('click',()=>{
    window.location.href = "https://tareas-app-site.netlify.app/";
});
document.getElementById('APIClima').addEventListener('click',()=>{
    window.location.href = "https://web-clima-napoli.netlify.app/";
});
document.getElementById('bungeCSS').addEventListener('click',()=>{
    window.location.href = "https://bio-bunge.vercel.app/";
});
document.getElementById('telefono').addEventListener('click',()=>{
    contTel++
    if(contTel<=1){
        let num = document.createElement('p')
        num.classList.add('bold')
        num.innerText=`+54 9 1123905967`
        telefono.append(num)
    }
});
let contTel = 0;
let contMail = 0;
document.getElementById('mail').addEventListener('click',()=>{
    contMail++
    if(contMail<=1){
        let direccionMail = document.createElement('p')
        direccionMail.classList.add('bold')
        direccionMail.innerText=`nazanapoli@icloud.com`
        mail.append(direccionMail)
    }
});