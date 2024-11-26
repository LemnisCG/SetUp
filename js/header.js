const nav = document.getElementById("nav");
const btnCerrar = document.getElementById('cerrar');
const btnMenu = document.getElementById('menu');
console.log(nav)

btnMenu.addEventListener('click', () => {
    nav.classList.add('visible')
    ocultarMenu()
})

btnCerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
    mostarMenu()
})

function ocultarMenu() {
    btnMenu.style.opacity = '0'    
}
function mostarMenu() {
    btnMenu.style.opacity = '1'    
}
