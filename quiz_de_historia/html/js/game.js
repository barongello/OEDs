var GAME = {
    DATA: null,
    gameRemainingTime: 0,
    questionRemainingTime: 0,
    actualQuestion: 0,
    questionRunning: false,
    clock: null,
    score: {
        right: 0,
        wrong: 0
    },
    customMultiUseButtonHandle: null,
    customShowIntroduction: null,
    canInteract: false,

    setRotation: function(elements, degrees) {
        elements.css({
            'WebkitTransform': 'rotate(' + degrees + 'deg)',
            '-moz-transform':  'rotate(' + degrees + 'deg)',
            '-o-transform':  'rotate(' + degrees + 'deg)',
            '-ms-transform':  'rotate(' + degrees + 'deg)'
        });
    },

    resetGameTimer: function () {
        this.gameRemainingTime = this.DATA.timePerGame || 0;
        this.setRotation(
            $('#gameGameTimer > .hour, #gameGameTimer > .minute'),
            0
        );
    },

    resetQuestionTimer: function () {
        this.questionRemainingTime = this.DATA.timePerQuestion || 0;
        this.setRotation(
            $('#gameQuestionTimer > .hour, #gameQuestionTimer > .minute'),
            0
        );
    },

    updateScore: function () {
        $('#gameScore > div > span.right').text(this.score.right);
        $('#gameScore > div > span.wrong').text(this.score.wrong);
    },

    resetScore: function () {
        this.score = {
            right: 0,
            wrong: 0
        };

        this.updateScore();
    },

    setGameBackgroundImage: function (filename) {
        if (filename != 'none')
            filename = 'url(img/' + filename + ')';
        
        $('#gameBackground').css({ backgroundImage: filename });
    },

    setTitleHTML: function (html) {
        $('#gameAnnounce > div').html(html);
    },

    setMultiUseButtonHTML: function (html) {
        $('#gameMultiUseButton > div').html(html);
    },

    setContainerBackgroundImage: function (filename) {
        if (filename != 'none')
            filename = 'url(img/' + filename + ')';

        $('#gameSeal > div.container').css({ backgroundImage: filename });
    },

    setContainerHTML: function (html) {
        $('#gameSeal > div.container > div').html(html);
    },

    showContainer: function (callback) {
        $('#gameSeal').animate({ opacity: 1 }, 500, function () {
            if (callback)
                callback();
        });
    },

    hideContainer: function (callback) {
        $('#gameSeal').animate({ opacity: 0 }, 500, function () {
            if (callback)
                callback();
        });
    },

    endGame: function () {
        $('#gameMultiUseButton > div').removeClass('showPicture').addClass('restartGame');
        this.setMultiUseButtonHTML(this.DATA.resultMultiUseButtonText);
        $('#gameMultiUseButton > div').animate({ opacity: 1 }, 500, function () {
            GAME.setTitleHTML(GAME.DATA.resultTitle);
            $('#gameAnnounce > div').animate({ opacity: 1 }, 500, function () {
                GAME.setGameBackgroundImage(GAME.DATA.gameBackground);
                $('#gameBackground').animate({ opacity: 1 }, 500, function () {
                    GAME.setContainerBackgroundImage('none');
                    GAME.setContainerHTML(GAME.DATA.endMessages[GAME.score.right]);
                    $('#gameSeal').animate({ opacity: 1 }, 500, function () {
                        GAME.canInteract = true;
                    });
                });
            });
        });
    },

    resetGame: function () {
        data = this.DATA;

        this.actualQuestion = 0;
        this.questionRunning = false;
        this.canInteract = false;

        this.setGameBackgroundImage(data.gameBackground);

        this.resetGameTimer();
        if (data.showGameTimer)
            $('#gameGameTimer').show();
        else
            $('#gameGameTimer').hide();

        this.resetQuestionTimer();
        if (data.showQuestionTimer)
            $('#gameQuestionTimer').show();
        else
            $('#gameQuestionTimer').hide();

        this.resetScore();
        if (data.showScore)
            $('#gameScore').show();
        else
            $('#gameScore').hide();

        this.setTitleHTML(
            data.titleText ||
            'Quiz'
        );

        $('#gameMultiUseButton > div').removeClass().addClass('startButton');
        this.setMultiUseButtonHTML(
            data.startButtonText ||
            'Iniciar'
        );

        this.setContainerBackgroundImage(
            data.instructionImage ||
            'none'
        );
        this.setContainerHTML(
            data.instructionText ||
            (
                !data.instructionImage &&
                'Sem texto de instru&ccedil;&atilde;o.'
            )
        );

        $('#gameOptions > div.questionOption').remove();

        $('#gameNext > div').html(data.nextButtonText);

        $('#gameExplanation').css({ zIndex: -1, opacity: 0 });
    },

    optionClick: function (event) {
        if (!GAME.canInteract)
            return;

        button = event.currentTarget;
        question = GAME.DATA.questions[GAME.actualQuestion - 1];

        if ($(button).hasClass('right') || $(button).hasClass('wrong'))
            return;

        if ($(button).attr('option') == question.rightAnswer) {
            GAME.score.right += 1;
            GAME.updateScore();
            if ($('#gameSeal').css('opacity') == 1)
                    $('#gameMultiUseButton > div.showPicture').click();
            GAME.canInteract = false;
            clearInterval(GAME.clock);
            $(button).addClass('right');
            $('#gameOptions > div.questionOption').each(function (index, item) {
                if ($(item).attr('option') != question.rightAnswer)
                    $(item).addClass('wrong');
            });
            $('#gameExplanation').css({ zIndex: 5 }).animate({ opacity: 1 }, 500, function () {
                $('#gameMultiUseButton > div').css({ opacity: 0 });
                $('#gameAnnounce > div').css({ opacity: 0 });
                $('#gameBackground').css({ opacity: 0 });
                $('#gameOptions').css({ opacity: 0, zIndex: -1 });
                if (GAME.DATA.useQuestionTimer)
                    GAME.setRotation($('#gameQuestionTimer > div.hour, #gameQuestionTimer > div.minute'), 0);
                if (GAME.DATA.useGameTimer)
                    GAME.setRotation($('#gameTimer > div.hour, #gameTimer > div.minute'), 0);
            });
        }
        else {
            GAME.score.wrong += 1;
            GAME.updateScore();
            $(button).addClass('wrong');

            if (GAME.DATA.questions[GAME.actualQuestion - 1].stopOnError) {
                if ($('#gameSeal').css('opacity') == 1)
                    $('#gameMultiUseButton > div.showPicture').click();
                GAME.canInteract = false;
                clearInterval(GAME.clock);
                $('#gameOptions > div.questionOption').each(function (index, item) {
                    if ($(item).attr('option') != question.rightAnswer)
                        $(item).addClass('wrong');
                    else
                        $(item).addClass('right');
                });
                $('#gameNext').css({ zIndex: 4 }).animate({ opacity: 1 }, 500);
            }
        }
    },

    updateClocksTicks: function () {
        if (this.DATA.useQuestionTimer) {
            this.setRotation($('#gameQuestionTimer > div.minute'), 6 * (this.questionRemainingTime % 60));
            this.setRotation($('#gameQuestionTimer > div.hour'), 30 * parseInt(this.questionRemainingTime / 60) + 0.5 * (this.questionRemainingTime % 60));
        }
    },

    updateClocks: function () {
        if (!this.questionRunning)
            return;

        if (this.DATA.useQuestionTimer) {
            if (this.questionRemainingTime > 0)
                this.questionRemainingTime -= 1;
            if (this.questionRemainingTime == 0) {
                GAME.score.wrong += 1;
                GAME.updateScore();
                if ($('#gameSeal').css('opacity') == 1)
                    $('#gameMultiUseButton > div.showPicture').click();
                GAME.canInteract = false;
                clearInterval(GAME.clock);
                $('#gameOptions > div.questionOption').each(function (index, item) {
                    if ($(item).attr('option') != question.rightAnswer)
                        $(item).addClass('wrong');
                    else
                        $(item).addClass('right');
                });
                $('#gameNext').css({ zIndex: 4 }).animate({ opacity: 1 }, 500);
            }
        }

        if (this.DATA.useGameTimer) {
            if (this.gameRemainingTime > 0)
                this.gameRemainingTime -= 1;
            if (this.gameRemainingTime == 0) {
                GAME.score.wrong += GAME.DATA.questions.length - GAME.actualQuestion + 1;
                GAME.updateScore();
                if ($('#gameSeal').css('opacity') == 1)
                    $('#gameMultiUseButton > div.showPicture').click();
                GAME.canInteract = false;
                clearInterval(GAME.clock);
                $('#gameOptions > div.questionOption').each(function (index, item) {
                    if ($(item).attr('option') != question.rightAnswer)
                        $(item).addClass('wrong');
                    else
                        $(item).addClass('right');
                });
                GAME.actualQuestion = GAME.DATA.questions.length;
                $('#gameNext').css({ zIndex: 4 }).animate({ opacity: 1 }, 500);
            }
        }

        this.updateClocksTicks();
    },

    startActualQuestion: function () {
        if (this.actualQuestion > this.DATA.questions.length) {
            this.endGame();
            return;
        }

        question = this.DATA.questions[this.actualQuestion - 1];

        this.setGameBackgroundImage(question.backgroundImage);
        this.setTitleHTML(question.text);
        this.setContainerBackgroundImage(question.hintImage);
        $('#gameOptions > div').remove();
        $.each(question.options, function (index, item) {
            $('<div class="questionOption" option="' + index + '">' + item + '</div>').appendTo('#gameOptions');
        });

        $('#gameMultiUseButton > div').animate({ opacity: 1 }, 500, function () {
            $('#gameAnnounce > div').animate({ opacity: 1 }, 500, function () {
                $('#gameBackground').animate({ opacity: 1 }, 500, function () {
                    $('#gameOptions').css({ zIndex: 4 }).animate({ opacity: 1 }, 500, function () {
                        $('#gameOptions > div.questionOption').click(GAME.optionClick);
                        GAME.questionRemainingTime = GAME.DATA.timePerQuestion;
                        GAME.questionRunning = true;
                        GAME.updateClocksTicks();
                        GAME.clock = setInterval('GAME.updateClocks()', 1000);
                        GAME.canInteract = true;
                    });
                });
            });
        });
    },

    startGame: function () {
        this.hideContainer(function () {
            $('#gameBackground').animate({ opacity: 0 }, 500, function () {
                $('#gameAnnounce > div').animate({ opacity: 0 }, 500, function () {
                    $('#gameMultiUseButton > div').animate({ opacity: 0 }, 500, function () {
                        GAME.setMultiUseButtonHTML(GAME.DATA.runningButtonText);
                        GAME.setContainerHTML('');
                        GAME.actualQuestion = 1;
                        GAME.startActualQuestion();
                    });
                });
            });
        });
    },

    bind: function () {
        $('#gameMultiUseButton > div').click(function (event) {
            if (GAME.canInteract && GAME.customMultiUseButtonHandle)
                GAME.customMultiUseButtonHandle(event, this);
        });

        $('#gameNext').click(function () {
            $('#gameNext').animate({ opacity: 0 }, 500, function () {
                $('#gameNext').css({ zIndex: -1 });
                $('#gameExplanation').css({ zIndex: 5 }).animate({ opacity: 1 }, 500, function () {
                    $('#gameMultiUseButton > div').css({ opacity: 0 });
                    $('#gameAnnounce > div').css({ opacity: 0 });
                    $('#gameBackground').css({ opacity: 0 });
                    $('#gameOptions').css({ opacity: 0, zIndex: -1 });
                    if (GAME.DATA.useQuestionTimer)
                        GAME.setRotation($('#gameQuestionTimer > div.hour, #gameQuestionTimer > div.minute'), 0);
                    if (GAME.DATA.useGameTimer)
                        GAME.setRotation($('#gameTimer > div.hour, #gameTimer > div.minute'), 0);
                });
            });
        });

        $('#gameExplanation > div.explanationClose').click(function () {
            $('#gameExplanation').animate({ opacity: 0 }, 500, function () {
                $('#gameExplanation').css({ zIndex: -1 });
                GAME.actualQuestion += 1;
                GAME.startActualQuestion();
            });
        });
    },

    init: function () {
        if (this.DATA == null)
            return;

        data = this.DATA;
        this.resetGame();
        this.bind();
        if (this.customShowIntroduction)
            this.customShowIntroduction();
        this.canInteract = true;
    }
};

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        url: 'js/game.json',
        cache: false,
        async: true,
        dataType: 'json',
        success: function (data) {
            GAME.DATA = data;
            GAME.init();
        },
        error: function () {
            document.write(
                'Imposs&iacute;vel carregar arquivo de ' +
                'configura&ccedil;&atilde;o do jogo!'
            );
        }
    });
});
