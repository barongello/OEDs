/* ##### JavaScript Principal ##### */
var GAME = {
    question: 0,
    questions: {
        0: {
            question: 'A região onde a qualidade da internet é alta possui como característica:',
            answers: {
                0: {
                    answer: 'Menor quantidade de população, pois quanto menos pessoas utilizando a rede melhor é a conexão com a internet.',
                    correct: false
                },
                1: {
                    answer: 'Menor quantidade de aeroportos, uma vez que a comunicação pela internet elimina a necessidade de redes de transporte.',
                    correct: false
                },
                2: {
                    answer: 'Maior concentração de rodovias, o que indica maior demanda de fluxo.',
                    correct: true
                },
                3: {
                    answer: 'Até 10% de domicílios com renda de até ¼ de salário mínimo.',
                    correct: false
                }
            },
            feedbacks: {
                right: 'Parabéns, você acertou! A alta demanda de fluxo indica que a necessidade de comunicação e deslocamento são elevados. A região onde a qualidade da internet é alta é justamente onde há maior concentração de rodovias e aeroportos, o que indica a sua importância econômica.',
                wrong: 'Resposta errada. A alta demanda de fluxo indica que a necessidade de comunicação e deslocamento são elevados. A região onde a qualidade da internet é alta é justamente onde há maior concentração de rodovias e aeroportos, o que indica a sua importância econômica.'
            }
        },
        1: {
            question: 'Assinale a alternativa correta:',
            answers: {
                0: {
                    answer: 'Geralmente, a qualidade da internet é alta nas cidades da região Norte do Brasil.',
                    correct: false
                },
                1: {
                    answer: 'As regiões mais empobrecidas do Brasil não possuem cidades onde a qualidade da internet é alta.',
                    correct: false
                },
                2: {
                    answer: 'A população do Brasil está concentrada na região onde a internet é de baixa qualidade.',
                    correct: false
                },
                3: {
                    answer: 'A maior concentração de população é nas capitais, onde geralmente a internet é de alta qualidade.',
                    correct: true
                }
            },
            feedbacks: {
                right: 'Parabéns, você acertou! A população está concentrada nas capitais dos estados, onde, de modo geral, a qualidade da internet é mais alta justamente por conta da maior dinâmica econômica desses lugares (maior concentração de empresas, maior necessidade de comunicação).',
                wrong: 'Resposta incorreta. A população está concentrada nas capitais dos estados, onde, de modo geral, a qualidade da internet é mais alta justamente por conta da maior dinâmica econômica desses lugares (maior concentração de empresas, maior necessidade de comunicação).'
            }
        },
        2: {
            question: 'Assinale a alternativa correta sobre a região Sudeste:',
            answers: {
                0: {
                    answer: 'Possui a maior quantidade de domicílios empobrecidos do Brasil.',
                    correct: false
                },
                1: {
                    answer: 'Possui a maior quantidade de estados do Brasil.',
                    correct: false
                },
                2: {
                    answer: 'A alta qualidade da internet está associada à sua maior importância econômica.',
                    correct: true
                },
                3: {
                    answer: 'Contém a menor densidade de redes de transporte do país.',
                    correct: false
                }
            },
            feedbacks: {
                right: 'Parabéns, você acertou. A maior densidade de redes de transporte, o menor índice de pobreza e a concentração da população indicam que a região Sudeste é a que detém a melhores condições econômicas do Brasil, motivo pelo qual necessita de um eficiente sistema de comunicação, com alta qualidade de internet.',
                wrong: 'Resposta errada. A maior densidade de redes de transporte, o menor índice de pobreza e a concentração da população indicam que a região Sudeste é a que detém a melhores condições econômicas do Brasil, motivo pelo qual necessita de um eficiente sistema de comunicação, com alta qualidade de internet.'
            }
        }
    },
    initialized: false,
    
    doBind: function () {
        $('#gameStage > #mapButtons > .button').click(function () {
            var o = $(this);
            var checked = o.hasClass('checked');
            var mapid = (checked ? '0' : o.attr('mapid'));
            
            $('#gameStage > #mapButtons > .button').removeClass('checked').addClass('notchecked');
            $('#gameStage > #map').removeClass('map0 map1 map2 map3 map4');
            
            if (!checked)
                o.addClass('checked');
            
            $('#gameStage > #map').addClass('map' + mapid);
        });
        
        $('#gameStage > #questionBox > .answer').click(function () {
            var o = $(this);
            var qn = GAME.question;
            var qo = GAME.questions[qn];
            var a = o.attr('answerid');
            var correct = qo.answers[a].correct;
            
            $('#gameStage > #questionBox > .answer').removeClass('checked').addClass('notchecked');
            o.addClass('checked');
            
            $('#gameFeedback > #popup').removeClass('right wrong');
            
            if (correct) {
                $('#gameFeedback > #popup').addClass('right');
                $('#gameFeedback > #popup > #text').html(qo.feedbacks.right);
            }
            else {
                $('#gameFeedback > #popup').addClass('wrong');
                $('#gameFeedback > #popup > #text').html(qo.feedbacks.wrong);
            }
            
            $('#gameFeedback').show();
        });
        
        $('#gameFeedback > #popup > #next').click(function () {
            GAME.question += 1;
            GAME.loadActualQuestion();
            
            $('#gameFeedback').hide();
        });
    },
    
    doReset: function () {
        $('#gameStage > #mapButtons > .button').removeClass('checked').addClass('notchecked');
        $('#gameStage > #map').removeClass('map0 map1 map2 map3 map4').addClass('map0');
        $('#gameStage > #questionBox > #question').html('Questão');
        
        for (i = 0; i < 4; i++)
            $('#gameStage > #questionBox > .answer[answerid=' + i + ']').html('Resposta ' + (i + 1));
        
        $('#gameFeedback').hide();
    },
    
    loadActualQuestion: function () {
        var qn = this.question;
        
        if (!(qn in this.questions)) {
            OUP.finalizar.abrir('');
            return;
        }
        
        var qo = this.questions[qn];
        
        $('#gameStage > #questionBox > #question').html(qo.question);
        $('#gameStage > #questionBox > .answer').removeClass('checked').addClass('notchecked');
        
        for (i = 0; i < 4; i++)
            $('#gameStage > #questionBox > .answer[answerid=' + i + ']').html(qo.answers[i].answer);
    },
    
    doInit: function () {
        this.question = 0;
        
        if (!this.initialized) {
            this.doBind();
            
            this.inidialized = true;
        }
        
        this.doReset();
        this.loadActualQuestion();
    }
};

function gameInit() {
    GAME.doInit();
}
