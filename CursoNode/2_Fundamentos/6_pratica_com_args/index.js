
// modulo externo
const minimist = require('minimist');

// modulo interno
const moduloSoma = require('./soma').soma;

// recebendo 3º elemento do array:
/*
  [
    '/home/bruno/.nvm/versions/node/v16.11.1/bin/node',
    '/home/bruno/CursoNode/2_Fundamentos/6_pratica_com_args/index.js',
    '--a=2',
    '--b=5'
  ]
*/
const args = minimist(process.argv.slice(2));

const a = args.a;
const b = args['b'];
// recebendo argumentos: node ./index.js --a=2 --b=5
moduloSoma(a, b);