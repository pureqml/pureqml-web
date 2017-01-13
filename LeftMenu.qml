Rectangle {
	id: leftMenuProto;
	property bool collapsed;
	width: parent.width < 840 ? 100% : 200;
	height: collapsed ? 40 : menuContent.height + 50;
	color: "#FDD";// colorTheme.panelColor;
	clip: true;

	Behavior on height { Animation { duration: 300; } }

	ListModel { id: menuModel; }

	WebItem {
		width: 100%;
		height: 40;
		color: hover ? "#DFF" : "#DDF";
		Behavior on background { Animation {}}

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

	Column {
		id: menuContent;
		width: 100%;
		y: 40;

		ListView {
			anchors.topMargin: 10;
			height: contentHeight;
			width: parent.width - 20;
			x: 10;
			spacing: 10;
			model: menuModel; 
			delegate: WebLink {
				width: parent.width;
				height: menuDelegateText.height;
				property bool hash: model.hash;
				href: hash ? "#" + model.hash : model.text;

				Text {
					id: menuDelegateText;
					anchors.left: parent.left;
					anchors.leftMargin: model.depth * 20;
					font.weight: 300;
					font.pixelSize: 18;
					color: parent.hover ? colorTheme.lighterPrimaryColor : colorTheme.textColor;
					font.underline: parent.hover;
					text: model.text;
				}

				onClicked(e): {
					if (this.hash)
						return
					e.preventDefault();
					this._context.location.pushState({ section: this.href }, this.href, this.href) 
				} 
			}
		}
	}

	fillModel(data): {
		menuModel.clear()
		menuModel.append(data)
	}
}
