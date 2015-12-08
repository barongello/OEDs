var GAME = {
    initialized: false,
    interactable: false,

    FEEDBACKS: {
        negativo: 'Este material é dispensável para este tipo de construção. Vamos tentar novamente?'
    },

    MATERIALS: {
        blocodepedra: { titulo: 'BLOCO DE PEDRA', descricao: 'O bloco feito de pedra é utilizado para a construção de muros e paredes.' },
        tijolo: { titulo: 'TIJOLO', descricao: 'O tijolo feito de barro também é utilizado para a construção de muros e paredes.' },
        cimento: { titulo: 'CIMENTO', descricao: 'O cimento é um material cerâmico utilizado para aglomerar blocos e tijolos, deixando os muros e as paredes estáveis. Pode também ser utilizado como piso.' },
        telha_0: { titulo: 'TELHA', descricao: 'A telha é utilizada para compor os telhados. Dentre os materiais utilizados na fabricação de telhas, encontram-se: barro, fibrocimento, concreto, vidro, metal, policarbonato (um tipo de plástico resistente), etc.' },
        viga: { titulo: 'VIGA DE METAL', descricao: 'A viga, feita de metal, é um material utilizado para sustentar algumas casas e prédios.' },

        bambu_0: { titulo: 'BAMBU', descricao: 'O bambu é utilizado para montar a estrutura das habitações indígenas, dando sustentação aos outros materiais.' },
        troncodearvore_0: { titulo: 'TRONCO DE ÁRVORE', descricao: 'Os troncos de árvores também são utilizados nas habitações indígenas, dando sustentação aos outros materiais.' },
        palmeira: { titulo: 'FOLHA DE PALMEIRA', descricao: 'As folhas de palmeira são utilizadas como uma espécie de telhado das habitações indígenas, evitando a entrada de águas das chuvas.' },
        palha: { titulo: 'PALHA', descricao: 'A palha também é utilizada como uma espécie de telhado das habitações indígenas.' },
        corda: { titulo: 'CORDA', descricao: 'A corda é feita normalmente de fibra de embira (tipo de árvore). Ela é utilizada para amarrar os demais materiais utilizados na construção das habitações indígenas, dando firmeza a eles.' },

        barro: { titulo: 'BARRO', descricao: 'O barro é utilizado para preencher as paredes da casa de sapê, dando sustentação a elas.' },
        bambu_1: { titulo: 'BAMBU', descricao: 'O bambu é utilizado como estrutura para as paredes das casas de sapê.' },
        cipo: { titulo: 'CIPÓ', descricao: 'Os cipós são utilizados para entrelaçar as madeiras das paredes da casa de sapê, dando firmeza a essas estruturas.' },
        sape: { titulo: 'SAPÊ', descricao: 'O capim-sapê é utilizado em grande quantidade para formar o telhado da casa de sapê, evitando a entrada de água das chuvas.' },
        troncodearvore_1: { titulo: 'TRONCO DE ÁRVORE', descricao: 'O tronco de árvore é utilizado como estrutura para as paredes das casas de sapê.' },

        madeira: { titulo: 'MADEIRA', descricao: 'A madeira é extraída de espécies de árvores e depois modelada em marcenarias, ganhando a forma de tábua. Essas tábuas são utilizadas para formar as paredes, o piso e a estrutura do telhado.' },
        prego: { titulo: 'PREGO', descricao: 'Os pregos, feitos de aço, são utilizados para fixar as tábuas de madeira umas nas outras, formando as paredes e outras estruturas.' },
        parafuso: { titulo: 'PARAFUSO', descricao: 'Os parafusos, feitos de aço, também são utilizados para fixar as tábuas de madeira umas nas outras, formando as paredes e outras estruturas.' },
        cola: { titulo: 'COLA', descricao: 'A cola, feita normalmente a partir de petróleo e gases naturais, é utilizada para fixar acabamentos em madeira.' },
        telha_1: { titulo: 'TELHA', descricao: 'A telha, feita de barro ou de cimento, é utilizada para compor os telhados.' }
    },

    HOUSES: {
        alvenaria: {
            enunciado: 'Esta é uma casa de alvenaria, muito comum em ambientes urbanos. Selecione os cinco elementos indispensáveis para a sua construção.',
            materiais: ['blocodepedra', 'tijolo', 'cimento', 'telha_0', 'viga']
        },

        indigena: {
            enunciado: 'Este é um tipo de habitação indígena. Selecione os cinco elementos indispensáveis para a sua construção.',
            materiais: ['bambu_0', 'troncodearvore_0', 'palmeira', 'palha', 'corda']
        },

        sape: {
            enunciado: 'Esta é uma casa de sapê, muito comum em ambientes rurais. Selecione os cinco elementos indispensáveis para a sua construção.',
            materiais: ['barro', 'bambu_1', 'cipo', 'sape', 'troncodearvore_1']
        },

        madeira: {
            enunciado: 'Esta é uma casa de madeira, muito comum em fazendas e também em lugares frios . Selecione os cinco elementos indispensáveis para a sua construção.',
            materiais: ['madeira', 'prego', 'parafuso', 'cola', 'telha_1']
        },

        loadHouse: function (tipo) {
            if (tipo == null || !(tipo in GAME.HOUSES))
                return;

            var $game = $('#game'),
                house = GAME.HOUSES[tipo];

            $game
                .removeClass('bg_alvenaria')
                .removeClass('bg_indigena')
                .removeClass('bg_sape')
                .removeClass('bg_madeira')
                .addClass('bg_' + tipo)
                .attr('tipo', tipo)
                .attr('corretas', 0);

            $game.find('#gamebox > #gametext').html(house.enunciado);

            $game.find('#gameimage').attr('class', 'abs');

            var materials = [],
                quantities = {};

            for (var material in GAME.MATERIALS) {
                var strMaterial = material.toString(),
                    idMaterial = strMaterial.split('_')[0];

                if (materials.indexOf(idMaterial) == -1)
                    materials.push(idMaterial);

                if (idMaterial in quantities)
                    quantities[idMaterial] += 1;
                else
                    quantities[idMaterial] = 1;
            }

            for (var material in house.materiais) {
                var idMaterial = house.materiais[material].split('_')[0],
                    indexMaterial = materials.indexOf(idMaterial);

                if (indexMaterial != -1)
                    materials.splice(indexMaterial, 1);

                delete quantities[idMaterial];
            }

            for (var i = 0; i < materials.length - 1; i++) {
                var j = Math.floor(Math.random() * (materials.length - i)) + i;

                var tmpMaterial = materials[i];
                materials[i] = materials[j];
                materials[j] = tmpMaterial;
            }

            var $optionslist = $('#gameoptionslist');

            $optionslist.html('');

            var html = '';

            for (var material in materials) {
                var nameMaterial = materials[material],
                    strMaterial = nameMaterial + (quantities[nameMaterial] > 1 ? '_' + Math.floor(Math.random() * quantities[nameMaterial]) : ''),
                    objectMaterial = GAME.MATERIALS[strMaterial];

                html += '<li class="option btn_' + nameMaterial + '" material="' + strMaterial + '" correct="0" answered="0">';
                html += objectMaterial.titulo;
                html += '</li>';
            }

            $optionslist.html(html);

            for (var material in house.materiais) {
                var nameMaterial = house.materiais[material].split('_')[0],
                    strMaterial = house.materiais[material],
                    objectMaterial = GAME.MATERIALS[strMaterial];

                var html = '<li class="option btn_' + nameMaterial + '" material="' + strMaterial + '" correct="1" answered="0">';
                html += objectMaterial.titulo;
                html += '</li>';

                var $options = $optionslist.find('li');
                $(html).insertAfter($($options[Math.floor(Math.random() * $options.length)]));
            };

            $optionslist
                .removeClass('transitable')
                .css({ left: '0px' })
                .addClass('transitable');

            $('#gameprevious').hide();

            if ($('.option').length > 9)
                $('#gamenext').show();
            else
                $('#gamenext').hide();
        }
    },

    doBind: function () {
        if (GAME.initialized)
            return;

        $('#coverbutton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $cover = $('#cover'),
                $intro = $('#intro');

            $cover.css({ opacity: 0 });

            $intro.show();

            setTimeout(function () {
                $cover.hide();

                $intro.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('#introlist > li').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                $intro = $('#intro'),
                $game = $('#game'),
                tipo = $this.attr('tipo');

            GAME.HOUSES.loadHouse(tipo);

            $intro.css({ opacity: 0 });

            $game.show();

            setTimeout(function () {
                $intro.hide();

                $game.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('#gamehome').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $game = $('#game'),
                $intro = $('#intro');

            $game.css({ opacity: 0 });

            $intro.show();

            setTimeout(function () {
                $game.hide();

                $intro.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $(document).on('click', '#gameoptionslist > li', function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                idMaterial = $this.attr('material'),
                material = GAME.MATERIALS[idMaterial],
                $overlay = $('#gameoverlay');

            $overlay.show();

            $overlay
                .attr('correct', $this.attr('correct'))
                .attr('answered', $this.attr('answered'))
                .attr('material', idMaterial)
                .find('#gameoverlaybox > #gameoverlaycontainer > #gameoverlaytext').html(material.descricao);

            $('#gameoverlayyes').show();
            $('#gameoverlayno').show();
            $('#gameoverlayclose').hide();

            setTimeout(function () {
                $overlay.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 0);
        });
        $(document).on('touchstart', '#gameoptionslist > li', function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                idMaterial = $this.attr('material'),
                material = GAME.MATERIALS[idMaterial],
                $overlay = $('#gameoverlay');

            $overlay.show();

            $overlay
                .attr('correct', $this.attr('correct'))
                .attr('answered', $this.attr('answered'))
                .attr('material', idMaterial)
                .find('#gameoverlaybox > #gameoverlaycontainer > #gameoverlaytext').html(material.descricao);

            $('#gameoverlayyes').show();
            $('#gameoverlayno').show();
            $('#gameoverlayclose').hide();

            setTimeout(function () {
                $overlay.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 0);
        });

        $('#gameprevious, #gamenext').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                multiplier = parseInt($this.attr('multiplier')),
                $optionslist = $('#gameoptionslist'),
                actualLeft = parseInt($optionslist.css('left')),
                changeLeft = (parseInt($optionslist.parent().css('width')) + 5) * multiplier,
                newLeft = actualLeft - changeLeft;

            $optionslist.css({ left: newLeft + 'px' });

            setTimeout(function () {
                if (newLeft < 0)
                    $('#gameprevious').show();
                else
                    $('#gameprevious').hide();

                if ($('.option').length > 9 * (Math.abs(newLeft / changeLeft) + 1))
                    $('#gamenext').show();
                else
                    $('#gamenext').hide();

                GAME.interactable = true;
            }, 500);
        });

        $('#gameoverlayyes, #gameoverlayno, #gameoverlayclose').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this)
                yes = $this.attr('value') == '1',
                $overlay = $('#gameoverlay');

            if (yes) {
                var correct = $overlay.attr('correct') == '1',
                    answered = $overlay.attr('answered') == '1';

                if (!correct) {
                    $overlay
                        .find('#gameoverlaybox > #gameoverlaycontainer > #gameoverlaytext')
                        .html(GAME.FEEDBACKS.negativo);

                    $('#gameoverlayyes').hide();
                    $('#gameoverlayno').hide();
                    $('#gameoverlayclose').show();

                    GAME.interactable = true;

                    return;
                }
                else if (!answered) {
                    var $game = $('#game'),
                        corretas = parseInt($game.attr('corretas')) + 1;

                    $game.attr('corretas', corretas);

                    $('#gameoptionslist > li[material="' + $overlay.attr('material') + '"]')
                        .attr('answered', 1);

                    $('#gameimage')
                        .attr('class', 'abs')
                        .addClass('construcao_' + $('#game').attr('tipo') + '_' + corretas);
                }
            }

            $overlay.css({ opacity: 0 });

            setTimeout(function () {
                $overlay.hide();

                GAME.interactable = true;
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
    if (!/(iPad|iPhone|iPod)/g.test( navigator.userAgent ))
        $('#stage').addClass('no-touch');
});
