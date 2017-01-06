Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _coffeekrakenSGoogleMapComponentBase = require('coffeekraken-s-google-map-component-base');

var _coffeekrakenSGoogleMapComponentBase2 = _interopRequireDefault(_coffeekrakenSGoogleMapComponentBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SGoogleMapComponent = function (_SGoogleMapComponentB) {
	_inherits(SGoogleMapComponent, _SGoogleMapComponentB);

	function SGoogleMapComponent() {
		_classCallCheck(this, SGoogleMapComponent);

		return _possibleConstructorReturn(this, (SGoogleMapComponent.__proto__ || Object.getPrototypeOf(SGoogleMapComponent)).apply(this, arguments));
	}

	_createClass(SGoogleMapComponent, [{
		key: 'componentWillMount',


		/**
   * Component will mount
   * @definition 		SWebComponent.componentWillMount
   */
		value: function componentWillMount() {
			_get(SGoogleMapComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapComponent.prototype), 'componentWillMount', this).call(this);
		}

		/**
   * Mount component
   * @definition 		SWebComponent.componentMount
   */

	}, {
		key: 'componentMount',
		value: function componentMount() {
			_get(SGoogleMapComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapComponent.prototype), 'componentMount', this).call(this);

			// create the map container
			this._mapElm = document.createElement('div');
			this._mapElm.className = this._componentNameDash + '__map';
			this._mapElm.setAttribute('s-google-map-map', true);

			// try to get the placeholder
			this._placeholder = this.querySelector(this._componentNameDash + '-placeholder');

			// manage placeholder
			if (this._placeholder) {
				this._handlePlaceholder();
			} else {
				// init directly
				this._internalInit();
			}

			// append the map elm
			this.appendChild(this._mapElm);
		}

		/**
   * Component unmount
   * @definition 		SWebComponent.componentUnmount
   */

	}, {
		key: 'componentUnmount',
		value: function componentUnmount() {
			_get(SGoogleMapComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapComponent.prototype), 'componentUnmount', this).call(this);
		}

		/**
   * Component will receive prop
   * @definition 		SWebComponent.componentWillReceiveProp
   */

	}, {
		key: 'componentWillReceiveProp',
		value: function componentWillReceiveProp(name, newVal, oldVal) {
			if (!this._map) return;
			this._map.setOptions(nextProps);
		}

		/**
   * Render the component
   * Here goes the code that reflect the this.props state on the actual html element
   * @definition 		SWebComponent.render
   */

	}, {
		key: 'render',
		value: function render() {
			_get(SGoogleMapComponent.prototype.__proto__ || Object.getPrototypeOf(SGoogleMapComponent.prototype), 'render', this).call(this);
		}

		/**
   * Handle the placeholder element
   */

	}, {
		key: '_handlePlaceholder',
		value: function _handlePlaceholder() {
			// listen to init the map
			this._placeholder.addEventListener(this.props.initOn, this._onPlaceholderInit.bind(this));
		}

		/**
   * Proxy function of placeholder init listener
   */

	}, {
		key: '_onPlaceholderInit',
		value: function _onPlaceholderInit() {
			// remove the placeholder
			this._placeholder.parentNode.removeChild(this._placeholder);
			// stop listening for init on placeholder
			this._placeholder.removeEventListener(this.props.initOn, this._onPlaceholderInit);
			// internal init
			this._internalInit();
		}

		/**
   * Init the map
   */

	}, {
		key: '_internalInit',
		value: function _internalInit() {
			// init the map
			this._initMap();
		}

		/**
   * Init the map
   */

	}, {
		key: '_initMap',
		value: function _initMap() {
			this._map = new this._google.maps.Map(this._mapElm, this.props);
			// set the component as inited
			// used by the markers to init when the map is ok
			this.setAttribute('inited', true);
		}

		/**
   * Access the google map instance
   * @return 	{Map} 	The google map instance
   */

	}, {
		key: 'map',
		get: function get() {
			return this._map;
		}
	}], [{
		key: 'css',


		/**
   * Css
   */
		value: function css(componentName, componentNameDash) {
			return '\n\t\t\t' + componentNameDash + ' {\n\t\t\t\tdisplay : block;\n\t\t\t\tposition : relative;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__map {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0; left: 0;\n\t\t\t\twidth: 100%; height: 100%;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__placeholder {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tcursor: pointer;\n\t\t\t\tz-index: 1;\n\t\t\t}\n\t\t';
		}
	}, {
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {
				/**
     * Set the initial zoom of the map
     * @prop
     * @type 	{integer}
     */
				zoom: 4,

				/**
     * Set when to init the map if the placeholder setting is used
     * @prop
     * @type 	{String}
     */
				initOn: 'click'
			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return [];
		}
	}]);

	return SGoogleMapComponent;
}(_coffeekrakenSGoogleMapComponentBase2.default);

exports.default = SGoogleMapComponent;