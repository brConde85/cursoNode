import chalk from 'chalk';

const nota = 10;

(nota >= 7) ?
  console.log(
    chalk.bgGreen.black('Parabéns vc foi aprovado!!!\n')
    + chalk.blue.bold('Sua nota foi:',nota)
  )
  : (nota < 7 && nota > 5) ?
    console.log(
      chalk.bgYellow('Vc ficou em recuperação!\n')
      + chalk.yellow.bold('Sua nota foi:',nota)
    )
      : console.log(
        chalk.bgRed('Vc foi reprovado!\n')
        + chalk.red.bold('Sua nota foi:',nota)
      );