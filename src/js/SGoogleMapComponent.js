import SGoogleMapComponentBase from 'coffeekraken-s-google-map-component-base'

export default class SGoogleMapComponent extends SGoogleMapComponentBase {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
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
			initOn : 'click'
		};
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return [];
	}

	/**
	 * Css
	 */
	static css(componentName, componentNameDash) {
		return `
			${componentNameDash} {
				display : block;
				position : relative;
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

	/**
	 * Component will mount
	 * @definition 		SWebComponent.componentWillMount
	 */
	componentWillMount() {
		super.componentWillMount();
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
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
	 */
	componentUnmount() {
		super.componentUnmount();
	}

	/**
	 * Component will receive props
	 * @definition 		SWebComponent.componentWillReceiveProps
	 */
	componentWillReceiveProps(nextProps, previousProps) {
		if ( ! this._map) return;
		this._map.setOptions(nextProps);
	}

	/**
	 * Render the component
	 * Here goes the code that reflect the this.props state on the actual html element
	 * @definition 		SWebComponent.render
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
		this._map = new this._google.maps.Map(this._mapElm, this.props);
		// set the component as inited
		// used by the markers to init when the map is ok
		this.setAttribute('inited', true);
	}

	/**
	 * Access the google map instance
	 * @return 	{Map} 	The google map instance
	 */
	get map() {
		return this._map;
	}
}
