<h1>unwrapUntil jQuery plugin</h1>

unwrapUntil is a jQuery plugin that makes it easy to unwrap elements multiple times. The method returns an instance of jQuery, so chainability is maintained. All examples that follow are in the context of the following HTML snippet:

    <div id="outer">
        <div>
            <div>
                <span id="target">Target</span>
            </div>
        </div>
    </div>

<h2>.unwrapUntil(number)</h2>

`number` - The number of ancestor elements to remove

<strong>Example</strong>

To unwrap `#target` twice, leaving only `#outer` with `#target` as a direct child:

    $("#target").unwrapUntil(2);

<h2>.unwrapUntil(selector)</h2>

`selector` - A jQuery selector string. The selected elements will be unwrapped until the parent matches this selector.

<strong>Example</strong>

To unwrap `#target` until `#outer` (the `#outer` element will not be removed):

    $("#target").unwrapUntil("#outer");

<h2>.unwrapUntil(element)</h2>

`object` - A jQuery object or a DOM element. The selected elements will be unwrapped until the parent is equal to this.

<strong>Example</strong>

To unwrap `#target` until `#outer`, when you already have a reference to `#outer`:

    var outer = $("#outer");
    $("#target").unwrapUntil(outer);