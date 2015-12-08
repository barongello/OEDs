/*
#
##  
....?77+~:~+777,....:777777....:7777777:..=77777777777 I.....:?77+::~7 7+......7777777777I,.......77777 777777=:........
..+77~.......:777+......7777~....77,.........7 7:.....,7....777........~7 7......7 7....~  7:.......,7 7......77 7?.....
.7  :.......... 7 ,......+7 7...~7:..........?77:......7..:7 7,.........I  I.....7 7.....77 7........7 7......., 7 ?....
+7 7...........=7 7~......? 77.,7............? 7:.........7  ............7 7:....7  .....7  +........7 7........, 77~...
7 7?............  77.......I7 77.............?77:........~ 77............7 77....777...:I 7?.........7 7.........7777...
77 =............7 77........+ 7 .............?777 777....= 77............?777:...777,~7 7?...........7 7.........?7 7:..
7  ?............7  7.......:777 7............?77:...7....: 77............7 77....777..777I...........7 7.........I7 7...
= 77...........:  7~......:7~.?777+..........?77:...,..... 7 :...........7 7~....777...77 7+.........7 7.........777,...
.7  :..........I7 +.......7,...=77 ..........?77:.........I7 7,.......... 77.....777....~7 7+........7 7........=7 ?....
..+  7........= 7+......I7=.....=  7:.......=7 7=...........777:........7 7......7 7......I7 7I.....: 77......,? I:.....
....+7 7?::~777,....=7777777~....=77777777777777777+.........,? 77~::+77=........777777:.....I7777777 77777777+:........
.......:====....................................................,~===:..................................................
........................................................................................................................
##
#
*/
var OED;
var OUP = {
	  sources:['intro_files/img/box-fim.png',
			   'intro_files/img/btn-creditos.png',
			   'intro_files/img/btn-fechar.png',
			   'intro_files/img/btn-instr.png',
			   'intro_files/img/btn-play.png',
			   'intro_files/img/btn-reiniciar.png',
			   'intro_files/img/btn-voltar.png',
			   'intro_files/img/instrucao.png',
			   'intro_files/img/oup-logo.png',
			   'intro_files/img/background-final.png'
	  ],
	  load: function(){
	  		var loadGif = document.createElement('img'); loadGif.src="intro_files/img/load.gif"; loadGif.style.position = "absolute"; loadGif.style.top = "310px"; loadGif.style.left = "455px";
			document.body.appendChild(loadGif);
	  		var head = document.querySelector('head');
			var preloader = document.createElement('script'); preloader.type = "text/javascript"; preloader.src = "intro_files/js/html5Preloader.js";			
			
			var browser = getBrowser();

			if(browser == "Internet Explorer 8"){
				loadGif.parentNode.removeChild(loadGif);
				OUP.renderAnimation();
			}else{
				preloader.onload  = function(){			
					capa.sources.concat(OUP.sources);
					var myLoader = html5Preloader.apply(undefined,capa.sources);
					myLoader.on('finish',function(){loadGif.parentNode.removeChild(loadGif); OUP.renderAnimation();});
					myLoader.on('error',function(){console.log('Erro de carregamento da capa!')});
				};
				head.appendChild(preloader);
			}
			
	  },
	  init : function (){
	  	var css = document.createElement('link');
		css.rel = 'stylesheet'; css.href = 'intro_files/css/style.css';
		var head = document.querySelector('head');
		var html5shiv = document.createElement('script'); html5shiv.src = "intro_files/js/html5shiv.js";
		head.appendChild(css);
		head.appendChild(html5shiv);
		if(window.addEventListener) window.addEventListener('resize', this.resize, true); else if(window.attachEvent) window.attachEvent('resize',this.resize);
		this.resize();
		if(document.addEventListener) document.addEventListener("DOMContentLoaded",OUP.load); 
		else if(document.attachEvent){document.onreadystatechange = function (){ if(document.readyState == "complete") OUP.load(); }};
	  },
	  resize: function (){
	    var html = document.getElementsByTagName('html')[0],
	    height = window.innerHeight,
	    width = window.innerWidth,
	    scale = Math.min(1,height/768,width/1024);
	    html.style['-webkit-transform'] = 'scale('+scale+')';
	    html.style['transform'] = 'scale('+scale+')';
	    window.zoomScale = scale;
	  },
	  renderAnimation:function (){	  	
	  	OUP.renderCapa();
	  	OUP.creditos.render();
	  	OUP.finalizar.render();
	  	var body = document.querySelector('body');
		var capa = document.createElement('div'); capa.id="OUP-capa";
		var logo = document.createElement('img'); logo.id="OUP-logo-intro"; logo.src = "intro_files/img/oup-logo.png";
	  	capa.appendChild(logo);
	  	body.appendChild(capa);
	  	OUP.animationInit();
	  },
	  animationInit: function (){
	  	var capa = document.getElementById('OUP-capa');
	  	var logo = document.getElementById('OUP-logo-intro');
	  	fadeIn(logo,50,function(){setTimeout(function(){fadeOut(capa,50)},500);});	  	
	  },
	  renderCapa: function (){
		//funções da capa
	  	var playClick = function (){
		  	document.body.removeChild(intro);
		  	OED.style.display = "block";
		  	if(btnInstrFlut) btnInstrFlut.style.display = "block";
		  	if(capa.callback != null)
		  		window[capa.callback]();
	  	}

	  	var instrClick = function (){
	  		containerInstr.style.display = "block";	  		
	  	}

	  	var instrClose = function (){
	  		containerInstr.style.display = "none";
	  		if(btnInstrFlut = document.getElementById("OUP-btn-instr-flut"))
	  			btnInstrFlut.style.display = "block";	  		
	  	}

	  	//div intro
	  	var intro = document.createElement('div'); intro.id="OUP-intro";
	  	//cabeçalho  	
	  	var cabecalho = document.createElement('header'); cabecalho.id="OUP-cabecalho";
	  	var logo = document.createElement('img'); logo.id="OUP-logo"; logo.src="intro_files/img/oup-logo.png";	  	
	  	var nodeTxtTitulo = document.createTextNode(capa.titulo);
	  	var titulo = document.createElement('p'); titulo.id="OUP-titulo"; titulo.appendChild(nodeTxtTitulo);
	  	cabecalho.appendChild(logo); cabecalho.appendChild(titulo);
	  	//foto customizavel
	  	var foto = document.createElement('img'); foto.id="OUP-foto"; foto.src = "img/"+capa.foto;
	  	//descrição customizavel
	  	var descr = document.createElement('p'); descr.id="OUP-descr"; descr.className="OUP-txt-descr"; descr.innerHTML = capa.descricao;
	  	//conteiner de botões iniciar e insturnções
	  	var containerInit = document.createElement('div'); containerInit.id = "OUP-container-init";
	  	//botão de iniciar
	  	var btnPlay = document.createElement('div'); btnPlay.id="OUP-btn-play"; if(document.addEventListener) btnPlay.addEventListener('click',playClick); else if(document.attachEvent) btnPlay.attachEvent('onclick',playClick) ;
	  	var imgPlay = document.createElement('img'); imgPlay.src="intro_files/img/btn-play.png";
	  	var nodeTxtPlay = document.createTextNode("INICIAR");
	  	var txtPlay = document.createElement('p'); txtPlay.className="OUP-txt-btn"; txtPlay.appendChild(nodeTxtPlay);
	  	btnPlay.appendChild(imgPlay); btnPlay.appendChild(txtPlay);
	  	
	  	if(capa.instrucao != ""){
	  		//botão de instrução
		  	var btnInstr = document.createElement('div'); btnInstr.id="OUP-btn-instr"; if(document.addEventListener) btnInstr.addEventListener('click',instrClick); else if(document.attachEvent) btnInstr.attachEvent('onclick',instrClick);
		  	var imgInstr = document.createElement('img'); imgInstr.src="intro_files/img/btn-instr.png";
		  	var nodeTxtInstr = document.createTextNode("INSTRUÇÕES");
		  	var txtInstr = document.createElement('p'); txtInstr.className="OUP-txt-btn"; txtInstr.appendChild(nodeTxtInstr);
		  	btnInstr.appendChild(imgInstr);
		  	btnInstr.appendChild(txtInstr);

		  	//caixa de instrução
	  		var containerInstr = document.createElement('div'); containerInstr.id="OUP-container-instr";
		  	var instr = document.createElement('div'); instr.id="OUP-instr";
		  	var imgFechar = document.createElement('img'); imgFechar.id="OUP-btn-fechar"; imgFechar.src="intro_files/img/btn-fechar.png"; if(document.addEventListener) imgFechar.addEventListener('click',instrClose); else if(document.attachEvent) imgFechar.attachEvent('onclick',instrClose);
		  	var nodeTxtTituloInstr = document.createTextNode("INSTRUÇÕES");
		  	var tituloInstr = document.createElement('p'); tituloInstr.id="OUP-titulo-instr"; tituloInstr.className="OUP-txt-descr"; tituloInstr.appendChild(nodeTxtTituloInstr);
		  	var descrInstr = document.createElement('p'); descrInstr.id="OUP-descr-instr"; descrInstr.className="OUP-txt-descr"; descrInstr.innerHTML = capa.instrucao;
		  	instr.appendChild(imgFechar); instr.appendChild(tituloInstr); instr.appendChild(descrInstr);
		  	containerInstr.appendChild(instr);

		  	//instrução fluturante
		  	var btnInstrFlut = document.createElement('img'); btnInstrFlut.id="OUP-btn-instr-flut"; btnInstrFlut.src = "intro_files/img/instrucao.png" 
		  	
		  	function flutuante(){	
		  		btnInstrFlut.style.display = "none";
		  		instrClick();
		  	}

		  	if(document.addEventListener) btnInstrFlut.addEventListener('click', flutuante); else if(document.attachEvent) btnInstrFlut.attachEvent('onclick', flutuante);
	  	}else{
	  		containerInit.style.bottom = "-90px"
	  	}

	  	//inclui as divs em seus containers pais
	  	 	  	
	  	containerInit.appendChild(btnPlay); 
	  	intro.appendChild(cabecalho); intro.appendChild(foto); intro.appendChild(descr); intro.appendChild(containerInit);

	  	if(capa.instrucao != ""){ document.body.appendChild(btnInstrFlut); document.body.appendChild(containerInstr); containerInit.appendChild(btnInstr);}

	  	document.body.appendChild(intro);
	  	console.log(this);
	  	OED = document.getElementById('OED');  	

	  },
	  reload:function (){
	  	window.location.reload();
	  },
	  close:function (){
	  	window.location.close();
	  },
	  creditos : {
	  	containerCredito : "teste",
	  	//funções do credito
	  	abrir:function (){
	  		document.getElementById('OUP-container-creditos').style.display="block";
	  	},

	  	fechar:function (){
	  		document.getElementById('OUP-container-creditos').style.display="none";
	  	},
	  	//renderizador dos creditos
	  	render:function (){
	  		this.containerCredito = document.createElement('div'); this.containerCredito.id="OUP-container-creditos";
	  		var creditos = document.createElement('div'); creditos.id="OUP-creditos";
	  		var textBox = document.createElement('div'); textBox.id="OUP-textbox";
	  		var texto_titulo = document.createElement('p'); texto_titulo.id="OUP-texto-titulo"; texto_titulo.innerHTML = "CRÉDITOS";
	  		var texto1 = document.createElement('p'); texto1.id="OUP-texto1"; texto1.innerHTML= capa.creditos1;
	  		var texto2 = document.createElement('p'); texto2.id="OUP-texto2"; texto2.innerHTML= capa.creditos2;
	  		var btnVoltar = document.createElement('button'); btnVoltar.id="OUP-voltar-creditos";if(document.addEventListener) btnVoltar.addEventListener('click',this.fechar); else if(document.attachEvent) btnVoltar.attachEvent('onclick',this.fechar);
	  		this.containerCredito.appendChild(btnVoltar);
	  		textBox.appendChild(texto1);
	  		textBox.appendChild(texto2); 
	  		creditos.appendChild(texto_titulo);
	  		creditos.appendChild(textBox);  	
	  		this.containerCredito.appendChild(creditos); 
	  		document.body.appendChild(this.containerCredito);
	  	}
	  },
	  finalizar: {
	  	abrir:function(mensagem){
	  		document.getElementById("OUP-mensagem-final").innerHTML = mensagem;
	  		document.getElementById("OUP-container-fim").style.display = "block";
	  	},
	  	render:function(){
	  		var conteinerFim = document.createElement('div'); conteinerFim.id="OUP-container-fim";
	  		var boxFim = document.createElement('div'); boxFim.id="OUP-box-fim";
	  		var mensagem = document.createElement('p'); mensagem.id="OUP-mensagem-final";
	  		var btnReiniciar = document.createElement('button'); btnReiniciar.id="OUP-btn-reiniciar"; if(document.addEventListener) btnReiniciar.addEventListener('click',OUP.reload); else if(document.attachEvent) btnReiniciar.attachEvent('onclick', OUP.reload);
	  		var btnCreditos = document.createElement('button'); btnCreditos.id="OUP-btn-creditos"; if(document.addEventListener) btnCreditos.addEventListener('click',OUP.creditos.abrir); else if(document.attachEvent) btnCreditos.attachEvent('onclick',OUP.creditos.abrir);
	  		var texticulo = document.createElement('p'); texticulo.id="OUP-texticulo-final"; texticulo.innerHTML ="(Para sair do jogo, feche a janela ou a guia de seu navegador.)";
	  		boxFim.appendChild(mensagem); boxFim.appendChild(btnReiniciar); boxFim.appendChild(btnCreditos); boxFim.appendChild(texticulo);
	  		conteinerFim.appendChild(boxFim);
	  		document.body.appendChild(conteinerFim);
	  	}
	  }
}

var fadeOut = function (element,time,callback){
	var i = 10;
	var out = setInterval(function (){
		var opacity = i/10;
		element.style.opacity = opacity;
		i--;
		if(i==0){
			element.parentNode.removeChild(element);
			if(callback != undefined) callback();
			clearInterval(out);
		}
	},time);
}

var fadeIn = function (element,time,callback){
	var i = 0;
	var fin = setInterval(function (){
		var opacity = i/10;
		element.style.opacity = opacity;
		i++;
		if(i==10){
			clearInterval(fin);
			callback();
		}
	},time);
}

var getBrowser = function(){
	if (navigator.appName == 'Microsoft Internet Explorer'){			 
	    var rv = -1;	
	    var ua = navigator.userAgent;
	    var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
	    if (re.exec(ua) != null)
	        return "Internet Explorer "+parseFloat( RegExp.$1 );	      
	}
}

OUP.init();