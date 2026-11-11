const Pessoa = require('./Pessoa');

class PessoaFisica extends Pessoa {
  #cpf;
  #dataNascimento;
  
    constructor(nome, endereco, cpf, dataNascimento) {
        super(nome, endereco);
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    get cpf() { return this.#cpf; }
    set cpf(valor) { this.#cpf = this.validarTamanho(valor, 11, "CPF"); }
    get dataNascimento() { return this.#dataNascimento; }
    set dataNascimento(valor) {
        const data = new Date(valor);
            if (Number.isNaN(data.getTime()) || data > new Date())
            throw new Error("Uma data de nascimento válida deve ser informada, tente novamente.");
            this.#dataNascimento = data;
    }

  toString() { return `${super.toString()} | CPF: ${this.cpf}`; }
}

module.exports = PessoaFisica;