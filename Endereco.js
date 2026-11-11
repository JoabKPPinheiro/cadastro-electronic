class Endereco {
 constructor(logradouro, numero, cidade, uf) {
 this.logradouro = logradouro;
 this.numero = numero;
 this.cidade = cidade;
 this.uf = uf;
 }
 toString() { return `${this.logradouro}, ${this.numero} - ${this.cidade}/${this.uf}`; }
}

module.exports = Endereco;