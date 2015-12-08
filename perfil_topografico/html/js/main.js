/* ##### JavaScript Principal ##### */

var GAME = {
    initialized: false,
    interactable: false,
    
    questions: {
        0: {
            images: 2,
            text: 'Na imagem ao lado, o Pão de Açúcar, localizado no Rio de Janeiro, pode ser representado em um gráfico, de modo a traçar um perfil de suas diferentes altitudes. Para representar essa forma do relevo em um mapa topográfico, onde utilizamos a visão vertical, transformamos as altitudes em curvas de nível. A interpretação correta das curvas de nível pode nos dar uma noção tridimensional do terreno. Quando mais juntas estiverem as linhas, mais acentuados são os declives. Já se elas estiverem mais distantes, significa que os declives são mais suaves. Analise as duas cartas topográficas abaixo e escolha a que representa corretamente o Pão de Açúcar.',
            answer: 1,
            feedbacks: {
                correct: 'Parabéns, você acertou. Repare na imagem ao lado que o Pão de Açúcar tem cotas altimétricas que variam de 0 a 350 metros. A inclinação mais acentuada do relevo está representada pelas linhas mais próximas umas das outras, o que ocorre já perto do ponto A do gráfico do perfil topográfico.',
                wrong: 'Resposta errada. Repare na imagem ao lado que o Pão de Açúcar tem cotas altimétricas que variam de 0 a 350 metros. A inclinação mais acentuada do relevo está representada pelas linhas mais próximas umas das outras, o que ocorre já perto do ponto A do gráfico do perfil topográfico.'
            }
        }
    },
    question: null,
    
    loadActualQuestion: function () {
        if (!(this.question in this.questions)) {
            OUP.finalizar.abrir('');
            return;
        }
        
        $('#qimage')
            .css({ 'background-image': 'url(img/question_' + this.question + '_0.png)' })
            .attr('imgid', '0');
        
        $('#qtext').html(this.questions[this.question].text);
        
        $('#answer0 > .ianswer').css({ 'background-image': 'url(img/answer_' + this.question + '_0.png)' });
        $('#answer1 > .ianswer').css({ 'background-image': 'url(img/answer_' + this.question + '_1.png)' });
        
        $('#feedbackStage').hide();
        
        $('#questionStage').show();
        
        this.interactable = true;
    },
    
    doBind: function () {
        $('#qlarrow, #qrarrow').click(function () {
            if (!GAME.interactable)
                return;
            
            GAME.interactable = false;
            
            var v = parseInt($(this).attr('avalue'));
            var a = parseInt($('#qimage').attr('imgid'));
            
            a += v;
            
            if (a < 0)
                a += GAME.questions[GAME.question].images;
            else if (a >= GAME.questions[GAME.question].images)
                a -= GAME.questions[GAME.question].images;
            
            $('#qimage')
                .css({ 'background-image': 'url(img/question_' + GAME.question + '_' + a + '.png)' })
                .attr('imgid', a);
            
            GAME.interactable = true;
        });
        
        $('.ianswer').click(function () {
            if (!GAME.interactable)
                return;
            
            GAME.interactable = false;
    
            $('#ifeedback1').css({ 'background-image': 'url(img/feedback_' + GAME.question + '_0.png)' });
            
            $('#ifeedback2').css({ 'background-image': 'url(img/feedback_' + GAME.question + '_1.png)' });
            
            var a = parseInt($(this).attr('aid'));
            
            if (a == GAME.questions[GAME.question].answer) {
                $('#mfeedback').css({ 'background-color': '#3c9658' });
                $('#tfeedback').html(GAME.questions[GAME.question].feedbacks.correct);
            }
            else {
                $('#mfeedback').css({ 'background-color': '#a64240' });
                $('#tfeedback').html(GAME.questions[GAME.question].feedbacks.wrong);
            }
            
            $('#feedbackStage').show();
            
            $('#questionStage').hide();
            
            GAME.interactable = true;
        });
        
        $('.magnifier').click(function () {
            if (!GAME.interactable)
                return;
            
            GAME.interactable = false;
            
            $('#izoom').css({ 'background-image': $(this).parent().find('.mimage').css('background-image') });
            
            $('#zoom').show();
            
            GAME.interactable = true;
        });        
        
        $('#nfeedback').click(function () {
            if (!GAME.interactable)
                return;
            
            GAME.question += 1;
            
            GAME.loadActualQuestion();
        });
        
        $('#bzoom').click(function () {
            if (!GAME.interactable)
                return;
            
            GAME.interactable = false;
            
            $('#zoom').hide();
            
            GAME.interactable = true;
        });
    },
    
    doInit: function () {
        this.interactable = false;
        
        if (!this.initialized) {
            this.doBind();
            
            this.initialized = true;
        }
        
        $('body').css({'background-color': '#d7d2bc' });

        this.question = 0;
        this.loadActualQuestion();
    }
};

function init() {
    GAME.doInit();
}
