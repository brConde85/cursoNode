// mais de um valor para impressão
const x = 10;
const y = 'opa';
const z = [1,2.3,'eita'];

console.log(`${x}\n${y}\n${z}`);
console.log(`------------------------------`);

//contagem de valores para verificar em um loop por exemplo quantas vezes foi executado
console.count(`o valor de x é: ${x}, contagem`);
console.count(`o valor de x é: ${x}, contagem`);
console.count(`o valor de x é: ${x}, contagem`);
console.count(`o valor de x é: ${x}, contagem`);
console.log(`------------------------------`);

// realizar a impressão entre strings com %s
console.log('testando a impressão de x: %s',x);

// limpar o console
setTimeout(() => {
  console.clear();
}, 2000)