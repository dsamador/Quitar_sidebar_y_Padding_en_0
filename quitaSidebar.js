coso = document.getElementById("courseSidebar")

setTimeout(()=>{
    coso.remove()
    /* Version 1.1 */
    document.querySelector('.lecture-page-layout').children[0].style.padding = '16px 0px';
}, 2000)
