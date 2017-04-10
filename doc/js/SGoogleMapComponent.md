# SGoogleMapComponent

Extends **SGoogleMapComponentBase**

Provide a nice webcomponent wrapper around the google map api.

### Example
```html
	<s-google-map api-key="..." center="{lat: -25.363, lng: 131.044}">
</s-google-map>
```
See more : [https://developers.google.com/maps/documentation/javascript/](https://developers.google.com/maps/documentation/javascript/)

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


### skin

Specify a registered skin to use. The skin has to be registered through the static ```SGoogleMapComponent.registerSkin``` method.

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### All others google map options

Support all the google api options

Type : **{ Mixed }**



## Properties


### map

Access the google map instance

Type : **{ Google.Map }**


## Methods


### registerSkin

Register a map style to use later through the "style" property


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The name of the style to register  |  required  |
skin  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The skin object  |  required  |

**Static**