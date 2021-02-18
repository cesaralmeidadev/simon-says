const blue = document.getElementById('celeste');
const violet = document.getElementById('violeta');
const orange = document.getElementById('naranja');
const green = document.getElementById('verde');
const btnStart = document.getElementById('btnEmpezar');
class Game {
	constructor() {
		this.inicializar();
	}
	inicializar() {
		btnStart.classList.add('hide');
	}
}
const startGame = () => {
	const game = new Game();
};
