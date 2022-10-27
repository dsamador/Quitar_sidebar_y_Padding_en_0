miBtn = document.querySelector('header').appendChild(document.createElement('button'))
miBtn.textContent = 'Corregir'
coso = document.getElementById("courseSidebar")

miBtn.addEventListener('click', ()=>{
    coso.remove()
    document.querySelector('.lecture-page-layout').children[0].style.padding = '16px 0px';
});
