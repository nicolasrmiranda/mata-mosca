let height = 0
let width = 0
let life = 1
let timer = 10

let timerFly2 = 1500

let level = window.location.search
level = level.replace('?', '')

if (level === 'normal') {
    timerFly2 = 1500
} else if (level === 'hard') {
    timerFly2 = 1000
} else if (level === 'DS') {
    timerFly2 = 200
}

function startGame() {
   let level = document.getElementById('level').value

   if (level === '') {
       alert('Please, select a level')
       return false
   } 
    window.location.href = "game.html?" + level
}
//creating gameWidth function that adjusts according to screen size

function gameWidth() {
    height = window.innerHeight
    width = window.innerWidth
    console.log(height, width)
}

gameWidth()

let t = setInterval(function() {
    timer -= 1

    if (timer < 0){
        clearInterval(t)
        clearInterval(createFly)
        window.location.href = "victory.html"
    } else {
        document.getElementById('timer').innerHTML = timer
    }
}, 1000)

//creating randomPosition function that randomly determines positions for the object
function randomPosition() {
    if (document.getElementById('fly')) {
        document.getElementById('fly').remove()

        if (life > 3) {
            window.location.href = 'game-over.html'
        } else {
            document.getElementById('l' + life).src="img/coracao_vazio.png"
            life++    
        }
    }

    let x = Math.floor(Math.random() * width) - 90
    let y = Math.floor(Math.random() * height) - 90

    x = x < 0 ? 0 : x
    y = y < 0 ? 0 : y

    //create html element
    let fly = document.createElement('img')
    fly.src = 'img/mosca.png'
    fly.className = flySize() + ' ' + randomSide()
    fly.style.left = x + 'px'
    fly.style.top = y + 'px'
    fly.style.position = 'absolute'
    fly.id = 'fly'
    fly.onclick = function() {
        this.remove()
    }

    document.body.appendChild(fly)

}

//creating function that sets the fly size by changing between created classes
function flySize() {
    let size = Math.floor(Math.random() * 3)

    switch(size) {
        case 0:
            return 'flySize1'
        case 1:
            return 'flySize2'
        case 2:
            return 'flySize3'
    }
}

function randomSide() {
    let size = Math.floor(Math.random() * 2)

    switch(size) {
        case 0:
            return 'sideA'
        case 1:
            return 'sideB'
    }
}

