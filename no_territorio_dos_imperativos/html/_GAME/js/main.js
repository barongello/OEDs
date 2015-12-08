/* ##### JavaScript Principal ##### */

var GAME = {
    initialized: false,
    question: -1,
    interactable: false,
    score: {
        right: 0,
        wrong: 0
    },
    questions: {
        0: {
            info: '<font size="+1"><b>Anúncio de campanha publicitária</b></font><br /><br /><br /><b>Finalidade do gênero:</b> tem a intenção de conscientizar as pessoas sobre novas condutas e valores.<br /><b>Interlocutor:</b> proprietários de veículos.<br /><b>Onde circula:</b> revistas, jornais impressos.<br /><b>Linguagem:</b> concisa, persuasiva e informativa.',
            question: 'A cor verde predomina nessa publicidade. Considerando o tema do texto, qual a intenção do autor ao usar o verde como pano de fundo?',
            image: '_GAME/img/0_picture0.jpg',
            source: 'Fonte: Detran. Governo do Estado de Sergipe.',
            answers: {
                0: {
                    text: 'Comunicar que está aberto o período de licenciamento.',
                    correct: false
                },
                1: {
                    text: 'Mostrar a importância do licenciamento para a preservação da natureza.',
                    correct: false
                },
                2: {
                    text: 'Reforçar a segurança no trânsito, já que o verde dos faróis ajuda a controlar o tráfego.',
                    correct: true
                },
                3: {
                    text: 'Enfatizar a importância de segurança no trânsito, pois o verde representa paz.',
                    correct: false
                }
            }
        },
        1: {
            info: '<font size="+1"><b>Anúncio de campanha publicitária</b></font><br /><br /><br /><b>Finalidade do gênero:</b> tem a intenção de conscientizar as pessoas sobre novas condutas e valores.<br /><b>Interlocutor:</b> proprietários de veículos.<br /><b>Onde circula:</b> revistas, jornais impressos.<br /><b>Linguagem:</b> concisa, persuasiva e informativa.',
            question: 'Qual a intenção do autor ao relacionar a segurança dos pedestres com a segurança do motorista?',
            image: '_GAME/img/0_picture0.jpg',
            source: 'Fonte: Detran. Governo do Estado de Sergipe.',
            answers: {
                0: {
                    text: 'Reforçar que, ao proteger o motorista, o licenciamento consequentemente oferece segurança ao pedestre.',
                    correct: true
                },
                1: {
                    text: 'Destacar a violência no trânsito.',
                    correct: false
                },
                2: {
                    text: 'Mostrar que há uma relação de cooperação entre motorista e pedestre.',
                    correct: false
                },
                3: {
                    text: 'Enfatizar que o motorista paga os impostos em dia.',
                    correct: false
                }
            }
        },
        2: {
            info: '<font size="+1"><b>Anúncio de campanha publicitária</b></font><br /><br /><br /><b>Finalidade do gênero:</b> tem a intenção de conscientizar as pessoas sobre novas condutas e valores.<br /><b>Interlocutor:</b> proprietários de veículos.<br /><b>Onde circula:</b> revistas, jornais impressos.<br /><b>Linguagem:</b> concisa, persuasiva e informativa.',
            question: 'No texto, ilustrações como selo, automóveis e calendário:',
            image: '_GAME/img/0_picture0.jpg',
            source: 'Fonte: Detran. Governo do Estado de Sergipe.',
            answers: {
                0: {
                    text: 'fazem referência à mensagem do texto: pagar o licenciamento em dia.',
                    correct: true
                },
                1: {
                    text: 'mostram o respeito aos pedestres.',
                    correct: false
                },
                2: {
                    text: 'revelam que o motorista do carro precisa comprar um selo de segurança.',
                    correct: false
                },
                3: {
                    text: 'complementam a ideia do texto: o motorista deve conhecer as leis de trânsito.',
                    correct: false
                }
            }
        },
        3: {
            info: '<font size="+1"><b>Anúncio de campanha publicitária</b></font><br /><br /><br /><b>Finalidade do gênero:</b> tem a intenção de conscientizar as pessoas sobre novas condutas e valores.<br /><b>Interlocutor:</b> proprietários de veículos.<br /><b>Onde circula:</b> revistas, jornais impressos.<br /><b>Linguagem:</b> concisa, persuasiva e informativa.',
            question: 'Em "pague o seu licenciamento em dia e contribua para um trânsito cada vez melhor", os verbos "pague" e "contribua", no modo imperativo, exprimem:',
            image: '_GAME/img/0_picture0.jpg',
            source: 'Fonte: Detran. Governo do Estado de Sergipe.',
            answers: {
                0: {
                    text: 'ordem, obrigando os motoristas a pagar o licenciamento',
                    correct: false
                },
                1: {
                    text: 'pedido, solicitando que os motoristas façam doações ao Detran.',
                    correct: false
                },
                2: {
                    text: 'apelo, persuadindo os motoristas a pagar o licenciamento em dia.',
                    correct: true
                },
                3: {
                    text: 'certeza, ressaltando que o pagamento do licenciamento salva vidas.',
                    correct: false
                }
            }
        },
        4: {
            info: '<font size="+1"><b>Anúncio publicitário</b></font><br /><br /><br /><b>Finalidade do gênero:</b> tem como finalidade a divulgação de uma mensagem com objetivo comercial e institucional.<br /><b>Interlocutor:</b> empresas que atuam no mercado <i>on-line</i>.<br /><b>Onde circula:</b> revistas, jornais.<br /><b>Linguagem:</b> informativa e persuasiva.',
            question: 'A cor azul desse anúncio transmite:',
            image: '_GAME/img/0_picture1.jpg',
            source: 'Fonte: Correios. Governo Federal.',
            answers: {
                0: {
                    text: 'sensação de tristeza.',
                    correct: false
                },
                1: {
                    text: 'sensação de serenidade.',
                    correct: true
                },
                2: {
                    text: 'sensação de esperança.',
                    correct: false
                },
                3: {
                    text: 'ideia de riqueza.',
                    correct: false
                }
            }
        },
        5: {
            info: '<font size="+1"><b>Anúncio publicitário</b></font><br /><br /><br /><b>Finalidade do gênero:</b> tem como finalidade a divulgação de uma mensagem com objetivo comercial e institucional.<br /><b>Interlocutor:</b> empresas que atuam no mercado <i>on-line</i>.<br /><b>Onde circula:</b> revistas, jornais.<br /><b>Linguagem:</b> informativa e persuasiva.',
            question: 'Qual o objetivo desse anúncio?',
            image: '_GAME/img/0_picture1.jpg',
            source: 'Fonte: Correios. Governo Federal.',
            answers: {
                0: {
                    text: 'Conscientizar a população para a importância de pesar os bebês.',
                    correct: false
                },
                1: {
                    text: 'Divulgar que os Correios apoiam o acompanhamento médico dos bebês.',
                    correct: false
                },
                2: {
                    text: 'Divulgar o e-SEDEX com o objetivo de apoiar uma empresa nacional.',
                    correct: false
                },
                3: {
                    text: 'Mostrar o e-SEDEX como um novo serviço de comércio eletrônico.',
                    correct: true
                }
            }
        },
        6: {
            info: '<font size="+1"><b>Anúncio publicitário</b></font><br /><br /><br /><b>Finalidade do gênero:</b> tem como finalidade a divulgação de uma mensagem com objetivo comercial e institucional.<br /><b>Interlocutor:</b> empresas que atuam no mercado <i>on-line</i>.<br /><b>Onde circula:</b> revistas, jornais.<br /><b>Linguagem:</b> informativa e persuasiva.',
            question: 'Que relação se pode fazer entre a balança, o bebê e o texto desse anúncio?',
            image: '_GAME/img/0_picture1.jpg',
            source: 'Fonte: Correios. Governo Federal.',
            answers: {
                0: {
                    text: 'A imagem indica que os Correios promovem um crescimento saudável.',
                    correct: false
                },
                1: {
                    text: 'No texto, os Correios destacam sua importância no crescimento das empresas',
                    correct: true
                },
                2: {
                    text: 'A imagem mostra que os Correios são eficientes no acompanhamento dos bebês.',
                    correct: false
                },
                3: {
                    text: 'A imagem destaca que as mães precisam acompanhar o crescimento das crianças.',
                    correct: false
                }
            }
        },
        7: {
            info: '<font size="+1"><b>Anúncio publicitário</b></font><br /><br /><br /><b>Finalidade do gênero:</b> tem como finalidade a divulgação de uma mensagem com objetivo comercial e institucional.<br /><b>Interlocutor:</b> empresas que atuam no mercado <i>on-line</i>.<br /><b>Onde circula:</b> revistas, jornais.<br /><b>Linguagem:</b> informativa e persuasiva.',
            question: 'A forma verbal "conte" em "Conte com o mais rápido, mais seguro e econômico serviço de entrega do comércio eletrônico, o e-SEDEX." indica:',
            image: '_GAME/img/0_picture1.jpg',
            source: 'Fonte: Correios. Governo Federal.',
            answers: {
                0: {
                    text: 'ordem, determinando que todos usem o e-SEDEX.',
                    correct: false
                },
                1: {
                    text: 'desejo, implorando que todos usem o e-SEDEX.',
                    correct: false
                },
                2: {
                    text: 'conselho, exprimindo o que o e-SEDEX pode fazer.',
                    correct: false
                },
                3: {
                    text: 'apelo, convocando todos a usarem o e-SEDEX.',
                    correct: true
                }
            }
        },
        8: {
            info: '<font size="+1"><b>Folheto</b></font><br /><br /><br /><b>Finalidade do gênero:</b> persuadir o leitor a adotar um comportamento.<br /><b>Interlocutor:</b> população em geral.<br /><b>Onde circula:</b> jornais impressos e revistas.<br /><b>Linguagem:</b> objetiva e breve com uso do imperativo e 2.<sup>a</sup> pessoa.',
            question: 'Qual a relação entre a cor vermelha, predominante no texto, e o tema a ser discutido?',
            image: '_GAME/img/0_picture2.jpg',
            source: 'Fonte: Ministério da Saúde. Governo Federal.',
            answers: {
                0: {
                    text: 'O vermelho é usado para alertar que a dengue é uma doença incurável.',
                    correct: false
                },
                1: {
                    text: 'A cor vermelha é usada para ressaltar o perigo da dengue.',
                    correct: true
                },
                2: {
                    text: 'O vermelho indica que o mosquito da dengue provoca derramamento de sangue.',
                    correct: false
                },
                3: {
                    text: 'O vermelho sinaliza que o mosquito da dengue é venenoso.',
                    correct: false
                }
            }
        },
        9: {
            info: '<font size="+1"><b>Folheto</b></font><br /><br /><br /><b>Finalidade do gênero:</b> persuadir o leitor a adotar um comportamento.<br /><b>Interlocutor:</b> população em geral.<br /><b>Onde circula:</b> jornais impressos e revistas.<br /><b>Linguagem:</b> objetiva e breve com uso do imperativo e 2.<sup>a</sup> pessoa.',
            question: 'Com base na mensagem do anúncio, por que o autor empregou os verbos "cuidar", "falar", "conversar" e "contar" no modo imperativo?',
            image: '_GAME/img/0_picture2.jpg',
            source: 'Fonte: Ministério da Saúde. Governo Federal.',
            answers: {
                0: {
                    text: 'Para convencer a população a agir contra a dengue.',
                    correct: true
                },
                1: {
                    text: 'Para sugerir o uso de medicamentos.',
                    correct: false
                },
                2: {
                    text: 'Para aconselhar sobre a importância de manter a cidade limpa.',
                    correct: false
                },
                3: {
                    text: 'Para ordenar que se elimine o mosquito da dengue.',
                    correct: false
                }
            }
        },
        10: {
            info: '<font size="+1"><b>Folheto</b></font><br /><br /><br /><b>Finalidade do gênero:</b> persuadir o leitor a adotar um comportamento.<br /><b>Interlocutor:</b> população em geral.<br /><b>Onde circula:</b> jornais impressos e revistas.<br /><b>Linguagem:</b> objetiva e breve com uso do imperativo e 2.<sup>a</sup> pessoa.',
            question: '<font size="+2"><b>Analise este texto:</b></font><br /><br />"Se você tiver febre alta com dor de cabeça, dor atrás dos olhos, no corpo e nas juntas, vá imediatamente a uma unidade de saúde".<br /><br />Qual a função do pronome de tratamento "você" no anúncio?',
            image: '_GAME/img/0_picture2.jpg',
            source: 'Fonte: Ministério da Saúde. Governo Federal.',
            answers: {
                0: {
                    text: 'Tornar o texto mais formal.',
                    correct: false
                },
                1: {
                    text: 'Serve para determinar o interlocutor do texto.',
                    correct: false
                },
                2: {
                    text: 'Estabelecer um diálogo mais próximo com a população.',
                    correct: true
                },
                3: {
                    text: 'Provocar um distanciamento entre o locutor e o interlocutor.',
                    correct: false
                }
            }
        },
        11: {
            info: '<font size="+1"><b>Folheto</b></font><br /><br /><br /><b>Finalidade do gênero:</b> persuadir o leitor a adotar um comportamento.<br /><b>Interlocutor:</b> população em geral.<br /><b>Onde circula:</b> jornais impressos e revistas.<br /><b>Linguagem:</b> objetiva e breve com uso do imperativo e 2.<sup>a</sup> pessoa.',
            question: 'A partir de sua compreensão do folheto, o que o "se" exprime em "Se você agir, podemos evitar."?',
            image: '_GAME/img/0_picture2.jpg',
            source: 'Fonte: Ministério da Saúde. Governo Federal.',
            answers: {
                0: {
                    text: 'Indica uma condição para que o mosquito transmita a dengue.',
                    correct: false
                },
                1: {
                    text: 'Enfatiza uma condição irreal.',
                    correct: false
                },
                2: {
                    text: 'Ressalta que a população só agirá se a dengue for combatida.',
                    correct: false
                },
                3: {
                    text: 'Destaca que a dengue só será evitada mediante a ação da população.',
                    correct: true
                }
            }
        },
        12: {
            info: '<font size="+1"><b>Receita culinária</b></font><br /><br /><br /><b>Finalidade do gênero:</b> instruir/orientar na preparação de doces, salgados, pratos diversos.<br /><b>Interlocutor:</b> chefes de cozinha, pessoas que gostam de cozinhar ou que querem aprender.<br /><b>Onde circula:</b> televisão, revista, rádio, <i>sites</i>, <i>blogs</i>, livros de culinária etc.<br /><b>Linguagem:</b> instrucional com uso do verbo no imperativo e no infinitivo.',
            question: 'A receita está dividida em "ingredientes" e "Modo de preparo". Os verbos aparecem apenas na segunda parte. Por quê?',
            image: '_GAME/img/0_picture3.jpg',
            source: 'Fonte: Alberto Jaen Jimenez. Circulação restrita.',
            answers: {
                0: {
                    text: 'Porque os componentes são indicados apenas com grandezas matemáticas.',
                    correct: false
                },
                1: {
                    text: 'Pois os componentes são mais importantes que os procedimentos para o bolo ficar pronto.',
                    correct: false
                },
                2: {
                    text: 'Porque os verbos podem tirar o foco de quem separa os ingredientes do bolo.',
                    correct: false
                },
                3: {
                    text: 'Apenas na parte final é requisitada uma sequência de ações de quem prepara o bolo.',
                    correct: true
                }
            }
        },
        13: {
            info: '<font size="+1"><b>Receita culinária</b></font><br /><br /><br /><b>Finalidade do gênero:</b> instruir/orientar na preparação de doces, salgados, pratos diversos.<br /><b>Interlocutor:</b> chefes de cozinha, pessoas que gostam de cozinhar ou que querem aprender.<br /><b>Onde circula:</b> televisão, revista, rádio, <i>sites</i>, <i>blogs</i>, livros de culinária etc.<br /><b>Linguagem:</b> instrucional com uso do verbo no imperativo e no infinitivo.',
            question: 'Identifique a ordem dos verbos que indicam as etapas do processo temporal (primeiro passo, segundo passo etc.).',
            image: '_GAME/img/0_picture3.jpg',
            source: 'Fonte: Alberto Jaen Jimenez. Circulação restrita.',
            answers: {
                0: {
                    text: 'Bater o milho, reservar a mistura, acrescentar açúcar e bater os ovos.',
                    correct: false
                },
                1: {
                    text: 'Bater o milho, bater os ovos, acrescentar açúcar e adicionar fubá.',
                    correct: true
                },
                2: {
                    text: 'Bater os ovos, bater o milho, acrescentar açúcar e reservar mistura.',
                    correct: false
                },
                3: {
                    text: 'Bater o milho, bater os ovos, acrescentar açúcar e reservar a mistura.',
                    correct: false
                }
            }
        },
        14: {
            info: '<font size="+1"><b>Receita culinária</b></font><br /><br /><br /><b>Finalidade do gênero:</b> instruir/orientar na preparação de doces, salgados, pratos diversos.<br /><b>Interlocutor:</b> chefes de cozinha, pessoas que gostam de cozinhar ou que querem aprender.<br /><b>Onde circula:</b> televisão, revista, rádio, <i>sites</i>, <i>blogs</i>, livros de culinária etc.<br /><b>Linguagem:</b> instrucional com uso do verbo no imperativo e no infinitivo.',
            question: 'Nas receitas culinárias, por que é necessário utilizar a quantidade e seguir o passo a passo sugeridos?',
            image: '_GAME/img/0_picture3.jpg',
            source: 'Fonte: Alberto Jaen Jimenez. Circulação restrita.',
            answers: {
                0: {
                    text: 'Para cozinhar com orientação.',
                    correct: false
                },
                1: {
                    text: 'Para agradar o criador da receita.',
                    correct: false
                },
                2: {
                    text: 'Para fazer uma receita criativa.',
                    correct: false
                },
                3: {
                    text: 'Para assegurar que a receita dê certo.',
                    correct: true
                }
            }
        },
        15: {
            info: '<font size="+1"><b>Receita culinária</b></font><br /><br /><br /><b>Finalidade do gênero:</b> instruir/orientar na preparação de doces, salgados, pratos diversos.<br /><b>Interlocutor:</b> chefes de cozinha, pessoas que gostam de cozinhar ou que querem aprender.<br /><b>Onde circula:</b> televisão, revista, rádio, <i>sites</i>, <i>blogs</i>, livros de culinária etc.<br /><b>Linguagem:</b> instrucional com uso do verbo no imperativo e no infinitivo.',
            question: 'Considerando que as receitas culinárias orientam as pessoas a cozinharem, por que predomina nesse tipo de texto o modo imperativo?',
            image: '_GAME/img/0_picture3.jpg',
            source: 'Fonte: Alberto Jaen Jimenez. Circulação restrita.',
            answers: {
                0: {
                    text: 'Para sugerir os passos que as pessoas devem seguir ao preparar o bolo.',
                    correct: false
                },
                1: {
                    text: 'Para pedir às pessoas que aprendam a cozinhar o bolo de milho.',
                    correct: false
                },
                2: {
                    text: 'Para determinar o que e em que ordem deverá ser preparada a receita.',
                    correct: true
                },
                3: {
                    text: 'Para ordenar que as pessoas preparem o bolo de milho.',
                    correct: false
                }
            }
        },
        16: {
            info: '<font size="+1"><b>Manual de instrução</b></font><br /><br /><br /><b>Finalidade do gênero:</b> orientar o usuário acerca do uso, do funcionamento, da instalação do aparelho etc.<br /><b>Interlocutor:</b> a pessoa que comprou o produto.<br /><b>Onde circula:</b> residências em geral.<br /><b>Linguagem:</b> objetiva, instrucional e informativa.',
            question: 'No trecho "Ao fazer isso, você poderá danificar o telefone", o que exprime a forma verbal "poderá"?',
            image: '_GAME/img/0_picture4.jpg',
            source: 'Fonte: Manual do usuário da Samsung, p. 12.',
            answers: {
                0: {
                    text: 'Indica certeza sobre algo.',
                    correct: false
                },
                1: {
                    text: 'Expressa uma ordem.',
                    correct: false
                },
                2: {
                    text: 'Transmite a ideia de dúvida sobre um fato.',
                    correct: false
                },
                3: {
                    text: 'Expressa uma possibilidade de algo acontecer.',
                    correct: true
                }
            }
        },
        17: {
            info: '<font size="+1"><b>Manual de instrução</b></font><br /><br /><br /><b>Finalidade do gênero:</b> orientar o usuário acerca do uso, do funcionamento, da instalação do aparelho etc.<br /><b>Interlocutor:</b> a pessoa que comprou o produto.<br /><b>Onde circula:</b> residências em geral.<br /><b>Linguagem:</b> objetiva, instrucional e informativa.',
            question: 'No texto, qual a série de formas verbais indica advertência?',
            image: '_GAME/img/0_picture4.jpg',
            source: 'Fonte: Manual do usuário da Samsung, p. 12.',
            answers: {
                0: {
                    text: 'Estiver, ligue, fazer, utilizando.',
                    correct: false
                },
                1: {
                    text: 'Insira, remova, deve, poderá.',
                    correct: false
                },
                2: {
                    text: 'Ligue, retire, desconecte, deve.',
                    correct: true
                },
                3: {
                    text: 'Poderá, estiver, possui, fazer.',
                    correct: false
                }
            }
        },
        18: {
            info: '<font size="+1"><b>Manual de instrução</b></font><br /><br /><br /><b>Finalidade do gênero:</b> orientar o usuário acerca do uso, do funcionamento, da instalação do aparelho etc.<br /><b>Interlocutor:</b> a pessoa que comprou o produto.<br /><b>Onde circula:</b> residências em geral.<br /><b>Linguagem:</b> objetiva, instrucional e informativa.',
            question: 'O manual de instrução apresenta uma série de procedimentos. Se o texto fosse escrito com verbos no modo subjuntivo, seria interpretado da mesma forma pelo usuário?',
            image: '_GAME/img/0_picture4.jpg',
            source: 'Fonte: Manual do usuário da Samsung, p. 12.',
            answers: {
                0: {
                    text: 'Sim, nesse contexto o subjuntivo tem o mesmo efeito, mas com expressividade atenuada e estilo mais polido.',
                    correct: false
                },
                1: {
                    text: 'Não, pois o modo subjuntivo expressa hipótese, dúvida, possibilidade.',
                    correct: true
                },
                2: {
                    text: 'Sim, sendo que o subjuntivo pode inclusive acentuar a expressão da vontade do fabricante.',
                    correct: false
                },
                3: {
                    text: 'Não, o modo subjuntivo nunca pode substituir o modo imperativo.',
                    correct: false
                }
            }
        },
        19: {
            info: '<font size="+1"><b>Manual de instrução</b></font><br /><br /><br /><b>Finalidade do gênero:</b> orientar o usuário acerca do uso, do funcionamento, da instalação do aparelho etc.<br /><b>Interlocutor:</b> a pessoa que comprou o produto.<br /><b>Onde circula:</b> residências em geral.<br /><b>Linguagem:</b> objetiva, instrucional e informativa.',
            question: 'Sabendo que o manual de instrução apresenta um conjunto de orientações, por que o modo verbal predominante é imperativo?',
            image: '_GAME/img/0_picture4.jpg',
            source: 'Fonte: Manual do usuário da Samsung, p. 12.',
            answers: {
                0: {
                    text: 'Para assegurar que o usuário siga corretamente as instruções de uso.',
                    correct: true
                },
                1: {
                    text: 'Para convencer o usuário a comprar um aparelho celular.',
                    correct: false
                },
                2: {
                    text: 'Para estabelecer um diálogo mais próximo com os jovens.',
                    correct: false
                },
                3: {
                    text: 'Para ordenar que o usuário use o aparelho da marca adquirida.',
                    correct: false
                }
            }
        },
        20: {
            info: '<font size="+1"><b>Guia de combate a incêndio</b></font><br /><br /><br /><b>Finalidade do gênero:</b> apresentar instruções úteis sobre como proceder em caso de incêndio.<br /><b>Interlocutor:</b> funcionários de empresas.<br /><b>Onde circula:</b> empresas em geral.<br /><b>Linguagem: objetiva, direta, instrucional e informativa.</b>',
            question: 'Lendo o título "Recomendações úteis", pode-se afirmar que o objetivo do texto é:',
            image: '_GAME/img/0_picture5.jpg',
            source: 'Fonte: Rochácara Ecofire. Manual de combate a incêndio e primeiros socorros. p. 11.',
            answers: {
                0: {
                    text: 'apresentar cumprimentos;',
                    correct: false
                },
                1: {
                    text: 'solicitar favor;',
                    correct: false
                },
                2: {
                    text: 'indicar ações que são tidas como boas;',
                    correct: true
                },
                3: {
                    text: 'ressaltar desejo.',
                    correct: false
                }
            }
        },
        21: {
            info: '<font size="+1"><b>Guia de combate a incêndio</b></font><br /><br /><br /><b>Finalidade do gênero:</b> apresentar instruções úteis sobre como proceder em caso de incêndio.<br /><b>Interlocutor:</b> funcionários de empresas.<br /><b>Onde circula:</b> empresas em geral.<br /><b>Linguagem: objetiva, direta, instrucional e informativa.</b>',
            question: 'No texto "Recomendações úteis", as instruções foram apresentadas em tópicos. Por quê?',
            image: '_GAME/img/0_picture5.jpg',
            source: 'Fonte: Rochácara Ecofire. Manual de combate a incêndio e primeiros socorros. p. 11.',
            answers: {
                0: {
                    text: 'Com a intenção de se aproximar do público alvo.',
                    correct: false
                },
                1: {
                    text: 'Para dificultar a leitura.',
                    correct: false
                },
                2: {
                    text: 'Dar um caráter mais subjetivo ao texto.',
                    correct: false
                },
                3: {
                    text: 'Para facilitar a localização das informações.',
                    correct: true
                }
            }
        },
        22: {
            info: '<font size="+1"><b>Guia de combate a incêndio</b></font><br /><br /><br /><b>Finalidade do gênero:</b> apresentar instruções úteis sobre como proceder em caso de incêndio.<br /><b>Interlocutor:</b> funcionários de empresas.<br /><b>Onde circula:</b> empresas em geral.<br /><b>Linguagem: objetiva, direta, instrucional e informativa.</b>',
            question: 'Em quais situações esses guias de instrução são utilizados?',
            image: '_GAME/img/0_picture5.jpg',
            source: 'Fonte: Rochácara Ecofire. Manual de combate a incêndio e primeiros socorros. p. 11.',
            answers: {
                0: {
                    text: 'Quando acontecem acidentes no ambiente de trabalho.',
                    correct: false
                },
                1: {
                    text: 'No momento da entrevista de trabalho.',
                    correct: false
                },
                2: {
                    text: 'Em cursos de formação que tratem de acidentes de trabalho.',
                    correct: true
                },
                3: {
                    text: 'Em treinamentos sobre como sobreviver no ambiente de trabalho.',
                    correct: false
                }
            }
        },
        23: {
            info: '<font size="+1"><b>Guia de combate a incêndio</b></font><br /><br /><br /><b>Finalidade do gênero:</b> apresentar instruções úteis sobre como proceder em caso de incêndio.<br /><b>Interlocutor:</b> funcionários de empresas.<br /><b>Onde circula:</b> empresas em geral.<br /><b>Linguagem: objetiva, direta, instrucional e informativa.</b>',
            question: 'No guia de instrução, por que predomina a forma verbal do imperativo?',
            image: '_GAME/img/0_picture5.jpg',
            source: 'Fonte: Rochácara Ecofire. Manual de combate a incêndio e primeiros socorros. p. 11.',
            answers: {
                0: {
                    text: 'Usa-se o imperativo para indicar que as instruções podem ser feitas.',
                    correct: false
                },
                1: {
                    text: 'Usa-se o imperativo para induzir o leitor a seguir as instruções.',
                    correct: true
                },
                2: {
                    text: 'Usa-se o imperativo para indicar que as instruções são verdadeiras.',
                    correct: false
                },
                3: {
                    text: 'Usa-se o imperativo para expressar que as orientações são fictícias.',
                    correct: false
                }
            }
        }
    },

    doReset: function () {
        $('#gameStage > #gameScene0 > .number > .text').text('Questão 0');

        $('#gameStage > #gameScene0 > .bullets > .bullet')
            .removeClass('incorrect')
            .removeClass('correct')
            .removeClass('active')
            .removeClass('normal')
            .addClass('normal');

        $('#gameStage > #gameScene0 > .next').hide();

        $('#gameStage > #gameScene0 > .info').text('Sem informações adicionais.');

        $('#gameStage > #gameScene0 > .question').text('Texto da questão.');

        $('.zoomContainer').remove();

        $('#gameStage > #gameScene0 > .image')
            .css('background-image', '')
            .attr('data-zoom-image', '');

        $('#gameStage > #gameScene0 > .source > .text').text('Fonte: Desconhecida.');

        $('#gameStage > #gameScene0 > .answer').css('background-color', 'transparent');

        $('#gameStage > #gameScene0 > .answer0 > .text').text('Resposta 1');
        $('#gameStage > #gameScene0 > .answer1 > .text').text('Resposta 2');
        $('#gameStage > #gameScene0 > .answer2 > .text').text('Resposta 3');
        $('#gameStage > #gameScene0 > .answer3 > .text').text('Resposta 4');
    },

    loadActualQuestion: function () {
        var qn = GAME.question;
        var q = GAME.questions[qn];

        $('#gameStage > #gameScene0')
            .removeClass('noAnswer')
            .removeClass('correctAnswer')
            .removeClass('incorrectAnswer')
            .addClass('noAnswer');

        $('#gameStage > #gameScene0 > .number > .text').text('Questão ' + (qn + 1));

        $('#gameStage > #gameScene0 > .bullets > .bullet' + qn)
            .removeClass('incorrect')
            .removeClass('correct')
            .removeClass('active')
            .removeClass('normal')
            .addClass('active');

        $('#gameStage > #gameScene0 > .next').hide();

        $('#gameStage > #gameScene0 > .info').html(q.info);

        $('#gameStage > #gameScene0 > .question').html(q.question);

        $('.zoomContainer').remove();
        $('#gameStage > #gameScene0 > .image').remove();

        $('<img class="image">')
            .css('background-image', 'url(' + q.image + ')')
            .attr('data-zoom-image', q.image)
            .appendTo('#gameStage > #gameScene0')        
            .elevateZoom({
                zoomType: 'inner',
                cursor: 'crosshair',
                responsive: true
            });

        $('#gameStage > #gameScene0 > .source > .text').text(q.source);

        $('#gameStage > #gameScene0 > .answer').css('background-color', 'transparent');

        $('#gameStage > #gameScene0 > .answer0 > .text').text(q.answers[0].text);
        $('#gameStage > #gameScene0 > .answer1 > .text').text(q.answers[1].text);
        $('#gameStage > #gameScene0 > .answer2 > .text').text(q.answers[2].text);
        $('#gameStage > #gameScene0 > .answer3 > .text').text(q.answers[3].text);

        GAME.interactable = true;
    },

    doBind: function () {
        $('#gameStage > #gameScene0 > .answer').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var a = $(this).attr('answer');
            var qn = GAME.question;
            var q = GAME.questions[qn];
            var ac = 'transparent';
            var bc = 'active';

            if (q.answers[a].correct) {
                GAME.score.right += 1;
                ac = '#00ff00';
                bc = 'correct';
            }
            else {
                GAME.score.wrong += 1;
                ac = '#ff0000';
                bc = 'incorrect';
            }

            $('#gameStage > #gameScene0 > .bullets > .bullet' + qn)
                .removeClass('incorrect')
                .removeClass('correct')
                .removeClass('active')
                .removeClass('normal')
                .addClass(bc);

            $(this).animate({ backgroundColor: ac }, 500, function () {
                $('#gameStage > #gameScene0 > .next').show();
            });
        });

        $('#gameStage > #gameScene0 > .next').click(function () {
            if (GAME.interactable)
                return;

            GAME.question += 1;

            if (GAME.question in GAME.questions)
                GAME.loadActualQuestion();
            else {
                var qr = GAME.score.right;
                var qq = GAME.question;
                var r = qr / qq;
                var rm = 'bad';

                if (r >= 0.75)
                    rm = 'good';
                else if (r >= 0.5)
                    rm = 'medium';

                $('#gameStage > #gameScene0 > .result')
                    .removeClass('bad')
                    .removeClass('medium')
                    .removeClass('good')
                    .addClass(rm)
                    .show();
            }
        });

        $('#gameStage > #gameScene0 > .start > .button').click(function () {
            $('#gameScene0 > .start').hide();
        });

        $('#gameStage > #gameScene0 > .result > .button').click(function () {
            GAME.doInit();
        });
    },

    doInit: function () {
        GAME.question = 0;
        GAME.score.right = 0;
        GAME.score.wrong = 0;
        GAME.interactable = false;
        if (!GAME.initialized) {
            GAME.doBind();
            GAME.initialized = true;
        }
        GAME.doReset();
        GAME.loadActualQuestion();
        $('#gameStage > #gameScene0 > .result').hide();
        $('#gameStage > #gameScene0 > .start').show();
    }
};

$(document).ready(function () {
    GAME.doInit();
});

// TODO O zoom não funciona muito bem com o scale do Chrome
