var GAME = {
    initialized: false,
    interactable: false,

    CHARACTERS: {
        dionisio: {
            description: '<span class="title">Dionísio e as origens do teatro grego</span><br /><br />Na Grécia antiga, os participantes dos festivais em honra ao deus <span tooltip="Deus do vinho, da alegria e da fertilidade. As colheitas e a prensagem do vinho eram celebradas com festas em honra a Dionísio, que foi escolhido como patrono do teatro." class="tooltip">Dionísio</span> trajavam máscaras, dançavam e, em coro, entoavam versos para celebrar o vinho e a alegria. Os temas das festividades eram encenados com gestos e um <span tooltip="O solista era quem entoava sozinho algumas partes de um canto." class="tooltip">solista</span> respondia ao coro travando um diálogo. Dessa estrutura, surgiram as tragédias e as comédias. Com base na ação de um herói, as tragédias tinham o infortúnio como tema central: a vontade humana acabava derrotada pelas forças do destino. Já as comédias exploravam situações e personagens do cotidiano para provocar o riso entre os espectadores.',
            audio: 'mp3/dionisio.mp3',
            images: [
                {
                    thumb: 'img/btn_dionisio1.png',
                    file: 'img/img_dionisio1.png',
                    credit: 'DeAgostini/Getty Images',
                    legend: 'Detalhe de vaso decorado com figura de Dionísio cercado por bacantes. Na mitologia, as bacantes são as seguidoras de Dionísio. Vaso datado de 460 a. C. encontrado na região do vale do rio Trebbia, Emília-Romanha, Itália.'
                },
                {
                    thumb: 'img/btn_dionisio2.png',
                    file: 'img/img_dionisio2.png',
                    credit: 'DEA/G. DAGLI ORTI/DeAgostini/Getty Images',
                    legend: 'Ruínas do teatro de Dionísio, construído por volta do século IV a. C. em Atenas, Grécia. As fileiras de seu auditório podiam receber cerca de 20 mil pessoas. Existiam também lugares para os convidados de honra e um assento específico para o sacerdote.'
                },
                {
                    thumb: 'img/bg_dionisio3.png',
                    file: 'img/img_dionisio3.png',
                    credit: 'DeAgostini/Getty Images',
                    legend: 'Máscara cênica encontrada na região de Tarento, Itália, século III a. C. No elenco das peças da Grécia antiga somente homens eram admitidos e os atores utilizavam máscaras para representar todos os papéis das peças.'
                }
            ]
        },
        brecht: {
            description: '<span class="title">Bertold Brecht: teatro e transformação social</span><br /><br />No século XX, surgiram novas e variadas formas teatrais. Entre os dramaturgos mais influentes do teatro contemporâneo destacou-se <span tooltip="Poeta e dramaturgo nasceu na Alemanha e viveu entre 1898 e 1956. Brecht é conhecido pelo caráter revolucionário de suas obras e sua influência sobre o teatro moderno. Entre suas peças mais conhecidas estão <em>A vida de Galileu</em> e <em>Terror e miséria do Terceiro Reich</em>." class="tooltip">Bertold Brecht</span>. Ele pretendia que suas peças despertassem a reflexão crítica do espectador e fossem instrumento de transformação social. Nas peças dirigidas por Brecht, muitas vezes, os atores comentavam, em cena, as ações de suas personagens ou deixavam os bastidores à vista dos espectadores para que eles se lembrassem de que se tratava de uma encenação. No Brasil, o teatro de crítica social e política ganhou força a partir da década de 1940, graças ao trabalho de diretores como <span tooltip="O polonês Zbigniew Ziembinski (1908-1978) chegou ao Brasil, em 1941, fugindo da Segunda Guerra Mundial. Foi um importante expoente do teatro moderno brasileiro e quebrou padrões com a montagem da peça <em>Vestido de noiva</em>, de Nelson Rodrigues, em 1943." class="tooltip">Ziembinski</span> e de grupos teatrais como <span tooltip="Grupo teatral fundado em São Paulo, em 1953. Ganhou projeção nacional, em 1958, com a peça <em>Eles não usam black-tie</em>, de Gianfrancesco Guarnieri, que abordava problemas sociais decorrentes do processo de industrialização do país." class="tooltip">Arena</span>, <span tooltip="Grupo teatral fundado em São Paulo, em 1958. As montagens de <em>O rei da vela</em>, de Oswald de Andrade, em 1967, e <em>Roda viva</em>, de Chico Buarque de Holanda, em 1968, são marcos do teatro no Brasil." class="tooltip">Oficina</span> e <span tooltip="Grupo teatral fundado no Rio de Janeiro, em 1964. Os mais conhecidos espetáculos do grupo, <em>Opinião</em> e <em>Liberdade, liberdade</em>, defendiam a liberdade de pensamento e de criação artística." class="tooltip">Opinião</span>.',
            audio: 'mp3/brecht.mp3',
            images: [
                {
                    thumb: 'img/btn_brecht1.png',
                    file: 'img/img_brecht1.png',
                    credit: 'Erich Auerbach/Hulton Archive/Getty Images',
                    legend: 'Atores em cena durante apresentação da <em>Ópera dos três vinténs</em>, de Bertold Brecht. Berlim, Alemanha, 1928.'
                },
                {
                    thumb: 'img/btn_brecht2.png',
                    file: 'img/img_brecht2.png',
                    credit: 'Acervo Iconographia',
                    legend: 'Nara Leão, Zé Keti e João do Vale no show Opinião, 1965.'
                },
                {
                    thumb: 'img/btn_brecht3.png',
                    file: 'img/img_brecht3.png',
                    credit: 'Folhapress',
                    legend: 'Atores em cena durante apresentação da peça <em>O rei da vela</em> no Teatro Oficina. A peça é marcada por forte crítica social. São Paulo (SP), 1967.'
                }
            ]
        },
        pierrot: {
            description: '<span class="title">A <em>commedia dell’arte</em></span><br /><br />No início do século XVI, surgiu na região da Itália a <span tooltip="O termo de origem italiana pode ser traduzido como “comédia da habilidade”, que remete à agilidade do improviso, característica desse gênero." class="tooltip"><em>commedia dell’arte</em></span>. Promovidos por grupos itinerantes, esses espetáculos ironizavam os costumes vigentes. Os atores utilizavam máscaras e criavam histórias improvisadas a partir de tipos fixos como o famoso trio de personagens típico das festas de carnaval: Pierrô, Colombina e Arlequim. Pierrô, um palhaço triste, é apaixonado pela bela Colombina, que por sua vez se apaixona por Arlequim, uma personagem cômica e galanteadora.',
            audio: 'mp3/pierrot.mp3',
            images: [
                {
                    thumb: 'img/btn_pierrot1.png',
                    file: 'img/img_pierrot1_v2.png',
                    credit: 'Autor desconhecido. Séc XVIII. Gravura. Biblioteca e museo teatrale del Burcardo, Roma. DEA/A. DAGLI ORTI/DeAgostini/Getty Images',
                    legend: 'Gravura do século XVIII retratando artistas da <em>commedia dell’arte</em>. As apresentações costumavam ocorrer nas ruas, nas praças e nos mercados.'
                },
                {
                    thumb: 'img/btn_pierrot2.png',
                    file: 'img/img_pierrot2_v2.png',
                    credit: 'Paul Cezanne. 1888. Óleo s/ tela. Pushkin Museum of Fine Art, Moscou. Alexander Burkatovski/Corbis/Latinstock',
                    legend: 'Paul Cezánne. <em>Pierrot e Arlequim</em>, 1888.'
                },
                {
                    thumb: 'img/btn_pierrot3.png',
                    file: 'img/img_pierrot3.png',
                    credit: 'Edu Lyra/Pulsar Imagens',
                    legend: 'Foliões usando fantasias e máscaras inspiradas na personagem Pierrô, durante festa de carnaval em Nova Veneza (SC), 2013.'
                }
            ]
        },
        phlyax: {
            description: '<span class="title">O mimo no período helenístico</span><br /><br />Durante o período helenístico, o teatro grego difundiu-se pelo Oriente. Uma nova forma teatral ganhou destaque: o mimo ou mime. O mimo era um teatro popular com peças curtas encenadas por poucos atores ou mesmo por um único ator. Essas peças retratavam o povo comum e a vida cotidiana com gestos cômicos e expressões exageradas. Esse gênero remete à tradição de grupos de dançarinos, equilibristas e contadores de histórias que viajavam apresentando-se tanto a príncipes quanto a camponeses. As mulheres, excluídas do teatro clássico grego, muitas vezes faziam parte das trupes de mimo.',
            audio: 'mp3/phlyax.mp3',
            images: [
                {
                    thumb: 'img/btn_phlyax1.png',
                    file: 'img/img_phlyax1.png',
                    credit: 'DEA/M. CARRIERI/DeAgostini/Getty Images',
                    legend: 'Cerâmica grega produzida no século IV a. C. decorada com uma representação do deus Dionísio assistindo à apresentação de um acrobata.'
                },
                {
                    thumb: 'img/btn_phlyax2.png',
                    file: 'img/img_phlyax2.png',
                    credit: 'E. Scott/Wikimedia Commons',
                    legend: 'Fac-símile do papiro CXXXV contendo mimos do poeta helênico Herondas.'
                },
                {
                    thumb: 'img/btn_phlyax3.png',
                    file: 'img/img_phlyax3.png',
                    credit: 'DEA/A. DAGLI ORTI/De Agostini/Getty Images',
                    legend: 'Mosaico romano produzido no século II a. C. retratando um grupo de músicos de rua. Pompeia, Itália.'
                }
            ]
        },
        trovador: {
            description: '<span class="title">O sagrado e profano: o teatro medieval</span><br /><br />O teatro medieval foi regulado pela Igreja Católica, que produzia encenações para ensinar princípios religiosos por meio de <span tooltip="Peças breves, comuns no período medieval, que ensinavam passagens bíblicas e apresentavam exemplos morais." class="tooltip">autos</span> apresentados na Páscoa e no Natal. Os autos escritos por <span tooltip="Dramaturgo português que viveu entre 1465 e 1536, considerado o pai do teatro português. Entre suas obras mais conhecidas estão: <em>Auto dos reis magos</em>, <em>O velho da horta</em>, <em>Farsa de Inês Pereira</em> e <em>Auto da barca do inferno</em>." class="tooltip">Gil Vicente</span> foram muito populares em Portugal medieval. As peças eram representadas em espaços públicos como igrejas, praças, mercados e feiras. As feiras muitas vezes eram animadas por <span tooltip="Artistas nômades que se apresentavam em aldeias, feiras e, algumas vezes, em castelos senhoriais, em troca de dinheiro ou comida e hospedagem." class="tooltip">saltimbancos</span>, grupos de artistas que incluíam malabaristas, mágicos, músicos, poetas e atores que viajavam de aldeia em aldeia encenando histórias cômicas e satirizando situações locais.',
            audio: 'mp3/trovador.mp3',
            images: [
                {
                    thumb: 'img/btn_trovador1.png',
                    file: 'img/img_trovador1.png',
                    credit: 'Culture Club/Hulton Archive/Getty Images',
                    legend: 'Iluminura francesa do século XV retratando apresentação teatral durante o período medieval.'
                },
                {
                    thumb: 'img/btn_trovador2.png',
                    file: 'img/img_trovador2.png',
                    credit: 'adoc-photos/Corbis/Latinstock',
                    legend: 'Gravura representando a encenação de um mistério diante de uma catedral. Os mistérios medievais eram um tipo de drama com temas bíblicos.'
                },
                {
                    thumb: 'img/btn_trovador3.png',
                    file: 'img/img_trovador3.png',
                    credit: 'British Library Board/The Bridgeman Art Library/Keystone Brasil',
                    legend: 'Iluminura inglesa retratando músicos e um acrobata, c. 1340.'
                }
            ]
        },
        terencio: {
            description: '<span class="title">A comédia em Roma antiga</span><br /><br />O teatro romano foi influenciado pelas tradições gregas. Obras produzidas na Grécia eram encenadas em latim, e dramaturgos romanos, como <span tooltip="Dramaturgo e poeta romano que viveu entre 190-159 a. C. nascido em Cartago, chegou a Roma como escravo. Suas comédias, conhecidas pelo refinamento, influenciaram diversos autores." class="tooltip">Terêncio</span>, criavam suas obras a partir de modelos gregos. As comédias eram mais populares em Roma, em especial, aquelas com temas relacionados à crítica política, o que acabou levando alguns dramaturgos ao exílio. O público romano preferia peças curtas e simples, como os espetáculos de mimos e <span tooltip="Tipo de representação expressa apenas por gestos com mímica e dança." class="tooltip">pantomimas</span>.',
            audio: 'mp3/terencio.mp3',
            images: [
                {
                    thumb: 'img/btn_terencio1.png',
                    file: 'img/img_terencio1.png',
                    credit: 'Nimatallah/Album/akg-images/Latinstock',
                    legend: 'Produzido no século II d. C. este mosaico romano retrata máscaras utilizadas em apresentações de teatro. Villa Adriana, Tivoli, Itália.'
                },
                {
                    thumb: 'img/btn_terencio2.png',
                    file: 'img/img_terencio2.png',
                    credit: 'PATRICK BAZ/AFP/Getty Images',
                    legend: 'Ruínas de teatro romano no sítio arqueológico de Sabratha, Líbia. Set. 2011. O teatro também servia para a difusão da cultura romana em suas províncias.'
                },
                {
                    thumb: 'img/btn_terencio3.png',
                    file: 'img/img_terencio3.png',
                    credit: 'A. DAGLI ORTI/DeAgostini/DIOMEDIA',
                    legend: 'Mosaico romano produzido no século I d. C. retratando os bastidores de um teatro antes da apresentação de uma comédia.'
                }
            ]
        },
        goethe: {
            description: '<span class="title">Goethe e o Romantismo</span><br /><br />Na Europa, a partir do século XVIII, surgiu um movimento artístico empenhado em retratar as emoções dos indivíduos, grandes paixões e conflitos. Chamado Romantismo, esse movimento teve <span tooltip="Johann Wolfgang Goethe nasceu em Frankfurt e viveu entre 1749 e 1832. Poeta, dramaturgo, romancista e filósofo, buscou aprimorar as formas teatrais. Trabalhou cerca de sessenta anos em sua obra mais conhecida, <em>Fausto</em>." class="tooltip">Goethe</span> como um de seus principais autores. Suas obras tratavam do conflito entre a razão e a emoção e inspiraram muitos artistas da época. As peças do teatro romântico também exploravam temas históricos e buscavam valorizar tradições populares.',
            audio: 'mp3/goethe.mp3',
            images: [
                {
                    thumb: 'img/btn_goethe1.png',
                    file: 'img/img_goethe1.png',
                    credit: 'Culture Club/Hulton Archive/Getty Images',
                    legend: 'Gravura que retrata a apresentação da peça <em>Hernani</em>, do escritor francês Victor Hugo. Na estreia da peça em Paris, em 1830, a plateia se dividiu entre os que defendiam as formas do teatro clássico e os defensores do Romantismo. Os grupos se enfrentaram, mas a apresentação prosseguiu sem pausas.'
                },
                {
                    thumb: 'img/btn_goethe2.png',
                    file: 'img/img_goethe2_v2.png',
                    credit: 'James Jacques Joseph Tissot. 1860. Óleo s/ tela. Museu d\'Orsay, Paris. Album/DEA PICTURE LIBRARY/Latinstock',
                    legend: 'James Tissot. <em>O encontro de Fausto e Marguerite</em>. Óleo sobre tela. 0,78 x 1,17 m. Pintura inspirada em uma passagem da obra <em>Fausto</em>, de Goethe.'
                },
                {
                    thumb: 'img/btn_goethe3.png',
                    file: 'img/img_goethe3_v2.png',
                    credit: 'Karl Friedrich Lessing. 1832. Óleo s/ tela. Museu de Arte da Filadélfia. Fine Art Images/Heritage Images/Getty Images',
                    legend: '<em>O ladrão e seu filho</em>. Carl Friedrich Lessing. 1832. Óleo sobre tela. 0,42 X 0,48 m. A representação de personagens em conflito era comum na arte romântica.'
                }
            ]
        }
    },

    showTooltip: function () {
        var $this = $(this),
            $characterTextWrapper = $('#character_text_wrapper'),
            $tooltipOverlay = $('#tooltip_overlay'),
            $tooltip = $('#tooltip'),
            scale = $characterTextWrapper[0].getBoundingClientRect().width / $characterTextWrapper.width(),
            thisPosition = this.getBoundingClientRect(),
            tooltip = $this.attr('tooltip'),
            className = (thisPosition.top / scale > parseInt($characterTextWrapper.css('top')) + $characterTextWrapper.height() / 2 ? 'bottom' : 'top');

        $tooltip
            .html(tooltip)
            .removeClass('top')
            .removeClass('bottom')
            .addClass(className)
            .removeAttr('style')
            .css({
                left: (thisPosition.left / scale + (thisPosition.width / scale) / 2 - $tooltip.width() / 2 - 15) + 'px'
            });

        if (className == 'top')
            $tooltip
                .css({
                    top: thisPosition.bottom / scale + 29
                });
        else
            $tooltip
                .css({
                    bottom: $tooltipOverlay.height() - (thisPosition.top / scale) + 29
                });

        $tooltipOverlay
            .show();
    },

    loadCharacter: function (character) {
        var $character = $('.btn_' + character),
            $gameOverlay = $('#game_overlay'),
            left = parseInt($character.css('left')),
            top = parseInt($character.css('top')),
            width = $character.width(),
            height = $character.height(),
            characterData = GAME.CHARACTERS[character],
            $btnAudio = $('#btn_audio'),
            $sliderAudio = $('#slider_audio');

        $btnAudio
            .removeClass('btn_play')
            .removeClass('btn_pause')
            .addClass('btn_play');

        _capa.audio({
            id: 'character_audio',
            mp3: characterData.audio,
            autoplay: false
        });

        var $audio = $('#character_audio > audio');

        $sliderAudio
            .slider({
                max: 100,
                value: 0
            });

        $audio.on('timeupdate', function () {
            $sliderAudio
                .slider({ value: ($audio[0].currentTime / $audio[0].duration) * 100 });
        });

        $audio.on('ended', function () {
            $btnAudio
                .removeClass('btn_play')
                .removeClass('btn_pause')
                .addClass('btn_play');

            $audio[0].currentTime = 0;

            $sliderAudio
                .slider({
                    max: 100,
                    value: 0
                });
        });

        $('#character_text')
            .html(characterData.description);

        $('#gallery_image')
            .css({
                zIndex: -1,
                opacity: 0
            });

        $('.tooltip')
            .click(GAME.showTooltip);

        for (var i = 0; i < 3; i++)
            $('#gallery_image_' + (i + 1))
                .attr('character', character)
                .css({ backgroundImage: 'url(' + characterData.images[i].thumb + ')' });

        $('#description_text, #btn_description')
            .css({ opacity: 0 });

        $('#btn_back')
            .css({ opacity: 1 });

        $character
            .addClass('selected')
            .removeClass('btn')
            .css({
                left: (198.5 - width / 2) + 'px',
                top: (630 - height) + 'px'
            });

        $gameOverlay
            .css({
                zIndex: 1,
                opacity: 1
            });

        setTimeout(function () {
            $('#character_text_wrapper')
                .css({ opacity: 1 });

            setTimeout(function () {
                $('#gallery')
                    .css({ opacity: 1 });

                setTimeout(function () {
                    $('#audio_player')
                        .css({ opacity: 1 });
                }, 500);
            }, 500);
        }, 500);
    },

    doBind: function () {
        if (GAME.initialized)
            return;

        $('#btn_intro').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            $('#intro_text, #btn_intro')
                .css({ opacity: 0 });

            setTimeout(function () {
                $('#movable_main_curtain')
                    .addClass('recoiled');

                setTimeout(function () {
                    $('#description_text, #btn_description')
                        .css({ opacity: 1 });

                    setTimeout(function () {
                        GAME.interactable = true;
                    }, 500);
                }, 500);
            }, 500);
        });

        $('#btn_description').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $topCurtain = $('#movable_top_curtain'),
                $btnDescription = $('#btn_description');

            if ($topCurtain.hasClass('recoiled')) {
                $topCurtain
                    .removeClass('recoiled');
                    
                $btnDescription
                    .addClass('btn_up')
                    .removeClass('btn_down');
            }
            else {
                $topCurtain
                    .addClass('recoiled');
                    
                $btnDescription
                    .addClass('btn_down')
                    .removeClass('btn_up');
            }
            setTimeout(function () {
                GAME.interactable = true;
            }, 500);
        });

        $('.character').click(function () {
            if (!GAME.interactable)
                return;

            var $this = $(this);

            if (!($('#movable_top_curtain').hasClass('recoiled'))) {
                $('#btn_description')
                    .click();

                setTimeout(function () {
                    GAME.interactable = false;

                    GAME.loadCharacter($this.attr('character'));

                    setTimeout(function () {
                        GAME.interactable = true;
                    }, 2000);
                }, 500);
            }
            else {
                GAME.interactable = false;

                GAME.loadCharacter($this.attr('character'));

                setTimeout(function () {
                    GAME.interactable = true;
                }, 2000);
            }
        });

        $('#btn_back').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $character = $('.character.selected'),
                $gameOverlay = $('#game_overlay');

            $('#character_audio > audio')[0].pause();

            $('#audio_player')
                .css({ opacity: 0 });

            setTimeout(function () {
                $('#gallery')
                    .css({ opacity: 0 });

                setTimeout(function () {
                    $('#character_text_wrapper')
                        .css({ opacity: 0 })

                    $('#gallery_image')
                        .css({
                            zIndex: -1,
                            opacity: 0
                        });

                    setTimeout(function () {
                        $('#description_text, #btn_description')
                            .css({ opacity: 1 });

                        $('#btn_back')
                            .css({ opacity: 0 });

                        $character
                            .addClass('btn')
                            .removeClass('selected')
                            .removeAttr('style');

                        $gameOverlay
                            .css({
                                zIndex: -1,
                                opacity: 0
                            });

                        setTimeout(function () {
                            GAME.interactable = true;
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        });

        $('#btn_audio').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this);

            if ($this.hasClass('btn_play')) {
                $this
                    .removeClass('btn_play')
                    .addClass('btn_pause');

                $('#character_audio > audio')[0].play();
            }
            else {
                $this
                    .removeClass('btn_pause')
                    .addClass('btn_play');

                $('#character_audio > audio')[0].pause();
            }

            GAME.interactable = true;
        });

        $('#slider_audio').on('slide', function (event, ui) {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                $audio = $('#character_audio > audio'),
                percentual = $this.slider('value');

            $audio[0].currentTime = (percentual / 100) * $audio[0].duration;

            GAME.interactable = true;
        });

        $('.thumb').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                $characterTextWrapper = $('#character_text_wrapper'),
                $galleryImage = $('#gallery_image'),
                character = $this.attr('character'),
                image = parseInt($this.attr('image')),
                characterData = GAME.CHARACTERS[character];

            $('#credit')
                .html('<span class="credit">CRÉDITO:</span> ' + characterData.images[image].credit);

            $('#legend')
                .html(characterData.images[image].legend);

            if (parseInt($characterTextWrapper.css('opacity')) == 1) {
                $characterTextWrapper
                    .css({ opacity: 0 });

                $galleryImage
                    .css({ zIndex: 102 });

                setTimeout(function () {
                    $galleryImage
                        .css({
                            backgroundImage: 'url(' + characterData.images[image].file + ')',
                            opacity: 1
                        });

                    setTimeout(function () {
                        GAME.interactable = true;
                    }, 500);
                }, 500);
            }
            else {
                $galleryImage
                    .css({
                        backgroundImage: 'url(' + characterData.images[image].file + ')',
                        opacity: 1
                    });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }
        });

        $('#gallery_close').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $characterTextWrapper = $('#character_text_wrapper'),
                $galleryImage = $('#gallery_image');

            $galleryImage
                .css({ opacity: 0 });

            setTimeout(function () {
                $galleryImage
                    .css({ zIndex: -1 });

                $characterTextWrapper
                    .css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('#tooltip_overlay').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            $('#tooltip_overlay')
                .hide();

            GAME.interactable = true;
        });
    },

    doInit: function () {
        if (!GAME.initialized) {
            GAME.doBind();

            GAME.initialized = true;
        }

        $('#btn_back, #description_text, #btn_description')
            .css({ opacity: 0 });

        $('#audio_player, #character_text_wrapper, #gallery')
                .css({ opacity: 0 });

        $('#slider_audio')
            .slider();

        $('#game_overlay, #gallery_image')
            .css({
                zIndex: -1,
                opacity: 0
            });

        $('#tooltip_overlay')
            .hide();

        GAME.interactable = true;
    }
}

$(document).ready(function () {
    GAME.doInit();
});
