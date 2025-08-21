/* ##### JavaScript Principal ##### */

var GAME = {
    initialized: false,
    interactable: false,
    consts: {
        base: { x: 148, y: 325 },
        step: { x: 0, y: 50 },
        max: { x: 19, y: 5 }
    },
    
    drawGraph: function () {
        var o = $('#graph');
        var c = o[0];
        var ctx = c.getContext('2d');
        var consts = GAME.consts;
        
        var initial = parseInt($('#initial').attr('text'));
        var months = parseInt($('#months').attr('text'));
        var tax1 = parseInt($('#tax1').attr('text'));
        var tax2 = parseInt($('#tax2').attr('text'));
        
        var interest1 = $('#interest1').hasClass('simple');
        var interest2 = $('#interest2').hasClass('simple');
        
        var final1 = Math.round(interest1 ? initial * (1 + tax1 * months / 100) : initial * Math.pow(1 + tax1 / 100, months));
        var final2 = Math.round(interest2 ? initial * (1 + tax2 * months / 100) : initial * Math.pow(1 + tax2 / 100, months));
        
        var steps = { x: 0, y: (final1 >= final2 ? final1 / consts.max.y : final2 / consts.max.y) };
        
        // Clear
        ctx.clearRect(0, 0, c.width, c.height);
        
        // Draw Y Axis Horizontal Lines
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(108, 109, 112, 0.6)';

        ctx.beginPath();
        for (var i = 1; i <= consts.max.y; i++) {
            ctx.moveTo(consts.base.x - 6, consts.base.y - consts.step.y * i);
            ctx.lineTo(consts.base.x + 567, consts.base.y - consts.step.y * i);
        }
        ctx.stroke();
        
        // Write Y Axis Values
        ctx.font = 'bold 10pt Arial';
        ctx.fillStyle = 'rgb(108, 109, 112)';
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        
        for (var i = 1; i <= consts.max.y; i++)
            ctx.fillText(Math.floor(steps.y * i), consts.base.x - 13, consts.base.y - consts.step.y * i);
        
        // Find Vertical Lines Step
        for (var i = 1; months / i > consts.max.x; i++);
        steps.x = i;
        lines = Math.ceil(months / i);
        
        // Draw X Axis Vertical Lines
        ctx.strokeStyle = 'rgba(108, 109, 112, 0.6)';
        
        ctx.beginPath();
        for (var i = 1; i <= lines; i++) {
            ctx.moveTo(consts.base.x + (560 / lines) * i, consts.base.y);
            ctx.lineTo(consts.base.x + (560 / lines) * i, consts.base.y - 270);
        }
        ctx.stroke();
        
        // Write X Axis Values
        ctx.font = 'bold 10pt Arial';
        ctx.fillStyle = 'rgb(108, 109, 112)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        
        for (var i = 1; i <= lines; i++)
            ctx.fillText(steps.x * i, consts.base.x + (560 / lines) * i, consts.base.y + 5);
        
        var value = 250 / (final1 >= final2 ? final1 : final2);
        ctx.lineWidth = 3;
        
        // Draw case 1
        ctx.strokeStyle = 'rgba(185, 184, 74, 0.8)';
        
        ctx.beginPath();
        ctx.moveTo(consts.base.x + (560 / months) * 0, consts.base.y - (interest1 ? initial * (1 + tax1 * 0 / 100) : initial * Math.pow(1 + tax1 / 100, 0)) * value);
        for (var i = 1; i <= months; i++)
            ctx.lineTo(consts.base.x + (560 / months) * i, consts.base.y - (interest1 ? initial * (1 + tax1 * i / 100) : initial * Math.pow(1 + tax1 / 100, i)) * value);
        ctx.stroke();
        
        // Draw case 2
        ctx.strokeStyle = 'rgba(216, 70, 43, 0.8)';
        
        ctx.beginPath();
        ctx.moveTo(consts.base.x + (560 / months) * 0, consts.base.y - (interest2 ? initial * (1 + tax2 * 0 / 100) : initial * Math.pow(1 + tax2 / 100, 0)) * value);
        for (var i = 1; i <= months; i++)
            ctx.lineTo(consts.base.x + (560 / months) * i, consts.base.y - (interest2 ? initial * (1 + tax2 * i / 100) : initial * Math.pow(1 + tax2 / 100, i)) * value);
        ctx.stroke();
        
        
        $('#final1').html(final1 + '&nbsp;&nbsp;');
        $('#final2').html(final2 + '&nbsp;&nbsp;');
        
        o.show();
    },
    
    doBind: function () {
        $('.textbox').click(function () {
            if (!GAME.interactable)
                return;
            
            GAME.interactable = false;
            
            var o = $(this);
            
            o.attr('text', '');
            o.html('');
            
            $('#graph').hide();
            
            $('.final').html('');
            
            $('#calculator')
                .attr('target', o.attr('id'))
                .css({
                    left:
                        (
                            parseInt(o.css('left')) +
                            parseInt(o.css('width')) / 2 -
                            149
                        ) + 'px',
                    top:
                        (
                            parseInt(o.css('top')) +
                            parseInt(o.css('height')) +
                            6
                        ) + 'px'
                });
            
            $('#calculatorOverlay')
                .css({ opacity: 0 })
                .show()
                .animate({ opacity: 1 }, 200, function () {
                    GAME.interactable = true;
                });
        });
    
        $('.interest').click(function () {
            if (!GAME.interactable)
                return;
            
            GAME.interactable = false;
            
            $('#graph').hide();
            
            $('.final').html('');
            
            var o = $(this);
            
            if (o.hasClass('simple')) {
                remove = 'simple';
                add = 'compound';
            }
            else {
                remove = 'compound';
                add = 'simple';
            }
            
            o.removeClass(remove).addClass(add);
            
            GAME.interactable = true;
        });
        
        $('.button').click(function () {
            if (!GAME.interactable)
                return;
            
            GAME.interactable = false;
            
            var o = $(this);
            var v = o.attr('value');
            var t = $('#' + $('#calculator').attr('target'));
            
            o.css({ 'background-color': 'rgba(255, 255, 255, 0.6)' })
                .animate({
                    'background-color': 'rgba(255, 255, 255, 0.0)'
                }, 200);
            
            if (v == 'ok') {
                $('#calculatorOverlay')
                    .css({ opacity: 1 })
                    .animate({ opacity: 0 }, 200, function () {
                        $('#calculatorOverlay').hide();
                        GAME.interactable = true;
                    });
                
                return;
            }
            else if (v == 'cancel') {
                var text = t.attr('text');
                
                text = text.substring(0, text.length - 1);
                
                t.attr('text', text);
                t.html(text + '&nbsp;');
            }
            else {
                var m = parseInt(t.attr('maxlength'));
                var text = t.attr('text');
                
                if (text.length < m) {
                    text = parseInt(text + o.attr('value'));
                    t.attr('text', text);
                    t.html(text + '&nbsp;');
                }
            }
            
            GAME.interactable = true;
        });
        
        $('#simulate').click(function () {
            if (!GAME.interactable)
                return;
            
            GAME.interactable = false;
            
            var t = $('.textbox[text=""], .textbox[text="0"]');
            
            if (t.length > 0)
                t.css({'background-color': 'rgba(255, 0, 0, 0.6)' })
                    .animate({
                        'background-color': 'rgba(255, 0, 0, 0.0)'
                    }, 500);
            else {
                GAME.drawGraph();
            }
            
            GAME.interactable = true;
        });
    },
    
    doInit: function () {
        this.interactable = false;
        
        if (!this.initialized) {
            this.doBind();
            
            this.initialized = true;
        }
        
        $('#initial').attr('text', '').html('');
        $('#months').attr('text', '').html('');
        $('#tax1').attr('text', '').html('');
        $('#tax2').attr('text', '').html('');
        
        this.interactable = true;
    }
};

$(document).ready(function () {
    GAME.doInit();
});
