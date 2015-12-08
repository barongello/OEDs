var GAME = {
    initialized: false,
    interactable: false,

    result: null,
    round: 0,

    feedBacksTimeOut: null,

    BLOCKS: [
        {
            name: 'União Européia (UE)',
            logo: 'img/img_logo_ue.png',
            pib: { text: '15 trilhões de dólares', estimative: false, value: 7 },
            population: { text: '503 milhões', estimative: false, value: 5 },
            members: { text: '28 países', value: 6 },
            year: 1957,
            influence: 4,
            info: 'União Europeia',
            help: 'Sua moeda é forte e há grandes economias nesse bloco. Contudo, a recente crise no continente europeu o enfraqueceu.'
        },
        {
            name: 'Mercosul',
            logo: 'img/img_logo_mercosul.png',
            pib: { text: '0,79 trilhão de dólares', estimative: false, value: 3 },
            population: { text: '287 milhões', estimative: false, value: 3 },
            members: { text: '6 países', value: 1 },
            year: 1991,
            influence: 3,
            info: 'Mercado Comum do Sul',
            help: 'Grandes economias estão envolvidas nesse bloco, dentre elas o Brasil. Contudo, a influência internacional desse bloco ainda está crescendo.'
        },
        {
            name: 'Nafta',
            logo: 'img/img_logo_nafta.png',
            pib: { text: '11,4 trilhões de dólares', estimative: false, value: 6 },
            population: { text: '417,6 milhões', estimative: false, value: 4 },
            members: { text: '3 países', value: 0 },
            year: 1994,
            influence: 4,
            info: 'Tratado de Livre Comércio da América do Norte',
            help: 'A presença de uma das maiores economias da atualidade (Estados Unidos) nesse bloco faz com que sua influência seja considerável. A crise de 2008 enfraqueceu esse bloco.'
        },
        {
            name: 'Apec',
            logo: 'img/img_logo_apec.png',
            pib: { text: '16,5 trilhões de dólares', estimative: false, value: 8 },
            population: { text: '2,217 milhões', estimative: false, value: 0 },
            members: { text: '20 países e um território', value: 5 },
            year: 1989,
            influence: 5,
            info: 'Cooperação Econômica Ásia-Pacífico',
            help: 'Principalmente por ser formado por vários países economicamente fortes da Ásia, inclusive a China, é um dos blocos mais sólidos da atualidade.'
        },
        {
            name: 'Asean',
            logo: 'img/img_logo_asean.png',
            pib: { text: '0,88 trilhão de dólares', estimative: false, value: 4 },
            population: { text: '528 milhões', estimative: false, value: 6 },
            members: { text: '10 países', value: 2 },
            year: 1967,
            influence: 3,
            info: 'Associação de Nações do Sudeste Asiático',
            help: 'Embora esteja num estágio inicial de processo de solidificação, esse bloco é influente por abranger vários países conhecidos como Tigres Asiáticos, economicamente importantes.'
        },
        {
            name: 'Caricom',
            logo: 'img/img_logo_caricom.png',
            pib: { text: '0,028 trilhão de dólares', estimative: true, value: 0 },
            population: { text: '14,6 milhões', estimative: true, value: 1 },
            members: { text: '15 países', value: 4 },
            year: 1973,
            influence: 2,
            info: 'Mercado comum e comunidade do Caribe',
            help: 'Por ser um bloco recente e com a presença de economias pequenas, é um dos menos influentes atualmente.'
        },
        {
            name: 'União Africana (UA)',
            logo: 'img/img_logo_ua.png',
            pib: { text: '1,6 trilhão de dólares', estimative: false, value: 5 },
            population: { text: '967 milhões', estimative: false, value: 8 },
            members: { text: '54 países', value: 7 },
            year: 2002,
            influence: 3,
            info: 'União Africana',
            help: 'Esse bloco é formado por muito países politicamente instáveis, mas tem potencial de crescimento econômico.'
        },
        {
            name: 'CEI',
            logo: 'img/img_logo_ceia.png',
            pib: { text: '0,58 trilhão de dólares', estimative: false, value: 2 },
            population: { text: '273 milhões', estimative: false, value: 2 },
            members: { text: '12 países', value: 3 },
            year: 1991,
            influence: 3,
            info: 'Comunidade dos Estados Independentes',
            help: 'Não é um bloco econômico, assim como a OPEP. Abrange quase todos os países que compunham a antiga União Soviética e tem muitos recursos naturais em seu território.'
        },
        {
            name: 'OPEP',
            logo: 'img/img_logo_opec.png',
            pib: { text: '0,308 trilhão de dólares', estimative: false, value: 1 },
            population: { text: '672 milhões', estimative: false, value: 7 },
            members: { text: '12 países', value: 3 },
            year: 1960,
            influence: 3,
            info: 'Organização dos Países Exportadores de Petróleo',
            help: 'Não é um bloco econômico, mas sim uma organização internacional. Contudo, por estar relacionado à questão petrolífera, sua influência não pode ser desprezada – basta citar as crises geradas pela alta no preço do petróleo.'
        }
    ],

    TIMES_TO_SHUFFLE: 50,

    shuffleBlocks: function () {
        for (var times = 0; times < GAME.TIMES_TO_SHUFFLE; times++)
            for (var i = 0; i < GAME.BLOCKS.length; i++) {
                var j = Math.floor(Math.random() * GAME.BLOCKS.length),
                    tmp = GAME.BLOCKS[i];

                GAME.BLOCKS[i] = GAME.BLOCKS[j];
                GAME.BLOCKS[j] = tmp;
            }
    },

    resetGame: function () {
        GAME.shuffleBlocks();

        GAME.result = null;

        $('.round')
            .removeClass('active');

        $('.result')
            .removeClass('correct')
            .removeClass('incorrect');

        GAME.loadNextRound();
    },

    loadNextRound: function () {
        var oldInteractable = GAME.interactable;

        GAME.interactable = false;

        clearTimeout(GAME.feedBacksTimeOut);

        if (GAME.result == null)
            GAME.round = 0;

        if (round < 0)
            GAME.round = 0;

        if (GAME.round > 3)
            GAME.round = 3;

        if (GAME.result == 'player' || GAME.result == 'computer')
            GAME.round++;

        var round = GAME.round;

        if (round < 3) {
            this.shuffleBlocks();

            var player = GAME.BLOCKS[0],
                computer = GAME.BLOCKS[GAME.BLOCKS.length - 1];

            $('.round')
                .removeClass('active');

            $('.round[round="' + round + '"]')
                .addClass('active');

            $('#boardCardPlayer')
                .attr('index', 0);

            $('.btn_option')
                .removeClass('active');

            $('#boardCardPlayer > .description.line_1')
                .html(player.name);

            $('#boardCardPlayer > .logo')
                .css({ backgroundImage: 'url(' + player.logo + ')' });

            $('#boardCardPlayer > .description.line_3')
                .html(player.year);

            $('#boardCardPlayer > .description.line_5')
                .html(player.members.text);

            $('#boardCardPlayer > .title.line_6')
                .html('População' + (player.population.estimative ? ' (estimativa)' : ''));

            $('#boardCardPlayer > .description.line_7')
                .html(player.population.text);

            $('#boardCardPlayer > .title.line_8')
                .html('PIB' + (player.pib.estimative ? ' (estimativa)' : ''));

            $('#boardCardPlayer > .description.line_9')
                .html(player.pib.text);

            $('#boardCardPlayer > .influence')
                .attr('value', player.influence);

            $('#boardCardComputer')
                .attr('index', GAME.BLOCKS.length - 1);

            $('#boardCardComputer > .description.line_1')
                .html(computer.name);

            $('#boardCardComputer > .logo')
                .css({ backgroundImage: 'url(' + computer.logo + ')' });

            $('#boardCardComputer > .description.line_3')
                .html(computer.year);

            $('#boardCardComputer > .description.line_5')
                .html(computer.members.text);

            $('#boardCardComputer > .title.line_6')
                .html('População' + (computer.population.estimative ? ' (estimativa)' : ''));

            $('#boardCardComputer > .description.line_7')
                .html(computer.population.text);

            $('#boardCardComputer > .title.line_8')
                .html('PIB' + (computer.pib.estimative ? ' (estimativa)' : ''));

            $('#boardCardComputer > .description.line_9')
                .html(computer.pib.text);

            $('#boardCardComputer > .influence')
                .attr('value', computer.influence);

            $('#boardCardComputer > #btnBoardBlockInfo2')
                .hide();

            $('#boardCardComputer > #btnBoardMoreInfo2')
                .hide();

            $('#boardCardComputerBack')
                .addClass('back');

            $('#boardSelectedOption')
                .hide()
                .removeClass('option_0')
                .removeClass('option_1')
                .removeClass('option_2')
                .removeClass('option_3');

            $('#boardFeedBack1')
                .removeClass('left')
                .removeClass('right');

            $('#boardFeedBack2')
                .removeClass('left')
                .removeClass('right');

            $('#btnBoardNext')
                .hide();

            $('#boardBlockInfoPopUp')
                .hide();

            $('#boardMoreInfoPopUp')
                .hide();

            GAME.interactable = oldInteractable;
        }
        else {
            var $boardContainer = $('#boardContainer'),
                $feedBack = ($('.round > .result.correct').length >= 2 ? $('#boardFeedBackWin') : $('#boardFeedBackLose'));

                $boardContainer
                    .css({ opacity: 0 });

                $feedBack
                    .show();

                setTimeout(function () {
                    GAME.resetGame();

                    $feedBack
                        .css({ opacity: 1 });

                    setTimeout(function () {
                        GAME.interactable = oldInteractable;
                    }, 500);
                }, 500);
        }
    },

    showFeedBacks: function () {
        $('#boardFeedBack1, #boardFeedBack2')
            .css({ opacity: 1 });

        GAME.feedBacksTimeOut = setTimeout(GAME.hideFeedBacks, 500);
    },

    hideFeedBacks: function () {
        $('#boardFeedBack1, #boardFeedBack2')
            .css({ opacity: 0 });

        GAME.feedBacksTimeOut = setTimeout(GAME.showFeedBacks, 500);
    },

    doBind: function () {
        if (GAME.initialized)
            return;

        $('#btnIntroPlay').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $intro = $('#intro'),
                $help = $('#help');

            $intro
                .css({ opacity: 0 });

            $help
                .show();

            setTimeout(function () {
                $intro
                    .hide();

                $help
                    .css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('#btnHelpClose').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $help = $('#help'),
                $board = $('#board');

            $help
                .css({ opacity: 0 });

            $board
                .show();

            setTimeout(function () {
                $help
                    .hide();

                $board
                    .css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('#btnBoardHelp').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $board = $('#board'),
                $help = $('#help');

            $board
                .css({ opacity: 0 });

            $help
                .show();

            setTimeout(function () {
                $board
                    .hide();

                $help
                    .css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('.btn_option').click(function () {
            if (!GAME.interactable)
                return;

            var $selectedOption = $('#boardSelectedOption');

            if ($selectedOption.is(':visible'))
                return;

            GAME.interactable = false;

            var $this = $(this),
                option = parseInt($this.attr('option')),
                player = GAME.BLOCKS[parseInt($('#boardCardPlayer').attr('index'))],
                computer = GAME.BLOCKS[parseInt($('#boardCardComputer').attr('index'))],
                computerWin = (
                    (option == 0 && computer.members.value > player.members.value)
                    || (option == 1 && computer.population.value > player.population.value)
                    || (option == 2 && computer.pib.value > player.pib.value)
                    || (option == 3 && computer.influence > player.influence)
                ),
                playerWin = (
                    (option == 0 && player.members.value > computer.members.value)
                    || (option == 1 && player.population.value > computer.population.value)
                    || (option == 2 && player.pib.value > computer.pib.value)
                    || (option == 3 && player.influence > computer.influence)
                ),
                draw = (
                    (option == 0 && player.members.value == computer.members.value)
                    || (option == 1 && player.population.value == computer.population.value)
                    || (option == 2 && player.pib.value == computer.pib.value)
                    || (option == 3 && player.influence == computer.influence)
                );

            $this
                .addClass('active');

            $('.round.active > .result')
                .addClass(playerWin ? 'correct' : (computerWin ? 'incorrect' : ''));

            $('#sboardCardPlayer')
                .addClass('option_' + option);

            $('#boardCardComputerBack')
                .removeClass('back');

            $('#boardCardComputer > #btnBoardBlockInfo2')
                .show();

            $('#boardCardComputer > #btnBoardMoreInfo2')
                .show();

            $('#boardFeedBack1')
                .removeClass('right')
                .removeClass('wrong')
                .removeClass('transitable')
                .css({ opacity: 1 })
                .addClass('transitable')
                .addClass(playerWin ? 'right' : 'wrong');

            $('#boardFeedBack2')
                .removeClass('right')
                .removeClass('wrong')
                .removeClass('transitable')
                .css({ opacity: 1 })
                .addClass('transitable')
                .addClass(computerWin ? 'right' : 'wrong');

            GAME.feedBacksTimeout = setTimeout(GAME.hideFeedBacks, 1);

            $selectedOption
                .addClass('option_' + option)
                .show();

            $('#btnBoardNext')
                .show();

            if (playerWin)
                GAME.result = 'player';
            else if (computerWin)
                GAME.result = 'computer';
            else if (draw)
                GAME.result = 'draw';
            else
                GAME.result = null;

            GAME.interactable = true;
        });

        $('#btnBoardBlockInfo1, #btnBoardBlockInfo2').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                $boardBlockInfoPopUp = $('#boardBlockInfoPopUp'),
                $btnBoardBlockInfo = $this,
                $btnBoardBlockInfoPopUpClose = $('#btnBoardBlockInfoPopUpClose');

            $this
                .addClass('active');

            $btnBoardBlockInfoPopUpClose
                .hide();

            $('#boardBlockInfoPopUpContainerText')
                .html(GAME.BLOCKS[parseInt($this.parent().attr('index'))].info);

            $boardBlockInfoPopUp
                .removeClass('player')
                .removeClass('computer')
                .addClass($this.attr('owner'))
                .show();

            setTimeout(function () {
                $boardBlockInfoPopUp
                    .css({ opacity: 1 });

                setTimeout(function () {
                    $btnBoardBlockInfoPopUpClose
                        .show();

                    $btnBoardBlockInfo
                        .hide();

                    GAME.interactable = true;
                }, 500);
            }, 0);
        });

        $('#boardBlockInfoPopUp, #btnBoardBlockInfoPopUpClose').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                $boardBlockInfoPopUp = $('#boardBlockInfoPopUp'),
                $btnBoardBlockInfo = $boardBlockInfoPopUp.hasClass('player') ? $('#btnBoardBlockInfo1') : $('#btnBoardBlockInfo2'),
                $btnBoardBlockInfoPopUpClose = $('#btnBoardBlockInfoPopUpClose');

            $btnBoardBlockInfo
                .show();

            $btnBoardBlockInfoPopUpClose
                .hide();

            setTimeout(function () {
                $btnBoardBlockInfo
                    .removeClass('active');

                $boardBlockInfoPopUp
                    .css({ opacity: 0 });

                setTimeout(function () {
                    $boardBlockInfoPopUp
                        .removeClass('player')
                        .removeClass('computer')
                        .hide();

                    GAME.interactable = true;
                }, 500);
            }, 0);
        });

        $('#btnBoardMoreInfo1, #btnBoardMoreInfo2').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                $boardMoreInfoPopUp = $('#boardMoreInfoPopUp'),
                $btnBoardMoreInfo = $this,
                $btnBoardMoreInfoPopUpClose = $('#btnBoardMoreInfoPopUpClose');

            $this
                .addClass('active');

            $btnBoardMoreInfoPopUpClose
                .hide();

            $('#boardMoreInfoPopUpContainerText')
                .html(GAME.BLOCKS[parseInt($this.parent().attr('index'))].help);

            $boardMoreInfoPopUp
                .removeClass('player')
                .removeClass('computer')
                .addClass($this.attr('owner'))
                .show();

            setTimeout(function () {
                $boardMoreInfoPopUp
                    .css({ opacity: 1 });

                setTimeout(function () {
                    $btnBoardMoreInfoPopUpClose
                        .show();

                    $btnBoardMoreInfo
                        .hide();

                    GAME.interactable = true;
                }, 500);
            }, 0);
        });

        $('#boardMoreInfoPopUp, #btnBoardMoreInfoPopUpClose').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                $boardMoreInfoPopUp = $('#boardMoreInfoPopUp'),
                $btnBoardMoreInfo = $boardMoreInfoPopUp.hasClass('player') ? $('#btnBoardMoreInfo1') : $('#btnBoardMoreInfo2'),
                $btnBoardMoreInfoPopUpClose = $('#btnBoardMoreInfoPopUpClose');

            $btnBoardMoreInfo
                .show();

            $btnBoardMoreInfoPopUpClose
                .hide();

            setTimeout(function () {
                $btnBoardMoreInfo
                    .removeClass('active');

                $boardMoreInfoPopUp
                    .css({ opacity: 0 });

                setTimeout(function () {
                    $boardMoreInfoPopUp
                        .removeClass('player')
                        .removeClass('computer')
                        .hide();

                    GAME.interactable = true;
                }, 500);
            }, 0);
        });

        $('#btnBoardNext').click(function () {
            if (!GAME.interactable)
                return;

            GAME.loadNextRound();
        });

        $('#btnBoardFeedBackWinClose').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $feedBack = $('#boardFeedBackWin'),
                $boardContainer = $('#boardContainer');

            $feedBack
                .css({ opacity: 0 });

            $boardContainer
                .show();

            setTimeout(function () {
                $feedBack
                    .hide();

                    $boardContainer
                        .css({ opacity: 1 });

                    setTimeout(function () {
                        GAME.interactable = true;
                    }, 500);
            }, 500);
        });

        $('#btnBoardFeedBackLoseReset').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $feedBack = $('#boardFeedBackLose'),
                $boardContainer = $('#boardContainer');

            $feedBack
                .css({ opacity: 0 });

            $boardContainer
                .show();

            setTimeout(function () {
                $feedBack
                    .hide();

                    $boardContainer
                        .css({ opacity: 1 });

                    setTimeout(function () {
                        GAME.interactable = true;
                    }, 500);
            }, 500);
        });
    },

    doInit: function () {
        if (!GAME.initialized) {
            GAME.doBind();

            GAME.initialized = true;
        }

        GAME.resetGame();

        GAME.interactable = true;
    }
}

$(document).ready(function () {
    GAME.doInit();
});
