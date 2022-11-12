class Game {
  constructor() {}

  //funcao de vericar se o jogo estiver funcionando, seu estado
  obterEstado(){

    var estado=database.ref("gameState") //gameState = estado do jogo/database
    estado.on("value",(data)=>{

      gameState = data.val() //val = valor/value

    })

  }

  //funcao de atualizar o estado do jogo
  atualizarEstado(valor){

    // "/" = banco de dados
    database.ref("/").update({ //atualizar o banco de dados

      gameState: valor

    }) 

  }

  start() {
    form = new Form(); //cria o formulario

    form.display(); //mostra o formulario na tela pro jogador

    player = new Player();

    player.obtercontagem();

    //-----------------------------------------------------------------------

    //posicao do carro 1
    carro1 = createSprite(width/2-50,height-100);
    
    //carregar a imagem do carro 1
    carro1.addImage("carro",carroimagem1);

    //tamanho da imagem do carro1 (porque o tamanho da imagem é grande)
    carro1.scale = 0.07

    //posicao do carro 2
    carro2 = createSprite(width/2+100,height-100);

    //carregar a imagem do carro 2
    carro2.addImage("carro",carroimagem2);

    //tamanho da imagem do carro2 (porque o tamanho da imagem é grande)
    carro2.scale = 0.07

    //carros = grupo de carros (carro 1 e 2)
    carros = [carro1,carro2];
  }

  play(){

    //esconder o formulario
    form.hide();

    //ler o jogadores
    Player.readPlayers();


    if (todosplayers!==undefined){

      image(pista,0,-height*5,width,height*6);

      drawSprites();

    }
  }

}

