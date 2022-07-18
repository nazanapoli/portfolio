document.getElementById('telefono').addEventListener('click',()=>{
    contTel++
    if(contTel<=1){
        let num = document.createElement('p')
        num.classList.add('bold')
        num.innerText=`+54 9 11 23905967`
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