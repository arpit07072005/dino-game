let horse = document.querySelector('.boy');

document.addEventListener('keydown', function (e) {
    if (e.code === 'ArrowUp') {
        let text = document.querySelector('.gameover');
        if (text.innerHTML === "Game Over - Reload to Play Again") {
                  horse.classList.remove('jump');
        }
        else {
            horse.classList.add('jump');
            setTimeout(() => {
                horse.classList.remove('jump');
            }, 900);
        }
    }
});

let score = 0;

 let a =setInterval(() => {
    let horseRect = horse.getBoundingClientRect();
    let obstacle = document.querySelector('.obstacle');
    let obstacleRect = obstacle.getBoundingClientRect();
    let scoreElement = document.querySelector('.score');
    if ((horseRect.left < obstacleRect.right && horseRect.right > obstacleRect.left ) &&(horseRect.bottom > obstacleRect.top)
    ) {
        let text = document.querySelector('.gameover');
        text.innerHTML = "Game Over - Reload to Play Again";
        obstacle.classList.remove('speedops');
        document.querySelector('.reload').style.display = 'block';

        clearInterval(a)
    }
    else {
        score++;
        scoreElement.innerHTML = "Your score: " + score;
    }
}, 100);

