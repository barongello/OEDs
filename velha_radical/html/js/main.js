var GAME = {
    initialized: false,
    interactable: false,
    selectedPlace: null,
    player: 0,
    turn: 1,
    playing: false,
    difficulty: 1,
    questions: [],
    players: 1,
    playersClasses: [],

    ANSWERS: [
        // Power
        '+|9||',
        '+|25||',
        '+|100||',
        '+p|8||11',
        '+p|2||7',
        '+p|5||8',
        '+p|7||12',
        '+p|3||0',
        '+pf|2|3|14',
        '+p|6||16',
        '+p|2||12',
        '+p|5||15',
        '+p|7||27',
        '+p|11||10',
        '+p|7||11',
        '+p|3||7',
        '+p|5||3',
        '+p|2||13',
        '+p|8||8',
        '+pf|2|3|4',
        '+pf|1|2|5',
        '+pf|3|4|4',
        '+p|3||12',
        '+p|6||15',
        '+p|7||7',
        '+p|3||30',
        '+p|2||27',
        '+p|6||6',
        '+p|3||20',
        '+p|5||50',
        // Radix
        '+|5||',
        '+|11||',
        '+|15||',
        '+|0,9||',
        '+|0,3||',
        '+|1,3||',
        '+|1,2||',
        '+r|10||',
        '+r|6||',
        '+r|15||',
        '+r|21||',
        '+r|40||',
        '-|2||',
        '-|3||',
        '+r|2||',
        '+r|5||',
        '+|2||',
        '+r|2||',
        '+p|2||3',
        '+|45||',
        '+p|3||2',
        '+p|3||2',
        '+p|2||3',
        '+p|2||3',
        '-|1,1||',
        '-|9||',
        '+f|1|2|',
        '+|0,1||',
        '+f|3|2|',
        '+r|30||'
    ],

    startGame: function () {
        if (!GAME.initialized)
            return;

        GAME.questions = [];

        if (GAME.difficulty == 1) {
            for (var i = 0; i < 30; i++)
                GAME.questions.push(i);
        }
        else if (GAME.difficulty == 2) {
            for (var i = 30; i < 60; i++)
                GAME.questions.push(i);
        }
        else if (GAME.difficulty == 3) {
            for (var i = 0; i < 60; i++)
                GAME.questions.push(i);
        }

        for (var i = 0; i < GAME.questions.length - 1; i++) {
            var j = Math.floor(Math.random() * (GAME.questions.length - i)) + i,
                tmp = GAME.questions[i];

            GAME.questions[i] = GAME.questions[j];
            GAME.questions[j] = tmp;
        }

        var player = Math.round(Math.random());

        GAME.playersClasses[player] = 'button';
        GAME.playersClasses[player ^ 1] = 'needles';

        GAME.player = 0;
        GAME.turn = 1;
        GAME.selectedPlace = null;
        GAME.playing = false;

        $('#bturn > span')
            .first()
            .html(GAME.turn);

        $('#bplayer')
            .removeClass('player_1')
            .removeClass('player_2')
            .addClass('player_1');

        for (var i = 0; i < 9; i++) {
            var questionIndex = GAME.questions[i],
                category = (questionIndex < 30 ? 'power' : 'radix'),
                preffix = (questionIndex < 30 ? 'pot' : 'rad'),
                questionNumber = (questionIndex % 30) + 1;

            $('#bplace' + i)
                .attr('player', '')
                .removeClass('button')
                .removeClass('needles');

            $('#bquestion' + i)
                .attr('category', category)
                .attr('question', questionIndex)
                .attr('class', 'question eq_' + preffix + (questionNumber < 10 ? '0' + questionNumber : questionNumber));

            EXPRESSION.setActiveExpression('#bexpression' + i);
            EXPRESSION.resetExpression();

            $('#btnBGPOK' + i).addClass('disabled');
        }
    },

    finishTurn: function () {
        if (!GAME.playing)
            return;

        if (GAME.selectedPlace == null)
            return;

        if (!GAME.interactable)
            return;

        GAME.interactable = false;

        var $place = $('.place[place="' + GAME.selectedPlace +'"]');

        $place.css({ opacity: 0 });

        setTimeout(function () {
            $place
                .attr('player', GAME.player)
                .addClass(GAME.playersClasses[GAME.player]);

            $place.css({ opacity: 1 });

            setTimeout(function () {
                GAME.interactable = true;

                GAME.checkVictory();
            }, 500);
        }, 500);
    },

    checkVictory: function () {
        if (!GAME.interactable)
            return;

        GAME.interactable = false;

        var victory = null;

        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < 3; j++) {
                if ($('.place.line_' + j + '[player="' + i + '"]').length == 3) {
                    victory = i;
                    break;
                }
                else if ($('.place.column_' + j + '[player="' + i + '"]').length == 3) {
                    victory = i;
                    break;
                }
                if (j < 2 && $('.place.diagonal_' + j + '[player="' + i + '"]').length == 3) {
                    victory = i;
                    break;
                }
            }

            if (victory != null)
                break;
        }

        if (victory == null) {
            if ($('.place[player=""]').length == 0)
                victory = 'draw';
            else {
                var canPlayerWin = [false, false],
                    maxTurns = $('.place').length,
                    leftTurns = maxTurns - GAME.turn,
                    leftTurnsPlayer = [parseInt(Math.ceil(leftTurns / 2)), parseInt(Math.floor(leftTurns / 2))];

                for (var i = 0; i < 3; i++) {
                    for (var j = 0; j < 2; j++) {
                        var piecesLineCurrentPlayer = $('.place.line_' + i + '[player="' + j + '"]').length,
                            piecesLineOpponentPlayer = $('.place.line_' + i + '[player="' + ((j + 1) % 2) + '"]').length,
                            leftLinePlaces = $('.place.line_' + i + '[player=""]').length;

                        if (piecesLineOpponentPlayer == 0 && leftLinePlaces <= leftTurnsPlayer[j]) {
                            canPlayerWin[j] = true;
                            break;
                        }

                        var piecesColumnCurrentPlayer = $('.place.column_' + i + '[player="' + j + '"]').length,
                            piecesColumnOpponentPlayer = $('.place.column_' + i + '[player="' + ((j + 1) % 2) + '"]').length,
                            leftColumnPlaces = $('.place.column_' + i + '[player=""]').length;

                        if (piecesColumnOpponentPlayer == 0 && leftColumnPlaces <= leftTurnsPlayer[j]) {
                            canPlayerWin[j] = true;
                            break;
                        }

                        if (i < 2) {
                            var piecesDiagonalCurrentPlayer = $('.place.diagonal_' + i + '[player="' + j + '"]').length,
                                piecesDiagonalOpponentPlayer = $('.place.diagonal_' + i + '[player="' + ((j + 1) % 2) + '"]').length,
                                leftDiagonalPlaces = $('.place.diagonal_' + i + '[player=""]').length;

                            if (piecesDiagonalOpponentPlayer == 0 && leftDiagonalPlaces <= leftTurnsPlayer[j]) {
                                canPlayerWin[j] = true;
                                break;
                            }
                        }
                    }

                    if (canPlayerWin[0] || canPlayerWin[1])
                        break;
                }

                if (!canPlayerWin[0] && !canPlayerWin[1])
                    victory = 'draw';
            }
        }


        if (victory == 0 || victory == 1) {
            var $win = $('#win');

            $('#wtext > span').html(victory + 1);

            $win.show();

            setTimeout(function () {
                $win.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 0);

            return;
        }
        else if (victory == 'draw') {
            var $draw = $('#draw');

            $draw.show();

            setTimeout(function () {
                $draw.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 0);

            return;
        }

        GAME.interactable = true;

        GAME.nextTurn();
    },

    nextTurn: function () {
        if (!GAME.interactable)
            return;

        GAME.interactable = false;

        GAME.player ^= 1;
        GAME.turn += 1;

        $('#bturn > span')
            .first()
            .html(GAME.turn);

        $('#bplayer')
            .removeClass('player_1')
            .removeClass('player_2')
            .addClass('player_' + (GAME.player + 1));

        GAME.playing = false;

        GAME.selectedPlace = null;

        GAME.interactable = true;

        if (GAME.player == 1 && GAME.players == 1)
            GAME.computerMove();
    },

    computerMove: function () {
        if (!GAME.interactable)
            return;

        if (GAME.playing)
            return;

        GAME.interactable = false;

        var possibilities = [];

        for (var i = 0; i < 3; i++) {
            if ($('.place.line_' + i + '[player="1"]').length == 2) {
                var $possibility = $('.place.line_' + i + '[player=""]');

                if ($possibility.length == 1)
                    possibilities.push($possibility);
            }

            if ($('.place.column_' + i + '[player="1"]').length == 2) {
                var $possibility = $('.place.column_' + i + '[player=""]');

                if ($possibility.length == 1)
                    possibilities.push($possibility);
            }

            if (i < 2 && $('.place.diagonal_' + i + '[player="1"]').length == 2) {
                var $possibility = $('.place.diagonal_' + i + '[player=""]');

                if ($possibility.length == 1)
                    possibilities.push($possibility);
            }
        }

        if (possibilities.length == 0) {
            for (var i = 0; i < 3; i++) {
                if ($('.place.line_' + i + '[player="0"]').length == 2) {
                    var $possibility = $('.place.line_' + i + '[player=""]');

                    if ($possibility.length == 1)
                        possibilities.push($possibility);
                }

                if ($('.place.column_' + i + '[player="0"]').length == 2) {
                    var $possibility = $('.place.column_' + i + '[player=""]');

                    if ($possibility.length == 1)
                        possibilities.push($possibility);
                }

                if (i < 2 && $('.place.diagonal_' + i + '[player="0"]').length == 2) {
                    var $possibility = $('.place.diagonal_' + i + '[player=""]');

                    if ($possibility.length == 1)
                        possibilities.push($possibility);
                }
            }
        }

        if (possibilities.length == 0)
            $('.place[player=""]').each(function (index, item) {
                possibilities.push($(item));
            });

        var $choosen = possibilities[Math.floor(Math.random() * possibilities.length)],
            place = parseInt($choosen.attr('place'));

        setTimeout(function () {
            GAME.interactable = true;
            $choosen.find('.expression.box').click();
            GAME.interactable = false;

            setTimeout(function () {
                AUDIO.playClick();

                EXPRESSION.loadFromString(GAME.ANSWERS[parseInt($choosen.find('.question').attr('question'))]);

                setTimeout(function () {
                    GAME.interactable = true;

                    $choosen.find('.btn_ok').click();
                }, 1000);
            }, 1000);
        }, 1000);
    },

    doBind: function () {
        if (GAME.initialized)
            return;

        $('#btnCStart').click(function () {
            if (!GAME.interactable)
                return;

            AUDIO.playClick();

            GAME.interactable = false;

            var $cover = $('#cover'),
                $options = $('#options');

            $('#opage1').css({ opacity: 1 }).show();
            $('#opage2').css({ opacity: 0 }).hide();

            $cover.css({ opacity: 0 });

            $options.show();

            setTimeout(function () {
                $cover.hide();

                $options.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('#btnOPlayers1, #btnOPlayers2').click(function () {
            if (!GAME.interactable)
                return;

            AUDIO.playClick();

            GAME.interactable = false;

            var $this = $(this),
                players = parseInt($this.attr('players')),
                $page1 = $('#opage1'),
                $page2 = $('#opage2');

            GAME.players = players;

            $page1.css({ opacity: 0 });

            $page2.show();

            setTimeout(function () {
                $page1.hide();

                $page2.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('#btnOPower, #btnORadix, #btnOPowerRadix').click(function () {
            if (!GAME.interactable)
                return;

            AUDIO.playClick();

            GAME.interactable = false;

            var $this = $(this),
                difficulty = parseInt($this.attr('difficulty')),
                $options = $('#options'),
                $board = $('#board');

            GAME.difficulty = difficulty;

            GAME.startGame();

            $options.css({ opacity: 0 });

            $board.show();

            setTimeout(function () {
                $options.hide();

                $board.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('#btnOHome').click(function () {
            if (!GAME.interactable)
                return;

            AUDIO.playClick();

            GAME.interactable = false;

            var $options = $('#options'),
                $cover = $('#cover');

            $options.css({ opacity: 0 });

            $cover.show();

            setTimeout(function () {
                $options.hide();

                $cover.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('#bcalculator > .btn').click(function () {
            if (!GAME.interactable)
                return;

            if (!EXPRESSION.hasActiveExpression()) {
                AUDIO.playError();

                return;
            }

            if (!GAME.playing) {
                AUDIO.playError();

                return;
            }

            var $this = $(this),
                number = $this.attr('number');

            if (number == 'plus') {
                if (EXPRESSION.hasSignal())
                    EXPRESSION.setPositive();
            }
            else if (number == 'minus') {
                if (!EXPRESSION.hasSignal())
                    EXPRESSION.setNegative();
            }
            else if (number == 'radix')
                EXPRESSION.toggleRadix();
            else if (number == 'square') {
                if (EXPRESSION.hasPower() && EXPRESSION.getExponentHtml() == '2')
                    EXPRESSION.removePower();
                else
                    EXPRESSION.addPower('2');
            }
            else if (number == 'cube') {
                if (EXPRESSION.hasPower() && EXPRESSION.getExponentHtml() == '3')
                    EXPRESSION.removePower();
                else
                    EXPRESSION.addPower('3');
            }
            else if (number == 'power') {
                if (EXPRESSION.isHighlighted(EXPRESSION.getExponent()))
                    EXPRESSION.removePower();
                else {
                    if (EXPRESSION.getNumeratorHtml().replace(/&nbsp;/gi, '') == '') {
                        AUDIO.playError();

                        return;
                    }

                    EXPRESSION.addPower();
                }
            }
            else if (number == 'fraction') {
                if (EXPRESSION.getNumeratorHtml().replace(/&nbsp;/gi, '') == '') {
                    AUDIO.playError();

                    return;
                }

                EXPRESSION.toggleFraction();
            }
            else if (number == 'clear')
                EXPRESSION.initializeExpression();
            else if (number == 'comma') {
                var $highlighted = EXPRESSION.getHighlighted(),
                    html = $highlighted.html().replace(/&nbsp;/gi, '');

                if (html == '' || html.indexOf(',') != -1 || html.length == 3) {
                    AUDIO.playError();

                    return;
                }

                $highlighted.html(html + ',');
            }
            else {
                var $highlighted = EXPRESSION.getHighlighted(),
                    html = $highlighted.html().replace(/&nbsp;/gi, '');

                if (html.replace(',', '').length == 3) {
                    AUDIO.playError();

                    return;
                }

                $highlighted.html(html + number);
            }

            AUDIO.playClick();
        });

        $('#btnBHome').click(function () {
            if (!GAME.interactable)
                return;

            AUDIO.playClick();

            GAME.interactable = false;

            var $board = $('#board'),
                $cover = $('#cover');

            $board.css({ opacity: 0 });

            $cover.show();

            setTimeout(function () {
                $board.hide();

                $cover.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('#btnBHelp').click(function () {
            if (!GAME.interactable)
                return;

            AUDIO.playClick();

            GAME.interactable = false;

            var $help = $('#help');

            $help.show();

            setTimeout(function () {
                $help.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 0);
        });

        $('#btnHClose').click(function () {
            if (!GAME.interactable)
                return;

            AUDIO.playClick();

            GAME.interactable = false;

            var $help = $('#help');

            $help.css({ opacity: 0 });

            setTimeout(function () {
                $help.hide();

                GAME.interactable = true;
            }, 500);
        });

        $('.expression.box').click(function () {
            if (!GAME.interactable)
                return;

            var $this = $(this),
                $place = $this.parent();

            if ($place.attr('player') != '') {
                AUDIO.playError();

                return;
            }

            AUDIO.playClick();

            var selectedPlace = parseInt($place.attr('place'));

            if (GAME.selectedPlace == selectedPlace)
                return;

            GAME.interactable = false;

            if (GAME.playing) {
                EXPRESSION.resetExpression();

                $('#btnBGPOK' + GAME.selectedPlace).addClass('disabled');
            }

            GAME.selectedPlace = selectedPlace;

            GAME.playing = true;

            $place.find('.btn_ok').removeClass('disabled');

            EXPRESSION.setActiveExpression('#' + $this.attr('id'));
            EXPRESSION.initializeExpression();

            GAME.interactable = true;
        });

        $('.place > .btn_ok').click(function () {
            if (!GAME.interactable)
                return;

            if (!GAME.playing) {
                AUDIO.playError();

                return;
            }

            if (!EXPRESSION.hasActiveExpression()) {
                AUDIO.playError();

                return;
            }

            var $this = $(this);

            if ($this.hasClass('disabled')) {
                AUDIO.playError();

                return;
            }

            if (EXPRESSION.getNumeratorHtml().replace(/&nbsp;/gi, '') == '') {
                AUDIO.playError();

                return;
            }

            AUDIO.playClick();

            GAME.interactable = false;

            var $place = $this.parent(),
                $question = $place.find('.question'),
                questionIndex = parseInt($question.attr('question')),
                answer = EXPRESSION.dumpToString(),
                correctAnswer = GAME.ANSWERS[questionIndex],
                correct = answer == correctAnswer;

            if (!correct) {
                AUDIO.playWrong();

                var $error = $('#error');

                EXPRESSION.setActiveExpression('#eexpression');

                EXPRESSION.loadFromString(correctAnswer);

                $error.show();

                setTimeout(function () {
                    $error.css({ opacity: 1 });

                    setTimeout(function () {
                        GAME.interactable = true;
                    }, 500);
                }, 0);
            }
            else {
                AUDIO.playRight();

                GAME.interactable = true;

                GAME.finishTurn();
            }
        });

        $('#btnEClose').click(function () {
            if (!GAME.interactable)
                return;

            AUDIO.playClick();

            GAME.interactable = false;

            var $error = $('#error');

            $error.css({ opacity: 0 });

            setTimeout(function () {
                $error.hide();

                GAME.interactable = true;

                GAME.finishTurn();
            }, 500);
        });

        $('#btnWClose').click(function () {
            if (!GAME.interactable)
                return;

            AUDIO.playClick();

            GAME.interactable = false;

            var $win = $('#win');

            $win.css({ opacity: 0 });

            setTimeout(function () {
                $win.hide();

                GAME.interactable = true;

                GAME.startGame();
            }, 500);
        });

        $('#btnDClose').click(function () {
            if (!GAME.interactable)
                return;

            AUDIO.playClick();

            GAME.interactable = false;

            var $draw = $('#draw');

            $draw.css({ opacity: 0 });

            setTimeout(function () {
                $draw.hide();

                GAME.interactable = true;

                GAME.startGame();
            }, 500);
        });
    },

    doInit: function () {
        if (!GAME.initialized) {
            GAME.doBind();

            GAME.initialized = true;
        }

        GAME.interactable = true;
    }
}

$(document).ready(function () {
    GAME.doInit();
});
