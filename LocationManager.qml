Object {
	signal pathUpdated;
	property string href: context.location.href;

	constructor: {
		var self = this
		this._path = []
		window.onhashchange = function() { self.update() }
		window.onpopstate = function() { self.update() }
	}

	update: {
		var loc = this._context.location
		this._path = []
		
		var chunks = loc.href.split("/")
		if (chunks.length > 3) {
			var len = chunks.length - 3
			chunks = chunks.splice(chunks.length - len, chunks.length)
		}
		this._path = chunks
		this.pathUpdated()
	}

	getPath: { return this._path }

	onHrefChanged: { this.update() }

	onCompleted: { this.update() }
}
