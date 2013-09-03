$("input[type='number']").each(function () {
    var $this = $(this);
    
    var $clone = $this.addClass("input-number").clone(true);
    $clone.attr("type", "text");
    $this.replaceWith($clone);
    
    var $btn = $("<button>").addClass("btn btn-mini");
    var $btnPlus = $btn.clone().append("<i class='icon icon-plus'></i>");
    var $btnMinus = $btn.clone().append("<i class='icon icon-minus'></i>");
    
    var $btnGroup = $("<div>")
                        .addClass("btn-group btn-group-vertical number-btn")
                        .append($btnPlus)
                        .append($btnMinus);
    
    $clone.after($btnGroup);
});
