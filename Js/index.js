const lightblue = document.getElementById('lightblue');
const violet = document.getElementById('violet');
const orange = document.getElementById('orange');
const green =   document.getElementById('green');
const btnStart = document.getElementById('btnStart');

//Constructor donde se sitúa toda la lógica
class Game{
constructor(){
    this.initialize();
    this.generateSequence();
    this.nextLevel();
}

//Primer método, esconde el "iniciar juego" al pulsar el botón
initialize(){
        btnStart.classList.add('hide')
        this.level = 1;
        this.colors  = {
            lightblue,
            violet,
            orange,
            green
        }

    }

//Segundo método
    generateSequence(){
        this.sequence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
}

//Tercer método
    nextLevel(){
        this.illuminateSequence()
    }

    transformFromNumberToColor(number){
        switch (number) {
            case 0:
                return 'lightblue'
            case 1:
                return 'violet'
            case 2:
                return 'orange'
            case 3:
                return 'green'
        }
    }
//La siguiente función pasa de numero a color por medio de un for
    illuminateSequence()
    {
        for (let i = 0; i < this.level; i++) {
        const color = this.transformFromNumberToColor(this.sequence[i]);
        setTimeout(() => this.illuminateColor(color), 1000 * i);
        }
    }qqq
    illuminateColor(color) {
            this.colors[color].classList.add('light')
            setTimeout(()=>this.turnOffColor(color), 350)
        }

    turnOffColor(color) {
            this.colors[color].classList.remove('light')
        }
    }

    function startGame() {
        window.game = new Game();
}
