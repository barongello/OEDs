function __initLED(e) {
    var t;
    if (e == 1) {
        var n = {},
            r = 0;
        LED.playVideo = function(e, t) {
            n[++r] = t;
            __Android.playVideo(e, r)
        };
        LED.playAudio = function(e, t) {
            n[++r] = t;
            __Android.playSound(e, r)
        };
        LED.playAudio = function(e, t, i) {
            n[++r] = i;
            __Android.playSound(e, t, r)
        };
        LED.callBrowser = function(e, t) {
            n[++r] = t;
            __Android.callBrowser(e, r)
        };
        LED.storeAppData = function(e, t) {
            n[++r] = t;
            __Android.storeAppData(escape(e), r)
        };
        LED.loadAppData = function(t) {
            n[++r] = function(e, n) {
                if (e != '') e = unescape(e);
                t(e, n)
            };
            return __Android.loadAppData(r)
        };
        LED.disableAllSounds = function(e) {
            n[++r] = e;
            __Android.disableAllSounds(r)
        };
        LED.enableAllSounds = function(e) {
            n[++r] = e;
            __Android.enableAllSounds(r)
        };
        LED.closeWidget = function(e) {
            n[++r] = e;
            __Android.closeWebView(r)
        };
        LED.killAllSounds = function(e) {
            n[++r] = e;
            __Android.killAllSounds(r)
        };
        LED.reloadWidget = function(e) {
            n[++r] = e;
            __Android.reloadWidget(r)
        };
        LED.__callback = function(e) {
            var t = Array.prototype.splice.call(arguments, 1);
            n[e].apply(null, t);
            delete n[e]
        };
        return
    } else if (window.__jfxLED) {
        t = function() {
            LED.__args = Array.prototype.splice.call(arguments, 0);
            try {
                window.__jfxLED.msg()
            } catch (e) {
                log(e.message)
            }
        }
    } else {
        t = function() {
            var e = Array.prototype.splice.call(arguments, 0);
            LED.__argId++;
            LED.__args[LED.__argId] = e;
            window.location.href = 'led://' + e.shift() + '?' + LED.__argId
        };
        LED.deleteArg = function(e) {
            delete LED.__args[e]
        }
    }
    
    LED.loadAppData = t.bind(null, 'loadAppData');
    LED.playAudio = t.bind(null, 'playAudio');
    LED.storeAppData = t.bind(null, 'storeAppData');
    LED.callBrowser = t.bind(null, 'callBrowser');
    LED.playVideo = t.bind(null, 'playVideo');
    LED.disableAllSounds = t.bind(null, 'disableAllSounds');
    LED.enableAllSounds = t.bind(null, 'enableAllSounds');
    LED.closeWidget = t.bind(null, 'closeWidget');
    LED.killAllSounds = t.bind(null, 'killAllSounds');
    LED.reloadWidget = t.bind(null, 'reloadWidget');
    if (LED.onLoad) LED.onLoad()
}

this.LED = {
    __args: {},
    __argId: 0,
    onLoad: null,
    NO_CB: function() {}
};

window._capa = {
  
  version: '1.3.5',
  
  css:

  'html {'+
    '-fx-transform-origin: 0 0;'+
    '-fx-user-select: none;'+
    '-webkit-transform-transform: 0 0;'+
    '-webkit-user-select: none;'+
    'height: 768px;'+
    'margin: 0;'+
    'overflow: hidden;'+
    'padding: 0;'+
    'position: relative;'+
    'transform-origin: 0 0;'+
    'user-select: none;'+
    'width: 1024px;'+
  '}'+

  '@keyframes _open {'+
    '0%{transform: rotate(0deg)}'+
    '100%{transform: rotate(360deg)}'+
  '}'+

  '@-fx-keyframes _open {'+
    '0%{-fx-transform: rotate(0deg)}'+
    '100%{-fx-transform: rotate(360deg)}'+
  '}'+

  '@-webkit-keyframes _open {'+
    '0%{-webkit-transform: rotate(0deg)}'+
    '100%{-webkit-transform: rotate(360deg)}'+
  '}'+

  '@-moz-keyframes _open {'+
    '0%{-moz-transform: rotate(0deg)}'+
    '100%{-moz-transform: rotate(360deg)}'+
  '}'+

  '@-o-keyframes _open {'+
    '0%{-o-transform: rotate(0deg)}'+
    '100%{-o-transform: rotate(360deg)}'+
  '}'+

  '@-ms-keyframes _open {'+
    '0%{-ms-transform: rotate(0deg)}'+
    '100%{-ms-transform: rotate(360deg)}'+
  '}'+

  'body button#_botao {'+
    'background: #20202F;'+
    'border: 0;'+
    'cursor: pointer;'+
    'left: 954px;'+
    'outline: 0;'+
    'padding: 8px 9px;'+
    'pointer-events: visible;'+
    'position: absolute;'+
    'top: 20px;'+
    'z-index: 2147483645;'+
  '}'+

  'body button#_botao img,'+
  'body button#_logo img {'+
    'height: 32px;'+
    'width: 32px;'+
  '}'+

  'body button#_botao._carregando img {'+
    '-fx-animation: _open .8s infinite linear;'+
    '-webkit-animation: _open .8s infinite linear;'+
    'animation: _open .5s infinite linear;'+
    '-fx-transform-origin: 16px 18px;'+
    '-webkit-transform-origin: 16px 18px;'+
    'transform-origin: 16px 18px;'+
  '}'+

  'body div#_capa {'+
    '-fx-transition: 500ms;'+
    '-webkit-transition: 500ms;'+
    'transition: 500ms;'+
    'background: rgba(15,15,30,.75);'+
    'height: 768px;'+
    'left: 670px;'+
    'opacity: 0;'+
    'pointer-events: none;'+
    'position: absolute;'+
    'top: 0;'+
    'width: 350px;'+
    'z-index: 2147483644;'+
  '}'+

  'body div#_capa._aberto {'+
    '-fx-transform: translateX(-84px);'+
    '-webkit-transform: translateX(-84px);'+
    'transform: translateX(-84px);'+
    'opacity: 1;'+
    'pointer-events: auto;'+
  '}'+

  'body div#_capa h1 {'+
    'margin: 23px;'+
    'line-height: 24px;'+
    'text-align: left;'+
  '}'+

  'body div#_capa h1 img {'+
    'width: 42px;'+
    'height: 42px;'+
  '}'+

  'body div#_capa dl {'+
    'cursor: normal;'+
    'margin: 0;'+
    'pointer-events: none;'+
  '}'+

  'body div#_capa._aberto dl {'+
    'cursor: pointer;'+
    'pointer-events: auto;'+
  '}'+

  'body div#_capa dt {'+
    '-fx-transition: 500ms;'+
    '-webkit-transition: 500ms;'+
    'transition: 500ms;'+
    'background: rgba(15,15,30,.75);'+
    'color: #ECECEC;'+
    'font: 20px/50px \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif;'+
    'margin: 0 0 9px 0;'+
    'padding: 0 20px 0 65px;'+
    'position: relative;'+
  '}'+

  'body div#_capa dt img {'+
    'height: 32px;'+
    'position: absolute;'+
    'left: 20px;'+
    'top: 10px;'+
    'width: 32px;'+
    'z-index: 2;'+
  '}'+

  'body div#_capa dl#_expediente {'+
    'margin-bottom: 10px;'+
  '}'+

  'body div#_capa dt:hover {'+
    'background: #20202F;'+
  '}'+

  'body div#_capa dl._acordeao dt {'+
    'background: #ECECEC;'+
    'color: #101010;'+
  '}'+

  'body div#_capa dl._acordeao dt img {'+
    '-fx-filter: invert(100%);'+
    '-webkit-filter: invert(100%);'+
    'filter: invert(100%);'+
  '}'+

  'body div#_capa dd {'+
    '-fx-transition: 500ms;'+
    '-webkit-transition: 500ms;'+
    'transition: 500ms;'+
    'background: rgba(15,15,30,0);'+
    'color: #ECECEC;'+
    'font: 14px \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif;'+
    'height: 1px;'+
    'margin: 0;'+
    'opacity: 0;'+
    'overflow: hidden;'+
    'padding: 0 28px;'+
    'position: relative;'+
  '}'+

  'body div#_capa dd h1 {'+
    'color: #FFF;'+
    'font-weight: normal;'+
    'font: bold 18px \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif;'+
    'margin: 6px 0 11px 0;'+
    'text-align: left;'+
    'word-wrap: break-word;'+
    'padding: 20px 0 0 0;'+
  '}'+

  'body div#_capa dd h1:first-child {'+
    'padding: 0;'+
  '}'+

  'body div#_capa dd h2 {'+
    'color: #EEE;'+
    'font-weight: normal;'+
    'font: bold 17px \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif;'+
    'margin: 0 0 15px 0;'+
    'text-align: left;'+
    'word-wrap: break-word;'+
  '}'+

  'body div#_capa dd h3 {'+
    'color: #FFF;'+
    'font-weight: bold;'+
    'font: 12px \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif;'+
    'margin: -10px 0 5px 0;'+
    'text-align: left;'+
    'word-wrap: break-word;'+
  '}'+

  'body div#_capa dd h4 {'+
    'color: #CCC;'+
    'font-weight: normal;'+
    'font: bold 15px \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif;'+
    'margin: 0 0 11px 0;'+
    'text-align: left;'+
    'word-wrap: break-word;'+
  '}'+

  'body div#_capa dd h5 {'+
    'color: #BBB;'+
    'font-weight: normal;'+
    'font: bold 14px \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif;'+
    'margin: 0 0 0 0;'+
    'text-align: left;'+
    'word-wrap: break-word;'+
  '}'+

  'body div#_capa dd h6 {'+
    'color: #AAA;'+
    'font-weight: normal;'+
    'font: bold 13px \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif;'+
    'margin: 0 0 7px 0;'+
    'text-align: left;'+
    'word-wrap: break-word;'+
  '}'+

  'body div#_capa dd p {'+
    'color: #999;'+
    'font-weight: normal;'+
    'font: 12px \'Lucida Sans Unicode\', \'Lucida Grande\', sans-serif;'+
    'margin: 0 0 15px 0;'+
    'padding: 0;'+
    'text-align: left;'+
    'word-wrap: break-word;'+
  '}'+

  'body div#_capa dd p b {'+
    'color: #FFF;'+
    'font-weight: bold;'+
  '}'+

  'body div#_capa dd p i {'+
    'color: #FFF;'+
    'font-style: italic;'+
  '}'+

  'body div#_capa dd p a {'+
    'color: #5CCBE7;'+
    'text-decoration: none;'+
  '}'+

  'body div#_capa dd p a:hover,'+
  'body div#_capa dd p a:focus {'+
    'color: #428BCA;'+
    'text-decoration: underline;'+
  '}'+

  'body div#_menu {'+
    '-fx-transition: 300ms;'+
    '-webkit-transition: 300ms;'+
    'transition: 300ms;'+
    'opacity: 0;'+
    'padding: 80px 20px 20px 20px;'+
    'pointer-events: none;'+
    'position: absolute;'+
    'right: 370px;'+
    'top: 0;'+
    'width: 48px;'+
    'z-index: 2147483643;'+
  '}'+

  'body div#_menu._aberto {'+
    '-fx-transform: translateX(0);'+
    '-webkit-transform: translateX(0);'+
    'transform: translateX(0);'+
    'right: 0;'+
    'opacity: 1;'+
    'pointer-events: auto;'+
  '}'+

  'body div#_menu button {'+
    'background: #20202F;'+
    'border: 0;'+
    'cursor: pointer;'+
    'outline: 0;'+
    'margin: 10px 0 0 0;'+
    'padding: 8px 9px;'+
  '}'+

  'body div#_menu button img {'+
    'width: 32px;'+
    'height: 32px;'+
  '}'+

  'body button#_voltar {'+
    'background: #20202F;'+
    'border: 0;'+
    'cursor: pointer;'+
    'left: 956px;'+
    'outline: 0;'+
    'padding: 6px;'+
    'pointer-events: visible;'+
    'position: fixed;'+
    'top: 20px;'+
    'z-index: 2147483647;'+
  '}'+

  'body div._fullscreen {'+
    '-fx-transition: 500ms;'+
    '-webkit-transition: 500ms;'+
    'transition: 500ms;'+
    'background: #000;'+
    'display: block;'+
    'height: 768px;'+
    'left: -1024px;'+
    'opacity: 0;'+
    'overflow: hidden;'+
    'position: fixed;'+
    'top: 0;'+
    'width: 1024px;'+
    'z-index: 2147483648;'+
  '}'+

  'body div._fullscreen video {'+
    'height: 768px;'+
    'width: 1024px;'+
  '}'+

  'body div._fullscreen._aberto {'+
    'left: 0;'+
    'opacity: 1;'+
  '}'+

  'body div._fullscreen._aberto._ios {'+
    'padding-top: 68px;'+
  '}'+

  'body div._fullscreen._fechado {'+
    'left: 1024px;'+
    'opacity: 0;'+
  '}'+

  'body div._fullscreen iframe {'+
    'border: 0;'+
    'height: 768px;'+
    'left: 0;'+
    'position: fixed;'+
    'top: 0;'+
    'width: 1024px;'+
  '}'+

  'body a._midia {'+
    'display: block;'+
    'overflow: hidden;'+
    'position: relative;'+
  '}'+

  'body a._midia button#_tocar {'+
    'background: rgba(32, 32, 47, .6);'+
    'border: 0;'+
    'cursor: pointer;'+
    'left: 50%;'+
    'margin: -22px 0 0 -23px;'+
    'outline: 0;'+
    'padding: 6px;'+
    'pointer-events: visible;'+
    'position: absolute;'+
    'top: 50%;'+
    'z-index: 2147483645;'+
  '}'+

  'body #_load {'+
    'display: none;'+
  '}',

  icone: {
    ftd:        '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNFREVERUQiIGQ9Ik01LjI3NywwLjcwN2gxLjkxNkwxLjcxNCwxNS43MzNjMCwwLDAuODQ2LDEuMDI0LDIuODUxLDEuMDY5czMuNDc0LTEuMDY5LDMuNDc0LTEuMDY5bDUuMy0xNS4wMjZoMS44MjYNCgkJTDkuOTA5LDE1LjczM2w0Ljg5OSwxNS41NjFINS4wMUwwLDE1LjczM0w1LjI3NywwLjcwN3oiLz4NCgk8cGF0aCBmaWxsPSIjRURFREVEIiBkPSJNMTcuMzQ3LDAuNzA3aDEuOTE1bC01LjQ3OCwxNS4wMjZjMCwwLDAuODQ2LDEuMDI0LDIuODUxLDEuMDY5YzIuMDA0LDAuMDQ0LDMuNDc0LTEuMDY5LDMuNDc0LTEuMDY5DQoJCWw1LjMtMTUuMDI2aDEuODI2bC01LjI1NSwxNS4wMjZsNC44OTksMTUuNTYxSDE3LjA4bC01LjAxLTE1LjU2MUwxNy4zNDcsMC43MDd6Ii8+DQoJPHBhdGggZmlsbD0iI0VERURFRCIgZD0iTTI5LjIzOSwwLjcwN2gxLjkxNWwtNS40NzgsMTUuMDI2YzAsMCwwLjg0NiwxLjAyNCwyLjg1LDEuMDY5UzMyLDE1LjczMywzMiwxNS43MzN2MTUuNTYxaC0zLjAyOA0KCQlsLTUuMDExLTE1LjU2MUwyOS4yMzksMC43MDd6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==>',
    edelvives:  '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IHk9IjYuODczIiBmaWxsPSIjRURFREVEIiB3aWR0aD0iMyIgaGVpZ2h0PSIxOCIvPg0KPHJlY3QgeD0iOS4wODMiIHk9IjYuODczIiBmaWxsPSIjRURFREVEIiB3aWR0aD0iMTQiIGhlaWdodD0iMTgiLz4NCjxyZWN0IHg9IjI2LjU4MyIgeT0iNi44NzMiIGZpbGw9IiNFREVERUQiIHdpZHRoPSI1IiBoZWlnaHQ9IjE4Ii8+DQo8L3N2Zz4NCg==>',
    standfor:   '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9IiNFRUVFRUUiIHBvaW50cz0iMCwyMy4zODQgNS44ODYsMjEuMzUxIDMuOTYsMTcuNzEyIDguMDI3LDEwLjc1NCAyNS4wNDMsMTEuMzk2IDIxLjgzMyw1LjYxOCAxLjA3LDcuNzU5ICIvPg0KPHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSI2Ljk1NywyMi4xIDkuMzExLDI2LjA2IDMyLDI2LjM4MSAzMC45MywxMi4xNDYgMjUuNzkyLDExLjYxMSAyMC44NywyMC45MjQgIi8+DQo8L3N2Zz4NCg==>',
    menu:       '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMTQ5LjUgMTUwLjUgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTE0OS41IDE1MC41IDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNFREVERUQiIGQ9Ik0tMTQ1LjUsMTYwLjVoMjRjMS4xMDQsMCwyLTAuODk2LDItMnMtMC44OTYtMi0yLTJoLTI0Yy0xLjEwNCwwLTIsMC44OTYtMiwyUy0xNDYuNjA0LDE2MC41LTE0NS41LDE2MC41eiBNLTEyMS41LDE2NC41DQoJaC0yNGMtMS4xMDQsMC0yLDAuODk2LTIsMnMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUy0xMjAuMzk2LDE2NC41LTEyMS41LDE2NC41eiBNLTEyMS41LDE3Mi41aC0yNGMtMS4xMDQsMC0yLDAuODk2LTIsMg0KCXMwLjg5NiwyLDIsMmgyNGMxLjEwNCwwLDItMC44OTYsMi0yUy0xMjAuMzk2LDE3Mi41LTEyMS41LDE3Mi41eiIvPg0KPC9zdmc+DQo=>',
    avancar:    '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0VERURFRCIgZD0iTTE0LjQyNSwxNi4wMDlsOC43MzktOC43MzhjMC40NDMtMC40NDQsMC42NjYtMC45ODgsMC42NjYtMS42MjljMC0wLjY0My0wLjIyMy0xLjE4My0wLjY2Ni0xLjYyNw0KCWwtMS4zNDgtMS4zNDlDMjEuMzczLDIuMjIxLDIwLjgyOCwyLDIwLjE4OSwyYy0wLjY0MywwLTEuMTg2LDAuMjIxLTEuNjI5LDAuNjY2TDYuODM2LDE0LjM3MUM2LjM5MiwxNC44MTUsNi4xNywxNS4zNTgsNi4xNywxNg0KCXMwLjIyMiwxLjE4NSwwLjY2NiwxLjYyOWwxMS43MjUsMTEuNzA2QzE5LjAwNCwyOS43NzksMTkuNTQ3LDMwLDIwLjE4OSwzMGMwLjYzOSwwLDEuMTg0LTAuMjIxLDEuNjI3LTAuNjY1bDEuMzQ4LTEuMzUNCgljMC40NDMtMC40NDEsMC42NjYtMC45ODEsMC42NjYtMS42MThjMC0wLjYzNS0wLjIyMy0xLjE4MS0wLjY2Ni0xLjYzNkwxNC40MjUsMTYuMDA5eiIvPg0KPC9zdmc+DQo=>',
    voltar:     '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0VERURFRCIgZD0iTTE3LjU3NCwxNS45OTFsLTguNzM5LDguNzM4Yy0wLjQ0MywwLjQ0NC0wLjY2NiwwLjk4Ny0wLjY2NiwxLjYyOWMwLDAuNjQzLDAuMjIzLDEuMTgzLDAuNjY2LDEuNjI3DQoJbDEuMzQ4LDEuMzQ5QzEwLjYyNiwyOS43NzgsMTEuMTcxLDMwLDExLjgxLDMwYzAuNjQzLDAsMS4xODYtMC4yMjIsMS42MjktMC42NjZsMTEuNzI0LTExLjcwNWMwLjQ0NC0wLjQ0NCwwLjY2Ni0wLjk4NywwLjY2Ni0xLjYyOQ0KCXMtMC4yMjItMS4xODUtMC42NjYtMS42MjlMMTMuNDM5LDIuNjY1QzEyLjk5NiwyLjIyMSwxMi40NTMsMiwxMS44MSwyYy0wLjYzOSwwLTEuMTg0LDAuMjIxLTEuNjI3LDAuNjY1bC0xLjM0OCwxLjM1DQoJQzguMzkyLDQuNDU2LDguMTY5LDQuOTk2LDguMTY5LDUuNjMzYzAsMC42MzUsMC4yMjMsMS4xODEsMC42NjYsMS42MzZMMTcuNTc0LDE1Ljk5MXoiLz4NCjwvc3ZnPg0K>',
    expediente: '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNFREVERUQiIGQ9Ik0xNiwwQzcuMTY0LDAsMCw3LjE2NCwwLDE2czcuMTY0LDE2LDE2LDE2czE2LTcuMTY0LDE2LTE2UzI0LjgzNiwwLDE2LDB6IE0xNi4wNjIsMjguMDIzDQoJYy02LjYzOSwwLTEyLjAyMS01LjM4Mi0xMi4wMjEtMTIuMDIxYzAtNi42MzksNS4zODItMTIuMDIxLDEyLjAyMS0xMi4wMjFzMTIuMDIxLDUuMzgyLDEyLjAyMSwxMi4wMjENCglDMjguMDgzLDIyLjY0MSwyMi43MDEsMjguMDIzLDE2LjA2MiwyOC4wMjN6Ii8+DQo8cGF0aCBmaWxsPSIjRURFREVEIiBkPSJNMTUuMzMzLDEwLjY2N1YxOGMwLDAuNzIyLTAuMTQxLDEuNDExLTAuNDIyLDIuMDY3Yy0wLjI4MSwwLjY1Ni0wLjY2MSwxLjIyNC0xLjE0MSwxLjcwMw0KCWMtMC40NzksMC40NzktMS4wNDYsMC44NTktMS43MDMsMS4xNDFzLTEuMzQ1LDAuNDIyLTIuMDY3LDAuNDIySDkuMzM0Yy0wLjE4MSwwLTAuMzM3LTAuMDY2LTAuNDY5LTAuMTk4cy0wLjE5OC0wLjI4OC0wLjE5OC0wLjQ2OQ0KCXYtMS4zMzNjMC0wLjE4MSwwLjA2Ni0wLjMzNywwLjE5OC0wLjQ2OXMwLjI4OC0wLjE5OCwwLjQ2OS0wLjE5OGgwLjY2N2MwLjczNiwwLDEuMzY0LTAuMjYxLDEuODg1LTAuNzgxDQoJYzAuNTIxLTAuNTIxLDAuNzgxLTEuMTQ5LDAuNzgxLTEuODg1di0wLjMzM2MwLTAuMjc4LTAuMDk3LTAuNTE0LTAuMjkyLTAuNzA4Yy0wLjE5NC0wLjE5NC0wLjQzLTAuMjkyLTAuNzA4LTAuMjkySDkuMzM0DQoJYy0wLjU1NiwwLTEuMDI4LTAuMTk0LTEuNDE3LTAuNTgzYy0wLjM4OS0wLjM4OS0wLjU4My0wLjg2MS0wLjU4My0xLjQxN3YtNGMwLTAuNTU1LDAuMTk0LTEuMDI3LDAuNTgzLTEuNDE2DQoJYzAuMzg5LTAuMzg5LDAuODYxLTAuNTgzLDEuNDE3LTAuNTgzaDRjMC41NTUsMCwxLjAyNywwLjE5NCwxLjQxNywwLjU4M0MxNS4xMzksOS42NCwxNS4zMzMsMTAuMTEyLDE1LjMzMywxMC42NjdMMTUuMzMzLDEwLjY2N3oNCgkgTTI0LjY2NSwxMC42NjdWMThjMCwwLjcyMi0wLjE0MSwxLjQxMS0wLjQyMiwyLjA2N3MtMC42NjEsMS4yMjQtMS4xNDEsMS43MDNjLTAuNDc5LDAuNDc5LTEuMDQ2LDAuODU5LTEuNzAzLDEuMTQxDQoJcy0xLjM0NSwwLjQyMi0yLjA2NywwLjQyMmgtMC42NjdjLTAuMTgxLDAtMC4zMzYtMC4wNjYtMC40NjktMC4xOThDMTguMDY1LDIzLjAwMiwxOCwyMi44NDYsMTgsMjIuNjY2di0xLjMzMw0KCWMwLTAuMTgxLDAuMDY2LTAuMzM3LDAuMTk4LTAuNDY5YzAuMTMyLTAuMTMyLDAuMjg4LTAuMTk4LDAuNDY5LTAuMTk4aDAuNjY3YzAuNzM2LDAsMS4zNjQtMC4yNjEsMS44ODUtMC43ODENCgljMC41MjEtMC41MjEsMC43ODEtMS4xNDksMC43ODEtMS44ODV2LTAuMzMzYzAtMC4yNzgtMC4wOTctMC41MTQtMC4yOTItMC43MDhjLTAuMTk0LTAuMTk0LTAuNDMtMC4yOTItMC43MDgtMC4yOTJoLTIuMzMzDQoJYy0wLjU1NSwwLTEuMDI3LTAuMTk0LTEuNDE3LTAuNTgzYy0wLjM4OS0wLjM4OS0wLjU4My0wLjg2MS0wLjU4My0xLjQxN3YtNGMwLTAuNTU1LDAuMTk0LTEuMDI3LDAuNTgzLTEuNDE2DQoJYzAuMzg5LTAuMzg5LDAuODYxLTAuNTgzLDEuNDE3LTAuNTgzaDRjMC41NTYsMCwxLjAyNywwLjE5NCwxLjQxNywwLjU4M0MyNC40NzEsOS42NCwyNC42NjUsMTAuMTEyLDI0LjY2NSwxMC42NjdMMjQuNjY1LDEwLjY2N3oiDQoJLz4NCjwvc3ZnPg0K>',
    ajuda:      '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNFREVERUQiIGQ9Ik0xNiwwQzcuMTY0LDAsMCw3LjE2NCwwLDE2czcuMTY0LDE2LDE2LDE2czE2LTcuMTY0LDE2LTE2UzI0LjgzNiwwLDE2LDB6IE0xNi4wNjIsMjguMDIzDQoJYy02LjYzOSwwLTEyLjAyMS01LjM4Mi0xMi4wMjEtMTIuMDIxYzAtNi42MzksNS4zODItMTIuMDIxLDEyLjAyMS0xMi4wMjFzMTIuMDIxLDUuMzgyLDEyLjAyMSwxMi4wMjENCglDMjguMDgzLDIyLjY0MSwyMi43MDEsMjguMDIzLDE2LjA2MiwyOC4wMjN6Ii8+DQo8cGF0aCBmaWxsPSIjRURFREVEIiBkPSJNMTMuNTQ5LDE1LjU0NmMwLTEuMDIxLDEuMTMzLTEuMTkxLDIuMjk1LTEuNTA0YzEuMTM0LTAuMzEyLDIuMjY4LTAuNzY2LDIuMjY4LTIuNDExYzAtMS4yNDktMS4xNjItMi4xNTYtMi4zNTMtMi4xNTYNCgljLTIuMzgsMC0yLjc0OSwyLjgwOC00LjU2MiwyLjgwOGMtMS4wMiwwLTEuNzI5LTAuNzk0LTEuNzI5LTIuMDQyYzAtMi45NzgsMy43NDEtNC42OCw2LjI5MS00LjY4YzMuNjU1LDAsNi43NzIsMi4yNyw2Ljc3Miw2LjA3DQoJYzAsMy4xNDgtMS45ODMsNC45OTItNC45MDIsNS43Mjl2MS4wMjFjMCwxLjEzNS0wLjg1LDEuOTU4LTIuMDQsMS45NThjLTEuMjc1LDAtMi4wNDEtMC44MjMtMi4wNDEtMS45NThWMTUuNTQ2eiBNMTMuMzc5LDI0LjIyNg0KCWMwLTEuMjIsMC45OTItMi4yMTMsMi4yMS0yLjIxM2MxLjIxOSwwLDIuMjEsMC45OTMsMi4yMSwyLjIxM2MwLDEuMjE5LTAuOTkxLDIuMjEyLTIuMjEsMi4yMTINCglDMTQuMzcxLDI2LjQzOCwxMy4zNzksMjUuNDQ1LDEzLjM3OSwyNC4yMjZ6Ii8+DQo8L3N2Zz4NCg==>',
    creditos:   '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNFREVERUQiIGQ9Ik0yMi40NiwyMC4wMjVjMC0xLjEwMS0wLjg5Mi0xLjk5My0xLjk5My0xLjk5M2MtMC41OSwwLTEuMTIxLDAuMjU4LTEuNDg1LDAuNjY3Yy0wLjAwNiwwLjAwNy0wLjAxMywwLjAxNC0wLjAyLDAuMDIxDQoJYzAsMCwwLDAsMCwwbDAsMGMtMC43MzQsMC44MDEtMS43OSwxLjMwNC0yLjk2MiwxLjMwNGMtMi4yMTksMC00LjAxOC0xLjc5OS00LjAxOC00LjAxOHMxLjc5OS00LjAxOCw0LjAxOC00LjAxOA0KCWMxLjE4NCwwLDIuMjQ5LDAuNTEzLDIuOTg0LDEuMzI4YzAuMzY1LDAuNDA3LDAuODk0LDAuNjY1LDEuNDg0LDAuNjY1YzEuMTAxLDAsMS45OTMtMC44OTIsMS45OTMtMS45OTMNCgljMC0wLjQ5MS0wLjE3OS0wLjk0LTAuNDczLTEuMjg3Yy0wLjAyLTAuMDIxLTAuMDM4LTAuMDQzLTAuMDU4LTAuMDY0Yy0wLjAwNy0wLjAwOC0wLjAxNS0wLjAxNy0wLjAyMi0wLjAyNXYwDQoJQzIwLjQ0NSw5LjAxLDE4LjM0LDguMDA1LDE2LDguMDA1Yy00LjQxNiwwLTcuOTk1LDMuNTgtNy45OTUsNy45OTVzMy41OCw3Ljk5NSw3Ljk5NSw3Ljk5NWMyLjQ0MiwwLDQuNjI4LTEuMDk1LDYuMDk1LTIuODIxDQoJQzIyLjMyNSwyMC44NDksMjIuNDYsMjAuNDUzLDIyLjQ2LDIwLjAyNXoiLz4NCjxwYXRoIGZpbGw9IiNFREVERUQiIGQ9Ik0xNiwwQzcuMTY0LDAsMCw3LjE2NCwwLDE2czcuMTY0LDE2LDE2LDE2czE2LTcuMTY0LDE2LTE2UzI0LjgzNiwwLDE2LDB6IE0xNi4wNjIsMjguMDIzDQoJYy02LjYzOSwwLTEyLjAyMS01LjM4Mi0xMi4wMjEtMTIuMDIxYzAtNi42MzksNS4zODItMTIuMDIxLDEyLjAyMS0xMi4wMjFzMTIuMDIxLDUuMzgyLDEyLjAyMSwxMi4wMjENCglDMjguMDgzLDIyLjY0MSwyMi43MDEsMjguMDIzLDE2LjA2MiwyOC4wMjN6Ii8+DQo8L3N2Zz4NCg==>',
    carregar:   '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSI4NC41IDM4NC41IDMyIDMyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDg0LjUgMzg0LjUgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0VERURFRCIgZD0iTTEwMi42NjgsMzk4Ljk5M2w3LjIwNy01LjM2OGMwLjgzMi0wLjgzMiwwLjgzMi0xLjY2OCwwLTIuNWwtNy4yMDctNS4zNjkNCgljLTAuMjI1LTAuMTYyLTAuNTA2LTAuMjU2LTAuODA2LTAuMjU2Yy0wLjc1NiwwLTEuMzYyLDAuNTg4LTEuMzYyLDEuMzEydjIuNDM4Yy03LjI1LDAuMDItMTMuMTI1LDUuODg4LTEzLjEyNSwxMy4xMjUNCgljMCw3LjI1MSw1Ljg5MywxMy4xMjUsMTMuMTU2LDEzLjEyNWM2Ljc0NCwwLDEyLjMtNS4wNTYsMTMuMDY4LTExLjU2N2MwLjAwNy0wLjAyMSwwLjAyNS0wLjIxOSwwLjAyNS0wLjMwOA0KCWMwLTAuNjg4LTAuNTYzLTEuMjUtMS4yNTYtMS4yNWgtMy4xNWMtMS4wMzEsMC0xLjgxMiwwLjcxMy0xLjkxOCwxLjMwNmMtMC42MDYsMy4xNzYtMy40MDcsNS41NjktNi43NjksNS41NjkNCgljLTMuODA2LDAtNi44ODctMy4wNzUtNi44ODctNi44NzVjMC0zLjc4OCwzLjA2Mi02Ljg1NSw2Ljg1Ni02Ljg3NXYyLjQzOGMwLDAuNzI2LDAuNjA2LDEuMzEyLDEuMzYyLDEuMzEyDQoJQzEwMi4xNjMsMzk5LjI1LDEwMi40NDQsMzk5LjE1NSwxMDIuNjY4LDM5OC45OTN6Ii8+DQo8L3N2Zz4NCg==>',
    fechar:     '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSItMTUzLjUgMTQ2LjUgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgLTE1My41IDE0Ni41IDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNFREVERUQiIGQ9Ik0tMTI1Ljc2OSwxNTMuMzgyYzAuMzU4LDAuMzU3LDAuMzU4LDAuOTQzLDAsMS4zMDJsLTcuMTcsNy4xNjhjLTAuMzU2LDAuMzU3LTAuMzU2LDAuOTQ0LDAsMS4zMDRsNy4xNjcsNy4xNzENCgljMC4zNTcsMC4zNTcsMC4zNTcsMC45NDQsMCwxLjMwNGwtMi42MSwyLjYwM2MtMC4zNTksMC4zNTYtMC45NDYsMC4zNTYtMS4zMDUsMGwtNy4xNjMtNy4xNjljLTAuMzU4LTAuMzU4LTAuOTQ2LTAuMzU4LTEuMzA0LDANCglsLTcuMTY5LDcuMTY1Yy0wLjM1NywwLjM1OC0wLjk0NiwwLjM1OC0xLjMwMywwbC0yLjYwNi0yLjYwN2MtMC4zNTgtMC4zNTctMC4zNTgtMC45NDQsMC0xLjMwM2w3LjE3LTcuMTY3DQoJYzAuMzU4LTAuMzU3LDAuMzU4LTAuOTQ0LDAtMS4zMDVsLTcuMTY2LTcuMTcyYy0wLjM1OC0wLjM1Ny0wLjM1OC0wLjk0NCwwLTEuMzAzbDIuNjEtMi42MDVjMC4zNTktMC4zNTUsMC45NDUtMC4zNTUsMS4zMDQsMC4wMDMNCglsNy4xNjIsNy4xNjhjMC4zNTgsMC4zNTksMC45NDYsMC4zNTksMS4zMDQsMC4wMDFsNy4xNjktNy4xNjVjMC4zNTYtMC4zNTcsMC45NDQtMC4zNTcsMS4zMDMsMEwtMTI1Ljc2OSwxNTMuMzgyeiIvPg0KPC9zdmc+DQo=>',
    vazio:      '<img src=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA3NCSVQICAjb4U/gAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEgAACxIB0t1+/AAAABZ0RVh0Q3JlYXRpb24gVGltZQAxMC8xNy8xM/LSlgwAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzbovLKMAAAACklEQVQImWNgAAAAAgAB9HFkpgAAAABJRU5ErkJggg==>',
    tocar:      '<img src=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNFREVERUQiIGQ9Ik0xNiwwQzcuMTY0LDAsMCw3LjE2NCwwLDE2czcuMTY0LDE2LDE2LDE2czE2LTcuMTY0LDE2LTE2UzI0LjgzNiwwLDE2LDB6IE0xNi4wNjIsMjguMDIzDQoJYy02LjYzOSwwLTEyLjAyMS01LjM4Mi0xMi4wMjEtMTIuMDIxYzAtNi42MzksNS4zODItMTIuMDIxLDEyLjAyMS0xMi4wMjFzMTIuMDIxLDUuMzgyLDEyLjAyMSwxMi4wMjENCglDMjguMDgzLDIyLjY0MSwyMi43MDEsMjguMDIzLDE2LjA2MiwyOC4wMjN6Ii8+DQo8cGF0aCBmaWxsPSIjRURFREVEIiBkPSJNMjIuNDk0LDE1LjA2NUwxMi44Nyw4LjA2OWMtMC4zNTQtMC4yNTYtMC44MjItMC4yOTQtMS4yMDktMC4wOTZjLTAuMzksMC4xOTctMC42MzQsMC41OTktMC42MzQsMS4wMzINCgl2MTMuOTg4YzAsMC40MzcsMC4yNDQsMC44MzcsMC42MzQsMS4wMzNjMC4xNjUsMC4wODQsMC4zNDYsMC4xMjYsMC41MjcsMC4xMjZjMC4yMzgsMCwwLjQ3OS0wLjA3NywwLjY4My0wLjIyNmw5LjYyNC02Ljk5DQoJYzAuMzA0LTAuMjI0LDAuNDc5LTAuNTY4LDAuNDc5LTAuOTM2QzIyLjk3NiwxNS42MjgsMjIuNzkyLDE1LjI4NSwyMi40OTQsMTUuMDY1eiIvPg0KPC9zdmc+DQo=>'
  },

  expediente: [["Editora FTD S.A.","Diretor editorial\r\nLauri Cericato\r\n\r\nGerente do Fundamental II\r\nSilvana Rossi J\u00falio\r\n\r\nEditores assistentes\r\nAndressa Munique Paiva, Andr\u00e9a Oliveira; Carlos Mendes Rosa (L\u00edngua Portuguesa); Carolina Maria Toledo, Isabella Semaan, Zuleide Talarico (Matem\u00e1tica); Jo\u00e3o Paulo Bortoluci, Alexandre Garcia Macedo (Ci\u00eancias); Nubia Andrade e Silva, Gabriel Careta (Hist\u00f3ria); Isabela Gorgatti, Flavio Manzatto de Souza (Geografia) \r\n\r\nPesquisa e desenvolvimento\r\nAlan Nicoliche da Silva, Claudia Bergamini, Raphaela Secco Comisso (L\u00edngua Portuguesa); Eliane Cabariti C. Louren\u00e7o (Matem\u00e1tica); Carolina Mancini, Laura Alves de Paula, Sandra Del Carlo (Ci\u00eancias); Thais Videira (Hist\u00f3ria); J\u00e9ssica Vieira de Faria (Geografia)\r\n\r\nColaboradores\r\nAndr\u00e9ia Manfin, Carolina Poppi Bortolato, Danilo Valderrama Banzatto, M\u00f4nica Santos, Nath\u00e1lia Macri Nahas, Paula Bergamini, Paula Rodrigues, Paulo Marquezini, Tha\u00eds Ribeiro (L\u00edngua Portuguesa); Paula Lev Freidenson, Roberto Cavalcante (Matem\u00e1tica); Liliane Maria Fernandes Oliveira, Marcela Sobral, Mariana Bayerlein Zablith, Mayra M. Ardaya, Rebeca Ver\u00f4nica Ribeiro Viana (Ci\u00eancias); Bruno Cardoso Silva, Let\u00edcia Nunes de Moraes, Leandro Calbente C\u00e2mara, Rafael Reis Cappelasso, Rodrigo Souza (Hist\u00f3ria); Bruna Rodrigues, Gislaine Munhoz, Guilherme Falconi Paula (Geografia)\r\n\r\nCoordena\u00e7\u00e3o de prepara\u00e7\u00e3o e revis\u00e3o\r\nLilian Semenichin\r\n\r\nAssistentes editoriais\r\nAline Fabiane Lopes Brand\u00e3o, Denise Aparecida da Silva\r\n\r\nEstagi\u00e1ria\r\nMariana de Lucena Moreno"],["Inova\u00e7\u00e3o e Novas M\u00eddias","Diretor\r\nJos\u00e9 Roberto Reche\r\n\r\nGerente\r\nFernando Moraes Fonseca Jr.\r\n\r\nCoordenador t\u00e9cnico-pedag\u00f3gico\r\nCarlos Seabra\r\n\r\nCoordenador de produ\u00e7\u00e3o t\u00e9cnica\r\nMauris Poggio\r\n\r\nCoordenador de tecnologia digital\r\nRodrigo Orellana\r\n\r\nCoordenador de opera\u00e7\u00f5es\r\nAdailton Silva\r\n\r\nSupervisor de cria\u00e7\u00e3o\r\nRafael Chaves\r\n\r\nSupervisor de desenvolvimento\r\nLeonardo Miranda\r\n\r\nAnalistas de solu\u00e7\u00e3o digital\r\nDeborah Visnadi, Janaina Chervezan, Karlo Gabriel, Sonia Dias, V\u00e2nia Santos\r\n\r\nAnalista de configura\u00e7\u00e3o de software\r\nLevy Abinajm Melero Santanna\r\n\r\nPesquisa iconogr\u00e1fica\r\nElisa Rojas, Joanna Heliszkowski\r\n\r\nAssistentes administrativas\r\nLet\u00edcia Bovolon Bezerra, Tatiana Ros\u00e1rio\r\n\r\nEstagi\u00e1rio\r\nGabriel Barbosa"],["Trinity Midia","Coordena\u00e7\u00e3o geral\r\nRoberto Areias de Carvalho\r\n\r\nCoordena\u00e7\u00e3o de roteiro e arte\r\nMelissa Oliveira da Silva\r\n\r\nDesign e anima\u00e7\u00e3o\r\nMaria Luiza de Alvarenga Dini, Gustavo Spadaro Huck\r\n\r\nPrograma\u00e7\u00e3o\r\nIan Carvalho, Wagner Fernando Barongello Santos"]],

  logo: 'ftd',

  idioma: 'pt-BR',

  chrome: ( /Chrome/gi.test(navigator.userAgent) ),

  android: ( /Android/gi.test(navigator.userAgent) ),

  ios: ( /(iPad|iPhone|iPod)/gi.test(navigator.userAgent) ),

  javafx: ( /(Java FX|JavaFX)/gi.test(navigator.userAgent) ),

  debug: function(){
    window.location = 'javascript:(function(F,i,r,e,b,u,g,L,I,T,E){if(F.getElementById(b))return;E=F[i+\'NS\']&&F.documentElement.namespaceURI;E=E?F[i+\'NS\'](E,\'script\'):F[i](\'script\');E[r](\'id\',b);E[r](\'src\',I+g+T);E[r](b,u);(F[e](\'head\')[0]||F[e](\'body\')[0]).appendChild(E);E=new%20Image;E[r](\'src\',I+L);})(document,\'createElement\',\'setAttribute\',\'getElementsByTagName\',\'FirebugLite\',\'4\',\'firebug-lite.js\',\'releases/lite/latest/skin/xp/sprite.png\',\'https://getfirebug.com/\',\'#startOpened\');';
  },

  extend: function(a, b){
    for(var key in b){
      if(b.hasOwnProperty(key)){
        a[key] = b[key];
      }
    }
    return a;
  },

  config: {},

  start: function(){

    var src = document.getElementsByTagName('script'), config = '';
    for(var i in src){ if( typeof src[i] == 'object' && src[i].getAttribute('src') && src[i].getAttribute('src').indexOf('capa.js') >= 0 ) config = src[i]; }
    config = (config) ? eval('({'+config.innerHTML+'})') : {};

    _capa.config.hide     = (config.hide)     ? config.hide     : false;
    _capa.config.width    = (config.width)    ? config.width    : false;
    _capa.config.height   = (config.height)   ? config.height   : false;
    _capa.config.index    = (config.index)    ? config.index    : false;
    _capa.config.debug    = (config.debug)    ? config.debug    : false;
    _capa.config.ajuda    = (config.ajuda)    ? config.ajuda    : false;
    _capa.config.creditos = (config.creditos) ? config.creditos : false;

    if( !_capa.config.hide ){

      var html = '<button id=_botao class=_carregando>'+_capa.icone.carregar+'</button>';
      document.body.innerHTML += '<style>'+_capa.css+'</style>';
      document.body.innerHTML += html;
      
      hasExpediente = _capa.expediente.length;

      _capa.config.hide = false;
      _capa.core();
    }

    _capa.resize();
    document.getElementsByTagName('html')[0].setAttribute('lang',_capa.idioma);
  },

  core: function(){

    window.addEventListener('load',function(){

      setTimeout(function(){

        var config = _capa.config,
            html = '';

        html += '<h1 id=_logo>';
        html += _capa.icone[ _capa.logo ];
        html += '</h1>';

        if(config.ajuda){
          html += '<dl id=_ajuda><dt>Ajuda'+_capa.icone.ajuda+'</dt>';
          if (typeof config.ajuda == 'string') html += '<dd>'+config.ajuda+'</dd>';
          html += '</dl>'
        }

        if(config.creditos){
          html += '<dl id=_creditos><dt>Créditos'+_capa.icone.creditos+'</dt>';
          if (typeof config.creditos == 'string') html += '<dd>'+config.creditos+'</dd>';
          html += '</dl>'
        }
        
        if(hasExpediente){

          var expediente = _capa.expediente;

          if(expediente instanceof Array){

            html += '<dl id=_expediente><dt>Expediente'+_capa.icone.expediente+'</dt>';
            html += '<dd>';
            for(var a in expediente){
              if(expediente[a][0].length > 0) html += '<h1>'+expediente[a][0]+'</h1>';
              var depto = expediente[a][1].split('\r\n'), b = 0, c = 1;
              for(var d = 0; d < depto.length; d++){
                if(d==b){
                  html += '<h5>'+depto[b]+'</h5>';
                  b += 3;
                }
                if(d==c){
                  html += '<p>'+depto[c]+'</p>';
                  c += 3;
                }
              }
            }
            html += '</dd>';
            html += '</dl>';

          } else {

            hasExpediente = false;
            throw 'Parâmetro expediente inválido em _capa.start(); Mais detalhes em http://multimidia.ftd.com.br/capa';
          }
        }

        var div = document.createElement('div');
        div.id = '_capa';
        div.innerHTML = html;
        document.body.appendChild(div);

        html = '<button id=_recarregar>'+_capa.icone.carregar+'</button>';
        html += '<button id=_fechar>'+_capa.icone.fechar+'</button>';

        var menu = document.createElement('div');
        menu.id = '_menu';
        menu.innerHTML = html;
        document.body.appendChild(menu);

        _capa.events();
        _capa.load(0);

        var botoes = document.querySelectorAll('#_capa dl').length*1-1,
            altura = [ 578, 518, 458 ];

        if(botoes < 0){

          var capa = document.querySelector('#_capa');
          capa.parentNode.removeChild(capa);

        } else {

          _capa.css += 
          'body div#_capa dl._acordeao dd {'+
            'margin-top: -5px;'+
            'padding: 28px 28px 18px 28px;'+
            'background: #101010;'+
            'height: '+altura[botoes]+'px;'+
            'opacity: 1;'+
            'overflow-y: scroll;'
          '}';

          var css = document.createElement('style');
          css.innerHTML = _capa.css;
          document.body.appendChild(css);
        }

        if( config.debug ) _capa.debug();
        if(_capa.chrome) document.querySelector('html').setAttribute('class','_chrome');
        if(_capa.android) document.querySelector('html').setAttribute('class','_android');
        if(_capa.ios) document.querySelector('html').setAttribute('class','_ios');
        if(_capa.javafx) document.querySelector('html').setAttribute('class','_javafx');

      },100);

    });
  },

  load: function(bool){

    var icone = _capa.icone,
        botao = document.querySelector('#_botao');

    if(bool){

      botao.className = '_carregando';
      botao.innerHTML = icone.carregar;

    } else {

      botao.className = '';
      botao.innerHTML = icone[ _capa.logo ];
    }
  },

  resize: function(){

    var scale = function(){

      var w = 0, h = 0;

      if(_capa.config.width) w = window.innerWidth/_capa.config.width;
      else w = window.innerWidth/1024;

      if(_capa.config.height) h = window.innerHeight/_capa.config.height;
      else h = window.innerHeight/768;

      var b = document.getElementsByTagName('html')[0],
          s = Math.min(1,w,h);

      b.style['-fx-transform'] = 'scale('+s+')';
      b.style['-webkit-transform'] = 'scale('+s+')';
      b.style['transform'] = 'scale('+s+')';

      b.style['-fx-transform-origin'] = '0 0';
      b.style['-webkit-transform-origin'] = '0 0';
      b.style['transform-origin'] = '0 0';

      return s;
    }

    _capa.scale = scale();
    window.onresize = function(){
      _capa.scale = scale();
    };
  },

  data: {

    set: function(){

      var arg = _capa.extend({
          id: false,
          data: false,
          error: false
      }, arguments[0]);

      try { LED.saveAppData(arg.data) }
      catch(e) {
        if(localStorage.getItem(arg.id)){
          if(arg.error instanceof Function) arg.error(arg.id);
          return false;
        } else {
          if('localStorage' in window){
            localStorage.setItem(arg.id, JSON.stringify(arg.data));
            return true;
          } else return false;
        }
      }
    },

    get: function(){

      var arg = _capa.extend({
          id: false,
          error: false
      }, arguments[0]);

      try { return LED.loadAppData() }
      catch(e) {
        if('localStorage' in window){
          if(localStorage.getItem(arg.id)){
            return eval('('+localStorage.getItem(arg.id)+')');
          } else {
            if(arg.error instanceof Function) arg.error(arg.id);
            return false;
          }
        } else return false;
      }
    },

    del: function(){

      var arg = _capa.extend({
          id: false,
          error: false
      }, arguments[0]);

      try { LED.saveAppData('') }
      catch(e) {
        if('localStorage' in window){
          if(localStorage.getItem(arg.id)){
            localStorage.removeItem(arg.id);
            return true;
          } else {
            if(arg.error instanceof Function) arg.error(arg.id);
            return false;
          }
        } else return false;
      }
    }

  },

  audio: function(){

    var audio = function(){

      var arg = _capa.extend({
          id: undefined,
          mp3: undefined,
          autoplay: undefined,
          controls: undefined,
          loop: undefined,
          muted: undefined
      }, arguments[0]);

      if(arg.id != undefined){

        if( _capa.ios && arg.loop != undefined && arg.controls == undefined ){
          try{ LED.playAudio(arg.mp3, arg.loop) }
          catch(e){}
          html = '<div mp3='+arg.mp3+' play=true mute=false volume=true></div>';
        }

        else if( _capa.ios && arg.autoplay != undefined && arg.controls == undefined ){
          try{ LED.playAudio(arg.mp3) }
          catch(e){}
          html = '<div mp3='+arg.mp3+' play=true mute=false volume=true></div>';
        }

        else {

          html = ' <audio preload ';
          if(arg.autoplay != undefined) html += ' autoplay ';
          if(arg.controls != undefined) html += ' controls ';
          if(arg.loop != undefined) html += ' loop ';
          if(arg.muted != undefined) html += ' muted ';
          html += '>';
          if(arg.mp3 != undefined) html += '<source src='+arg.mp3+' type=audio/mpeg>';
          else throw 'Parâmetro mp3 inválido em _capa.audio(); Mais detalhes em http://multimidia.ftd.com.br/capa';
          html += '</audio>';
        }

        if(document.querySelector(arg.id)===null){
        
          var div = document.createElement('div');
          div.id = arg.id;
          div.innerHTML = html;
          document.body.appendChild(div);
        
        } else document.querySelector(arg.id).innerHTML = html;

      } else throw 'Parâmetro id não existe em _capa.audio(); Mais detalhes em http://multimidia.ftd.com.br/capa';
    }

    var param = arguments[0];

    if(param instanceof Array){

      for(var i in param) audio(param[i]);

    } else audio(param);
  },

  video: function(){

    var video = function(){

      var arg = _capa.extend({
          id: undefined,
          mp4: undefined,
          srt: undefined,
          fullscreen: undefined,
          height: undefined,
          width: undefined,
          poster: undefined,
          autoplay: undefined,
          controls: undefined,
          loop: undefined,
          muted: undefined
      }, arguments[0]),
        html = '';

      if(_capa.ios && arg.fullscreen != undefined) arg.height = 700;

      if(arg.id){

        if(arg.fullscreen != undefined){

          if(_capa.android){

            try{ LED.playVideo(arg.mp4) }
            catch(e){}

          } else {

            html += '<video controls autoplay>';
            html += '<source src='+((arg.mp4)?arg.mp4:'')+' type=video/mp4>';
            if(arg.srt != undefined){
              html+= '<track src='+arg.srt+' kind=subtitle srclang='+_capa.idioma+' label='+_capa.idioma+'>';
            }
            html += '</video>';
            html += '<button id=_voltar>'+_capa.icone.voltar+'</button>';
          }

        } else {

          if(_capa.android){

            if(arg.autoplay != undefined) {

              if(arg.loop != undefined) {
                try{ LED.playVideo(arg.mp4, true) }
                catch(e){}
              } else {
                try{ LED.playVideo(arg.mp4) }
                catch(e){}
              }

            } else {
            
              html += ' <a class=_midia ';

              if(arg.mp4 != undefined) html += ' href=javascript:LED.playVideo(\''+arg.mp4+'\')';
              else throw 'Parâmetro mp4 não esiste em _capa.video(); Mais detalhes em http://multimidia.ftd.com.br/capa';

              if(arg.width != undefined && arg.height != undefined){
                html += ' style=width:'+arg.width+'px;height:'+arg.height+'px> ';
              }
              else throw 'Parâmetro width ou height não existem em _capa.video(); Mais detalhes em http://multimidia.ftd.com.br/capa';

              html += ' <button id=_tocar>'+_capa.icone.tocar+'</button> ';

              html += ' <img ';

              if(arg.poster != undefined) html += ' src='+arg.poster+' ';
              else throw 'Parâmetro poster não existe em _capa.video(); Mais detalhes em http://multimidia.ftd.com.br/capa';

              if(arg.width != undefined) html += ' width='+arg.width+' ';
              else throw 'Parâmetro width não existe em _capa.video(); Mais detalhes em http://multimidia.ftd.com.br/capa';

              if(arg.height != undefined) html += ' height='+arg.height+' ';
              else throw 'Parâmetro height não existe em _capa.video(); Mais detalhes em http://multimidia.ftd.com.br/capa';

              html += '></a>';
            }

          } else {

            html += ' <video preload ';

            if(arg.poster != undefined) html += ' poster='+arg.poster+' ';
            else throw 'Parâmetro poster não existe em _capa.video(); Mais detalhes em http://multimidia.ftd.com.br/capa';

            if(arg.width != undefined) html += ' width='+arg.width+' ';
            else throw 'Parâmetro width não existe em _capa.video(); Mais detalhes em http://multimidia.ftd.com.br/capa';

            if(arg.height != undefined) html += ' height='+arg.height+' ';
            else throw 'Parâmetro height não existe em _capa.video(); Mais detalhes em http://multimidia.ftd.com.br/capa';

            if(arg.autoplay != undefined) html += ' autoplay ';

            if(arg.controls != undefined) html += ' controls ';

            if(arg.loop != undefined) html += ' loop ';

            if(arg.muted != undefined) html += ' muted ';

            html += '>';

            if(arg.mp4 != undefined){
              html += '<source src='+arg.mp4+' type=video/mp4;codecs=avc1.42E01E,mp4a.40.2>';
            }
            else throw 'Parâmetro mp4 não esiste em _capa.video(); Mais detalhes em http://multimidia.ftd.com.br/capa';

            if(arg.srt != undefined){
              html+= '<track src='+arg.srt+' kind=subtitle srclang='+_capa.idioma+' label='+_capa.idioma+'>';
            }

            html += '</video>';
          }
        }

        if(document.querySelector(arg.id)===null){

          if(!_capa.android){
        
            var div = document.createElement('div');
            div.id = arg.id;
            if(arg.fullscreen) div.classList.add('_fullscreen');
            setTimeout(function(){
              if(arg.fullscreen) div.classList.add('_aberto');
              if(_capa.ios) div.classList.add('_ios');
            }, 100);
            div.innerHTML = html;
            document.body.appendChild(div);
          }
        
        } else document.querySelector(arg.id).innerHTML = html;

        var voltar = document.querySelector('#_voltar'),
            iframe = document.querySelector('._fullscreen');

        if(voltar!=null){

          voltar.onclick = function(){

            iframe.classList.add('_fechado');

            setTimeout(function(){
              voltar.parentNode.removeChild(voltar);
              iframe.parentNode.removeChild(iframe);
            }, 500);
          }
        }

      } else throw 'Parâmetro id não existe em _capa.video(); Mais detalhes em http://multimidia.ftd.com.br/capa';
    }

    var param = arguments[0];

    if(param instanceof Array){
      
      for(var i in param) video(param[i]);

    } else video(param);
  },

  controls: function(){

    var arg = _capa.extend({
        id: undefined,
        player: undefined,
        play: undefined,
        pause: undefined,
        mute: undefined,
        volume: undefined,
        subtitle: undefined,
        seek: undefined,
        duration: undefined,
        current: undefined,
        ended: undefined,
        controls: undefined,
        loop: undefined
    }, arguments[0]);

    var player = false;

    if(arg.id != undefined) player = document.querySelector('#'+arg.id+' audio, #'+arg.id+' video');
    else if(arg.player != undefined) player = document.querySelector(arg.id+' audio, '+arg.id+' video');
    else throw 'Parâmetro id não existe em _capa.controls(); Mais detalhes em http://multimidia.ftd.com.br/capa';

    if(player){

      if(arg.player != undefined) return player;

      if(player.paused && arg.play != undefined) player.play();

      if(player.played && arg.pause != undefined) player.pause();

      if(arg.mute != undefined) player.muted = arg.mute;

      if(arg.volume != undefined) player.volume = arg.volume;

      if(arg.subtitle != undefined){
        if(arg.subtitle) player.textTracks[0].mode = 'showing';
        else player.textTracks[0].mode = 'hidden';
      }
      
      if(arg.seek != undefined) player.currentTime = arg.seek;

      if(arg.duration != undefined) return player.duration;

      if(arg.current != undefined) return player.currentTime;

      if(arg.loop != undefined) player.loop = arg.loop;

      if(arg.controls != undefined) player.controls = arg.controls;

      if(arg.ended instanceof Function){
        player.addEventListener('ended', function(){ arg.ended(); });
      }
    }

    var audioLED = document.querySelector(arg.id+' div');

    if(audioLED && _capa.ios){

      var mp3LED = audioLED.getAttribute('mp3'),
          pausedLED = audioLED.getAttribute('play'),
          mutedLED = audioLED.getAttribute('mute'),
          volumeLED = audioLED.getAttribute('volume');

      if( arg.play && mp3LED && pausedLED ){

        try{ LED.killAllSounds() }
        catch(e){}
        audioLED.setAttribute('play','false');

      } else {

        try{ LED.playAudio(mp3LED) }
        catch(e){}
        audioLED.setAttribute('play','true');
      }

      if( arg.mute && mp3LED && mutedLED ){

        try{ LED.killAllSounds() }
        catch(e){}
        audioLED.setAttribute('mute','false');

      } else {

        try{ LED.playAudio(mp3LED) }
        catch(e){}
        audioLED.setAttribute('mute','true');
      }

      if( arg.volume && mp3LED && volumeLED ){

        try{ LED.killAllSounds() }
        catch(e){}
        audioLED.setAttribute('volume','false');

      } else {

        try{ LED.playAudio(mp3LED) }
        catch(e){}
        audioLED.setAttribute('volume','true');
      }
    }
  },

  reload: function(){

    var config = _capa.config,
        icon = _capa.icone;

    try{ LED.killAllSounds() }
    catch(e){}
    
    var av = document.querySelectorAll('audio, video');
    if(av.length>0){
      for(var i=0; i<av.length; i++){
        av[i].parentNode.removeChild(av[i]);
      }
    }

    var button = document.querySelector('#_botao'),
        capa = document.querySelector('#_capa');

    try { LED.reloadWidget() }

    catch(error){
      if(_capa.config.index) window.location = _capa.config.index;
      else location.reload();
    }

    if(capa) capa.className = '';
    if(button) button.innerHTML = icon[ _capa.logo ];

    return false;
  },

  close: function(){

    var config = _capa.config,
        icon = _capa.icone;

    try{ LED.killAllSounds() }
    catch(e){}
    
    var av = document.querySelectorAll('audio, video');

    if(av.length>0){
      for(var i=0; i<av.length; i++){
        av[i].parentNode.removeChild(av[i]);
      }
    }

    var button = document.querySelector('#_botao'),
        capa = document.querySelector('#_capa');

    try { LED.closeWidget() }
    catch(error){

      if(window.self === window.top) {
        window.open('','_self','');
        window.close();

      } else {
        window.parent.jQuery('#modal-preview').modal('hide');
      }
    }

    if(capa) capa.className = '';
    if(button) button.innerHTML = icon[ _capa.logo ];

    return false;
  },

  events: function(){

    var config = _capa.config,
        icon = _capa.icone;

    var button = document.querySelector('#_botao'),
        capa = document.querySelector('#_capa'),
        menu = document.querySelector('#_menu');

    document.getElementsByTagName('html')[0].onclick = function(){
      capa.className = '';
      menu.className = '';
      button.innerHTML = icon[ _capa.logo ];
    }

    button.onclick = function(event){

      event.stopPropagation();

      if(capa.className == '_aberto'){
        capa.className = '';
        menu.className = '';
        setTimeout(function () {
          button.innerHTML = icon[ _capa.logo ];
        }, 100);

      } else {
        capa.className = '_aberto';
        menu.className = '_aberto';
        setTimeout(function(){
          button.innerHTML = icon.voltar;
        }, 300);
      }
    }

    var ajuda = document.querySelector('#_ajuda'),
        creditos = document.querySelector('#_creditos');

    if(ajuda && config.ajuda){
      
      ajuda.onclick = function(event){

        event.stopPropagation();
        if(config.creditos) creditos.className = '';
        if(hasExpediente) expediente.className = '';

        if(typeof config.ajuda == 'function'){
          capa.className = '';
          button.innerHTML = icon[ _capa.logo ];
          config.ajuda();

        } else {
          if(ajuda.className == '_acordeao') ajuda.className = '';
          else ajuda.className = '_acordeao';
        }
      }
    }

    if(creditos && config.creditos){

      creditos.onclick = function(event){

        event.stopPropagation();
        if(config.ajuda) ajuda.className = '';
        if(hasExpediente) expediente.className = '';

        if(typeof config.creditos == 'function'){
          capa.className = '';
          button.innerHTML = icon[ _capa.logo ];
          config.creditos();

        } else {
          if(creditos.className == '_acordeao') creditos.className = '';
          else creditos.className = '_acordeao';
        }
      }
    }
    
    if(hasExpediente){
      
      var expediente = document.querySelector('#_expediente');

      if(expediente){

        expediente.onclick = function(event){

          event.stopPropagation();
          if(config.ajuda) ajuda.className = '';
          if(config.creditos) creditos.className = '';

          if(expediente.className == '_acordeao') expediente.className = '';
          else expediente.className = '_acordeao';
        }
      }
    }

    var recarregar = document.querySelector('#_recarregar');
    if(recarregar){
      recarregar.onclick = function(event){
        event.stopPropagation();
        _capa.reload();
      }
    }

    var fechar = document.querySelector('#_fechar');
    if(fechar){
      fechar.onclick = function(event){
        event.stopPropagation();
        _capa.close();
      }
    }
  }
}

if( _capa.android && _capa.ios ) window.onblur = function(){ _capa.close() }

_capa.start();