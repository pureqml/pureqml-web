Rectangle {
	id: leftMenuProto;
	property bool hidable: parent.width < 860;
	property bool collapsed;
	width: 256;
	height: context.height - 100;
	color: "#FAFAFA";//colorTheme.panelColor;
	z: 1;
	y: 70;

	PositionMixin { value: PositionMixin.Fixed; }
	OverflowMixin {	value: parent.recursiveVisible ? OverflowMixin.ScrollY : OverflowMixin.Hidden; }

	Behavior on height { Animation { duration: 300; } }

	ListModel { id: menuModel; }

	WebItem {
		width: 100%;
		height: 40;
		visible: parent.hidable;
		color: hover ? "#90A4AE" : "#ECEFF1";
		Behavior on background { Animation { duration: 400; }}

		onClicked: { leftMenuProto.collapsed = !leftMenuProto.collapsed; }

		MaterialIcon {
			width: 100%; height: 100%;
			verticalAlignment: Text.AlignVCenter;
			horizontalAlignment: Text.AlignHCenter;
			icon: "keyboard_arrow_down";
			size: 32;
			transform.rotateX: leftMenuProto.collapsed ? 0 : 180;
			Behavior on transform { Animation { duration: 300; } }
		}
	}

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
			href: hash ? model.hash : path;
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
				if (this.hash)
					return
				e.preventDefault();
				var a = this.path.split("/");
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
