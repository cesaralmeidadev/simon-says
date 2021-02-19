const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnStart = document.getElementById('btnEmpezar');
const ULTIMO_NIVEL = 10;
class Game {
	constructor() {
		this.inicializar = this.inicializar.bind(this);
		this.inicializar();
		this.generarSecuencia();
		setTimeout(this.nextLevel(), 500);
	}
	inicializar() {
		this.nextLevel = this.nextLevel.bind(this);
		this.elegirColor = this.elegirColor.bind(this);
		this.toggleBtnStart();
		this.level = 1;
		this.colores = {
			celeste,
			violeta,
			naranja,
			verde,
		};
	}
	toggleBtnStart() {
		if (btnStart.classList.contains('hide')) {
			btnStart.classList.remove('hide');
		} else {
			btnStart.classList.add('hide');
		}
	}
	generarSecuencia() {
		this.secuencia = new Array(ULTIMO_NIVEL)
			.fill(0)
			.map((n) => Math.floor(Math.random() * 4));
	}
	nextLevel() {
		this.subnivel = 0;
		this.iluminarSecuencia();
		this.agregarEventosClick();
	}
	transformarNumeroAColor(num) {
		switch (num) {
			case 0:
				return 'celeste';
			case 1:
				return 'violeta';
			case 2:
				return 'naranja';
			case 3:
				return 'verde';
		}
	}
	transformarColorANumero(color) {
		switch (color) {
			case 'celeste':
				return 0;
			case 'violeta':
				return 1;
			case 'naranja':
				return 2;
			case 'verde':
				return 3;
		}
	}
	iluminarSecuencia() {
		for (let i = 0; i < this.level; i++) {
			const color = this.transformarNumeroAColor(this.secuencia[i]);
			setTimeout(() => this.iluminarColor(color), 1000 * i);
		}
	}
	iluminarColor(color) {
		this.colores[color].classList.add('light');
		setTimeout(() => this.apagarColor(color), 350);
	}
	apagarColor(color) {
		this.colores[color].classList.remove('light');
	}
	agregarEventosClick() {
		this.colores.celeste.addEventListener('click', this.elegirColor);
		this.colores.verde.addEventListener('click', this.elegirColor);
		this.colores.violeta.addEventListener('click', this.elegirColor);
		this.colores.naranja.addEventListener('click', this.elegirColor);
	}
	eliminarEventosClick() {
		this.colores.celeste.removeEventListener('click', this.elegirColor);
		this.colores.verde.removeEventListener('click', this.elegirColor);
		this.colores.violeta.removeEventListener('click', this.elegirColor);
		this.colores.naranja.removeEventListener('click', this.elegirColor);
	}
	elegirColor(ev) {
		const nombreColor = ev.target.dataset.color;
		const numeroColor = this.transformarColorANumero(nombreColor);
		this.iluminarColor(nombreColor);
		if (numeroColor === this.secuencia[this.subnivel]) {
			this.subnivel++;
			if (this.subnivel === this.level) {
				this.level++;
				this.eliminarEventosClick();
				if (this.level === ULTIMO_NIVEL + 1) {
					this.ganoElJuego();
				} else {
					setTimeout(this.nextLevel, 1500);
				}
			}
		} else {
			this.perdioElJuego();
		}
	}
	ganoElJuego() {
		swal('Felicidades', 'Ganaste', 'success').then(this.inicializar);
	}
	perdioElJuego() {
		swal('Vaya', 'Perdiste', 'error').then(() => {
			this.eliminarEventosClick();
			this.inicializar();
		});
	}
}
function startGame() {
	window.game = new Game();
}
