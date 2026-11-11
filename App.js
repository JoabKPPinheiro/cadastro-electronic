const Endereco = require('./Endereco');
const PessoaFisica = require('./PessoaFisica');
const PessoaJuridica = require('./PessoaJuridica');

const endereco = new Endereco("Avenida Tomaz Landim", 268, "Natal", "RN");
const clientes = [];

try {
  clientes.push(new PessoaFisica("Joana D'arc", endereco, "123.456.789-09", "1990-05-10"));
  clientes.push(new PessoaJuridica("J&S Soluções em TI", new Endereco("Rua Garcia D'ávila", 100, "Natal", "RN"), "12.345.678/0001-23", "J&S Soluções em TI Ltda"));
  //clientes.push(new PessoaJuridica("LF Modas", new Endereco("Rua Frei Damião", 1230, "Natal", "RN"), "12.234", "LF Modas S.A"));
  clientes.push(new PessoaFisica("Alf", new Endereco("Rua Principal", 10, "Natal", "RN"), "012", "2026-11-09"));
  
} catch (erro) {
  console.error(`Erro: ${erro.message}`);
}

clientes.forEach((cliente) => console.log(String(cliente)));