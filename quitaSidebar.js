miSpan = document.createElement('span')
miSpan.textContent = 'Ocultar listado';
miSpan.classList.add('nav-text');

miBtn = document.querySelector('.lecture-nav').appendChild(document.createElement('a'));
miBtn.appendChild(miSpan)
miBtn.classList.add('nav-btn')
miBtn.style.background = '#2103cf';
miBtn.style.cursor = 'pointer';

sideBar = document.getElementById("courseSidebar");

miBtn.addEventListener('click', ()=>{
    sideBar.remove();
    document.querySelector('.lecture-page-layout').children[0].style.padding = '16px 0px';
});

miBtn.addEventListener('mouseover', ()=>{
    miBtn.style.background = '#5842db';
});

miBtn.addEventListener('mouseout', ()=>{
    miBtn.style.background = '#2103cf';
});


spanReset = document.createElement('span')
spanReset.textContent = 'Ver listado';
spanReset.classList.add('nav-text');

resetBtn = document.querySelector('.lecture-nav').appendChild(document.createElement('a'));
resetBtn.appendChild(spanReset)
resetBtn.classList.add('nav-btn')
resetBtn.style.background = '#ee2121';
resetBtn.style.cursor = 'pointer';


sidebarPadre = document.querySelector('.lecture-page-layout');
sideBarHermano = document.querySelector('.course-mainbar');

resetBtn.addEventListener('click', ()=>{
    sidebarPadre.insertBefore(sideBar, sideBarHermano);    
});

resetBtn.addEventListener('mouseover', ()=>{
    resetBtn.style.background = '#5842db';
});

resetBtn.addEventListener('mouseout', ()=>{
    resetBtn.style.background = '#ee2121';
});
