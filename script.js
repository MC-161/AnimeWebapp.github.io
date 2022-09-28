// Selectors 
let must_watch = document.querySelector('.mustwatch')
let topAnime = document.querySelector('.top')
let upcoming = document.querySelector('.Upcomin')
// Functions
window.onload = () => {
    getMW()
    getTop()
    getUpcoming()
}

const getAnime = async(url, dom_element) => {
    const res = await fetch(url).catch(err => handle(err))
    const data = await res.json().catch(err => handle(err))
    renderAnime(data, dom_element)
}

const renderAnime = (animes, dom_element) => {
    let animeEl = document.querySelector(dom_element)
    for(let anime of animes.data){
            let slideDiv = document.createElement('div')
            slideDiv.classList.add('swiper-slide')
            
            let slide_imgDiv = document.createElement('div')
            slide_imgDiv.classList.add('slide-img')
            let animeImage = document.createElement('img')
            animeImage.setAttribute('dataId', anime.mal_id)
            animeImage.src = `${anime.images.jpg.image_url}`
            slide_imgDiv.appendChild(animeImage)
            slideDiv.appendChild(slide_imgDiv)
    
            let titleDiv = document.createElement('div')
            titleDiv.classList.add('title-div')
            
            let title = document.createElement('p')
            title.innerText = anime.title
            title.classList.add('title')
            
            let infoBtn = document.createElement('button')
            infoBtn.innerText = 'Info'
            infoBtn.classList.add('infoBtn')
            titleDiv.appendChild(title)
            titleDiv.appendChild(infoBtn)
            
            slideDiv.appendChild(titleDiv)
            animeEl.appendChild(slideDiv)
    }
}
// get categories

const getMW = () => {
    let url = 'https://api.jikan.moe/v4/top/anime'
    getAnime(url, '.mw')
}
const getTop = () => {
    let url = 'https://api.jikan.moe/v4/top/anime'
    getAnime(url, '.top')
}
const getUpcoming = () => {
    let url = 'https://api.jikan.moe/v4/top/anime'
    getAnime(url, '.up')
}

// event listeners