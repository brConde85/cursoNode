// minimist é utilizado para facilitar em obter argumentos
// que estamos extraindo da linha de comando
const minimist = require('minimist');
// uma notação do minimist é que para usa-lo no terminal é 
// necessário usar "--" antes do argumento: 
// node ./index.js --nome=Bruno
const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args.nome;
const profissao = args['prof'];

console.log(`${nome}\n${profissao}`);