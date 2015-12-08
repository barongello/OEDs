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
	  html: document.querySelector('html'),
	  head: document.querySelector('head'),
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
	  init : function (){
	  	var css = document.createElement('link');
		css.rel = 'stylesheet'; css.href = 'intro_files/css/style.css';
		var head = document.querySelector('head');
		var html5shiv = document.createElement('script'); html5shiv.src = "intro_files/js/html5shiv.js";
		head.appendChild(css);
		head.appendChild(html5shiv);
		if(document.addEventListener) document.addEventListener("DOMContentLoaded",OUP.load);  
		else if(document.attachEvent){document.onreadystatechange = function (){ if(document.readyState == "complete") OUP.load(); }};
	  },
	  load : function(){
	  		OUP.body = document.body;
	  		var loadGif = document.createElement('img'); loadGif.src="intro_files/img/load.gif"; loadGif.style.position = "absolute"; loadGif.style.top = "310px"; loadGif.style.left = "455px";
			OUP.body.appendChild(loadGif);
			var preloader = document.createElement('script'); preloader.type = "text/javascript"; preloader.src = "intro_files/js/html5Preloader.js";			
						
			var browser = getBrowser();

			if(browser == "Internet Explorer 9"){
				loadGif.parentNode.removeChild(loadGif);
				OUP.renderAnimation();
			}else{
				preloader.onload  = function(){			
					capa.sources.concat(OUP.sources);
					var myLoader = html5Preloader.apply(undefined,capa.sources);
					myLoader.on('finish',function(){loadGif.parentNode.removeChild(loadGif); OUP.renderAnimation();});
					myLoader.on('error',function(){console.log('Erro de carregamento da capa!')});
				};
				OUP.head.appendChild(preloader);
			}
			
	  },
	  resize : function (){
	    height = window.innerHeight,
	    width = window.innerWidth,
	    scale = Math.min(1,height/768,width/1024);
	    OUP.body.style['-webkit-transform'] = 'scale('+scale+')';
	    OUP.body.style['-ms-transform'] = 'scale('+scale+')';
	    OUP.body.style['-moz-transform'] = 'scale('+scale+')';
	    OUP.body.style['transform'] = 'scale('+scale+')';	    
	    OUP.body.style.width = ((width/scale).toString()+"px");
	    OUP.body.style.height =  ((height/scale).toString()+"px");
	   	OUP.html.style.width = (width+"px");
	    OUP.html.style.height =  (height+"px");
	    window.zoomScale = scale;
	  },
	  renderAnimation:function (){	  	
	  	OUP.renderCapa();
	  	OUP.creditos.render();
	  	OUP.finalizar.render();
	  	OUP.shadowBox.render();
		var capa = document.createElement('div'); capa.id="OUP-capa";
		var logo = document.createElement('img'); logo.id="OUP-logo-intro"; logo.src = "intro_files/img/oup-logo.png";
	  	capa.appendChild(logo);
	  	OUP.container.appendChild(capa);
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
		  	OUP.container.removeChild(intro);
		  	OED.style.display = "block";
		  	if(btnInstrFlut) btnInstrFlut.style.display = "block";
		  	if(capa.callback != null)
		  		window[capa.callback]();
	  	}

	  	var instrClick = function (){
			OUP.shadowBox.abrir('intr-box',"0,33,71,1"); 		
	  	}

	  	var instrClose = function (){	  		
	  		OUP.shadowBox.fechar();
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
			OUP.shadowBox.init('intr-box',containerInstr);

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
	  	
		OUP.dynamicBG.changeColor(OUP.dynamicBG.defaultColor);

		OED = document.getElementById('OED');
	  	containerInit.appendChild(btnPlay);
	  	intro.appendChild(cabecalho); intro.appendChild(foto); intro.appendChild(descr); intro.appendChild(containerInit);
  	  	
	  	OUP.container = document.createElement('section'); OUP.container.id="OUP-container";
	  	OUP.container.appendChild(intro);
	  	OUP.container.appendChild(OED);
	  	
	  	if(capa.instrucao != ""){ OUP.container.appendChild(btnInstrFlut); containerInit.appendChild(btnInstr);}

  		if(window.addEventListener) window.addEventListener('resize', this.resize, true); else if(window.attachEvent) window.attachEvent('resize',this.resize);
  		OUP.body.appendChild(OUP.container);

  		OUP.resize();
	  },
	  reload:function (){
	  	window.location.reload();
	  },
	  close:function (){
	  	window.location.close();
	  },
	  creditos : {
	  	//funções do credito
	  	abrir:function (){
	  		OUP.dynamicBG.changeColor("#E7B513");
	  		OUP.shadow_box.style.display = "none";
	  		OUP.containerCredito.style.display="block";
	  	},

	  	fechar:function (){	  		
	  		OUP.dynamicBG.changeColor(OUP.dynamicBG.defaultColor);
	  		OUP.containerCredito.style.display="none";	  		
	  		OUP.shadow_box.style.display = "block";
	  	},
	  	//renderizador dos creditos
	  	render:function (){
	  		OUP.containerCredito = document.createElement('div'); OUP.containerCredito.id="OUP-container-creditos";
	  		var creditos = document.createElement('div'); creditos.id="OUP-creditos";
	  		var textBox = document.createElement('div'); textBox.id="OUP-textbox";
	  		var texto_titulo = document.createElement('p'); texto_titulo.id="OUP-texto-titulo"; texto_titulo.innerHTML = "CRÉDITOS";
	  		var texto1 = document.createElement('p'); texto1.id="OUP-texto1"; texto1.innerHTML= capa.creditos1;
	  		var texto2 = document.createElement('p'); texto2.id="OUP-texto2"; texto2.innerHTML= capa.creditos2;
	  		var btnVoltar = document.createElement('button'); btnVoltar.id="OUP-voltar-creditos";if(document.addEventListener) btnVoltar.addEventListener('click',this.fechar); else if(document.attachEvent) btnVoltar.attachEvent('onclick',this.fechar);
	  		OUP.containerCredito.appendChild(btnVoltar);
	  		textBox.appendChild(texto1);
	  		textBox.appendChild(texto2); 
	  		creditos.appendChild(texto_titulo);
	  		creditos.appendChild(textBox);
	  		OUP.containerCredito.appendChild(creditos);
	  		OUP.container.appendChild(OUP.containerCredito);
	  	}
	  },
	  finalizar : {
	  	abrir:function(mensagem){
	  		OUP.mensagem.innerHTML = mensagem;
	  		OUP.shadowBox.abrir('box-fim',"202,184,163,0.8");
	  	},
	  	render:function(){
	  		OUP.boxFim = document.createElement('div'); OUP.boxFim.id="OUP-box-fim";
	  		OUP.mensagem = document.createElement('p'); OUP.mensagem.id="OUP-mensagem-final";
	  		var btnReiniciar = document.createElement('button'); btnReiniciar.id="OUP-btn-reiniciar"; if(document.addEventListener) btnReiniciar.addEventListener('click',OUP.reload); else if(document.attachEvent) btnReiniciar.attachEvent('onclick', OUP.reload);
	  		var btnCreditos = document.createElement('button'); btnCreditos.id="OUP-btn-creditos"; if(document.addEventListener) btnCreditos.addEventListener('click',OUP.creditos.abrir); else if(document.attachEvent) btnCreditos.attachEvent('onclick',OUP.creditos.abrir);
	  		var texticulo = document.createElement('p'); texticulo.id="OUP-texticulo-final"; texticulo.innerHTML ="(Para sair do jogo, feche a janela ou a guia de seu navegador.)";
	  		OUP.boxFim.appendChild(OUP.mensagem); OUP.boxFim.appendChild(btnReiniciar); OUP.boxFim.appendChild(btnCreditos); OUP.boxFim.appendChild(texticulo);
	  		OUP.shadowBox.init('box-fim',OUP.boxFim);
	  	}
	  },
	  dynamicBG : {
	  	defaultColor: "#002147",
	  	changeColor:function(color){
	  		OUP.body.style.backgroundColor = color;
	  	}
	  },
	  shadowBox : {
	  	current:null,
	  	box:{},
	  	init:function(id,box){
	  		OUP.shadowBox.box[id] = box;		
	  	},
	  	abrir:function(id,rgba){
	  		if(rgba === undefined) rgba = "0,0,0,0.8";
	  		if(OUP.shadowBox.current !== null)OUP.box_container.removeChild(OUP.shadowBox.box[OUP.shadowBox.current]);
	  		OUP.shadowBox.current = id;
	  		console.log(OUP.shadowBox.box[OUP.shadowBox.current]);
	  		OUP.box_container.appendChild(OUP.shadowBox.box[OUP.shadowBox.current]);
	  		OUP.shadow_box.style.backgroundColor = "rgba("+rgba+")";
	  		OUP.shadow_box.style.display = "block";
	  	},
	  	fechar:function(){
			OUP.shadow_box.style.display = "none";
	  	},
	  	render:function(){
	  		OUP.box_container = document.createElement('div'); OUP.box_container.id = "OUP-box-container";
	  		OUP.shadow_box = document.createElement('section'); OUP.shadow_box.id = "OUP-shadow-box"; OUP.shadow_box.appendChild(OUP.box_container);
	  		OUP.body.appendChild(OUP.shadow_box);
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