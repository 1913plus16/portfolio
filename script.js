function showCurrentTab(tab){
    var currTab = document.querySelector(tab);
    currTab.style.backgroundColor = "rgba(128, 128, 128, 0.3)"
}

const lightbox = document.createElement("div")
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)

const images = document.querySelectorAll('img')
images.forEach(image => {
    image.addEventListener('click',e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    })
})

lightbox.addEventListener('click', e => {
    if(e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
})

const btn = document.getElementById('back-top')
const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
window.addEventListener("scroll", e => {
    if(window.scrollY > 0.25 * vh) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
})

btn.addEventListener("click", e => {
    window.scrollTo(0,0)
})