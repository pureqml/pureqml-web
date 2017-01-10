Object {
	signal pathUpdated;
	property string href: context.location.href;
	property Array path;

	constructor: {
		var self = this
		window.onhashchange = function() { self.update() }
		window.onpopstate = function() { self.update() }
	}

	update: {
		var loc = this._context.location
		this.path = loc.pathname.split("/")
		this.pathUpdated()
	}

	onHrefChanged: { this.update() }
	onCompleted: { this.update() }
}
