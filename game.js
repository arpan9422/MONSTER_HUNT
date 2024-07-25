const monster = document.getElementById("monster")
const monsterImg = document.getElementById("monsterImg")
const pointsDisplay = document.getElementById("points")
var audio = new Audio('./audio/clicked.mp3');
var points = 0
console.log(monster);


function movement() {
    var randomTop = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    var randomBottom = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    var randomRight = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    var randomLeft = (Math.floor(10 * (Math.random()))) * (Math.floor(10 * (Math.random())))
    monster.style.top = randomTop + "px"
    monster.style.bottom = randomBottom + "px"
    monster.style.right = randomRight + "vw"
    monster.style.left = randomLeft + "vw"
}


function clicked() {
    points += 1
    pointsDisplay.innerHTML = ` ${points}`
    
    audio.play();

    monsterImg.style.display = "none"
    setTimeout(function () {
        monsterImg.style.display = "block"
    }, 1000)
}





function start() {
    setInterval(() => {
        movement()
    }, 1000);
}
start()




monsterImg.addEventListener('click', function () {
    clicked()
})



