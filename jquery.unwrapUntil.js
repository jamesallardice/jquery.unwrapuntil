/*
 * jQuery unwrapUntil plugin
 * 
 * The MIT License
 * 
 * Copyright (c) 2012 James Allardice
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function($) {
	$.fn.unwrapUntil = function() {
		var arg = arguments[0],
			type = typeof arguments[0];
		if(type === "number") {
			//Argument is a number, remove that number of ancestor elements
			$.each(this, function() {
				var $this = $(this);
				for(var i = 0; i < arg; i++) {
					$this.unwrap();
				}
			});
		}
		else if(type === "string") {
			//Argument is a selector string, remove ancestor elements until the parent matches the selector
			$.each(this, function() {
				var $this = $(this);
				if($this.closest(arg).length > 0) {
					while($this.parent(arg).length === 0) {
						$this.unwrap();
					}
				}
			});
		}
		else if(type === "object") {
			//Argument is an object, remove ancestor elements until the parent is equal to that object
			$.each(this, function() {
				var $this = $(this);
				if($this.closest(arg).length > 0) {
					while($this.parent()[0] !== arg[0]) {
						$this.unwrap();
					}
				}
			});
		}
		return this;
	};
})(jQuery);