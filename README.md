# Twitter Bootstrap - Input number [![Support this project][donate-now]][paypal-donations]

jQuery plugin for input number for Twitter Boostrap: compatible with IE10

Currently only TWBS 2.x.x is supported.

## How to use
```html
<!-- Load jQuery -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>

<!-- Load twbs-input-number jQuery plugin -->
<script src="path/to/twbs-input-number-v0.1.0.min.js"></script>

<script>
$(document).on("ready", function () {
   $("input[type='number']").twbsNumberInput();
});
</script>
```
## Demo

[DEMO](http://jsfiddle.net/AgxmX/5/)

## Installation

```sh
$ npm i --save twbs-input-number
```

## Documentation

### `twbsNumberInput(options)`
Initializes the twbs number input.

#### Params
- **Object** `options`: An object containing:
 - `selector` (String): If provided, the selected elements will be overridden.
 - `check` (Boolean): Check the values after init (default: `true`).

#### Return
- **jQuery** The selected elements.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2013#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md