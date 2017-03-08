Rectangle {
	id: leftMenuProto;
	property bool hidable: context.width < 860;
	property bool open;
	width: 256;
	height: context.height - y;
	color: "#FAFAFA";
	z: 1;
	y: parent.parent.y;
	x: hidable ? -width + 20 : 0;

	onHidableChanged: {
		log("onHidableChanged", value)
	}

	PositionMixin { value: PositionMixin.Fixed; }
	OverflowMixin {	value: parent.recursiveVisible ? OverflowMixin.ScrollY : OverflowMixin.Hidden; }

	Behavior on height { Animation { duration: 300; } }

	ListModel { id: menuModel; }

	ListView {
		y: parent.hidable ? 40 : 10;
		height: contentHeight;
		width: 100%;
		spacing: 5;
		model: menuModel; 
		delegate: WebLink {
			width: 100%;
			height: 30;
			color: hover ? "#AED581" : "transparent";
			property bool hash: model.hash;
			property string path: model.path;
			href: hash ? model.hash : model.path;

			Behavior on background { Animation { duration: 300;}}

			Text {
				y: 5;
				x: 20 + (model.depth ? model.depth * 12 : 0);
				font.weight: 300;
				font.pixelSize: 18;
				color: colorTheme.textColor;
				text: model.text;
			}

			onClicked(e): {
				if (this.hash) {
					// this._context.location.pushState(state, this.hash, this.href) 
					return
				}
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
			} 
		}
	}

	fillModel(data): {
		menuModel.clear()
		menuModel.append(data)
	}
}
