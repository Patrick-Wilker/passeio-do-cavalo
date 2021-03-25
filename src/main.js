var readline = require('readline');
var x;
var y;

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

    console.log("\nA posição que o cavalo começa e' " + x + y);

    mostra_movimento(x, y)
    
    leitor.close();
});

function aceitavel(x, y){
  console.log('aceitavel')
  return (x >= 0 && x <= num - 1 && y >= 0 && y <= num - 1  && tabuleiro[x][y] == 0) ?  true :  false;
}

function tenta_mover(i, x, y){
    let done = (i > numSqr ) ? true : false;
    let k = 0;
    while (done == false && k < 8){
      console.log('tenta mover > while')
      u = x + dx[k]
      v = y + dy[k]
      console.log(u)
      console.log(v)
      if (aceitavel(u, v)){
        console.log('tenta mover > while > if aceitavel')
        tabuleiro[u][v] = i
        done = tenta_mover(i + 1, u, v)
        if (done == false){
            tabuleiro[u][v] = 0;
        }
      }
      k += 1;
    }
    return done
}

function mostra_movimento(x, y){
    tabuleiro[x][y] = 1
    done = tenta_mover(2, x, y)
    string = ""
    if(done){
        for (x in range(0, num)){
            for (y in range(0, num)){
                if (tabuleiro[x][y] < 10){
                    string += "0" + String(tabuleiro[x][y]) + " "
                }
                else
                    string += String(tabuleiro[x][y]) + " "
            }
            string += "\n"
        }
        console.log(string)
    }else{
      console.log("Nao ha passeio possivel\n")
    }
}
var dx = [2, 1, -1, -2, -2, -1, 1, 2]
var dy = [1, 2, 2, 1, -1, -2, -2, -1]

var num = 6; //numero de posições do tabuleiro
var numSqr = num * num //Numero total de casas

var tabuleiro = [[], [], [], [], [], [], [], [], [], []];
for (x in range(0, num)){
  for (y in range(0, num)){
    tabuleiro[x].push(0)
  }
}

function range(_start_, _end_) {
  return (new Array(_end_ - _start_ + 1)).fill(undefined).map((_, k) =>k + _start_);
}