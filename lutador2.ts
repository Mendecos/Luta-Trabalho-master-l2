export class Pesado {


    constructor(
        private _nome: string,
        protected _especial: string = "",
        private _vida: number = 150,
        private _peso: number = 100 + Math.round(Math.random() * 50),
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
            this._energia -= 36
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._energia -= 26
        }
        else if (this._peso <= 60) {
            this._energia -= 14
        }

    }
    
    recebeSocoDe(Alvo: Pesado): void {
        if (this._peso >= 90) {
            this._vida -= 25
        }
        else if (this._peso >= 60 && this._peso <= 89) {
            this._vida -= 19
        }
        else if (this._peso <= 60) {
            this._vida -= 10
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


}




