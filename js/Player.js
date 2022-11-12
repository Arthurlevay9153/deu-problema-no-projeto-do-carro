class Player {
  constructor() {

    this.name = null;

    this.index = null;

    this.positionx = 0;

    this.postiony = 0;





  }

 //as funcoes da classes não precisao comecar com "function"

 //funcao para contar quanto playes tem no jogo
  obtercontagem(){

    var contagem=database.ref("playerCount") //playerCount = contagem de player
    contagem.on("value",(data)=>{

      playerCount = data.val() //val = valor/value

    })

  }

  //funcao de atualizar a contagem de players/jogadores
  atualizarcontagem(valor){

    // "/" = banco de dados
    database.ref("/").update({ //atualizar o banco de dados

      playerCount: valor

    }) 

  }

  //funcao de adicionar um player
  addplayer(){

    //criar os players no banco de dados
    var players = "players/player"+this.index


    //caso seja o player 1 o carro/jogador vai ficar mais na esqueda(width/2-100)
    if(this.index===1){

      this.positionx = width/2-100

    }

    //caso não seja o player 1(ou seja o player 2) o carro vai ficar mais na direita(width/2+100)
    else{

      this.positionx = width/2+100

    }

    //entar no banco de dados na pasta "players"
    database.ref(players).set({

      //pegar o nome colocado no jogo e gravar no banco de dados
      //EX: o nome do jogaor se chama "Tom" aí o banco de dados vai saber que o nome do jogador se cham "Tom"
      name: this.name,

      positionx: this.positionx,

      positiony: this.positiony,

    })

  }

  //funcao de ler dados de todos os jogadores ao mesmo tempo
  static readPlayers(){

    var playersref = database.ref("players")

    //ler os dados do jogadores todo momento
    playersref.on("value",(data)=>{

      todosplayers = data.val()


    })


  }

}


