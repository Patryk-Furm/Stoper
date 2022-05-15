const play = document.querySelector('.play')
const legend = document.querySelector('.legend')
const popup = document.querySelector('.popup')
const close = document.querySelector('.close')
const body = document.querySelector('body')
const wrapper = document.querySelector('.wrapper')
const color = document.querySelector('.color')
const circle1 = document.querySelector('.circle-1')
const circle2 = document.querySelector('.circle-2')
const circle3 = document.querySelector('.circle-3')  
const stopwatch = document.querySelector('.stopwatch')
const pause = document.querySelector('.pause')
const stop = document.querySelector('.stop')
const timeList = document.querySelector('.time-list')
const time = document.querySelector('.time')
const reset = document.querySelector('.clear')
const archive = document.querySelector('.archive')
const modalShadow = document.querySelector('.modal-shadow')
const modalAnimation = document.querySelector('.modal-animation')



const colorBtn = document.querySelector('.fa-paint-brush');
const colorPanel = document.querySelector('.colors');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
let root = document.documentElement


let countTime
let minutes = 0
let seconds = 0
let timesArr = []


const startTimer = () => {
    clearInterval(countTime)
    countTime = setInterval(() => {
        if(seconds < 9){
            seconds ++;
            stopwatch.textContent = `${minutes}:0${seconds}`
        }else if(seconds >= 9 && seconds < 59){
            seconds ++;   
            stopwatch.textContent = `${minutes}:${seconds}`
            }else{
            seconds = 0
            minutes ++;
            stopwatch.textContent = `${minutes}:00`
        }
    }, 1000)
     
}




const pauseTimer = () => {
    clearInterval(countTime)
    
}

const stopTimer = () => {

    if(stopwatch.textContent !== '0:00'){
        time.style.visibility = 'visible'
        time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`
        timesArr.push(stopwatch.textContent)
    }

    clearStuff()
    
}

const resetAll = () => {
    time.style.visibility = 'hidden'
    timesArr = []
    clearStuff()
}

const clearStuff = () => {
    clearInterval(countTime)
    timeList.textContent = ''
    seconds = 0
    minutes = 0
    stopwatch.textContent = '0:00'
}

const showHistory = () => {
    timeList.textContent = ''
    let num = 1

    timesArr.forEach(time => {
        const newTime = document.createElement('li')
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}</span>`

        timeList.appendChild(newTime)
        num++
        
    })
}

const popupShow = () => {
    popup.style.display = 'block'
    body.style.background = 'rgba(0, 0, 0, .95)'
    wrapper.style.background = 'rgba(0, 0, 0, .95)'
    
}

const popupClose = () => {
    popup.style.display = 'none'
    body.style.background = '#333'
    wrapper.style.background = 'radial-gradient(circle, rgba(43,44,46,1) 0%, rgba(25,25,25,1) 93%)'
}


play.addEventListener('click', startTimer)
legend.addEventListener('click', popupShow)
close.addEventListener('click', popupClose)
color.addEventListener('click', () =>{
    colorsShowClose()
})
pause.addEventListener('click', pauseTimer)
stop.addEventListener('click', stopTimer)
reset.addEventListener('click', resetAll)
archive.addEventListener('click', showHistory)
window.addEventListener('click', e => e.target === body  ? popupClose() : false)
window.addEventListener('click', e => e.target === body ? bodyColorClose() : false)


const bodyColorClose = () => {
    colorPanel.classList.remove('show-colors')

}

colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
    root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
});

colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
    root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
});

colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
    root.style.setProperty('--hover-color', 'rgb(28, 209, 58)');
});


