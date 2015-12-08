/*
 *      FTD Capa v.1.0.13 | (c) 2013 Editora FTD - Capa do PNLD 2015
 */
(function(){
  var _css = document.createElement('link');
  _css.rel = 'stylesheet'; _css.href = 'ftd/capa/estilo.css';
  document.querySelector('head').appendChild(_css);
})();
/*
 *      start: Daccord - Stub LED for Sandbox v.1.6.0
 */
this.LED = { __args:{}, __argId:0, onLoad:null, NO_CB:function(){} };
function __initLED(forceAndroid){
  var msg;
  if( forceAndroid == 1 ){
    var callbacks = {}, nextCBid = 0;    
    LED.playVideo = function (videoFileName, cb) {
      callbacks[++nextCBid] = cb; __Android.playVideo(videoFileName, nextCBid);
    };
    LED.playAudio = function(soundFileName, cb) {
      callbacks[++nextCBid] = cb; __Android.playSound(soundFileName, nextCBid);
    };
    LED.playAudio = function(soundFileName, doLoop, cb) {
      callbacks[++nextCBid] = cb; __Android.playSound(soundFileName, doLoop, nextCBid);
    };
    LED.callBrowser = function(URL, cb) {
      callbacks[++nextCBid] = cb; __Android.callBrowser(URL, nextCBid);
    };
    LED.storeAppData = function (data, cb ) {
      callbacks[++nextCBid] = cb; __Android.storeAppData(escape(data), nextCBid);
    };
    LED.loadAppData = function loadAppData( cb ) {
      callbacks[++nextCBid] = function(data, erro){
        if(data!="") data = unescape(data); cb(data, erro);
      };
      return __Android.loadAppData( nextCBid );
    };
    LED.disableAllSounds = function(cb) {
      callbacks[++nextCBid] = cb; __Android.disableAllSounds(nextCBid);
    };
    LED.enableAllSounds = function(cb) {
      callbacks[++nextCBid] = cb; __Android.enableAllSounds(nextCBid);
    };
    LED.closeWidget = function(cb) {
      callbacks[++nextCBid] = cb; __Android.closeWebView(nextCBid);
    };
    LED.killAllSounds = function(cb) {
      callbacks[++nextCBid] = cb; __Android.killAllSounds(nextCBid);
    };
    LED.reloadWidget = function(cb) {
      callbacks[++nextCBid] = cb; __Android.reloadWidget(nextCBid);
    };
    LED.__callback = function(id){
      var args = Array.prototype.splice.call(arguments, 1);
      callbacks[id].apply( null, args ); delete callbacks[id];
    };
    return;
  } else if( window.__jfxLED ) {
    msg = function() {
      LED.__args = Array.prototype.splice.call(arguments, 0);
      try { window.__jfxLED.msg(); }catch(e) { log(e.message); }
    };
  } else {
    msg = function(){
      var args = Array.prototype.splice.call(arguments, 0); LED.__argId++; LED.__args[LED.__argId] = args;
      window.location.href = 'led://' + args.shift() + "?" + LED.__argId;
    };
    LED.deleteArg = function (id){ delete LED.__args[id]; };
  }
  LED.loadAppData = msg.bind(null, 'loadAppData');
  LED.playAudio = msg.bind(null, 'playAudio');
  LED.storeAppData = msg.bind(null, 'storeAppData');
  LED.callBrowser = msg.bind(null, 'callBrowser');
  LED.playVideo = msg.bind(null, 'playVideo');
  LED.disableAllSounds = msg.bind(null, 'disableAllSounds');
  LED.enableAllSounds = msg.bind(null, 'enableAllSounds');
  LED.closeWidget = msg.bind(null, 'closeWidget');
  LED.killAllSounds = msg.bind(null, 'killAllSounds');
  LED.reloadWidget = msg.bind(null, 'reloadWidget');
  if( LED.onLoad ) LED.onLoad();
}
/*
 *      end: Daccord - Stub LED for Sandbox v.1.6.0
 */
_FTD_capa = {
  version: "1.1.0",
  config: window._FTD_capa_config ? _FTD_capa_config : {},
  medias: function(){
    return document.querySelectorAll('audio,video');
  },
  retorno: "",
  lang: document.querySelector('html').lang ? document.querySelector('html').lang.replace('-','') : "ptBR",
  i18n: {
    ptBR: { creditos: "Créditos", ajuda: "Ajuda" },
    en: { creditos: "Credits", ajuda: "Help" },
    es: { creditos: "Créditos", ajuda: "Ayuda" }
  },
  playAudio: function(audio, loop){
    try {
      if(loop) LED.playAudio(audio, loop, function(error){ _FTD_capa.retorno += error });
      else LED.playAudio(audio, function(error){ _FTD_capa.retorno += error });
    }
    catch(fail) { 
      var _b = document.querySelector('body'),
          _a = document.createElement('audio'),
          _i = document.querySelector('#_FTD_som'),
          _p = document.querySelector("#_FTD_capa_audio"),
          _e = '';
      if(loop) _a.loop = 'true';
      if(!!_p) _p.parentNode.removeChild(_p);
      _a.id = "_FTD_capa_audio";
      _a.src = audio;
      _a.volume = (_i&&_i!=null) ? 1 : 0;
      _a.autoplay = true;
      _e += "<scr"+"ipt>window.open(audio,null);return false;</scr"+"ipt>";
      _b.insertBefore(_a, _b.childNodes[0]);
      _a.innerHTML = _e;
    }
  },
  volume: function(){
    var _i = document.querySelector('#_FTD_som');
    if(_i&&_i!=null) return 1;
    else return 1; //else return 0;
  },
  playVideo: function(video){
    try {
      LED.playVideo(video, function(error){ _FTD_capa.retorno += error });
    }
    catch(fail) { window.open(video, null); return false }
  },
  stop: function(){
    try { LED.killAllSounds() }
    catch(fail) { _FTD_capa.retorno += fail }
    finally {
      var medias = _FTD_capa.medias();
      for(var i=0; i<medias.length; i++) medias[i].pause();
    }
  },
  muted: function(){
    try { LED.disableAllSounds() }
    catch(fail) { _FTD_capa.retorno += fail }
    finally {
      var medias = _FTD_capa.medias(),
          _i = document.querySelector('#_FTD_som');
      for(var i=0; i<medias.length; i++) medias[i].volume = 0;
      if(_i&&_i!=null) _i.id = "_FTD_som_muted";
    }
  },
  unMuted: function(){
    try { LED.enableAllSounds() }
    catch(fail) { _FTD_capa.retorno += fail }
    finally {
      var medias = _FTD_capa.medias(),
          _i = document.querySelector('#_FTD_som_muted');
      for(var i=0; i<medias.length; i++) medias[i].volume = 1;
      if(_i&&_i!=null) _i.id = "_FTD_som";
    }
  },
  saveData: function(data){
    try {
      LED.storeAppData(data, function(error){ _FTD_capa.retorno += error });
    }
    catch(fail) { _FTD_capa.retorno += fail }
    finally { 
      return (localStorage.setItem) ? localStorage.setItem("_FTD_var", data) : fail;
    }
  },
  loadData: function(){
    try {
      LED.loadAppData(function(data, error){
        if(data.length>0) _FTD_capa.retorno += data;
        else _FTD_capa.retorno += error;
      })
      return _FTD_capa.retorno;
    }
    catch(fail) { _FTD_capa.retorno += fail }
    finally {
      return (localStorage.getItem) ? localStorage.getItem("_FTD_var") : fail;
    }
  },
  toggle: function() {
    if(document.querySelector('#lista').classList.contains('fechada')){
      document.querySelector('#lista').classList.remove('fechada');
      document.querySelector('#lista').classList.add('aberta');

      document.querySelector('#_FTD_voltar').classList.remove('botao');
      document.querySelector('#_FTD_voltar').classList.add('close');
    } else {
      document.querySelector('#lista').classList.add('fechada');
      document.querySelector('#lista').classList.remove('aberta');

      document.querySelector('#_FTD_voltar').classList.remove('close');
      document.querySelector('#_FTD_voltar').classList.add('botao');
    }
    
  },
  location: function(url){
    try {
      LED.callBrowser(url, function(error){ _FTD_capa.retorno += error });
    }
    catch(fail) { _FTD_capa.retorno += fail }
    finally { window.open(url, null); return false }
  },
  reload: function(){
    _FTD_capa.stop();
    _FTD_capa.unMuted();
    try { LED.reloadWidget() }
    catch(fail) { window.location = 'index.html' }
  },
  close: function(){
    try { LED.closeWidget() }
    catch(fail) { _FTD_capa.retorno += fail }
    finally {
      if(window.self === window.top){
        window.open('', '_self', '');
        window.close();
      } else {
        lightbox = window.parent.document.getElementById('lightbox');
        lightbox.parentNode.removeChild(lightbox);
      }
    }
  },
  init: function(callback){
    document.write("<div id='_FTD_load'></div>");
    _FTD_capa.resize();
    window.addEventListener('resize', _FTD_capa.resize, true);
    _FTD_capa.render(_FTD_capa.config);
  },
  resize: function(){
    var _d = document.getElementsByTagName('html')[0],
      _h = window.innerHeight,
      _w = window.innerWidth,
      _z = Math.min(1,_h/768,_w/1024);
    _d.style['-webkit-transform'] = 'scale('+_z+')';
    _d.style['transform'] = 'scale('+_z+')';
    window._zoomScale = _z;
  },
  render: function(param) {
    var _b = document.querySelector('body'),
        _c = document.createElement('div'),
        _m = '';
    _c.id = "_FTD_capa";
    _m += '<div id="teste">';
    _m += '<div id="_FTD_voltar" class="botao"></div>',
    _m += '  <ul id="lista" class="fechada">';
    _m += '    <li id="_FTD_recarregar"><span class="icon"></span>Recarregar</li>';
    _m += '    <li id="_FTD_fechar" class="_FTD_preto"><span class="icon"></span>Fechar</li>';
    if(!!param.ajuda) {
      _m += '  <li id="_FTD_ajuda"><span class="icon"></span>'+eval("_FTD_capa.i18n."+_FTD_capa.lang+".ajuda")+'</li>';
    }    
    if(!!param.creditos) {
      _m += '  <li id="_FTD_creditos"><span class="icon"></span>'+eval("_FTD_capa.i18n."+_FTD_capa.lang+".creditos")+'</li>';
    }
    _m += '  </ul>';

    if(!!param.som) {
      //_m += '  <li id="_FTD_som"></li>';
    }
    _m += '</div>';
    _b.insertBefore(_c, _b.childNodes[0]);
    _c.innerHTML = _m;
    _m = '';
    _FTD_modal = function(param){
      document.querySelector(param.id).onclick = function() {
        var _a = document.querySelector('#_FTD_capa dl');
        if(!!_a) _a.parentNode.removeChild(_a);
        if(typeof param.action == "function") {
            document.querySelector('#_FTD_voltar').classList.remove('close');
            document.querySelector('#_FTD_voltar').classList.add('botao');       
            document.querySelector('#lista').classList.add('fechada');
            document.querySelector('#lista').classList.remove('aberta');    
            param.action();
          } else {
            if(this.className == "active") {
              this.className = "";
                       
            } else {
              var _ol = document.querySelectorAll("#_FTD_capa ul li");
              for(var i=0;i<_ol.length;i++) _ol[i].className = "";
              this.className = "active";

              var _a = document.querySelector('#_FTD_capa dl');
              if(!!_a) _a.parentNode.removeChild(_a);
              var _d = document.createElement('dl');
              _c = document.querySelector(param.id);
              _m = '';
              _m += '<dd>'+param.action+'</dd>';
              _c.insertBefore(_d, _c.childNodes[1]);
              _d.innerHTML = _m;
            }            
          }
      }
    }
    
    document.querySelector('#_FTD_voltar').onclick = _FTD_capa.toggle
    document.querySelector('#_FTD_recarregar').onclick = function(){ _FTD_capa.reload(); }
    document.querySelector('#_FTD_fechar').onclick = function(){ _FTD_capa.close(); }
    if(!!param.creditos) {
      _FTD_modal({
        action: param.creditos, id: "#_FTD_creditos"
      });
    }
    if(!!param.ajuda) {
      
      _FTD_modal({
        action: param.ajuda, id: "#_FTD_ajuda"
      });
    }
  }
}
_FTD_capa.init(_FTD_capa.render);
window.addEventListener('load',function(){
  setTimeout(function(){
    var load=document.querySelector("#_FTD_load")
    load.parentNode.removeChild(load)
  },100);
});