var TRINITY_CLOCKWORK = {
    version: '1.0',
    jQueryVersion: '2.1.1',

    binded: false,
    initialized: false,
    interactable: false,

    doDisableInteraction: function () {
        this.interactable = false;
    },

    doEnableInteraction: function () {
        this.interactable = true;
    },

    doInit: function (capa, oed) {
        if (this.initialized)
            return;

        this.__CAPA = capa;

        oed.__ENGINE = this;
        this.__OED = oed;

        this.doBind();

        this.initialized = true;

        this.doEnableInteraction();
    },

    doBind: function () {
        if (this.initialized || this.binded)
            return;

        if (typeof this.__OED === 'undefined' || this.__OED == null || !('doButtonClickProcessing' in this.__OED))
            $('.btn').click((function (_this) {
                return function (event) {
                    _this.doButtonClickProcessingFallBack(event, $(this));
                };
            })(this));
        else
            $('.btn').click((function (_this) {
                return function (event) {
                    if (!_this.interactable)
                        return;

                    _this.doDisableInteraction();

                    _this.__OED.doButtonClickProcessing(event, $(this));
                };
            })(this));

        this.binded = true;
    },

    doFadeIn: function ($obj, duration, callback) {
        if (typeof $obj === 'undefined' || $obj == null || !($obj instanceof $) || $obj.length == 0)
            return;

        if (typeof duration !== 'number')
            duration = 500;

        $obj.show();

        setTimeout(function () {
            $obj.css({ opacity: 1 });

            setTimeout(function () {
                if (typeof callback === 'function')
                    callback();
            }, duration);
        }, 50);
    },

    doFadeOut: function ($obj, duration, callback) {
        if (typeof $obj === 'undefined' || $obj == null || !($obj instanceof $) || $obj.length == 0)
            return;

        if (typeof duration !== 'number')
            duration = 500;

        $obj.css({ opacity: 0 });

        setTimeout(function () {
            $obj.hide();

            if (typeof callback === 'function')
                callback();
        }, duration);
    },

    doFadeTransition: function ($from, fadeOutDuration, fadeOutCallback, $to, fadeInDuration, fadeInCallback) {
        if (typeof $from === 'undefined' || $from == null || !($from instanceof $) || $from.length == 0)
            return;

        if (typeof $to === 'undefined' || $to == null || !($to instanceof $) || $to.length == 0)
            return;

        if (typeof fadeOutDuration !== 'number')
            fadeOutDuration = 500;

        if (typeof fadeInDuration !== 'number')
            fadeInDuration = 500;

        this.doFadeOut($from, fadeOutDuration, (function (_this) {
            return function () {
                if (typeof fadeOutCallback === 'function')
                    fadeOutCallback();

                _this.doFadeIn($to, fadeInDuration, fadeInCallback);
            };
        })(this));
    },

    doButtonClickProcessingFallBack: function (event, $button) {
        window.console.info(
            'X: ' + event.clientX + ' ' +
            'Y: ' + event.clientY + ' ' +
            'ID: ' + $button.attr('id')
        );
    },

    doPlayVideo: function (video) {
        if (typeof this.__CAPA !== 'undefined' && this.__CAPA != null && 'video' in this.__CAPA) {
            if ('android' in this.__CAPA && this.__CAPA.android && typeof LED !== 'undefined' && LED != null && 'playVideo' in LED)
                LED.playVideo(video);
            else {
                this.__CAPA.video({
                    id: 'videoPlayer',
                    mp4: video,
                    autoplay: true,
                    controls: true,
                    fullscreen: true
                });

                if (this.__CAPA.ios)
                    $('#videoPlayer > video').get(0).play();
            }
        }
        else
            window.console.warn('Trinity Clockwork can\'t play video without the right capa yet.');
    }
};



if (!('console' in window) || typeof window.console !== 'object')
    window.console = {};

if (!('log' in window.console))
    window.console.log = function (text) {
        alert(text);
    };

if (!('info' in window.console))
    window.console.info = function (text) {
        this.log('[Information] ' + text);
    };

if (!('error' in window.console))
    window.console.error = function (text) {
        this.log('[Error] ' + text);
    };

if (!('warn' in window.console))
    window.console.warn = function (text) {
        this.log('[Warning] ' + text);
    };



if (typeof jQuery === 'undefined' || typeof $ === 'undefined' || $ !== jQuery)
    window.console.error('Trinity Clockwork needs jQuery in order to run.');
else if ($.fn.jquery !== TRINITY_CLOCKWORK.jQueryVersion)
    window.console.warn('Trinity Clockwork was only tested in jQuery ' + TRINITY_CLOCKWORK.jQueryVersion + '.');
