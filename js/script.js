const blue = document.getElementById('celeste');
const violet = document.getElementById('violeta');
const orange = document.getElementById('naranja');
const green = document.getElementById('verde');
const btnStart = document.getElementById('btnEmpezar');
class Game {
	constructor() {
		this.inicializar();
		this.generarSecuencia();
		this.nextLevel();
	}
	inicializar() {
		btnStart.classList.add('hide');
		this.level = 1;
		this.colors = {
			blue,
			violet,
			orange,
			green,
		};
	}
	generarSecuencia() {
		this.secuencia = new Array(10)
			.fill(0)
			.map((n) => Math.floor(Math.random() * 4));
	}
	nextLevel() {
		this.iluminarSecuencia();
	}
	transformarNumeroAColor(num) {
		switch (num) {
			case 0:
				return 'blue';
			case 1:
				return 'violet';
			case 2:
				return 'orange';
			case 3:
				return 'green';
		}
	}
	iluminarSecuencia() {
		for (let i = 0; i < this.level; i++) {
			const color = this.transformarNumeroAColor(this.secuencia[i]);
			setTimeout(() => this.iluminarColor(color), 1000 * i);
		}
	}
	iluminarColor(color) {
		this.colors[color].classList.add('light');
		setTimeout(() => this.apagarColor(color), 350);
	}
	apagarColor(color) {
		this.colors[color].classList.remove('light');
	}
}
function startGame() {
	window.game = new Game();
}
