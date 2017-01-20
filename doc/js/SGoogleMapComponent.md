# SGoogleMapComponent  extends SGoogleMapComponentBase
Provide a nice webcomponent wrapper around the google map api.

#### Example
```html
	<s-google-map api-key="..." center="{lat: -25.363, lng: 131.044}">
</s-google-map>
```
See more : [https://developers.google.com/maps/documentation/javascript/](https://developers.google.com/maps/documentation/javascript/)

Author : Olivier Bossel <olivier.bossel@gmail.com>



## Examples

Here's some usage examples.

### Google map

Display a simple google map

#### Example
```html
	<s-google-map center="{lat: -25.363, lng: 131.044}" scrollwheel="false">
</s-google-map>
```
See more : [https://github.com/Coffeekraken/s-google-map-component/tree/release/0.0.1](https://github.com/Coffeekraken/s-google-map-component/tree/release/0.0.1)

Author : Olivier Bossel <olivier.bossel@gmail.com>


## Attributes

Here's the list of available attribute to set on the element.

### zoom

Set the initial zoom of the map

Type : **{ integer }**

Default : **4**


### initOn

Set when to init the map if the placeholder setting is used

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**

Default : **click**


### All others google map options

Support all the google api options

Type : **{ Mixed }**



## Properties


### map

Access the google map instance

Type : **{ Google.Map }**