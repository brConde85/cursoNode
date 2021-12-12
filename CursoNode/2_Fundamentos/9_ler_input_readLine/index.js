const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Digite sua linguagem preferida: ', (language) => {
  if(language === 'Python') {
    console.log('Eita, isso nem é linguagem!!!')
  }else {
    console.log(`Sua linguagem preferida é: ${language}`);
  }  
  readline.close()
});
