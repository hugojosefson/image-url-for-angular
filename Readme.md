
# image-url-for-angular

  AngularJS directive for validating and figuring out width/height from an image url.

## Installation

### As a [component](https://github.com/component/component)

    $ component install hugojosefson/image-url-for-angular@0.0.1

In JS, to let it register its AngularJS module:

    require("image-url-for-angular")();

### With [Bower](http://bower.io/)

    $ bower install hugojosefson-image-url-for-angular

In HTML:

    <script src="components/hugojosefson-image-url-for-angular/image-url-for-angular.js"></script>

### Old-school

    $ wget https://raw.github.com/hugojosefson/image-url-for-angular/0.0.1/image-url-for-angular.js

In HTML:

    <script src="image-url-for-angular.js"></script>

## API

One directive is registered, `imageUrl`, which you use like this:

    <form name="myForm">

      <input name="screenshotUrl" type="url" ng-model="screenshot.url" image-url
      image-url-width-model="screenshot.width" image-url-height-model="screenshot.height" />

      ...

    </form>

Then the following are automatically kept up-to-date in the `$scope`:

    myForm.screenshotUrl.$valid
    myForm.screenshotUrl.$invalid
    screenshot.width
    screenshot.height

The attributes `image-url-width-model` and `image-url-height-model` are each optional, but if
any of them is specified, the directive will keep the corresponding scope variable updated with the width/height.

In case of an error, for example if the url is incorrect, or the image loaded is not a valid image, width and height
models are set to `null` and the form field's validity is set to invalid (specified as
`imageUrl`.)
       

## License

  MIT
