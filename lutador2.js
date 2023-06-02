"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pesado = void 0;
class Pesado {
    constructor(_nome, _especial = "", _vida = 150, _peso = 100 + Math.round(Math.random() * 50), _energia = 100) {
        this._nome = _nome;
        this._especial = _especial;
        this._vida = _vida;
        this._peso = _peso;
        this._energia = _energia;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
        console.log(this.nome);
    }
    get energia() {
        return this._energia;
    }
    get vida() {
        return this._vida;
    }
    status() {
        return `Vida: ${this._vida} \n Energia: ${this._energia} \n Peso: ${this._peso}`;
    }
    acertouSoco() {
        if (this._peso >= 90) {
            this._energia -= 36;
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._energia -= 26;
        }
        else if (this._peso <= 60) {
            this._energia -= 14;
        }
    }
    recebeSocoDe(Alvo) {
        if (this._peso >= 90) {
            this._vida -= 25;
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._vida -= 19;
        }
        else if (this._peso <= 60) {
            this._vida -= 10;
        }
    }
    acertouChute() {
        if (this._peso >= 90) {
            this._energia -= 26;
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._energia -= 18;
        }
        else if (this._peso <= 60) {
            this._energia -= 8;
        }
    }
}
exports.Pesado = Pesado;
