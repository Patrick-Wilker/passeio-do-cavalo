var readline = require('readline');
var x;
var y;

var eixoX = [2, 1, -1, -2, -2, -1, 1, 2]
var eixoY = [1, 2, 2, 1, -1, -2, -2, -1]

var tabuleiro = []

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Entre com as posições (duas casas decimais)?\n", function(answer) {
    var resp = answer;
    resp = resp.split('');
    x = resp[0];
    y = resp[1];

    if(resp.length != 2){
      console.error('Deve ser um número com duas casas decimais')
      return
    }

    if(!converteParaNumero(x)){
      console.log("Entrada inválida")
      return
    }

    x = converteParaNumero(x);

    if(validaConversaoParaNumero(x)){
      console.log("Dados de entrada incorretos!")
      console.log("Lembre-se de ser uma letra minúscula e um número!")
      return
    }

    mover(x, y)
    imprimir(resp[0], resp[1])

    leitor.close();
});


function repete(x, y){
  for(let i = 0; i<tabuleiro.length;i++){
    if(x == tabuleiro[i][0] && y == tabuleiro[i][1]){
      return true;
    }
  }
  return false;
}

function podeMover(x, y){
  if(x > 0 && x < 9 && y > 0 && y < 9){
    return true
  }
  return false
}

function mover(x, y){
  y = Number(y)
  let count = 0;
  let newPosition = []
  while(count < 8){
    let somaX = Number(eixoX[count] + x)
    let somaY = Number(eixoY[count] + y)
    if(podeMover(somaX, somaY)){
      if(!repete(somaX, somaY)){
        newPosition = [somaX, somaY]
        tabuleiro = [...tabuleiro, newPosition]
        mover(somaX, somaY)
      }
    }
    count++;
  }

  return false;
}

function imprimir(x, y){
  console.log('./ cavalo '+x+y)
  for(let i = 0; i<tabuleiro.length;i++){
    tabuleiro[i][0] = (converteParaLetra(tabuleiro[i][0]))
  }
  for(let j = 0; j<tabuleiro.length;j++){
    console.log(tabuleiro[j][0], tabuleiro[j][1])
  }
}

function validaConversaoParaNumero(x){
  if(x < 1 || x > 8)
    return false;
}

function converteParaNumero(x){
  if(x == 'a'){
    return 1;
  }else if(x == 'b'){
    return 2;
  }else if(x == 'c'){
    return 3;
  }else if(x == 'd'){
    return 4;
  }else if(x == 'e'){
    return 5;
  }else if(x == 'f'){
    return 6;
  }else if(x == 'g'){
    return 7;
  }else if(x == 'h'){
    return 8;
  }
  return false;
}

function converteParaLetra(x){
  if(x == 1){
    return 'a';
  }else if(x == 2){
    return 'b';
  }else if(x == 3){
    return 'c';
  }else if(x == 4){
    return 'd';
  }else if(x == 5){
    return 'e';
  }else if(x == 6){
    return 'f';
  }else if(x == 7){
    return 'g';
  }else if(x == 8){
    return 'h';
  }
  return false;
}

