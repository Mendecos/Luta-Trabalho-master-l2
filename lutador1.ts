export class Lutador {


    constructor(
        private _nome: string,
        protected _especial: string = "",
        private _vida: number = 100,
        private _peso: number = 50 + Math.round(Math.random() * 50),
        private _energia: number = 100,
    
    ) {

    }

    public get nome(): string {
        return this._nome
    }
    public set nome(nome: string) {
        this._nome = nome;
        console.log(this.nome);

    }
    public get energia(): number {
        return this._energia;
    }
    public get vida(): number {
        return this._vida;
    }
    
    status(): string {
        return `Vida: ${this._vida} \n Energia: ${this._energia} \n Peso: ${this._peso}`
    }

    acertouSoco(): void {
        if (this._peso >= 90) {
            this._energia -= 16
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._energia -= 8
        }
        else if (this._peso <= 60) {
            this._energia -= 4
        }

    }
    acertouChute(): void {
        if (this._peso >= 90) {
                this._energia -= 26
            }
            else if (this._peso >= 60 && this._peso <= 89) {
                this._energia -= 18
            }
            else if (this._peso <= 60) {
                this._energia -= 8
            }
    
        }


    recebeSocoDe(Alvo: Lutador): void {
        if (this._peso >= 90) {
            this._vida -= 10
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._vida -= 5
        }
        else if (this._peso <= 60) {
            this._vida -= 2
        }
    }

    recebeChuteDe(Alvo: Lutador): void {
        console.log("aaaaaaaaaaa")
        if (this._peso >= 90) {
            this._vida -= 20
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._vida -= 10
        }
        else if (this._peso <= 60) {
            this._vida -= 5
        }
    }
}




