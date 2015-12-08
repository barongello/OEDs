/* ##### JavaScript Principal ##### */

random = function (max) {
    return Math.floor(Math.random() * max);
};

var GAME = {
    initialized: false,
    interactable: false,
    changingsound: false,
    music: true,
    difficulty: 0,
    playing: false,
    question: 0,
    questions: [
        [
            {
                index: 0,
                question:'(1/2)²-(1/4)',
                answers: ['1/4', '-1/6', '2', '-3', '5/4', '3/4', '-1', '-1/2'],
                right: '0'
            },
            {
                index: 1,
                question:'3/6 : 1/2',
                answers: ['1/3', '0', '-1', '1/2', '1/6', '3', '1/8', '2'],
                right: '1'
            },
            {
                index: 2,
                question:'1/3 : 2/8',
                answers: ['8/5', '2/11', '0', '-1', '-1/5', '-4/3', '1/4', '2', '1'],
                right: '4/3'
            },
            {
                index: 3,
                question: '2/8 x 4/6',
                answers: ['0', '-1/6', '3/7', '1', '2/14', '-1/2', '2/3', '1/24', '-1'],
                right: '1/6'
            },
            {
                index: 4,
                question: '2/4 : 3/4',
                answers: ['3/2', '1', '-2/3', '0', '5/4', '1/2', '4/3', '-6/3'],
                right: '2/3'
            }
        ],
        [
            {
                index: 5,
                question: '2-² + 1/4',
                answers: ['1/4', '-1/6', '2', '-3', '5/4', '3/4', '-1', '0', '-1/2'],
                right: '1/2'
            },
            {
                index: 6,
                question: '2/5 + 3/6',
                answers: ['5/11', '-1', '0', '1/6', '1/11', '1/2', '1', '5/6', '3/5'],
                right:'9/10'
            },
            {
                index: 7,
                question: '1² + 5/6',
                answers: ['1', '7/6', '13/6', '0', '1/2', '-1', '1/6', '1/2', '1/3'],
                right: '11/6'
            },
            {
                index: 8,
                question: '1/6 - 2/12',
                answers: ['-1/6', '-1', '1', '1/18', '1/2', '3/12', '1/12', '2'],
                right: '0'
            }
        ],
        [
            {
                index: 9,
                question: '(2/3)² : 2/3',
                answers: ['2', '0', '-2/3', '1', '1/9', '2/9', '1/3'],
                right: '2/3'
            },
            {
                index: 10,
                question: '(-4)² + 1/6',
                answers: ['-15/6', '3/2', '1', '-1', '0', '17/6', '7/6', '-5/6', '1/6'],
                right: '97/6'
            },
            {
                index: 11,
                question: '3/7 - 5',
                answers: ['-2/7', '0', '-1', '16/7', '8/7', '-8/7', '1/2', '2/7', '20/7'],
                right: '-32/7'
            },
            {
                index: 12,
                question: '(-2)³ + 2/9',
                answers: ['8/9', '0', '10/9', '7/9', '2/9', '1', '-1/2', '1/3', '13/3'],
                right: '-70/9'
            }
        ]
    ],
    exits: [2, 9, 14, 19, 22, 15, 10, 5],
    exit: null,
    
    dragging: false,
    draggedobj: null,
    draggedpos: {
        x: -1,
        y: -1
    },
    draggedindex: -1,
    grid: null,
    
    resetBlocksAndPositions: function () {
        this.grid = [
            -1, -1, -1, -1, -1,
            -1,  1,  2,  3, -1,
            -1,  4,  5,  6, -1,
            -1,  7,  8,  0, -1,
            -1, -1, -1, -1, -1
        ];
        
        for (var i = 0; i < 8; i++) {
            var x = (i % 3) + 1;
            var y = Math.floor(i / 3) + 1;
            
            $('#box' + (i + 1)).css({
                left: (x * 127) + 'px',
                top: (y * 127) + 'px'
            });
        }
    },
    
    loadActualQuestion: function () {
        if (this.question < 0)
            return;

        if (this.question >= this.questions[this.difficulty].length) {
            $('#gameBoard > #finishGame').show();

            return;
        }

        var answers_order = [1, 2, 3, 4, 5, 6, 7, 8];

        for (var i = 0; i < 100; i++) {
            var a = random(this.questions[this.difficulty][this.question].answers.length);
            var b = random(this.questions[this.difficulty][this.question].answers.length);

            var c = this.questions[this.difficulty][this.question].answers[a];
            this.questions[this.difficulty][this.question].answers[a] = this.questions[this.difficulty][this.question].answers[b];
            this.questions[this.difficulty][this.question].answers[b] = c;

            a = random(8);
            b = random(8);

            c = answers_order[a];
            answers_order[a] = answers_order[b];
            answers_order[b] = c;
        }

        var answers = [this.questions[this.difficulty][this.question].right];

        for (var i = 0; i < 7; i++)
            answers.push(this.questions[this.difficulty][this.question].answers[i]);

        $('.box').removeAttr('answerid');

        for (var i = 0; i < 13; i++)
            $('#gameBoard > #questionTitle').removeClass('question_title_' + i);

        $('#gameBoard > #questionTitle').addClass('question_title_' + this.questions[this.difficulty][this.question].index);

        for (var i = 0; i < 8; i++) {
            var box =  $('.box[boxid=' + answers_order[i] + ']');

            box.attr('answerid', answers[i]);
            if (answers[i].indexOf('/') == -1) {
                box.find('.slash, .denominator').hide();
                box.find('.numerator').css({ height: '127px' });
                box.find('.numerator > .text')
                    .css({ verticalAlign: 'middle' })
                    .html(answers[i]);
            }
            else {
                var negative_answer = (answers[i][0] == '-');
                var sanitized_answer = answers[i].replace('-', '');

                box.find('.slash')
                    .removeClass('slash_positive')
                    .removeClass('slash_negative')
                    .addClass('slash_' + (negative_answer ? 'negative' : 'positive'));

                box.find('.slash, .denominator').show();
                var tmp = sanitized_answer.split('/');
                box.find('.numerator').removeAttr('style');
                box.find('.numerator > .text')
                    .removeAttr('style')
                    .html((negative_answer ? '&nbsp;&nbsp;' : '') + tmp[0]);
                box.find('.denominator > .text').html((negative_answer ? '&nbsp;&nbsp;' : '') + tmp[1]);
            }
        }

        this.exit = random(8);

        $('#boundBox').removeAttr('class').addClass('boundbox_' + this.exit);

        this.resetBlocksAndPositions();

        this.grid[this.exits[this.exit]] = -2;

        this.interactable = true;
    },
    
    startNewGame: function () {
        this.question = 0;

        for (var i = 0; i < 100; i++) {
            var a = random(this.questions[this.difficulty].length);
            var b = random(this.questions[this.difficulty].length);

            var c = this.questions[this.difficulty][a];
            this.questions[this.difficulty][a] = this.questions[this.difficulty][b];
            this.questions[this.difficulty][b] = c;
        }

        this.loadActualQuestion();
    },

    doBind: function () {
        if (this.initialized)
            return;
        
        $('#gameIntro > #introCard > #introCardCredits').mousedown(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;
            $('#gameIntro > #gameCredits')
                .css({ left: '1024px' })
                .animate({ left: '-=1024px' }, 500, function () {
                    GAME.interactable = true;
                });
        });
        
        $('#gameCredits > #creditsBack').mousedown(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;
            $('#gameIntro > #gameCredits')
                .css({ left: '0px' })
                .animate({ left: '+=1024px' }, 500, function () {
                    GAME.interactable = true;
                });
        });
        
        $('#gameIntro > #introCard > #introCardHelp').mousedown(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;
            $('#gameIntro > #gameHelp')
                .css({ left: '1024px' })
                .animate({ left: '-=1024px' }, 500, function () {
                    GAME.interactable = true;
                });
        });
        
        $('#gameHelp > #helpCard > #helpCardBack').mousedown(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;
            $('#gameIntro > #gameHelp')
                .css({ left: '0px' })
                .animate({ left: '+=1024px' }, 500, function () {
                    GAME.interactable = true;
                });
        });
        
        $('#gameIntro > #introCard > #introCardStart').mousedown(function () {
            if (!GAME.interactable)
                return;
            
            GAME.interactable = false;
            GAME.difficulty = 0;
            
            $('#sound_ambient')[0].play();
            
            $('#gameMenu').show();
            $('#gameIntro').hide();

            $('#gameMenu > #title_letter_j').css({ top: '-311px' });
            $('#gameMenu > #title_letter_o_1').css({ top: '-211px' });
            $('#gameMenu > #title_letter_g').css({ top: '-111px' });
            $('#gameMenu > #title_letter_o_2').css({ top: '-411px' });
            
            $('#gameMenu > #title_part_1')
                .css({
                    left: '1024px',
                    top: '145px'
                })
                .animate({
                    left: '330px'
                }, 500);
            
            $('#gameMenu > #title_part_2')
                .css({
                    left: '-502px',
                    top: '200px'
                })
                .animate({
                    left: '265px'
                }, 500, function () {
                    $('#gameMenu > #title_letter_g').animate({ top: '228px' }, 500);
                    $('#gameMenu > #title_letter_o_1').animate({ top: '228px' }, 500);
                    $('#gameMenu > #title_letter_j').animate({ top: '228px' }, 500);
                    $('#gameMenu > #title_letter_o_2').animate({ top: '228px' }, 500, function () {
                        $('#gameMenu > #title_letter_g').animate({ top: '-=115px' }, 200, function () {
                            $('#gameMenu > #title_letter_o_1').animate({ left: '-=115px' }, 200, function () {
                                $('#gameMenu > #title_letter_g').animate({ left: '+=115px' }, 200, function () {
                                    $('#gameMenu > #title_letter_o_1').animate({ top: '-=115px' }, 200, function () {
                                        $('#gameMenu > #title_letter_j').animate({ left: '-=230px' }, 200, function () {
                                            $('#gameMenu > #title_letter_g').animate({ top: '+=115px' }, 200, function () {
                                                $('#gameMenu > #title_letter_o_1').animate({ left: '+=115px' }, 200, function () {
                                                    $('#gameMenu > #title_letter_g').animate({ left: '+=115px' }, 200, function () {
                                                        $('#gameMenu > #title_letter_o_1').animate({ top: '+=115px' }, 200, function () {
                                                            GAME.interactable = true;
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
        });
        
        $('#gameMenu > .level').mousedown(function () {
            if (!GAME.interactable)
                return;

            GAME.difficulty = parseInt($(this).attr('levelid'));
            
            $('#gameMenu > .level').removeClass('enabled');
            
            $(this).addClass('enabled');
        });

        $('#gameMenu > #menuStart').mousedown(function () {
            if (!GAME.interactable)
                return;

            GAME.playing = true;
            GAME.interactable = false;
            GAME.startNewGame();

            $('#gameBoard').show();
            $('#gameMenu').hide();
        });
        
        $('.box').mousedown(function () {
            if (!GAME.interactable || GAME.dragging)
                return;

            GAME.dragging = true;
            GAME.draggedobj = this;
            GAME.draggedindex = GAME.grid.indexOf(parseInt($(this).attr('boxid')));
            GAME.draggedpos.x = GAME.draggedindex % 5;
            GAME.draggedpos.y = Math.floor(GAME.draggedindex / 5);

            var sound = $('#sound_piece')[0];
            sound.currentTime = 0;
            sound.play();
        });
        
        $('#boundBox').mousemove(function (event) {
            if (!GAME.interactable || !GAME.dragging || event.target != this)
                return;

            var mousepos = {
                x: Math.floor(event.offsetX / 127),
                y: Math.floor(event.offsetY / 127)
            };
            var mouseindex = mousepos.y * 5 + mousepos.x;
            
            if (GAME.grid[mouseindex] == 0 || GAME.grid[mouseindex] == -2) {
                var dx = Math.abs(mousepos.x - GAME.draggedpos.x);
                var dy = Math.abs(mousepos.y - GAME.draggedpos.y);
                var d = Math.sqrt(dx * dx + dy * dy);

                if (d == 1) {
                    GAME.grid[mouseindex] = GAME.grid[GAME.draggedindex];
                    GAME.grid[GAME.draggedindex] = (GAME.draggedindex != GAME.exits[GAME.exit] ? 0 : -2);
                    
                    $(GAME.draggedobj).css({
                        left: (mousepos.x * 127) + 'px',
                        top: (mousepos.y * 127) + 'px'
                    });
                    
                    GAME.draggedpos.x = mousepos.x;
                    GAME.draggedpos.y = mousepos.y;
                    GAME.draggedindex = mouseindex;
                }
            }
        });
        
        $(document).mouseup(function (event) {
            if (!GAME.playing || !GAME.interactable || !GAME.dragging)
                return;

            if (GAME.grid[GAME.exits[GAME.exit]] != -2) {
                if ($( '.box_' + GAME.grid[GAME.exits[GAME.exit]]).attr('answerid') == GAME.questions[GAME.difficulty][GAME.question].right) {
                    $('#gameBoard > #correctAnswer > #correctFormula')
                        .removeAttr('class')
                        .addClass('formula_' + GAME.questions[GAME.difficulty][GAME.question].index);
                    $('#gameBoard > #correctAnswer > #correctBox')
                        .removeAttr('class')
                        .addClass('box_' + GAME.grid[GAME.exits[GAME.exit]])
                        .html($('#box' + GAME.grid[GAME.exits[GAME.exit]]).html());
                    $('#gameBoard > #correctAnswer').show();
                }
                else
                    $('#gameBoard > #wrongAnswer').show();
            }

            GAME.dragging = false;
            GAME.draggedobj = null;
            GAME.draggedpos.x = -1;
            GAME.draggedpos.y = -1;
            GAME.draggedindex = -1;
        });

        $('#gameBoard > #boardExit').mousedown(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;
            GAME.playing = false;

            $('#gameMenu').show();
            $('#gameBoard').animate({ opacity: 0 }, 500, function () {
                $('#gameBoard').hide().removeAttr('style');

                GAME.interactable = true;
            });
        });

        $('#gameBoard > #correctAnswer > #correctContinue').mousedown(function () {
            GAME.question += 1;

            GAME.loadActualQuestion();

            $('#gameBoard > #correctAnswer').hide();
        });

        $('#gameBoard > #finishGame > #finishContinue').mousedown(function () {
            $('#gameBoard > #finishGame').hide();

            $('#gameBoard > #boardExit').mousedown();
        });

        $('#gameBoard > #wrongAnswer > #wrongContinue').mousedown(function () {
            var boxid = GAME.grid[GAME.exits[GAME.exit]];
            var box = $('.box_' + boxid);

            if (GAME.exit == 0) {
                GAME.grid[GAME.exits[GAME.exit] + 5] = boxid;
                box.css({ top: (parseInt(box.css('top')) + 127) + 'px' });
            }
            else if (GAME.exit == 1 || GAME.exit == 2 || GAME.exit == 3) {
                GAME.grid[GAME.exits[GAME.exit] - 1] = boxid;
                box.css({ left: (parseInt(box.css('left')) - 127) + 'px' });
            }
            else if (GAME.exit == 4) {
                GAME.grid[GAME.exits[GAME.exit] - 5] = boxid;
                box.css({ top: (parseInt(box.css('top')) - 127) + 'px' });
            }
            else if (GAME.exit == 5 || GAME.exit == 6 || GAME.exit == 7) {
                GAME.grid[GAME.exits[GAME.exit] + 1] = boxid;
                box.css({ left: (parseInt(box.css('left')) + 127) + 'px' });
            }

            GAME.grid[GAME.exits[GAME.exit]] = -2;

            $('#gameBoard > #wrongAnswer').hide();
        });
        
        $('#sound_control').mousedown(function () {
            if (GAME.changingsound)
                return;
            
            GAME.changingsound = true;
            
            GAME.music = !GAME.music;
            
            var sound_1 = $('#sound_ambient')[0];
            var sound_2 = $('#sound_piece')[0];
            
            if (GAME.music) {
                $('#sound_control').addClass('enabled').removeClass('disabled');
                sound_1.volume = 1;
                sound_2.volume = 1;
            }
            else {
                $('#sound_control').addClass('disabled').removeClass('enabled');
                sound_1.volume = 0;
                sound_2.volume = 0;
            }
            
            GAME.changingsound = false;
        });
        
        this.initialized = true;
    },
    
    doInit: function () {
        this.interactable = false;
        this.changingsound = false;
        this.music = true;
        this.difficulty = 0;
        this.playing = false;
        this.question = 0;
        this.exit = null;

        if (!this.initialized)
            this.doBind();

        this.interactable = true;
    }
};

$(document).ready(function () {
    $('body').children().bind('touchstart touchmove touchend touchcancel', function(){
        var touches = event.changedTouches;
        var first = touches[0];
        var type = '';

        switch (event.type) {    
            case 'touchstart':
                type = 'mousedown'; 
                break;    
            case 'touchmove':
                type = 'mousemove'; 
                break;            
            case 'touchend':
                type = 'mouseup'; 
                break;    
            default:
                return;
        }
    
        var simulatedEvent = document.createEvent('MouseEvent');

        simulatedEvent.initMouseEvent(type, true, true, window, 1,
                          first.screenX, first.screenY,
                          first.clientX, first.clientY, false,
                          false, false, false, 0/*left*/, null);
    
        var e = document.elementFromPoint(first.clientX, first.clientY);

        e.dispatchEvent(simulatedEvent);

        event.preventDefault();
    });

    GAME.doInit();
});
