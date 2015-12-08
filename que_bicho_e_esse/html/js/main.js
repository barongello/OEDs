var GAME = GAME || {
    initialized: false,
    interactable: false,

    ANIMALS: {
        girafa: {
            name: 'GIRAFA',
            image: 'img/girafa_animada_1.png',
            sound: 'mp3/girafa.mp3',
            options: ['girafa', 'galinha', 'grilo'],
            positionsAndSizes: {
                image: {
                    left: '120px',
                    top: '90px',
                    width: '389px',
                    height: '558px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '215px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/girafa_animada_1.png', 'img/girafa_animada_2.png', 'img/girafa_animada_3.png', 'img/girafa_animada_2.png', 'img/girafa_animada_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        elefante: {
            name: 'ELEFANTE',
            image: 'img/elefante_animado_1.png',
            sound: 'mp3/elefante.mp3',
            options: ['elefante', 'esquilo', 'ema'],
            positionsAndSizes: {
                image: {
                    left: '35px',
                    top: '155px',
                    width: '472px',
                    height: '435px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '50px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/elefante_animado_1.png', 'img/elefante_animado_2.png', 'img/elefante_animado_3.png', 'img/elefante_animado_2.png', 'img/elefante_animado_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        zebra: {
            name: 'ZEBRA',
            image: 'img/zebra_animada_1.png',
            sound: 'mp3/zebra.mp3',
            options: ['zebra', 'tigre', 'leão'],
            positionsAndSizes: {
                image: {
                    left: '0px',
                    top: '150px',
                    width: '510px',
                    height: '438px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '50px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/zebra_animada_1.png', 'img/zebra_animada_2.png', 'img/zebra_animada_3.png', 'img/zebra_animada_2.png', 'img/zebra_animada_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        camelo: {
            name: 'CAMELO',
            image: 'img/camelo_animado_1.png',
            sound: 'mp3/camelo.mp3',
            options: ['camelo', 'cachorro', 'cigarra'],
            positionsAndSizes: {
                image: {
                    left: '60px',
                    top: '180px',
                    width: '448px',
                    height: '391px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '50px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/camelo_animado_1.png', 'img/camelo_animado_2.png', 'img/camelo_animado_3.png', 'img/camelo_animado_2.png', 'img/camelo_animado_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        tatu: {
            name: 'TATU',
            image: 'img/tatu_animado_1.png',
            sound: 'mp3/tatu.mp3',
            options: ['tatu', 'touro', 'tamanduá'],
            positionsAndSizes: {
                image: {
                    left: '0px',
                    top: '300px',
                    width: '493px',
                    height: '298px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '50px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/tatu_animado_1.png', 'img/tatu_animado_2.png', 'img/tatu_animado_3.png', 'img/tatu_animado_2.png', 'img/tatu_animado_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        macaco: {
            name: 'MACACO',
            image: 'img/macaco_animado_1.png',
            sound: 'mp3/macaco.mp3',
            options: ['macaco', 'morcego', 'abelha'],
            positionsAndSizes: {
                image: {
                    left: '150px',
                    top: '150px',
                    width: '312px',
                    height: '461px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '50px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/macaco_animado_1.png', 'img/macaco_animado_2.png', 'img/macaco_animado_3.png', 'img/macaco_animado_2.png', 'img/macaco_animado_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        panda: {
            name: 'URSO PANDA',
            image: 'img/panda_animado_1.png',
            sound: 'mp3/panda.mp3',
            options: ['urso panda', 'peru', 'porco'],
            positionsAndSizes: {
                image: {
                    left: '85px',
                    top: '165px',
                    width: '406px',
                    height: '430px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '50px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/panda_animado_1.png', 'img/panda_animado_2.png', 'img/panda_animado_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        golfinho: {
            name: 'GOLFINHO',
            image: 'img/golfinho_animado_1.png',
            sound: 'mp3/golfinho.mp3',
            options: ['golfinho', 'gato', 'gaivota'],
            positionsAndSizes: {
                image: {
                    left: '125px',
                    top: '155px',
                    width: '391px',
                    height: '425px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '50px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/golfinho_animado_1.png', 'img/golfinho_animado_2.png', 'img/golfinho_animado_3.png', 'img/golfinho_animado_2.png', 'img/golfinho_animado_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        polvo: {
            name: 'POLVO',
            image: 'img/polvo_animado_1.png',
            sound: 'mp3/polvo.mp3',
            options: ['polvo', 'pavão', 'pombo'],
            positionsAndSizes: {
                image: {
                    left: '50px',
                    top: '205px',
                    width: '464px',
                    height: '394px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '50px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/polvo_animado_1.png', 'img/polvo_animado_2.png', 'img/polvo_animado_3.png', 'img/polvo_animado_2.png', 'img/polvo_animado_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        tartaruga: {
            name: 'TARTARUGA',
            image: 'img/tartaruga_animada_1.png',
            sound: 'mp3/tartaruga.mp3',
            options: ['tartaruga', 'tatu', 'tucano'],
            positionsAndSizes: {
                image: {
                    left: '60px',
                    top: '280px',
                    width: '430px',
                    height: '236px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '50px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/tartaruga_animada_1.png', 'img/tartaruga_animada_2.png', 'img/tartaruga_animada_3.png', 'img/tartaruga_animada_2.png', 'img/tartaruga_animada_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        peixe: {
            name: 'PEIXE',
            image: 'img/peixe_animado_1.png',
            sound: 'mp3/peixe.mp3',
            options: ['peixe', 'gato', 'pato'],
            positionsAndSizes: {
                image: {
                    left: '285px',
                    top: '155px',
                    width: '558px',
                    height: '177px'
                },

                box: {
                    left: '257px',
                    top: '335px'
                },

                info: {
                    left: '255px',
                    top: '100px'
                }
            },
            animation: {
                sequence: ['img/peixe_animado_1.png', 'img/peixe_animado_2.png', 'img/peixe_animado_3.png', 'img/peixe_animado_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        foca: {
            name: 'FOCA',
            image: 'img/foca_animada_1.png',
            sound: 'mp3/foca.mp3',
            options: ['foca', 'flamingo', 'formiga'],
            positionsAndSizes: {
                image: {
                    left: '90px',
                    top: '175px',
                    width: '410px',
                    height: '395px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '50px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/foca_animada_1.png', 'img/foca_animada_2.png', 'img/foca_animada_3.png', 'img/foca_animada_2.png', 'img/foca_animada_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        pinguim: {
            name: 'PINGUIM',
            image: 'img/pinguim_animado_1.png',
            sound: 'mp3/pinguim.mp3',
            options: ['pinguim', 'pato', 'peixe'],
            positionsAndSizes: {
                image: {
                    left: '190px',
                    top: '180px',
                    width: '264px',
                    height: '399px'
                },

                box: {
                    left: '464px',
                    top: '193px'
                },

                info: {
                    left: '50px',
                    top: '215px'
                }
            },
            animation: {
                sequence: ['img/pinguim_animado_1.png', 'img/pinguim_animado_2.png', 'img/pinguim_animado_3.png', 'img/pinguim_animado_2.png', 'img/pinguim_animado_1.png'],
                duration: 1000,
                iterations: 2
            }
        },

        baleia: {
            name: 'BALEIA',
            image: 'img/baleia_animada_1.png',
            sound: 'mp3/baleia.mp3',
            options: ['baleia', 'barata', 'borboleta'],
            positionsAndSizes: {
                image: {
                    left: '157px',
                    top: '130px',
                    width: '710px',
                    height: '197px'
                },

                box: {
                    left: '257px',
                    top: '330px'
                },

                info: {
                    left: '255px',
                    top: '100px'
                }
            },
            animation: {
                sequence: ['img/baleia_animada_1.png', 'img/baleia_animada_2.png', 'img/baleia_animada_3.png', 'img/baleia_animada_2.png', 'img/baleia_animada_1.png'],
                duration: 1000,
                iterations: 2
            }
        }
    },

    loadAnimal: function (animal) {
        var animalData = GAME.ANIMALS[animal];
        var $game = $('#animalGame');
        var $header = $('#animalGame > #gameHeader');

        $header
            .removeClass('boxerrado')
            .removeClass('boxcorreto');

        $game.find('#gameHeader > #gameHeaderContent > #gameHeaderText')
            .css({ color: '#0f3450' })
            .html('QUAL É O NOME DESTE ANIMAL?<br />CLIQUEM NO ÍCONE <img src="img/btn_info_up.png" width="19" /> LOCALIZADO PERTO DO ANIMAL PARA VER COMO SE ESCREVE SEU NOME.');

        $game.find('#gameBox')
            .css({
                left: animalData.positionsAndSizes.box.left,
                top: animalData.positionsAndSizes.box.top
            });

        $game.find('#gameBox > #animalName')
            .html(animalData.name);

        var optionsOrders = [0, 1, 2];
        for (var i = 0; i < optionsOrders.length - 1; i++) {
            var j = Math.floor(Math.random() * (optionsOrders.length - i)) + i;

            var tmpOrder = optionsOrders[i];
            optionsOrders[i] = optionsOrders[j];
            optionsOrders[j] = tmpOrder;
        }

        for (var i = 0; i < optionsOrders.length; i++)
            $game.find('#gameBox > #option' + i)
                .attr('correct', (optionsOrders[i] == 0 ? '1' : '0'))
                .html(animalData.options[optionsOrders[i]]);

        $game.find('#gameBox > #gameAudio')
            .attr('animal', animal)
            .attr('initialized', 0);

        $game.find('#gameBox').find('#animalName, .option, .audioButton')
            .hide();

        $game.find('#gameImage')
            .attr('animal', animal)
            .removeAttr('style')
            .css({
                backgroundImage: 'url(' + animalData.image + ')',
                left: animalData.positionsAndSizes.image.left,
                top: animalData.positionsAndSizes.image.top,
                width: animalData.positionsAndSizes.image.width,
                height: animalData.positionsAndSizes.image.height
            });

        $game.find('#gameInfo')
            .attr('initialized', 0)
            .css({
                left: animalData.positionsAndSizes.info.left,
                top: animalData.positionsAndSizes.info.top
            });
    },

    animateAnimal: function (animal) {
        // Hold up, heyyyyyyyy, for my niggaz who be thinkin we soft
        // We don't, playyyyyyy, we gon' rock it til the wheels fall off
        // Hold up, heyyyyyyyy, for my niggaz who be actin too bold
        // Take a, seeaaaaaat, hope you ready for the next episode
        // HeyyyeyyyeEYEYyyyEYYYY...., ....smoke weed everyday

        if (!(animal in GAME.ANIMALS))
            return;

        var animalData = GAME.ANIMALS[animal];
        var interval = animalData.animation.duration / (animalData.animation.sequence.length - 1);
        var $gameImage = $('#gameImage');

        for (var i = 0; i < animalData.animation.iterations; i++)
            for (var j = 0; j < animalData.animation.sequence.length; j++) {
                setTimeout(
                    (function (imageFile) {
                        return function () {
                            $gameImage.css({
                                backgroundImage: 'url(' + imageFile + ')'
                            });
                        }
                    })(animalData.animation.sequence[j]),
                    i * animalData.animation.duration + j * interval
                );
            }
    },

    doBind: function () {
        $('#introTitleStart').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $intro = $('#intro');
            var $menu = $('#menu');

            $intro.css({ opacity: 1 }).show().animate({ opacity: 0 }, 500, function () {
                $intro.hide();
                $menu.css({ opacity: 0 }).show().animate({ opacity: 1 }, 500, function () {
                    GAME.interactable = true;
                })
            })
        });

        $('.habitatButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this);
            var habitatNumber = $this.attr('habitat');

            var $menu = $('#menu');
            var $habitat = $('#habitat' + habitatNumber);

            $menu.css({ opacity: 1 }).show().animate({ opacity: 0 }, 500, function () {
                $menu.hide();
                $habitat.css({ opacity: 0 }).show().animate({ opacity: 1 }, 500, function () {
                    GAME.interactable = true;
                });
            })
        });

        $('.habitat > .backButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this);
            var $habitat = $this.parent();
            var $menu = $('#menu');

            $habitat.css({ opacity: 1 }).show().animate({ opacity: 0 }, 500, function () {
                $habitat.hide();
                $menu.css({ opacity: 0 }).show().animate({ opacity: 1}, 500, function () {
                    GAME.interactable = true;
                });
            });
        });

        $('.animal').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this);
            var $game = $('#animalGame');
            var $habitat = $this.parent();
            var habitatNumber = $habitat.attr('habitat');

            GAME.loadAnimal($this.attr('animal'));

            $this.effect('shake', {
                direction: (Math.floor(Math.random() * 2) == 0 ? 'left' : 'right'),
                distance: Math.floor(Math.random() * 4) * 10,
                times: Math.floor(Math.random() * 3)
            }, 250);

            $habitat.find('.backButton, .smallLogo, .habitatHeader')
                .css({ opacity: 1 })
                .animate({ opacity: 0 }, 250);

            $game
                .attr('habitat', habitatNumber)
                .removeAttr('class')
                .addClass('habitat_' + habitatNumber)
                .css({ opacity: 0 })
                .show()
                .animate({ opacity: 1 }, 250, function () {
                    GAME.interactable = true;
                });
        });

        $('#gameInfo').click(function () {
            if (!GAME.interactable)
                return;

            var $this = $(this);

            if ($this.attr('initialized') == 1)
                return;

            GAME.interactable = false;

            var $headerText = $('#animalGame > #gameHeader > #gameHeaderContent > #gameHeaderText');

            $headerText
                .css({ opacity: 1 })
                .animate({ opacity: 0 }, 250, function () {
                    $headerText
                        .html('PARA OUVIR O NOME DO ANIMAL, CLIQUEM NO BOTÃO DE ÁUDIO.')
                        .css({ opacity: 0 })
                        .animate({ opacity: 1 }, 250, function () {
                            $('#animalGame > #gameBox').find('#animalName, .audioButton')
                                .show();
                        });
                });

            $this.attr('initialized', 1);

            GAME.interactable = true;
        });

        $('#animalGame > #gameBox > .audioButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this);
            var animal = $this.attr('animal');
            var animalData = GAME.ANIMALS[animal];

            if ($this.attr('initialized') == 0) {
                var $headerText = $('#animalGame > #gameHeader > #gameHeaderContent > #gameHeaderText');
                $headerText
                    .css({ opacity: 1 })
                    .animate({ opacity: 0 }, 250, function () {
                        $headerText
                            .html('AGORA, OBSERVEM E SELECIONEM O NOME DESSE ANIMAL ESCRITO EM LETRA CURSIVA.')
                            .css({ opacity: 0 })
                            .animate({ opacity: 1 }, 250, function () {
                                $('#animalGame > #gameBox > .option')
                                    .attr('initialized', 0)
                                    .show();
                            });
                    });

                $this.attr('initialized', 1);
            }

            _capa.audio({ id: 'audioPlayer', mp3: animalData.sound, autoplay: false });
            $('#audioPlayer > audio')[0].play();

            GAME.interactable = true;
        });

        $('.option').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this);
            var correct = $this.attr('correct') == 1;

            if (correct && $this.attr('initialized') == 0) {
                var $headerText = $('#animalGame > #gameHeader > #gameHeaderContent > #gameHeaderText');
                var $header = $('#animalGame > #gameHeader');

                $header
                    .removeClass('boxerrado')
                    .addClass('boxcorreto');

                $headerText
                    .css({ opacity: 1 })
                    .animate({ opacity: 0 }, 250, function () {
                        $headerText
                            .html('É ISSO MESMO! MUITO BEM.')
                            .animate({ opacity: 1 }, 250, function () {
                                $('.option[correct="0"]').hide();

                                var $gameImage = $('#gameImage');

                                GAME.animateAnimal($gameImage.attr('animal'));

                                GAME.interactable = true;
                            });
                    });

                $this.attr('initialized', 1);
            }
            else if (!correct) {
                var $headerText = $('#animalGame > #gameHeader > #gameHeaderContent > #gameHeaderText');
                var $header = $('#animalGame > #gameHeader');

                $header
                    .removeClass('boxcorreto')
                    .addClass( 'boxerrado' );

                $headerText
                    .css({ opacity: 1 })
                    .animate({ opacity: 0 }, 250, function () {
                        $headerText
                            .html('SERÁ QUE É ISTO MESMO? LEIAM NOVAMENTE O NOME DO ANIMAL<br >E ESCUTEM O ÁUDIO.')
                            .animate({ opacity: 1 }, 250);
                    });

                $this.effect('shake', {
                    direction: (Math.floor(Math.random() * 2) == 0 ? 'left' : 'right'),
                    distance: Math.floor(Math.random() * 4) * 10,
                    times: Math.floor(Math.random() * 3)
                }, 500, function () {
                    GAME.interactable = true;
                });
            }
            else
                GAME.interactable = true;
        });

        $('#animalGame > .backButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this);
            var $game = $('#animalGame');
            var habitatNumber = $this.parent().attr('habitat');
            var $habitat = $('#habitat' + habitatNumber);

            $habitat.find('.backButton, .smallLogo, .habitatHeader')
                .css({ opacity: 0 })
                .animate({ opacity: 1 }, 250);

            $game.removeAttr('habitat').css({ opacity: 1 }).animate({ opacity: 0 }, 250, function () {
                $game.hide();

                GAME.interactable = true;
            });
        });
    },

    doInit: function () {
        GAME.interactable = false;

        if (!GAME.initialized) {
            GAME.doBind();

            GAME.initialized = true;
        }

        GAME.interactable = true;
    }
};

$(document).ready(function () {
    if (navigator.userAgent.indexOf("JavaFX") > -1)
        $('.option').each(function () {
            $( this ).css('line-height', '60px');
        });

    GAME.doInit()
});
