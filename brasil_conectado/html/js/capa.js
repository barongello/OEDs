/**** Insira nos campos as informações para a Capa ***/
var capa = {
    titulo : "Brasil Conectado",
    foto : "../intro_files/img/intro.jpg", /* 590 x 530 */
    descricao : "<p style=\"font-size: 20px; line-height: 30px;\">A velocidade da internet pode variar muito de uma cidade para outra no Brasil. Enquanto algumas cidades possuem uma velocidade alta de conexão, outras estão conectadas à rede mundial de computadores em velocidades baixas. Essas diferenças na velocidade dos dados não ocorre de forma aleatória. Como a geografia pode explicar esse fenômeno?</p>",
    instrucao : "<p style=\"font-size: 26px; font-weight: bold; line-height: 30px;\">Selecione os mapas um a um e, com base nas informações no mapa e nos seus conhecimentos, selecione a alternativa correta para cada teste.</p>", /* deixar string vazia se não houver texto de instrução */
    creditos1:     "<strong>Marcelo Zanon</strong> <br>"+
                "<em>Gerente de publicações</em> <br> <br>"+
                "<strong>Laís Tubertini</strong> <br>"+
                "<em>Gerente editorial</em> <br> <br>"+                
                "<strong>Alício Leva</strong> <br>"+
                "<em>Editor responsável</em> <br> <br>"+
                "<strong>Edilene Rodrigues</strong> <br>"+
                "<em>Editora adjunta</em> <br> <br>"+
                "<strong>Maíra Carcelen de Souza</strong> <br>"+
                "<em>Coordenadora do Editorial de Ciências Humanas</em> <br> <br>"+
                "<strong>Ana Paula Barranco</strong> <br>"+
                "<em>Coordenadora de conteúdo digital</em>",                
                
    creditos2:    "<strong>Bruno Gaspar</strong> <br>"+
                "<em>Assistente de conteúdo digital</em> <br> <br>"+
                "<strong>Adriano Rangel Liziero</strong> <br>"+
                "<em>Roteiro e produção textual</em> <br> <br>"+
                "<strong>Eliel Silveira Cunha</strong> <br>"+
                "<strong>Edna Adorno</strong> <br>"+
                "<em>Preparação de originais</em> <br> <br>"+
                "<strong>Débora Tamayose Lopes</strong> <br>"+
                "<strong>Roseli Gonçalves</strong> <br>"+
                "<em>Revisão textual</em> <br> <br>"+
                "<strong>Iron Mantovanello</strong> <br>"+
                "<em>Pesquisa iconográfica</em> <br> <br>"+
                "<strong>Atheva</strong> <br>"+
                "<em>Desenvolvimento e ilustrações</em>",
    //Array contendo todos os arquivos de imagem , som e video necessarios para o objeto apartir da raiz        
    sources: [ 
        "img/background.png",
	"img/checkbox_notchecked.png",
	"img/checkbox_checked.png",
	"img/map_0.png",
	"img/map_1.jpg",
	"img/map_2.jpg",
	"img/map_3.jpg",
	"img/map_4.jpg",
	"img/legend_map_1.png",
	"img/legend_map_2.png",
	"img/legend_map_3.png",
	"img/legend_map_4.png"
    ],
    callback: 'gameInit' //Função de callback ao se iniciar o OED. Passasse o nome da função desejada, sem parametros. Se for nula nada acontece.
}
/**** fim ***/