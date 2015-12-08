var GAME = GAME || {
    QUESTIONS: {
        FEEDBACKS: {
            positive: 'MUITO BEM! A LEGENDA<br />CORRESPONDE EXATAMENTE<br />À CENA DA FOTO.',
            negative: 'SERÁ QUE É ISSO MESMO QUE A<br />FOTO ESTÁ RETRATANDO?<br />OBSERVEM NOVAMENTE.'
        },

        DATA: [
            {
                picture: 'img/img_question_0.png',
                thumb: 'img/img_question_0_thumb.png',
                zoom: 'img/img_question_0_zoom.png',
                answers: [
                    {
                        html: 'ANOITECE NA REGIÃO CENTRAL DA CIDADE DE SÃO PAULO.',
                        audio: 'mp3/question_0_answer_0.mp3'
                    },
                    {
                        html: 'CHOVE NA REGIÃO CENTRAL DA CIDADE DE SÃO PAULO.',
                        audio: 'mp3/question_0_answer_1.mp3'
                    },
                    {
                        html: 'VISTA DA REGIÃO CENTRAL DA CIDADE DE SÃO PAULO.',
                        audio: 'mp3/question_0_answer_2.mp3'
                    }
                ],
                correctAnswer: 2,
                answersOrders: [0, 1, 2],
                answersColorsOrders: [0, 1, 2],
                selectedAnswer: null
            },
            {
                picture: 'img/img_question_1.png',
                thumb: 'img/img_question_1_thumb.png',
                zoom: 'img/img_question_1_zoom.png',
                answers: [
                    {
                        html: 'MORADORES COMEMORAM O FIM DO ANO NA COMUNIDADE DA ROCINHA, NO RIO DE JANEIRO.',
                        audio: 'mp3/question_1_answer_0.mp3'
                    },
                    {
                        html: 'COMUNIDADE DA ROCINHA, NO RIO DE JANEIRO, VISTA DO ALTO.',
                        audio: 'mp3/question_1_answer_1.mp3'
                    },
                    {
                        html: 'DESLIZAMENTO DE TERRA NA COMUNIDADE DA ROCINHA, NO RIO DE JANEIRO.',
                        audio: 'mp3/question_1_answer_2.mp3'
                    }
                ],
                correctAnswer: 1,
                answersOrders: [0, 1, 2],
                answersColorsOrders: [0, 1, 2],
                selectedAnswer: null
            },
            {
                picture: 'img/img_question_2.png',
                thumb: 'img/img_question_2_thumb.png',
                zoom: 'img/img_question_2_zoom.png',
                answers: [
                    {
                        html: 'PAPANGUS DE BEZERROS SE DIVERTEM NA NOITE DE SÃO JOÃO EM OLINDA, PERNAMBUCO.',
                        audio: 'mp3/question_2_answer_0.mp3'
                    },
                    {
                        html: 'PAPANGUS DE BEZERROS SE DIVERTEM NO DIA DE NATAL EM OLINDA, PERNAMBUCO.',
                        audio: 'mp3/question_2_answer_1.mp3'
                    },
                    {
                        html: 'PAPANGUS DE BEZERROS SE DIVERTEM NO CARNAVAL EM OLINDA, PERNAMBUCO.',
                        audio: 'mp3/question_2_answer_2.mp3'
                    }
                ],
                correctAnswer: 2,
                answersOrders: [0, 1, 2],
                answersColorsOrders: [0, 1, 2],
                selectedAnswer: null
            },
            {
                picture: 'img/img_question_3.png',
                thumb: 'img/img_question_3_thumb.png',
                zoom: 'img/img_question_3_zoom.png',
                answers: [
                    {
                        html: 'EM BELÉM, PARÁ, VISTA DO MERCADO VER-O-PESO.',
                        audio: 'mp3/question_3_answer_0.mp3'
                    },
                    {
                        html: 'EM BELÉM, PARÁ, REVOADA DE PÁSSAROS EM TORNO DO MERCADO VER-O-PESO.',
                        audio: 'mp3/question_3_answer_1.mp3'
                    },
                    {
                        html: 'EM BELÉM, PARÁ, NAUFRÁGIO DE EMBARCAÇÕES ÀS MARGENS DO MERCADO VER-O-PESO.',
                        audio: 'mp3/question_3_answer_2.mp3'
                    }
                ],
                correctAnswer: 0,
                answersOrders: [0, 1, 2],
                answersColorsOrders: [0, 1, 2],
                selectedAnswer: null
            },
            {
                picture: 'img/img_question_4.png',
                thumb: 'img/img_question_4_thumb.png',
                zoom: 'img/img_question_4_zoom.png',
                answers: [
                    {
                        html: 'VISTA DE UMA RUA DO BAIRRO PELOURINHO EM SALVADOR, BAHIA.',
                        audio: 'mp3/question_4_answer_0.mp3'
                    },
                    {
                        html: 'DESABAMENTO DE IGREJA NO PELOURINHO EM SALVADOR, BAHIA.',
                        audio: 'mp3/question_4_answer_1.mp3'
                    },
                    {
                        html: 'EXCURSÃO DE TURISTAS PASSEIA PELAS RUAS DO PELOURINHO EM SALVADOR, BAHIA.',
                        audio: 'mp3/question_4_answer_2.mp3'
                    }
                ],
                correctAnswer: 0,
                answersOrders: [0, 1, 2],
                answersColorsOrders: [0, 1, 2],
                selectedAnswer: null
            },
            {
                picture: 'img/img_question_5.png',
                thumb: 'img/img_question_5_thumb.png',
                zoom: 'img/img_question_5_zoom.png',
                answers: [
                    {
                        html: 'EM DESTAQUE, NO ALTO, O CASTELO DO CARMO EM OURO PRETO, MINAS GERAIS.',
                        audio: 'mp3/question_5_answer_0.mp3'
                    },
                    {
                        html: 'EM DESTAQUE, NA PARTE BAIXA, A IGREJA DO CARMO EM OURO PRETO, MINAS GERAIS.',
                        audio: 'mp3/question_5_answer_1.mp3'
                    },
                    {
                        html: 'EM DESTAQUE, NO ALTO, A IGREJA DO CARMO EM OURO PRETO, MINAS GERAIS.',
                        audio: 'mp3/question_5_answer_2.mp3'
                    }
                ],
                correctAnswer: 2,
                answersOrders: [0, 1, 2],
                answersColorsOrders: [0, 1, 2],
                selectedAnswer: null
            },
            {
                picture: 'img/img_question_6.png',
                thumb: 'img/img_question_6_thumb.png',
                zoom: 'img/img_question_6_zoom.png',
                answers: [
                    {
                        html: 'MANHÃ DO FESTIVAL FOLCLÓRICO DE PARINTINS, AMAZONAS.',
                        audio: 'mp3/question_6_answer_0.mp3'
                    },
                    {
                        html: 'NOITE DO FESTIVAL FOLCLÓRICO DE PARINTINS, AMAZONAS.',
                        audio: 'mp3/question_6_answer_1.mp3'
                    },
                    {
                        html: 'TARDE DO FESTIVAL FOLCLÓRICO DE PARINTINS, AMAZONAS.',
                        audio: 'mp3/question_6_answer_2.mp3'
                    }
                ],
                correctAnswer: 1,
                answersOrders: [0, 1, 2],
                answersColorsOrders: [0, 1, 2],
                selectedAnswer: null
            },
            {
                picture: 'img/img_question_7.png',
                thumb: 'img/img_question_7_thumb.png',
                zoom: 'img/img_question_7_zoom.png',
                answers: [
                    {
                        html: 'TEMPESTADE NO PANTANAL, MATO GROSSO.',
                        audio: 'mp3/question_7_answer_0.mp3'
                    },
                    {
                        html: 'NOITE NO PANTANAL, MATO GROSSO.',
                        audio: 'mp3/question_7_answer_1.mp3'
                    },
                    {
                        html: 'PÔR DO SOL NO PANTANAL, MATO GROSSO.',
                        audio: 'mp3/question_7_answer_2.mp3'
                    }
                ],
                correctAnswer: 2,
                answersOrders: [0, 1, 2],
                answersColorsOrders: [0, 1, 2],
                selectedAnswer: null
            },
            {
                picture: 'img/img_question_8.png',
                thumb: 'img/img_question_8_thumb.png',
                zoom: 'img/img_question_8_zoom.png',
                answers: [
                    {
                        html: 'EM FLORIANÓPOLIS, SANTA CATARINA, CARROS PASSAM PELA PONTE HERCÍLIO CRUZ.',
                        audio: 'mp3/question_8_answer_0.mp3'
                    },
                    {
                        html: 'EM FLORIANÓPOLIS, SANTA CATARINA, BARCOS NAVEGAM SOB A PONTE HERCÍLIO CRUZ.',
                        audio: 'mp3/question_8_answer_1.mp3'
                    },
                    {
                        html: 'EM FLORIANÓPOLIS, SANTA CATARINA, VISTA DA PONTE HERCÍLIO CRUZ.',
                        audio: 'mp3/question_8_answer_2.mp3'
                    }
                ],
                correctAnswer: 2,
                answersOrders: [0, 1, 2],
                answersColorsOrders: [0, 1, 2],
                selectedAnswer: null
            },
            {
                picture: 'img/img_question_9.png',
                thumb: 'img/img_question_9_thumb.png',
                zoom: 'img/img_question_9_zoom.png',
                answers: [
                    {
                        html: 'MANIFESTANTES PROTESTAM EM FRENTE AO CONGRESSO NACIONAL, EM BRASÍLIA.',
                        audio: 'mp3/question_9_answer_0.mp3'
                    },
                    {
                        html: 'VISTA DO CONGRESSO NACIONAL NUMA TARDE ENSOLARADA, EM BRASÍLIA.',
                        audio: 'mp3/question_9_answer_1.mp3'
                    },
                    {
                        html: 'ESTRAGOS CAUSADOS PELA CHUVA NO EDIFÍCIO DO CONGRESSO NACIONAL, EM BRASÍLIA.',
                        audio: 'mp3/question_9_answer_2.mp3'
                    }
                ],
                correctAnswer: 1,
                answersOrders: [0, 1, 2],
                answersColorsOrders: [0, 1, 2],
                selectedAnswer: null
            }
        ],

        questionsOrders: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        questionsPerGame: 5,
        actualQuestion: 0,

        randomizeQuestionsOrders: function () {
            for (var i = 0; i < GAME.QUESTIONS.questionsOrders.length - 1; i++) {
                var j = Math.floor((Math.random() * (GAME.QUESTIONS.questionsOrders.length - i)) + i);

                var tmpQuestionOrder = GAME.QUESTIONS.questionsOrders[i];
                GAME.QUESTIONS.questionsOrders[i] = GAME.QUESTIONS.questionsOrders[j];
                GAME.QUESTIONS.questionsOrders[j] = tmpQuestionOrder;
            }
        },

        randomizeQuestionsAnswersOrders: function () {
            GAME.QUESTIONS.DATA.forEach(function (question) {
                for (var i = 0; i < question.answersOrders.length - 1; i++) {
                    var j = Math.floor((Math.random() * (question.answersOrders.length - i)) + i);

                    var tmpAnswerOrder = question.answersOrders[i]
                    question.answersOrders[i] = question.answersOrders[j];
                    question.answersOrders[j] = tmpAnswerOrder;
                }
            });
        },

        randomizeQuestionsAnswersColorsOrders: function () {
            GAME.QUESTIONS.DATA.forEach(function (question) {
                for (var i = 0; i < question.answersColorsOrders.length - 1; i++) {
                    var j = Math.floor((Math.random() * (question.answersColorsOrders.length - i)) + i);

                    var tmpAnswerColorOrder = question.answersColorsOrders[i]
                    question.answersColorsOrders[i] = question.answersColorsOrders[j];
                    question.answersColorsOrders[j] = tmpAnswerColorOrder;
                }
            });
        },

        randomizeAll: function () {
            GAME.QUESTIONS.randomizeQuestionsOrders();
            GAME.QUESTIONS.randomizeQuestionsAnswersOrders();
            GAME.QUESTIONS.randomizeQuestionsAnswersColorsOrders();
        },

        loadActualQuestion: function () {
            var questionIndex = GAME.QUESTIONS.questionsOrders[GAME.QUESTIONS.actualQuestion];
            var questionData = GAME.QUESTIONS.DATA[questionIndex];

            var $alternativeBox = $('#gameScene3 > #questionContent > #alternativeBox');
            var $questionImage = $('#gameScene3 > #questionContent > #questionImage');

            var $previousButton = $('#gameScene3 > #previousButton');
            var $nextButton = $('#gameScene3 > #nextButton');

            $questionImage.css({ backgroundImage: 'url(' + questionData.picture + ')' });

            for (var i = 0; i < questionData.answers.length; i++) {
                $('#gameScene3 > #questionContent > #radioAnswer' + i)
                    .removeAttr('class')
                    .addClass('answer_color_' + questionData.answersColorsOrders[i])
                    .attr('answer', questionData.answersOrders[i])
                    .prop('checked', false);

                $('#gameScene3 > #questionContent > #radioAnswer' + i + ' + label > #answer' + i + 'Text')
                    .html(questionData.answers[questionData.answersOrders[i]].html);

                $('#gameScene3 > #questionContent > #audioButton' + i)
                    .attr('answer', questionData.answersOrders[i]);
            }

            if (questionData.selectedAnswer == null) {
                $alternativeBox.css({ left: '285px'}).hide();

                $questionImage.css({ left: '256px' });

                $nextButton.hide();
            }
            else {
                $alternativeBox.css({ left: '46px'}).show();
                $alternativeBox.find('#alternativeText')
                    .html(questionData.answers[questionData.selectedAnswer].html);

                $questionImage.css({ left: '436px' });

                $('input[type="radio"][answer="' + questionData.selectedAnswer + '"]')
                    .prop('checked', true);

                $nextButton.show();
            }

            if (GAME.QUESTIONS.actualQuestion == 0)
                $previousButton.hide();
            else
                $previousButton.show();
        },

        loadPreviousQuestion: function () {
            var previousQuestion = Math.max(GAME.QUESTIONS.actualQuestion - 1, 0);

            if (previousQuestion != GAME.QUESTIONS.actualQuestion) {
                GAME.QUESTIONS.actualQuestion = previousQuestion;

                GAME.QUESTIONS.loadActualQuestion();
            }
        },

        loadNextQuestion: function () {
            var nextQuestion = Math.min(GAME.QUESTIONS.questionsPerGame - 1, GAME.QUESTIONS.actualQuestion + 1);

            if (nextQuestion != GAME.QUESTIONS.actualQuestion) {
                GAME.QUESTIONS.actualQuestion = nextQuestion;

                GAME.QUESTIONS.loadActualQuestion();
            }
        },

        getQuestionStatus: function (questionNumber) {
            if (questionNumber < 0 || questionNumber > GAME.QUESTIONS.DATA.length - 1)
                return 0;

            var questionData = GAME.QUESTIONS.DATA[questionNumber];

            if (questionData.selectedAnswer == null)
                return null;

            return questionData.selectedAnswer == questionData.correctAnswer;
        },

        doInit: function () {
            GAME.QUESTIONS.actualQuestion = 0;
            GAME.QUESTIONS.questionsOrders = [];

            for (var i = 0; i < GAME.QUESTIONS.DATA.length; i++) {
                GAME.QUESTIONS.questionsOrders.push(i);

                GAME.QUESTIONS.DATA[i].answersOrders = [];
                GAME.QUESTIONS.DATA[i].answersColorsOrders = [];
                for (var j = 0; j < GAME.QUESTIONS.DATA[i].answers.length; j++) {
                    GAME.QUESTIONS.DATA[i].answersOrders.push(j);
                    GAME.QUESTIONS.DATA[i].answersColorsOrders.push(j);
                }
            }

            GAME.QUESTIONS.randomizeAll();
            GAME.QUESTIONS.loadActualQuestion();
        }
    },

    SUMMARY: {
        FEEDBACKS: {
            positive: 'VOCÊS ASSOCIARAM A LEGENDA CORRETA. PARABÉNS!',
            negative: 'OBSERVEM NOVAMENTE COM ATENÇÃO A IMAGEM, A LEGENDA CORRETA E A LEGENDA QUE VOCÊS ESCOLHERAM. O QUE SERÁ QUE ESTÁ ERRADO?'
        }
    },

    initialized: false,
    interactable: false,

    doBind: function () {
        $('#gameScene1 > #coverButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $gameScene1 = $('#gameScene1');
            var $gameScene2 = $('#gameScene2');

            $gameScene1.css({ opacity: 1 }).animate({ opacity: 0 }, 500, function () {
                $gameScene1.hide();
                $gameScene2.css({ opacity: 0 }).show().animate({ opacity: 1 }, 500, function () {
                    GAME.interactable = true;
                });
            });
        });

        $('#gameScene2 > #redRectangle > #startButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $gameScene2 = $('#gameScene2');
            var $gameScene3 = $('#gameScene3');

            $gameScene2.css({ opacity: 1 }).animate({ opacity: 0 }, 500, function () {
                $gameScene2.hide();
                $gameScene3.css({ opacity: 0 }).show().animate({ opacity: 1 }, 500, function () {
                    GAME.interactable = true;
                });
            });
        });

        $('#gameScene3 > #questionContent > #questionImage > #questionZoomIn').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $zoomOverlay = $('#gameScene3 > #zoomOverlay');
            var questionData = GAME.QUESTIONS.DATA[GAME.QUESTIONS.questionsOrders[GAME.QUESTIONS.actualQuestion]];

            $zoomOverlay
                .css({ backgroundImage: 'url(' + questionData.zoom + ')', opacity: 0 })
                .show()
                .animate({ opacity: 1 }, 250, function () {
                    GAME.interactable = true;
                });
        });

        $('#gameScene3 > #zoomOverlay > #questionZoomOut').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $zoomOverlay = $('#gameScene3 > #zoomOverlay');

            $zoomOverlay
                .css({ opacity: 1 })
                .animate({ opacity: 0 }, 250, function () {
                    $zoomOverlay.hide();

                    GAME.interactable = true;
                })
        });

        $('#gameScene3 > #questionContent > input[type="radio"]').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this);
            var selectedAnswer = parseInt($this.attr('answer'));

            GAME.QUESTIONS.DATA[GAME.QUESTIONS.questionsOrders[GAME.QUESTIONS.actualQuestion]].selectedAnswer = selectedAnswer;

            var $alternativeBox = $('#gameScene3 > #questionContent > #alternativeBox');
            var $questionImage = $('#gameScene3 > #questionContent > #questionImage');

            $alternativeBox.find('#alternativeText').html(GAME.QUESTIONS.DATA[GAME.QUESTIONS.questionsOrders[GAME.QUESTIONS.actualQuestion]].answers[selectedAnswer].html);

            if ($alternativeBox.is(':visible') == false) {
                $alternativeBox.show().animate({ left: '-=239px' }, 500);
                $questionImage.animate({ left: '+=180px' }, 500, function () {
                    $('#gameScene3 > #nextButton').show();

                    GAME.interactable = true;
                })
            }
            else
                GAME.interactable = true;
        });

        $('.audioButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this);
            var selectedAnswer = parseInt($this.attr('answer'));
            var answerMp3 = GAME.QUESTIONS.DATA[GAME.QUESTIONS.questionsOrders[GAME.QUESTIONS.actualQuestion]].answers[selectedAnswer].audio;

            _capa.audio({ id: 'answerAudio', mp3: answerMp3, autoplay: false });
            $('#answerAudio > audio')[0].play();

            GAME.interactable = true;
        });

        $('#gameScene3 > #previousButton').click(function () {
            if (!GAME.interactable)
                return;

            if (GAME.QUESTIONS.actualQuestion == 0)
                return;

            GAME.interactable = false;

            $('#gameScene3 > #questionContent').css({ opacity: 1 }).animate({ opacity: 0 }, 250, function () {
                GAME.QUESTIONS.loadPreviousQuestion();

                $('#gameScene3 > #questionContent').css({ opacity: 0 }).animate({ opacity: 1 }, 250, function () {
                    GAME.interactable = true;
                });
            });
        });

        $('#gameScene3 > #nextButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            if (GAME.QUESTIONS.actualQuestion == GAME.QUESTIONS.questionsPerGame - 1) {
                var $gameScene3 = $('#gameScene3');
                var $gameScene4 = $('#gameScene4')

                $gameScene3.css({ opacity: 1 }).animate({ opacity: 0 }, 500, function () {
                    $gameScene3.hide();

                    for (var i = 0; i < GAME.QUESTIONS.questionsPerGame; i++) {
                        var questionNumber = GAME.QUESTIONS.questionsOrders[i];
                        var imageUrl = GAME.QUESTIONS.DATA[questionNumber].thumb;
                        var questionStatus = GAME.QUESTIONS.getQuestionStatus(questionNumber);

                        $('#gameScene4 > #scene4Content > #thumb' + i)
                            .css({ backgroundImage: 'url(' + imageUrl + ')' })
                            .removeAttr('class')
                            .addClass((questionStatus === true ? 'status_right' : (questionStatus === false ? 'status_wrong' : '')))
                            .attr('question', questionNumber);
                    }

                    $gameScene4.css({ opacity: 0 }).show().animate({ opacity: 1 }, 500, function () {
                        GAME.interactable = true;
                    });
                });

                return;
            }

            $('#gameScene3 > #questionContent').css({ opacity: 1 }).animate({ opacity: 0 }, 250, function () {
                GAME.QUESTIONS.loadNextQuestion();

                $('#gameScene3 > #questionContent').css({ opacity: 0 }).animate({ opacity: 1 }, 250, function () {
                    GAME.interactable = true;
                });
            });
        });

        $('#gameScene3 > #questionContent > #alternativeBox > #confirmButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $feedbackOverlay = $('#gameScene3 > #feedbackOverlay');
            var questionData = GAME.QUESTIONS.DATA[GAME.QUESTIONS.questionsOrders[GAME.QUESTIONS.actualQuestion]];
            var correct = questionData.selectedAnswer == questionData.correctAnswer;

            $feedbackOverlay.find('#feedbackText').html((correct ? GAME.QUESTIONS.FEEDBACKS.positive : GAME.QUESTIONS.FEEDBACKS.negative));

            $feedbackOverlay
                .removeAttr('class')
                .addClass((correct ? 'positive' : 'negative'))
                .css({ opacity: 0 })
                .show()
                .animate({ opacity: 1 }, 250, function () {
                    GAME.interactable = true;
                });
        });

        $('#gameScene3 > #feedbackOverlay > #closeButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $feedbackOverlay = $('#gameScene3 > #feedbackOverlay');

            $feedbackOverlay
                .css({ opacity: 1 })
                .animate({ opacity: 0 }, 250, function () {
                    $feedbackOverlay.hide();

                    GAME.interactable = true;
                })
        });

        $('#gameScene4 > #scene4Content > #thumb0, ' +
          '#gameScene4 > #scene4Content > #thumb1, ' +
          '#gameScene4 > #scene4Content > #thumb2, ' +
          '#gameScene4 > #scene4Content > #thumb3, ' +
          '#gameScene4 > #scene4Content > #thumb4').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this);
            var questionNumber = parseInt($this.attr('question'));
            var questionData = GAME.QUESTIONS.DATA[questionNumber];

            var $scene4Content = $('#gameScene4 > #scene4Content');
            var $summaryFeedback = $('#gameScene4 > #summaryFeedback');

            $summaryFeedback.find('#summaryFeedbackHeader > #summaryFeedbackHeaderText')
                .html((GAME.QUESTIONS.getQuestionStatus(questionNumber) ? GAME.SUMMARY.FEEDBACKS.positive : GAME.SUMMARY.FEEDBACKS.negative));

            $summaryFeedback.find('#summaryFeedbackImage')
                .css({ backgroundImage: 'url(' + questionData.picture + ')' });

            $summaryFeedback.find('#summaryFeedbackCorrectAnswer > #correctAnswerText')
                .html(questionData.answers[questionData.correctAnswer].html);
            $summaryFeedback.find('#summaryFeedbackCorrectAnswer > #correctAnswerAudioButton')
                .attr('question', questionNumber)
                .attr('answer', questionData.correctAnswer);

            if (questionData.selectedAnswer != null) {
                $summaryFeedback.find('#summaryFeedbackSelectedAnswer')
                    .removeAttr('class')
                    .addClass((GAME.QUESTIONS.getQuestionStatus(questionNumber) ? 'status_right' : 'status_wrong'))
                    .show();

                $summaryFeedback.find('#summaryFeedbackSelectedAnswer > #selectedAnswerText')
                    .html(questionData.answers[questionData.selectedAnswer].html);

                $summaryFeedback.find('#summaryFeedbackSelectedAnswer > #selectedAnswerAudioButton')
                    .attr('question', questionNumber)
                    .attr('answer', questionData.selectedAnswer);
            }
            else
                $summaryFeedback.find('#summaryFeedbackSelectedAnswer').hide();

            $scene4Content.css({ opacity: 1 }).animate({ opacity: 0 }, 250, function () {
                $scene4Content.hide();

                $summaryFeedback.css({ opacity: 0 }).show().animate({ opacity: 1 }, 250, function () {
                    GAME.interactable = true;
                });
            });
        });

        $('#gameScene4 > #summaryFeedback > #summaryFeedbackCorrectAnswer > #correctAnswerAudioButton, ' +
          '#gameScene4 > #summaryFeedback > #summaryFeedbackSelectedAnswer > #selectedAnswerAudioButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this);
            var questionNumber = parseInt($this.attr('question'));
            var answerNumber = parseInt($this.attr('answer'));
            var answerMp3 = GAME.QUESTIONS.DATA[questionNumber].answers[answerNumber].audio;

            _capa.audio({ id: 'answerAudio', mp3: answerMp3, autoplay: false });
            $('#answerAudio > audio')[0].play();

            GAME.interactable = true;
        });

        $('#gameScene4 > #summaryFeedback > #backToSummaryButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $scene4Content = $('#gameScene4 > #scene4Content');
            var $summaryFeedback = $('#gameScene4 > #summaryFeedback');

            $summaryFeedback.css({ opacity: 1 }).animate({ opacity: 0 }, 250, function () {
                $summaryFeedback.hide();

                $scene4Content.css({ opacity: 0 }).show().animate({ opacity: 1 }, 250, function () {
                    GAME.interactable = true;
                });
            });
        });

        $('#gameScene4 > #scene4Content > #backToGameButton').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $gameScene3 = $('#gameScene3');
            var $gameScene4 = $('#gameScene4')

            $gameScene4.css({ opacity: 1 }).animate({ opacity: 0 }, 500, function () {
                $gameScene4.hide();
                $gameScene3.css({ opacity: 0 }).show().animate({ opacity: 1 }, 500, function () {
                    GAME.interactable = true;
                });
            });
        });
    },

    doInit: function () {
        GAME.interactable = false;

        if (!GAME.initialized) {
            GAME.doBind();
            GAME.QUESTIONS.doInit();

            GAME.initialized = true;
        }

        GAME.interactable = true;
    }
};

$(document).ready(function () {
    GAME.doInit();
});
