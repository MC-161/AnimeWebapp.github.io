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
            infoBtn.setAttribute('dataId', anime.mal_id)
            infoBtn.addEventListener('click', e => {
              handleAnimeSelection(e)
            })
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
  const d = new Date();
  let year = d.getFullYear()
  let url = `https://api.jikan.moe/v4/seasons/${year}/summer`
  getAnime(url, '.top')
}
const getUpcoming = () => {
    let url = 'https://api.jikan.moe/v4/seasons/upcoming'
    getAnime(url, '.up')
}

const getInfo = async(id) => {
  const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
  const data = await response.json()
  showAnimeInfo(data)
}

const showAnimeInfo = (anime) => {
  let animeImg = anime.data.images.webp.large_image_url
  let animeTitle = anime.data.title
  let animeSynopsis = anime.data.synopsis
  let animeStatus = anime.data.status
  let animeEpisodes = anime.data.episodes
  sessionStorage.setItem('animeImg', animeImg)
  sessionStorage.setItem('animeTitle', animeTitle)
  sessionStorage.setItem('animeSynopsis', animeSynopsis)
  sessionStorage.setItem('animeStatus', animeStatus)
  sessionStorage.setItem('animeEpisodes', animeEpisodes)
  window.open('info.html',"_self")
}

const handleAnimeSelection = (e) => {
  const id = e.target.getAttribute('dataID')
  getInfo(id)
}

// event listeners