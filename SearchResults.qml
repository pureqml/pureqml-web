Rectangle {
	signal clear;
	width: 100%;
	height: searchView.height > 200 ? 200 : searchView.height;
	color: "white";
	effects.shadow.y: 2;
	effects.shadow.blur: 2;
	effects.shadow.color: "#0004";
	effects.shadow.spread: 1;
	property bool active;
	visible: active && (searchView.count > 0);

	OverflowMixin {	value: parent.recursiveVisible ? OverflowMixin.ScrollY : OverflowMixin.Hidden; }

	ListView {
		id: searchView;
		height: contentHeight;
		width: 100% - 24;
		x: 12;
		model: ListModel { }
		delegate: WebLink {
			width: parent.width;
			height: 30;
			href: model.path;

			Text {
				x: 10; y: 5;
				color: parent.hover ? colorTheme.darkerPrimaryColor : "#616161";
				font.underline: parent.hover;
				text: model.text;
				font.pixelSize: 18;
				font.weight: 300;
			}

			onClicked(e): {
				e.preventDefault();
				var a = this.href.split("/");
				var state = {}
				if (a[0])
					state.page = a[0]
				if (a[1])
					state.section = a[1]
				if (a[2])
					state.element = a[2]

				this._context.location.pushState(state, this.href, this.href)
				this.parent.parent.clear()
			}
		}
	}

	fill(data): {
		searchView.model.clear()
		if (data)
			searchView.model.append(data)
	}
}
