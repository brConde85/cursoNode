const fs = require('fs'); // import file system

/* 
 * para o 'readfile' temos nome do arquivo como primeiro paramentro,
 * em seguida para o encode do arquivo para acentuação e outros e
 * 
 */  
fs.readFile('arquivo.txt', 'utf8', (error, data) => {
  if (error) {    
    return console.log(error);
  }
  console.log(data);
});