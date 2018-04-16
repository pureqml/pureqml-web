Rectangle {
	id: leftMenuProto;
	signal optionChoosed;
	property bool hidable: context.width < 860;
	property bool open;
	width: 256;
	height: context.height - y;
	color: colorTheme.leftMenuColor;
	z: 1;
	y: parent.parent.y;
	x: hidable && !open ? -width : 0;
	transform.translateZ: 1;

	onCompleted: {
		this.style('position', 'fixed')
		this.style('will-change', 'transform')
	}

	PositionMixin { value: PositionMixin.Fixed; }

	ListModel { id: menuModel; }

	Item {
		width: 100%;
		height: 100%;

		ListView {
			y: leftMenuProto.hidable ? 40 : 10;
			width: 100%;
			height: 100%;
			spacing: 5;
			model: menuModel;
			delegate: WebLink {
				property bool hash: model.hash;
				property string path: model.path;
				property string text: model.text;
				width: 100%;
				height: 30;
				color: hover ? "#AED581" : "transparent";
				href: hash ? model.hash : "http://pureqml.com/" + model.path;

				Behavior on background { Animation { duration: 300;}}

				Text {
					y: 5;
					x: 20 + (model.depth ? model.depth * 12 : 0);
					font.weight: 300;
					font.pixelSize: 18;
					color: colorTheme.textColor;
					text: parent.text;
				}

				onClicked(e): {
					leftMenuProto.optionChoosed(this.parent.model.get(this._local.model.index))
					leftMenuProto.open = false;
					if (this.hash) {
						return
					}
					e.preventDefault();
					var a = this.path.split("/");
					var state = {}
					if (a[0])
						state.page = a[0]
					if (a[1])
						state.section = a[1]
					if (a[2])
						state.element = a[2]

					this._context.location.pushState(state, this.text, this.href)
				}
			}

			OverflowMixin { value: leftMenuProto.recursiveVisible ? OverflowMixin.ScrollY : OverflowMixin.Hidden; }
		}
	}

	WebItem {
		x: 100%;
		width: 24;
		height: 100%;
		visible: parent.hidable;
		color: colorTheme.hTextColor;
		onClicked: { this.parent.open = !this.parent.open; }
		border.width: 1;
		border.color: "#EEE";

		MaterialIcon {
			anchors.centerIn: parent;
			icon: leftMenuProto.open ? "keyboard_arrow_left" : "keyboard_arrow_right";
			size: 24;
			color: colorTheme.iconColor;
		}
	}

	WebItem {
		x: 100% + 24;
		width: context.width - x;
		height: 100%;
		color: "#000000";
		opacity: visible ? 0.4 : 0;
		visible: parent.hidable && parent.open;

		onClicked: { this.parent.open = false; }

		Behavior on opacity { Animation { duration: parent.parent.visible ? 400 : 0; delay: parent.parent.visible ? 500 : 0; }}
	}

	fillModel(data): {
		menuModel.clear()
		menuModel.append(data)
	}

	Behavior on x { Animation { duration: 300; } }
}
