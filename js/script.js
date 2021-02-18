const blue = document.getElementById('celeste');
const violet = document.getElementById('violeta');
const orange = document.getElementById('naranja');
const green = document.getElementById('verde');
const btnStart = document.getElementById('btnEmpezar');
class Game {
	constructor() {
		this.inicializar();
		this.generarSecuencia();
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
}
function startGame() {
	window.game = new Game();
}
