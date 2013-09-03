(function ( $ ) {
    $.fn.twbsNumberInput = function(options) {

        var settings = $.extend({
            check: true
        }, options);

        function check () {
            $("input[type='number']").each(function () {
                var $this = $(this);
                
                var $clone = $this.addClass("input-number").clone(true);
                $clone.attr("type", "text");
                $this.replaceWith($clone);
                
                var $btn = $("<button>").addClass("btn btn-mini");
                
                var $btnPlus = $btn.clone().append("<i class='icon icon-plus'></i>").on("click", function () {
                    increment($(this));
                });
                var $btnMinus = $btn.clone().append("<i class='icon icon-minus'></i>").on("click", function () {
                    decrement($(this));
                });
                
                var $btnGroup = $("<div>")
                                    .addClass("btn-group btn-group-vertical number-btn")
                                    .append($btnPlus)
                                    .append($btnMinus);
                
                $clone.after($btnGroup);
            });
        }
        
        if (settings.check) {
            check();
        }
        
        function getInput (button) {
            return $input = button.parent().prev();
        }
        
        function increment (button) {
            var $input = getInput(button);
            var value = parseInt(getValue($input));
            ++value;
            setValue($input, value);
        }
        
        function decrement (button) {
            var $input = getInput(button);
            var value = parseInt(getValue($input));
            --value;
            setValue($input, value);
        }
        
        function setValue (input, value) {
            var $input = input;
            var limits = getLimits($input);
            
            // both limits
            if (limits.max && limits.min) {
                if (value <= limits.max && value >= limits.min) {
                    $input.val(value);
                }
                return;
            }
            
            // only min
            if (limits.min) {
                if (value >= limits.min) {
                    $input.val(value);
                }
                return;
            }
            
            // only max
            if (limits.max) {
                if (value <= limits.max) {
                    $input.val(value);
                }
                return;
            }
            
            // no limits
            $input.val(value);
        }
        
        function getValue (input) {
            var $input = input;
            return $($input).val() || 0;
        }
        
        function getLimits(input) {
            var $input = input;
            return {
                min: $($input).attr("min"),
                max: $($input).attr("max")
            };
        }        
        
        return this;
    };
}( jQuery ));
