Rectangle {
	id: leftMenuProto;
	property bool hidable: context.width < 860;
	property bool open;
	width: 256;
	height: context.height - y;
	color: "#FAFAFA";
	z: 1;
	y: parent.parent.y;
	x: hidable && !open ? -width : 0;
	transform.translateZ: 1;

	onCompleted: { 
		this.style('position', 'fixed')
		this.style('will-change', 'transform')
	}

	PositionMixin { value: PositionMixin.Fixed; }

	Behavior on x { Animation { duration: 300; } }

	ListModel { id: menuModel; }

	Item {
		width: 100%; height: 100%;
		OverflowMixin {	value: parent.recursiveVisible ? OverflowMixin.ScrollY : OverflowMixin.Hidden; }

		ListView {
			y: leftMenuProto.hidable ? 40 : 10;
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
					leftMenuProto.open = false;
					if (this.hash) {
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
	}

	WebItem {
		width: 24;
		height: 100%;
		visible: parent.hidable;
		color: "white";
		x: 100%;
		onClicked: { this.parent.open = !this.parent.open; }
		border.width: 1;
		border.color: "#EEE";
		MaterialIcon {
			anchors.centerIn: parent;
			icon: leftMenuProto.open ? "keyboard_arrow_left" : "keyboard_arrow_right";
			size: 24;
			color: "#828282";
		}
	}

	fillModel(data): {
		menuModel.clear()
		menuModel.append(data)
	}
}
