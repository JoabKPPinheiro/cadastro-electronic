class Pessoa {
  #nome;
  endereco;

    constructor(nome, endereco) {
        this.nome = nome;           
        this.endereco = endereco;
    }  

        get nome() { return this.#nome; }

        set nome(valor) {
            if (typeof valor !== "string" || valor.trim().length < 3)
            throw new Error("O nome deve ter ao menos 3 caracteres, tente novamente.");
            this.#nome = valor.trim();
        }  

    validarTamanho(valor, tamanho, rotulo) {
        const digitos = String(valor).replace(/\D/g, "");
        if (digitos.length !== tamanho)
            throw new Error(`${rotulo} deve ter ${tamanho} dígitos, tente novamente.`);
        return digitos;
    }

    toString() { return `${this.nome} | ${this.endereco}`; }
}

module.exports = Pessoa;