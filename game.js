const monster = document.getElementById("monster")
const monsterImg = document.getElementById("monsterImg")
const angel = document.getElementById("angel")
const angelImg = document.getElementById("angelImg")
const pointsDisplay = document.getElementById("points")
const pointsDisplayFinal = document.getElementById("pointsFinal")
const healthDisplay = document.getElementById("health")
const lifes = document.querySelectorAll("img.lifes")
const icons = document.getElementById("icons")
var audioMonster = new Audio('./audio/clicked.mp3');
var audioAngel = new Audio('./audio/angel.mp3');
var gameOver = new Audio('./audio/gameover.mp3');
var audioStart = new Audio('./audio/start.mp3');

var points = 0
var health = 5

function movementMonster() {
    var randomTop = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    var randomBottom = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    var randomRight = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    var randomLeft = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    monster.style.top = randomTop + "px"
    monster.style.bottom = randomBottom + "px"
    monster.style.right = randomRight + "vw"
    monster.style.left = randomLeft + "vw"
}

function movementangel() {
    var randomTop1 = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    var randomBottom1 = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    var randomRight1 = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    var randomLeft1 = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    angel.style.top = randomTop1 + "px"
    angel.style.bottom = randomBottom1 + "px"
    angel.style.right = randomRight1 + "vw"
    angel.style.left = randomLeft1 + "vw"
}

function clickedMonster() {
    points += 1
    pointsDisplay.innerHTML = `${points}`
    pointsDisplayFinal.innerHTML = `${points}`
    console.log(points);

    audioMonster.play();

    monsterImg.style.display = "none"
    setTimeout(function () {
        monsterImg.style.display = "block"
    }, 800)
}



function clickedangel() {
    health = health - 1
    

   if(health != 0){
       var finalLifes = lifes[health]
       finalLifes.style.display = "none"
   }    

    audioAngel.play();

    angelImg.style.display = "none"

    setTimeout(function () {
        angelImg.style.display = "block"
    }, 800)
    if(health <= 0){
        stop()
    }
}

function start() {
    audioStart.play()
    setInterval(() => {
        movementMonster()
    }, 800);
    setInterval(() => {
        movementangel()
    }, 2000);
}

function stop() {
    document.getElementById("main").style.display = "none"
    document.getElementById("gameOver").style.display = "block"
    gameOver.play()
}


document.getElementById("go").addEventListener('click', function(){
    start()
    icons.style.display = "block"
    document.getElementById("go").style.display = "none"
})

monsterImg.addEventListener('click', function () {
    clickedMonster()
})
angelImg.addEventListener('click', function () {
    clickedangel()
})





console.log(lifes[0])
console.log(lifes[1])