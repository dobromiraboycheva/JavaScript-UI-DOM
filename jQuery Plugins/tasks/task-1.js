function solve() {
    var CONSTS = {
        selector: {
            createDiv: '<div />'
        },
        option: {
            default: 'Select a value'
        },
        class: {
            current: 'current',
            dropDownDiv: 'dropdown-list',
            dropDownItem: 'dropdown-item',
            optionContaioner: 'options-container'
        }
    };
    return function (selector) {
        var $dropDown = $(CONSTS.selector.createDiv)
                          .addClass(CONSTS.class.dropDownDiv),
            $select = $(selector)
                        .hide()
                        .appendTo($dropDown),
            $currentOption = $(CONSTS.selector.createDiv)
                                .addClass(CONSTS.class.current)
                                .text(CONSTS.option.default)
                                .appendTo($dropDown),
            $optionsContainer = $(CONSTS.selector.createDiv)
                                   .addClass(CONSTS.class.optionContaioner)
                                   .css('position', 'absolute')
                                   .hide()
                                   .appendTo($dropDown);

        $select.find('option').each(function (index) {
            var $this = $(this);

            $(CONSTS.selector.createDiv)
               .appendTo($optionsContainer)
               .addClass(CONSTS.class.dropDownItem)
               .attr('data-value', $this.val())
               .attr('data-index', index)
               .text($this.text())
               .click(function () {
                   $currentOption.val($this.val());
                   $currentOption.text($this.text());
                   $optionsContainer.hide();
                   $select.val($this.val());
               });
        });

        $currentOption.click(function () {
            $optionsContainer.toggle();
            $currentOption.text('Select a value');
        });

        $('body').append($dropDown);
    };
}

module.exports = solve;