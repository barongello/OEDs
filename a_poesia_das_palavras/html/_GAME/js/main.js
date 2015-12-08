/* ##### JavaScript Principal ##### */

var GAME = {
    answerPositions: {
        0: {
            left: '800px',
            top: '700px'
        },
        1: {
            left: '665px',
            top: '650px'
        },
        2: {
            left: '785px',
            top: '630px'
        },
        3: {
            left: '535px',
            top: '690px'
        },
        4: {
            left: '550px',
            top: '600px'
        },
        5: {
            left: '725px',
            top: '560px'
        },
        6: {
            left: '635px',
            top: '510px'
        }
    },

    answerTips: {
        0: 'Como um grande<br />borrão de fogo sujo',
        1: 'O circo era um<br />balão aceso',
        2: 'Bendito o que fez o<br />fogo e o teto na terra',
        3: 'Vozes macias',
        4: 'Pernas - Rolley-Flex',
        5: 'A indesejada<br />das gentes',
        6: '<b>P</b>edro <b>p</b>edreiro <b>p</b>enseiro<br />es<b>p</b>erando'
    },

    doBind: function () {
        $('#gameScene0 > .title > .button').click(GAME.startGame);

        $('#gameScene1 > .pic').mouseenter(function () {
            $('#gameScene1 > .pic')
                .removeClass('enabled')
                .addClass('disabled');
            $(this).removeClass('disabled').addClass('enabled');
        });

        $('#gameScene1 > .pic').click(function () {
            $(this).find('.check').removeClass('disabled');
            
            var pic_id = $(this).attr('gameid');
            for (i = 0; i < 7; i++)
                $('#gameScene1 > .explanation > .pic').removeClass('pic' + i);

            $('#gameScene1 > .explanation > .pic').addClass('pic' + pic_id);

            $('#gameScene1 > .explanation > .text > p').hide();
            $('#gameScene1 > .explanation > .text > table').hide();
            $('#gameScene1 > .explanation > .text > p.text' + pic_id).show();
            $('#gameScene1 > .explanation > .text > table.text' + pic_id).show();
            
            $('#gameScene1 > .explanation').show();
            $({ deg: -7 }).animate(
                { deg: 0 },
                {
                    duration: 1000,
                    step: function(now) {
                        $('#gameScene1 > .explanation').css({
                            'transform': 'rotate(' + now + 'deg)',
                            '-ms-transform': 'rotate(' + now + 'deg)',
                            '-webkit-transform': 'rotate(' + now + 'deg)',
                            'opacity': 1 - now,
                            'background-color': 'rgba(0, 0, 0, ' + (0.6 + now / 7) + ')'
                        });
                    }
                }
            );

            if ($('#gameScene1 > .pic > .disabled').length == 0)
                $('#gameScene1 > .next').show();
            
        });

        $('#gameScene1 > .explanation > .button').click(function () {
            $('#gameScene1 > .explanation').hide();
            $('#gameScene1 > .explanation').css({
                'transform': 'rotate(-7deg)',
                '-ms-transform': 'rotate(-7deg)',
                '-webkit-transform': 'rotate(-7deg)',
                'opacity': 0,
                'background-color': 'rgba(0, 0, 0, 0)'
            });
        });

        $('#gameScene1 > .next').click(function () {
            $('#gameScene1').fadeOut(1000);
            $('#gameScene2').fadeIn(1000);
        });

        $('#gameScene2 > .back').click(function () {
            $('#gameScene2').fadeOut(1000);
            $('#gameScene1').fadeIn(1000);
            $('#gameScene1 > .pic').animate(
                {
                    top: '-=75px'
                },
                0
            )
            .animate(
                {
                    top: '+=75px'
                },
                {
                    duration: 1000,
                    easing: 'easeOutBounce'
                }
            );
        });

        $('#gameScene2 > .validate').click(function () {
            $('.tip').removeClass('correct').removeClass('wrong').html('');

            for (i = 0; i < 7; i++) {
                var o = $('.answer' + i);
                if (o.attr('box') != o.attr('bound')) {
                    o.attr('bound', '-1');
                    o.animate(GAME.answerPositions[i], 500);
                    $('.question' + i + ' > .tip').addClass('wrong').html(GAME.answerTips[i]);
                }
                else {
                    $('.question' + o.attr('box') + ' > .tip').addClass('correct');
                }
            }

            if ($('.answer[bound=-1]').length > 0)
                $('#gameScene2 > .validate').hide();
            else
                $('#gameScene2 > .congratulations').show();
        });

        $('#gameScene2 > .congratulations > .restart').click(function () {
            $('.validate').hide();

            $('.tip').removeClass('correct').removeClass('wrong').html('');

            for (i = 0; i < 7; i++)
                $('.answer' + i).attr('bound', '-1').animate(GAME.answerPositions[i], 500);
            
            $('.congratulations').hide();
        });
    },

    startGame: function () {
        $('#gameScene0').hide();
        $('#gameScene1').fadeIn(1000);
        $('#gameScene1 > .title').animate(
            {
                left: '50px',
                top: '50px'
            },
            1000
        );
        $('#gameScene1 > .pic').animate(
            {
                top: '-=75px'
            },
            0
        )
        .animate(
            {
                top: '+=75px'
            },
            {
                duration: 1000,
                easing: 'easeOutBounce'
            }
        );
        
    },

    doInit: function() {
        $(window).mousemove(function(e){
            window.mouseXPos = e.pageX;
            window.mouseYPos = e.pageY;
        });

        var positionClick = {left: 0, top: 0};

        for (i = 0; i < 7; i++)
            $('.answer' + i).css(GAME.answerPositions[i]).attr('bound', '-1');


        $('#gameScene2 > .question > .box').droppable({
            drop: function (event, ui) {
                var p = $(this).parent();
                var o = $(ui.draggable[0]);
                if ($('.answer[bound=' + $(this).attr('box') + ']').length > 0)
                    o.animate(GAME.answerPositions[o.attr('box')], 500);
                else {
                    o.attr('bound', $(this).attr('box'));
                    o.animate({
                        left: p.css('left'),
                        top: p.css('top')
                    }, 500);
                }
            }
        });

        $('#gameScene2 > .answer').draggable({
            start: function (event, ui) {
                positionClick.left = event.offsetX;
                positionClick.top = event.offsetY;
                $(this).css('z-index', 6);
                $(this).attr('bound', '-1');
            },
            drag: function(event,ui) {                
                ui.position.left = (window.mouseXPos / window._zoomScale) - positionClick.left;
                ui.position.top = (window.mouseYPos / window._zoomScale ) - positionClick.top;
            },
            stop: function (event, ui) {
                $(this).css('z-index', 5);
                if ($(this).attr('bound') == '-1')
                    $(this).animate(GAME.answerPositions[$(this).attr('box')], 500);
                if ($('.answer[bound=-1]').length == 0)
                    $('#gameScene2 > .validate').show();
                else
                    $('#gameScene2 > .validate').hide();
            }
        });

        GAME.doBind();
    }
}

$(document).ready(function () {
    _capa.start();
    GAME.doInit();

    window._zoomScale = (function(){
        var w = window.innerWidth/1024;
        var h = window.innerHeight/768;
        return Math.min(1,w,h);
    })();

});
