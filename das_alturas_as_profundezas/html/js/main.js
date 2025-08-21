/* ##### JavaScript Principal ##### */

formatNumber = function (number) {
    var neg = number < 0;
    
    if (neg)
        number *= -1;
    
    var dec = null;
    number = String(number).split('.');
    
    if (number.length > 1)
        dec = number[1];
    
    number = number[0];
    
    var result = '';
    while (number.length > 3) {
        result = '.' + number.substr(Math.max(0, number.length - 3), 3) + result;
        number = number.substr(0, number.length - 3);
    }
    
    result = number + result;
    
    if (dec)
        result += ',' + dec;
    
    if (neg)
        result = '-' + result;
    
    return result;
}

var GAME = {
    HEIGHTS: {
        '5': 8848,
        '4': 6962,
        '3': 4100,
        '2': 3014,
        '1': 840,
        '-1': -6.7,
        '-2': -50,
        '-3': -400,
        '-4': -3800,
        '-5': -7000,
        '-6': -11000
    },
    
    initialized: false,
    interactable: false,
    selecteds: [],
    
    showPopup: function (hid) {
        $('#popup')
            .attr('data-hid', hid)
            .addClass('popup_' + hid)
            .show();

        $('#sound_' + hid)[0].play();
    },
    
    buildHTML: function () {
        if (this.selecteds.length != 2)
            return '';
        
        var html = '<font color="#ffff01">Distância: </font><font color="';
        
        var M = Math.max(this.selecteds[0], this.selecteds[1]);
        var H = GAME.HEIGHTS[M];
        
        var m = Math.min(this.selecteds[0], this.selecteds[1]);
        var h = GAME.HEIGHTS[m];
        
        html += (H < 0 ? '#990000' : '#ffffff');
        html += '">';
        html += formatNumber(H);
        html += ' - </font><font color="#ffffff">(</font><font color="';
        html += (h < 0 ? '#990000' : '#ffffff');
        html += '">';
        html += formatNumber(h);
        html += '</font><font color="#ffffff">) = </font>';
        
        if (h < 0) {
            html += '<font color="';
            html += (H < 0 ? '#990000' : '#ffffff');
            html += '">';
            html += formatNumber(H);
            html += '</font><font color="#ffffff"> + ';
            html += formatNumber(-h);
            html += ' = </font>';
        }
        
        html += '<font color="#ffff01">';
        html += formatNumber(H - h);
        html += '</font>';
        
        return html;
    },
    
    getResultHorizontalPosition: function () {
        return 1024 - $('#result').width() - 10;
    },
    
    getResultVerticalPosition: function () {
        return 130;
    },

    doBind: function () {
        $('.height > .button').click(function () {
            if (!GAME.interactable)
                return;

            var hid = $(this).data('hid');

            if (hid == 0 || GAME.selecteds.length == 2)
                GAME.showPopup(hid);
            else {
                if (GAME.selecteds.indexOf(hid) != -1)
                    return;

                GAME.interactable = false;

                GAME.selecteds.push(hid);

                var element = $(this).parent();
                var ocean = $('.height_0');

                var top = {
                    start: (hid > 0 ? parseInt(element.css('top')) + parseInt(element.css('height')) - 4: parseInt(element.css('top')) + 2 + (hid == -1 ? 1 : 0)),
                    end: 0
                };
                top.end = (hid > 0 ? top.start : parseInt(ocean.css('top')) + 4);

                var height = {
                    start: 0,
                    end: (hid > 0 ? parseInt(ocean.css('top')) - top.start + 3: top.start - top.end)
                }

                $('#meter_' + (GAME.selecteds.length - 1))
                    .css({ 
                        backgroundColor: (hid > 0 ? '#0099cc' : '#990000'),
                        left: parseInt(element.css('left')) + parseInt(element.css('width')) - 52,
                        height: height.start + 'px',
                        top: top.start + 'px'
                    })
                    .show()
                    .animate({
                        height: height.end + 'px',
                        top: top.end + 'px'
                    }, 1000, function () {
                        if (GAME.selecteds.length == 2) {
                            for (i = -6; i < 6; i++)
                                if (i != 0 && GAME.selecteds.indexOf(i) == -1)
                                    $('.height_' + i).hide();

                            $('.height_0')
                                .removeClass('enabled')
                                .addClass('disabled');

                            var M = Math.max(GAME.selecteds[0], GAME.selecteds[1]);
                            var O = $('.height_' + M);
                            
                            var m = Math.min(GAME.selecteds[0], GAME.selecteds[1]);
                            var o = $('.height_' + m);
                            
                            top = {
                                start: (m < 0 ? parseInt(o.css('top')) + 2 : parseInt(o.css('top')) + parseInt(o.css('height')) - 4),
                                end: (M < 0 ? parseInt(O.css('top')) + 2 : parseInt(O.css('top')) + parseInt(O.css('height')) - 4)
                            };
                            
                            height = {
                                start: 0,
                                end: top.start - top.end
                            };
                            
                            $('#meter_2')
                                .css({ 
                                    height: height.start + 'px',
                                    top: top.start + 'px'
                                })
                                .show()
                                .animate({
                                    height: height.end + 'px',
                                    top: top.end + 'px'
                                }, 1000, function () {
                                    $('#result')
                                        .css({
                                            left: '0px', top: '0px'
                                        })
                                        .html(GAME.buildHTML())
                                        .css({
                                            left: GAME.getResultHorizontalPosition(),
                                            top: GAME.getResultVerticalPosition()
                                        })
                                        .show();
                                    
                                    $('#back').show();
                                });
                        }

                        GAME.interactable = true;
                    });
            }
        });

        $('#back').click(function () {
            GAME.selecteds.pop();
            GAME.selecteds.pop();

            $('#back').hide();
            $('#result').hide();
            $('.meter').hide();
            $('.height_0')
                .removeClass('disabled')
                .addClass('enabled');
            $('.height').show();
        });

        $('#popup > .button').click(function () {
            var hid = $('#popup').attr('data-hid');
            console.log(hid);

            var sound = $('#sound_' + hid)[0];
            sound.pause();
            sound.currentTime = 0;

            $('#popup')
                .hide()
                .removeClass('popup_' + hid)
                .removeAttr('data-hid');
        });
    },
    
    doInit: function () {
        this.interactable = false;
        this.selecteds = [];

        if (!this.initialized) {
            this.doBind();
            initialized = true;
        }
        
        $('#title').show().animate({ opacity: 1 }, 1000, function () {
            $('#title').animate({ opacity: 1 }, 2000, function () {
                $('#title').animate({ opacity: 0 }, 1000, function () {
                    $('#title').hide();
                    
                    $('#instructions').show().animate({ opacity: 1 }, 1000, function () {
                        $('#instructions').animate({ opacity: 1 }, 5000, function () {
                            $('#instructions').animate({ opacity: 0 }, 1000, function () {
                                $('#instructions').hide();
                                
                                $('.height').show();
                                $('#ruler').show();

                                GAME.interactable = true;
                            });
                        });
                    });
                });
            });
        });
    }
};

$(document).ready(function () {
    GAME.doInit();
});
