// nosso argumento irá se chamar nome ( para passar o arg no terminal: node ./index.js nome=Bruno)


// para lemos esse arg primeiro vamos utilizar 
console.log(process.argv);

// podemos subtraílo atraves do indice do array
const args = process.argv.slice(2);
console.log(args);

// agora para resgatarmos apenas o nome podemos utilizar
// o split do javascript para separarmos a string
// gerando assim um novo array de dois elementos
// em seguida pegamos o segundo indice gerado

const nome = args[0].split('=')[1];
console.log(`nome: ${nome}`)

const idade = args[1].split('=')[1];
console.log(`idade: ${idade}`)
