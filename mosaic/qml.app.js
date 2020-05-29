'use strict'
var log = null
var $manifest$author$email = "team@pureqml.com"
var $manifest$author$name = "PureQML Team"
var $manifest$author$organization = "PureQML"
var $manifest$author$site = "https://pureqml.com"
var $manifest$cssAutoClassificator = false
var $manifest$cssDisableTransformations = false
var $manifest$cssDisableTransitions = false
var $manifest$disableAnimations = false
var $manifest$domain = "com.pureqml.mosaicdemo"
var $manifest$expectRunContextEvent = false
var $manifest$html5$prefix = ""
var $manifest$log$disable = false
var $manifest$requireExplicitRecursiveVisibilityStyle = false
var $manifest$requireVerticalTextAlignmentStyle = false
var $manifest$resolutionHeight = 720
var $manifest$resolutionWidth = 1280
var $manifest$style$font$family = "Arial"
var $manifest$style$font$lineHeight = 1.2
var $manifest$style$font$pixelSize = 16
var $manifest$style$font$pointSize = 0
var $manifest$system$fingerprint = false
var $manifest$title = "mosaic"
var $manifest$trace$focus = false
var $manifest$trace$keys = false
var $manifest$trace$listeners = false
var $manifest$useNativeFocusForInput = true
var $manifest$virtual$height = 720
var $manifest$virtual$width = 1280
var qml = (function() {/** @const */
var exports = {};
/** @const */
var _globals = exports
if (!_globals.core) /** @const */ _globals.core = {}
var $core = _globals.core
if (!_globals.web) /** @const */ _globals.web = {}
var $web = _globals.web
if (!_globals.controls) /** @const */ _globals.controls = {}
var $controls = _globals.controls
if (!_globals.controls.core) /** @const */ _globals.controls.core = {}
var $controls$core = _globals.controls.core
if (!_globals.controls.mixins) /** @const */ _globals.controls.mixins = {}
var $controls$mixins = _globals.controls.mixins
if (!_globals.controls.pure) /** @const */ _globals.controls.pure = {}
var $controls$pure = _globals.controls.pure
if (!_globals.controls.experimental) /** @const */ _globals.controls.experimental = {}
var $controls$experimental = _globals.controls.experimental
if (!_globals.controls.web) /** @const */ _globals.controls.web = {}
var $controls$web = _globals.controls.web
if (!_globals.controls.web.api) /** @const */ _globals.controls.web.api = {}
var $controls$web$api = _globals.controls.web.api
if (!_globals.video) /** @const */ _globals.video = {}
var $video = _globals.video
if (!_globals.video.html5) /** @const */ _globals.video.html5 = {}
var $video$html5 = _globals.video.html5
if (!_globals.html5) /** @const */ _globals.html5 = {}
var $html5 = _globals.html5
if (!_globals.src) /** @const */ _globals.src = {}
var $src = _globals.src
_globals.core.core = (function() {/** @const */
var exports = _globals;
//=====[import core.core]=====================

//WARNING: no log() function usage before init.js

$core.device = 0
$core.vendor = ""
$core.__videoBackends = {}

if (typeof navigator !== 'undefined') {
	exports.core.os = navigator.platform
	exports.core.userAgent = navigator.userAgent
	exports.core.language = navigator.language
} else {
	exports.core.os = 'unknown'
	exports.core.userAgent = 'Unknown'
}

var _checkDevice = function(target, info) {
	if (exports.core.userAgent.indexOf(target) < 0)
		return

	exports.core.vendor = info.vendor
	exports.core.device = info.device
	exports.core.os = info.os
}

if (!exports.core.vendor) {
	_checkDevice('Blackberry', { 'vendor': 'blackberry', 'device': 2, 'os': 'blackberry' })
	_checkDevice('Android', { 'vendor': 'google', 'device': 2, 'os': 'android' })
	_checkDevice('iPhone', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
	_checkDevice('iPad', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
	_checkDevice('iPod', { 'vendor': 'apple', 'device': 2, 'os': 'iOS' })
}

if (exports.core.userAgent.indexOf('Chromium') >= 0)
	exports.core.browser = "Chromium"
else if (exports.core.userAgent.indexOf('Chrome') >= 0)
	exports.core.browser = "Chrome"
else if (exports.core.userAgent.indexOf('Opera') >= 0)
	exports.core.browser = "Opera"
else if (exports.core.userAgent.indexOf('Firefox') >= 0)
	exports.core.browser = "Firefox"
else if (exports.core.userAgent.indexOf('Safari') >= 0)
	exports.core.browser = "Safari"
else if (exports.core.userAgent.indexOf('MSIE') >= 0)
	exports.core.browser = "IE"
else if (exports.core.userAgent.indexOf('YaBrowser') >= 0)
	exports.core.browser = "Yandex"
else
	exports.core.browser = ''


_globals._backend = function() { return _globals.html5.html }
_globals.core.__locationBackend = function() { return _globals.html5.location }
_globals.core.__localStorageBackend = function() { return _globals.html5.localstorage }
_globals.core.__videoBackends.html5 = function() { return _globals.video.html5.backend }
_globals.core.__deviceBackend = function() { return _globals.web.device }

exports.core.keyCodes = {
	13: 'Select',
	16: 'Shift',
	17: 'Ctrl',
	18: 'LeftAlt',
	27: 'Back',
	37: 'Left',
	32: 'Space',
	33: 'PageUp',
	34: 'PageDown',
	36: 'Menu',
	38: 'Up',
	39: 'Right',
	40: 'Down',
	48: '0',
	49: '1',
	50: '2',
	51: '3',
	52: '4',
	53: '5',
	54: '6',
	55: '7',
	56: '8',
	57: '9',
	65: 'A',
	66: 'B',
	67: 'C',
	68: 'D',
	69: 'E',
	70: 'F',
	71: 'G',
	72: 'H',
	73: 'I',
	74: 'J',
	75: 'K',
	76: 'L',
	77: 'M',
	78: 'N',
	79: 'O',
	80: 'P',
	81: 'Q',
	82: 'R',
	83: 'S',
	84: 'T',
	85: 'U',
	86: 'V',
	87: 'W',
	88: 'X',
	89: 'Y',
	90: 'Z',
	112: 'Red',
	113: 'Green',
	114: 'Yellow',
	115: 'Blue',
	219: 'Red',     // [
	221: 'Green',   // ]
	186: 'Yellow',  // ;
	222: 'Blue',    // '
	230: 'RightAlt',
	187: 'VolumeUp',
	189: 'VolumeDown',
	191: 'Mute',
	// NumPad
	96: '0',
	97: '1',
	98: '2',
	99: '3',
	100: '4',
	101: '5',
	102: '6',
	103: '7',
	104: '8',
	105: '9',
	107: 'VolumeUp',
	109: 'VolumeDown',
	111: 'Mute',
}

exports.closeApp = function() {
	window.close()
}


if (!Function.prototype.bind) {
	Function.prototype.bind = function(oThis) {
		if (typeof this !== 'function') {
			throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
		}

		var aArgs = Array.prototype.slice.call(arguments, 1),
			fToBind = this,
			fNOP    = function() {},
			fBound  = function() {
				return fToBind.apply(this instanceof fNOP && oThis
					? this
					: oThis,
					aArgs.concat(Array.prototype.slice.call(arguments)))
			}

			fNOP.prototype = this.prototype;
			fBound.prototype = new fNOP();

			return fBound;
	}

	if (log === null) {
		//old webkits with no bind don't allow binding console.log
		log = function() {
			var line = ''
			for(var i = 0; i < arguments.length; ++i) {
				line += arguments[i] + ' '
			}
			console.log(line)
		}
	}
}

if (log === null)
	log = console.log.bind(console)

var colorTable = {
	'aliceblue':			'f0f8ff',
	'antiquewhite':			'faebd7',
	'aqua':					'00ffff',
	'aquamarine':			'7fffd4',
	'azure':				'f0ffff',
	'beige':				'f5f5dc',
	'bisque':				'ffe4c4',
	'black':				'000000',
	'blanchedalmond':		'ffebcd',
	'blue':					'0000ff',
	'blueviolet':			'8a2be2',
	'brown':				'a52a2a',
	'burlywood':			'deb887',
	'cadetblue':			'5f9ea0',
	'chartreuse':			'7fff00',
	'chocolate':			'd2691e',
	'coral':				'ff7f50',
	'cornflowerblue':		'6495ed',
	'cornsilk':				'fff8dc',
	'crimson':				'dc143c',
	'cyan':					'00ffff',
	'darkblue':				'00008b',
	'darkcyan':				'008b8b',
	'darkgoldenrod':		'b8860b',
	'darkgray':				'a9a9a9',
	'darkgreen':			'006400',
	'darkgrey':				'a9a9a9',
	'darkkhaki':			'bdb76b',
	'darkmagenta':			'8b008b',
	'darkolivegreen':		'556b2f',
	'darkorange':			'ff8c00',
	'darkorchid':			'9932cc',
	'darkred':				'8b0000',
	'darksalmon':			'e9967a',
	'darkseagreen':			'8fbc8f',
	'darkslateblue':		'483d8b',
	'darkslategray':		'2f4f4f',
	'darkslategrey':		'2f4f4f',
	'darkturquoise':		'00ced1',
	'darkviolet':			'9400d3',
	'deeppink':				'ff1493',
	'deepskyblue':			'00bfff',
	'dimgray':				'696969',
	'dimgrey':				'696969',
	'dodgerblue':			'1e90ff',
	'firebrick':			'b22222',
	'floralwhite':			'fffaf0',
	'forestgreen':			'228b22',
	'fuchsia':				'ff00ff',
	'gainsboro':			'dcdcdc',
	'ghostwhite':			'f8f8ff',
	'gold':					'ffd700',
	'goldenrod':			'daa520',
	'gray':					'808080',
	'grey':					'808080',
	'green':				'008000',
	'greenyellow':			'adff2f',
	'honeydew':				'f0fff0',
	'hotpink':				'ff69b4',
	'indianred':			'cd5c5c',
	'indigo':				'4b0082',
	'ivory':				'fffff0',
	'khaki':				'f0e68c',
	'lavender':				'e6e6fa',
	'lavenderblush':		'fff0f5',
	'lawngreen':			'7cfc00',
	'lemonchiffon':			'fffacd',
	'lightblue':			'add8e6',
	'lightcoral':			'f08080',
	'lightcyan':			'e0ffff',
	'lightgoldenrodyellow':	'fafad2',
	'lightgray':			'd3d3d3',
	'lightgreen':			'90ee90',
	'lightgrey':			'd3d3d3',
	'lightpink':			'ffb6c1',
	'lightsalmon':			'ffa07a',
	'lightseagreen':		'20b2aa',
	'lightskyblue':			'87cefa',
	'lightslategray':		'778899',
	'lightslategrey':		'778899',
	'lightsteelblue':		'b0c4de',
	'lightyellow':			'ffffe0',
	'lime':					'00ff00',
	'limegreen':			'32cd32',
	'linen':				'faf0e6',
	'magenta':				'ff00ff',
	'maroon':				'800000',
	'mediumaquamarine':		'66cdaa',
	'mediumblue':			'0000cd',
	'mediumorchid':			'ba55d3',
	'mediumpurple':			'9370db',
	'mediumseagreen':		'3cb371',
	'mediumslateblue':		'7b68ee',
	'mediumspringgreen':	'00fa9a',
	'mediumturquoise':		'48d1cc',
	'mediumvioletred':		'c71585',
	'midnightblue':			'191970',
	'mintcream':			'f5fffa',
	'mistyrose':			'ffe4e1',
	'moccasin':				'ffe4b5',
	'navajowhite':			'ffdead',
	'navy':					'000080',
	'oldlace':				'fdf5e6',
	'olive':				'808000',
	'olivedrab':			'6b8e23',
	'orange':				'ffa500',
	'orangered':			'ff4500',
	'orchid':				'da70d6',
	'palegoldenrod':		'eee8aa',
	'palegreen':			'98fb98',
	'paleturquoise':		'afeeee',
	'palevioletred':		'db7093',
	'papayawhip':			'ffefd5',
	'peachpuff':			'ffdab9',
	'peru':					'cd853f',
	'pink':					'ffc0cb',
	'plum':					'dda0dd',
	'powderblue':			'b0e0e6',
	'purple':				'800080',
	'red':					'ff0000',
	'rosybrown':			'bc8f8f',
	'royalblue':			'4169e1',
	'saddlebrown':			'8b4513',
	'salmon':				'fa8072',
	'sandybrown':			'f4a460',
	'seagreen':				'2e8b57',
	'seashell':				'fff5ee',
	'sienna':				'a0522d',
	'silver':				'c0c0c0',
	'skyblue':				'87ceeb',
	'slateblue':			'6a5acd',
	'slategray':			'708090',
	'slategrey':			'708090',
	'snow':					'fffafa',
	'springgreen':			'00ff7f',
	'steelblue':			'4682b4',
	'tan':					'd2b48c',
	'teal':					'008080',
	'thistle':				'd8bfd8',
	'tomato':				'ff6347',
	'turquoise':			'40e0d0',
	'violet':				'ee82ee',
	'wheat':				'f5deb3',
	'white':				'ffffff',
	'whitesmoke':			'f5f5f5',
	'yellow':				'ffff00',
	'yellowgreen':			'9acd32',
	'': 					'',
	'transparent': 			'0000'
}

var safeCallImpl = function(callback, self, args, onError) {
	try { return callback.apply(self, args) } catch(ex) { onError(ex) }
}

exports.core.safeCall = function(self, args, onError) {
	return function(callback) { return safeCallImpl(callback, self, args, onError) }
}

exports.core.assign = function(target, path, value) {
	var path = path.split('.')
	var n = path.length - 1
	for(var i = 0; i < n; ++i) {
		target = target[path[i]]
	}
	target[path[n]] = value
}

$core.getKeyCodeByName = function(key) {
	var codes = $core.keyCodes
	for (var i in codes) {
		if (codes[i] === key)
			return ~~i
	}
}

/* @const @type {!$core.CoreObject} */

/**
 * @constructor
 */

var CoreObjectComponent = $core.CoreObject = function(parent) {
	this._local = Object.create(parent? parent._local: null)
}

var CoreObjectComponentPrototype = CoreObjectComponent.prototype
CoreObjectComponentPrototype.componentName = 'core.CoreObject'
CoreObjectComponentPrototype.constructor = CoreObjectComponent

/** @private **/
CoreObjectComponentPrototype.$c = function() { }

/** @private **/
CoreObjectComponentPrototype.$s = function() { }

CoreObjectComponentPrototype.__init = function() {
	var c = {}
	this.$c(c)
	this.$s(c)
	this.completed()
}

/** @private **/
CoreObjectComponentPrototype.__complete = function() { /*do not add anything here, it must be empty (empty onCompleted optimisation)*/ }

///@private gets object by id
CoreObjectComponentPrototype._get = function(name, unsafe) {
	if (name in this) //do not remove in here, properties may contain undefined!
		return this[name]

	if (name in this._local)
		return this._local[name]

	if (unsafe)
		return null
	else
		throw new Error("invalid property requested: '" + name + "'")
}

/** @constructor */
var Color = $core.Color = function(value) {
	if (Array.isArray(value)) {
		this.r = value[0]
		this.g = value[1]
		this.b = value[2]
		this.a = value[3] !== undefined? value[3]: 255
		return
	}
	if (typeof value !== 'string')
	{
		this.r = this.b = this.a = 255
		this.g = 0
		log("invalid color specification: " + value, new Error().stack)
		return
	}
	var triplet
	if (value[0] === '#') {
		triplet = value.substring(1)
	} else if (value.substring(0, 4) === "rgba") {
		var b = value.indexOf('('), e = value.lastIndexOf(')')
		value = value.substring(b + 1, e).split(',')
		this.r = parseInt(value[0], 10)
		this.g = parseInt(value[1], 10)
		this.b = parseInt(value[2], 10)
		this.a = Math.floor(parseFloat(value[3]) * 255)
		return
	} else
		triplet = colorTable[value]

	if (!triplet) {
		this.r = this.b = this.a = 255
		this.g = 0
		log("invalid color specification: " + value, new Error().stack)
		return
	}

	var len = triplet.length;
	if (len === 3 || len === 4) {
		var r = parseInt(triplet[0], 16)
		var g = parseInt(triplet[1], 16)
		var b = parseInt(triplet[2], 16)
		var a = (len === 4)? parseInt(triplet[3], 16): 15
		this.r = (r << 4) | r;
		this.g = (g << 4) | g;
		this.b = (b << 4) | b;
		this.a = (a << 4) | a;
	} else if (len === 6 || len === 8) {
		this.r = parseInt(triplet.substring(0, 2), 16)
		this.g = parseInt(triplet.substring(2, 4), 16)
		this.b = parseInt(triplet.substring(4, 6), 16)
		this.a = (len === 8)? parseInt(triplet.substring(6, 8), 16): 255
	} else
		throw new Error("invalid color specification: " + value)
}

Color.interpolate = function(dst, src, t) {
	if (!(dst instanceof Color))
		dst = new Color(dst)
	if (!(src instanceof Color))
		src = new Color(src)

	var interpolate = function (dst, src, t) {
		return Math.floor(t * (dst - src) + src)
	}

	var r = interpolate(dst.r, src.r, t)
	var g = interpolate(dst.g, src.g, t)
	var b = interpolate(dst.b, src.b, t)
	var a = interpolate(dst.a, src.a, t)

	return new Color([r, g, b, a])
}

Color.normalize = function(spec) {
	if (spec instanceof Color)
		return spec
	else
		return (new Color(spec))
}

var ColorPrototype = Color.prototype
ColorPrototype.constructor = $core.Color
/** @const */

ColorPrototype.rgba = ColorPrototype.toString = function() {
	var a = this.a
	return a == 255?
		"rgb(" + this.r + "," + this.g + "," + this.b + ")":
		"rgba(" + this.r + "," + this.g + "," + this.b + "," + (a / 255) + ")";
}

var hexByte = function(v) {
	var h = (v >> 4) & 0x0f
	var l = (v) & 0x0f
	h += (h > 9)? 0x57: 0x30
	l += (l > 9)? 0x57: 0x30
	return String.fromCharCode(h, l)
}

ColorPrototype.hex = function() {
	return '#' + hexByte(this.r) + hexByte(this.g) + hexByte(this.b) + hexByte(this.a)
}

ColorPrototype.ahex = function() {
	return '#' + hexByte(this.a) + hexByte(this.r) + hexByte(this.g) + hexByte(this.b)
}

exports.addLazyProperty = function(proto, name, creator) {
	var get = function(object) {
		var properties = object.__properties
		var storage = properties[name]
		if (storage !== undefined) {
			if (storage.value === undefined)
				storage.value = creator(object)
			return storage
		}

		return properties[name] = new PropertyStorage(creator(object))
	}

	Object.defineProperty(proto, name, {
		get: function() {
			return get(this).value
		},

		set: function(newValue) {
			var storage = get(this)
			if (storage.forwardSet(this, name, newValue, null))
				return

			throw new Error('could not set lazy property ' + name + ' in ' + proto.componentName)
		},
		enumerable: true
	})
}

exports.addConstProperty = function(proto, name, getter) {
	Object.defineProperty(proto, name, {
		get: function() {
			return getter.call(this)
		},

		set: function(newValue) {
			throw new Error('could not set const property')
		},
		enumerable: true
	})
}

var PropertyStorage = function(value) {
	this.value = value
	this.onChanged = []
}
exports.PropertyStorage = PropertyStorage

var PropertyStoragePrototype = PropertyStorage.prototype

PropertyStoragePrototype.getAnimation = function(name, animation) {
	var a = this.animation
	return a && a.enabled() && !a._native && a._context._completed? a: null
}

PropertyStoragePrototype.__removeUpdater = function(callback) {
	var deps = this.deps
	for(var i = 0, n = deps.length; i < n; i += 2) {
		var object = deps[i]
		var name = deps[i + 1]
		object.removeOnChanged(name, callback)
	}
}

PropertyStoragePrototype.removeUpdater = function() {
	var oldCallback = this.callback
	if (oldCallback !== undefined) {
		this.__removeUpdater(oldCallback)
		this.deps = this.callback = undefined
	}
}

PropertyStoragePrototype.replaceUpdater = function(parent, callback, deps) {
	var oldCallback = this.callback
	if (oldCallback !== undefined)
		this.__removeUpdater(oldCallback)

	this.callback = callback
	this.deps = deps
	var connectOnChanged = parent.connectOnChanged
	for(var i = 0, n = deps.length; i < n; i += 2) {
		var object = deps[i]
		var name = deps[i + 1]
		connectOnChanged.call(parent, object, name, callback)
	}
	callback()
}

PropertyStoragePrototype.forwardSet = function(object, name, newValue, defaultValue) {
	var oldValue = this.getCurrentValue(defaultValue)
	if (oldValue !== null && (oldValue instanceof Object)) {
		//forward property update for mixins
		var forwardTarget = oldValue.defaultProperty
		if (forwardTarget === undefined)
			return false

		var forwardedOldValue = oldValue[forwardTarget]
		if (newValue !== forwardedOldValue) {
			oldValue[forwardTarget] = newValue
			this.callOnChanged(object, name, newValue, forwardedOldValue)
		}
		return true
	} else if (newValue instanceof Object) {
		//first assignment of mixin
		var forwardTarget = newValue.defaultProperty
		if (forwardTarget === undefined)
			return false

		object.connectOnChanged(newValue, forwardTarget, function(v, ov) {
			var storage = object.__properties[name]
			if (storage !== undefined)
				storage.callOnChanged(object, name, v, ov)
		})
		return false
	}
}

PropertyStoragePrototype.discard = function() {
	var animation = this.getAnimation()
	if (animation)
		animation.complete()
	this.onChanged = []
}

PropertyStoragePrototype.getSimpleValue = function(defaultValue) {
	var value = this.value
	return value !== undefined? value: defaultValue
}

PropertyStoragePrototype.getCurrentValue = function(defaultValue) {
	var value = this.interpolatedValue
	return value !== undefined? value: this.getSimpleValue(defaultValue)
}

PropertyStoragePrototype.setCurrentValue = function(object, name, newValue, defaultValue, callUpdate) {
	var oldValue = this.value
	this.interpolatedValue = undefined
	this.value = newValue
	if (callUpdate)
		this.callOnChanged(object, name, newValue, oldValue)
}

PropertyStoragePrototype.set = function(object, name, newValue, defaultValue, callUpdate) {
	var oldValue = this.value
	if (oldValue === undefined)
		oldValue = defaultValue

	if (oldValue === newValue)
		return
	if (this.forwardSet(object, name, newValue, defaultValue))
		return
	this.value = newValue
	if (callUpdate)
		this.callOnChanged(object, name, newValue, oldValue)
}

var _callOnChanged = function(object, name, value, handlers) {
	var protoCallbacks = object['__changed__' + name]
	var hasProtoCallbacks = protoCallbacks !== undefined
	var hasHandlers = handlers !== undefined

	if (!hasProtoCallbacks && !hasHandlers)
		return

	var invoker = $core.safeCall(object, [value], function(ex) { log("on " + name + " changed callback failed: ", ex, ex.stack) })

	if (hasProtoCallbacks)
		protoCallbacks.forEach(invoker)

	if (hasHandlers)
		handlers.forEach(invoker)
}

PropertyStoragePrototype.callOnChanged = function(object, name, value) {
	_callOnChanged(object, name, value, this.onChanged)
}

PropertyStoragePrototype.removeOnChanged = function(callback) {
	var handlers = this.onChanged
	var idx = handlers.indexOf(callback)
	if (idx >= 0)
		return handlers.splice(idx, 1)
}

var getDefaultValueForType = exports.getDefaultValueForType = function(type) {
	switch(type) {
		case 'enum': //fixme: add default value here
		case 'int':		return 0
		case 'bool':	return false
		case 'real':	return 0.0
		case 'string':	return ""
		case 'array':	return []
		case 'color':
		case 'Color':	return '#0000'
		default:		return (type[0].toUpperCase() === type[0])? null: undefined
	}
}

var convertTo = exports.convertTo = function(type, value) {
	switch(type) {
		case 'enum':
		case 'int':		return ~~value
		case 'bool':	return value? true: false
		case 'real':	return +value
		case 'string':	return String(value)
		default:		return value
	}
}

var getConvertFunction = exports.getConvertFunction = function(type) {
	switch(type) {
		case 'enum':
		case 'int':		return function(value) { return ~~value }
		case 'bool':	return function(value) { return value? true: false }
		case 'real':	return function(value) { return +value }
		case 'string':	return function(value) { return String(value) }
		default:		return function(value) { return value }
	}
}

var isTypeAnimable = function(type) {
	switch(type) {
		case 'int':
		case 'real':
		case 'color':
		case 'Color':
			return true;
		default:
			return false;
	}
}

exports.addProperty = function(proto, type, name, defaultValue) {
	var convert = getConvertFunction(type)
	var animable = isTypeAnimable(type)

	if (defaultValue !== undefined) {
		defaultValue = convert(defaultValue)
	} else {
		defaultValue = getDefaultValueForType(type)
	}

	var createStorage = function(newValue) {
		var properties = this.__properties
		var storage = properties[name]
		if (storage === undefined) { //no storage
			if (newValue === defaultValue) //value === defaultValue, no storage allocation
				return
			storage = properties[name] = new PropertyStorage(defaultValue)
		}
		return storage
	}

	var simpleGet = function() {
		var storage = this.__properties[name]
		return storage !== undefined? storage.getSimpleValue(defaultValue): defaultValue
	}

	var simpleSet = function(newValue) {
		newValue = convert(newValue)
		var storage = createStorage.call(this, newValue)
		if (storage === undefined)
			return

		storage.set(this, name, newValue, defaultValue, true)
	}

	var animatedGet = function() {
		var storage = this.__properties[name]
		return storage !== undefined?
			storage.getCurrentValue(defaultValue):
			defaultValue
	}

	var animatedSet = function(newValue) {
		newValue = convert(newValue)

		var storage = createStorage.call(this, newValue)
		if (storage === undefined)
			return

		var animation = storage.getAnimation()
		if (animation && storage.value !== newValue) {
			var context = this._context
			var backend = context.backend
			if (storage.frameRequest)
				backend.cancelAnimationFrame(storage.frameRequest)

			storage.started = Date.now()

			var src = storage.getCurrentValue(defaultValue)
			var dst = newValue

			var self = this

			var complete = function() {
				if (storage.frameRequest) {
					backend.cancelAnimationFrame(storage.frameRequest)
					storage.frameRequest = undefined
				}
				animation.complete = function() { }
				storage.interpolatedValue = undefined
				storage.started = undefined
				animation.running = false
				storage.callOnChanged(self, name, dst, src)
			}

			var duration = animation.duration

			var nextFrame = context.wrapNativeCallback(function() {
				var now = Date.now()
				var t = 1.0 * (now - storage.started) / duration
				if (t >= 1 || !animation.active()) {
					complete()
				} else {
					storage.interpolatedValue = convert(animation.interpolate(dst, src, t))
					storage.callOnChanged(self, name, storage.getCurrentValue(defaultValue), src)
					storage.frameRequest = backend.requestAnimationFrame(nextFrame)
				}
			})

			storage.frameRequest = backend.requestAnimationFrame(nextFrame)

			animation.running = true
			animation.complete = complete
		}
		storage.set(this, name, newValue, defaultValue, !animation)
		// if ((!animation || !animation.running) && newValue === defaultValue)
		// 	this.__properties[name] = undefined
	}

	Object.defineProperty(proto, name, {
		get: animable? animatedGet: simpleGet,
		set: animable? animatedSet: simpleSet,
		enumerable: true
	})
}

exports.addAliasProperty = function(object, name, getObject, srcProperty) {
	var target = getObject()
	object.connectOnChanged(target, srcProperty, function(value) {
		var storage = object.__properties[name]
		if (storage !== undefined)
			storage.callOnChanged(object, name, value)
		else
			_callOnChanged(object, name, value) //call prototype handlers
	})

	Object.defineProperty(object, name, {
		get: function() { return target[srcProperty] },
		set: function(value) { target[srcProperty] = value },
		enumerable: true
	})
}

$core.createSignal = function(name) {
	return function() {
		this.emitWithArgs(name, arguments)
	}
}
$core.createSignalForwarder = function(object, name) {
	return (function() {
		object.emitWithArgs(name, arguments)
	})
}

/** @constructor */
$core.EventBinder = function(target) {
	this.target = target
	this.callbacks = {}
	this.enabled = false
}

$core.EventBinder.prototype.on = function(event, callback) {
	if (event in this.callbacks)
		throw new Error('double adding of event (' + event + ')')
	this.callbacks[event] = callback
	if (this.enabled)
		this.target.on(event, callback)
}

$core.EventBinder.prototype.constructor = $core.EventBinder

$core.EventBinder.prototype.enable = function(value) {
	if (value != this.enabled) {
		var target = this.target
		this.enabled = value
		if (value) {
			for(var event in this.callbacks)
				target.on(event, this.callbacks[event])
		} else {
			for(var event in this.callbacks)
				target.removeListener(event, this.callbacks[event])
		}
	}
}

var protoEvent = function(prefix, proto, name, callback) {
	var sname = prefix + name
	//if property was in base prototype, create shallow copy and put our handler there or we would add to base prototype's array
	var storage = proto[sname]
	if (storage !== undefined) {
		var ownStorage = proto.hasOwnProperty(sname)
		if (ownStorage)
			storage.push(callback)
		else {
			var copy = storage.slice()
			copy.push(callback)
			proto[sname] = copy
		}
	} else
		proto[sname] = [callback]
}

$core._protoOn = function(proto, name, callback)
{ protoEvent('__on__', proto, name, callback) }

$core._protoOnChanged = function(proto, name, callback)
{ protoEvent('__changed__', proto, name, callback) }

$core._protoOnKey = function(proto, name, callback)
{ protoEvent('__key__', proto, name, callback) }

var ObjectEnumerator = function(callback) {
	this._callback = callback
	this._queue = []
	this.history = []
}

var ObjectEnumeratorPrototype = ObjectEnumerator.prototype
ObjectEnumeratorPrototype.constructor = ObjectEnumerator

ObjectEnumeratorPrototype.unshift = function() {
	var q = this._queue
	q.unshift.apply(q, arguments)
}

ObjectEnumeratorPrototype.push = function() {
	var q = this._queue
	q.push.apply(q, arguments)
}

ObjectEnumeratorPrototype.enumerate = function(root, arg) {
	var args = [this, arg]
	var queue = this._queue
	queue.unshift(root)
	while(queue.length) {
		var el = queue.shift()
		this.history.push(el)
		var r = this._callback.apply(el, args)
		if (r)
			break
	}
}

exports.forEach = function(root, callback, arg) {
	var oe = new ObjectEnumerator(callback)
	oe.enumerate(root, arg)
	return arg
}

exports.createObject = function(item) {
	item.__init()
	var parent = item.parent
	if ('_updateVisibilityForChild' in parent)
		parent._updateVisibilityForChild(item, parent.recursiveVisible)
	if ('_tryFocus' in parent)
		parent._tryFocus()
	item._context.scheduleComplete()
}

return exports;
} )()
//========================================

/** @const @type {!CoreObject} */
var core = _globals.core.core


//=====[component core.EventEmitter]=====================

	var EventEmitterBaseComponent = $core.CoreObject
	var EventEmitterBasePrototype = EventEmitterBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.CoreObject}
 */
	var EventEmitterComponent = $core.EventEmitter = function(parent, row) {
		EventEmitterBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._eventHandlers = {}
		this._onConnections = []
	}

	}
	var EventEmitterPrototype = EventEmitterComponent.prototype = Object.create(EventEmitterBasePrototype)

	EventEmitterPrototype.constructor = EventEmitterComponent

	EventEmitterPrototype.componentName = 'core.EventEmitter'
	EventEmitterPrototype.discard = function() {
		this.removeAllOn()
		for(var name in this._eventHandlers)
			this.removeAllListeners(name)
	}
	EventEmitterPrototype.removeAllOn = function() {
		var connections = this._onConnections
		for(var i = 0, n = connections.length; i < n; i += 3)
			connections[i].removeListener(connections[i + 1], connections[i + 2])
		this._onConnections = []
	}
	EventEmitterPrototype.removeAllListeners = function(name) {
		delete this._eventHandlers[name]
	}
	EventEmitterPrototype.emit = function(name) {
		if (name === '')
			throw new Error('empty listener name')

		var proto_callback = this['__on__' + name]
		var handlers = this._eventHandlers[name]

		if (proto_callback === undefined && handlers === undefined)
			return

		
		/* COPY_ARGS(args, 1) */
		var $n = arguments.length
		var args = new Array($n - 1)
		var $d = 0, $s = 1;
		while($s < $n) {
			args[$d++] = arguments[$s++]
		}


		var invoker = $core.safeCall(
			this, args,
			function(ex) { log("event/signal " + name + " handler failed:", ex, ex.stack) }
		)

		if (proto_callback !== undefined)
			proto_callback.forEach(invoker)

		if (handlers !== undefined)
			handlers.forEach(invoker)
	}
	EventEmitterPrototype.emitWithArgs = function(name,args) {
		if (name === '')
			throw new Error('empty listener name')

		var proto_callback = this['__on__' + name]
		var handlers = this._eventHandlers[name]

		if (proto_callback === undefined && handlers === undefined)
			return

		var invoker = $core.safeCall(
			this, args,
			function(ex) { log("event/signal " + name + " handler failed:", ex, ex.stack) }
		)

		if (proto_callback !== undefined)
			proto_callback.forEach(invoker)

		if (handlers !== undefined)
			handlers.forEach(invoker)
	}
	EventEmitterPrototype.removeListener = function(name,callback) {
		if (!(name in this._eventHandlers) || callback === undefined || callback === null || name === '') {
			if ($manifest$trace$listeners)
				log('invalid removeListener(' + name + ', ' + callback + ') invocation', new Error().stack)
			return
		}

		var handlers = this._eventHandlers[name]
		var idx = handlers.indexOf(callback)
		if (idx >= 0)
			handlers.splice(idx, 1)
		else if ($manifest$trace$listeners)
			log('failed to remove listener for', name, 'from', this)

		if (!handlers.length)
			this.removeAllListeners(name)
	}
	EventEmitterPrototype.on = function(name,callback) {
		if (name === '')
			throw new Error('empty listener name')

		var storage = this._eventHandlers
		var handlers = storage[name]
		if (handlers !== undefined)
			handlers.push(callback)
		else {
			storage[name] = [callback]
		}
	}
	EventEmitterPrototype.connectOn = function(target,name,callback) {
		target.on(name, callback)
		this._onConnections.push(target, name, callback)
	}

	EventEmitterPrototype.$c = function($c) {
		var $this = this;
		EventEmitterBasePrototype.$c.call(this, $c.$b = { })

	}
	EventEmitterPrototype.$s = function($c) {
		var $this = this;
	EventEmitterBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Object]=====================

	var ObjectBaseComponent = $core.EventEmitter
	var ObjectBasePrototype = ObjectBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.EventEmitter}
 */
	var ObjectComponent = $core.Object = function(parent, row) {
		ObjectBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.parent = parent
		this.children = []
		this.__properties = {}
		this.__attachedObjects = []
		if (parent)
			parent.__attachedObjects.push(this)

		var context = this._context = parent? parent._context: null
		if (row) {
			var local = this._local
			local.model = row
			local._delegate = this
		}
		this._changedConnections = []
		this._properties = {}
	}

	}
	var ObjectPrototype = ObjectComponent.prototype = Object.create(ObjectBasePrototype)

	{
		ObjectPrototype._propertyToStyle = {
			width: 'width', height: 'height',
			x: 'left', y: 'top', viewX: 'left', viewY: 'top',
			opacity: 'opacity',
			border: 'border',
			radius: 'border-radius',
			rotate: 'transform',
			boxshadow: 'box-shadow',
			transform: 'transform',
			visible: 'visibility', visibleInView: 'visibility',
			background: 'background',
			color: 'color',
			backgroundImage: 'background-image',
			font: 'font'
		}
	}

	ObjectPrototype.constructor = ObjectComponent

	ObjectPrototype.componentName = 'core.Object'
	ObjectPrototype.completed = function() {
		if (this.__complete !== $core.CoreObject.prototype.__complete && this._registerDelayedAction('complete'))
			this._context.__onCompleted(this)
	}
	ObjectPrototype.discard = function() {
		this.removeAllOnChanged()

		var attached = this.__attachedObjects
		this.__attachedObjects = []
		attached.forEach(function(child) { child.discard() })

		var parent = this.parent
		if (parent) {
			var discardIdx = parent.__attachedObjects.indexOf(this)
			if (discardIdx >= 0)
				parent.__attachedObjects.splice(discardIdx, 1)
		}

		this.children = []

		this.parent = null
		this._local = {}

		var properties = this.__properties
		for(var name in properties) //fixme: it was added once, then removed, is it needed at all? it double-deletes callbacks
			properties[name].discard()
		this._properties = {}

		$core.EventEmitter.prototype.discard.apply(this)
	}
	ObjectPrototype.removeAllOnChanged = function() {
		var connections = this._changedConnections
		for(var i = 0, n = connections.length; i < n; i += 3)
			connections[i].removeOnChanged(connections[i + 1], connections[i + 2])
		this._changedConnections = []
	}
	ObjectPrototype.getComponentPath = function() {
		var path = []
		var self = this
		while(self) {
			var name = self.componentName
			if (self.parent) {
				var idx = self.parent.children.indexOf(self)
				if (idx >= 0)
					name += '@' + idx
			}
			path.unshift(name)
			self = self.parent
		}
		return path.join(" → ")
	}
	ObjectPrototype._tryFocus = function() { return false }
	ObjectPrototype.addChild = function(child) {
		this.children.push(child);
	}
	ObjectPrototype.removeChild = function(child) {
		var children = this.children
		var idx = children.indexOf(child)
		if (idx >= 0)
			children.splice(idx, 1)
	}
	ObjectPrototype._cancelDelayedAction = function(name) {
		this._registeredDelayedActions[name] = false
	}
	ObjectPrototype._setId = function(name) {
		var p = this;
		while(p) {
			p._local[name] = this;
			p = p.parent;
		}
	}
	ObjectPrototype._registerDelayedAction = function(name) {
		var registry = this._registeredDelayedActions

		if (registry === undefined)
			registry = this._registeredDelayedActions = {}

		if (registry[name] === true)
			return false

		registry[name] = true
		return true
	}
	ObjectPrototype.resetAnimation = function(name) {
		var storage = this.__properties[name]
		if (storage !== undefined && storage.animation) {
			var animation = storage.animation
			animation.disable()
			var target = animation.target
			animation.target = target
			storage.animation = null
			animation.enable() //fixme: enabling without target to avoid installing native animation
			animation.target = target
		}
	}
	ObjectPrototype._removeUpdater = function(name) {
		var storage = this.__properties[name]
		if (storage !== undefined)
			storage.removeUpdater()
	}
	ObjectPrototype.updateAnimation = function(name,animation) {
		this._context.backend.setAnimation(this, name, animation)
	}
	ObjectPrototype.setAnimation = function(name,animation) {
	var context = this._get('context', true)

		if ($manifest$disableAnimations)
			return

		if (animation === null)
			return this.resetAnimation(name)

		var context = this._context
		var backend = context.backend
		if (name === 'contentX' || name === 'contentY')
			log('WARNING: you\'re trying to animate contentX/contentY property, this will always use animation frames, ignoring CSS transitions, please use content.x/content.y instead')

		animation.target = this
		animation.property = name
		var storage = this._createPropertyStorage(name)
		storage.animation = animation
		if (backend.setAnimation(this, name, animation))
			animation._native = true
	}
	ObjectPrototype.removeOnChanged = function(name,callback) {
		var storage = this.__properties[name]
		var removed
		if (storage !== undefined)
			removed = storage.removeOnChanged(callback)

		if ($manifest$trace$listeners && !removed)
			log('failed to remove changed listener for', name, 'from', this)
	}
	ObjectPrototype.onChanged = function(name,callback) {
		var storage = this._createPropertyStorage(name)
		storage.onChanged.push(callback)
	}
	ObjectPrototype._replaceUpdater = function(name,callback,deps) {
		this._createPropertyStorage(name).replaceUpdater(this, callback, deps)
	}
	ObjectPrototype._setProperty = function(name,value) {
		//cancel any running software animations
		var storage = this._createPropertyStorage(name, value)
		var animation = storage.animation
		if (animation !== undefined)
			animation.disable()
		storage.setCurrentValue(this, null, value)
		if (animation !== undefined)
			animation.enable()
	}
	ObjectPrototype._createPropertyStorage = function(name,value) {
		var storage = this.__properties[name]
		if (storage !== undefined)
			return storage

		return this.__properties[name] = new $core.core.PropertyStorage(value)
	}
	ObjectPrototype.connectOnChanged = function(target,name,callback) {
		target.onChanged(name, callback)
		this._changedConnections.push(target, name, callback)
	}

	ObjectPrototype.$c = function($c) {
		var $this = this;
		ObjectBasePrototype.$c.call(this, $c.$b = { })

	}
	ObjectPrototype.$s = function($c) {
		var $this = this;
	ObjectBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.web.api.Rest]=====================

	var RestBaseComponent = $core.Object
	var RestBasePrototype = RestBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var RestComponent = $controls$web$api.Rest = function(parent, row) {
		RestBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._methods = {}
	}

	}
	var RestPrototype = RestComponent.prototype = Object.create(RestBasePrototype)

	RestPrototype.constructor = RestComponent

	RestPrototype.componentName = 'controls.web.api.Rest'
	RestPrototype.internetConnectionLost = $core.createSignal('internetConnectionLost')
	RestPrototype.error = $core.createSignal('error')
	core.addProperty(RestPrototype, 'string', 'baseUrl')
	RestPrototype.args = function(args) {
		return args
	}
	RestPrototype.headers = function(headers) {
	}
	RestPrototype.call = function(name,callback,error,method,data,head) {
		if (name.indexOf('://') < 0) {
			var baseUrl = this.baseUrl
			if (baseUrl[baseUrl.length - 1] === '/' || name[0] === '/')
				name = baseUrl + name
			else
				name = baseUrl + '/' + name
		}
		this._call(name, callback, error, method, JSON.stringify(data), head)
	}
	RestPrototype._call = function(name,callback,error,method,data,head) {
	var apiRequest = this._get('apiRequest', true)

		var headers = head || {}

		if (data) {
			data = this.args(data)
			headers["Content-Type"] = "application/json"
		}

		var newHeaders = this.headers(headers)
		if (newHeaders !== undefined)
			headers = newHeaders

		var url = name
		var self = this

		apiRequest.ajax({
			method: method || "GET",
			headers: headers,
			contentType: 'application/json',
			url: url,
			data: data,
			done: function(res) {
				if (res.target && res.target.status >= 400) {
					log("Error in request", res)
					if (error)
						error(res)
					self.error({"url": url, "method": method, "response": res})
					return
				}

				var text = res.target.responseText
				if (!text) {
					callback("")
					return
				}
				var res
				try {
					res = JSON.parse(text)
				} catch (e) {
					res = text
				}
				callback(res)
			},
			error: function(res) {
				if (error)
					error(res)
				self.error({"url": url, "method": method, "response": res})
			}
		})
	}
	RestPrototype._registerMethod = function(name,method) {
	var api = this._get('api', true)

		if (!name)
			return

		var api = this
		this[name] = function() {
			method.call(api, arguments)
		}
	}
	$core._protoOn(RestPrototype, 'error', function(url,method,response) {
		if ((typeof window !== 'undefined' && !window.navigator.onLine) || response && response.target && response.target.status === 0 && response.target.response === "") {
			this.internetConnectionLost({ "url": url, "method": method, "response": response })
		}
	})

	RestPrototype.$c = function($c) {
		var $this = this;
		RestBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new $core.Request($this)
		$c._this$child0 = _this$child0

//creating component Request
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('apiRequest')
		$this.addChild(_this$child0)
	}
	RestPrototype.$s = function($c) {
		var $this = this;
	RestBasePrototype.$s.call(this, $c.$b); delete $c.$b
//setting up component Request
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0


			_this$child0.completed()

			$this.completed()
}


//=====[component src.AppApi]=====================

	var AppApiBaseComponent = $controls$web$api.Rest
	var AppApiBasePrototype = AppApiBaseComponent.prototype

/**
 * @constructor
 * @extends {$controls$web$api.Rest}
 */
	var AppApiComponent = $src.AppApi = function(parent, row) {
		AppApiBaseComponent.apply(this, arguments)

	}
	var AppApiPrototype = AppApiComponent.prototype = Object.create(AppApiBasePrototype)

	AppApiPrototype.constructor = AppApiComponent

	AppApiPrototype.componentName = 'src.AppApi'
	core.addProperty(AppApiPrototype, 'string', 'apiKey', ("a20b12b279f744f2b3c7b5c5400c4eb5"))

	AppApiPrototype.$c = function($c) {
		var $this = this;
		AppApiBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new $controls$web$api.Method($this)
		$c._this$child0 = _this$child0

//creating component Method
		_this$child0.$c($c.$c$_this$child0 = { })

		$this.addChild(_this$child0)
	}
	AppApiPrototype.$s = function($c) {
		var $this = this;
	AppApiBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning baseUrl to ("https://api.start.ru")
			$this._removeUpdater('baseUrl'); $this.baseUrl = ("https://api.start.ru");

//setting up component Method
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning path to ("/web/main?apikey=" + ${parent.apiKey})
			_this$child0._replaceUpdater('path', function() { _this$child0.path = ("/web/main?apikey=" + _this$child0.parent.apiKey) }, [_this$child0.parent,'apiKey'])
//assigning name to ("getMain")
			_this$child0._removeUpdater('name'); _this$child0.name = ("getMain");

			_this$child0.completed()

			$this.completed()
}


//=====[component core.System]=====================

	var SystemBaseComponent = $core.Object
	var SystemBasePrototype = SystemBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var SystemComponent = $core.System = function(parent, row) {
		SystemBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.vendor = $core.vendor
		this.device = $core.device
		this.os = $core.os

		this.browser = $core.browser
		this.userAgent = $core.userAgent
		this.language = $core.language

		var ctx = this._context
		ctx.language = this.language.replace('-', '_')
		this.webkit = this.userAgent.toLowerCase().indexOf('webkit') >= 0

		this.support3dTransforms = ctx.backend.capabilities.csstransforms3d || false
		this.supportTransforms = ctx.backend.capabilities.csstransforms || false
		this.supportTransitions = ctx.backend.capabilities.csstransitions || false

		this.resolutionWidth = $manifest$resolutionWidth
		this.resolutionHeight = $manifest$resolutionHeight
	}

	}
	var SystemPrototype = SystemComponent.prototype = Object.create(SystemBasePrototype)

	SystemPrototype.constructor = SystemComponent

	SystemPrototype.componentName = 'core.System'
	core.addProperty(SystemPrototype, 'string', 'userAgent')
	core.addProperty(SystemPrototype, 'string', 'language')
	core.addProperty(SystemPrototype, 'string', 'browser')
	core.addProperty(SystemPrototype, 'string', 'vendor')
	core.addProperty(SystemPrototype, 'string', 'os')
	core.addProperty(SystemPrototype, 'bool', 'webkit')
	core.addProperty(SystemPrototype, 'bool', 'support3dTransforms')
	core.addProperty(SystemPrototype, 'bool', 'supportTransforms')
	core.addProperty(SystemPrototype, 'bool', 'supportTransitions')
	core.addProperty(SystemPrototype, 'bool', 'portrait')
	core.addProperty(SystemPrototype, 'bool', 'landscape')
	core.addProperty(SystemPrototype, 'bool', 'pageActive', (true))
	core.addProperty(SystemPrototype, 'int', 'screenWidth')
	core.addProperty(SystemPrototype, 'int', 'screenHeight')
	core.addProperty(SystemPrototype, 'int', 'contextWidth')
	core.addProperty(SystemPrototype, 'int', 'contextHeight')
	core.addProperty(SystemPrototype, 'int', 'resolutionWidth')
	core.addProperty(SystemPrototype, 'int', 'resolutionHeight')
	core.addProperty(SystemPrototype, 'bool', 'virtualKeyboard')
/** @const @type {number} */
	SystemPrototype.Desktop = 0
/** @const @type {number} */
	SystemComponent.Desktop = 0
/** @const @type {number} */
	SystemPrototype.Tv = 1
/** @const @type {number} */
	SystemComponent.Tv = 1
/** @const @type {number} */
	SystemPrototype.Mobile = 2
/** @const @type {number} */
	SystemComponent.Mobile = 2
	core.addProperty(SystemPrototype, 'enum', 'device')
/** @const @type {number} */
	SystemPrototype.MobileS = 0
/** @const @type {number} */
	SystemComponent.MobileS = 0
/** @const @type {number} */
	SystemPrototype.MobileM = 1
/** @const @type {number} */
	SystemComponent.MobileM = 1
/** @const @type {number} */
	SystemPrototype.MobileL = 2
/** @const @type {number} */
	SystemComponent.MobileL = 2
/** @const @type {number} */
	SystemPrototype.Tablet = 3
/** @const @type {number} */
	SystemComponent.Tablet = 3
/** @const @type {number} */
	SystemPrototype.Laptop = 4
/** @const @type {number} */
	SystemComponent.Laptop = 4
/** @const @type {number} */
	SystemPrototype.LaptopL = 5
/** @const @type {number} */
	SystemComponent.LaptopL = 5
/** @const @type {number} */
	SystemPrototype.Laptop4K = 6
/** @const @type {number} */
	SystemComponent.Laptop4K = 6
	core.addProperty(SystemPrototype, 'enum', 'layoutType')
	SystemPrototype._updateLayoutType = function() {
		if (!this.contextWidth || !this.contextHeight)
			return
		var min = this.contextWidth;// < this.contextHeight ? this.contextWidth : this.contextHeight

		if (min <= 320)
			this.layoutType = this.MobileS
		else if (min <= 375)
			this.layoutType = this.MobileM
		else if (min <= 425)
			this.layoutType = this.MobileL
		else if (min <= 768)
			this.layoutType = this.Tablet
		else if (this.contextWidth <= 1024)
			this.layoutType = this.Laptop
		else if (this.contextWidth <= 1440)
			this.layoutType = this.LaptopL
		else
			this.layoutType = this.Laptop4K
	}
	var $code$0 = function(value) { this._updateLayoutType() }
	$core._protoOnChanged(SystemPrototype, 'contextHeight', $code$0)
	$core._protoOnChanged(SystemPrototype, 'contextWidth', $code$0)

	SystemPrototype.$c = function($c) {
		var $this = this;
		SystemBasePrototype.$c.call(this, $c.$b = { })

	}
	SystemPrototype.$s = function($c) {
		var $this = this;
	SystemBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning portrait to (${parent.width} < ${parent.height})
			$this._replaceUpdater('portrait', function() { $this.portrait = ($this.parent.width < $this.parent.height) }, [$this.parent,'height',$this.parent,'width'])
//assigning contextWidth to (${context.width})
			$this._replaceUpdater('contextWidth', function() { $this.contextWidth = ($this._context.width) }, [$this._context,'width'])
//assigning virtualKeyboard to (${device} === _globals.core.System.prototype.Tv || ${device} === _globals.core.System.prototype.Mobile)
			$this._replaceUpdater('virtualKeyboard', function() { $this.virtualKeyboard = ($this.device === _globals.core.System.prototype.Tv || $this.device === _globals.core.System.prototype.Mobile) }, [$this,'device'])
//assigning landscape to (! ${portrait})
			$this._replaceUpdater('landscape', function() { $this.landscape = (! $this.portrait) }, [$this,'portrait'])
//assigning contextHeight to (${context.height})
			$this._replaceUpdater('contextHeight', function() { $this.contextHeight = ($this._context.height) }, [$this._context,'height'])

			$this.completed()
}


//=====[component core.Shadow]=====================

	var ShadowBaseComponent = $core.Object
	var ShadowBasePrototype = ShadowBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var ShadowComponent = $core.Shadow = function(parent, row) {
		ShadowBaseComponent.apply(this, arguments)

	}
	var ShadowPrototype = ShadowComponent.prototype = Object.create(ShadowBasePrototype)

	ShadowPrototype.constructor = ShadowComponent

	ShadowPrototype.componentName = 'core.Shadow'
	core.addProperty(ShadowPrototype, 'real', 'x')
	core.addProperty(ShadowPrototype, 'real', 'y')
	core.addProperty(ShadowPrototype, 'color', 'color', ("black"))
	core.addProperty(ShadowPrototype, 'real', 'blur')
	core.addProperty(ShadowPrototype, 'real', 'spread')
	ShadowPrototype._empty = function() {
		return !this.x && !this.y && !this.blur && !this.spread;
	}
	ShadowPrototype._getFilterStyle = function() {
		var style = this.x + "px " + this.y + "px " + this.blur + "px "
		if (this.spread > 0)
			style += this.spread + "px "
		style += $core.Color.normalize(this.color)
		return style
	}
	var $code$0 = function(value) {
		this.parent._updateStyle(true)
	}
	$core._protoOnChanged(ShadowPrototype, 'x', $code$0)
	$core._protoOnChanged(ShadowPrototype, 'spread', $code$0)
	$core._protoOnChanged(ShadowPrototype, 'y', $code$0)
	$core._protoOnChanged(ShadowPrototype, 'blur', $code$0)
	$core._protoOnChanged(ShadowPrototype, 'color', $code$0)

	ShadowPrototype.$c = function($c) {
		var $this = this;
		ShadowBasePrototype.$c.call(this, $c.$b = { })

	}
	ShadowPrototype.$s = function($c) {
		var $this = this;
	ShadowBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Item]=====================

	var ItemBaseComponent = $core.Object
	var ItemBasePrototype = ItemBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var ItemComponent = $core.Item = function(parent, row) {
		ItemBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._pressedHandlers = {}
		this._topPadding = 0
		if (parent) {
			if (this.element)
				throw new Error('double ctor call')

			this._createElement(this.getTag(), this.getClass())
		} //no parent == top level element, skip
	}

	}
	var ItemPrototype = ItemComponent.prototype = Object.create(ItemBasePrototype)

	ItemPrototype.constructor = ItemComponent

	ItemPrototype.componentName = 'core.Item'
	ItemPrototype.anchorsMarginsUpdated = $core.createSignal('anchorsMarginsUpdated')
	ItemPrototype.newBoundingBox = $core.createSignal('newBoundingBox')
	core.addProperty(ItemPrototype, 'int', 'x')
	core.addProperty(ItemPrototype, 'int', 'y')
	core.addProperty(ItemPrototype, 'int', 'z')
	core.addProperty(ItemPrototype, 'int', 'width')
	core.addProperty(ItemPrototype, 'int', 'height')
	core.addProperty(ItemPrototype, 'bool', 'clip')
	core.addLazyProperty(ItemPrototype, 'radius', (function(__parent, __row) {
		var lazy$radius = new $core.Radius(__parent, __row)
		var $c = { lazy$radius : lazy$radius }

//creating component Radius
			lazy$radius.$c($c.$c$lazy$radius = { })


//setting up component Radius
			var lazy$radius = $c.lazy$radius
			lazy$radius.$s($c.$c$lazy$radius)
			delete $c.$c$lazy$radius


			lazy$radius.completed()

		return lazy$radius
}))
	core.addProperty(ItemPrototype, 'bool', 'focus')
	core.addProperty(ItemPrototype, 'bool', 'focused')
	core.addProperty(ItemPrototype, 'bool', 'activeFocus')
	core.addProperty(ItemPrototype, 'Item', 'focusedChild')
	core.addProperty(ItemPrototype, 'bool', 'visible', (true))
	core.addProperty(ItemPrototype, 'bool', 'visibleInView', (true))
	core.addProperty(ItemPrototype, 'bool', 'recursiveVisible', (false))
	core.addProperty(ItemPrototype, 'real', 'opacity', (1))
	core.addLazyProperty(ItemPrototype, 'anchors', (function(__parent, __row) {
		var lazy$anchors = new $core.Anchors(__parent, __row)
		var $c = { lazy$anchors : lazy$anchors }

//creating component Anchors
			lazy$anchors.$c($c.$c$lazy$anchors = { })


//setting up component Anchors
			var lazy$anchors = $c.lazy$anchors
			lazy$anchors.$s($c.$c$lazy$anchors)
			delete $c.$c$lazy$anchors


			lazy$anchors.completed()

		return lazy$anchors
}))
	core.addLazyProperty(ItemPrototype, 'effects', (function(__parent, __row) {
		var lazy$effects = new $core.Effects(__parent, __row)
		var $c = { lazy$effects : lazy$effects }

//creating component Effects
			lazy$effects.$c($c.$c$lazy$effects = { })


//setting up component Effects
			var lazy$effects = $c.lazy$effects
			lazy$effects.$s($c.$c$lazy$effects)
			delete $c.$c$lazy$effects


			lazy$effects.completed()

		return lazy$effects
}))
	core.addLazyProperty(ItemPrototype, 'transform', (function(__parent, __row) {
		var lazy$transform = new $core.Transform(__parent, __row)
		var $c = { lazy$transform : lazy$transform }

//creating component Transform
			lazy$transform.$c($c.$c$lazy$transform = { })


//setting up component Transform
			var lazy$transform = $c.lazy$transform
			lazy$transform.$s($c.$c$lazy$transform)
			delete $c.$c$lazy$transform


			lazy$transform.completed()

		return lazy$transform
}))
	core.addProperty(ItemPrototype, 'bool', 'cssTranslatePositioning')
	core.addProperty(ItemPrototype, 'bool', 'cssNullTranslate3D')
	core.addProperty(ItemPrototype, 'bool', 'cssDelegateAlwaysVisibleOnAcceleratedSurfaces', (true))
	core.addProperty(ItemPrototype, 'bool', 'cssPointerTouchEvents', (false))
	core.addConstProperty(ItemPrototype, 'left', function() { return [this, 0]; })
	core.addConstProperty(ItemPrototype, 'top', function() { return [this, 1]; })
	core.addConstProperty(ItemPrototype, 'right', function() { return [this, 2]; })
	core.addConstProperty(ItemPrototype, 'bottom', function() { return [this, 3]; })
	core.addConstProperty(ItemPrototype, 'horizontalCenter', function() { return [this, 4]; })
	core.addConstProperty(ItemPrototype, 'verticalCenter', function() { return [this, 5]; })
	core.addProperty(ItemPrototype, 'int', 'viewX')
	core.addProperty(ItemPrototype, 'int', 'viewY')
	core.addProperty(ItemPrototype, 'int', 'keyProcessDelay')
	ItemPrototype.discard = function() {
		$core.Object.prototype.discard.apply(this)
		this.focusedChild = null
		this._pressedHandlers = {}
		if (this.element)
			this.element.discard()
	}
	ItemPrototype._tryFocus = function() {
		if (!this.visible)
			return false

		if (this.focusedChild && this.focusedChild._tryFocus())
			return true

		var children = this.children
		for(var i = 0; i < children.length; ++i) {
			var child = children[i]
			if (child._tryFocus()) {
				this._focusChild(child)
				return true
			}
		}
		return this.focus
	}
	ItemPrototype.setFocus = function() {
		this.forceActiveFocus()
	}
	ItemPrototype._updateStyle = function() {
		var element = this.element
		if (element)
			element.updateStyle()
	}
	ItemPrototype.toScreen = function() {
		var item = this
		var x = 0, y = 0
		var w = this.width + (this._borderWidthAdjust || 0) + (this._borderInnerWidthAdjust || 0)
		var h = this.height + (this._borderHeightAdjust || 0) + (this._borderInnerHeightAdjust || 0)

		while(item) {
			x += item.x + item.viewX + (item._borderXAdjust || 0)
			y += item.y + item.viewY + (item._borderYAdjust || 0)
			if (item.hasOwnProperty('view')) {
				var content = item.view.content
				x += content.x
				y += content.y
			}
			item = item.parent
		}
		return [x, y, x + w, y + h, x + w / 2, y + h / 2];
	}
	ItemPrototype.hasActiveFocus = function() {
		var item = this
		while(item.parent) {
			if (item.parent.focusedChild != item)
				return false

			item = item.parent
		}
		return true
	}
	ItemPrototype.forceActiveFocus = function() {
		var item = this
		while(item.parent) {
			item.parent._focusChild(item);
			item = item.parent;
		}
		if (this._tryFocus())
			this._propagateFocusToParents()
	}
	ItemPrototype._propagateFocusToParents = function() {
		var item = this;
		while(item.parent && (!item.parent.focusedChild || !item.parent.focusedChild.visible)) {
			item.parent._focusChild(item)
			item = item.parent
		}
	}
	ItemPrototype._updateVisibility = function() {
		var visible = this.visible && this.visibleInView

		var updateStyle = true
		var view = this.view
		if (view !== undefined) {
			var content = view.content
			//do not update real style for individual delegate in case of hardware accelerated surfaces
			//it may trigger large invisible repaints
			//consider this as default in the future.
			if (content.cssDelegateAlwaysVisibleOnAcceleratedSurfaces && (content.cssTranslatePositioning || content.cssNullTranslate3D) && !$manifest$cssDisableTransformations)
				updateStyle = false
		}

		if (updateStyle)
			this.style('visibility', visible? 'inherit': 'hidden')

		this.recursiveVisible = visible && (this.parent !== null? this.parent.recursiveVisible: true)
	}
	ItemPrototype._setSizeAdjust = function() {
		var x = this.x + this.viewX + (this._borderXAdjust || 0)
		var y = this.y + this.viewY + (this._borderYAdjust || 0)

		if (this.cssTranslatePositioning && !$manifest$cssDisableTransformations) {
			this.transform.translateX = x
			this.transform.translateY = y
		} else {
			this.style('left', x)
			this.style('top', y)
		}
		this.newBoundingBox()
	}
	ItemPrototype.getClass = function() { return '' }
	ItemPrototype.getTag = function() { return 'div' }
	ItemPrototype._focusTree = function(active) {
		this.activeFocus = active;
		if (this.focusedChild)
			this.focusedChild._focusTree(active);
	}
	ItemPrototype.addChild = function(child) {
		$core.Object.prototype.addChild.apply(this, arguments)
		if (child._tryFocus())
			child._propagateFocusToParents()
	}
	ItemPrototype._focusChild = function(child) {
		if (child.parent !== this)
			throw new Error('invalid object passed as child')
		if (this.focusedChild === child)
			return
		if (this.focusedChild) {
			this.focusedChild._focusTree(false)
			this.focusedChild.focused = false
		}
		this.focusedChild = child
		if (this.focusedChild) {
			this.focusedChild._focusTree(this.hasActiveFocus())
			this.focusedChild.focused = true
		}
	}
	ItemPrototype.focusChild = function(child) {
		this._propagateFocusToParents()
		this._focusChild(child)
	}
	ItemPrototype._updateVisibilityForChild = function(child,value) {
		child.recursiveVisible = value && child.visible && child.visibleInView
	}
	ItemPrototype._attachElement = function(element) {
		if (this.element)
			this.element.discard()

		this.element = element
		var parent = this.parent
		if (parent)
			parent.element.append(element)
	}
	ItemPrototype._processKey = function(key,event) {
		if ($manifest$trace$keys)
			log(this.getComponentPath(), '_processKey', key, event)
		var eventTime = event.timeStamp

		if (this.keyProcessDelay) {
			if (this._lastEvent && eventTime > this._lastEvent && eventTime - this._lastEvent < this.keyProcessDelay)
				return true

			this._lastEvent = eventTime
		}

		//fixme: create invoker only if any of handlers exist
		var invoker = $core.safeCall(this, [key, event], function (ex) { log("on " + key + " handler failed:", ex, ex.stack) })
		var proto_callback = this['__key__' + key]

		if (key in this._pressedHandlers && this.invokeKeyHandlers(key, event, this._pressedHandlers[key], invoker))
			return true

		if (proto_callback && this.invokeKeyHandlers(key, event, proto_callback, invoker))
			return true

		var proto_callback = this['__key__Key']
		if ('Key' in this._pressedHandlers  && this.invokeKeyHandlers(key, event, this._pressedHandlers['Key'], invoker))
			return true

		if (proto_callback && this.invokeKeyHandlers(key, event, proto_callback, invoker))
			return true

		return false
	}
	ItemPrototype.invokeKeyHandlers = function(key,event,handlers,invoker) {
		for(var i = handlers.length - 1; i >= 0; --i) {
			var callback = handlers[i]
			if (invoker(callback)) {
				if ($manifest$trace$keys)
					log("key " + key + " handled in " + (performance.now() - event.timeStamp).toFixed(3) + " ms by", this, new Error().stack)
				return true;
			}
		}
		return false;
	}
	ItemPrototype.onPressed = function(name,callback) {
	var key = this._get('key', true)

		var wrapper
		if (name != 'Key')
			wrapper = function(key, event) { event.accepted = true; callback(key, event); return event.accepted }
		else
			wrapper = callback;

		if (name in this._pressedHandlers)
			this._pressedHandlers[name].push(wrapper);
		else
			this._pressedHandlers[name] = [wrapper];
	}
	ItemPrototype.style = function(name,style) {
		var element = this.element
		if (element)
			return element.style(name, style)
		else
			log('WARNING: style skipped:', name, style)
	}
	ItemPrototype._enqueueNextChildInFocusChain = function(queue,handlers) {
		this._tryFocus() //soft-restore focus for invisible components
		var focusedChild = this.focusedChild
		if (focusedChild && focusedChild.visible) {
			queue.unshift(focusedChild)
			handlers.unshift(focusedChild)
		}
	}
	ItemPrototype.registerStyle = function(style,tag) {
		var rules = 'position: absolute; visibility: inherit; opacity: 1.0;'
		rules += 'border-style: solid; border-width: 0px; border-radius: 0px; box-sizing: border-box; border-color: rgba(0,0,0,1);'
		rules += 'white-space: nowrap; transform: none;'
		rules += 'left: 0px; top: 0px; width: 0px; height: 0px;'
		rules += 'font-family: ' + $manifest$style$font$family + '; line-height: ' + $manifest$style$font$lineHeight + '; '
		rules += 'pointer-events: none; touch-action: none; '
		if ($manifest$style$font$pixelSize)
			rules += 'font-size: ' + $manifest$style$font$pixelSize + 'px; '
		else if ($manifest$style$font$pointSize)
			rules += 'font-size: ' + $manifest$style$font$pointSize + 'pt; '
		style.addRule(tag, rules)
	}
	ItemPrototype._createElement = function(tag,cls) {
	var context = this._get('context', true)

		var context = this._context
		if (context === null)
			context = this

		context.registerStyle(this, tag, cls)
		this._attachElement(context.createElement(tag, cls))
	}
	$core._protoOnChanged(ItemPrototype, 'cssNullTranslate3D', function(value) {
		if (!$manifest$cssDisableTransformations)
			this.style('transform', value ? 'translateZ(0)' : '')
	})
	$core._protoOnChanged(ItemPrototype, 'focus', function(value) {
		if (this.parent)
			this.parent._tryFocus()
	})
	$core._protoOnChanged(ItemPrototype, 'height', function(value) {
		this.style('height', value - this._topPadding + (this._borderHeightAdjust || 0))
		this.newBoundingBox()
	})
	$core._protoOnChanged(ItemPrototype, 'width', function(value) {
		this.style('width', value + (this._borderWidthAdjust || 0))
		this.newBoundingBox()
	})
	$core._protoOnChanged(ItemPrototype, 'recursiveVisible', function(value) {
		var children = this.children
		for(var i = 0, n = children.length; i < n; ++i) {
			var child = children[i]
			this._updateVisibilityForChild(child, value)
		}

		if (!value && this.parent)
			this.parent._tryFocus()

		if ($manifest$requireExplicitRecursiveVisibilityStyle) {
			this.style("-pure-recursive-visibility", value)
		}
	})
	$core._protoOnChanged(ItemPrototype, 'cssPointerTouchEvents', function(value) {
		var style = value? 'auto': 'none'
		this.style('pointer-events', style)
		this.style('touch-action', style)
	})
	var $code$0 = function(value) {
		var x = this.x + this.viewX
		if (this.cssTranslatePositioning && !$manifest$cssDisableTransformations)
			this.transform.translateX = x
		else
			this.style('left', x)
		this.newBoundingBox()
	}
	$core._protoOnChanged(ItemPrototype, 'x', $code$0)
	$core._protoOnChanged(ItemPrototype, 'viewX', $code$0)
	var $code$1 = function(value) {
		var y = this.y + this.viewY
		if (this.cssTranslatePositioning && !$manifest$cssDisableTransformations)
			this.transform.translateY = y
		else
			this.style('top', y)
		this.newBoundingBox()
	}
	$core._protoOnChanged(ItemPrototype, 'viewY', $code$1)
	$core._protoOnChanged(ItemPrototype, 'y', $code$1)
	$core._protoOnChanged(ItemPrototype, 'opacity', function(value) { if (this.element) this.style('opacity', value); })
	var $code$2 = function(value) { this._updateVisibility() }
	$core._protoOnChanged(ItemPrototype, 'visible', $code$2)
	$core._protoOnChanged(ItemPrototype, 'visibleInView', $code$2)
	$core._protoOnChanged(ItemPrototype, 'clip', function(value) { this.style('overflow', value? 'hidden': 'visible') })
	$core._protoOnChanged(ItemPrototype, 'z', function(value) { this.style('z-index', value) })

	ItemPrototype.$c = function($c) {
		var $this = this;
		ItemBasePrototype.$c.call(this, $c.$b = { })

	}
	ItemPrototype.$s = function($c) {
		var $this = this;
	ItemBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Text]=====================

	var TextBaseComponent = $core.Item
	var TextBasePrototype = TextBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var TextComponent = $core.Text = function(parent, row) {
		TextBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._context.backend.initText(this)
		if (this.text.length > 0)
			this._setText(this.text)
	}

	}
	var TextPrototype = TextComponent.prototype = Object.create(TextBasePrototype)

	TextPrototype.constructor = TextComponent

	TextPrototype.componentName = 'core.Text'
	core.addProperty(TextPrototype, 'string', 'text')
	core.addProperty(TextPrototype, 'color', 'color')
	core.addLazyProperty(TextPrototype, 'shadow', (function(__parent, __row) {
		var lazy$shadow = new $core.Shadow(__parent, __row)
		var $c = { lazy$shadow : lazy$shadow }

//creating component Shadow
			lazy$shadow.$c($c.$c$lazy$shadow = { })


//setting up component Shadow
			var lazy$shadow = $c.lazy$shadow
			lazy$shadow.$s($c.$c$lazy$shadow)
			delete $c.$c$lazy$shadow


			lazy$shadow.completed()

		return lazy$shadow
}))
	core.addLazyProperty(TextPrototype, 'font', (function(__parent, __row) {
		var lazy$font = new $core.Font(__parent, __row)
		var $c = { lazy$font : lazy$font }

//creating component Font
			lazy$font.$c($c.$c$lazy$font = { })


//setting up component Font
			var lazy$font = $c.lazy$font
			lazy$font.$s($c.$c$lazy$font)
			delete $c.$c$lazy$font


			lazy$font.completed()

		return lazy$font
}))
	core.addProperty(TextPrototype, 'int', 'paintedWidth')
	core.addProperty(TextPrototype, 'int', 'paintedHeight')
/** @const @type {number} */
	TextPrototype.AlignTop = 0
/** @const @type {number} */
	TextComponent.AlignTop = 0
/** @const @type {number} */
	TextPrototype.AlignBottom = 1
/** @const @type {number} */
	TextComponent.AlignBottom = 1
/** @const @type {number} */
	TextPrototype.AlignVCenter = 2
/** @const @type {number} */
	TextComponent.AlignVCenter = 2
	core.addProperty(TextPrototype, 'enum', 'verticalAlignment')
/** @const @type {number} */
	TextPrototype.Html = 0
/** @const @type {number} */
	TextComponent.Html = 0
/** @const @type {number} */
	TextPrototype.Text = 1
/** @const @type {number} */
	TextComponent.Text = 1
	core.addProperty(TextPrototype, 'enum', 'textFormat')
/** @const @type {number} */
	TextPrototype.AlignLeft = 0
/** @const @type {number} */
	TextComponent.AlignLeft = 0
/** @const @type {number} */
	TextPrototype.AlignRight = 1
/** @const @type {number} */
	TextComponent.AlignRight = 1
/** @const @type {number} */
	TextPrototype.AlignHCenter = 2
/** @const @type {number} */
	TextComponent.AlignHCenter = 2
/** @const @type {number} */
	TextPrototype.AlignJustify = 3
/** @const @type {number} */
	TextComponent.AlignJustify = 3
	core.addProperty(TextPrototype, 'enum', 'horizontalAlignment')
/** @const @type {number} */
	TextPrototype.NoWrap = 0
/** @const @type {number} */
	TextComponent.NoWrap = 0
/** @const @type {number} */
	TextPrototype.WordWrap = 1
/** @const @type {number} */
	TextComponent.WordWrap = 1
/** @const @type {number} */
	TextPrototype.WrapAnywhere = 2
/** @const @type {number} */
	TextComponent.WrapAnywhere = 2
/** @const @type {number} */
	TextPrototype.Wrap = 3
/** @const @type {number} */
	TextComponent.Wrap = 3
	core.addProperty(TextPrototype, 'enum', 'wrapMode')
	TextPrototype._updateSize = function() {
		if (this.recursiveVisible && (this._updateSizeNeeded || this.clip))
			this._scheduleUpdateSize()
	}
	TextPrototype._updateStyle = function() {
		if (this.shadow && !this.shadow._empty())
			this.style('text-shadow', this.shadow._getFilterStyle())
		else
			this.style('text-shadow', '')
		$core.Item.prototype._updateStyle.apply(this, arguments)
	}
	TextPrototype._updateSizeImpl = function() {
		if (this.text.length === 0) {
			this.paintedWidth = 0
			this.paintedHeight = 0
			return
		}

		this._context.backend.layoutText(this)
	}
	TextPrototype._scheduleUpdateSize = function() {
		this._context.delayedAction('text:update-size', this, this._updateSizeImpl)
	}
	TextPrototype._enableSizeUpdate = function() {
		this._updateSizeNeeded = true
		this._updateSize()
	}
	TextPrototype._updateWSHandling = function() {
		var text = this.textFormat === this.Text
		switch(this.wrapMode) {
		case this.NoWrap:
			this.style({'white-space': text? 'pre': 'nowrap', 'word-break': '' })
			break
		case this.Wrap:
		case this.WordWrap:
			this.style({'white-space': text? 'pre-wrap': 'normal', 'word-break': '' })
			break
		case this.WrapAnywhere:
			this.style({ 'white-space': text? 'pre-wrap': 'normal', 'word-break': 'break-all' })
			break
		}
		this._updateSize();
	}
	TextPrototype.getClass = function() { return 'core-text' }
	TextPrototype._setText = function(html) {
		this._context.backend.setText(this, html)
	}
	TextPrototype.on = function(name,callback) {
		if (!this._updateSizeNeeded) {
			if (name === 'newBoundingBox')
				this._enableSizeUpdate()
		}
		$core.Item.prototype.on.apply(this, arguments)
	}
	TextPrototype.onChanged = function(name,callback) {
		if (!this._updateSizeNeeded) {
			switch(name) {
				case "right":
				case "width":
				case "bottom":
				case "height":
				case "verticalCenter":
				case "horizontalCenter":
					this._enableSizeUpdate()
			}
		}
		$core.Item.prototype.onChanged.apply(this, arguments);
	}
	TextPrototype.registerStyle = function(style,tag) {
		style.addRule(tag, 'width: auto; height: auto;')
	}
	$core._protoOnChanged(TextPrototype, 'recursiveVisible', function(value) {
		if (value)
			this._updateSize()
	})
	$core._protoOnChanged(TextPrototype, 'horizontalAlignment', function(value) {
		switch(value) {
		case this.AlignLeft:	this.style('text-align', 'left'); break
		case this.AlignRight:	this.style('text-align', 'right'); break
		case this.AlignHCenter:	this.style('text-align', 'center'); break
		case this.AlignJustify:	this.style('text-align', 'justify'); break
		}
	})
	$core._protoOnChanged(TextPrototype, 'verticalAlignment', function(value) {
		this._enableSizeUpdate()
		if ($manifest$requireVerticalTextAlignmentStyle) {
			switch(value) {
				case this.AlignTop:		this.style('-pure-text-vertical-align', 'top'); break
				case this.AlignVCenter:	this.style('-pure-text-vertical-align', 'middle'); break
				case this.AlignBottom:	this.style('-pure-text-vertical-align', 'bottom'); break
			}
		}
	})
	var $code$0 = function(value) {
		this._updateWSHandling()
	}
	$core._protoOnChanged(TextPrototype, 'wrapMode', $code$0)
	$core._protoOnChanged(TextPrototype, 'textFormat', $code$0)
	$core._protoOnChanged(TextPrototype, 'text', function(value) { this._setText(value); this._updateSize() })
	var $code$1 = function(value) { this._updateSize() }
	$core._protoOnChanged(TextPrototype, 'height', $code$1)
	$core._protoOnChanged(TextPrototype, 'width', $code$1)
	$core._protoOnChanged(TextPrototype, 'color', function(value) { this.style('color', $core.Color.normalize(value)) })

	TextPrototype.$c = function($c) {
		var $this = this;
		TextBasePrototype.$c.call(this, $c.$b = { })

	}
	TextPrototype.$s = function($c) {
		var $this = this;
	TextBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (${paintedWidth})
			$this._replaceUpdater('width', function() { $this.width = ($this.paintedWidth) }, [$this,'paintedWidth'])
//assigning height to (${paintedHeight})
			$this._replaceUpdater('height', function() { $this.height = ($this.paintedHeight) }, [$this,'paintedHeight'])

			$this.completed()
}


//=====[component controls.web.EllipsisText]=====================

	var EllipsisTextBaseComponent = $core.Text
	var EllipsisTextBasePrototype = EllipsisTextBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Text}
 */
	var EllipsisTextComponent = $controls$web.EllipsisText = function(parent, row) {
		EllipsisTextBaseComponent.apply(this, arguments)

	}
	var EllipsisTextPrototype = EllipsisTextComponent.prototype = Object.create(EllipsisTextBasePrototype)

	EllipsisTextPrototype.constructor = EllipsisTextComponent

	EllipsisTextPrototype.componentName = 'controls.web.EllipsisText'
	core.addProperty(EllipsisTextPrototype, 'bool', 'active', (true))
	EllipsisTextPrototype.__complete = function() { EllipsisTextBasePrototype.__complete.call(this)
this.updateStyle()
}
	EllipsisTextPrototype.updateStyle = function() { this.style('text-overflow', this.active ? 'ellipsis' : 'clip') }
	$core._protoOnChanged(EllipsisTextPrototype, 'active', function(value) { this.updateStyle() })

	EllipsisTextPrototype.$c = function($c) {
		var $this = this;
		EllipsisTextBasePrototype.$c.call(this, $c.$b = { })

	}
	EllipsisTextPrototype.$s = function($c) {
		var $this = this;
	EllipsisTextBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning clip to (true)
			$this._removeUpdater('clip'); $this.clip = (true);

			$this.completed()
}


//=====[component core.BaseViewContent]=====================

	var BaseViewContentBaseComponent = $core.Item
	var BaseViewContentBasePrototype = BaseViewContentBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var BaseViewContentComponent = $core.BaseViewContent = function(parent, row) {
		BaseViewContentBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.style('will-change', 'scroll-position, transform, left, top')
	}

	}
	var BaseViewContentPrototype = BaseViewContentComponent.prototype = Object.create(BaseViewContentBasePrototype)

	BaseViewContentPrototype.constructor = BaseViewContentComponent

	BaseViewContentPrototype.componentName = 'core.BaseViewContent'
	BaseViewContentPrototype._updateScrollPositions = function(x,y,layout) {
		this._setProperty('x', -x)
		this._setProperty('y', -y)
		if (layout === undefined || layout) //default true
			this.parent._scheduleLayout()
	}
	var $code$0 = function(value) { this.parent._scheduleLayout() }
	$core._protoOnChanged(BaseViewContentPrototype, 'x', $code$0)
	$core._protoOnChanged(BaseViewContentPrototype, 'y', $code$0)

	BaseViewContentPrototype.$c = function($c) {
		var $this = this;
		BaseViewContentBasePrototype.$c.call(this, $c.$b = { })

	}
	BaseViewContentPrototype.$s = function($c) {
		var $this = this;
	BaseViewContentBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Animation]=====================

	var AnimationBaseComponent = $core.Object
	var AnimationBasePrototype = AnimationBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var AnimationComponent = $core.Animation = function(parent, row) {
		AnimationBaseComponent.apply(this, arguments)
	//custom constructor:
	{ this._disabled = 0; this._native = false }

	}
	var AnimationPrototype = AnimationComponent.prototype = Object.create(AnimationBasePrototype)

	AnimationPrototype.constructor = AnimationComponent

	AnimationPrototype.componentName = 'core.Animation'
	core.addProperty(AnimationPrototype, 'int', 'delay', (0))
	core.addProperty(AnimationPrototype, 'int', 'duration', (200))
	core.addProperty(AnimationPrototype, 'bool', 'cssTransition', (true))
	core.addProperty(AnimationPrototype, 'bool', 'running', (false))
	core.addProperty(AnimationPrototype, 'string', 'easing', ("ease"))
	core.addProperty(AnimationPrototype, 'Object', 'target')
	core.addProperty(AnimationPrototype, 'string', 'property')
	core.addProperty(AnimationPrototype, 'variant', 'from')
	core.addProperty(AnimationPrototype, 'variant', 'to')
	AnimationPrototype._updateAnimation = function() {
		if (this.target)
			this.target.updateAnimation(this.property, this)
	}
	AnimationPrototype.active = function() {
		return this.enabled() && this.duration > 0
	}
	AnimationPrototype.disable = function() { ++this._disabled; this._updateAnimation() }
	AnimationPrototype.enable = function() { --this._disabled; this._updateAnimation() }
	AnimationPrototype.enabled = function() { return this._disabled === 0 }
	AnimationPrototype.complete = function() { }
	AnimationPrototype.interpolate = function(dst,src,t) {
		return t * (dst - src) + src;
	}
	var $code$0 = function(value) { this._updateAnimation() }
	$core._protoOnChanged(AnimationPrototype, 'easing', $code$0)
	$core._protoOnChanged(AnimationPrototype, 'duration', $code$0)
	$core._protoOnChanged(AnimationPrototype, 'delay', $code$0)
	$core._protoOnChanged(AnimationPrototype, 'cssTransition', $code$0)
	$core._protoOnChanged(AnimationPrototype, 'running', $code$0)

	AnimationPrototype.$c = function($c) {
		var $this = this;
		AnimationBasePrototype.$c.call(this, $c.$b = { })

	}
	AnimationPrototype.$s = function($c) {
		var $this = this;
	AnimationBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.core.ActivityManager]=====================

	var ActivityManagerBaseComponent = $core.Item
	var ActivityManagerBasePrototype = ActivityManagerBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var ActivityManagerComponent = $controls$core.ActivityManager = function(parent, row) {
		ActivityManagerBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._activityStack = []
	}

	}
	var ActivityManagerPrototype = ActivityManagerComponent.prototype = Object.create(ActivityManagerBasePrototype)

	ActivityManagerPrototype.constructor = ActivityManagerComponent

	ActivityManagerPrototype.componentName = 'controls.core.ActivityManager'
	core.addProperty(ActivityManagerPrototype, 'int', 'count')
	core.addProperty(ActivityManagerPrototype, 'bool', 'keepLastActivity', (true))
	core.addProperty(ActivityManagerPrototype, 'string', 'currentActivity')
	ActivityManagerPrototype._initTopIntent = function() {
		if (!this._activityStack.length) {
			log("Activity stack is empty")
			return
		}

		var topActivity = this._activityStack[this._activityStack.length - 1]
		var children = this.children

		log('initTopIntent: ' + topActivity.name)
		for (var i = 0; i < children.length; ++i) {
			var child = children[i]
			if (!child || !(child instanceof _globals.controls.core.BaseActivity))
				continue

			if (child.name === topActivity.name) {
				log("Init:", topActivity)
				var state = topActivity.state || {}
				if (!state.lastActivity)
					state.lastActivity = this.currentActivity
				child.init(topActivity.intent, state)
				child.index = this._activityStack.length - 1
				child.start()
				child.setFocus()
				this.currentActivity = child.name
			} else {
				child.stop()
			}
		}
	}
	ActivityManagerPrototype.initTopIntent = function() {
		try {
			this._initTopIntent()
		} catch(ex) {
			log('initTopIntent failed:', ex)
			this.pop()
		}
	}
	ActivityManagerPrototype.clear = function() {
		var children = this.children
		for (var i = 0; i < children.length; ++i) {
			var child = children[i]
			if (child && child instanceof _globals.controls.core.Activity)
				child.stop()
		}
		this._activityStack = []
	}
	ActivityManagerPrototype.pop = function(count) {
		if ((this.keepLastActivity && this.count > 1) || (!this.keepLastActivity && this.count > 0)) {
			var popActivitiesCount = 1
			if (count === undefined)
				popActivitiesCount = 1
			else if (count > this.count - 1 && this.keepLastActivity)
				popActivitiesCount = this.count - 1
			else if (count > this.count && !this.keepLastActivity)
				popActivitiesCount = this.count
			else
				popActivitiesCount = count

			this._activityStack.splice(-popActivitiesCount, popActivitiesCount)
			this.count -= popActivitiesCount
			this.initTopIntent()
			return true
		} else {
			log("No activity to pop")
			return false
		}
	}
	ActivityManagerPrototype.setIntent = function(intent,name) {
		if (!name) {
			this._activityStack[this._activityStack.length - 1].intent = intent
		} else {
			var activity = this.createActivity(name)
			if (activity)
				activity.intent = intent
		}
	}
	ActivityManagerPrototype.removeActivity = function(name) {
		if (name == this.currentActivity) {
			this.pop()
		} else {
			var index = -1
			for (var i = 0; i < this._activityStack.length; ++i) {
				if (this._activityStack[i].name == name) {
					index = i
					break
				}
			}
			if (index < 0) {
				log("Activity", name, "not found")
				return
			}
			this._activityStack.splice(index, 1)
		}
	}
	ActivityManagerPrototype.isActivityInStack = function(name) {
		var activities = this._activityStack.filter(function(element) {
			return element.name == name
		})
		return activities && activities.length > 0
	}
	ActivityManagerPrototype.findActivity = function(name) {
		var activities = this.children.filter(function(element) {
			return element instanceof _globals.controls.core.BaseActivity && element.name == name
		})

		var activity = null
		if (activities && activities.length)
			activity = activities[0].getActivity()

		if (!activity)
			log("Activity for name", name, "not found")

		return activity
	}
	ActivityManagerPrototype.createActivity = function(name) {
		var activity = this.findActivity(name)
		if (activity)
			return activity
		var activities = this.children.filter(function(element) {
			return element instanceof _globals.controls.core.LazyActivity && element.name == name
		})
		if (activities && activities.length) {
			activity = activities[0]
			return activity.createActivity()
		} else {
			log("Activity for name", name, "not found")
			return null
		}
	}
	ActivityManagerPrototype.closeAllExcept = function(name) {
		var activity = this.findActivity(name)

		if (activity) {
			this.count = 1
			this._activityStack = [activity]
		} else {
			log("Activity", name, "not found, close all")
			this.count = 0
			this._activityStack = []
		}
		if (this.currentActivity != name)
			this.initTopIntent()
	}
	ActivityManagerPrototype.replaceTopActivity = function(name,intent,state) {
		if (this.count > 0) {
			this._activityStack.pop()
			this._activityStack.push({ "name": name, "intent": intent, "state": state })
			this.initTopIntent()
			return true
		} else {
			log("No activity to pop")
			return false
		}
	}
	ActivityManagerPrototype.push = function(name,intent,state) {
		this._activityStack.push({ "name": name, "intent": intent, "state": state })
		this.count++
		this.initTopIntent()
	}
	ActivityManagerPrototype.popWithState = function(state) {
		if ((this.keepLastActivity && this.count > 1) || (!this.keepLastActivity && this.count > 0)) {
			this._activityStack.pop()
			--this.count
			this.setState(state)
			this.initTopIntent()
			return true
		} else {
			log("No activity to pop")
			return false
		}
	}
	ActivityManagerPrototype.setState = function(state,name) {
		if (!name) {
			this._activityStack[this._activityStack.length - 1].state = state
		} else {
			var activity = this.createActivity(name)
			if (activity)
				activity.state = state
		}
	}

	ActivityManagerPrototype.$c = function($c) {
		var $this = this;
		ActivityManagerBasePrototype.$c.call(this, $c.$b = { })

	}
	ActivityManagerPrototype.$s = function($c) {
		var $this = this;
	ActivityManagerBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Loader]=====================

	var LoaderBaseComponent = $core.Item
	var LoaderBasePrototype = LoaderBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var LoaderComponent = $core.Loader = function(parent, row) {
		LoaderBaseComponent.apply(this, arguments)

	}
	var LoaderPrototype = LoaderComponent.prototype = Object.create(LoaderBasePrototype)

	LoaderPrototype.constructor = LoaderComponent

	LoaderPrototype.componentName = 'core.Loader'
	LoaderPrototype.loaded = $core.createSignal('loaded')
	core.addProperty(LoaderPrototype, 'string', 'source')
	core.addProperty(LoaderPrototype, 'Object', 'item')
	LoaderPrototype.discard = function() {
		this.discardItem()
		$core.Item.prototype.discard.call(this)
	}
	LoaderPrototype.discardItem = function() {
		var item = this.item
		if (item) {
			item.discard()
			item = null
		}
	}
	LoaderPrototype._load = function() {
		var source = this.source
		if (!source)
			return

		log('loading ' + source + '…')
		var path = source.split('.')
		var ctor = _globals
		while(path.length) {
			var ns = path.shift()
			ctor = ctor[ns]
			if (ctor === undefined)
				throw new Error('unknown component used: ' + source)
		}

		this.item = new ctor(this)
		$core.core.createObject(this.item)
		this.loaded()
	}
	LoaderPrototype.__complete = function() { LoaderBasePrototype.__complete.call(this)
if (!this.item && this.source)
			this._load()
}
	$core._protoOnChanged(LoaderPrototype, 'recursiveVisible', function(value) {
		if (this.item)
			this._updateVisibilityForChild(this.item, value)
	})
	$core._protoOnChanged(LoaderPrototype, 'source', function(value) {
		this.discardItem()
		this._load()
	})

	LoaderPrototype.$c = function($c) {
		var $this = this;
		LoaderBasePrototype.$c.call(this, $c.$b = { })

	}
	LoaderPrototype.$s = function($c) {
		var $this = this;
	LoaderBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.core.BaseActivity]=====================

	var BaseActivityBaseComponent = $core.Item
	var BaseActivityBasePrototype = BaseActivityBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var BaseActivityComponent = $controls$core.BaseActivity = function(parent, row) {
		BaseActivityBaseComponent.apply(this, arguments)

	}
	var BaseActivityPrototype = BaseActivityComponent.prototype = Object.create(BaseActivityBasePrototype)

	BaseActivityPrototype.constructor = BaseActivityComponent

	BaseActivityPrototype.componentName = 'controls.core.BaseActivity'
	BaseActivityPrototype.started = $core.createSignal('started')
	BaseActivityPrototype.stopped = $core.createSignal('stopped')
	core.addProperty(BaseActivityPrototype, 'bool', 'active')
	core.addProperty(BaseActivityPrototype, 'string', 'name')
	core.addProperty(BaseActivityPrototype, 'Item', 'manager')
	BaseActivityPrototype.clear = function() { this.manager.clear() }
	BaseActivityPrototype.pop = function(count) { this.manager.pop(count) }
	BaseActivityPrototype.init = function(intent,state) { }
	BaseActivityPrototype.closeAllExcept = function(name) { this.manager.closeAllExcept(name) }
	BaseActivityPrototype.removeActivity = function(name) { this.manager.removeActivity(name) }
	BaseActivityPrototype.push = function(name,intent,state) { this.manager.push(name, intent, state) }
	BaseActivityPrototype.replaceTopActivity = function(name,intent,state) { this.manager.replaceTopActivity(name, intent, state) }
	BaseActivityPrototype.popWithState = function(state) { this.manager.popWithState(state) }
	BaseActivityPrototype.setIntent = function(state,name) { this.manager.setIntent(state, name) }
	BaseActivityPrototype.setState = function(state,name) { this.manager.setState(state, name) }
	$core._protoOnKey(BaseActivityPrototype, 'Back', function(key,event) { this.manager.pop(); return true })

	BaseActivityPrototype.$c = function($c) {
		var $this = this;
		BaseActivityBasePrototype.$c.call(this, $c.$b = { })

	}
	BaseActivityPrototype.$s = function($c) {
		var $this = this;
	BaseActivityBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning visible to (${active})
			$this._replaceUpdater('visible', function() { $this.visible = ($this.active) }, [$this,'active'])
//assigning manager to (${parent})
			$this._removeUpdater('manager'); $this.manager = ($this.parent);

			$this.completed()
}


//=====[component controls.core.LazyActivity]=====================

	var LazyActivityBaseComponent = $controls$core.BaseActivity
	var LazyActivityBasePrototype = LazyActivityBaseComponent.prototype

/**
 * @constructor
 * @extends {$controls$core.BaseActivity}
 */
	var LazyActivityComponent = $controls$core.LazyActivity = function(parent, row) {
		LazyActivityBaseComponent.apply(this, arguments)

	}
	var LazyActivityPrototype = LazyActivityComponent.prototype = Object.create(LazyActivityBasePrototype)

	LazyActivityPrototype.constructor = LazyActivityComponent

	LazyActivityPrototype.componentName = 'controls.core.LazyActivity'
	core.addProperty(LazyActivityPrototype, 'string', 'component')
	LazyActivityPrototype.init = function() {
		_globals.controls.core.BaseActivity.prototype.init.apply(this, arguments)
		var activity = this.createActivity()
		if (activity)
			activity.init.apply(activity, arguments)
	}
	LazyActivityPrototype.start = function() {
		this.createActivity().start()
		this.visible = true
	}
	LazyActivityPrototype.stop = function() {
		this.visible = false
		var item = this.getActivity()
		if (item)
			item.stop()
	}
	LazyActivityPrototype.getActivity = function() {
	var loader = this._get('loader', true)

		return loader.item
	}
	LazyActivityPrototype.createActivity = function() {
	var loader = this._get('loader', true)

		var item = loader.item
		if (!item) {
			loader.source = this.component
			item = loader.item
			item.anchors.fill = this
			this._context._processActions() //we have to process all actions before starting setting up items
			item.manager = this.manager
			if (!item)
				throw new Error("can't create component " + this.component)

			var activity = this
			item.on('started', function() { activity.started() })
			item.on('stopped', function() { activity.stopped() })
		}
		return loader.item
	}

	LazyActivityPrototype.$c = function($c) {
		var $this = this;
		LazyActivityBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new $core.Loader($this)
		$c._this$child0 = _this$child0

//creating component Loader
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('loader')
		$this.addChild(_this$child0)
	}
	LazyActivityPrototype.$s = function($c) {
		var $this = this;
	LazyActivityBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning anchors.fill to (${manager})
			$this.anchors._replaceUpdater('fill', function() { $this.anchors.fill = ($this.manager) }, [$this,'manager'])

//setting up component Loader
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning anchors.fill to (${parent.manager})
			_this$child0.anchors._replaceUpdater('fill', function() { _this$child0.anchors.fill = (_this$child0.parent.manager) }, [_this$child0.parent,'manager'])

			_this$child0.completed()

			$this.completed()
}


//=====[component core.Radius]=====================

	var RadiusBaseComponent = $core.Object
	var RadiusBasePrototype = RadiusBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var RadiusComponent = $core.Radius = function(parent, row) {
		RadiusBaseComponent.apply(this, arguments)

	}
	var RadiusPrototype = RadiusComponent.prototype = Object.create(RadiusBasePrototype)

	{
		RadiusPrototype.defaultProperty = 'radius';
	}

	RadiusPrototype.constructor = RadiusComponent

	RadiusPrototype.componentName = 'core.Radius'
	core.addProperty(RadiusPrototype, 'real', 'radius')
	core.addProperty(RadiusPrototype, 'real', 'topLeft')
	core.addProperty(RadiusPrototype, 'real', 'topRight')
	core.addProperty(RadiusPrototype, 'real', 'bottomLeft')
	core.addProperty(RadiusPrototype, 'real', 'bottomRight')
	RadiusPrototype.__complete = function() { RadiusBasePrototype.__complete.call(this)
var radius = this.radius
		var tl = this.topLeft || radius
		var tr = this.topRight || radius
		var bl = this.bottomLeft || radius
		var br = this.bottomRight || radius
		if (tl == tr && bl == br && tl == bl)
			this.parent.style('border-radius', tl)
		else
			this.parent.style('border-radius', tl + 'px ' + tr + 'px ' + br + 'px ' + bl + 'px')
}
	var $code$0 = function() {
		log('updating border')
	}
	$core._protoOn(RadiusPrototype, 'bottomLeftUpdate', $code$0)
	$core._protoOn(RadiusPrototype, 'radiusUpdate', $code$0)
	$core._protoOn(RadiusPrototype, 'bottomRightUpdate', $code$0)
	$core._protoOn(RadiusPrototype, 'topLeftUpdate', $code$0)
	$core._protoOn(RadiusPrototype, 'topRightUpdate', $code$0)

	RadiusPrototype.$c = function($c) {
		var $this = this;
		RadiusBasePrototype.$c.call(this, $c.$b = { })

	}
	RadiusPrototype.$s = function($c) {
		var $this = this;
	RadiusBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.mixins.BaseMixin]=====================

	var BaseMixinBaseComponent = $core.Object
	var BaseMixinBasePrototype = BaseMixinBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var BaseMixinComponent = $controls$mixins.BaseMixin = function(parent, row) {
		BaseMixinBaseComponent.apply(this, arguments)

	}
	var BaseMixinPrototype = BaseMixinComponent.prototype = Object.create(BaseMixinBasePrototype)

	BaseMixinPrototype.constructor = BaseMixinComponent

	BaseMixinPrototype.componentName = 'controls.mixins.BaseMixin'
	BaseMixinPrototype.stopPropagation = function(event) {
	var context = this._get('context', true)

		if (!event)
			context.window.event.cancelBubble = true;
		else if (event.stopPropagation)
			event.stopPropagation();
	}

	BaseMixinPrototype.$c = function($c) {
		var $this = this;
		BaseMixinBasePrototype.$c.call(this, $c.$b = { })

	}
	BaseMixinPrototype.$s = function($c) {
		var $this = this;
	BaseMixinBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.BaseLayout]=====================

	var BaseLayoutBaseComponent = $core.Item
	var BaseLayoutBasePrototype = BaseLayoutBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var BaseLayoutComponent = $core.BaseLayout = function(parent, row) {
		BaseLayoutBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.count = 0
	}

	}
	var BaseLayoutPrototype = BaseLayoutComponent.prototype = Object.create(BaseLayoutBasePrototype)

	BaseLayoutPrototype.constructor = BaseLayoutComponent

	BaseLayoutPrototype.componentName = 'core.BaseLayout'
	core.addProperty(BaseLayoutPrototype, 'int', 'count')
	core.addProperty(BaseLayoutPrototype, 'bool', 'trace')
	core.addProperty(BaseLayoutPrototype, 'int', 'spacing')
	core.addProperty(BaseLayoutPrototype, 'int', 'currentIndex')
	core.addProperty(BaseLayoutPrototype, 'int', 'contentWidth')
	core.addProperty(BaseLayoutPrototype, 'int', 'contentHeight')
	core.addProperty(BaseLayoutPrototype, 'bool', 'keyNavigationWraps')
	core.addProperty(BaseLayoutPrototype, 'bool', 'handleNavigationKeys')
	core.addProperty(BaseLayoutPrototype, 'int', 'layoutDelay')
	core.addProperty(BaseLayoutPrototype, 'int', 'prerenderDelay')
	core.addProperty(BaseLayoutPrototype, 'bool', 'offlineLayout')
	BaseLayoutPrototype._scheduleLayout = function() {
		if (!this.recursiveVisible && !this.offlineLayout)
			return

		if (this.prerenderDelay >= 0) {
			this._context.delayedAction('layout', this, this._doLayoutNP, this.layoutDelay)
			this._context.delayedAction('prerender', this, this._doLayout, this.prerenderDelay)
		} else
			this._context.delayedAction('layout', this, this._doLayout, this.layoutDelay)
	}
	BaseLayoutPrototype._doLayout = function() {
		this._attach()
		this._processUpdates()
		this._layout()
	}
	BaseLayoutPrototype._doLayoutNP = function() {
		this._attach()
		this._processUpdates()
		this._layout(true)
	}
	BaseLayoutPrototype.__complete = function() { BaseLayoutBasePrototype.__complete.call(this)
this._scheduleLayout()
}
	var $code$0 = function() { }
	BaseLayoutPrototype._attach = $code$0
	BaseLayoutPrototype._processUpdates = $code$0
	var $code$1 = function(value) {
		this._scheduleLayout()
	}
	$core._protoOnChanged(BaseLayoutPrototype, 'recursiveVisible', $code$1)
	$core._protoOnChanged(BaseLayoutPrototype, 'spacing', $code$1)

	BaseLayoutPrototype.$c = function($c) {
		var $this = this;
		BaseLayoutBasePrototype.$c.call(this, $c.$b = { })

	}
	BaseLayoutPrototype.$s = function($c) {
		var $this = this;
	BaseLayoutBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning layoutDelay to (- 1)
			$this._removeUpdater('layoutDelay'); $this.layoutDelay = (- 1);
//assigning prerenderDelay to (- 1)
			$this._removeUpdater('prerenderDelay'); $this.prerenderDelay = (- 1);

			$this.completed()
}


//=====[component core.Request]=====================

	var RequestBaseComponent = $core.Object
	var RequestBasePrototype = RequestBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var RequestComponent = $core.Request = function(parent, row) {
		RequestBaseComponent.apply(this, arguments)

	}
	var RequestPrototype = RequestComponent.prototype = Object.create(RequestBasePrototype)

	RequestPrototype.constructor = RequestComponent

	RequestPrototype.componentName = 'core.Request'
	core.addProperty(RequestPrototype, 'bool', 'loading', (false))
	RequestPrototype.ajax = function(request) {
		if (request.done)
			request.done = this._context.wrapNativeCallback(request.done)
		if (request.error)
			request.error = this._context.wrapNativeCallback(request.error)
		this._context.backend.ajax(this, request)
	}

	RequestPrototype.$c = function($c) {
		var $this = this;
		RequestBasePrototype.$c.call(this, $c.$b = { })

	}
	RequestPrototype.$s = function($c) {
		var $this = this;
	RequestBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.web.HoverClickMixin]=====================

	var HoverClickMixinBaseComponent = $core.Object
	var HoverClickMixinBasePrototype = HoverClickMixinBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var HoverClickMixinComponent = $controls$web.HoverClickMixin = function(parent, row) {
		HoverClickMixinBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.element = this.parent.element;
		this.parent.style('cursor', this.cursor)
		this._bindClick(this.clickable)
		this._bindHover(this.enabled)
		this._bindActiveHover(this.activeHoverEnabled)
	}

	}
	var HoverClickMixinPrototype = HoverClickMixinComponent.prototype = Object.create(HoverClickMixinBasePrototype)

	HoverClickMixinPrototype.constructor = HoverClickMixinComponent

	HoverClickMixinPrototype.componentName = 'controls.web.HoverClickMixin'
	core.addProperty(HoverClickMixinPrototype, 'bool', 'enabled', (true))
	core.addProperty(HoverClickMixinPrototype, 'bool', 'clickable', (true))
	core.addProperty(HoverClickMixinPrototype, 'bool', 'activeHoverEnabled', (false))
	core.addProperty(HoverClickMixinPrototype, 'bool', 'value')
	core.addProperty(HoverClickMixinPrototype, 'bool', 'activeHover', (false))
	core.addProperty(HoverClickMixinPrototype, 'string', 'cursor')
	HoverClickMixinPrototype._bindActiveHover = function(value) {
		if (value && !this._hmActiveHoverBinder) {
			this._hmActiveHoverBinder = new _globals.core.EventBinder(this.parent.element)
			this._hmActiveHoverBinder.on('mouseover', function() { this.activeHover = true }.bind(this))
			this._hmActiveHoverBinder.on('mouseout', function() { this.activeHover = false }.bind(this))
		}
		if (this._hmActiveHoverBinder)
		{
			this._hmActiveHoverBinder.enable(value)
		}
	}
	HoverClickMixinPrototype._bindClick = function(value) {
		if (value && !this._hmClickBinder) {
			this._hmClickBinder = new _globals.core.EventBinder(this.element)
			this._hmClickBinder.on('click', _globals.core.createSignalForwarder(this.parent, 'clicked').bind(this))
		}
		if (this._hmClickBinder)
			this._hmClickBinder.enable(value)
	}
	HoverClickMixinPrototype._bindHover = function(value) {
		if (value && !this._hmHoverBinder) {
			this._hmHoverBinder = new _globals.core.EventBinder(this.parent.element)
			if (this._context.backend.capabilities.mouseEnterLeaveSupported) {
				this._hmHoverBinder.on('mouseenter', function() { this.value = true }.bind(this))
				this._hmHoverBinder.on('mouseleave', function() { this.value = false }.bind(this))
			} else {
				this._hmHoverBinder.on('mouseover', function() { this.value = true }.bind(this))
				this._hmHoverBinder.on('mouseout', function() { this.value = false }.bind(this))
			}
		}
		if (this._hmHoverBinder)
			this._hmHoverBinder.enable(value)
	}
	$core._protoOnChanged(HoverClickMixinPrototype, 'cursor', function(value) {
	var cursor = this._get('cursor', true)

		this.parent.style('cursor', value)
	})
	$core._protoOnChanged(HoverClickMixinPrototype, 'activeHoverEnabled', function(value) { this._bindActiveHover(value) })
	$core._protoOnChanged(HoverClickMixinPrototype, 'clickable', function(value) { this._bindClick(value) })
	$core._protoOnChanged(HoverClickMixinPrototype, 'enabled', function(value) { this._bindHover(value) })

	HoverClickMixinPrototype.$c = function($c) {
		var $this = this;
		HoverClickMixinBasePrototype.$c.call(this, $c.$b = { })

	}
	HoverClickMixinPrototype.$s = function($c) {
		var $this = this;
	HoverClickMixinBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component src.UiApp]=====================

	var UiAppBaseComponent = $controls$core.ActivityManager
	var UiAppBasePrototype = UiAppBaseComponent.prototype

/**
 * @constructor
 * @extends {$controls$core.ActivityManager}
 */
	var UiAppComponent = $src.UiApp = function(parent, row) {
		UiAppBaseComponent.apply(this, arguments)

	}
	var UiAppPrototype = UiAppComponent.prototype = Object.create(UiAppBasePrototype)

	UiAppPrototype.constructor = UiAppComponent

	UiAppPrototype.componentName = 'src.UiApp'
	core.addProperty(UiAppPrototype, 'int', 'contextWidth')
	core.addProperty(UiAppPrototype, 'int', 'contextHeight')
	UiAppPrototype.__complete = function() { UiAppBasePrototype.__complete.call(this)
this.push("mosaic")
}

	UiAppPrototype.$c = function($c) {
		var $this = this;
		UiAppBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new $core.Rectangle($this)
		$c._this$child0 = _this$child0

//creating component Rectangle
		_this$child0.$c($c.$c$_this$child0 = { })

		$this.addChild(_this$child0)
		var _this$child1 = new $src.AppApi($this)
		$c._this$child1 = _this$child1

//creating component AppApi
		_this$child1.$c($c.$c$_this$child1 = { })
		_this$child1._setId('api')
		$this.addChild(_this$child1)
		var _this$child2 = new $src.AnotherApi($this)
		$c._this$child2 = _this$child2

//creating component AnotherApi
		_this$child2.$c($c.$c$_this$child2 = { })
		_this$child2._setId('anotherApi')
		$this.addChild(_this$child2)
		var _this$child3 = new $controls$core.LazyActivity($this)
		$c._this$child3 = _this$child3

//creating component LazyActivity
		_this$child3.$c($c.$c$_this$child3 = { })

		$this.addChild(_this$child3)
		$this._setId('root')
	}
	UiAppPrototype.$s = function($c) {
		var $this = this;
	UiAppBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning contextHeight to (${context.height})
			$this._replaceUpdater('contextHeight', function() { $this.contextHeight = ($this._context.height) }, [$this._context,'height'])
//assigning contextWidth to (${context.width})
			$this._replaceUpdater('contextWidth', function() { $this.contextWidth = ($this._context.width) }, [$this._context,'width'])
//assigning clip to (true)
			$this._removeUpdater('clip'); $this.clip = (true);
//assigning anchors.fill to (${context})
			$this.anchors._replaceUpdater('fill', function() { $this.anchors.fill = ($this._context) }, [$this,'context'])

//setting up component Rectangle
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning color to ("#141414")
			_this$child0._removeUpdater('color'); _this$child0.color = ("#141414");
//assigning anchors.fill to (${parent})
			_this$child0.anchors._removeUpdater('fill'); _this$child0.anchors.fill = (_this$child0.parent);

			_this$child0.completed()

//setting up component AppApi
			var _this$child1 = $c._this$child1
			_this$child1.$s($c.$c$_this$child1)
			delete $c.$c$_this$child1


			_this$child1.completed()

//setting up component AnotherApi
			var _this$child2 = $c._this$child2
			_this$child2.$s($c.$c$_this$child2)
			delete $c.$c$_this$child2


			_this$child2.completed()

//setting up component LazyActivity
			var _this$child3 = $c._this$child3
			_this$child3.$s($c.$c$_this$child3)
			delete $c.$c$_this$child3

//assigning component to ("src.MosaicPage")
			_this$child3._removeUpdater('component'); _this$child3.component = ("src.MosaicPage");
//assigning name to ("mosaic")
			_this$child3._removeUpdater('name'); _this$child3.name = ("mosaic");

			_this$child3.completed()

			$this.completed()
}


//=====[component core.GradientStop]=====================

	var GradientStopBaseComponent = $core.Object
	var GradientStopBasePrototype = GradientStopBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var GradientStopComponent = $core.GradientStop = function(parent, row) {
		GradientStopBaseComponent.apply(this, arguments)

	}
	var GradientStopPrototype = GradientStopComponent.prototype = Object.create(GradientStopBasePrototype)

	GradientStopPrototype.constructor = GradientStopComponent

	GradientStopPrototype.componentName = 'core.GradientStop'
	core.addProperty(GradientStopPrototype, 'real', 'position')
	core.addProperty(GradientStopPrototype, 'color', 'color')
	GradientStopPrototype._getDeclaration = function() {
		return new $core.gradient.GradientStop(this.color, this.position)
	}
	var $code$0 = function(value) {
		this.parent._updateStyle()
	}
	$core._protoOnChanged(GradientStopPrototype, 'position', $code$0)
	$core._protoOnChanged(GradientStopPrototype, 'color', $code$0)

	GradientStopPrototype.$c = function($c) {
		var $this = this;
		GradientStopBasePrototype.$c.call(this, $c.$b = { })

	}
	GradientStopPrototype.$s = function($c) {
		var $this = this;
	GradientStopBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.VideoPlayer]=====================

	var VideoPlayerBaseComponent = $core.Item
	var VideoPlayerBasePrototype = VideoPlayerBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var VideoPlayerComponent = $core.VideoPlayer = function(parent, row) {
		VideoPlayerBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.impl = null
		this._createPlayer()
	}

	}
	var VideoPlayerPrototype = VideoPlayerComponent.prototype = Object.create(VideoPlayerBasePrototype)

	VideoPlayerPrototype.constructor = VideoPlayerComponent

	VideoPlayerPrototype.componentName = 'core.VideoPlayer'
	VideoPlayerPrototype.text = $core.createSignal('text')
	VideoPlayerPrototype.finished = $core.createSignal('finished')
	VideoPlayerPrototype.error = $core.createSignal('error')
	core.addProperty(VideoPlayerPrototype, 'string', 'backend')
	core.addProperty(VideoPlayerPrototype, 'string', 'source')
	core.addProperty(VideoPlayerPrototype, 'string', 'backgroundImage')
	core.addProperty(VideoPlayerPrototype, 'color', 'backgroundColor', ("#000"))
	core.addProperty(VideoPlayerPrototype, 'float', 'volume', (1.0))
	core.addProperty(VideoPlayerPrototype, 'bool', 'loop')
	core.addProperty(VideoPlayerPrototype, 'bool', 'ready')
	core.addProperty(VideoPlayerPrototype, 'bool', 'muted')
	core.addProperty(VideoPlayerPrototype, 'bool', 'paused')
	core.addProperty(VideoPlayerPrototype, 'bool', 'waiting')
	core.addProperty(VideoPlayerPrototype, 'bool', 'seeking')
	core.addProperty(VideoPlayerPrototype, 'bool', 'stalled')
	core.addProperty(VideoPlayerPrototype, 'bool', 'autoPlay')
	core.addProperty(VideoPlayerPrototype, 'real', 'duration')
	core.addProperty(VideoPlayerPrototype, 'real', 'progress')
	core.addProperty(VideoPlayerPrototype, 'real', 'buffered')
	core.addProperty(VideoPlayerPrototype, 'real', 'startPosition')
	VideoPlayerPrototype.play = function() {
		if (!this.source)
			return

		log("play", this.source)
		var player = this._getPlayer()
		if (player) {
			this._scheduleLayout()
			player.play()
		}
		this.applyVolume();
	}
	VideoPlayerPrototype._getPlayer = function() {
		if (this.impl === null)
			this._createPlayer()
		return this.impl
	}
	VideoPlayerPrototype._createPlayer = function() {
		if (this.impl)
			return this.impl

		var source = this.source
		var preferred = this.backend
		log('preferred backend: ' + preferred)
		var backends = $core.__videoBackends
		var results = []
		if (preferred && backends[preferred]) {
			var backend = backends[preferred]()
			return this.impl = backend.createPlayer(this)
		} else {
			for (var i in backends) {
				var backend = backends[i]()
				var score = backend.probeUrl(source)
				if (score > 0)
					results.push({ backend: backend, score: score })
			}
			results.sort(function(a, b) { return b.score - a.score })
			if (results.length === 0)
				throw new Error('no backends for source ' + source)
			return this.impl = results[0].backend.createPlayer(this)
		}
	}
	VideoPlayerPrototype.applyVolume = function() {
		if (this.volume > 1.0)
			this.volume = 1.0;
		else if (this.volume < 0.0)
			this.volume = 0.0;

		var player = this._getPlayer()
		if (player)
			player.setVolume(this.volume)
	}
	VideoPlayerPrototype._scheduleLayout = function() {
		this._context.delayedAction('layout', this, this._doLayout)
	}
	VideoPlayerPrototype.pause = function() {
		var player = this._getPlayer()
		if (player)
			player.pause()
	}
	VideoPlayerPrototype._doLayout = function() {
		var player = this._getPlayer()
		if (player)
			player.setRect.apply(player, this.toScreen().slice(0, 4))
	}
	VideoPlayerPrototype.stop = function() {
		var player = this._getPlayer()
		if (player)
			player.stop()
	}
	VideoPlayerPrototype.getAudioTracks = function() {
		var player = this._getPlayer()
		if (player)
			return player.getAudioTracks()
		else
			return []
	}
	VideoPlayerPrototype.getSubtitles = function() {
		var player = this._getPlayer()
		if (player)
			return player.getSubtitles()
		else
			return []
	}
	VideoPlayerPrototype.getVideoTracks = function() {
		var player = this._getPlayer()
		if (player)
			return player.getVideoTracks()
		else
			return []
	}
	VideoPlayerPrototype.__complete = function() { VideoPlayerBasePrototype.__complete.call(this)
var player = this._getPlayer()
		if (player)
			player.setBackgroundColor(this.backgroundColor)

		if (this.autoPlay && this.source)
			this.play()
}
	VideoPlayerPrototype.volumeUp = function() { this.volume += 0.1 }
	VideoPlayerPrototype.volumeDown = function() { this.volume -= 0.1 }
	VideoPlayerPrototype.toggleMute = function() { var player = this._getPlayer(); if (player) player.setMute(!this.muted) }
	VideoPlayerPrototype.setOption = function(name,value) {
		var player = this._getPlayer()
		if (player)
			player.setOption(name, value)
	}
	VideoPlayerPrototype.setAudioTrack = function(trackId) {
		var player = this._getPlayer()
		if (player)
			player.setAudioTrack(trackId)
	}
	VideoPlayerPrototype.setSubtitles = function(trackId) {
		var player = this._getPlayer()
		if (player)
			player.setSubtitles(trackId)
	}
	VideoPlayerPrototype.setVideoTrack = function(trackId) {
		var player = this._getPlayer()
		if (player)
			player.setVideoTrack(trackId)
	}
	VideoPlayerPrototype.setupDrm = function(type,options,callback,error) {
		var player = this._getPlayer()
		if (player)
			player.setupDrm(type, options, callback, error)
	}
	VideoPlayerPrototype.seek = function(value) {
		var player = this._getPlayer()
		if (player)
			player.seek(value)
	}
	VideoPlayerPrototype.seekTo = function(value) {
		var player = this._getPlayer()
		if (player)
			player.seekTo(value)
	}
	$core._protoOnChanged(VideoPlayerPrototype, 'backend', function(value) {
		this.impl = null
		this._createPlayer()
	})
	$core._protoOnChanged(VideoPlayerPrototype, 'backgroundColor', function(value) {
		var player = this._getPlayer()
		if (player)
			player.setBackgroundColor(value)
	})
	$core._protoOnChanged(VideoPlayerPrototype, 'loop', function(value) {
		var player = this._getPlayer()
		if (player)
			player.setLoop(value)
	})
	$core._protoOnChanged(VideoPlayerPrototype, 'source', function(value) {
		var player = this._getPlayer()
		if (player)
			player.setSource(value)
	})
	$core._protoOnChanged(VideoPlayerPrototype, 'recursiveVisible', function(value) {
		var player = this._getPlayer()
		if (player)
			player.setVisibility(value)
	})
	$core._protoOnChanged(VideoPlayerPrototype, 'ready', function(value) { log("ReadyState: " + this.ready) })
	$core._protoOnChanged(VideoPlayerPrototype, 'volume', function(value) { this.applyVolume() })
	$core._protoOnChanged(VideoPlayerPrototype, 'autoPlay', function(value) { this.setOption('autoplay', value) })
	$core._protoOnChanged(VideoPlayerPrototype, 'backgroundImage', function(value) { this.setOption('poster', value) })
	$core._protoOn(VideoPlayerPrototype, 'newBoundingBox', function() {
		this._scheduleLayout()
	})
	$core._protoOn(VideoPlayerPrototype, 'error', function(error) {
		this.paused = false
		this.waiting = false
	})

	VideoPlayerPrototype.$c = function($c) {
		var $this = this;
		VideoPlayerBasePrototype.$c.call(this, $c.$b = { })

	}
	VideoPlayerPrototype.$s = function($c) {
		var $this = this;
	VideoPlayerBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Rectangle]=====================

	var RectangleBaseComponent = $core.Item
	var RectangleBasePrototype = RectangleBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var RectangleComponent = $core.Rectangle = function(parent, row) {
		RectangleBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._context.backend.initRectangle(this)
	}

	}
	var RectanglePrototype = RectangleComponent.prototype = Object.create(RectangleBasePrototype)

	{
		var styleMap = RectanglePrototype._propertyToStyle = Object.create(RectangleBasePrototype._propertyToStyle)
		styleMap['color'] = 'background-color'
	}

	RectanglePrototype.constructor = RectangleComponent

	RectanglePrototype.componentName = 'core.Rectangle'
	core.addProperty(RectanglePrototype, 'color', 'color', ("#0000"))
	core.addLazyProperty(RectanglePrototype, 'border', (function(__parent, __row) {
		var lazy$border = new $core.Border(__parent, __row)
		var $c = { lazy$border : lazy$border }

//creating component Border
			lazy$border.$c($c.$c$lazy$border = { })


//setting up component Border
			var lazy$border = $c.lazy$border
			lazy$border.$s($c.$c$lazy$border)
			delete $c.$c$lazy$border


			lazy$border.completed()

		return lazy$border
}))
	core.addProperty(RectanglePrototype, 'Gradient', 'gradient')
	$core._protoOnChanged(RectanglePrototype, 'color', function(value) {
		this.style('background-color', $core.Color.normalize(value))
	})

	RectanglePrototype.$c = function($c) {
		var $this = this;
		RectangleBasePrototype.$c.call(this, $c.$b = { })

	}
	RectanglePrototype.$s = function($c) {
		var $this = this;
	RectangleBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.experimental.NestedVideo]=====================

	var NestedVideoBaseComponent = $core.Rectangle
	var NestedVideoBasePrototype = NestedVideoBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Rectangle}
 */
	var NestedVideoComponent = $controls$experimental.NestedVideo = function(parent, row) {
		NestedVideoBaseComponent.apply(this, arguments)

	}
	var NestedVideoPrototype = NestedVideoComponent.prototype = Object.create(NestedVideoBasePrototype)

	NestedVideoPrototype.constructor = NestedVideoComponent

	NestedVideoPrototype.componentName = 'controls.experimental.NestedVideo'
	core.addProperty(NestedVideoPrototype, 'bool', 'display')
	NestedVideoPrototype.hide = function() {
	var videoPlayer = this._get('videoPlayer', true)

		this.visible = false
		this.display = false
		videoPlayer.source = ""
		videoPlayer.stop()
	}
	NestedVideoPrototype.showAndPlay = function(source) {
	var videoPlayer = this._get('videoPlayer', true)

		this.visible = true
		this.display = true
		videoPlayer.source = source
	}

	NestedVideoPrototype.$c = function($c) {
		var $this = this;
		NestedVideoBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new $core.VideoPlayer($this)
		$c._this$child0 = _this$child0

//creating component VideoPlayer
		_this$child0.$c($c.$c$_this$child0 = { })
		_this$child0._setId('videoPlayer')
		$this.addChild(_this$child0)
	}
	NestedVideoPrototype.$s = function($c) {
		var $this = this;
	NestedVideoBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning clip to (true)
			$this._removeUpdater('clip'); $this.clip = (true);
//assigning color to ("transparent")
			$this._removeUpdater('color'); $this.color = ("transparent");
//assigning transform.rotateZ to (${display} ? 0 : - 180)
			$this.transform._replaceUpdater('rotateZ', function() { $this.transform.rotateZ = ($this.display ? 0 : - 180) }, [$this,'display'])
//assigning visible to (false)
			$this._removeUpdater('visible'); $this.visible = (false);
//assigning transform.scaleX to (${display} ? 1.05 : 0.001)
			$this.transform._replaceUpdater('scaleX', function() { $this.transform.scaleX = ($this.display ? 1.05 : 0.001) }, [$this,'display'])
//assigning transform.scaleY to (${display} ? 1.05 : 0.001)
			$this.transform._replaceUpdater('scaleY', function() { $this.transform.scaleY = ($this.display ? 1.05 : 0.001) }, [$this,'display'])

//setting up component VideoPlayer
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning autoPlay to (true)
			_this$child0._removeUpdater('autoPlay'); _this$child0.autoPlay = (true);
//assigning anchors.fill to (${parent})
			_this$child0.anchors._removeUpdater('fill'); _this$child0.anchors.fill = (_this$child0.parent);

			_this$child0.completed()
	var behavior__this_on_transform = new $core.Animation($this)
	var behavior__this_on_transform$c = { behavior__this_on_transform: behavior__this_on_transform }

//creating component Animation
	behavior__this_on_transform.$c(behavior__this_on_transform$c.$c$behavior__this_on_transform = { })


//setting up component Animation
	var behavior__this_on_transform = behavior__this_on_transform$c.behavior__this_on_transform
	behavior__this_on_transform.$s(behavior__this_on_transform$c.$c$behavior__this_on_transform)
	delete behavior__this_on_transform$c.$c$behavior__this_on_transform

//assigning duration to (400)
	behavior__this_on_transform._removeUpdater('duration'); behavior__this_on_transform.duration = (400);
//assigning delay to (400)
	behavior__this_on_transform._removeUpdater('delay'); behavior__this_on_transform.delay = (400);

	behavior__this_on_transform.completed()
	$this.setAnimation('transform', behavior__this_on_transform);

			$this.completed()
}


//=====[component core.MouseMoveMixin]=====================

	var MouseMoveMixinBaseComponent = $core.Object
	var MouseMoveMixinBasePrototype = MouseMoveMixinBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var MouseMoveMixinComponent = $core.MouseMoveMixin = function(parent, row) {
		MouseMoveMixinBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.element = this.parent.element;
		this._bindMove(this.enabled)
	}

	}
	var MouseMoveMixinPrototype = MouseMoveMixinComponent.prototype = Object.create(MouseMoveMixinBasePrototype)

	MouseMoveMixinPrototype.constructor = MouseMoveMixinComponent

	MouseMoveMixinPrototype.componentName = 'core.MouseMoveMixin'
	MouseMoveMixinPrototype.mouseMove = $core.createSignal('mouseMove')
	core.addProperty(MouseMoveMixinPrototype, 'bool', 'enabled', (true))
	core.addProperty(MouseMoveMixinPrototype, 'int', 'mouseX')
	core.addProperty(MouseMoveMixinPrototype, 'int', 'mouseY')
	MouseMoveMixinPrototype._updatePosition = function(event) {
		var parent = this.parent
		var x = event.offsetX
		var y = event.offsetY
		if (x >= 0 && y >= 0 && x < parent.width && y < parent.height) {
			this.mouseX = x
			this.mouseY = y
			this.mouseMove(x, y)
			return true
		}
		else
			return false
	}
	MouseMoveMixinPrototype._bindMove = function(value) {
		if (value && !this._mouseMoveBinder) {
			this._mouseMoveBinder = new $core.EventBinder(this.element)
			this._mouseMoveBinder.on('mousemove', function(event) {
				if (!this._updatePosition(event))
					event.preventDefault()
			}.bind(this))
		}
		if (this._mouseMoveBinder)
			this._mouseMoveBinder.enable(value)
	}
	$core._protoOnChanged(MouseMoveMixinPrototype, 'enabled', function(value) {
		this._bindMove(value)
	})

	MouseMoveMixinPrototype.$c = function($c) {
		var $this = this;
		MouseMoveMixinBasePrototype.$c.call(this, $c.$b = { })

	}
	MouseMoveMixinPrototype.$s = function($c) {
		var $this = this;
	MouseMoveMixinBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.web.api.Method]=====================

	var MethodBaseComponent = $core.Object
	var MethodBasePrototype = MethodBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var MethodComponent = $controls$web$api.Method = function(parent, row) {
		MethodBaseComponent.apply(this, arguments)

	}
	var MethodPrototype = MethodComponent.prototype = Object.create(MethodBasePrototype)

	MethodPrototype.constructor = MethodComponent

	MethodPrototype.componentName = 'controls.web.api.Method'
	core.addProperty(MethodPrototype, 'string', 'type', ("GET"))
	core.addProperty(MethodPrototype, 'string', 'name')
	core.addProperty(MethodPrototype, 'string', 'path')
	MethodPrototype.args = function() {
	}
	MethodPrototype.call = function(api,args) {
		var nargs = this.args.length
		if (args.length < nargs + 2)
			throw new Error("not enough arguments for method " + this.name)
		nargs = args.length - 2

		var argsargs 	= Array.prototype.slice.call(args, 0, nargs)
		var data 		= this.args.apply(this, argsargs)
		var callback 	= args[nargs + 0]
		var error 		= args[nargs + 1]
		var headers 	= {}
		var newHeaders  = this.headers(headers)
		if (newHeaders !== undefined)
			headers = newHeaders
		var path = this.pathArgs(this.path, argsargs)

		api.call(path, callback, error, this.type, data, headers)
	}
	MethodPrototype.headers = function(headers) {
	}
	MethodPrototype.pathArgs = function(path,args) {
		var path = this.path
		var re = /\{(\w+)\}/g
		var index = 0
		path = path.replace(re, function(m) {
			return (index < args.length)? args[index++]: ''
		})

		return path
	}
	$core._protoOnChanged(MethodPrototype, 'name', function(value) {
		this.parent._registerMethod(this.name, this)
	})

	MethodPrototype.$c = function($c) {
		var $this = this;
		MethodBasePrototype.$c.call(this, $c.$b = { })

	}
	MethodPrototype.$s = function($c) {
		var $this = this;
	MethodBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Font]=====================

	var FontBaseComponent = $core.Object
	var FontBasePrototype = FontBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var FontComponent = $core.Font = function(parent, row) {
		FontBaseComponent.apply(this, arguments)

	}
	var FontPrototype = FontComponent.prototype = Object.create(FontBasePrototype)

	FontPrototype.constructor = FontComponent

	FontPrototype.componentName = 'core.Font'
	core.addProperty(FontPrototype, 'string', 'family', ($manifest$style$font$family))
	core.addProperty(FontPrototype, 'bool', 'italic')
	core.addProperty(FontPrototype, 'bool', 'bold')
	core.addProperty(FontPrototype, 'bool', 'underline')
	core.addProperty(FontPrototype, 'bool', 'overline')
	core.addProperty(FontPrototype, 'bool', 'strike')
	core.addProperty(FontPrototype, 'bool', 'strikeout')
	core.addProperty(FontPrototype, 'real', 'letterSpacing')
	core.addProperty(FontPrototype, 'real', 'wordSpacing')
	core.addProperty(FontPrototype, 'int', 'pixelSize', ($manifest$style$font$pixelSize))
	core.addProperty(FontPrototype, 'int', 'pointSize')
	core.addProperty(FontPrototype, 'real', 'lineHeight', ($manifest$style$font$lineHeight))
	core.addProperty(FontPrototype, 'int', 'weight')
/** @const @type {number} */
	FontPrototype.MixedCase = 0
/** @const @type {number} */
	FontComponent.MixedCase = 0
/** @const @type {number} */
	FontPrototype.AllUppercase = 1
/** @const @type {number} */
	FontComponent.AllUppercase = 1
/** @const @type {number} */
	FontPrototype.AllLowercase = 2
/** @const @type {number} */
	FontComponent.AllLowercase = 2
/** @const @type {number} */
	FontPrototype.SmallCaps = 3
/** @const @type {number} */
	FontComponent.SmallCaps = 3
/** @const @type {number} */
	FontPrototype.Capitalize = 4
/** @const @type {number} */
	FontComponent.Capitalize = 4
	core.addProperty(FontPrototype, 'enum', 'capitalization')
	FontPrototype._updateTextDecoration = function() {
		var decoration = (this.underline ? ' underline' : '')
			+ (this.overline ? ' overline' : '')
			+ (this.strike || this.strikeout ? ' line-through' : '')
		this.parent.style('text-decoration', decoration)
		this.parent._updateSize()
	}
	$core._protoOnChanged(FontPrototype, 'capitalization', function(value) {
		this.parent.style('text-transform', 'none');
		this.parent.style('font-variant', 'normal');
		switch(value) {
 		case this.AllUppercase: this.parent.style('text-transform', 'uppercase'); break
 		case this.AllLowercase: this.parent.style('text-transform', 'lowercase'); break
 		case this.SmallCaps: this.parent.style('font-variant', 'small-caps'); break
 		case this.Capitalize: this.parent.style('text-transform', 'capitalize'); break
 		}
	})
	$core._protoOnChanged(FontPrototype, 'pointSize', function(value) { if (value > 0) this.pixelSize = 0; this.parent.style('font-size', value > 0? value + 'pt': ''); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'pixelSize', function(value) { if (value > 0) this.pointSize = 0; this.parent.style('font-size', value > 0? value + 'px': ''); this.parent._updateSize() })
	var $code$0 = function(value) { this._updateTextDecoration() }
	$core._protoOnChanged(FontPrototype, 'strike', $code$0)
	$core._protoOnChanged(FontPrototype, 'overline', $code$0)
	$core._protoOnChanged(FontPrototype, 'strikeout', $code$0)
	$core._protoOnChanged(FontPrototype, 'underline', $code$0)
	$core._protoOnChanged(FontPrototype, 'family', function(value) { this.parent.style('font-family', value); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'italic', function(value) { this.parent.style('font-style', value? 'italic': 'normal'); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'weight', function(value) { this.parent.style('font-weight', value); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'bold', function(value) { this.parent.style('font-weight', value? 'bold': 'normal'); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'letterSpacing', function(value) { this.parent.style('letter-spacing', value + "px"); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'lineHeight', function(value) { this.parent.style('line-height', value); this.parent._updateSize() })
	$core._protoOnChanged(FontPrototype, 'wordSpacing', function(value) { this.parent.style('word-spacing', value + "px"); this.parent._updateSize() })

	FontPrototype.$c = function($c) {
		var $this = this;
		FontBasePrototype.$c.call(this, $c.$b = { })

	}
	FontPrototype.$s = function($c) {
		var $this = this;
	FontBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.BaseView]=====================

	var BaseViewBaseComponent = $core.BaseLayout
	var BaseViewBasePrototype = BaseViewBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.BaseLayout}
 */
	var BaseViewComponent = $core.BaseView = function(parent, row) {
		BaseViewBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._items = []
		this._modelUpdate = new $core.model.ModelUpdate()
		this._attached = null

		//callback instances for dynamic model subscriptions
		this._modelReset = this._onReset.bind(this)
		this._modelRowsInserted = this._onRowsInserted.bind(this)
		this._modelRowsChanged = this._onRowsChanged.bind(this)
		this._modelRowsRemoved =  this._onRowsRemoved.bind(this)
	}

	}
	var BaseViewPrototype = BaseViewComponent.prototype = Object.create(BaseViewBasePrototype)

	BaseViewPrototype.constructor = BaseViewComponent

	BaseViewPrototype.componentName = 'core.BaseView'
	BaseViewPrototype.scrollEvent = $core.createSignal('scrollEvent')
	BaseViewPrototype.layoutFinished = $core.createSignal('layoutFinished')
	core.addProperty(BaseViewPrototype, 'Item', 'highlight')
	core.addProperty(BaseViewPrototype, 'Object', 'model')
	core.addProperty(BaseViewPrototype, 'Item', 'delegate')
	core.addProperty(BaseViewPrototype, 'int', 'contentX')
	core.addProperty(BaseViewPrototype, 'int', 'contentY')
	core.addProperty(BaseViewPrototype, 'int', 'scrollingStep', (0))
	core.addProperty(BaseViewPrototype, 'int', 'animationDuration', (0))
	core.addProperty(BaseViewPrototype, 'string', 'animationEasing', ("ease"))
	core.addProperty(BaseViewPrototype, 'bool', 'contentFollowsCurrentItem', (true))
	core.addProperty(BaseViewPrototype, 'bool', 'nativeScrolling')
	core.addProperty(BaseViewPrototype, 'real', 'prerender', (0.5))
	core.addProperty(BaseViewPrototype, 'string', 'visibilityProperty')
	core.addProperty(BaseViewPrototype, 'BaseViewContent', 'content')
/** @const @type {number} */
	BaseViewPrototype.Contain = 0
/** @const @type {number} */
	BaseViewComponent.Contain = 0
/** @const @type {number} */
	BaseViewPrototype.Beginning = 1
/** @const @type {number} */
	BaseViewComponent.Beginning = 1
/** @const @type {number} */
	BaseViewPrototype.Center = 2
/** @const @type {number} */
	BaseViewComponent.Center = 2
/** @const @type {number} */
	BaseViewPrototype.End = 3
/** @const @type {number} */
	BaseViewComponent.End = 3
/** @const @type {number} */
	BaseViewPrototype.Visible = 4
/** @const @type {number} */
	BaseViewComponent.Visible = 4
/** @const @type {number} */
	BaseViewPrototype.Page = 5
/** @const @type {number} */
	BaseViewComponent.Page = 5
	core.addProperty(BaseViewPrototype, 'enum', 'positionMode')
	BaseViewPrototype.discard = function() {
		this._detach()
		$core.BaseLayout.prototype.discard.apply(this)
	}
	BaseViewPrototype._processUpdates = function() {
		this._modelUpdate.apply(this)
		qml.core.BaseLayout.prototype._processUpdates.apply(this)
		this.count = this._items.length
	}
	BaseViewPrototype.focusCurrent = function() {
		var n = this.count
		if (n === 0)
			return

		var idx = this.currentIndex
		if (idx < 0 || idx >= n) {
			if (this.keyNavigationWraps)
				this.currentIndex = (idx + n) % n
			else
				this.currentIndex = idx < 0? 0: n - 1
			return
		}
		var item = this.itemAtIndex(idx)

		if (item)
			this.focusChild(item)
		if (this.contentFollowsCurrentItem)
			this.positionViewAtIndex(idx)

		this._updateHighlight(item)
	}
	BaseViewPrototype._attach = function() {
	var model = this._get('model', true)

		if (this._attached || !this.model || !this.delegate)
			return

		if (this.trace)
			log('attaching model...')

		var Model = $core.Model
		var model = this.model
		var modelType = typeof model
		if ((Model !== undefined) && (model instanceof Model)) {
		} else if (Array.isArray(model)) {
			model = new $core.model.ArrayModelWrapper(model)
		} else if (modelType === 'number') {
			var data = []
			for(var i = 0; i < model; ++i)
				data.push({})
			model = new $core.model.ArrayModelWrapper(data)
		} else
			throw new Error("unknown value of type '" + (typeof model) + "', attached to model property: " + model + ((modelType === 'object') && ('componentName' in model)? ', component name: ' + model.componentName: ''))

		model.on('reset', this._modelReset)
		model.on('rowsInserted', this._modelRowsInserted)
		model.on('rowsChanged', this._modelRowsChanged)
		model.on('rowsRemoved', this._modelRowsRemoved)

		this._attached = model
		this._onReset()
	}
	BaseViewPrototype._detach = function() {
	var model = this._get('model', true)

		var model = this._attached
		if (!model)
			return

		if (this.trace)
			log('detaching model...')

		this._attached = null

		model.removeListener('reset', this._modelReset)
		model.removeListener('rowsInserted', this._modelRowsInserted)
		model.removeListener('rowsChanged', this._modelRowsChanged)
		model.removeListener('rowsRemoved', this._modelRowsRemoved)
	}
	BaseViewPrototype._onReset = function() {
	var model = this._get('model', true)

		var model = this._attached
		if (this.trace)
			log("reset", this._items.length, model.count)

		this._modelUpdate.reset(model)
		this._scheduleLayout()
	}
	BaseViewPrototype.__complete = function() { BaseViewBasePrototype.__complete.call(this)
var highlight = this.highlight
		if (highlight) {
			highlight.element.remove()
			this.content.element.prepend(highlight.element)
		}

		var self = this
		this.element.on('scroll', function() {
			var x = self.element.getScrollX(), y = self.element.getScrollY()
			self._updateScrollPositions(x, y)
			self.scrollEvent(x, y)
		}.bind(this))
}
	BaseViewPrototype._updateItems = function(begin,end) {
		for(var i = begin; i < end; ++i)
			this._updateDelegate(i)
	}
	BaseViewPrototype._onRowsChanged = function(begin,end) {
		if (this.trace)
			log("rows changed", begin, end)

		this._modelUpdate.update(this._attached, begin, end)
		this._scheduleLayout()
	}
	BaseViewPrototype._onRowsInserted = function(begin,end) {
		if (this.trace)
			log("rows inserted", begin, end)

		this._modelUpdate.insert(this._attached, begin, end)
		this._scheduleLayout()
	}
	BaseViewPrototype._onRowsRemoved = function(begin,end) {
		if (this.trace)
			log("rows removed", begin, end)

		this._modelUpdate.remove(this._attached, begin, end)
		this._scheduleLayout()
	}
	BaseViewPrototype._removeItems = function(begin,end) {
		var deleted = this._items.splice(begin, end - begin)
		var view = this
		deleted.forEach(function(item) { view._discardItem(item)})
	}
	BaseViewPrototype._insertItems = function(begin,end) {
		var n = end - begin + 2
		var args = new Array(n)
		args[0] = begin
		args[1] = 0
		for(var i = 2; i < n; ++i)
			args[i] = null
		Array.prototype.splice.apply(this._items, args)
	}
	BaseViewPrototype._updateDelegateIndex = function(idx) {
		var item = this._items[idx]
		if (item) {
			item._local.model.index = idx
			var _rowIndex = item._createPropertyStorage('_rowIndex')
			_rowIndex.callOnChanged(item, '_rowIndex')
		}
	}
	BaseViewPrototype._updateDelegate = function(idx) {
		var item = this._items[idx]
		if (item) {
			var row = this._attached.get(idx)
			row.index = idx
			item._local.model = row
			var _row = item._createPropertyStorage('_row')
			_row.callOnChanged(item, '_row')
		}
	}
	BaseViewPrototype.itemAtIndex = function(idx) {
		var item = this._items[idx]
		return item? item: null
	}
	BaseViewPrototype._createDelegate = function(idx,callback) {
		var items = this._items
		var item = items[idx]
		if (item !== null && item !== undefined)
			return item

		var visibilityProperty = this.visibilityProperty
		var row = this._attached.get(idx)

		if (this.trace)
			log('createDelegate', idx, row)

		if (visibilityProperty && !row[visibilityProperty])
			return null;
		row.index = idx

		item = this.delegate(this, row)
		items[idx] = item
		item.view = this
		item.element.remove()

		if (callback === undefined)
			this.content.element.append(item.element)
		else
			callback.call(this, item)

		item.recursiveVisible = this.recursiveVisible && item.visible && item.visibleInView

		return item
	}
	BaseViewPrototype._discardItem = function(item) {
		if (item === null)
			return
		if (this.focusedChild === item)
			this.focusedChild = null;
		item.discard()
	}
	BaseViewPrototype._updateHighlight = function(item) {
		var highlight = this.highlight
		if (highlight) {
			highlight.viewX = item.viewX
			highlight.viewY = item.viewY
			highlight.width = item.width
			highlight.height = item.height
		}
	}
	BaseViewPrototype.positionViewAtItemHorizontally = function(itemBox,center,centerOversized) {
		var cx = this.contentX, cy = this.contentY
		var x = itemBox[0], y = itemBox[1]
		var iw = itemBox[2], ih = itemBox[3]
		var w = this.width, h = this.height

		var atCenter = x - w / 2 + iw / 2
		if (iw > w)
			this.contentX = centerOversized? atCenter: x
		else if (center && this.contentWidth > w)
			this.contentX = atCenter < 0 ? 0 : x > this.contentWidth - w / 2 - iw / 2 ? this.contentWidth - w : atCenter
		else if (x - cx <= 0)
			this.contentX = x
		else if (x - cx + iw > w)
			this.contentX = x + iw - w
	}
	BaseViewPrototype.positionViewAtItemVertically = function(itemBox,center,centerOversized) {
		var cx = this.contentX, cy = this.contentY
		var x = itemBox[0], y = itemBox[1]
		var iw = itemBox[2], ih = itemBox[3]
		var w = this.width, h = this.height

		var atCenter = y - h / 2 + ih / 2
		if (ih > h)
			this.contentY = centerOversized? atCenter: y
		else if (center && this.contentHeight > h)
			this.contentY = atCenter < 0 ? 0 : y > this.contentHeight - h / 2 - ih / 2 ? this.contentHeight - h : atCenter
		else if (y - cy <= 0)
			this.contentY = y
		else if (y - cy + ih > h)
			this.contentY = y + ih - h
	}
	BaseViewPrototype.itemAt = function(x,y) {
		var idx = this.indexAt(x, y)
		return idx >= 0? this._items[idx]: null
	}
	BaseViewPrototype._updateScrollPositions = function(x,y,layout) {
		this._setProperty('contentX', x)
		this._setProperty('contentY', y)
		this.content._updateScrollPositions(x, y, layout)
	}
	$core._protoOnChanged(BaseViewPrototype, 'model', function(value) {
		if (this.trace)
			log('model changed to ', value)

		this._detach()
		this._modelUpdate.clear()
		this._removeItems(0, this.count)
		this.count = 0
		this._scheduleLayout()
	})
	$core._protoOnChanged(BaseViewPrototype, 'recursiveVisible', function(value) {
		if (value)
			this._scheduleLayout();

		var view = this
		this._items.forEach(function(child) {
			if (child !== null)
				view._updateVisibilityForChild(child, value)
		})
		this._updateVisibilityForChild(this.content, value)
		var highlight = this.highlight
		if (highlight)
			this._updateVisibilityForChild(highlight, value)
	})
	$core._protoOnChanged(BaseViewPrototype, 'delegate', function(value) {
		if (value)
			value.visible = false
	})
	$core._protoOnChanged(BaseViewPrototype, 'currentIndex', function(value) {
		this.focusCurrent()
	})
	$core._protoOnChanged(BaseViewPrototype, 'focusedChild', function(value) {
		var idx = this._items.indexOf(this.focusedChild)
		if (idx >= 0)
			this.currentIndex = idx
	})
	var $code$0 = function(value) { this._scheduleLayout() }
	$core._protoOnChanged(BaseViewPrototype, 'height', $code$0)
	$core._protoOnChanged(BaseViewPrototype, 'width', $code$0)
	$core._protoOnChanged(BaseViewPrototype, 'contentX', function(value) { this.content.x = -value; })
	$core._protoOnChanged(BaseViewPrototype, 'contentY', function(value) { this.content.y = -value; })
	$core._protoOn(BaseViewPrototype, 'layoutFinished', function() {
		var item = this.itemAtIndex(this.currentIndex)
		if (item)
			this._updateHighlight(item)
	})

	BaseViewPrototype.$c = function($c) {
		var $this = this;
		BaseViewBasePrototype.$c.call(this, $c.$b = { })
//creating component core.<anonymous>
		var _this$content = new $core.BaseViewContent($this)
		$c._this$content = _this$content

//creating component BaseViewContent
		_this$content.$c($c.$c$_this$content = { })

		$this.content = _this$content
	}
	BaseViewPrototype.$s = function($c) {
		var $this = this;
	BaseViewBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning keyNavigationWraps to (true)
			$this._removeUpdater('keyNavigationWraps'); $this.keyNavigationWraps = (true);
//assigning cssPointerTouchEvents to (${nativeScrolling})
			$this._replaceUpdater('cssPointerTouchEvents', function() { $this.cssPointerTouchEvents = ($this.nativeScrolling) }, [$this,'nativeScrolling'])

//setting up component BaseViewContent
			var _this$content = $c._this$content
			_this$content.$s($c.$c$_this$content)
			delete $c.$c$_this$content

//assigning cssTranslatePositioning to (${parent.cssTranslatePositioning})
			_this$content._replaceUpdater('cssTranslatePositioning', function() { _this$content.cssTranslatePositioning = (_this$content.parent.cssTranslatePositioning) }, [_this$content.parent,'cssTranslatePositioning'])
//assigning cssPointerTouchEvents to (${parent.cssPointerTouchEvents})
			_this$content._replaceUpdater('cssPointerTouchEvents', function() { _this$content.cssPointerTouchEvents = (_this$content.parent.cssPointerTouchEvents) }, [_this$content.parent,'cssPointerTouchEvents'])
	var behavior__this_content_on_y = new $core.Animation(_this$content)
	var behavior__this_content_on_y$c = { behavior__this_content_on_y: behavior__this_content_on_y }

//creating component Animation
	behavior__this_content_on_y.$c(behavior__this_content_on_y$c.$c$behavior__this_content_on_y = { })


//setting up component Animation
	var behavior__this_content_on_y = behavior__this_content_on_y$c.behavior__this_content_on_y
	behavior__this_content_on_y.$s(behavior__this_content_on_y$c.$c$behavior__this_content_on_y)
	delete behavior__this_content_on_y$c.$c$behavior__this_content_on_y

//assigning duration to (${parent.parent.animationDuration})
	behavior__this_content_on_y._replaceUpdater('duration', function() { behavior__this_content_on_y.duration = (behavior__this_content_on_y.parent.parent.animationDuration) }, [behavior__this_content_on_y.parent.parent,'animationDuration'])
//assigning easing to (${parent.parent.animationEasing})
	behavior__this_content_on_y._replaceUpdater('easing', function() { behavior__this_content_on_y.easing = (behavior__this_content_on_y.parent.parent.animationEasing) }, [behavior__this_content_on_y.parent.parent,'animationEasing'])

	behavior__this_content_on_y.completed()
	_this$content.setAnimation('y', behavior__this_content_on_y);

	var behavior__this_content_on_x = new $core.Animation(_this$content)
	var behavior__this_content_on_x$c = { behavior__this_content_on_x: behavior__this_content_on_x }

//creating component Animation
	behavior__this_content_on_x.$c(behavior__this_content_on_x$c.$c$behavior__this_content_on_x = { })


//setting up component Animation
	var behavior__this_content_on_x = behavior__this_content_on_x$c.behavior__this_content_on_x
	behavior__this_content_on_x.$s(behavior__this_content_on_x$c.$c$behavior__this_content_on_x)
	delete behavior__this_content_on_x$c.$c$behavior__this_content_on_x

//assigning duration to (${parent.parent.animationDuration})
	behavior__this_content_on_x._replaceUpdater('duration', function() { behavior__this_content_on_x.duration = (behavior__this_content_on_x.parent.parent.animationDuration) }, [behavior__this_content_on_x.parent.parent,'animationDuration'])
//assigning easing to (${parent.parent.animationEasing})
	behavior__this_content_on_x._replaceUpdater('easing', function() { behavior__this_content_on_x.easing = (behavior__this_content_on_x.parent.parent.animationEasing) }, [behavior__this_content_on_x.parent.parent,'animationEasing'])

	behavior__this_content_on_x.completed()
	_this$content.setAnimation('x', behavior__this_content_on_x);

	var behavior__this_content_on_transform = new $core.Animation(_this$content)
	var behavior__this_content_on_transform$c = { behavior__this_content_on_transform: behavior__this_content_on_transform }

//creating component Animation
	behavior__this_content_on_transform.$c(behavior__this_content_on_transform$c.$c$behavior__this_content_on_transform = { })


//setting up component Animation
	var behavior__this_content_on_transform = behavior__this_content_on_transform$c.behavior__this_content_on_transform
	behavior__this_content_on_transform.$s(behavior__this_content_on_transform$c.$c$behavior__this_content_on_transform)
	delete behavior__this_content_on_transform$c.$c$behavior__this_content_on_transform

//assigning duration to (${parent.parent.animationDuration})
	behavior__this_content_on_transform._replaceUpdater('duration', function() { behavior__this_content_on_transform.duration = (behavior__this_content_on_transform.parent.parent.animationDuration) }, [behavior__this_content_on_transform.parent.parent,'animationDuration'])
//assigning easing to (${parent.parent.animationEasing})
	behavior__this_content_on_transform._replaceUpdater('easing', function() { behavior__this_content_on_transform.easing = (behavior__this_content_on_transform.parent.parent.animationEasing) }, [behavior__this_content_on_transform.parent.parent,'animationEasing'])

	behavior__this_content_on_transform.completed()
	_this$content.setAnimation('transform', behavior__this_content_on_transform);

			_this$content.completed()
//assigning nativeScrolling to (${context.system.device} === ${context.system.Mobile})
			$this._replaceUpdater('nativeScrolling', function() { $this.nativeScrolling = ($this._context.system.device === $this._context.system.Mobile) }, [$this._context.system,'device',$this._context.system,'Mobile'])
//assigning contentWidth to (1)
			$this._removeUpdater('contentWidth'); $this.contentWidth = (1);
//assigning contentHeight to (1)
			$this._removeUpdater('contentHeight'); $this.contentHeight = (1);
//assigning handleNavigationKeys to (true)
			$this._removeUpdater('handleNavigationKeys'); $this.handleNavigationKeys = (true);

			$this.completed()
}


//=====[component core.GridView]=====================

	var GridViewBaseComponent = $core.BaseView
	var GridViewBasePrototype = GridViewBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.BaseView}
 */
	var GridViewComponent = $core.GridView = function(parent, row) {
		GridViewBaseComponent.apply(this, arguments)

	}
	var GridViewPrototype = GridViewComponent.prototype = Object.create(GridViewBasePrototype)

	GridViewPrototype.constructor = GridViewComponent

	GridViewPrototype.componentName = 'core.GridView'
	core.addProperty(GridViewPrototype, 'int', 'cellWidth', (100))
	core.addProperty(GridViewPrototype, 'int', 'cellHeight', (100))
	core.addProperty(GridViewPrototype, 'int', 'rows')
	core.addProperty(GridViewPrototype, 'int', 'columns')
/** @const @type {number} */
	GridViewPrototype.FlowLeftToRight = 0
/** @const @type {number} */
	GridViewComponent.FlowLeftToRight = 0
/** @const @type {number} */
	GridViewPrototype.FlowTopToBottom = 1
/** @const @type {number} */
	GridViewComponent.FlowTopToBottom = 1
	core.addProperty(GridViewPrototype, 'enum', 'flow')
	GridViewPrototype._updateOverflow = function() {
		if (!this.nativeScrolling)
			return

		var horizontal = this.flow !== this.FlowLeftToRight
		var style = {}
		if (horizontal) {
			style['overflow-x'] = 'auto'
			style['overflow-y'] = 'hidden'
		} else {
			style['overflow-x'] = 'hidden'
			style['overflow-y'] = 'auto'
		}
		this.style(style)
	}
	GridViewPrototype.moveUp = function() {
		if (this.flow === this.FlowLeftToRight) {
			if (!this.keyNavigationWraps && this.currentIndex < this.columns)
				return false

			if (this.keyNavigationWraps && this.currentIndex - this.columns < 0)
				this.currentIndex = this.count - 1
			else if (this.currentIndex - this.columns < 0)
				this.currentIndex = 0
			else
				this.currentIndex -= this.columns
		} else {
			if (!this.keyNavigationWraps && this.currentIndex === 0)
				return false
			--this.currentIndex
		}
		return true
	}
	GridViewPrototype.moveLeft = function() {
		if (this.flow === this.FlowLeftToRight) {
			if (this.keyNavigationWraps && this.currentIndex === 0)
				this.currentIndex = this.count - 1
			else if (!this.keyNavigationWraps && this.currentIndex === 0)
				return false
			else
				--this.currentIndex
		} else {
			if (!this.keyNavigationWraps && this.currentIndex < this.rows)
				return false
			if (this.currentIndex - this.rows < 0)
				this.currentIndex = 0
			else
				this.currentIndex -= this.rows
		}
		return true
	}
	GridViewPrototype.moveRight = function() {
		if (this.flow === this.FlowLeftToRight) {
			if (this.keyNavigationWraps && this.currentIndex === this.count - 1)
				this.currentIndex = 0
			else if (!this.keyNavigationWraps && this.currentIndex === this.count - 1)
				return false
			else
				++this.currentIndex
		} else {
			if (!this.keyNavigationWraps && this.currentIndex > this.count - this.rows + 1)
				return false
			if (this.currentIndex + this.rows >= this.count)
				this.currentIndex = this.count - 1
			else
				this.currentIndex += this.rows
		}
		return true
	}
	GridViewPrototype.moveDown = function() {
		if (this.flow === this.FlowLeftToRight) {
			var row = Math.floor(this.currentIndex / (this.columns))
			var rowsCount = Math.floor(this.count / (this.columns))
			if (!this.keyNavigationWraps && row >= rowsCount)
				return false

			if (this.keyNavigationWraps && this.currentIndex + this.columns >= this.count)
				this.currentIndex = 0
			else if (this.currentIndex + this.columns >= this.count)
				this.currentIndex = this.count - 1
			else
				this.currentIndex += this.columns
		} else {
			if (!this.keyNavigationWraps && this.currentIndex === this.columns - 1)
				return false
			++this.currentIndex
		}
		return true
	}
	GridViewPrototype._layout = function() {
	var model = this._get('model', true)

		if (!this.recursiveVisible && !this.offlineLayout)
			return

		var model = this._attached;
		if (!model) {
			this.layoutFinished()
			return
		}

		this.count = model.count
		if (!this.count) {
			this.layoutFinished()
			return
		}

		var horizontal = this.flow === this.FlowLeftToRight

		var items = this._items
		var n = items.length
		var w = this.width, h = this.height
		if (this.trace)
			log("layout " + n + " into " + w + "x" + h + " @ " + this.content.x + "," + this.content.y)
		var created = false
		var x = 0, y = 0
		var cx = this.content.x, cy = this.content.y

		var atEnd = horizontal? function() { return cy + y >= h }: function() { return cx + x >= w }

		var itemsCount = 0
		var cellWidth = this.cellWidth, cellHeight = this.cellHeight
		var stepX = cellWidth + this.spacing, stepY = cellHeight + this.spacing
		for(var i = 0; i < n && !atEnd(); ++i) {
			var item = this._items[i]

			if (!item) {
				item = this._createDelegate(i)
				if (item)
					created = true
			}

			++itemsCount

			if (item) {
				item.viewX = x
				item.viewY = y
			}

			if (item) {
				if (this.currentIndex === i && !item.focused) {
					this.focusChild(item)
					if (this.contentFollowsCurrentItem)
						this.positionViewAtIndex(i)
				}

				var visible = horizontal? (cy + y + item.height >= 0 && cy + y < h): (cx + x + item.width >= 0 && cx + x < w)
				item.visibleInView = visible
			}

			if (horizontal) {
				x += stepX
				if (x > 0 && x + cellWidth > w) {
					x = 0
					y += stepY
				}
			} else {
				y += stepY
				if (y > 0 && y + cellHeight > h) {
					y = 0
					x += stepX
				}
			}
		}
		for(; i < n; ++i) {
			var item = items[i]
			if (item)
				item.visibleInView = false
		}

		if (!horizontal) {
			this.rows = Math.floor((h + this.spacing) / (this.cellHeight + this.spacing))
			this.columns = Math.floor((n + this.rows - 1) / this.rows)
			this.contentWidth = this.content.width = this.columns * (this.cellWidth + this.spacing) - this.spacing
			this.contentHeight = this.content.height = this.rows * (this.cellHeight + this.spacing) - this.spacing
		} else {
			this.columns = Math.floor((w + this.spacing ) / (this.cellWidth + this.spacing))
			this.rows = Math.floor((n + this.columns - 1) / this.columns)
			this.contentWidth = this.content.width = this.columns * (this.cellWidth + this.spacing) - this.spacing
			this.contentHeight = this.content.height = this.rows * (this.cellHeight + this.spacing) - this.spacing
		}
		//log(horizontal, w, h, this.rows, this.columns, this.currentIndex, this.contentWidth + "x" + this.contentHeight)
		this.layoutFinished()
		if (created)
			this._context.scheduleComplete()
	}
	GridViewPrototype.__complete = function() { GridViewBasePrototype.__complete.call(this)
this._updateOverflow()
}
	GridViewPrototype.move = function(dx,dy) {
		var horizontal = this.flow === this.FlowLeftToRight
		var x, y
		if (horizontal && this.contentHeight > this.height) {
			y = this.contentY + dy
			if (y < 0)
				y = 0
			else if (y > this.contentHeight - this.height)
				y = this.contentHeight - this.height
			this.contentY = y
		} else if (!horizontal && this.contentWidth > this.width) {
			x = this.contentX + dx
			if (x < 0)
				x = 0
			else if (x > this.contentWidth - this.width)
				x = this.contentWidth - this.width
			this.contentX = x
		}
	}
	GridViewPrototype.positionViewAtIndex = function(idx) {
		var cx = this.contentX, cy = this.contentY
		var itemBox = this.getItemPosition(idx)
		var x = itemBox[0], y = itemBox[1]
		var iw = itemBox[2], ih = itemBox[3]
		var w = this.width, h = this.height
		var horizontal = this.flow === this.FlowLeftToRight
		if (!horizontal) {
			if (iw > w) {
				this.contentX = x - w / 2 + iw / 2
				return
			}
			if (x - cx < 0)
				this.contentX = x
			else if (x - cx + iw > w)
				this.contentX = x + iw - w
		} else {
			if (ih > h) {
				this.contentY = y - h / 2 + ih / 2
				return
			}
			if (y - cy < 0)
				this.contentY = y
			else if (y - cy + ih > h)
				this.contentY = y + ih - h
		}
	}
	GridViewPrototype.getItemPosition = function(idx) {
		var horizontal = this.flow === this.FlowLeftToRight
		var x, y, cw = this.cellWidth, ch = this.cellHeight
		if (horizontal) {
			if (this.columns === 0)
				return [0, 0, 0, 0]
			x = (idx % this.columns) * cw
			y = Math.floor(idx / this.columns) * ch
		} else {
			if (this.rows === 0)
				return [0, 0, 0, 0]
			x = Math.floor(idx / this.rows) * cw
			y = (idx % this.rows) * ch
		}
		return [x, y, cw, ch]
	}
	GridViewPrototype.indexAt = function(x,y) {
		x -= this.content.x
		y -= this.content.y
		var horizontal = this.flow === this.FlowLeftToRight
		x = Math.floor(x / (this.cellWidth + this.spacing))
		y = Math.floor(y / (this.cellHeight + this.spacing))
		if (!horizontal) {
			return x * this.rows + y
		} else {
			return y * this.columns + x
		}
	}
	$core._protoOnChanged(GridViewPrototype, 'count', function(value) {
		if (value == 0) {
			this.rows = 0
			this.columns = 0
		}
	})
	var $code$0 = function(value) {
		this._scheduleLayout()
	}
	$core._protoOnChanged(GridViewPrototype, 'cellWidth', $code$0)
	$core._protoOnChanged(GridViewPrototype, 'cellHeight', $code$0)
	$core._protoOnChanged(GridViewPrototype, 'flow', function(value) {
		this._updateOverflow()
		this._scheduleLayout()
	})
	$core._protoOnKey(GridViewPrototype, 'Key', function(key,event) {
		if (!this.handleNavigationKeys)
			return false;

		switch (key) {
			case 'Up': return this.moveUp()
			case 'Down': return this.moveDown()
			case 'Left': return this.moveLeft()
			case 'Right': return this.moveRight()
		}
	})

	GridViewPrototype.$c = function($c) {
		var $this = this;
		GridViewBasePrototype.$c.call(this, $c.$b = { })

	}
	GridViewPrototype.$s = function($c) {
		var $this = this;
	GridViewBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.experimental.Mosaic]=====================

	var MosaicBaseComponent = $core.GridView
	var MosaicBasePrototype = MosaicBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.GridView}
 */
	var MosaicComponent = $controls$experimental.Mosaic = function(parent, row) {
		MosaicBaseComponent.apply(this, arguments)

	}
	var MosaicPrototype = MosaicComponent.prototype = Object.create(MosaicBasePrototype)

	MosaicPrototype.constructor = MosaicComponent

	MosaicPrototype.componentName = 'controls.experimental.Mosaic'
	MosaicPrototype.play = $core.createSignal('play')
	MosaicPrototype.itemFocused = $core.createSignal('itemFocused')
	core.addProperty(MosaicPrototype, 'bool', 'hoverMode')
	core.addProperty(MosaicPrototype, 'bool', 'mobile')
	core.addProperty(MosaicPrototype, 'int', 'offset')
	core.addProperty(MosaicPrototype, 'int', 'delegateRadius')
	MosaicPrototype.fill = function(items,mappingFunc) {
		var res = []
		for (var i in items) {
			var row = mappingFunc(items[i])
			if (row)
				res.push(row)
		}
		this.model.assign(res)
	}
	$core._protoOnKey(MosaicPrototype, 'Key', function(key,event) {
		this.hoverMode = false
		return false
	})

	MosaicPrototype.$c = function($c) {
		var $this = this;
		MosaicBasePrototype.$c.call(this, $c.$b = { })
$this.delegate = (function(__parent, __row) {
		var delegate = new $core.Rectangle(__parent, __row)
		var $c = { delegate : delegate }

//creating component Rectangle
			delegate.$c($c.$c$delegate = { })
			delegate.pressed = $core.createSignal('pressed').bind(delegate)
	core.addProperty(delegate, 'bool', 'active')
	core.addProperty(delegate, 'Mixin', 'hoverMixin')
			var delegate$child0 = new $core.MouseMoveMixin(delegate)
			$c.delegate$child0 = delegate$child0

//creating component MouseMoveMixin
			delegate$child0.$c($c.$c$delegate$child0 = { })

			delegate.addChild(delegate$child0)
			var delegate$child1 = new $core.Image(delegate)
			$c.delegate$child1 = delegate$child1

//creating component Image
			delegate$child1.$c($c.$c$delegate$child1 = { })
	core.addProperty(delegate$child1, 'bool', 'display')
			delegate$child1._setId('programImage')
			delegate.addChild(delegate$child1)
			var delegate$child2 = new $core.Rectangle(delegate)
			$c.delegate$child2 = delegate$child2

//creating component Rectangle
			delegate$child2.$c($c.$c$delegate$child2 = { })
//creating component controls.experimental.<anonymous>
			var delegate_child2$gradient = new $core.Gradient(delegate$child2)
			$c.delegate_child2$gradient = delegate_child2$gradient

//creating component Gradient
			delegate_child2$gradient.$c($c.$c$delegate_child2$gradient = { })
			var delegate_child2_gradient$child0 = new $core.GradientStop(delegate_child2$gradient)
			$c.delegate_child2_gradient$child0 = delegate_child2_gradient$child0

//creating component GradientStop
			delegate_child2_gradient$child0.$c($c.$c$delegate_child2_gradient$child0 = { })

			delegate_child2$gradient.addChild(delegate_child2_gradient$child0)
			var delegate_child2_gradient$child1 = new $core.GradientStop(delegate_child2$gradient)
			$c.delegate_child2_gradient$child1 = delegate_child2_gradient$child1

//creating component GradientStop
			delegate_child2_gradient$child1.$c($c.$c$delegate_child2_gradient$child1 = { })

			delegate_child2$gradient.addChild(delegate_child2_gradient$child1)
			delegate$child2.gradient = delegate_child2$gradient
			delegate.addChild(delegate$child2)
			var delegate$child3 = new $core.Image(delegate)
			$c.delegate$child3 = delegate$child3

//creating component Image
			delegate$child3.$c($c.$c$delegate$child3 = { })

			delegate.addChild(delegate$child3)
			var delegate$child4 = new $controls$web.EllipsisText(delegate)
			$c.delegate$child4 = delegate$child4

//creating component EllipsisText
			delegate$child4.$c($c.$c$delegate$child4 = { })

			delegate.addChild(delegate$child4)
			var delegate$child5 = new $core.Rectangle(delegate)
			$c.delegate$child5 = delegate$child5

//creating component Rectangle
			delegate$child5.$c($c.$c$delegate$child5 = { })
			var delegate_child5$child0 = new $core.Rectangle(delegate$child5)
			$c.delegate_child5$child0 = delegate_child5$child0

//creating component Rectangle
			delegate_child5$child0.$c($c.$c$delegate_child5$child0 = { })

			delegate$child5.addChild(delegate_child5$child0)
			delegate.addChild(delegate$child5)
			var delegate$child6 = new $core.Timer(delegate)
			$c.delegate$child6 = delegate$child6

//creating component Timer
			delegate$child6.$c($c.$c$delegate$child6 = { })
			delegate$child6._setId('flipTimer')
			delegate.addChild(delegate$child6)
//creating component controls.experimental.<anonymous>
			var delegate$hoverMixin = new $controls$web.HoverClickMixin(delegate)
			$c.delegate$hoverMixin = delegate$hoverMixin

//creating component HoverClickMixin
			delegate$hoverMixin.$c($c.$c$delegate$hoverMixin = { })

			delegate.hoverMixin = delegate$hoverMixin
			core.addAliasProperty(delegate, 'hover', function() { return delegate.hoverMixin }, 'value')

//setting up component Rectangle
			var delegate = $c.delegate
			delegate.$s($c.$c$delegate)
			delete $c.$c$delegate

//assigning border.color to (${activeFocus} ? "#8AF" : "#0000")
			delegate.border._replaceUpdater('color', function() { delegate.border.color = (delegate.activeFocus ? "#8AF" : "#0000") }, [delegate,'activeFocus'])
//assigning border.width to (${activeFocus} ? 1 : 0)
			delegate.border._replaceUpdater('width', function() { delegate.border.width = (delegate.activeFocus ? 1 : 0) }, [delegate,'activeFocus'])
//assigning clip to (true)
			delegate._removeUpdater('clip'); delegate.clip = (true);
//assigning color to ("#464646")
			delegate._removeUpdater('color'); delegate.color = ("#464646");

//setting up component HoverClickMixin
			var delegate$hoverMixin = $c.delegate$hoverMixin
			delegate$hoverMixin.$s($c.$c$delegate$hoverMixin)
			delete $c.$c$delegate$hoverMixin


			delegate$hoverMixin.completed()
//assigning effects.shadow.blur to (10)
			delegate.effects.shadow._removeUpdater('blur'); delegate.effects.shadow.blur = (10);
//assigning height to (${parent.cellHeight})
			delegate._replaceUpdater('height', function() { delegate.height = (delegate.parent.cellHeight) }, [delegate.parent,'cellHeight'])
//assigning width to (${parent.cellWidth})
			delegate._replaceUpdater('width', function() { delegate.width = (delegate.parent.cellWidth) }, [delegate.parent,'cellWidth'])
//assigning radius to (${nowonTvGrid.delegateRadius})
			delegate._replaceUpdater('radius', function() { delegate.radius = (delegate._get('nowonTvGrid').delegateRadius) }, [delegate._get('nowonTvGrid'),'delegateRadius'])
//assigning effects.shadow.color to (${activeFocus} ? "#8AF" : "#0000")
			delegate.effects.shadow._replaceUpdater('color', function() { delegate.effects.shadow.color = (delegate.activeFocus ? "#8AF" : "#0000") }, [delegate,'activeFocus'])
//assigning active to (${activeFocus})
			delegate._replaceUpdater('active', function() { delegate.active = (delegate.activeFocus) }, [delegate,'activeFocus'])
//assigning effects.shadow.spread to (2)
			delegate.effects.shadow._removeUpdater('spread'); delegate.effects.shadow.spread = (2);
//assigning z to (${activeFocus} ? ${parent.z} + 1 : ${parent.z})
			delegate._replaceUpdater('z', function() { delegate.z = (delegate.activeFocus ? delegate.parent.z + 1 : delegate.parent.z) }, [delegate.parent,'z',delegate,'activeFocus'])
//assigning transform.scaleX to (${activeFocus} ? 1.05 : 1)
			delegate.transform._replaceUpdater('scaleX', function() { delegate.transform.scaleX = (delegate.activeFocus ? 1.05 : 1) }, [delegate,'activeFocus'])
//assigning transform.scaleY to (${activeFocus} ? 1.05 : 1)
			delegate.transform._replaceUpdater('scaleY', function() { delegate.transform.scaleY = (delegate.activeFocus ? 1.05 : 1) }, [delegate,'activeFocus'])
			delegate.on('clicked', function() {
	var model = this._get('model', true)
 this.parent.currentIndex = model.index; this.pressed() }.bind(delegate))
			delegate.on('pressed', function() {
	var model = this._get('model', true)
 this.parent.play(model.index) }.bind(delegate))
			delegate.onChanged('activeFocus', function(value) {
	var flipTimer = this._get('flipTimer', true)

			if (!value) {
				this.transform.rotateZ = 0
				return
			}

			flipTimer.restart()
		}.bind(delegate))
			delegate.onPressed('Select', function(key,event) { this.pressed() }.bind(delegate))

//setting up component MouseMoveMixin
			var delegate$child0 = $c.delegate$child0
			delegate$child0.$s($c.$c$delegate$child0)
			delete $c.$c$delegate$child0

			delegate$child0.on('mouseMove', function() {
	var model = this._get('model', true), nowonTvGrid = this._get('nowonTvGrid', true)

				nowonTvGrid.hoverMode = true
				nowonTvGrid.currentIndex = model.index
			}.bind(delegate$child0))

			delegate$child0.completed()

//setting up component Image
			var delegate$child1 = $c.delegate$child1
			delegate$child1.$s($c.$c$delegate$child1)
			delete $c.$c$delegate$child1

//assigning source to (${model.preview} ? ${model.preview} : '')
			delegate$child1._replaceUpdater('source', function() { delegate$child1.source = (delegate$child1._get('model').preview ? delegate$child1._get('model').preview : '') }, [delegate$child1._get('_delegate'),'_row'])
//assigning fillMode to (_globals.core.Image.prototype.PreserveAspectCrop)
			delegate$child1._removeUpdater('fillMode'); delegate$child1.fillMode = (_globals.core.Image.prototype.PreserveAspectCrop);
//assigning visible to (${source})
			delegate$child1._replaceUpdater('visible', function() { delegate$child1.visible = (delegate$child1.source) }, [delegate$child1,'source'])
//assigning anchors.fill to (${parent})
			delegate$child1.anchors._removeUpdater('fill'); delegate$child1.anchors.fill = (delegate$child1.parent);
			delegate$child1.onChanged('status', function(value) {
				this.display = this.status == this.Ready
			}.bind(delegate$child1))

			delegate$child1.completed()

//setting up component Rectangle
			var delegate$child2 = $c.delegate$child2
			delegate$child2.$s($c.$c$delegate$child2)
			delete $c.$c$delegate$child2

//assigning anchors.bottomMargin to (((2) * ${context.virtualScale}))
			delegate$child2.anchors._replaceUpdater('bottomMargin', function() { delegate$child2.anchors.bottomMargin = (((2) * delegate$child2._context.virtualScale)) }, [delegate$child2._context,'virtualScale'])
//assigning width to ((${parent.width}))
			delegate$child2._replaceUpdater('width', function() { delegate$child2.width = ((delegate$child2.parent.width)) }, [delegate$child2.parent,'width'])

//setting up component Gradient
			var delegate_child2$gradient = $c.delegate_child2$gradient
			delegate_child2$gradient.$s($c.$c$delegate_child2$gradient)
			delete $c.$c$delegate_child2$gradient


//setting up component GradientStop
			var delegate_child2_gradient$child0 = $c.delegate_child2_gradient$child0
			delegate_child2_gradient$child0.$s($c.$c$delegate_child2_gradient$child0)
			delete $c.$c$delegate_child2_gradient$child0

//assigning color to ("#0000")
			delegate_child2_gradient$child0._removeUpdater('color'); delegate_child2_gradient$child0.color = ("#0000");
//assigning position to (0.0)
			delegate_child2_gradient$child0._removeUpdater('position'); delegate_child2_gradient$child0.position = (0.0);

			delegate_child2_gradient$child0.completed()

//setting up component GradientStop
			var delegate_child2_gradient$child1 = $c.delegate_child2_gradient$child1
			delegate_child2_gradient$child1.$s($c.$c$delegate_child2_gradient$child1)
			delete $c.$c$delegate_child2_gradient$child1

//assigning color to ("#000")
			delegate_child2_gradient$child1._removeUpdater('color'); delegate_child2_gradient$child1.color = ("#000");
//assigning position to (1.0)
			delegate_child2_gradient$child1._removeUpdater('position'); delegate_child2_gradient$child1.position = (1.0);

			delegate_child2_gradient$child1.completed()

			delegate_child2$gradient.completed()
//assigning anchors.bottom to (${parent.bottom})
			delegate$child2.anchors._replaceUpdater('bottom', function() { delegate$child2.anchors.bottom = (delegate$child2.parent.bottom) }, [delegate$child2.parent,'bottom'])
//assigning height to (((70) * ${context.virtualScale}))
			delegate$child2._replaceUpdater('height', function() { delegate$child2.height = (((70) * delegate$child2._context.virtualScale)) }, [delegate$child2._context,'virtualScale'])

			delegate$child2.completed()

//setting up component Image
			var delegate$child3 = $c.delegate$child3
			delegate$child3.$s($c.$c$delegate$child3)
			delete $c.$c$delegate$child3

//assigning horizontalAlignment to (_globals.core.Image.prototype.AlignRight)
			delegate$child3._removeUpdater('horizontalAlignment'); delegate$child3.horizontalAlignment = (_globals.core.Image.prototype.AlignRight);
//assigning source to (${model.icon} ? ${model.icon} : '')
			delegate$child3._replaceUpdater('source', function() { delegate$child3.source = (delegate$child3._get('model').icon ? delegate$child3._get('model').icon : '') }, [delegate$child3._get('_delegate'),'_row'])
//assigning anchors.bottomMargin to (((21) * ${context.virtualScale}))
			delegate$child3.anchors._replaceUpdater('bottomMargin', function() { delegate$child3.anchors.bottomMargin = (((21) * delegate$child3._context.virtualScale)) }, [delegate$child3._context,'virtualScale'])
//assigning height to (((70) * ${context.virtualScale}))
			delegate$child3._replaceUpdater('height', function() { delegate$child3.height = (((70) * delegate$child3._context.virtualScale)) }, [delegate$child3._context,'virtualScale'])
//assigning width to (((100) * ${context.virtualScale}))
			delegate$child3._replaceUpdater('width', function() { delegate$child3.width = (((100) * delegate$child3._context.virtualScale)) }, [delegate$child3._context,'virtualScale'])
//assigning fillMode to (_globals.core.Image.prototype.PreserveAspectFit)
			delegate$child3._removeUpdater('fillMode'); delegate$child3.fillMode = (_globals.core.Image.prototype.PreserveAspectFit);
//assigning verticalAlignment to (_globals.core.Image.prototype.AlignTop)
			delegate$child3._removeUpdater('verticalAlignment'); delegate$child3.verticalAlignment = (_globals.core.Image.prototype.AlignTop);
//assigning anchors.bottom to (${parent.bottom})
			delegate$child3.anchors._replaceUpdater('bottom', function() { delegate$child3.anchors.bottom = (delegate$child3.parent.bottom) }, [delegate$child3.parent,'bottom'])
//assigning x to (((10) * ${context.virtualScale}))
			delegate$child3._replaceUpdater('x', function() { delegate$child3.x = (((10) * delegate$child3._context.virtualScale)) }, [delegate$child3._context,'virtualScale'])

			delegate$child3.completed()

//setting up component EllipsisText
			var delegate$child4 = $c.delegate$child4
			delegate$child4.$s($c.$c$delegate$child4)
			delete $c.$c$delegate$child4

//assigning color to ("#fff")
			delegate$child4._removeUpdater('color'); delegate$child4.color = ("#fff");
//assigning text to (${model.title})
			delegate$child4._replaceUpdater('text', function() { delegate$child4.text = (delegate$child4._get('model').title) }, [delegate$child4._get('_delegate'),'_row'])
//assigning anchors.bottomMargin to (((6) * ${context.virtualScale}))
			delegate$child4.anchors._replaceUpdater('bottomMargin', function() { delegate$child4.anchors.bottomMargin = (((6) * delegate$child4._context.virtualScale)) }, [delegate$child4._context,'virtualScale'])
//assigning width to (((270) * ${context.virtualScale}))
			delegate$child4._replaceUpdater('width', function() { delegate$child4.width = (((270) * delegate$child4._context.virtualScale)) }, [delegate$child4._context,'virtualScale'])
//assigning anchors.bottom to (${parent.bottom})
			delegate$child4.anchors._replaceUpdater('bottom', function() { delegate$child4.anchors.bottom = (delegate$child4.parent.bottom) }, [delegate$child4.parent,'bottom'])
//assigning font.pixelSize to (${nowonTvGrid.mobile} ? ((9) * ${context.virtualScale}) : ((18) * ${context.virtualScale}))
			delegate$child4.font._replaceUpdater('pixelSize', function() { delegate$child4.font.pixelSize = (delegate$child4._get('nowonTvGrid').mobile ? ((9) * delegate$child4._context.virtualScale) : ((18) * delegate$child4._context.virtualScale)) }, [delegate$child4._get('nowonTvGrid'),'mobile',delegate$child4._context,'virtualScale'])
//assigning x to (((10) * ${context.virtualScale}))
			delegate$child4._replaceUpdater('x', function() { delegate$child4.x = (((10) * delegate$child4._context.virtualScale)) }, [delegate$child4._context,'virtualScale'])

			delegate$child4.completed()

//setting up component Rectangle
			var delegate$child5 = $c.delegate$child5
			delegate$child5.$s($c.$c$delegate$child5)
			delete $c.$c$delegate$child5

//assigning color to ("#000c")
			delegate$child5._removeUpdater('color'); delegate$child5.color = ("#000c");
//assigning width to ((${parent.width}))
			delegate$child5._replaceUpdater('width', function() { delegate$child5.width = ((delegate$child5.parent.width)) }, [delegate$child5.parent,'width'])
//assigning anchors.bottom to (${parent.bottom})
			delegate$child5.anchors._replaceUpdater('bottom', function() { delegate$child5.anchors.bottom = (delegate$child5.parent.bottom) }, [delegate$child5.parent,'bottom'])
//assigning clip to (true)
			delegate$child5._removeUpdater('clip'); delegate$child5.clip = (true);
//assigning height to (((2) * ${context.virtualScale}))
			delegate$child5._replaceUpdater('height', function() { delegate$child5.height = (((2) * delegate$child5._context.virtualScale)) }, [delegate$child5._context,'virtualScale'])

//setting up component Rectangle
			var delegate_child5$child0 = $c.delegate_child5$child0
			delegate_child5$child0.$s($c.$c$delegate_child5$child0)
			delete $c.$c$delegate_child5$child0

//assigning color to ("#e53935")
			delegate_child5$child0._removeUpdater('color'); delegate_child5$child0.color = ("#e53935");
//assigning width to (${parent.width} * ${model.progress})
			delegate_child5$child0._replaceUpdater('width', function() { delegate_child5$child0.width = (delegate_child5$child0.parent.width * delegate_child5$child0._get('model').progress) }, [delegate_child5$child0._get('_delegate'),'_row',delegate_child5$child0.parent,'width'])
//assigning height to ((${parent.height}))
			delegate_child5$child0._replaceUpdater('height', function() { delegate_child5$child0.height = ((delegate_child5$child0.parent.height)) }, [delegate_child5$child0.parent,'height'])

			delegate_child5$child0.completed()

			delegate$child5.completed()

//setting up component Timer
			var delegate$child6 = $c.delegate$child6
			delegate$child6.$s($c.$c$delegate$child6)
			delete $c.$c$delegate$child6

//assigning interval to (3000)
			delegate$child6._removeUpdater('interval'); delegate$child6.interval = (3000);
			delegate$child6.on('triggered', function() {
	var model = this._get('model', true), nowonTvGrid = this._get('nowonTvGrid', true)

				if (!this.parent.activeFocus)
					return
				this.parent.transform.scaleX = 0
				this.parent.transform.scaleY = 0
				this.parent.transform.rotateZ = 180
				nowonTvGrid.itemFocused(model.index)
			}.bind(delegate$child6))

			delegate$child6.completed()
	var behavior_delegate_on_transform = new $core.Animation(delegate)
	var behavior_delegate_on_transform$c = { behavior_delegate_on_transform: behavior_delegate_on_transform }

//creating component Animation
	behavior_delegate_on_transform.$c(behavior_delegate_on_transform$c.$c$behavior_delegate_on_transform = { })


//setting up component Animation
	var behavior_delegate_on_transform = behavior_delegate_on_transform$c.behavior_delegate_on_transform
	behavior_delegate_on_transform.$s(behavior_delegate_on_transform$c.$c$behavior_delegate_on_transform)
	delete behavior_delegate_on_transform$c.$c$behavior_delegate_on_transform

//assigning duration to (400)
	behavior_delegate_on_transform._removeUpdater('duration'); behavior_delegate_on_transform.duration = (400);

	behavior_delegate_on_transform.completed()
	delegate.setAnimation('transform', behavior_delegate_on_transform);

	var behavior_delegate_on_boxshadow = new $core.Animation(delegate)
	var behavior_delegate_on_boxshadow$c = { behavior_delegate_on_boxshadow: behavior_delegate_on_boxshadow }

//creating component Animation
	behavior_delegate_on_boxshadow.$c(behavior_delegate_on_boxshadow$c.$c$behavior_delegate_on_boxshadow = { })


//setting up component Animation
	var behavior_delegate_on_boxshadow = behavior_delegate_on_boxshadow$c.behavior_delegate_on_boxshadow
	behavior_delegate_on_boxshadow.$s(behavior_delegate_on_boxshadow$c.$c$behavior_delegate_on_boxshadow)
	delete behavior_delegate_on_boxshadow$c.$c$behavior_delegate_on_boxshadow

//assigning duration to (400)
	behavior_delegate_on_boxshadow._removeUpdater('duration'); behavior_delegate_on_boxshadow.duration = (400);

	behavior_delegate_on_boxshadow.completed()
	delegate.setAnimation('boxshadow', behavior_delegate_on_boxshadow);

			delegate.completed()

		return delegate
})
//creating component controls.experimental.<anonymous>
		var _this$model = new $core.ListModel($this)
		$c._this$model = _this$model

//creating component ListModel
		_this$model.$c($c.$c$_this$model = { })

		$this.model = _this$model
		$this._setId('nowonTvGrid')
	}
	MosaicPrototype.$s = function($c) {
		var $this = this;
	MosaicBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning cellWidth to ((${context.width} > ${context.height} ? 0.25 : 0.5) * ${width} - ${spacing})
			$this._replaceUpdater('cellWidth', function() { $this.cellWidth = (($this._context.width > $this._context.height ? 0.25 : 0.5) * $this.width - $this.spacing) }, [$this,'width',$this._context,'height',$this._context,'width',$this,'spacing'])
//assigning mobile to (${context.system.device} === ${context.system.Mobile})
			$this._replaceUpdater('mobile', function() { $this.mobile = ($this._context.system.device === $this._context.system.Mobile) }, [$this._context.system,'device',$this._context.system,'Mobile'])
//assigning keyNavigationWraps to (false)
			$this._removeUpdater('keyNavigationWraps'); $this.keyNavigationWraps = (false);
//assigning spacing to (((10) * ${context.virtualScale}))
			$this._replaceUpdater('spacing', function() { $this.spacing = (((10) * $this._context.virtualScale)) }, [$this._context,'virtualScale'])
//assigning contentFollowsCurrentItem to (! ${hoverMode})
			$this._replaceUpdater('contentFollowsCurrentItem', function() { $this.contentFollowsCurrentItem = (! $this.hoverMode) }, [$this,'hoverMode'])
//assigning height to ((${parent.height}))
			$this._replaceUpdater('height', function() { $this.height = (($this.parent.height)) }, [$this.parent,'height'])
//assigning width to ((${parent.width}))
			$this._replaceUpdater('width', function() { $this.width = (($this.parent.width)) }, [$this.parent,'width'])
//assigning content.cssTranslatePositioning to (true)
			$this.content._removeUpdater('cssTranslatePositioning'); $this.content.cssTranslatePositioning = (true);

//setting up component ListModel
			var _this$model = $c._this$model
			_this$model.$s($c.$c$_this$model)
			delete $c.$c$_this$model


			_this$model.completed()
//assigning cellHeight to (${cellWidth} * 0.5625)
			$this._replaceUpdater('cellHeight', function() { $this.cellHeight = ($this.cellWidth * 0.5625) }, [$this,'cellWidth'])

			$this.completed()
}


//=====[component core.Border]=====================

	var BorderBaseComponent = $core.Object
	var BorderBasePrototype = BorderBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var BorderComponent = $core.Border = function(parent, row) {
		BorderBaseComponent.apply(this, arguments)

	}
	var BorderPrototype = BorderComponent.prototype = Object.create(BorderBasePrototype)

	BorderPrototype.constructor = BorderComponent

	BorderPrototype.componentName = 'core.Border'
	core.addProperty(BorderPrototype, 'int', 'width')
	core.addProperty(BorderPrototype, 'color', 'color', ("black"))
	core.addLazyProperty(BorderPrototype, 'left', (function(__parent, __row) {
		var lazy$left = new $core.BorderSide(__parent, __row)
		var $c = { lazy$left : lazy$left }

//creating component BorderSide
			lazy$left.$c($c.$c$lazy$left = { })


//setting up component BorderSide
			var lazy$left = $c.lazy$left
			lazy$left.$s($c.$c$lazy$left)
			delete $c.$c$lazy$left

//assigning name to ("left")
			lazy$left._removeUpdater('name'); lazy$left.name = ("left");

			lazy$left.completed()

		return lazy$left
}))
	core.addLazyProperty(BorderPrototype, 'right', (function(__parent, __row) {
		var lazy$right = new $core.BorderSide(__parent, __row)
		var $c = { lazy$right : lazy$right }

//creating component BorderSide
			lazy$right.$c($c.$c$lazy$right = { })


//setting up component BorderSide
			var lazy$right = $c.lazy$right
			lazy$right.$s($c.$c$lazy$right)
			delete $c.$c$lazy$right

//assigning name to ("right")
			lazy$right._removeUpdater('name'); lazy$right.name = ("right");

			lazy$right.completed()

		return lazy$right
}))
	core.addLazyProperty(BorderPrototype, 'top', (function(__parent, __row) {
		var lazy$top = new $core.BorderSide(__parent, __row)
		var $c = { lazy$top : lazy$top }

//creating component BorderSide
			lazy$top.$c($c.$c$lazy$top = { })


//setting up component BorderSide
			var lazy$top = $c.lazy$top
			lazy$top.$s($c.$c$lazy$top)
			delete $c.$c$lazy$top

//assigning name to ("top")
			lazy$top._removeUpdater('name'); lazy$top.name = ("top");

			lazy$top.completed()

		return lazy$top
}))
	core.addLazyProperty(BorderPrototype, 'bottom', (function(__parent, __row) {
		var lazy$bottom = new $core.BorderSide(__parent, __row)
		var $c = { lazy$bottom : lazy$bottom }

//creating component BorderSide
			lazy$bottom.$c($c.$c$lazy$bottom = { })


//setting up component BorderSide
			var lazy$bottom = $c.lazy$bottom
			lazy$bottom.$s($c.$c$lazy$bottom)
			delete $c.$c$lazy$bottom

//assigning name to ("bottom")
			lazy$bottom._removeUpdater('name'); lazy$bottom.name = ("bottom");

			lazy$bottom.completed()

		return lazy$bottom
}))
/** @const @type {number} */
	BorderPrototype.None = 0
/** @const @type {number} */
	BorderComponent.None = 0
/** @const @type {number} */
	BorderPrototype.Hidden = 1
/** @const @type {number} */
	BorderComponent.Hidden = 1
/** @const @type {number} */
	BorderPrototype.Dotted = 2
/** @const @type {number} */
	BorderComponent.Dotted = 2
/** @const @type {number} */
	BorderPrototype.Dashed = 3
/** @const @type {number} */
	BorderComponent.Dashed = 3
/** @const @type {number} */
	BorderPrototype.Solid = 4
/** @const @type {number} */
	BorderComponent.Solid = 4
/** @const @type {number} */
	BorderPrototype.Double = 5
/** @const @type {number} */
	BorderComponent.Double = 5
/** @const @type {number} */
	BorderPrototype.Groove = 6
/** @const @type {number} */
	BorderComponent.Groove = 6
/** @const @type {number} */
	BorderPrototype.Ridge = 7
/** @const @type {number} */
	BorderComponent.Ridge = 7
/** @const @type {number} */
	BorderPrototype.Inset = 8
/** @const @type {number} */
	BorderComponent.Inset = 8
/** @const @type {number} */
	BorderPrototype.Outset = 9
/** @const @type {number} */
	BorderComponent.Outset = 9
	core.addProperty(BorderPrototype, 'enum', 'style', BorderComponent.Solid)
/** @const @type {number} */
	BorderPrototype.Inner = 0
/** @const @type {number} */
	BorderComponent.Inner = 0
/** @const @type {number} */
	BorderPrototype.Outer = 1
/** @const @type {number} */
	BorderComponent.Outer = 1
/** @const @type {number} */
	BorderPrototype.Center = 2
/** @const @type {number} */
	BorderComponent.Center = 2
	core.addProperty(BorderPrototype, 'enum', 'type')
	$core._protoOnChanged(BorderPrototype, 'color', function(value) {
		var newColor = $core.Color.normalize(this.color)
		this.parent.style('border-color', newColor)
	})
	$core._protoOnChanged(BorderPrototype, 'width', function(value) {
		var parent = this.parent
		parent.style('border-width', value)
		switch(this.type) {
		case this.Inner:
			parent._borderXAdjust = 0
			parent._borderYAdjust = 0
			parent._borderInnerWidthAdjust = -2 * value
			parent._borderInnerHeightAdjust = -2 * value
			parent._setSizeAdjust()
			break
		case this.Outer:
			parent._borderXAdjust = -value
			parent._borderYAdjust = -value
			parent._borderWidthAdjust = 0
			parent._borderHeightAdjust = 0
			parent._setSizeAdjust()
			break
		case this.Center:
			parent._borderXAdjust = -value / 2
			parent._borderYAdjust = -value / 2
			parent._borderWidthAdjust = -value
			parent._borderHeightAdjust = -value
			parent._setSizeAdjust()
			break
		}
	})
	$core._protoOnChanged(BorderPrototype, 'type', function(value) {
		var style
		switch(value) {
			case this.Inner:
				style = 'border-box'; break;
			case this.Outer:
			case this.Center:
				style = 'content-box'; break;
		}
		this.parent.style('box-sizing', style)
	})
	$core._protoOnChanged(BorderPrototype, 'style', function(value) {
		var styleName
		switch(value) {
			case this.None: styleName = 'none'; break
			case this.Hidden: styleName = 'hidden'; break
			case this.Dotted: styleName = 'dotted'; break
			case this.Dashed: styleName = 'dashed'; break
			case this.Solid: styleName = 'solid'; break
			case this.Double: styleName = 'double'; break
			case this.Groove: styleName = 'groove'; break
			case this.Ridge: styleName = 'ridge'; break
			case this.Inset: styleName = 'inset'; break
			case this.Outset: styleName = 'outset'; break
		}

		this.parent.style('border-style', styleName)
	})

	BorderPrototype.$c = function($c) {
		var $this = this;
		BorderBasePrototype.$c.call(this, $c.$b = { })

	}
	BorderPrototype.$s = function($c) {
		var $this = this;
	BorderBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Timer]=====================

	var TimerBaseComponent = $core.Object
	var TimerBasePrototype = TimerBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var TimerComponent = $core.Timer = function(parent, row) {
		TimerBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._trigger = this._context.wrapNativeCallback(this.triggered.bind(this))
	}

	}
	var TimerPrototype = TimerComponent.prototype = Object.create(TimerBasePrototype)

	TimerPrototype.constructor = TimerComponent

	TimerPrototype.componentName = 'core.Timer'
	TimerPrototype.triggered = $core.createSignal('triggered')
	core.addProperty(TimerPrototype, 'int', 'interval', (1000))
	core.addProperty(TimerPrototype, 'bool', 'repeat')
	core.addProperty(TimerPrototype, 'bool', 'running')
	core.addProperty(TimerPrototype, 'bool', 'triggeredOnStart')
	TimerPrototype._restart = function() {
		if (this._timeout) {
			clearTimeout(this._timeout);
			this._timeout = undefined;
		}
		if (this._interval) {
			clearTimeout(this._interval);
			this._interval = undefined;
		}

		if (!this.running)
			return;

		//log("starting timer", this.interval, this.repeat);
		var self = this
		var context = self._context
		if (this.repeat)
			this._interval = setInterval(this._trigger, this.interval);
		else
			this._timeout = setTimeout(this._trigger, this.interval);
	}
	TimerPrototype.__complete = function() { TimerBasePrototype.__complete.call(this)
if (this.running && this.triggeredOnStart)
			this.triggered()
}
	TimerPrototype.stop = function() { this.running = false }
	TimerPrototype.start = function() { this.running = true }
	TimerPrototype.restart = function() { this.stop(); this.start(); }
	$core._protoOnChanged(TimerPrototype, 'running', function(value) {
		this._restart()
		if (value && this.triggeredOnStart) {
			this._triggered = false
			this.triggered()
		}
	})
	var $code$0 = function(value) { this._restart() }
	$core._protoOnChanged(TimerPrototype, 'interval', $code$0)
	$core._protoOnChanged(TimerPrototype, 'repeat', $code$0)
	$core._protoOn(TimerPrototype, 'triggered', function() {
		if (!this.repeat && (!this.triggeredOnStart || this._triggered))
			this.running = false
		this._triggered = true
	})

	TimerPrototype.$c = function($c) {
		var $this = this;
		TimerBasePrototype.$c.call(this, $c.$b = { })

	}
	TimerPrototype.$s = function($c) {
		var $this = this;
	TimerBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.core.Activity]=====================

	var ActivityBaseComponent = $controls$core.BaseActivity
	var ActivityBasePrototype = ActivityBaseComponent.prototype

/**
 * @constructor
 * @extends {$controls$core.BaseActivity}
 */
	var ActivityComponent = $controls$core.Activity = function(parent, row) {
		ActivityBaseComponent.apply(this, arguments)

	}
	var ActivityPrototype = ActivityComponent.prototype = Object.create(ActivityBasePrototype)

	ActivityPrototype.constructor = ActivityComponent

	ActivityPrototype.componentName = 'controls.core.Activity'
	ActivityPrototype.getActivity = function() {
		return this
	}
	ActivityPrototype.stop = function() {
		this.active = false
		this.stopped()
	}
	ActivityPrototype.start = function() {
		this.active = true
		this.started()
	}

	ActivityPrototype.$c = function($c) {
		var $this = this;
		ActivityBasePrototype.$c.call(this, $c.$b = { })

	}
	ActivityPrototype.$s = function($c) {
		var $this = this;
	ActivityBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component src.MosaicPage]=====================

	var MosaicPageBaseComponent = $controls$core.Activity
	var MosaicPageBasePrototype = MosaicPageBaseComponent.prototype

/**
 * @constructor
 * @extends {$controls$core.Activity}
 */
	var MosaicPageComponent = $src.MosaicPage = function(parent, row) {
		MosaicPageBaseComponent.apply(this, arguments)

	}
	var MosaicPagePrototype = MosaicPageComponent.prototype = Object.create(MosaicPageBasePrototype)

	MosaicPagePrototype.constructor = MosaicPageComponent

	MosaicPagePrototype.componentName = 'src.MosaicPage'
	core.addProperty(MosaicPagePrototype, 'int', 'delegateRadius')
	MosaicPagePrototype.init = function() {
	var anotherApi = this._get('anotherApi', true), mosaicGrid = this._get('mosaicGrid', true), api = this._get('api', true)

		// api.getMain(
		// 	function(res) {
		// 		mosaicGrid.fill(res[0].items, function(row) {
		// 			if (row.thumbnail.image_15x) {
		// 				return {
		// 					video: api.baseUrl + row.video_cover,
		// 					preview: api.baseUrl + row.thumbnail.image_15x,
		// 					title: row.title,
		// 					icon: api.baseUrl + row.logotype.image_15x
		// 				}
		// 			} else {
		// 				return null
		// 			}
		// 		})
		// 	},
		// 	function(e) { log("Failed to get content", e) }
		// )

		anotherApi.getMain(
			function(res) {
				mosaicGrid.fill(res.element.collectionItems.items, function(row) {
					if (row.element.basicCovers.items && row.element.basicCovers.items.length > 0) {
						var videoUrl = ""
						var trailers = row.element.trailers.items
						for (var i in trailers) {
							if (trailers[i].media.mimeType.indexOf("mp4") >= 0) {
								videoUrl = trailers[i].url
								break
							}
						}
						return {
							video: videoUrl,
							preview: row.element.basicCovers.items[0].url,
							title: row.element.name
						}
					} else {
						return null
					}
				})
			},
			function(e) { log("Failed to get content", e) }
		)
	}

	MosaicPagePrototype.$c = function($c) {
		var $this = this;
		MosaicPageBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new $core.Item($this)
		$c._this$child0 = _this$child0

//creating component Item
		_this$child0.$c($c.$c$_this$child0 = { })
		var _this_child0$child0 = new $controls$mixins.OverflowMixin(_this$child0)
		$c._this_child0$child0 = _this_child0$child0

//creating component OverflowMixin
		_this_child0$child0.$c($c.$c$_this_child0$child0 = { })

		_this$child0.addChild(_this_child0$child0)
		var _this_child0$child1 = new $controls$experimental.Mosaic(_this$child0)
		$c._this_child0$child1 = _this_child0$child1

//creating component Mosaic
		_this_child0$child1.$c($c.$c$_this_child0$child1 = { })
		var _this_child0_child1$child0 = new $controls$mixins.OverflowMixin(_this_child0$child1)
		$c._this_child0_child1$child0 = _this_child0_child1$child0

//creating component OverflowMixin
		_this_child0_child1$child0.$c($c.$c$_this_child0_child1$child0 = { })

		_this_child0$child1.addChild(_this_child0_child1$child0)
//creating component src.<anonymous>
		var _this_child0_child1$highlight = new $controls$experimental.NestedVideo(_this_child0$child1)
		$c._this_child0_child1$highlight = _this_child0_child1$highlight

//creating component NestedVideo
		_this_child0_child1$highlight.$c($c.$c$_this_child0_child1$highlight = { })
		var _this_child0_child1_highlight$child0 = new $core.ClickMixin(_this_child0_child1$highlight)
		$c._this_child0_child1_highlight$child0 = _this_child0_child1_highlight$child0

//creating component ClickMixin
		_this_child0_child1_highlight$child0.$c($c.$c$_this_child0_child1_highlight$child0 = { })

		_this_child0_child1$highlight.addChild(_this_child0_child1_highlight$child0)
		_this_child0$child1.highlight = _this_child0_child1$highlight
		_this_child0$child1._setId('mosaicGrid')
		_this$child0.addChild(_this_child0$child1)
		$this.addChild(_this$child0)
		$this._setId('mosaicPageProto')
	}
	MosaicPagePrototype.$s = function($c) {
		var $this = this;
	MosaicPageBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning delegateRadius to (((10) * ${context.virtualScale}))
			$this._replaceUpdater('delegateRadius', function() { $this.delegateRadius = (((10) * $this._context.virtualScale)) }, [$this._context,'virtualScale'])
//assigning name to ("mosaic")
			$this._removeUpdater('name'); $this.name = ("mosaic");
//assigning anchors.fill to (${parent})
			$this.anchors._removeUpdater('fill'); $this.anchors.fill = ($this.parent);

//setting up component Item
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning width to ((${parent.width}))
			_this$child0._replaceUpdater('width', function() { _this$child0.width = ((_this$child0.parent.width)) }, [_this$child0.parent,'width'])
//assigning height to ((${parent.height}))
			_this$child0._replaceUpdater('height', function() { _this$child0.height = ((_this$child0.parent.height)) }, [_this$child0.parent,'height'])

//setting up component OverflowMixin
			var _this_child0$child0 = $c._this_child0$child0
			_this_child0$child0.$s($c.$c$_this_child0$child0)
			delete $c.$c$_this_child0$child0

//assigning value to (_globals.controls.mixins.OverflowMixin.prototype.ScrollY)
			_this_child0$child0._removeUpdater('value'); _this_child0$child0.value = (_globals.controls.mixins.OverflowMixin.prototype.ScrollY);

			_this_child0$child0.completed()

//setting up component Mosaic
			var _this_child0$child1 = $c._this_child0$child1
			_this_child0$child1.$s($c.$c$_this_child0$child1)
			delete $c.$c$_this_child0$child1

//assigning keyProcessDelay to (300)
			_this_child0$child1._removeUpdater('keyProcessDelay'); _this_child0$child1.keyProcessDelay = (300);
//assigning delegateRadius to (${mosaicPageProto.delegateRadius})
			_this_child0$child1._replaceUpdater('delegateRadius', function() { _this_child0$child1.delegateRadius = (_this_child0$child1._get('mosaicPageProto').delegateRadius) }, [_this_child0$child1._get('mosaicPageProto'),'delegateRadius'])
//assigning spacing to (((20) * ${context.virtualScale}))
			_this_child0$child1._replaceUpdater('spacing', function() { _this_child0$child1.spacing = (((20) * _this_child0$child1._context.virtualScale)) }, [_this_child0$child1._context,'virtualScale'])

//setting up component NestedVideo
			var _this_child0_child1$highlight = $c._this_child0_child1$highlight
			_this_child0_child1$highlight.$s($c.$c$_this_child0_child1$highlight)
			delete $c.$c$_this_child0_child1$highlight

//assigning border.color to ("#8AF")
			_this_child0_child1$highlight.border._removeUpdater('color'); _this_child0_child1$highlight.border.color = ("#8AF");
//assigning effects.shadow.blur to (10)
			_this_child0_child1$highlight.effects.shadow._removeUpdater('blur'); _this_child0_child1$highlight.effects.shadow.blur = (10);
//assigning radius to (${parent.delegateRadius})
			_this_child0_child1$highlight._replaceUpdater('radius', function() { _this_child0_child1$highlight.radius = (_this_child0_child1$highlight.parent.delegateRadius) }, [_this_child0_child1$highlight.parent,'delegateRadius'])
//assigning effects.shadow.color to ("#8AF")
			_this_child0_child1$highlight.effects.shadow._removeUpdater('color'); _this_child0_child1$highlight.effects.shadow.color = ("#8AF");
//assigning border.width to (1)
			_this_child0_child1$highlight.border._removeUpdater('width'); _this_child0_child1$highlight.border.width = (1);
//assigning effects.shadow.spread to (2)
			_this_child0_child1$highlight.effects.shadow._removeUpdater('spread'); _this_child0_child1$highlight.effects.shadow.spread = (2);
//assigning z to (${display} ? 1 : 0)
			_this_child0_child1$highlight._replaceUpdater('z', function() { _this_child0_child1$highlight.z = (_this_child0_child1$highlight.display ? 1 : 0) }, [_this_child0_child1$highlight,'display'])
			_this_child0_child1$highlight.on('clicked', function() {
	var mosaicGrid = this._get('mosaicGrid', true)
 mosaicGrid.play(mosaicGrid.currentIndex) }.bind(_this_child0_child1$highlight))

//setting up component ClickMixin
			var _this_child0_child1_highlight$child0 = $c._this_child0_child1_highlight$child0
			_this_child0_child1_highlight$child0.$s($c.$c$_this_child0_child1_highlight$child0)
			delete $c.$c$_this_child0_child1_highlight$child0


			_this_child0_child1_highlight$child0.completed()
	var behavior__this_child0_child1_highlight_on_y = new $core.Animation(_this_child0_child1$highlight)
	var behavior__this_child0_child1_highlight_on_y$c = { behavior__this_child0_child1_highlight_on_y: behavior__this_child0_child1_highlight_on_y }

//creating component Animation
	behavior__this_child0_child1_highlight_on_y.$c(behavior__this_child0_child1_highlight_on_y$c.$c$behavior__this_child0_child1_highlight_on_y = { })


//setting up component Animation
	var behavior__this_child0_child1_highlight_on_y = behavior__this_child0_child1_highlight_on_y$c.behavior__this_child0_child1_highlight_on_y
	behavior__this_child0_child1_highlight_on_y.$s(behavior__this_child0_child1_highlight_on_y$c.$c$behavior__this_child0_child1_highlight_on_y)
	delete behavior__this_child0_child1_highlight_on_y$c.$c$behavior__this_child0_child1_highlight_on_y

//assigning duration to (300)
	behavior__this_child0_child1_highlight_on_y._removeUpdater('duration'); behavior__this_child0_child1_highlight_on_y.duration = (300);

	behavior__this_child0_child1_highlight_on_y.completed()
	_this_child0_child1$highlight.setAnimation('y', behavior__this_child0_child1_highlight_on_y);

	var behavior__this_child0_child1_highlight_on_x = new $core.Animation(_this_child0_child1$highlight)
	var behavior__this_child0_child1_highlight_on_x$c = { behavior__this_child0_child1_highlight_on_x: behavior__this_child0_child1_highlight_on_x }

//creating component Animation
	behavior__this_child0_child1_highlight_on_x.$c(behavior__this_child0_child1_highlight_on_x$c.$c$behavior__this_child0_child1_highlight_on_x = { })


//setting up component Animation
	var behavior__this_child0_child1_highlight_on_x = behavior__this_child0_child1_highlight_on_x$c.behavior__this_child0_child1_highlight_on_x
	behavior__this_child0_child1_highlight_on_x.$s(behavior__this_child0_child1_highlight_on_x$c.$c$behavior__this_child0_child1_highlight_on_x)
	delete behavior__this_child0_child1_highlight_on_x$c.$c$behavior__this_child0_child1_highlight_on_x

//assigning duration to (300)
	behavior__this_child0_child1_highlight_on_x._removeUpdater('duration'); behavior__this_child0_child1_highlight_on_x.duration = (300);

	behavior__this_child0_child1_highlight_on_x.completed()
	_this_child0_child1$highlight.setAnimation('x', behavior__this_child0_child1_highlight_on_x);

	var behavior__this_child0_child1_highlight_on_height = new $core.Animation(_this_child0_child1$highlight)
	var behavior__this_child0_child1_highlight_on_height$c = { behavior__this_child0_child1_highlight_on_height: behavior__this_child0_child1_highlight_on_height }

//creating component Animation
	behavior__this_child0_child1_highlight_on_height.$c(behavior__this_child0_child1_highlight_on_height$c.$c$behavior__this_child0_child1_highlight_on_height = { })


//setting up component Animation
	var behavior__this_child0_child1_highlight_on_height = behavior__this_child0_child1_highlight_on_height$c.behavior__this_child0_child1_highlight_on_height
	behavior__this_child0_child1_highlight_on_height.$s(behavior__this_child0_child1_highlight_on_height$c.$c$behavior__this_child0_child1_highlight_on_height)
	delete behavior__this_child0_child1_highlight_on_height$c.$c$behavior__this_child0_child1_highlight_on_height

//assigning duration to (300)
	behavior__this_child0_child1_highlight_on_height._removeUpdater('duration'); behavior__this_child0_child1_highlight_on_height.duration = (300);

	behavior__this_child0_child1_highlight_on_height.completed()
	_this_child0_child1$highlight.setAnimation('height', behavior__this_child0_child1_highlight_on_height);

	var behavior__this_child0_child1_highlight_on_width = new $core.Animation(_this_child0_child1$highlight)
	var behavior__this_child0_child1_highlight_on_width$c = { behavior__this_child0_child1_highlight_on_width: behavior__this_child0_child1_highlight_on_width }

//creating component Animation
	behavior__this_child0_child1_highlight_on_width.$c(behavior__this_child0_child1_highlight_on_width$c.$c$behavior__this_child0_child1_highlight_on_width = { })


//setting up component Animation
	var behavior__this_child0_child1_highlight_on_width = behavior__this_child0_child1_highlight_on_width$c.behavior__this_child0_child1_highlight_on_width
	behavior__this_child0_child1_highlight_on_width.$s(behavior__this_child0_child1_highlight_on_width$c.$c$behavior__this_child0_child1_highlight_on_width)
	delete behavior__this_child0_child1_highlight_on_width$c.$c$behavior__this_child0_child1_highlight_on_width

//assigning duration to (300)
	behavior__this_child0_child1_highlight_on_width._removeUpdater('duration'); behavior__this_child0_child1_highlight_on_width.duration = (300);

	behavior__this_child0_child1_highlight_on_width.completed()
	_this_child0_child1$highlight.setAnimation('width', behavior__this_child0_child1_highlight_on_width);

			_this_child0_child1$highlight.completed()
//assigning height to (${contentHeight})
			_this_child0$child1._replaceUpdater('height', function() { _this_child0$child1.height = (_this_child0$child1.contentHeight) }, [_this_child0$child1,'contentHeight'])
//assigning width to (((90) / 100 * ${parent.width}))
			_this_child0$child1._replaceUpdater('width', function() { _this_child0$child1.width = (((90) / 100 * _this_child0$child1.parent.width)) }, [_this_child0$child1.parent,'width'])
//assigning animationDuration to (300)
			_this_child0$child1._removeUpdater('animationDuration'); _this_child0$child1.animationDuration = (300);
//assigning y to (((5) / 100 * ${parent.height}))
			_this_child0$child1._replaceUpdater('y', function() { _this_child0$child1.y = (((5) / 100 * _this_child0$child1.parent.height)) }, [_this_child0$child1.parent,'height'])
//assigning x to (((5) / 100 * ${parent.width}))
			_this_child0$child1._replaceUpdater('x', function() { _this_child0$child1.x = (((5) / 100 * _this_child0$child1.parent.width)) }, [_this_child0$child1.parent,'width'])
			_this_child0$child1.focusIndex = function(idx) {
				var row = this.model.get(idx)
				this.highlight.showAndPlay(row.video)
			}.bind(_this_child0$child1)
			_this_child0$child1.on('play', function(idx) {
	var videoPlayer = this._get('videoPlayer', true)

				if (videoPlayer.ready)
					Modernizr.prefixed('requestFullscreen', videoPlayer.element.dom)()
			}.bind(_this_child0$child1))
			_this_child0$child1.on('itemFocused', function(idx) { this.focusIndex(idx) }.bind(_this_child0$child1))
			_this_child0$child1.onChanged('currentIndex', function(value) { this.highlight.hide() }.bind(_this_child0$child1))
			_this_child0$child1.onPressed('Back', function(key,event) { this.focusIndex(this.currentIndex) }.bind(_this_child0$child1))

//setting up component OverflowMixin
			var _this_child0_child1$child0 = $c._this_child0_child1$child0
			_this_child0_child1$child0.$s($c.$c$_this_child0_child1$child0)
			delete $c.$c$_this_child0_child1$child0

//assigning value to (_globals.controls.mixins.OverflowMixin.prototype.Visible)
			_this_child0_child1$child0._removeUpdater('value'); _this_child0_child1$child0.value = (_globals.controls.mixins.OverflowMixin.prototype.Visible);

			_this_child0_child1$child0.completed()

			_this_child0$child1.completed()

			_this$child0.completed()

			$this.completed()
}


//=====[component core.Effects]=====================

	var EffectsBaseComponent = $core.Object
	var EffectsBasePrototype = EffectsBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var EffectsComponent = $core.Effects = function(parent, row) {
		EffectsBaseComponent.apply(this, arguments)

	}
	var EffectsPrototype = EffectsComponent.prototype = Object.create(EffectsBasePrototype)

	EffectsPrototype.constructor = EffectsComponent

	EffectsPrototype.componentName = 'core.Effects'
	core.addProperty(EffectsPrototype, 'real', 'blur')
	core.addProperty(EffectsPrototype, 'real', 'grayscale')
	core.addProperty(EffectsPrototype, 'real', 'sepia')
	core.addProperty(EffectsPrototype, 'real', 'brightness')
	core.addProperty(EffectsPrototype, 'real', 'contrast')
	core.addProperty(EffectsPrototype, 'real', 'hueRotate')
	core.addProperty(EffectsPrototype, 'real', 'invert')
	core.addProperty(EffectsPrototype, 'real', 'saturate')
	core.addLazyProperty(EffectsPrototype, 'shadow', (function(__parent, __row) {
		var lazy$shadow = new $core.Shadow(__parent, __row)
		var $c = { lazy$shadow : lazy$shadow }

//creating component Shadow
			lazy$shadow.$c($c.$c$lazy$shadow = { })


//setting up component Shadow
			var lazy$shadow = $c.lazy$shadow
			lazy$shadow.$s($c.$c$lazy$shadow)
			delete $c.$c$lazy$shadow


			lazy$shadow.completed()

		return lazy$shadow
}))
	EffectsPrototype._getFilterStyle = function() {
		var style = []
		this._addStyle(style, 'blur', 'blur', 'px')
		this._addStyle(style, 'grayscale')
		this._addStyle(style, 'sepia')
		this._addStyle(style, 'brightness')
		this._addStyle(style, 'contrast')
		this._addStyle(style, 'hueRotate', 'hue-rotate', 'deg')
		this._addStyle(style, 'invert')
		this._addStyle(style, 'saturate')
		return style
	}
	EffectsPrototype._addStyle = function(array,property,style,units) {
		var value = this[property]
		if (value)
			array.push((style || property) + '(' + value + (units || '') + ') ')
	}
	EffectsPrototype._updateStyle = function(updateShadow) {
		var filterStyle = this._getFilterStyle().join('')
		var parent = this.parent
		var style = {}

		//chromium bug
		//https://github.com/Modernizr/Modernizr/issues/981
		style['-webkit-filter'] = filterStyle
		style['filter'] = filterStyle

		if (this.shadow && (!this.shadow._empty() || updateShadow))
			style['box-shadow'] = this.shadow._getFilterStyle()

		parent.style(style)
	}
	var $code$0 = function(value) { this._updateStyle() }
	$core._protoOnChanged(EffectsPrototype, 'saturate', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'brightness', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'grayscale', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'sepia', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'invert', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'hueRotate', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'contrast', $code$0)
	$core._protoOnChanged(EffectsPrototype, 'blur', $code$0)

	EffectsPrototype.$c = function($c) {
		var $this = this;
		EffectsBasePrototype.$c.call(this, $c.$b = { })

	}
	EffectsPrototype.$s = function($c) {
		var $this = this;
	EffectsBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Context]=====================

	var ContextBaseComponent = $core.Item
	var ContextBasePrototype = ContextBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var ContextComponent = $core.Context = function(parent, row) {
		ContextBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.options = arguments[2]
		this.l10n = this.options.l10n || {}

		this._local['context'] = this
		this._context = this
		this._started = false
		this._completed = false
		this._processingActions = false
		this._delayedActions = []
		this._completedObjects = []
		this._stylesRegistered = {}
		this._asyncInvoker = $core.safeCall(this, [], function (ex) { log("async action failed:", ex, ex.stack) })

		this.backend = _globals._backend()

		this._init()
	}

	}
	var ContextPrototype = ContextComponent.prototype = Object.create(ContextBasePrototype)

	ContextPrototype.constructor = ContextComponent

	ContextPrototype.componentName = 'core.Context'
	ContextPrototype.message = $core.createSignal('message')
	core.addProperty(ContextPrototype, 'int', 'scrollY')
	core.addProperty(ContextPrototype, 'int', 'keyProcessDelay')
	core.addProperty(ContextPrototype, 'bool', 'fullscreen')
	core.addProperty(ContextPrototype, 'string', 'language')
	core.addProperty(ContextPrototype, 'System', 'system')
	core.addProperty(ContextPrototype, 'Location', 'location')
	core.addProperty(ContextPrototype, 'Stylesheet', 'stylesheet')
	core.addProperty(ContextPrototype, 'string', 'buildIdentifier')
	core.addProperty(ContextPrototype, 'int', 'virtualWidth', ($manifest$virtual$width))
	core.addProperty(ContextPrototype, 'int', 'virtualHeight', ($manifest$virtual$height))
	core.addProperty(ContextPrototype, 'real', 'virtualScale')
	ContextPrototype._processActions = function() {
		if (!this._started || this._processingActions)
			return

		this._processingActions = true

		var invoker = this._asyncInvoker

		while (this._delayedActions.length || this._completedObjects.length) {
			var actions = this._delayedActions
			this._delayedActions = []
			for(var i = 0, n = actions.length; i < n; ++i)
				invoker(actions[i])

			var objects = this._completedObjects
			this._completedObjects = []
			for(var i = 0, n = objects.length; i < n; ++i) {
				var object = objects[i]
				try { object.__complete() }
				catch(ex) { log('onCompleted failed', ex, ex.stack)}
			}
		}

		this._processingActions = false
		this.backend.tick(this)
	}
	ContextPrototype._init = function() {
		log('Context: initializing...')
		new this.backend.init(this)
	}
	ContextPrototype._run = function() {
		log('Context: signalling layout')
		this.visibleInView = true
		this.newBoundingBox()
		log('Context: calling completed()')
		this._started = true
		this._processActions()
		this._completed = true
	}
	ContextPrototype.init = function() {
		this.__init()
		this.backend.initSystem(this.system)
	}
	ContextPrototype.run = function() {
		this.backend.run(this, this._run.bind(this))
	}
	ContextPrototype.scheduleComplete = function() {
	var context = this._get('context', true)

		this.delayedAction('context:completed', this, this._processActions)
	}
	ContextPrototype.tr = function() { return this.qsTr.apply(this, arguments) }
	ContextPrototype.scheduleAction = function(action) {
		this._delayedActions.push(action)
	}
	ContextPrototype.wrapNativeCallback = function(callback) {
		var ctx = this
		return function() {
			try {
				var r = callback.apply(this, arguments)
				ctx._processActions()
				return r
			} catch(ex) {
				ctx._processActions()
				throw ex
			}
		}
	}
	ContextPrototype.start = function(instance) {
		this.children.push(instance)
		instance.__init()
		log('Context: created instance')
		// log('Context: calling on completed')
		return instance;
	}
	ContextPrototype.registerStyle = function(item,tag,cls) {
		cls = this.mangleClass(cls)
		var selector = cls? tag + '.' + cls: tag
		if (!(selector in this._stylesRegistered)) {
			item.registerStyle(this.stylesheet, selector)
			this._stylesRegistered[selector] = true
		}
	}
	ContextPrototype.processKey = function(key,event) {
		var handlers = core.forEach(this, $core.Item.prototype._enqueueNextChildInFocusChain, [])
		var n = handlers.length
		for(var i = 0; i < n; ++i) {
			var handler = handlers[i]
			if (handler._processKey(key, event))
				return true
		}
		return false
	}
	ContextPrototype.updateL10n = function(lang,data) {
		this.l10n[lang] = data
		var storage = this.__properties.language
		storage.callOnChanged(this, 'language', this.language, this.language)
	}
	ContextPrototype.mangleClass = function(name) {
		return $manifest$html5$prefix + name
	}
	ContextPrototype.delayedAction = function(name,self,method,delay) {
		if (!self._registerDelayedAction(name))
			return

		var callback = function() {
			self._cancelDelayedAction(name)
			method.call(self)
		}

		if (delay > 0) {
			setTimeout(this.wrapNativeCallback(callback), delay)
		} else if (delay === 0) {
			this.backend.requestAnimationFrame(this.wrapNativeCallback(callback))
		} else {
			this.scheduleAction(callback)
		}
	}
	ContextPrototype.__onCompleted = function(object) {
		this._completedObjects.push(object)
	}
	ContextPrototype.createElement = function(tag,cls) {
		return this.backend.createElement(this, tag, cls)
	}
	ContextPrototype.qsTr = function(text) {
		var args = arguments
		var lang = this.language
		var messages = this.l10n[lang] || {}
		var contexts = messages[text] || {}
		for(var name in contexts) {
			text = contexts[name] //fixme: add context handling here
			break
		}
		return text.replace(/%(\d+)/, function(text, index) { return args[index] })
	}
	$core._protoOnChanged(ContextPrototype, 'fullscreen', function(value) { if (value) this.backend.enterFullscreenMode(this.element); else this.backend.exitFullscreenMode(); })

	ContextPrototype.$c = function($c) {
		var $this = this;
		ContextBasePrototype.$c.call(this, $c.$b = { })
//creating component core.<anonymous>
		var _this$stylesheet = new $html5.Stylesheet($this)
		$c._this$stylesheet = _this$stylesheet

//creating component Stylesheet
		_this$stylesheet.$c($c.$c$_this$stylesheet = { })

		$this.stylesheet = _this$stylesheet
//creating component core.<anonymous>
		var _this$system = new $core.System($this)
		$c._this$system = _this$system

//creating component System
		_this$system.$c($c.$c$_this$system = { })

		$this.system = _this$system
//creating component core.<anonymous>
		var _this$location = new $core.Location($this)
		$c._this$location = _this$location

//creating component Location
		_this$location.$c($c.$c$_this$location = { })

		$this.location = _this$location
	}
	ContextPrototype.$s = function($c) {
		var $this = this;
	ContextBasePrototype.$s.call(this, $c.$b); delete $c.$b
//setting up component Stylesheet
			var _this$stylesheet = $c._this$stylesheet
			_this$stylesheet.$s($c.$c$_this$stylesheet)
			delete $c.$c$_this$stylesheet


			_this$stylesheet.completed()
//assigning virtualScale to (Math.min(((${system.resolutionWidth} || ${width}) / ${virtualWidth}),((${system.resolutionHeight} || ${height}) / ${virtualHeight})))
			$this._replaceUpdater('virtualScale', function() { $this.virtualScale = (Math.min((($this.system.resolutionWidth || $this.width) / $this.virtualWidth),(($this.system.resolutionHeight || $this.height) / $this.virtualHeight))) }, [$this.system,'resolutionWidth',$this,'virtualHeight',$this,'height',$this,'virtualWidth',$this,'width',$this.system,'resolutionHeight'])

//setting up component System
			var _this$system = $c._this$system
			_this$system.$s($c.$c$_this$system)
			delete $c.$c$_this$system


			_this$system.completed()
//assigning visibleInView to (false)
			$this._removeUpdater('visibleInView'); $this.visibleInView = (false);

//setting up component Location
			var _this$location = $c._this$location
			_this$location.$s($c.$c$_this$location)
			delete $c.$c$_this$location


			_this$location.completed()

			$this.completed()
}


//=====[component core.Transform]=====================

	var TransformBaseComponent = $core.Object
	var TransformBasePrototype = TransformBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var TransformComponent = $core.Transform = function(parent, row) {
		TransformBaseComponent.apply(this, arguments)
	//custom constructor:
	{ this._transforms = new $core.transform.Transform() }

	}
	var TransformPrototype = TransformComponent.prototype = Object.create(TransformBasePrototype)

	TransformPrototype.constructor = TransformComponent

	TransformPrototype.componentName = 'core.Transform'
	core.addProperty(TransformPrototype, 'int', 'perspective')
	core.addProperty(TransformPrototype, 'int', 'translateX')
	core.addProperty(TransformPrototype, 'int', 'translateY')
	core.addProperty(TransformPrototype, 'int', 'translateZ')
	core.addProperty(TransformPrototype, 'real', 'rotateX')
	core.addProperty(TransformPrototype, 'real', 'rotateY')
	core.addProperty(TransformPrototype, 'real', 'rotateZ')
	core.addProperty(TransformPrototype, 'real', 'rotate')
	core.addProperty(TransformPrototype, 'real', 'scaleX')
	core.addProperty(TransformPrototype, 'real', 'scaleY')
	core.addProperty(TransformPrototype, 'real', 'skewX')
	core.addProperty(TransformPrototype, 'real', 'skewY')
	TransformPrototype._updateTransform = function() {
		this.parent.style('transform', this._transforms)
	}
	TransformPrototype._animateAll = function(animation) {
		var transform = this
		var transform_properties = [
			'perspective',
			'translateX', 'translateY', 'translateZ',
			'rotateX', 'rotateY', 'rotateZ', 'rotate',
			'scaleX', 'scaleY',
			'skewX', 'skewY'
		]
		transform_properties.forEach(function(transform_property) {
			var property_animation = new $core.Animation(transform)
			$core.core.createObject(property_animation)
			property_animation.delay = animation.delay
			property_animation.duration = animation.duration
			property_animation.cssTransition = false
			property_animation.easing = animation.easing

			transform.setAnimation(transform_property, property_animation)
		})
		this._context._processActions()
	}
	$core._protoOnChanged(TransformPrototype, 'perspective', function(value) { this._transforms.add('perspective', value, 'px'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'rotate', function(value) { this._transforms.add('rotate', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'rotateX', function(value) { this._transforms.add('rotateX', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'rotateY', function(value) { this._transforms.add('rotateY', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'rotateZ', function(value) { this._transforms.add('rotateZ', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'scaleX', function(value) { this._transforms.add('scaleX', value); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'scaleY', function(value) { this._transforms.add('scaleY', value); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'skewX', function(value) { this._transforms.add('skewX', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'skewY', function(value) { this._transforms.add('skewY', value, 'deg'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'translateX', function(value) { this._transforms.add('translateX', value, 'px'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'translateY', function(value) { this._transforms.add('translateY', value, 'px'); this._updateTransform() })
	$core._protoOnChanged(TransformPrototype, 'translateZ', function(value) { this._transforms.add('translateZ', value, 'px'); this._updateTransform() })

	TransformPrototype.$c = function($c) {
		var $this = this;
		TransformBasePrototype.$c.call(this, $c.$b = { })

	}
	TransformPrototype.$s = function($c) {
		var $this = this;
	TransformBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component controls.mixins.OverflowMixin]=====================

	var OverflowMixinBaseComponent = $controls$mixins.BaseMixin
	var OverflowMixinBasePrototype = OverflowMixinBaseComponent.prototype

/**
 * @constructor
 * @extends {$controls$mixins.BaseMixin}
 */
	var OverflowMixinComponent = $controls$mixins.OverflowMixin = function(parent, row) {
		OverflowMixinBaseComponent.apply(this, arguments)

	}
	var OverflowMixinPrototype = OverflowMixinComponent.prototype = Object.create(OverflowMixinBasePrototype)

	OverflowMixinPrototype.constructor = OverflowMixinComponent

	OverflowMixinPrototype.componentName = 'controls.mixins.OverflowMixin'
/** @const @type {number} */
	OverflowMixinPrototype.Visible = 0
/** @const @type {number} */
	OverflowMixinComponent.Visible = 0
/** @const @type {number} */
	OverflowMixinPrototype.Hidden = 1
/** @const @type {number} */
	OverflowMixinComponent.Hidden = 1
/** @const @type {number} */
	OverflowMixinPrototype.Scroll = 2
/** @const @type {number} */
	OverflowMixinComponent.Scroll = 2
/** @const @type {number} */
	OverflowMixinPrototype.ScrollX = 3
/** @const @type {number} */
	OverflowMixinComponent.ScrollX = 3
/** @const @type {number} */
	OverflowMixinPrototype.ScrollY = 4
/** @const @type {number} */
	OverflowMixinComponent.ScrollY = 4
	core.addProperty(OverflowMixinPrototype, 'enum', 'value')
	OverflowMixinPrototype.__complete = function() { OverflowMixinBasePrototype.__complete.call(this)
this._updateOverflow(this.value)
}
	OverflowMixinPrototype._updateOverflow = function(value) {
		switch(value) {
			case this.Visible:
				this.parent.style('overflow', 'visible');
				break;
			case this.Hidden:
				this.parent.style('overflow', 'hidden');
				break;
			case this.Scroll:
				this.parent.style('overflow', 'auto');
				break;
			case this.ScrollX:
				this.parent.style('overflow', 'auto');
				this.parent.style('overflow-y', 'hidden');
				break;
			case this.ScrollY:
				this.parent.style('overflow', 'auto');
				this.parent.style('overflow-x', 'hidden');
				break;
		}
	}
	$core._protoOnChanged(OverflowMixinPrototype, 'value', function(value) { this._updateOverflow(value) })

	OverflowMixinPrototype.$c = function($c) {
		var $this = this;
		OverflowMixinBasePrototype.$c.call(this, $c.$b = { })

	}
	OverflowMixinPrototype.$s = function($c) {
		var $this = this;
	OverflowMixinBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.BorderSide]=====================

	var BorderSideBaseComponent = $core.Object
	var BorderSideBasePrototype = BorderSideBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var BorderSideComponent = $core.BorderSide = function(parent, row) {
		BorderSideBaseComponent.apply(this, arguments)

	}
	var BorderSidePrototype = BorderSideComponent.prototype = Object.create(BorderSideBasePrototype)

	BorderSidePrototype.constructor = BorderSideComponent

	BorderSidePrototype.componentName = 'core.BorderSide'
	core.addProperty(BorderSidePrototype, 'string', 'name')
	core.addProperty(BorderSidePrototype, 'int', 'width')
	core.addProperty(BorderSidePrototype, 'color', 'color')
	core.addProperty(BorderSidePrototype, 'int', 'style')
	BorderSidePrototype._updateStyle = function() {
		if (!this.parent || !this.parent.parent || !this.name)
			return

		var Border = $core.Border
		var styleName
		switch(this.style) {
		case _globals.core.Border.prototype.None: styleName = 'none'; break
		case _globals.core.Border.prototype.Hidden: styleName = 'hidden'; break
		case _globals.core.Border.prototype.Dotted: styleName = 'dotted'; break
		case _globals.core.Border.prototype.Dashed: styleName = 'dashed'; break
		case _globals.core.Border.prototype.Solid: styleName = 'solid'; break
		case _globals.core.Border.prototype.Double: styleName = 'double'; break
		case _globals.core.Border.prototype.Groove: styleName = 'groove'; break
		case _globals.core.Border.prototype.Ridge: styleName = 'ridge'; break
		case _globals.core.Border.prototype.Inset: styleName = 'inset'; break
		case _globals.core.Border.prototype.Outset: styleName = 'outset'; break
		}

		var borderCss = this.width + "px " + styleName + " " + $core.Color.normalize(this.color)
		this.parent.parent.style('border-' + this.name, borderCss)
	}
	var $code$0 = function(value) { this._updateStyle() }
	$core._protoOnChanged(BorderSidePrototype, 'width', $code$0)
	$core._protoOnChanged(BorderSidePrototype, 'color', $code$0)
	$core._protoOnChanged(BorderSidePrototype, 'style', $code$0)

	BorderSidePrototype.$c = function($c) {
		var $this = this;
		BorderSideBasePrototype.$c.call(this, $c.$b = { })

	}
	BorderSidePrototype.$s = function($c) {
		var $this = this;
	BorderSideBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning color to (${parent.color})
			$this._replaceUpdater('color', function() { $this.color = ($this.parent.color) }, [$this.parent,'color'])
//assigning width to (${parent.width})
			$this._replaceUpdater('width', function() { $this.width = ($this.parent.width) }, [$this.parent,'width'])
//assigning style to (${parent.style})
			$this._replaceUpdater('style', function() { $this.style = ($this.parent.style) }, [$this.parent,'style'])

			$this.completed()
}


//=====[component core.Model]=====================

	var ModelBaseComponent = $core.Object
	var ModelBasePrototype = ModelBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var ModelComponent = $core.Model = function(parent, row) {
		ModelBaseComponent.apply(this, arguments)

	}
	var ModelPrototype = ModelComponent.prototype = Object.create(ModelBasePrototype)

	ModelPrototype.constructor = ModelComponent

	ModelPrototype.componentName = 'core.Model'
	ModelPrototype.reset = $core.createSignal('reset')
	ModelPrototype.rowsChanged = $core.createSignal('rowsChanged')
	ModelPrototype.rowsRemoved = $core.createSignal('rowsRemoved')
	ModelPrototype.rowsInserted = $core.createSignal('rowsInserted')
	core.addProperty(ModelPrototype, 'int', 'count')

	ModelPrototype.$c = function($c) {
		var $this = this;
		ModelBasePrototype.$c.call(this, $c.$b = { })

	}
	ModelPrototype.$s = function($c) {
		var $this = this;
	ModelBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.ListModel]=====================

	var ListModelBaseComponent = $core.Model
	var ListModelBasePrototype = ListModelBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Model}
 */
	var ListModelComponent = $core.ListModel = function(parent, row) {
		ListModelBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._rows = []
	}

	}
	var ListModelPrototype = ListModelComponent.prototype = Object.create(ListModelBasePrototype)

	ListModelPrototype.constructor = ListModelComponent

	ListModelPrototype.componentName = 'core.ListModel'
	core.addProperty(ListModelPrototype, 'array', 'data')
	ListModelPrototype.clear = function() { this.assign([]) }
	ListModelPrototype.forEach = function(callback) {
		return this._rows.forEach(callback)
	}
	ListModelPrototype.addChild = function(child) {
		this.append(child)
	}
	ListModelPrototype.get = function(idx) {
		if (idx < 0 || idx >= this._rows.length)
			throw new Error('index ' + idx + ' out of bounds (' + this._rows.length + ')')
		var row = this._rows[idx]
		if (!(row instanceof Object))
			throw new Error('row is non-object')
		row.index = idx
		return row
	}
	ListModelPrototype.remove = function(idx,n) {
		if (idx < 0 || idx >= this._rows.length)
			throw new Error('index ' + idx + ' out of bounds')
		if (n === undefined)
			n = 1
		this._rows.splice(idx, n)
		this.count = this._rows.length
		this.rowsRemoved(idx, idx + n)
	}
	ListModelPrototype.setProperty = function(idx,name,value) {
		if (idx < 0 || idx >= this._rows.length)
			throw new Error('index ' + idx + ' out of bounds (' + this._rows.length + ')')
		var row = this._rows[idx]
		if (!(row instanceof Object))
			throw new Error('row is non-object, invalid index? (' + idx + ')')

		if (row[name] !== value) {
			row[name] = value
			this.rowsChanged(idx, idx + 1)
		}
	}
	ListModelPrototype.insert = function(idx,row) {
		if (idx < 0 || idx > this._rows.length)
			throw new Error('index ' + idx + ' out of bounds (' + this._rows.length + ')')
		this._rows.splice(idx, 0, row)
		this.count = this._rows.length
		this.rowsInserted(idx, idx + 1)
	}
	ListModelPrototype.set = function(idx,row) {
		if (idx < 0 || idx >= this._rows.length)
			throw new Error('index ' + idx + ' out of bounds (' + this._rows.length + ')')
		if (!(row instanceof Object))
			throw new Error('row is non-object')
		this._rows[idx] = row
		this.rowsChanged(idx, idx + 1)
	}
	ListModelPrototype.append = function(row) {
		var l = this._rows.length
		if (Array.isArray(row)) {
			Array.prototype.push.apply(this._rows, row)
			this.count = this._rows.length
			this.rowsInserted(l, l + row.length)
		} else {
			this._rows.push(row)
			this.count = this._rows.length
			this.rowsInserted(l, l + 1)
		}
	}
	ListModelPrototype.assign = function(rows) {
		this._rows = rows
		this.count = this._rows.length
		this.reset()
	}
	$core._protoOnChanged(ListModelPrototype, 'data', function(value) { this.assign(value) })

	ListModelPrototype.$c = function($c) {
		var $this = this;
		ListModelBasePrototype.$c.call(this, $c.$b = { })

	}
	ListModelPrototype.$s = function($c) {
		var $this = this;
	ListModelBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Location]=====================

	var LocationBaseComponent = $core.Object
	var LocationBasePrototype = LocationBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var LocationComponent = $core.Location = function(parent, row) {
		LocationBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		var backend = $core.__locationBackend
		if (!backend)
			throw new Error('no backend found')
		this.impl = backend().createLocation(this)
	}

	}
	var LocationPrototype = LocationComponent.prototype = Object.create(LocationBasePrototype)

	LocationPrototype.constructor = LocationComponent

	LocationPrototype.componentName = 'core.Location'
	core.addProperty(LocationPrototype, 'string', 'hash')
	core.addProperty(LocationPrototype, 'string', 'host')
	core.addProperty(LocationPrototype, 'string', 'href')
	core.addProperty(LocationPrototype, 'string', 'port')
	core.addProperty(LocationPrototype, 'string', 'origin')
	core.addProperty(LocationPrototype, 'string', 'hostname')
	core.addProperty(LocationPrototype, 'string', 'pathname')
	core.addProperty(LocationPrototype, 'string', 'protocol')
	core.addProperty(LocationPrototype, 'string', 'search')
	core.addProperty(LocationPrototype, 'Object', 'state')
	LocationPrototype.changeHref = function(href) {
		this.impl.changeHref(href)
	}
	LocationPrototype.pushState = function(state,title,url) {
		this.impl.pushState(state, title, url)
	}

	LocationPrototype.$c = function($c) {
		var $this = this;
		LocationBasePrototype.$c.call(this, $c.$b = { })

	}
	LocationPrototype.$s = function($c) {
		var $this = this;
	LocationBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Image]=====================

	var ImageBaseComponent = $core.Item
	var ImageBasePrototype = ImageBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Item}
 */
	var ImageComponent = $core.Image = function(parent, row) {
		ImageBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._context.backend.initImage(this)
		this._scheduleLoad()
	}

	}
	var ImagePrototype = ImageComponent.prototype = Object.create(ImageBasePrototype)

	ImagePrototype.constructor = ImageComponent

	ImagePrototype.componentName = 'core.Image'
	core.addProperty(ImagePrototype, 'int', 'paintedWidth')
	core.addProperty(ImagePrototype, 'int', 'paintedHeight')
	core.addProperty(ImagePrototype, 'int', 'sourceWidth')
	core.addProperty(ImagePrototype, 'int', 'sourceHeight')
	core.addProperty(ImagePrototype, 'string', 'source')
	core.addProperty(ImagePrototype, 'bool', 'smooth', (true))
	core.addProperty(ImagePrototype, 'bool', 'preload', (false))
/** @const @type {number} */
	ImagePrototype.Null = 0
/** @const @type {number} */
	ImageComponent.Null = 0
/** @const @type {number} */
	ImagePrototype.Ready = 1
/** @const @type {number} */
	ImageComponent.Ready = 1
/** @const @type {number} */
	ImagePrototype.Loading = 2
/** @const @type {number} */
	ImageComponent.Loading = 2
/** @const @type {number} */
	ImagePrototype.Error = 3
/** @const @type {number} */
	ImageComponent.Error = 3
	core.addProperty(ImagePrototype, 'enum', 'status')
/** @const @type {number} */
	ImagePrototype.AlignHCenter = 0
/** @const @type {number} */
	ImageComponent.AlignHCenter = 0
/** @const @type {number} */
	ImagePrototype.AlignLeft = 1
/** @const @type {number} */
	ImageComponent.AlignLeft = 1
/** @const @type {number} */
	ImagePrototype.AlignRight = 2
/** @const @type {number} */
	ImageComponent.AlignRight = 2
	core.addProperty(ImagePrototype, 'enum', 'horizontalAlignment')
/** @const @type {number} */
	ImagePrototype.Stretch = 0
/** @const @type {number} */
	ImageComponent.Stretch = 0
/** @const @type {number} */
	ImagePrototype.PreserveAspectFit = 1
/** @const @type {number} */
	ImageComponent.PreserveAspectFit = 1
/** @const @type {number} */
	ImagePrototype.PreserveAspectCrop = 2
/** @const @type {number} */
	ImageComponent.PreserveAspectCrop = 2
/** @const @type {number} */
	ImagePrototype.Tile = 3
/** @const @type {number} */
	ImageComponent.Tile = 3
/** @const @type {number} */
	ImagePrototype.TileVertically = 4
/** @const @type {number} */
	ImageComponent.TileVertically = 4
/** @const @type {number} */
	ImagePrototype.TileHorizontally = 5
/** @const @type {number} */
	ImageComponent.TileHorizontally = 5
/** @const @type {number} */
	ImagePrototype.Pad = 6
/** @const @type {number} */
	ImageComponent.Pad = 6
	core.addProperty(ImagePrototype, 'enum', 'fillMode')
/** @const @type {number} */
	ImagePrototype.AlignVCenter = 0
/** @const @type {number} */
	ImageComponent.AlignVCenter = 0
/** @const @type {number} */
	ImagePrototype.AlignTop = 1
/** @const @type {number} */
	ImageComponent.AlignTop = 1
/** @const @type {number} */
	ImagePrototype.AlignBottom = 2
/** @const @type {number} */
	ImageComponent.AlignBottom = 2
	core.addProperty(ImagePrototype, 'enum', 'verticalAlignment')
	ImagePrototype._scheduleLoad = function() {
		if (this.preload || this.recursiveVisible)
			this._context.delayedAction('image.load', this, this._load)
	}
	ImagePrototype._load = function() {
		if (this.status === this.Ready || (!this.preload && !this.recursiveVisible))
			return

		if (!this.source) {
			this._resetImage()
			return
		}

		this.status = this.Loading
		var ctx = this._context
		var callback = this._imageLoaded.bind(this)
		ctx.backend.loadImage(this, ctx.wrapNativeCallback(callback))
	}
	ImagePrototype._onError = function() {
		this.status = this.Error;
	}
	ImagePrototype._resetImage = function() {
		this.style('background-image', '')
	}
	ImagePrototype.getClass = function() { return 'core-image' }
	ImagePrototype._imageLoaded = function(metrics) {
		if (!metrics) {
			this.status = ImageComponent.Error
			return
		}

		var style = { 'background-image': 'url("' + this.source + '")' }

		var natW = metrics.width, natH = metrics.height
		this.sourceWidth = natW
		this.sourceHeight = natH

		if (this.fillMode !== ImageComponent.PreserveAspectFit) {
			this.paintedWidth = this.width
			this.paintedHeight = this.height
		}

		switch(this.horizontalAlignment) {
			case ImageComponent.AlignHCenter:
				style['background-position-x'] = 'center'
				break;
			case ImageComponent.AlignLeft:
				style['background-position-x'] = 'left'
				break;
			case ImageComponent.AlignRight:
				style['background-position-x'] = 'right'
				break;
		}

		switch(this.verticalAlignment) {
			case ImageComponent.AlignVCenter:
				style['background-position-y'] = 'center'
				break;
			case ImageComponent.AlignTop:
				style['background-position-y'] = 'top'
				break;
			case ImageComponent.AlignBottom:
				style['background-position-y'] = 'bottom'
				break;
		}

		switch(this.fillMode) {
			case ImageComponent.Stretch:
				style['background-repeat'] = 'no-repeat'
				style['background-size'] = '100% 100%'
				break;
			case ImageComponent.TileVertically:
				style['background-repeat'] = 'repeat-y'
				style['background-size'] = '100% ' + natH + 'px'
				break;
			case ImageComponent.TileHorizontally:
				style['background-repeat'] = 'repeat-x'
				style['background-size'] = natW + 'px 100%'
				break;
			case ImageComponent.Tile:
				style['background-repeat'] = 'repeat-y repeat-x'
				style['background-size'] = 'auto'
				break;
			case ImageComponent.PreserveAspectCrop:
				style['background-repeat'] = 'no-repeat'
				style['background-size'] = 'cover'
				break;
			case ImageComponent.Pad:
				style['background-repeat'] = 'no-repeat'
				style['background-position'] = '0% 0%'
				style['background-size'] = 'auto'
				break;
			case ImageComponent.PreserveAspectFit:
				style['background-repeat'] = 'no-repeat'
				style['background-size'] = 'contain'
				var w = this.width, h = this.height
				var targetRatio = 0, srcRatio = natW / natH

				if (w && h)
					targetRatio = w / h

				if (srcRatio > targetRatio && w) { // img width aligned with target width
					this.paintedWidth = w;
					this.paintedHeight = w / srcRatio;
				} else {
					this.paintedHeight = h;
					this.paintedWidth = h * srcRatio;
				}
				break;
		}
		style['image-rendering'] = this.smooth? 'auto': 'pixelated'
		this.style(style)

		this.status = ImageComponent.Ready
	}
	var $code$0 = function(value) {
		this._scheduleLoad()
	}
	$core._protoOnChanged(ImagePrototype, 'width', $code$0)
	$core._protoOnChanged(ImagePrototype, 'preload', $code$0)
	$core._protoOnChanged(ImagePrototype, 'height', $code$0)
	$core._protoOnChanged(ImagePrototype, 'recursiveVisible', $code$0)
	$core._protoOnChanged(ImagePrototype, 'fillMode', $code$0)
	$core._protoOnChanged(ImagePrototype, 'source', function(value) {
		this.status = this.Null
		this._scheduleLoad()
	})

	ImagePrototype.$c = function($c) {
		var $this = this;
		ImageBasePrototype.$c.call(this, $c.$b = { })

	}
	ImagePrototype.$s = function($c) {
		var $this = this;
	ImageBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning width to (${sourceWidth})
			$this._replaceUpdater('width', function() { $this.width = ($this.sourceWidth) }, [$this,'sourceWidth'])
//assigning height to (${sourceHeight})
			$this._replaceUpdater('height', function() { $this.height = ($this.sourceHeight) }, [$this,'sourceHeight'])

			$this.completed()
}


//=====[component core.Anchors]=====================

	var AnchorsBaseComponent = $core.Object
	var AnchorsBasePrototype = AnchorsBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var AnchorsComponent = $core.Anchors = function(parent, row) {
		AnchorsBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._items = []
		this._grabX = false
		this._grabY = false
	}

	}
	var AnchorsPrototype = AnchorsComponent.prototype = Object.create(AnchorsBasePrototype)

	AnchorsPrototype.constructor = AnchorsComponent

	AnchorsPrototype.componentName = 'core.Anchors'
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'bottom')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'verticalCenter')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'top')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'left')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'horizontalCenter')
	core.addProperty(AnchorsPrototype, 'AnchorLine', 'right')
	core.addProperty(AnchorsPrototype, 'Item', 'fill')
	core.addProperty(AnchorsPrototype, 'Item', 'centerIn')
	core.addProperty(AnchorsPrototype, 'int', 'margins')
	core.addProperty(AnchorsPrototype, 'int', 'bottomMargin')
	core.addProperty(AnchorsPrototype, 'int', 'topMargin')
	core.addProperty(AnchorsPrototype, 'int', 'leftMargin')
	core.addProperty(AnchorsPrototype, 'int', 'rightMargin')
	AnchorsPrototype._scheduleUpdate = function() {
		this._context.delayedAction('update-anchors', this, this._updateAll)
	}
	AnchorsPrototype._updateAll = function() {
		var anchors = this
		var item = anchors.parent
		if (item === null) //disposed
			return
		var parent = item.parent

		var parent_box = parent.toScreen()
		var parentX = parent_box[0], parentY = parent_box[1]

		var fill = anchors.fill
		var leftAnchor = anchors._getAnchor('left') || (fill? fill.left: null)
		var rightAnchor = anchors._getAnchor('right') || (fill? fill.right: null)
		var topAnchor = anchors._getAnchor('top') || (fill? fill.top: null)
		var bottomAnchor = anchors._getAnchor('bottom') || (fill? fill.bottom: null)

		var centerIn = anchors.centerIn
		var hcenterAnchor = anchors._getAnchor('horizontalCenter') || (centerIn? centerIn.horizontalCenter: null)
		var vcenterAnchor = anchors._getAnchor('verticalCenter') || (centerIn? centerIn.verticalCenter: null)

		var lm = anchors.leftMargin || anchors.margins
		var rm = anchors.rightMargin || anchors.margins
		var tm = anchors.topMargin || anchors.margins
		var bm = anchors.bottomMargin || anchors.margins

		var cacheObjects = []
		var cachePositions = []

		var toScreen = function(line) {
			var object = line[0], index = line[1]
			var objectIdx = cacheObjects.indexOf(object)
			var screenPos
			if (objectIdx < 0) {
				screenPos = object.toScreen()
				cacheObjects.push(object)
				cachePositions.push(screenPos)
			}
			else
				screenPos = cachePositions[objectIdx]
			return screenPos[index]
		}

		var left, top, right, bottom, hcenter, vcenter
		if (leftAnchor && rightAnchor) {
			left = toScreen(leftAnchor)
			right = toScreen(rightAnchor)
			item.x = left + lm - parentX - item.viewX
			item.width = right - left - rm - lm
		} else if (leftAnchor && hcenterAnchor) {
			left = toScreen(leftAnchor)
			hcenter = toScreen(hcenterAnchor);
			item.x = left + lm - parentX - item.viewX
			item.width = (hcenter - left) * 2 - rm - lm
		} else if (hcenterAnchor && rightAnchor) {
			hcenter = toScreen(hcenterAnchor);
			right = toScreen(rightAnchor)
			item.width = (right - hcenter) * 2 - rm - lm
			item.x = hcenter - (item.width + lm - rm) / 2 - parentX - item.viewX
		} else if (leftAnchor) {
			left = toScreen(leftAnchor)
			item.x = left + lm - parentX - item.viewX
		} else if (rightAnchor) {
			right = toScreen(rightAnchor)
			item.x = right - parentX - rm - item.width - item.viewX
		} else if (hcenterAnchor) {
			hcenter = toScreen(hcenterAnchor)
			item.x = hcenter - (item.width + lm - rm) / 2 - parentX - item.viewX
		} else if (this._grabX)
			item.x = lm

		if (topAnchor && bottomAnchor) {
			top = toScreen(topAnchor)
			bottom = toScreen(bottomAnchor)
			item.y = top + tm - parentY - item.viewY
			item.height = bottom - top - bm - tm
		} else if (topAnchor && vcenterAnchor) {
			top = toScreen(topAnchor)
			vcenter = toScreen(vcenterAnchor)
			item.y = top + tm - parentY - item.viewY
			item.height = (vcenter - top) * 2 - bm - tm
		} else if (vcenterAnchor && bottomAnchor) {
			vcenter = toScreen(vcenterAnchor)
			bottom = toScreen(bottomAnchor)
			item.height = (bottom - vcenter) * 2 - bm - tm
			item.y = vcenter - (item.height + tm - bm) / 2 - parentY - item.viewY
		} else if (topAnchor) {
			top = toScreen(topAnchor)
			item.y = top + tm - parentY - item.viewY
		} else if (bottomAnchor) {
			bottom = toScreen(bottomAnchor)
			item.y = bottom - parentY - bm - item.height - item.viewY
		} else if (vcenterAnchor) {
			vcenter = toScreen(vcenterAnchor)
			item.y = vcenter - (item.height + tm - bm) / 2 - parentY - item.viewY
		} else if (this._grabY)
			item.y = tm
	}
	AnchorsPrototype._grab = function(item,prop) {
		if (prop === 'x')
			this._grabX = true
		if (prop === 'y')
			this._grabY = true
		item._removeUpdater(prop)
	}
	AnchorsPrototype._getAnchor = function(name) {
		var value = this[name]
		return value? Array.isArray(value)? value: value[name]: null
	}
	AnchorsPrototype._subscribe = function(src) {
		var items = this._items
		//connect only once per item
		if (items.indexOf(src) < 0) {
			items.push(src)
			this.connectOn(src, 'newBoundingBox', this._scheduleUpdate.bind(this))
		}
	}
	$core._protoOnChanged(AnchorsPrototype, 'fill', function(value) {
		this._scheduleUpdate()
		if (value === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		this._grab(item, 'width')
		this._grab(item, 'y')
		this._grab(item, 'height')
		this._subscribe(value)
	})
	$core._protoOnChanged(AnchorsPrototype, 'centerIn', function(value) {
		this._scheduleUpdate()
		if (value === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		this._grab(item, 'y')
		this._subscribe(value)
		this._subscribe(item)
	})
	$core._protoOnChanged(AnchorsPrototype, 'bottom', function(value) {
		this._scheduleUpdate()
		var bottom = this._getAnchor('bottom')
		if (bottom === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'y')
		if (anchors.top || anchors.verticalCenter) {
			this._grab(item, 'height')
		}
		this._subscribe(item)
		this._subscribe(bottom[0])
	})
	$core._protoOnChanged(AnchorsPrototype, 'horizontalCenter', function(value) {
		this._scheduleUpdate()
		var hc = this._getAnchor('horizontalCenter')
		if (hc === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		if (anchors.left || anchors.right) {
			this._grab(item, 'width')
		}
		this._subscribe(item)
		this._subscribe(hc[0])
	})
	$core._protoOnChanged(AnchorsPrototype, 'left', function(value) {
		this._scheduleUpdate()
		var left = this._getAnchor('left')
		if (left === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		if (anchors.right || anchors.horizontalCenter) {
			this._grab(item, 'width')
			this._subscribe(item)
		}
		this._subscribe(left[0])
	})
	$core._protoOnChanged(AnchorsPrototype, 'right', function(value) {
		this._scheduleUpdate()
		var right = this._getAnchor('right')
		if (right === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'x')
		if (anchors.left || anchors.horizontalCenter) {
			this._grab(item, 'width')
		}
		this._subscribe(item)
		this._subscribe(right[0])
	})
	$core._protoOnChanged(AnchorsPrototype, 'top', function(value) {
		this._scheduleUpdate()
		var top = this._getAnchor('top')
		if (top === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'y')
		if (anchors.bottom || anchors.verticalCenter) {
			this._grab(item, 'height')
			this._subscribe(item)
		}
		this._subscribe(top[0])
	})
	$core._protoOnChanged(AnchorsPrototype, 'verticalCenter', function(value) {
		this._scheduleUpdate()
		var vc = this._getAnchor('verticalCenter')
		if (vc === null)
			return

		var item = this.parent
		var anchors = this
		this._grab(item, 'y')
		if (anchors.top || anchors.bottom) {
			this._grab(item, 'height')
		}
		this._subscribe(item)
		this._subscribe(vc[0])
	})
	var $code$0 = function(value) { this.parent.anchorsMarginsUpdated(); this._scheduleUpdate(); }
	$core._protoOnChanged(AnchorsPrototype, 'bottomMargin', $code$0)
	$core._protoOnChanged(AnchorsPrototype, 'leftMargin', $code$0)
	$core._protoOnChanged(AnchorsPrototype, 'topMargin', $code$0)
	$core._protoOnChanged(AnchorsPrototype, 'rightMargin', $code$0)
	$core._protoOnChanged(AnchorsPrototype, 'margin', $code$0)

	AnchorsPrototype.$c = function($c) {
		var $this = this;
		AnchorsBasePrototype.$c.call(this, $c.$b = { })

	}
	AnchorsPrototype.$s = function($c) {
		var $this = this;
	AnchorsBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.Gradient]=====================

	var GradientBaseComponent = $core.Object
	var GradientBasePrototype = GradientBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var GradientComponent = $core.Gradient = function(parent, row) {
		GradientBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.stops = []
	}

	}
	var GradientPrototype = GradientComponent.prototype = Object.create(GradientBasePrototype)

	GradientPrototype.constructor = GradientComponent

	GradientPrototype.componentName = 'core.Gradient'
	core.addProperty(GradientPrototype, 'real', 'angle')
/** @const @type {number} */
	GradientPrototype.Vertical = 0
/** @const @type {number} */
	GradientComponent.Vertical = 0
/** @const @type {number} */
	GradientPrototype.Horizontal = 1
/** @const @type {number} */
	GradientComponent.Horizontal = 1
/** @const @type {number} */
	GradientPrototype.BottomRight = 2
/** @const @type {number} */
	GradientComponent.BottomRight = 2
/** @const @type {number} */
	GradientPrototype.TopRight = 3
/** @const @type {number} */
	GradientComponent.TopRight = 3
/** @const @type {number} */
	GradientPrototype.Custom = 4
/** @const @type {number} */
	GradientComponent.Custom = 4
	core.addProperty(GradientPrototype, 'enum', 'orientation')
	GradientPrototype._updateStyle = function() {
		var decl = this._getDeclaration()
		if (decl)
			this.parent.style({ 'background-color': '', 'background': decl })
	}
	GradientPrototype._getDeclaration = function() {
		var stops = this.stops
		var n = stops.length
		if (n < 2)
			return

		var orientation
		switch(this.orientation) {
			default:
			case this.Vertical:	orientation = 'to bottom'; break
			case this.Horizontal:	orientation = 'to left'; break
			case this.BottomRight:	orientation = 'to bottom right'; break
			case this.TopRight:	orientation = 'to top right'; break
			case this.Custom:	orientation = this.angle + 'deg'; break
		}

		var grad = new $core.gradient.Gradient(orientation)

		for(var i = 0; i < n; ++i) {
			var stop = stops[i]
			grad.add(stop._getDeclaration())
		}

		return grad
	}
	GradientPrototype.__complete = function() { GradientBasePrototype.__complete.call(this)
this._updateStyle()
}
	GradientPrototype.addChild = function(child) {
		$core.Object.prototype.addChild.apply(this, arguments)
		if (child instanceof $core.GradientStop) {
			this.stops.push(child)
			this.stops.sort(function(a, b) { return a.position > b.position; })
			this._updateStyle()
		}
	}

	GradientPrototype.$c = function($c) {
		var $this = this;
		GradientBasePrototype.$c.call(this, $c.$b = { })

	}
	GradientPrototype.$s = function($c) {
		var $this = this;
	GradientBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component core.ClickMixin]=====================

	var ClickMixinBaseComponent = $core.Object
	var ClickMixinBasePrototype = ClickMixinBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var ClickMixinComponent = $core.ClickMixin = function(parent, row) {
		ClickMixinBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this.element = this.parent.element;
		this._bindClick(this.enabled)
	}

	}
	var ClickMixinPrototype = ClickMixinComponent.prototype = Object.create(ClickMixinBasePrototype)

	ClickMixinPrototype.constructor = ClickMixinComponent

	ClickMixinPrototype.componentName = 'core.ClickMixin'
	core.addProperty(ClickMixinPrototype, 'bool', 'enabled', (true))
	ClickMixinPrototype._bindClick = function(value) {
		if (value && !this._cmClickBinder) {
			this._cmClickBinder = new $core.EventBinder(this.element)
			this._cmClickBinder.on('click', $core.createSignalForwarder(this.parent, 'clicked').bind(this))
		}
		if (this._cmClickBinder)
			this._cmClickBinder.enable(value)
	}
	$core._protoOnChanged(ClickMixinPrototype, 'enabled', function(value) { this._bindClick(value) })

	ClickMixinPrototype.$c = function($c) {
		var $this = this;
		ClickMixinBasePrototype.$c.call(this, $c.$b = { })

	}
	ClickMixinPrototype.$s = function($c) {
		var $this = this;
	ClickMixinBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component src.AnotherApi]=====================

	var AnotherApiBaseComponent = $controls$web$api.Rest
	var AnotherApiBasePrototype = AnotherApiBaseComponent.prototype

/**
 * @constructor
 * @extends {$controls$web$api.Rest}
 */
	var AnotherApiComponent = $src.AnotherApi = function(parent, row) {
		AnotherApiBaseComponent.apply(this, arguments)

	}
	var AnotherApiPrototype = AnotherApiComponent.prototype = Object.create(AnotherApiBasePrototype)

	AnotherApiPrototype.constructor = AnotherApiComponent

	AnotherApiPrototype.componentName = 'src.AnotherApi'

	AnotherApiPrototype.$c = function($c) {
		var $this = this;
		AnotherApiBasePrototype.$c.call(this, $c.$b = { })
var _this$child0 = new $controls$web$api.Method($this)
		$c._this$child0 = _this$child0

//creating component Method
		_this$child0.$c($c.$c$_this$child0 = { })

		$this.addChild(_this$child0)
	}
	AnotherApiPrototype.$s = function($c) {
		var $this = this;
	AnotherApiBasePrototype.$s.call(this, $c.$b); delete $c.$b
//assigning baseUrl to ("https://ctx.playfamily.ru")
			$this._removeUpdater('baseUrl'); $this.baseUrl = ("https://ctx.playfamily.ru");

//setting up component Method
			var _this$child0 = $c._this$child0
			_this$child0.$s($c.$c$_this$child0)
			delete $c.$c$_this$child0

//assigning path to ("/screenapi/v1/noauth/collection/web/1?elementAlias=topfilms&elementType=COLLECTION&limit=16&offset=0&withInnerCollections=true")
			_this$child0._removeUpdater('path'); _this$child0.path = ("/screenapi/v1/noauth/collection/web/1?elementAlias=topfilms&elementType=COLLECTION&limit=16&offset=0&withInnerCollections=true");
//assigning name to ("getMain")
			_this$child0._removeUpdater('name'); _this$child0.name = ("getMain");

			_this$child0.completed()

			$this.completed()
}


//=====[component core.RAIIEventEmitter]=====================

	var RAIIEventEmitterBaseComponent = $core.EventEmitter
	var RAIIEventEmitterBasePrototype = RAIIEventEmitterBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.EventEmitter}
 */
	var RAIIEventEmitterComponent = $core.RAIIEventEmitter = function(parent, row) {
		RAIIEventEmitterBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		this._onListener = {}
	}

	}
	var RAIIEventEmitterPrototype = RAIIEventEmitterComponent.prototype = Object.create(RAIIEventEmitterBasePrototype)

	RAIIEventEmitterPrototype.constructor = RAIIEventEmitterComponent

	RAIIEventEmitterPrototype.componentName = 'core.RAIIEventEmitter'
	RAIIEventEmitterPrototype.removeAllListeners = function(name) {
		$core.EventEmitter.prototype.removeAllListeners.call(this, name)
		if (name in this._onListener)
			this._onListener[name][1](name)
		else if ('' in this._onListener) {
			//log('first listener to', name)
			this._onListener[''][1](name)
		}
	}
	RAIIEventEmitterPrototype.on = function(name,callback) {
		if (!(name in this._eventHandlers)) {
			if (name in this._onListener) {
				//log('first listener to', name)
				this._onListener[name][0](name)
			} else if ('' in this._onListener) {
				//log('first listener to', name)
				this._onListener[''][0](name)
			}
			if (this._eventHandlers[name])
				throw new Error('listener callback added event handler')
		}
		$core.EventEmitter.prototype.on.call(this, name, callback)
	}
	RAIIEventEmitterPrototype.onListener = function(name,first,last) {
		this._onListener[name] = [first, last]
	}

	RAIIEventEmitterPrototype.$c = function($c) {
		var $this = this;
		RAIIEventEmitterBasePrototype.$c.call(this, $c.$b = { })

	}
	RAIIEventEmitterPrototype.$s = function($c) {
		var $this = this;
	RAIIEventEmitterBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}


//=====[component html5.Stylesheet]=====================

	var StylesheetBaseComponent = $core.Object
	var StylesheetBasePrototype = StylesheetBaseComponent.prototype

/**
 * @constructor
 * @extends {$core.Object}
 */
	var StylesheetComponent = $html5.Stylesheet = function(parent, row) {
		StylesheetBaseComponent.apply(this, arguments)
	//custom constructor:
	{
		var context = this._context
		var options = context.options

		var style = this.style = context.createElement('style')
		style.dom.type = 'text/css'

		this.prefix = options.prefix
		var divId = options.id

		var div = document.getElementById(context, divId)
		var topLevel = div === null

		var userSelect = window.Modernizr.prefixedCSS('user-select') + ": none; "
		var os = _globals.core.os
		var tapHighlightedPlatform = (os === "android" || os === "androidttk" || os === "hisense")

		//var textAdjust = window.Modernizr.prefixedCSS('text-size-adjust') + ": 100%; "
		style.setHtml(
			//"html { " + textAdjust + " }" +
			"div#" + divId + " { position: absolute; visibility: hidden; left: 0px; top: 0px; }" +
			(os === "webOS" || tapHighlightedPlatform ? this.mangleRule('div', "{ " + userSelect + " }") : "") +
			(tapHighlightedPlatform ? this.mangleRule('div', "{ -webkit-tap-highlight-color: rgba(255, 255, 255, 0); -webkit-focus-ring-color: rgba(255, 255, 255, 0); outline: none; }") : "") +
			(topLevel? "body { padding: 0; margin: 0; border: 0px; overflow: hidden; }": "") + //fixme: do we need style here in non-top-level mode?
			this.mangleRule('video', "{ position: absolute; }") + //fixme: do we need position rule if it's item?
			this.mangleRule('img', "{ position: absolute; -webkit-touch-callout: none; " + userSelect + " }")
		)
		var head = _globals.html5.html.getElement(context, 'head')
		head.append(style)
		head.updateStyle()

		this._addRule = _globals.html5.html.createAddRule(style.dom).bind(this)
		this._lastId = 0
	}

	}
	var StylesheetPrototype = StylesheetComponent.prototype = Object.create(StylesheetBasePrototype)

	StylesheetPrototype.constructor = StylesheetComponent

	StylesheetPrototype.componentName = 'html5.Stylesheet'
	StylesheetPrototype.allocateClass = function(prefix) {
		var globalPrefix = this.prefix
		return (globalPrefix? globalPrefix: '') + prefix + '-' + this._lastId++
	}
	StylesheetPrototype.mangleSelector = function(selector) {
		var prefix = this.prefix
		if (prefix)
			return selector + '.' + prefix + 'core-item'
		else
			return selector
	}
	StylesheetPrototype.mangleRule = function(selector,rule) {
		return this.mangleSelector(selector) + ' ' + rule + ' '
	}
	StylesheetPrototype.addRule = function(selector,rule) {
		this._addRule(selector, rule)
	}

	StylesheetPrototype.$c = function($c) {
		var $this = this;
		StylesheetBasePrototype.$c.call(this, $c.$b = { })

	}
	StylesheetPrototype.$s = function($c) {
		var $this = this;
	StylesheetBasePrototype.$s.call(this, $c.$b); delete $c.$b
$this.completed()
}

_globals.core.model = (function() {/** @const */
var exports = {};
//=====[import core.model]=====================

var ModelUpdateNothing = 0
var ModelUpdateInsert = 1
var ModelUpdateUpdate = 2

var ModelUpdateRange = function(type, length) {
	this.type = type
	this.length = length
}

exports.ModelUpdate = function() {
	this.count = 0
	this._reset()
}
exports.ModelUpdate.prototype.constructor = exports.ModelUpdate

exports.ModelUpdate.prototype._reset = function() {
	this._ranges = [new ModelUpdateRange(ModelUpdateNothing, this.count)]
	this._updateIndex = this.count
}

exports.ModelUpdate.prototype._setUpdateIndex = function(begin) {
	if (begin < this._updateIndex)
		this._updateIndex = begin
}

exports.ModelUpdate.prototype._find = function(index) {
	var ranges = this._ranges
	var i
	for(i = 0; i < ranges.length; ++i) {
		var range = ranges[i]
		if (index < range.length)
			return { index: i, offset: index }
		if (range.length > 0)
			index -= range.length
	}
	if (index != 0)
		throw new Error('invalid index ' + index)

	return { index: i - 1, offset: range.length }
}

exports.ModelUpdate.prototype.reset = function(model) {
	this.update(model, 0, Math.min(model.count, this.count))
	if (this.count < model.count) {
		this.insert(model, this.count, model.count)
	} else {
		this.remove(model, model.count, this.count)
	}
}

exports.ModelUpdate.prototype._merge = function() {
	var ranges = this._ranges
	for(var index = 1; index < ranges.length; ) {
		var range = ranges[index - 1]
		var nextRange = ranges[index]
		if (range.type === nextRange.type) {
			if (range.type === ModelUpdateInsert && range.length < 0 && nextRange.length > 0) {
				//removed + inserted rows reappears as updated
				var updated = Math.min(-range.length, nextRange.length)
				range.type = ModelUpdateUpdate
				nextRange.length += range.length
				range.length = updated
				if (index > 1)
					--index
			} else {
				range.length += nextRange.length
				ranges.splice(index, 1)
			}
		} else if (range.type === ModelUpdateInsert && range.length === 0) {
			ranges.splice(index, 1)
		} else
			++index
	}
}

exports.ModelUpdate.prototype._split = function(index, offset, type, length) {
	var ranges = this._ranges
	if (offset === 0) {
		ranges.splice(index, 0, new ModelUpdateRange(type, length))
		return index + 1
	} else {
		var range = ranges[index]
		var right = range.length - offset
		range.length = offset
		if (right != 0) {
			ranges.splice(index + 1, 0,
				new ModelUpdateRange(type, length),
				new ModelUpdateRange(range.type, right))
			return index + 2
		} else {
			ranges.splice(index + 1, 0,
				new ModelUpdateRange(type, length))
			return index + 2
		}
	}
}

exports.ModelUpdate.prototype.insert = function(model, begin, end) {
	if (begin >= end)
		return

	this._setUpdateIndex(begin)
	var ranges = this._ranges
	var d = end - begin
	this.count += d
	if (this.count != model.count)
		throw new Error('unbalanced insert ' + this.count + ' + [' + begin + '-' + end + '], model reported ' + model.count)

	var res = this._find(begin)
	var range = ranges[res.index]
	if (range.length === 0) { //first insert
		range.type = ModelUpdateInsert
		range.length += d
	} else {
		if (res.offset >= 0)
			this._split(res.index, res.offset, ModelUpdateInsert, d)
		else
			this._split(res.index + 1, 0, ModelUpdateInsert, d)
	}
	this._merge()
}

exports.ModelUpdate.prototype.remove = function(model, begin, end) {
	if (begin >= end)
		return

	this._setUpdateIndex(begin)
	var ranges = this._ranges
	var d = end - begin
	this.count -= d
	if (this.count != model.count)
		throw new Error('unbalanced remove ' + this.count + ' + [' + begin + '-' + end + '], model reported ' + model.count)

	var res = this._find(begin)
	var range = ranges[res.index]

	if (range.type === ModelUpdateInsert) {
		range.length -= d
	} else {
		var index = this._split(res.index, res.offset, ModelUpdateInsert, -d)
		while(d > 0) {
			var range = ranges[index]
			if (range.length <= d) {
				ranges.splice(index, 1)
				d -= range.length
			} else {
				range.length -= d
				d = 0
			}
		}
	}
	this._merge()
}

exports.ModelUpdate.prototype.update = function(model, begin, end) {
	if (begin >= end)
		return

	var ranges = this._ranges
	var n = end - begin
	var res = this._find(begin)
	var index = res.index

	var range = ranges[index]
	if (res.offset > 0) {
		ranges.splice(index + 1, 0, new ModelUpdateRange(range.type, range.length - res.offset))
		range.length = res.offset
		++index
		if (range.length === 0)
			throw new Error('invalid offset')
	}

	while(n > 0) {
		var range = ranges[index]
		var length = range.length
		switch(range.type) {
			case ModelUpdateNothing:
				if (length > n) {
					//range larger than needed
					range.length -= n
					ranges.splice(index, 0, new ModelUpdateRange(ModelUpdateUpdate, n))
					n -= length
				} else { //length <= n
					range.type = ModelUpdateUpdate
					n -= length
				}
				break
			case ModelUpdateInsert:
				if (length > 0)
					n -= length
				++index
				break
			case ModelUpdateUpdate:
				n -= length
				++index
				break
		}
	}
	this._merge()
}

exports.ModelUpdate.prototype.clear = function() {
	this.count = 0
	this._reset()
}

exports.ModelUpdate.prototype.apply = function(view, skipCheck) {
	var index = 0
	this._ranges.forEach(
		function(range) {
			var n = range.length
			switch(range.type) {
				case ModelUpdateInsert:
					if (n > 0) {
						view._insertItems(index, index + n)
						index += n
					} else if (n < 0) {
						view._removeItems(index, index - n)
					}
					break
				case ModelUpdateUpdate:
					view._updateItems(index, index + n)
					index += n
					break
				default:
					index += range.length
			}
		}
	)
	if (!skipCheck && view._items.length != this.count)
		throw new Error('unbalanced items update, view: ' + view._items.length + ', update:' + this.count)

	for(var i = this._updateIndex; i < this.count; ++i)
		view._updateDelegateIndex(i)
	this._reset()
}

var ArrayModelWrapper = exports.ArrayModelWrapper = function (data) { this.data = data; this.count = data.length }
ArrayModelWrapper.prototype.get = function(idx)  { return { value: this.data[idx] } }
ArrayModelWrapper.prototype.on = function() { }
ArrayModelWrapper.prototype.removeListener = function() { }

return exports;
} )()
_globals.core.gradient = (function() {/** @const */
var exports = {};
//=====[import core.gradient]=====================

var GradientStop = function(color, position) {
	this.color = $core.Color.normalize(color)
	this.position = position
}

var GradientStopPrototype = GradientStop.prototype
GradientStopPrototype.constructor = GradientStop

GradientStopPrototype.toString = function() {
	return this.color + " " + Math.floor(100 * this.position) + "%"
}

var Gradient = function(orientation) {
	this.orientation = orientation
	this.stops = []
}

var GradientPrototype = Gradient.prototype
GradientPrototype.constructor = Gradient

GradientPrototype.add = function(stop) {
	this.stops.push(stop)
}

GradientPrototype.toString = function() {
	return 'linear-gradient(' + this.orientation + ',' + this.stops.join() + ')'
}

exports.GradientStop = GradientStop
exports.Gradient = Gradient

return exports;
} )()
_globals.core.transform = (function() {/** @const */
var exports = {};
//=====[import core.transform]=====================

var Value = function(value, unit) {
	this.value = value
	this.unit = unit
}

var ValuePrototype = Value.prototype
ValuePrototype.constructor = Value

ValuePrototype.toString = function() {
	var unit = this.unit
	return unit != undefined? this.value + unit: this.value
}

var Transform = function() {
	this.transforms = {}
}

var TransformPrototype = Transform.prototype
TransformPrototype.constructor = Transform

TransformPrototype.add = function(name, value, unit) {
	this.transforms[name] = new Value(value, unit)
}

TransformPrototype.toString = function() {
	var transforms = this.transforms
	var str = ''
	for(var name in transforms) {
		var value = transforms[name]
		str += name + '(' + value + ') '
	}
	return str
}

exports.Transform = Transform


return exports;
} )()
_globals.html5.localstorage = (function() {/** @const */
var exports = {};
//=====[import html5.localstorage]=====================

var LocalStorage = function(parent) {
	if (parent && parent.name !== undefined) {
		// TODO: implement properties sunchronization using parent._setProperty() and parent.ready()
	}
	this._storage = window.localStorage;
	if (!this._storage)
		throw new Error("no local storage support")
}

LocalStorage.prototype.get = function(name, callback, error) {
	var value = this._storage.getItem(name)
	if (value !== null)
		callback(value)
	else
		error(new Error('no item with name ' + name))
}

LocalStorage.prototype.set = function(name, value) {
	this._storage.setItem(name, value)
}

LocalStorage.prototype.erase = function(name, error) {
	this._storage.removeItem(name)
}

exports.createLocalStorage = function(parent) {
	return new LocalStorage(parent)
}

exports.LocalStorage = LocalStorage

return exports;
} )()
_globals.html5.html = (function() {/** @const */
var exports = {};
//=====[import html5.html]=====================

/*** @using { core.RAIIEventEmitter } **/

var Modernizr = window.Modernizr

exports.capabilities = {
	csstransforms3d: Modernizr.csstransforms3d,
	csstransforms: Modernizr.csstransforms,
	csstransitions: Modernizr.csstransitions,
	mouseEnterLeaveSupported: _globals.core.os != "netcast"
}

var imageCache = null

exports.createAddRule = function(style) {
	if(! (style.sheet || {}).insertRule) {
		var sheet = (style.styleSheet || style.sheet)
		return function(name, rules) {
			try {
				sheet.addRule(name, rules)
			} catch(e) {
				//log("AddRule failed:", e, ", sheet:", sheet, ", name:", name, ", rules:", rules) //trace?
				log("addRule failed on rule " + name)
			}
		}
	}
	else {
		var sheet = style.sheet
		return function(name, rules) {
			try {
				sheet.insertRule(name + '{' + rules + '}', sheet.cssRules.length)
			} catch(e) {
				//log("InsertRule failed:", e, ", sheet:", sheet, ", name:", name, ", rules:", rules) //trace?
				log("insertRule failed on rule " + name)
			}
		}
	}
}

var StyleCache = function() {
	this._cache = {}
}

var StyleCachePrototype = StyleCache.prototype
StyleCachePrototype.constructor = StyleCache

StyleCachePrototype.update = function(element, name, value) {
	//log('update', element._uniqueId, name, value)
	var cache = this._cache
	var id = element._uniqueId
	var entry = cache[id]
	if (entry !== undefined) {
		entry.data[name] = value
		++entry.size
	} else {
		var data = {}
		data[name] = value
		cache[id] = {data: data, element: element, size: 1}
	}
}

StyleCachePrototype.pop = function(element) {
	var id = element._uniqueId
	var data = this._cache[id]
	if (data === undefined)
		return

	delete this._cache[id]
	return data
}

StyleCachePrototype.apply = function() {
	var cache = this._cache
	this._cache = {}

	for(var id in cache) {
		var entry = cache[id]
		entry.element.updateStyle(entry)
	}
}

var StyleClassifier = function (prefix) {
	var style = document.createElement('style')
	style.type = 'text/css'
	document.head.appendChild(style)

	this.prefix = prefix + 'C-'
	this.style = style
	this.total = 0
	this.stats = {}
	this.classes = {}
	this.classes_total = 0
	this._addRule = exports.createAddRule(style)
}

var StyleClassifierPrototype = StyleClassifier.prototype
StyleClassifierPrototype.constructor = StyleClassifier

StyleClassifierPrototype.add = function(rule) {
	this.stats[rule] = (this.stats[rule] || 0) + 1
	++this.total
}

StyleClassifierPrototype.register = function(rules) {
	var rule = rules.join(';')
	var classes = this.classes
	var cls = classes[rule]
	if (cls !== undefined)
		return cls

	cls = classes[rule] = this.prefix + this.classes_total++
	this._addRule('.' + cls, rule)
	return cls
}

StyleClassifierPrototype.classify = function(rules) {
	var total = this.total
	if (total < 10) //fixme: initial population threshold
		return ''

	rules.sort() //mind vendor prefixes!
	var classified = []
	var hot = []
	var stats = this.stats
	rules.forEach(function(rule, idx) {
		var hits = stats[rule]
		var usage = hits / total
		if (usage > 0.05) { //fixme: usage threshold
			classified.push(rule)
			hot.push(idx)
		}
	})
	if (hot.length < 2)
		return ''
	hot.forEach(function(offset, idx) {
		rules.splice(offset - idx, 1)
	})
	return this.register(classified)
}

var _modernizrCache = {}
if (_globals.core.userAgent.toLowerCase().indexOf('webkit') >= 0)
	_modernizrCache['appearance'] = '-webkit-appearance'

var getPrefixedName = function(name) {
	var prefixedName = _modernizrCache[name]
	if (prefixedName === undefined)
		_modernizrCache[name] = prefixedName = window.Modernizr.prefixedCSS(name)
	return prefixedName
}

exports.getPrefixedName = getPrefixedName

var passiveListeners = ['touchstart', 'touchmove', 'touchend', 'wheel', 'mousewheel', 'scroll']
var passiveArg = Modernizr.passiveeventlisteners ? {passive: true} : false
var mouseEvents = ['mousedown', 'mouseup', 'click', 'dblclick', 'mousemove',
	'mouseover', 'mousewheel', 'mouseout', 'contextmenu', 'mouseenter', 'mouseleave']
var touchEvents = ['touchstart', 'touchmove', 'touchend', 'touchcancel']

var registerGenericListener = function(target) {
	var storage = target.__domEventListeners
	if (storage === undefined)
		storage = target.__domEventListeners = {}

	target.onListener('',
		function(name) {
			//log('registering generic event', name)
			var callback = storage[name] = target._context.wrapNativeCallback(function() {
				target.emitWithArgs(name, arguments)
			})

			var args = [name, callback]
			if (passiveListeners.indexOf(name) >= 0)
				args.push(passiveArg)

			if (mouseEvents.indexOf(name) >= 0) {
				var n = target.__mouseHandlerCount = ~~target.__mouseHandlerCount + 1
				if (n === 1)
					target.style('pointer-events', 'auto')
			}
			if (touchEvents.indexOf(name) >= 0) {
				var n = target.__touchHandlerCount = ~~target.__touchHandlerCount + 1
				if (n === 1)
					target.style('touch-action', 'auto')
			}

			target.dom.addEventListener.apply(target.dom, args)
		},
		function(name) {
			//log('removing generic event', name)
			if (mouseEvents.indexOf(name) >= 0) {
				var n = target.__mouseHandlerCount = ~~target.__mouseHandlerCount - 1
				if (n <= 0)
					target.style('pointer-events', 'none')
			}
			if (touchEvents.indexOf(name) >= 0) {
				var n = target.__touchHandlerCount = ~~target.__touchHandlerCount - 1
				if (n <= 0)
					target.style('touch-action', 'none')
			}
			target.dom.removeEventListener(name, storage[name])
		}
	)
}

var _loadedStylesheets = {}

exports.loadExternalStylesheet = function(url) {
	if (!_loadedStylesheets[url]) {
		var link = document.createElement('link')
		link.setAttribute('rel', "stylesheet")
		link.setAttribute('href', url)
		document.head.appendChild(link)
		_loadedStylesheets[url] = true
	}
}

var lastId = 0

var nodesCache = {};

/**
 * @constructor
 */

function mangleClass(name) {
	return $manifest$html5$prefix + name
}

exports.Element = function(context, tag, cls) {
	if (typeof tag === 'string') {
		if (cls === undefined)
			cls = ''

		var key = tag + '.' + cls
		if (!nodesCache[key]) {
			var el = document.createElement(tag)
			if ($manifest$html5$prefix || cls)
				el.classList.add(mangleClass(cls))
			if ($manifest$html5$prefix && cls)
				el.classList.add(mangleClass('')) //base item style, fixme: pass array here?
			nodesCache[key] = el
		}
		this.dom = nodesCache[key].cloneNode(false);
	}
	else
		this.dom = tag

	_globals.core.RAIIEventEmitter.apply(this)
	this._context = context
	this._transitions = {}
	this._class = ''
	this._uniqueId = (++lastId).toString(36)
	this._firstChildIndex = 0

	registerGenericListener(this)
}

var ElementPrototype = exports.Element.prototype = Object.create(_globals.core.RAIIEventEmitter.prototype)
ElementPrototype.constructor = exports.Element

ElementPrototype.addClass = function(cls) {
	this.dom.classList.add(cls)
}

ElementPrototype.appendChildren = function(children) {
	if (children.length > 0) {
		var fragment = document.createDocumentFragment()
		children.forEach(function(child) {
			fragment.appendChild(child)
		})
		this.dom.appendChild(fragment)
	}
}

ElementPrototype.removeChildren = function(ui) {
	var removedChildren = []

	var dom = this.dom
	ui.children.forEach(function(child) {
		var element = child.element
		if (element !== undefined) {
			var childNode = element.dom
			if (childNode.parentNode === dom) {
				dom.removeChild(childNode)
				removedChildren.push(childNode)
			}
		}
	})
	return removedChildren
}


ElementPrototype.setHtml = function(html, component) {
	var dom = this.dom
	var children
	if (component !== undefined)
		children = this.removeChildren(component)
	else
		children = []
	dom.innerHTML = html
	this.appendChildren(children)
}

ElementPrototype.width = function() {
	this.updateStyle()
	return this.dom.clientWidth
}

ElementPrototype.height = function() {
	this.updateStyle()
	return this.dom.clientHeight
}

ElementPrototype.fullWidth = function() {
	this.updateStyle()
	return this.dom.scrollWidth
}

ElementPrototype.fullHeight = function() {
	this.updateStyle()
	return this.dom.scrollHeight
}

var overflowStyles = ['overflow', 'overflow-x', 'overflow-y']

ElementPrototype.style = function(name, style) {
	var cache = this._context._styleCache
	if (style !== undefined) {
		cache.update(this, name, style)
		if (overflowStyles.indexOf(name) >= 0) {
			cache.update(this, 'pointer-events', 'auto')
			cache.update(this, 'touch-action', 'auto')
		}
	} else if (typeof name === 'object') { //style({ }) assignment
		for(var k in name) {
			if (overflowStyles.indexOf(name) >= 0) {
				cache.update(this, 'pointer-events', 'auto')
				cache.update(this, 'touch-action', 'auto')
			}
			cache.update(this, k, name[k])
		}
	}
	else
		throw new Error('cache is write-only')
}

ElementPrototype.setAttribute = function(name, value) {
	return this.dom.setAttribute(name, value)
}

ElementPrototype.getAttribute = function(name) {
	return this.dom.getAttribute(name)
}

ElementPrototype.setProperty = function(name, value) {
	return this.dom[name] = value
}

ElementPrototype.getProperty = function(name) {
	return this.dom[name]
}

/** @const */
var cssUnits = {
	'left': 'px',
	'top': 'px',
	'width': 'px',
	'height': 'px',

	'border-radius': 'px',
	'border-width': 'px',

	'margin-left': 'px',
	'margin-top': 'px',
	'margin-right': 'px',
	'margin-bottom': 'px',

	'padding-left': 'px',
	'padding-top': 'px',
	'padding-right': 'px',
	'padding-bottom': 'px',
	'padding': 'px'
}

ElementPrototype.forceLayout = function() {
	this.updateStyle()
	return this.dom.offsetWidth | this.dom.offsetHeight
}

ElementPrototype.updateStyle = function(updated) {
	var element = this.dom
	if (!element)
		return

	if (updated === undefined) {
		updated = this._context._styleCache.pop(this)
		if (updated === undefined) //no update at all
			return
	}

	var styles = updated.data
	var elementStyle = element.style

	//fixme: classifier is currently broken, restore rules processor
	//var rules = []
	for(var name in styles) {
		var value = styles[name]
		//log('updateStyle', this._uniqueId, name, value)

		var prefixedName = getPrefixedName(name)
		var ruleName = prefixedName !== false? prefixedName: name
		if (value instanceof _globals.core.Color)
			value = value.rgba()
		else if (Array.isArray(value))
			value = value.join(',')

		if (typeof value === 'number') {
			var unit = cssUnits[name]
			if (unit !== undefined) {
				value += unit
			}
		}

		elementStyle[ruleName] = value
	}
/*
	var cache = this._context._styleClassifier
	var cls = cache? cache.classify(rules): ''
	if (cls !== this._class) {
		var classList = element.classList
		if (this._class !== '')
			classList.remove(this._class)
		this._class = cls
		if (cls !== '')
			classList.add(cls)
	}
*/
}

ElementPrototype.append = function(el) {
	this.dom.appendChild((el instanceof exports.Element)? el.dom: el)
}

ElementPrototype.prepend = function(el) {
	this.dom.insertBefore((el instanceof exports.Element)? el.dom: el, this.dom.childNodes[0])
}

ElementPrototype.discard = function() {
	_globals.core.RAIIEventEmitter.prototype.discard.apply(this)
	this.remove()
}

ElementPrototype.remove = function() {
	var dom = this.dom
	if (dom.parentNode)
		dom.parentNode.removeChild(dom)
}

ElementPrototype.focus = function() {
	var dom = this.dom
	dom.focus()
	dom.select()
}

ElementPrototype.blur = function() {
	this.dom.blur()
}

ElementPrototype.getScrollX = function() {
	return this.dom.scrollLeft
}

ElementPrototype.getScrollY = function() {
	return this.dom.scrollTop
}

exports.Document = function(context, dom) {
	_globals.core.RAIIEventEmitter.apply(this)
	this._context = context
	this.dom = dom

	registerGenericListener(this)
}

var DocumentPrototype = exports.Document.prototype = Object.create(_globals.core.RAIIEventEmitter.prototype)
DocumentPrototype.constructor = exports.Document

exports.Window = function(context, dom) {
	_globals.core.RAIIEventEmitter.apply(this)
	this._context = context
	this.dom = dom

	registerGenericListener(this)
}

var WindowPrototype = exports.Window.prototype = Object.create(_globals.core.RAIIEventEmitter.prototype)
WindowPrototype.constructor = exports.Window

WindowPrototype.width = function() {
	return this.dom.innerWidth
}

WindowPrototype.height = function() {
	return this.dom.innerHeight
}

WindowPrototype.scrollY = function() {
	return this.dom.scrollY
}

WindowPrototype.style = function() { /* ignoring style on window */ }

exports.getElement = function(ctx, tag) {
	var tags = document.getElementsByTagName(tag)
	if (tags.length != 1)
		throw new Error('no tag ' + tag + '/multiple tags')
	return new exports.Element(ctx, tags[0])
}

exports.init = function(ctx) {
	imageCache = new _globals.html5.cache.Cache(loadImage)

	ctx._styleCache = new StyleCache()
	var options = ctx.options
	var prefix = ctx._prefix
	var divId = options.id
	var tag = options.tag || 'div'

	if (prefix) {
		prefix += '-'
		log('Context: using prefix', prefix)
	}

	var doc = new _globals.html5.html.Document(ctx, document)
	ctx.document = doc

	var win = new _globals.html5.html.Window(ctx, window)
	ctx.window = win
	var w, h

	var html = exports
	var div = document.getElementById(divId)
	var topLevel = div === null
	if (!topLevel) {
		div = new html.Element(ctx, div)
		w = div.width()
		h = div.height()
		log('Context: found element by id, size: ' + w + 'x' + h)
		win.on('resize', function() { ctx.width = div.width(); ctx.height = div.height(); });
	} else {
		w = win.width();
		h = win.height();
		log("Context: window size: " + w + "x" + h);
		div = html.createElement(ctx, tag)
		div.dom.id = divId
		win.on('resize', function() { ctx.width = win.width(); ctx.height = win.height(); });
		var body = html.getElement(ctx, 'body')
		body.append(div);
	}

	if (Modernizr.canvastext) {
		ctx._textCanvas = html.createElement(ctx, 'canvas')
		ctx._textCanvas.style('width', 0)
		ctx._textCanvas.style('height', 0)
		div.append(ctx._textCanvas)
		ctx._textCanvasContext = ('getContext' in ctx._textCanvas.dom)? ctx._textCanvas.dom.getContext('2d'): null
	} else {
		ctx._textCanvasContext = null
	}

	ctx.element = div
	ctx.width = w
	ctx.height = h

	win.on('scroll', function(event) { ctx.scrollY = win.scrollY(); });

	var onFullscreenChanged = function(e) {
		var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
		log('fullscreen change event:', state)
		ctx.fullscreen = state
	}

	new Array('webkitfullscreenchange', 'mozfullscreenchange', 'fullscreenchange', 'MSFullscreenChange').forEach(function(name) {
		div.on(name, onFullscreenChanged, true)
	})

	win.on('keydown', ctx.wrapNativeCallback(function(event) {
		var keyCode = event.which || event.keyCode
		var key = $core.keyCodes[keyCode]

		if (key !== undefined) {
			if (ctx.processKey(key, event))
				event.preventDefault()
		} else {
			log("unhandled keycode " + keyCode + ": [" + event.charCode + " " + event.keyCode + " " + event.which + " " + event.key + " " + event.code + " " + event.location + "]")
		}

	})) //fixme: add html.Document instead
	win.on('orientationchange', function(event) {
		log('orientation changed event')
		ctx.system.screenWidth = window.screen.width
		ctx.system.screenHeight = window.screen.height
	})

	ctx._styleClassifier = $manifest$cssAutoClassificator? new StyleClassifier(ctx._prefix): null; //broken beyond repair
}


//fixme: this is sorta hack, generalize that across other backends
exports.initSystem = function(system) {
	var win = system._context.window

	win.on('focus', function() { system.pageActive = true })
	win.on('blur', function() { system.pageActive = false })

	system.screenWidth = window.screen.width
	system.screenHeight = window.screen.height
}

exports.createElement = function(ctx, tag, cls) {
	return new exports.Element(ctx, tag, cls)
}

exports.initRectangle = function(rect) {
}

var failImage = function(image) {
	image._onError()
	image._context._processActions()
}

var loadImage = function(url, callback) {
	var tmp = new Image()

	tmp.onerror = function() {
		tmp.onload = null
		tmp.onerror = null
		callback(null)
	}

	tmp.onload = function() {
		tmp.onload = null
		tmp.onerror = null
		callback({ width: tmp.naturalWidth, height: tmp.naturalHeight })
	}
	tmp.src = url
}

exports.initImage = function(image) {
}

exports.loadImage = function(image, callback) {
	if (image.source.indexOf('?') < 0) {
		imageCache.get(image.source, callback)
	} else {
		loadImage(image.source, callback)
	}
}

exports.initText = function(text) {
}

var layoutTextSetStyle = function(text, style) {
	switch(text.verticalAlignment) {
		case text.AlignTop:		text._topPadding = 0; break
		case text.AlignBottom:	text._topPadding = text.height - text.paintedHeight; break
		case text.AlignVCenter:	text._topPadding = (text.height - text.paintedHeight) / 2; break
	}
	style['padding-top'] = text._topPadding
	style['height'] = text.height - text._topPadding
	text.style(style)
}

exports.setText = function(text, html) {
	text.element.setHtml(html, text)
}

exports.layoutText = function(text) {
	var ctx = text._context
	var textCanvasContext = ctx._textCanvasContext
	var wrap = text.wrapMode !== _globals.core.Text.NoWrap
	var element = text.element

	var dom = element.dom

	var isHtml = text.textFormat === text.Html || text.text.search(/[\<\&]/) >= 0 //dubious check

	if (!wrap && textCanvasContext !== null && !isHtml) {
		var font = text.font
		var fontSize
		if (font.pointSize)
			fontSize = Math.round(font.pointSize * 96 / 72)
		else
			fontSize = font.pixelSize
		//log('fontSize = ', fontSize)

		textCanvasContext.font = fontSize + 'px ' + font.family

		//log('font from canvas:', textCanvasContext.font, font.family, font.pixelSize, font.pointSize, fontSize)
		var metrics = textCanvasContext.measureText(text.text)
		text.paintedWidth = metrics.width
		text.paintedHeight = fontSize * font.lineHeight
		//log('layoutText', text.text, text.paintedWidth, text.paintedHeight)
		layoutTextSetStyle(text, {})
		return
	}
	var removedChildren = element.removeChildren(text)

	if (!wrap)
		text.style({ width: 'auto', height: 'auto', 'padding-top': 0 }) //no need to reset it to width, it's already there
	else
		text.style({ 'height': 'auto', 'padding-top': 0})

	//this is the source of rounding error. For instance you have 186.3px wide text, this sets width to 186px and causes wrapping
	/*
		https://github.com/pureqml/qmlcore/issues/176

		A few consequent text layouts may result in different results,
		probably as a result of some randomisation and/or rounding errors.
		This ends with +1 -1 +1 -1 infinite loop of updates.

		Ignore all updates which subtract 1 from paintedWidth/Height
	*/
	var w = element.fullWidth() + 1, h = element.fullHeight() + 1
	if (w + 1 !== text.paintedWidth)
		text.paintedWidth = w
	if (h + 1 !== text.paintedHeight)
		text.paintedHeight = h

	var style
	if (!wrap)
		//restore original width value (see 'if' above), we're not passing 'height' as it's explicitly set by layoutTextSetStyles
		style = { 'width': text.width }
	else
		style = { }

	layoutTextSetStyle(text, style)
	element.appendChildren(removedChildren)
}

exports.run = function(ctx, onloadCallback) {
	ctx.window.on('message', function(event) {
		log('Context: received message from ' + event.origin, event)
		ctx.message(event)
	})
	ctx.window.on($manifest$expectRunContextEvent ? 'runContext' : 'load', function() {
		onloadCallback()
	})
}

exports.tick = function(ctx) {
	//log('tick')
	ctx._styleCache.apply()
}

///@private
var setTransition = function(component, name, animation) {
	var html5 = exports
	var transition = {
		property: html5.getPrefixedName('transition-property'),
		delay: html5.getPrefixedName('transition-delay'),
		duration: html5.getPrefixedName('transition-duration'),
		timing: html5.getPrefixedName('transition-timing-function')
	}
	var element = component.element
	element.forceLayout() //flush styles before setting transition

	name = html5.getPrefixedName(name) || name //replace transform: <prefix>rotate hack

	var transitions = element._transitions
	var property	= transitions[transition.property] || []
	var duration	= transitions[transition.duration] || []
	var timing		= transitions[transition.timing] || []
	var delay		= transitions[transition.delay] || []

	var idx = property.indexOf(name)
	if (idx === -1) { //if property not set
		if (animation) {
			property.push(name)
			duration.push(animation.duration + 'ms')
			timing.push(animation.easing)
			delay.push(animation.delay + 'ms')
		}
	} else { //property already set, adjust the params
		if (animation && animation.active()) {
			duration[idx] = animation.duration + 'ms'
			timing[idx] = animation.easing
			delay[idx] = animation.delay + 'ms'
		} else {
			property.splice(idx, 1)
			duration.splice(idx, 1)
			timing.splice(idx, 1)
			delay.splice(idx, 1)
		}
	}

	transitions[transition.property] = property
	transitions[transition.duration] = duration
	transitions[transition.timing] = timing
	transitions[transition.delay] = delay

	//FIXME: orsay animation is not working without this shit =(
	if (component._context.system.os === 'orsay' || component._context.system.os === 'netcast') {
		transitions["transition-property"] = property
		transitions["transition-duration"] = duration
		transitions["transition-delay"] = delay
		transitions["transition-timing-function"] = timing
	}
	component.style(transitions)
	return true
}

var cssMappings = {
	width: 'width', height: 'height',
	x: 'left', y: 'top', viewX: 'left', viewY: 'top',
	opacity: 'opacity',
	border: 'border',
	radius: 'border-radius',
	rotate: 'transform',
	boxshadow: 'box-shadow',
	transform: 'transform',
	visible: 'visibility', visibleInView: 'visibility',
	background: 'background',
	color: 'color',
	backgroundImage: 'background-image',
	font: 'font'
}

///@private tries to set animation on name using css transitions, returns true on success
exports.setAnimation = function (component, name, animation) {
	if (!exports.capabilities.csstransitions || $manifest$cssDisableTransitions || (animation && !animation.cssTransition))
		return false

	var css = cssMappings[name]
	return css !== undefined? setTransition(component, css, animation): false
}

exports.requestAnimationFrame = Modernizr.prefixed('requestAnimationFrame', window)	|| function(callback) { return setTimeout(callback, 0) }
exports.cancelAnimationFrame = Modernizr.prefixed('cancelAnimationFrame', window)	|| function(id) { return clearTimeout(id) }

exports.enterFullscreenMode = function(el) { return Modernizr.prefixed('requestFullscreen', el.dom)() }
exports.exitFullscreenMode = function() { return window.Modernizr.prefixed('exitFullscreen', document)() }
exports.inFullscreenMode = function () { return !!window.Modernizr.prefixed('fullscreenElement', document) }

exports.ajax = function(ui, request) {
	var url = request.url
	var error = request.error,
		headers = request.headers,
		done = request.done,
		settings = request.settings

	var xhr = new XMLHttpRequest()

	if (error)
		xhr.addEventListener('error', error)

	if (done)
		xhr.addEventListener('load', done)

	xhr.open(request.method || 'GET', url);

	for (var i in settings)
		xhr[i] = settings[i]

	for (var i in headers)
		xhr.setRequestHeader(i, headers[i])

	if (request.data)
		xhr.send(request.data)
	else
		xhr.send()
}

exports.fingerprint = function(ctx, fingerprint) {
	var html = exports
	try {
		var fcanvas = html.createElement(ctx, 'canvas')
		var w = 2000, h = 32
		fcanvas.dom.width = w
		fcanvas.dom.height = h
		var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ /0123456789 abcdefghijklmnopqrstuvwxyz £©µÀÆÖÞßéöÿ –—‘“”„†•…‰™œŠŸž€ ΑΒΓΔΩαβγδω АБВГДабвгд ∀∂∈ℝ∧∪≡∞ ↑↗↨↻⇣ ┐┼╔╘░►☺♀ ﬁ�⑀₂ἠḂӥẄɐː⍎אԱა"
		var fctx = fcanvas.dom.getContext('2d')
		fctx.textBaseline = "top";
		fctx.font = "20px 'Arial'";
		fctx.textBaseline = "alphabetic";
		fctx.fillStyle = "#fedcba";
		fctx.fillRect(0, 0, w, h);
		fctx.fillStyle = "#12345678";
		fctx.fillText(txt, 1.5, 23.5, w);
		fctx.font = "19.5px 'Arial'";
		fctx.fillStyle = "#789abcde";
		fctx.fillText(txt, 1, 22, w);
		fingerprint.update(fcanvas.dom.toDataURL())
	} catch(ex) {
		log('canvas test failed: ' + ex)
	}
	try { fingerprint.update(window.navigator.userAgent) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.plugins) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.mimeTypes) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.language) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.platform) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.product) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.productSub) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.vendorSub) } catch (ex) { log(ex) }
	try { fingerprint.update(window.navigator.hardwareConcurrency) } catch (ex) { log(ex) }

	try { fingerprint.update(window.screen.availWidth) } catch (ex) { log(ex) }
	try { fingerprint.update(window.screen.availHeight) } catch (ex) { log(ex) }
	try { fingerprint.update(window.screen.colorDepth) } catch (ex) { log(ex) }
}

return exports;
} )()
_globals.html5.cache = (function() {/** @const */
var exports = {};
//=====[import html5.cache]=====================

var getTime = function() { return Math.floor(new Date().getTime() / 1000) }

var Entry = function() {
	this.created = getTime()
	this.waiters = []
	this.invoker = null
}

Entry.prototype.expired = function(ttl) {
	return getTime() - this.created >= ttl
}

Entry.prototype.set = function(result) {
	this.created = getTime()
	var invoker = this.invoker = _globals.core.safeCall(null, [result], function(ex) { log("cache entry callback failed: ", ex, ex.stack) })
	while(this.waiters.length) {
		var waiters = this.waiters
		this.waiters = []
		waiters.forEach(invoker)
	}
	this.waiters = null
}

Entry.prototype.wait = function(callback) {
	if (this.invoker !== null)
		this.invoker(callback)
	else
		this.waiters.push(callback)
}

var Cache = function(create, ttl) {
	if (!create)
		throw new Error("create callback is required")
	this._create = create
	this._ttl = ttl || 3600
	this._cache = {}
	setInterval(this.cleanup.bind(this), this._ttl / 2 * 1000)
}

Cache.prototype.get = function(key, callback) {
	var entry = this._cache[key]
	if (entry === undefined || entry.expired(this._ttl)) {
		this._cache[key] = entry = new Entry()
		this._create(key, function(result) {
			entry.set(result)
		})
	}
	entry.wait(callback)
}

Cache.prototype.cleanup = function() {
	for(var k in this._cache) {
		var entry = this._cache[k]
		if (entry.expired(this._ttl)) {
			delete this._cache[k]
		}
	}
}

exports.Cache = Cache

return exports;
} )()
_globals.html5.location = (function() {/** @const */
var exports = {};
//=====[import html5.location]=====================

var Location = function(ui) {
	this._ui = ui
	var location = window.location
	this.updateActualValues()
	var self = this
	var context = ui._context
	context.window.on("hashchange", function() { self._ui.hash = location.hash }.bind(this))
	context.window.on("popstate", function() { self.updateActualValues() }.bind(this))
}

Location.prototype.updateActualValues = function() {
	var ui = this._ui
	var windowContext = ui._context.window.dom
	ui.hash = windowContext.location.hash
	ui.href = windowContext.location.href
	ui.port = windowContext.location.port
	ui.host = windowContext.location.host
	ui.origin = windowContext.location.origin
	ui.hostname = windowContext.location.hostname
	ui.pathname = windowContext.location.pathname
	ui.protocol = windowContext.location.protocol
	ui.search = windowContext.location.search
	ui.state = windowContext.history.state
}

Location.prototype.changeHref = function(href) {
	this._ui._context.window.dom.location.href = href
	this.updateActualValues()
}

Location.prototype.pushState = function(state, title, url) {
	var ui = this._ui
	var windowContext = ui._context.window.dom
	if (windowContext.location.hostname) {
		windowContext.history.pushState(state, title, url)
		this.updateActualValues()
	} else {
		ui._context.document.title = title
		this._ui.state = state
	}
}

exports.createLocation = function(ui) {
	return new Location(ui)
}

exports.Location = Location

return exports;
} )()
_globals.video.html5.backend = (function() {/** @const */
var exports = {};
//=====[import video.html5.backend]=====================

var Player = function(ui) {
	var player = ui._context.createElement('video')
	player.dom.preload = "metadata"

	this.element = player
	this.ui = ui
	this.setEventListeners()

	ui.element.remove()
	ui.element = player
	ui.parent.element.append(ui.element)

	this._xhr = new XMLHttpRequest()
	this._xhr.addEventListener('load', this.parseManifest.bind(this))
}

Player.prototype.setEventListeners = function() {
	var player = this.element
	var dom = player.dom
	var ui = this.ui
	player.on('play', function() { ui.waiting = false; ui.paused = dom.paused }.bind(ui))
	player.on('pause', function() { ui.paused = dom.paused }.bind(ui))
	player.on('ended', function() { ui.finished() }.bind(ui))
	player.on('seeked', function() { log("seeked"); ui.seeking = false; ui.waiting = false }.bind(ui))
	player.on('canplay', function() { log("canplay", dom.readyState); ui.ready = dom.readyState }.bind(ui))
	player.on('seeking', function() { log("seeking"); ui.seeking = true; ui.waiting = true }.bind(ui))
	player.on('waiting', function() { log("waiting"); ui.waiting = true }.bind(ui))
	player.on('stalled', function() { log("Was stalled", dom.networkState); ui.stalled = true }.bind(ui))
	player.on('emptied', function() { log("Was emptied", dom.networkState); }.bind(ui))
	player.on('volumechange', function() { ui.muted = dom.muted }.bind(ui))
	player.on('canplaythrough', function() { log("ready to play"); ui.paused = dom.paused }.bind(ui))

	player.on('error', function() {
		log("Player error occurred", dom.error, "src", ui.source)

		if (!dom.error || !ui.source)
			return

		ui.error(dom.error)

		log("player.error", dom.error)
		switch (dom.error.code) {
		case 1:
			log("MEDIA_ERR_ABORTED error occurred")
			break;
		case 2:
			log("MEDIA_ERR_NETWORK error occurred")
			break;
		case 3:
			log("MEDIA_ERR_DECODE error occurred")
			break;
		case 4:
			log("MEDIA_ERR_SRC_NOT_SUPPORTED error occurred")
			break;
		default:
			log("UNDEFINED error occurred")
			break;
		}
	}.bind(ui))

	player.on('timeupdate', function() {
		ui.waiting = false
		ui.stalled = false
		if (!ui.seeking)
			ui.progress = dom.currentTime
	}.bind(ui))

	player.on('durationchange', function() {
		var d = dom.duration
		log("Duration", d)
		ui.duration = isFinite(d) ? d : 0
	}.bind(ui))

	player.on('progress', function() {
		var last = dom.buffered.length - 1
		ui.waiting = false
		if (last >= 0)
			ui.buffered = dom.buffered.end(last) - dom.buffered.start(last)
	}.bind(ui))

	this.setOption("autoplay", ui.autoPlay)
}

Player.prototype.parseManifest = function(data) {
	var lines = data.target.responseText.split('\n');
	var url = this.ui.source
	var path = url.substring(0, url.lastIndexOf('/') + 1)
	var idx = 0
	this._videoTracks = [ { "name": "auto", "url": this.ui.source, "id": idx } ]
	this._totalTracks = {}
	this._audioTracksInfo = []
	for (var i = 0; i < lines.length - 1; ++i) {
		var line = lines[i]
		var nextLine = lines[i + 1]
		if (line.indexOf('#EXT-X-STREAM-INF') == 0) {
			var attributes = line.split(',');
			var track = {
				url: nextLine.indexOf("http") === 0 ? nextLine : (path + nextLine)
			}
			for (var j = 0; j < attributes.length; ++j) {
				var param = attributes[j].split('=');
				if (param.length > 1) {
					switch (param[0].trim().toLowerCase()) {
						case "bandwidth":
							track.bandwidth = param[1].trim()
							break
						case "audio":
							track.audio = param[1].trim().replace(/"/g, "")
							break
						case "resolution":
							var size = param[1].split("x")
							track.width = size[0]
							track.height = size[1]
							break
					}
				}
			}
			var key = track.width + "x" + track.height
			if (!this._totalTracks[key]) {
				this._totalTracks[key] = []
			}
			this._totalTracks[key].push(track)
		} else if (line.indexOf('#EXT-X-MEDIA:TYPE=AUDIO') == 0) {
			var attributes = line.split(',');
			var audioTrack = {}
			for (var j = 0; j < attributes.length; ++j) {
				var param = attributes[j].split('=');
				if (param.length > 1) {
					switch (param[0].trim().toLowerCase()) {
						case "group-id":
							audioTrack.id = param[1].trim().replace(/"/g, "")
							break
						case "name":
							audioTrack.label = param[1].trim().replace(/"/g, "")
							break
						case "language":
							audioTrack.language = param[1].trim().replace(/"/g, "")
							break
						case "uri":
							audioTrack.url = param[1].trim()
							break
					}
				}
			}
			this._audioTracksInfo.push(audioTrack)
		}
	}

	for (var i in this._totalTracks) {
		var tmpTrack = this._totalTracks[i][0]
		tmpTrack.id = ++idx
		this._videoTracks.push(tmpTrack)
	}
}

Player.prototype.getFileExtension = function(filePath) {
	if (!filePath)
		return ""
	var urlLower = filePath.toLowerCase()
	var querryIndex = filePath.indexOf("?")
	if (querryIndex >= 0)
		urlLower = urlLower.substring(0, querryIndex)
	var extIndex = urlLower.lastIndexOf(".")
	return urlLower.substring(extIndex, urlLower.length)
}

Player.prototype.setSource = function(url) {
	this.ui.ready = false
	this._extension = this.getFileExtension(url)
	if (url && this._xhr && (this._extension === ".m3u8" || this._extension === ".m3u")) {
		this._xhr.open('GET', url);
		this._xhr.send()
	}

	var source = url
	if (this.ui.startPosition)
		source += "#t=" + this.ui.startPosition
	this.element.dom.src = source
}

Player.prototype.play = function() {
	this.element.dom.play()
}

Player.prototype.pause = function() {
	this.element.dom.pause()
}

Player.prototype.stop = function() {
	//where is no 'stop' method in html5 video player just pause instead
	this.pause()
}

Player.prototype.seek = function(delta) {
	this.element.dom.currentTime += delta
}

Player.prototype.seekTo = function(tp) {
	this.element.dom.currentTime = tp
}

Player.prototype.setVolume = function(volume) {
	this.element.dom.volume = volume
}

Player.prototype.setMute = function(muted) {
	this.element.dom.muted = muted
}

Player.prototype.setLoop = function(loop) {
	this.element.dom.loop = loop
}

Player.prototype.setOption = function(name, value) {
	if (name === "autoplay") {
		if (value)
			this.element.dom.setAttribute("autoplay", "")
		else
			this.element.dom.removeAttribute("autoplay");
	} else {
		this.element.dom.setAttribute(name, value)
	}
}

Player.prototype.setRect = function(l, t, r, b) {
	//not needed in this port
}

Player.prototype.setVisibility = function(visible) {
	log('VISIBILITY LOGIC MISSING HERE, visible:', visible)
}

Player.prototype.setupDrm = function(type, options, callback, error) {
	log('Not implemented')
}

Player.prototype.getAudioTracks = function() {
	log('Not implemented')
	return []
}

Player.prototype.getVideoTracks = function() {
	return this._videoTracks || []
}

Player.prototype.getAudioTracks = function() {
	var audioTracks = this.element.dom.audioTracks
	var result = []
	for (var i = 0; i < audioTracks.length; ++i) {
		var track = audioTracks[i]
		var info = this._audioTracksInfo[i]
		result.push({
			"id": i,
			"name": track.label ? track.label : info.name,
			"language": track.language ? track.language : info.language
		})
	}
	log("getAudioTracks", result)
	return result
}

Player.prototype.setAudioTrack = function(trackId) {
	var audioTracks = this.element.dom.audioTracks
	if (trackId < 0 || trackId >= audioTracks.length) {
		log("Where is no track", trackId)
		return
	}
	log("Set audio track", audioTracks[trackId])

	var result = []
	for (var i = 0; i < audioTracks.length; ++i)
		audioTracks[i].enabled = i === trackId
}

Player.prototype.setVideoTrack = function(trackId) {
	if (!this._videoTracks || this._videoTracks.length <= 0) {
		log("There is no available video track", this._videoTracks)
		return
	}
	if (trackId < 0 || trackId >= this._videoTracks.length) {
		log("Track with id", trackId, "not found")
		return
	}
	this.ui.waiting = true
	var progress = this.ui.progress
	log("Set video", this._videoTracks[trackId])
	this.element.dom.src = this._videoTracks[trackId].url
	this.seekTo(progress)
}

Player.prototype.setVideoTrack = function(trackId) {
	if (!this._videoTracks || this._videoTracks.length <= 0) {
		log("There is no available video track", this._videoTracks)
		return
	}
	if (trackId < 0 || trackId >= this._videoTracks.length) {
		log("Track with id", trackId, "not found")
		return
	}
	this.ui.waiting = true
	var progress = this.ui.progress
	log("Set video", this._videoTracks[trackId])
	this.element.dom.src = this._videoTracks[trackId].url
	this.seekTo(progress)
}

Player.prototype.setBackgroundColor = function(color) {
	var Color = _globals.core.Color
	this.element.dom.style.backgroundColor = new Color(color).rgba()
}


exports.createPlayer = function(ui) {
	return new Player(ui)
}

exports.probeUrl = function(url) {
	return 50
}

exports.Player = Player

return exports;
} )()
_globals.web.device = (function() {/** @const */
var exports = {};
//=====[import web.device]=====================

var Device = function(ui) {
	var context = ui._context
	if ($manifest$system$fingerprint) {
		var fingerprint = new $html5.fingerprint.fingerprint.Fingerprint()
		context.backend.fingerprint(context, fingerprint)
		ui.deviceId = fingerprint.finalize()
		log("deviceId", ui.deviceId)
	} else {
		var deviceString = context.system.os + "_" + context.system.browser
		deviceString = deviceString.replace(/\s/g, '')
		ui.deviceId = deviceString + "_" + Math.random().toString(36).substr(2, 9)
	}
}

exports.createDevice = function(ui) {
	return new Device(ui)
}

exports.Device = Device

return exports;
} )()
_globals.controls.pure.format = (function() {/** @const */
var exports = {};
//=====[import controls.pure.format]=====================

exports.currency = function(v, n, x) {
	var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
	return v.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}

exports.format = function() {
	var args = [].slice.call(arguments);
	var initial = args.shift();

	function replacer (text, replacement) {
		return text.replace('%s', replacement);
	}
	return args.reduce(replacer, initial);
}
return exports;
} )()


return exports;
} )();
	var l10n = {}

	var context = qml._context = new qml.core.Context(null, false, {id: 'qml-context-app', l10n: l10n, nativeContext: null})
	context.init()
	context.start(new qml.src.UiApp(context))
	context.run()
