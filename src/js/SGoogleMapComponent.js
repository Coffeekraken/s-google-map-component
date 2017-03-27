import SGoogleMapComponentBase from 'coffeekraken-s-google-map-component-base'

/**
 * @name 		SGoogleMapComponent
 * @extends 	SGoogleMapComponentBase
 * Provide a nice webcomponent wrapper around the google map api.
 * @styleguide  	Objects / Google Map
 * @example 	html
 * <s-google-map api-key="..." center="{lat: -25.363, lng: 131.044}">
 * </s-google-map>
 * @see 	https://www.npmjs.com/package/google-maps
 * @see 	https://developers.google.com/maps/documentation/javascript/
 * @author 	Olivier Bossel <olivier.bossel@gmail.com>
 */


export default class SGoogleMapComponent extends SGoogleMapComponentBase {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 * @protected
	 */
	static get defaultProps() {
		return {
			/**
			 * Set the initial zoom of the map
			 * @prop
			 * @type 	{integer}
			 */
			zoom : 4,

			/**
			 * Set when to init the map if the placeholder setting is used
			 * @prop
			 * @type 	{String}
			 */
			initOn : 'click',

			/**
			 * Specify a registered skin to use. The skin has to be registered through the static ```SGoogleMapComponent.registerSkin``` method.
			 * @prop
			 * @type 	{String}
			 */
			skin : null

			/**
			 * @name 	Google Map API
			 * Support all the google api options
			 * @prop
			 * @name 	All others google map options
			 * @type 	{Mixed}
			 */
		 };
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 * @protected
	 */
	static get physicalProps() {
		return [];
	}

	/**
	 * Css
	 * @protected
	 */
	static defaultCss(componentName, componentNameDash) {
		return `
			${componentNameDash} {
				display: block;
				position: relative;
				min-height: 50px;
			}
			.${componentNameDash}__map {
				position: absolute;
				top: 0; left: 0;
				width: 100%; height: 100%;
			}
			.${componentNameDash}__placeholder {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				cursor: pointer;
				z-index: 1;
			}
		`;
	}

	static _registeredSkins = {};

	/**
	 * Register a map style to use later through the "style" property
	 * @param 		{String} 		name 		The name of the style to register
	 * @param 		{Object} 		skin 		The skin object
	 */
	static registerSkin = function(name, skin) {
		// save the new skin
		SGoogleMapComponent._registeredSkins[name] = skin;
	}

	/**
	 * Accept all props
	 * @definition 		SWebComponent.shouldAcceptComponentProp
	 * @protected
	 */
	shouldAcceptComponentProp(prop) {
		return true;
	}

	/**
	 * Component will mount
	 * @definition 		SWebComponent.componentWillMount
	 * @protected
	 */
	componentWillMount() {
		super.componentWillMount();
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 * @protected
	 */
	componentMount() {
		super.componentMount();

		// create the map container
		this._mapElm = document.createElement('div');
		this._mapElm.className = `${this._componentNameDash}__map`;
		this._mapElm.setAttribute('s-google-map-map', true);

		// try to get the placeholder
		this._placeholder = this.querySelector(`${this._componentNameDash}-placeholder`);

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
	 * @protected
	 */
	componentUnmount() {
		super.componentUnmount();
	}

	/**
	 * Component will receive prop
	 * @definition 		SWebComponent.componentWillReceiveProp
	 * @protected
	 */
	componentWillReceiveProp(name, newVal, oldVal) {
		console.log('ddd', name, newVal);
		switch (name) {
			case 'skin':
				console.log('coco', name, newVal);
				this._map.setOptions({
					styles : SGoogleMapComponent._registeredSkins[newVal]
				});
			break;
		}
	}

	/**
	 * Component will receive props
	 * @definition 		SWebComponent.componentWillReceiveProps
	 * @protected
	 */
	componentWillReceiveProps(nextProps, previousProps) {
		if ( ! this._map) return;
		this._map.setOptions(nextProps);
	}

	/**
	 * Render the component
	 * Here goes the code that reflect the this.props state on the actual html element
	 * @definition 		SWebComponent.render
	 * @protected
	 */
	render() {
		super.render();
	}

	/**
	 * Handle the placeholder element
	 */
	_handlePlaceholder() {
		// listen to init the map
		this._placeholder.addEventListener(this.props.initOn, this._onPlaceholderInit.bind(this));
	}

	/**
	 * Proxy function of placeholder init listener
	 */
	_onPlaceholderInit() {
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
	_internalInit() {
		// init the map
		this._initMap();
	}

	/**
	 * Init the map
	 */
	_initMap() {

		let styles = this.props.styles;
		if (this.props.skin) {
			styles = SGoogleMapComponent._registeredSkins[this.props.skin];
		}

		this._map = new this._google.maps.Map(this._mapElm, {
			...this.props,
			styles
		});
		// set the component as inited
		// used by the markers to init when the map is ok
		this.setAttribute('inited', true);
	}

	/**
	 * Access the google map instance
	 * @name 	map
	 * @type 	{Google.Map} 	The google map instance
	 */
	get map() {
		return this._map;
	}
}
