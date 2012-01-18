(function($) {
    $.fn.unwrapUntil = function() {
        var arg = arguments[0],
            type = (typeof arguments[0]).toLowerCase();
        if(type === "number") {
            $.each(this, function() {
				var $this = $(this);
                for(var i = 0; i < arg; i++) {
                    $this.unwrap();
                }
            });
        }
        else if(type === "string") {
            $.each(this, function() {
                var $this = $(this);
                while($this.parent(arg).length === 0) {
                    $this.unwrap();
                }
            });
        }
        else if(type === "object") {
            $.each(this, function() {
			    var $this = $(this);
                while($this.parent()[0] !== arg[0]) {
                    $this.unwrap();
                }
            });
        }
    };
})(jQuery);