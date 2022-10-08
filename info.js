// Selectors 
let AnimeTitleDiv = document.querySelector('.AnimeTitleDiv')
AnimeTitleDiv.innerText = sessionStorage.getItem('animeTitle')
let synopsis = document.querySelector('.Synopsis')
synopsis.innerText = sessionStorage.getItem('animeSynopsis')
let episodes = document.querySelector('.episodes')
episodes.innerText = sessionStorage.getItem('animeEpisodes')
let status1 = document.querySelector('.AorC')
status1.innerText = sessionStorage.getItem('animeStatus')
let anime_img = document.querySelector('.anime-img')
anime_img.src= sessionStorage.getItem('animeImg')
let bg = document.querySelector('.bg')
bg.style.backgroundImage = `url('${anime_img.src}')`
// Functions
const airing = () =>{ 
  if(status1.innerText == 'Finished Airing'){
    status1.style.backgroundColor = 'green'
  }
  else if(status1.innerText == 'Not yet aired'){
    status1.style.backgroundColor = 'orange'
  }
  else if(status1.innerText == 'Airing'){
    status1.style.backgroundColor = 'red'
  }
}
airing()



