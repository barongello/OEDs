var GAME = {
    initialized: false,
    interactable: false,

    resetAllDetailScrolls: function () {
        $('.detail').each(function (index0, item0) {
            var $region = $(item0);

            $region.find('.page').each(function (index1, item1) {
                var $page = $(item1),
                    $textArea = $page.find('.detailTextArea'),
                    $textAreaPieces = $textArea.find('.detailTextAreaPiece'),
                    $textAreaMoveUp = $textArea.find('.detailTextAreaMoveUp'),
                    $textAreaMoveDown = $textArea.find('.detailTextAreaMoveDown');

                $textArea.attr('active', '0');
                $textAreaMoveUp.hide();
                if ($textAreaPieces.length > 1)
                    $textAreaMoveDown.show();
                else
                    $textAreaMoveDown.hide();
                $textAreaPieces.hide();
                $textAreaPieces.first().show();

                if ($page.hasClass('more')) {
                    $page.find('.detailMore4_2, .detailMoreTitle4_2, .detailMore6_2, .detailMoreTitle6_2, .detailMorePictureMoveUp').hide();
                    $page.find('.detailMore4_1, .detailMoreTitle4_1, .detailMore6_1, .detailMoreTitle6_1, .detailMorePictureMoveDown').show();
                }
            });
        });
    },

    videoEnded: function () {
        var $this = $(this);

        this.currentTime = 0;

        $this.parent().click();
    },

    doBind: function () {
        if (GAME.initialized)
            return;

        $('#btnCStart').click(function () {
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

        $('#btnIClose').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $intro = $('#intro');

            $intro.css({ opacity: 0 });

            setTimeout(function () {
                $intro.hide();

                GAME.interactable = true;
            }, 500);
        });

        $('#btnITutorial').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $intro = $('#intro'),
                $tutorial = $('#tutorial');

            $intro.css({ opacity: 0 });
            $tutorial.attr('caller', 'intro').show();

            setTimeout(function () {
                $intro.hide();
                $tutorial.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 500);
        });

        $('#btnTClose').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $tutorial = $('#tutorial'),
                $caller = $('#' + $tutorial.attr('caller')),
                callerLength = $caller.length;

            $tutorial.removeAttr('caller').css({ opacity: 0 });
            if (callerLength == 1)
                $caller.show();

            setTimeout(function () {
                $tutorial.hide();

                if (callerLength == 1) {
                    $caller.css({ opacity: 1 });

                    setTimeout(function () {
                        GAME.interactable = true;
                    }, 500);
                }
                else
                    GAME.interactable = true;
            }, 500);
        });

        $('#btnBHome').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            $('#bmap').css({ top: '0px' });
            $('#btnBMoveUp').addClass('disabled');
            $('#btnBMoveDown').removeClass('disabled');

            var $cover = $('#cover');

            $cover.show();

            setTimeout(function () {
                $cover.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 0);
        });

        $('.btn_ajuda').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $tutorial = $('#tutorial');

            $tutorial.show();

            setTimeout(function () {
                $tutorial.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 0);
        });

        $('#btnBMoveUp').click(function () {
            if (!GAME.interactable)
                return;

            var $this = $(this);

            if ($this.hasClass('disabled'))
                return;

            GAME.interactable = false;

            var $boardMap = $('#bmap'),
                mapTop = parseInt($boardMap.css('top')),
                newMapTop = Math.min(0, mapTop + 52);

            $boardMap.css({ top: newMapTop + 'px' });

            if (newMapTop > -260)
                $('#btnBMoveDown').removeClass('disabled');

            if (newMapTop == 0)
                $this.addClass('disabled');

            GAME.interactable = true;
        });

        $('#btnBMoveDown').click(function () {
            if (!GAME.interactable)
                return;

            var $this = $(this);

            if ($this.hasClass('disabled'))
                return;

            GAME.interactable = false;

            var $boardMap = $('#bmap'),
                mapTop = parseInt($boardMap.css('top')),
                newMapTop = Math.max(mapTop - 52, -260);

            $boardMap.css({ top: newMapTop + 'px' });

            if (newMapTop < 0)
                $('#btnBMoveUp').removeClass('disabled');

            if (newMapTop == -260)
                $this.addClass('disabled');

            GAME.interactable = true;
        });

        $('.btn_regioes').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                region = $this.attr('region'),
                titleSize = $this.attr('size'),
                $details = $('#details'),
                $title = $('#dctitle1'),
                $regionDetail = $details.find('.detail[region="' + region + '"]');

            $details.attr('region', region);

            if (titleSize)
                $title.css({ 'font-size': titleSize + 'px' });
            else
                $title.removeAttr('style');

            $title.text($this.attr('title'));

            GAME.resetAllDetailScrolls();

            $('.btnDetail').addClass('disabled');
            $regionDetail.find('.page').each(function (index, item) {
                var $item = $(item),
                    $btnRelated = $('.btnDetail[type="' + $item.attr('type') + '"]');

                if (index == 0) {
                    var subtitle = $btnRelated.attr('subtitle'),
                        $subtitle = $('#dctitle2');

                    $subtitle.text(subtitle);

                    if (subtitle == '')
                        $subtitle.parent().css({ backgroundImage: 'url(img/img_titulo_v2.png)' });
                    else
                        $subtitle.parent().removeAttr('style');

                    $item.show();
                }
                else {
                    $btnRelated.removeClass('disabled');

                    $item.hide();
                }
            });

            $details.find('.detail').hide();
            $regionDetail.show();

            $details.show();

            setTimeout(function () {
                $details.css({ opacity: 1 });

                setTimeout(function () {
                    GAME.interactable = true;
                }, 500);
            }, 0);
        });

        $('.btnDetail').click(function () {
            if (!GAME.interactable)
                return;

            var $this = $(this);

            if ($this.hasClass('disabled'))
                return;

            GAME.interactable = false;

            var clickedType = $this.attr('type'),
                $details = $('#details'),
                subtitle = $this.attr('subtitle'),
                $subtitle = $('#dctitle2');;

            GAME.resetAllDetailScrolls();

            $('.btnDetail').addClass('disabled');

            $subtitle.text(subtitle);

            if (subtitle == '')
                $subtitle.parent().css({ backgroundImage: 'url(img/img_titulo_v2.png)' });
            else
                $subtitle.parent().removeAttr('style');

            $details.find('.detail[region="' + $details.attr('region') + '"]').find('.page').each(function (index, item) {
                var $item = $(item),
                    type = $item.attr('type'),
                    $btnRelated = $('.btnDetail[type="' + type + '"]');

                    if (type != clickedType) {
                        $btnRelated.removeClass('disabled');
                        $item.hide();
                    }
                    else
                        $item.show();
            });

            GAME.interactable = true;
        });

        $('video').each(function (index, item) {
            item.onended = GAME.videoEnded;
        });

        $('.videoPlay').click(function () {
            if (!GAME.interactable)
                return;

            if (_capa.android) {
                LED.playVideo($(this).attr('video'));
                return;
            }

            GAME.interactable = false;

            var $this = $(this),
                $theater = $('#theater'),
                bottom = $this.attr('bottom'),
                $legend = $('#tlegend'),
                $video = $('<video width="100%" height="100%"><source src="' + $this.attr('video') + '" type="video/mp4"></video>');

            $video[0].load();

            $video[0].addEventListener('ended', GAME.videoEnded, false);

            $theater.prepend($video);

            if (typeof bottom == 'undefined')
                $legend.removeAttr('style');
            else
                $legend.css({ bottom: parseInt(bottom) + 'px' });

            $legend.html($this.attr('legend'));
            $('#tcredits').html($this.attr('credits'));

            $theater.show();

            setTimeout(function () {
                $theater.css({ opacity: 1 });

                setTimeout(function () {
                    $video[0].play();

                    GAME.interactable = true;
                }, 500);
            }, 0);
        });

        $('.detailTextAreaMoveUp').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                $textArea = $this.parent(),
                $textAreaPieces = $textArea.find('.detailTextAreaPiece'),
                actual = parseInt($textArea.attr('active')),
                minimum = 0;

            actual = Math.max(actual - 1, minimum);

            $textAreaPieces.hide();
            $textArea.find('.detailTextAreaPiece[number="' + actual + '"]').show();
            $textArea.attr('active', actual);

            if (actual == minimum)
                $textArea.find('.detailTextAreaMoveUp').hide();
            else
                $textArea.find('.detailTextAreaMoveUp').show();

            if ($textAreaPieces.length - 1 == actual)
                $textArea.find('.detailTextAreaMoveDown').hide();
            else
                $textArea.find('.detailTextAreaMoveDown').show();

            GAME.interactable = true;
        });

        $('.detailTextAreaMoveDown').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                $textArea = $this.parent(),
                $textAreaPieces = $textArea.find('.detailTextAreaPiece'),
                actual = parseInt($textArea.attr('active')),
                maximum = $textAreaPieces.length - 1;

            actual = Math.min(maximum, actual + 1);

            $textAreaPieces.hide();
            $textArea.find('.detailTextAreaPiece[number="' + actual + '"]').show();
            $textArea.attr('active', actual);

            if (actual == 0)
                $textArea.find('.detailTextAreaMoveUp').hide();
            else
                $textArea.find('.detailTextAreaMoveUp').show();

            if (actual == maximum)
                $textArea.find('.detailTextAreaMoveDown').hide();
            else
                $textArea.find('.detailTextAreaMoveDown').show();

            GAME.interactable = true;
        });

        $('#btnDCClose').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $details = $('#details'),
                $region = $details.find('div[region="' + $details.attr('region') + '"]');

            /*$region.find('video').each(function (index, item) {
                var $item = $(item);

                item.pause();
                item.currentTime = 0;

                $item.parent().find('.videoPlay').removeAttr('style');
            });*/

            $details.removeAttr('region').css({ opacity: 0 });

            setTimeout(function () {
                $details.hide();

                GAME.interactable = true;
            }, 500);
        });

        $('#theater').click(function () {
            if (!GAME.interactable)
                return;

            GAME.interactable = false;

            var $this = $(this),
                $video = $this.find('video');

            $video[0].pause();

            $this.css({ opacity: 0 });

            setTimeout(function () {
                $this.hide();

                $video.remove();

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
});
