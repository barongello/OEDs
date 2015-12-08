var EXPRESSION = {
    BLANK: '&nbsp;&nbsp;&nbsp;',

    active: {
        $box: null,
        $wrapper: null,
        $signal: null,
        $container: null,
        $brackets: null,
        brackets: {
            $left: null,
            $right: null
        },
        $exponent: null,
        $numbers: null,
        numbers: {
            $numerator: null,
            $denominator: null
        }
    },

    hasActiveExpression: function () {
        return (
            this.active.$box != null &&
            this.active.$wrapper != null &&
            this.active.$signal != null &&
            this.active.$container != null &&
            this.active.$brackets != null &&
            this.active.brackets.$left != null &&
            this.active.brackets.$right != null &&
            this.active.$exponent != null &&
            this.active.$numbers != null &&
            this.active.numbers.$numerator != null &&
            this.active.numbers.$denominator != null
        );
    },

    setInactiveExpression: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, setInactiveExpression] There is no active expression.');
            return;
        }

        this.removeHighlight();

        this.active.$box = null;
        this.active.$wrapper = null;
        this.active.$signal = null;
        this.active.$container = null;
        this.active.$brackets = null;
        this.active.brackets.$left = null;
        this.active.brackets.$right = null;
        this.active.$exponent = null;
        this.active.$numbers = null;
        this.active.numbers.$numerator = null;
        this.active.numbers.$denominator = null;
    },

    setActiveExpression: function (selector) {
        if (this.hasActiveExpression())
            this.setInactiveExpression();

        var $box = $(selector);

        if ($box.length == 0) {
            console.log('[Error, setActiveExpression] Trying to select no one element.');
            return false;
        }

        if ($box.length > 1) {
            console.log('[Error, setActiveExpression] Trying to select more than one element.');
            return false;
        }

        if (!$box.hasClass('expression') || !$box.hasClass('box')) {
            console.log('[Error, setActiveExpression] Selected element doesn\'t have "expression" and "box" classes.');
            return false;
        }

        var $wrapper = $box.find('.expression.wrapper');

        if ($wrapper.length != 1) {
            console.log('[Error, setActiveExpression] Needs exactly one wrapper.');
            return false;
        }

        var $signal = $wrapper.find('.expression.signal');

        if ($signal.length != 1) {
            console.log('[Error, setActiveExpression] Needs exactly one signal.');
            return false;
        }

        var $container = $wrapper.find('.expression.container');

        if ($container.length != 1) {
            console.log('[Error, setActiveExpression] Needs exactly one container.');
            return false;
        }

        var $brackets = $container.find('.expression.bracket');

        if ($brackets.length != 2) {
            console.log('[Error, setActiveExpression] Needs exactly two brackets.');
            return false;
        }

        var $leftBracket = $container.find('.expression.bracket.left');

        if ($leftBracket.length != 1) {
            console.log('[Error, setActiveExpression] Needs exactly one left bracket.');
            return false;
        }

        var $rightBracket = $container.find('.expression.bracket.right');

        if ($rightBracket.length != 1) {
            console.log('[Error, setActiveExpression] Needs exactly one right bracket.');
            return false;
        }

        var $exponent = $container.find('.expression.exponent');

        if ($exponent.length != 1) {
            console.log('[Error, setActiveExpression] Needs exactly one exponent.');
            return false;
        }

        var $numbers = $container.find('.expression.numbers');

        if ($numbers.length != 1) {
            console.log('[Error, setActiveExpression] Needs exactly one numbers holder.');
            return false;
        }

        var $numerator = $numbers.find('.expression.numerator');

        if ($numerator.length != 1) {
            console.log('[Error, setActiveExpression] Needs exactly one numerator.');
            return false;
        }

        var $denominator = $numbers.find('.expression.denominator');

        if ($denominator.length != 1) {
            console.log('[Error, setActiveExpression] Needs exactly one denominator.');
            return false;
        }

        this.active.$box = $box;
        this.active.$wrapper = $wrapper;
        this.active.$signal = $signal;
        this.active.$container = $container;
        this.active.$brackets = $brackets;
        this.active.brackets.$left = $leftBracket;
        this.active.brackets.$right = $rightBracket;
        this.active.$exponent = $exponent;
        this.active.$numbers = $numbers;
        this.active.numbers.$numerator = $numerator;
        this.active.numbers.$denominator = $denominator;

        return true;
    },

    resetExpression: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, resetExpression] There is no active expression.');
            return;
        }

        if (this.hasSignal())
            this.setPositive();

        if (this.hasRadix())
            this.removeRadix();

        if (this.hasParentheses())
            this.removeParentheses();

        if (this.hasPower())
            this.removePower();

        if (this.hasFraction())
            this.removeFraction();

        this.removeHighlight();

        this.setEmpty(this.getExponent());
        this.setEmpty(this.getNumerator());
        this.setEmpty(this.getDenominator());
    },

    removeHighlight: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, removeHighlight] There is no active expression.');
            return;
        }

        this.getContainer().find('.expression.highlight').removeClass('highlight');
    },

    getHighlighted: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getHighlighted] There is no active expression.');
            return;
        }

        var $highlighted = this.getContainer().find('.expression.highlight');

        if ($highlighted.length > 1) {
            console.log('[Error, getHighlighted] Needs to have exactly one expression element highlighted.');
            return;
        }

        if ($highlighted.length == 0)
            return $(null);

        return $highlighted;
    },

    isHighlighted: function ($element) {
        if (!this.hasActiveExpression()) {
            console.log('[Error, isHighlighted] There is no active expression.');
            return;
        }

        if ($element == null || !($element instanceof jQuery) || $element.length == 0 || ($element[0] != this.getExponent()[0] && $element[0] != this.getNumerator()[0] && $element[0] != this.getDenominator()[0]) || !$element.hasClass('expression')) {
            console.log('[Error, isHighlighted] Needs exactly one expression element to check highlight.');
            return;
        }

        return this.getHighlighted()[0] == $element[0];
    },

    setHighlighted: function ($element) {
        if (!this.hasActiveExpression()) {
            console.log('[Error, setHighlighted] There is no active expression.');
            return;
        }

        if ($element == null || !($element instanceof jQuery) || $element.length == 0 || ($element[0] != this.getExponent()[0] && $element[0] != this.getNumerator()[0] && $element[0] != this.getDenominator()[0]) || !$element.hasClass('expression')) {
            console.log('[Error, setHighlighted] Needs exactly one expression element to highlight.');
            return;
        }

        if ($element[0] == this.getHighlighted()[0]) {
            console.log('[Warning, setHighlighted] The expression element is highlighted already.');
            return;
        }

        this.removeHighlight();

        $element.addClass('highlight');
    },

    isEmpty: function ($element) {
        if (!this.hasActiveExpression()) {
            console.log('[Error, isEmpty] There is no active expression.');
            return;
        }

        if ($element == null || !($element instanceof jQuery) || $element.length == 0 || ($element[0] != this.getExponent()[0] && $element[0] != this.getNumerator()[0] && $element[0] != this.getDenominator()[0]) || !$element.hasClass('expression')) {
            console.log('[Error, isEmpty] Needs exactly one expression element to check emptiness.');
            return;
        }

        return $element.html() == this.BLANK;
    },

    setEmpty: function ($element) {
        if (!this.hasActiveExpression()) {
            console.log('[Error, setEmpty] There is no active expression.');
            return;
        }

        if ($element == null || !($element instanceof jQuery) || $element.length == 0 || ($element[0] != this.getExponent()[0] && $element[0] != this.getNumerator()[0] && $element[0] != this.getDenominator()[0]) || !$element.hasClass('expression')) {
            console.log('[Error, setEmpty] Needs exactly one expression element to set empty.');
            return;
        }

        return $element.html(this.BLANK);
    },

    initializeExpression: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, initializeExpression] There is no active expression.');
            return;
        }

        this.resetExpression();

        this.setHighlighted(this.getNumerator());
    },

    hasSignal: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, hasSignal] There is no active expression.');
            return;
        }

        return this.getWrapper().hasClass('negative');
    },

    setNegative: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, setNegative] There is no active expression.');
            return;
        }

        if (this.hasSignal()) {
            console.log('[Warning, setNegative] The expression is negative already.');
            return;
        }

        this.getWrapper()
            .removeClass('positive')
            .addClass('negative');
    },

    setPositive: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, setPositive] There is no active expression.');
            return;
        }

        if (!this.hasSignal()) {
            console.log('[Warning, setPositive] The expression is positive already.');
            return;
        }

        this.getWrapper()
            .removeClass('negative')
            .addClass('positive');
    },

    toggleSignal: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, toggleSignal] There is no active expression.');
            return;
        }

        if (this.hasSignal())
            this.setPositive();
        else
            this.setNegative();
    },

    hasRadix: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, hasRadix] There is no active expression.');
            return;
        }

        return this.getContainer().hasClass('radix');
    },

    removeRadix: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, removeRadix] There is no active expression.');
            return;
        }

        if (!this.hasRadix()) {
            console.log('[Warning, removeRadix] The expression have no radix already.');
            return;
        }

        this.getContainer()
            .removeClass('radix')
            .addClass('normal');

        var $shouldBeHighlighted = (this.hasFraction() ? this.getDenominator() : this.getNumerator());

        if (!this.isHighlighted($shouldBeHighlighted))
            this.setHighlighted($shouldBeHighlighted);
    },

    addRadix: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, addRadix] There is no active expression.');
            return;
        }

        if (this.hasRadix()) {
            console.log('[Warning, addRadix] The expression have radix already.');
            return;
        }

        if (this.hasParentheses())
            this.removeParentheses();

        if (this.hasPower())
            this.removePower();

        this.getContainer()
            .removeClass('normal')
            .addClass('radix');

        var $shouldBeHighlighted = (this.hasFraction() ? this.getDenominator() : this.getNumerator());

        if (!this.isHighlighted($shouldBeHighlighted))
            this.setHighlighted($shouldBeHighlighted);
    },

    toggleRadix: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, toggleRadix] There is no active expression.');
            return;
        }

        if (this.hasRadix())
            this.removeRadix();
        else
            this.addRadix();
    },

    hasParentheses: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, hasParentheses] There is no active expression.');
            return;
        }

        return this.getContainer().hasClass('parentheses');
    },

    removeParentheses: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, removeParentheses] There is no active expression.');
            return;
        }

        if (!this.hasParentheses()) {
            console.log('[Warning, removeParentheses] The expression have no parentheses already.');
            return;
        }

        this.getContainer()
            .removeClass('parentheses')
            .addClass('normal');
    },

    addParentheses: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, addParentheses] There is no active expression.');
            return;
        }

        if (this.hasParentheses()) {
            console.log('[Warning, addParentheses] The expression have parentheses already.');
            return;
        }

        if (this.hasRadix())
            this.removeRadix();

        this.getContainer()
            .removeClass('normal')
            .addClass('parentheses');
    },

    hasPower: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, hasPower] There is no active expression.');
            return;
        }

        return this.getContainer().hasClass('power');
    },

    removePower: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, removePower] There is no active expression.');
            return;
        }

        if (!this.hasPower()) {
            console.log('[Warning, removePower] The expression have no power already.');
            return;
        }

        if (this.hasParentheses())
            this.removeParentheses();

        this.setEmpty(this.getExponent());

        this.getContainer().removeClass('power');

        var $shouldBeHighlighted = (this.hasFraction() ? this.getDenominator() : this.getNumerator());

        if (!this.isHighlighted($shouldBeHighlighted))
            this.setHighlighted($shouldBeHighlighted);
    },

    addPower: function (value) {
        if (!this.hasActiveExpression()) {
            console.log('[Error, addPower] There is no active expression.');
            return;
        }

        var valueUndefined = typeof value == 'undefined',
            exponentHtml = this.getExponentHtml();

        if (this.hasPower()) {
            if (valueUndefined && exponentHtml == this.BLANK) {
                console.log('[Warning, addPower] The expression have power already.');
                return;
            }
            else if (valueUndefined && exponentHtml == value) {
                console.log('[Warning, addPower] The expression have this power already.');
                return;
            }
        }

        if (!this.hasFraction() && valueUndefined && this.isEmpty(this.getNumerator())) {
            console.log('[Warning, addPower] The expression have no numerator yet.');
            return;
        }

        if (this.hasFraction() && valueUndefined && this.isEmpty(this.getDenominator()))
            this.removeFraction();

        if (!valueUndefined)
            this.setExponentHtml(value);
        else
            this.setEmpty(this.getExponent());

        if (this.hasRadix())
            this.removeRadix();

        if (this.hasFraction() && !this.hasParentheses())
            this.addParentheses();
        else if (!this.hasFraction() && this.hasParentheses())
            this.removeParentheses();

        this.getContainer().addClass('power');

        if (!valueUndefined) {
            var $shouldBeHighlighted = (this.hasFraction() ? this.getDenominator() : this.getNumerator());

            if (!this.isHighlighted($shouldBeHighlighted))
                this.setHighlighted($shouldBeHighlighted);
        }
        else
            this.setHighlighted(this.getExponent());
    },

    togglePower: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, togglePower] There is no active expression.');
            return;
        }

        if (this.hasPower())
            this.removePower();
        else
            this.addPower();
    },

    hasFraction: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, hasFraction] There is no active expression.');
            return;
        }

        return this.getNumbers().hasClass('fraction');
    },

    removeFraction: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, removeFraction] There is no active expression.');
            return;
        }

        if (!this.hasFraction()) {
            console.log('[Warning, removeFraction] The expression have no fraction already.');
            return;
        }

        if (this.hasParentheses())
            this.removeParentheses();

        this.setEmpty(this.getDenominator());

        this.getNumbers().removeClass('fraction');

        var $shouldBeHighlighted = (this.isHighlighted(this.getExponent()) ? this.getExponent() : this.getNumerator());

        if (!this.isHighlighted($shouldBeHighlighted))
            this.setHighlighted($shouldBeHighlighted);
    },

    addFraction: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, addFraction] There is no active expression.');
            return;
        }

        if (this.hasFraction()) {
            console.log('[Warning, addFraction] The expression have fraction already.');
            return;
        }

        if (this.isEmpty(this.getNumerator())) {
            console.log('[Error, addFraction] The expression have no numerator.');
            return;
        }

        if (this.hasPower()) {
            if (this.isHighlighted(this.getExponent()) && this.isEmpty(this.getExponent()))
                this.removePower();
            else
                this.addParentheses();
        }

        this.getNumbers().addClass('fraction');

        if (!this.isHighlighted(this.getDenominator()))
            this.setHighlighted(this.getDenominator());
    },

    toggleFraction: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, toggleFraction] There is no active expression.');
            return;
        }

        if (this.hasFraction())
            this.removeFraction();
        else
            this.addFraction();
    },

    getBox: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getBox] There is no active expression.');
            return;
        }

        return this.active.$box;
    },

    getWrapper: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getWrapper] There is no active expression.');
            return;
        }

        return this.active.$wrapper;
    },

    getSignal: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getSignal] There is no active expression.');
            return;
        }

        return this.active.$signal;
    },

    getContainer: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getContainer] There is no active expression.');
            return;
        }

        return this.active.$container;
    },

    getBrackets: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getBrackets] There is no active expression.');
            return;
        }

        return this.active.$brackets;
    },

    getLeftBracket: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getLeftBracket] There is no active expression.');
            return;
        }

        return this.active.brackets.$left;
    },

    getRightBracket: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getRightBracket] There is no active expression.');
            return;
        }

        return this.active.brackets.$right;
    },

    getExponent: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getExponent] There is no active expression.');
            return;
        }

        return this.active.$exponent;
    },

    getNumbers: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getNumbers] There is no active expression.');
            return;
        }

        return this.active.$numbers;
    },

    getNumerator: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getNumerator] There is no active expression.');
            return;
        }

        return this.active.numbers.$numerator;
    },

    getDenominator: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getDenominator] There is no active expression.');
            return;
        }

        return this.active.numbers.$denominator;
    },

    getNumeratorHtml: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getNumeratorHtml] There is no active expression.');
            return;
        }

        return this.getNumerator().html();
    },

    setNumeratorHtml: function (value) {
        if (!this.hasActiveExpression()) {
            console.log('[Error, setNumeratorHtml] There is no active expression.');
            return;
        }

        if (typeof value == 'undefined' || value.length == '')
            value = this.BLANK;

        this.getNumerator().html(value);
    },

    getDenominatorHtml: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getDenominatorHtml] There is no active expression.');
            return;
        }

        return this.getDenominator().html();
    },

    setDenominatorHtml: function (value) {
        if (!this.hasActiveExpression()) {
            console.log('[Error, setDenominatorHtml] There is no active expression.');
            return;
        }

        if (typeof value == 'undefined' || value.length == '')
            value = this.BLANK;

        this.getDenominator().html(value);
    },

    getExponentHtml: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, getExponentHtml] There is no active expression.');
            return;
        }

        return this.getExponent().html();
    },

    setExponentHtml: function (value) {
        if (!this.hasActiveExpression()) {
            console.log('[Error, setExponentHtml] There is no active expression.');
            return;
        }

        if (typeof value == 'undefined' || value.length == '')
            value = this.BLANK;

        this.getExponent().html(value);
    },

    dumpToString: function () {
        if (!this.hasActiveExpression()) {
            console.log('[Error, dumpToString] There is no active expression.');
            return;
        }

        var result = '';

        result += (this.hasSignal() ? '-' : '+');

        if (this.hasPower())
            result += 'p';
        else if (this.hasRadix())
            result += 'r';

        if (this.hasFraction())
            result += 'f';

        result += '|';
        result += this.getNumeratorHtml().replace(/&nbsp;/gi, '');
        result += '|';
        result += this.getDenominatorHtml().replace(/&nbsp;/gi, '');
        result += '|';
        result += this.getExponentHtml().replace(/&nbsp;/gi, '');

        return result;
    },

    loadFromString: function(value) {
        if (!this.hasActiveExpression()) {
            console.log('[Error, loadFromString] There is no active expression.');
            return;
        }

        this.resetExpression();

        if (value == 'undefined')
            value = '';

        value = value.split('|');

        if (value.length != 4)
            return;

        for (var i = 1; i < 4; i++)
            if (value[i] == '')
                value[i] = this.BLANK;

        var options = value[0];

        for (var i in options) {
            var letter = options[i];

            if (letter == '+') {
                if (this.hasSignal())
                    this.setPositive();

                this.setNumeratorHtml(value[1]);
            }
            else if (letter == '-') {
                if (!this.hasSignal())
                    this.setNegative();

                this.setNumeratorHtml(value[1]);
            }
            else if (letter == 'p') {
                this.addPower();

                this.setExponentHtml(value[3]);
            }
            else if (letter == 'r')
                this.addRadix();
            else if (letter == 'f') {
                this.addFraction();

                this.setDenominatorHtml(value[2]);
            }
        }

        this.removeHighlight();
    }
};
