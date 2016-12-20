Rectangle {
	id: leftMenuProto;
	signal indexChoosed;
	property int minWidth: 200;
	property bool wide;
	width: wide ? parent.width : minWidth;
	height: moreButton.show ? menuContent.height + 20 : 50;
	anchors.top: parent.top;
	anchors.left: parent.left;
	color: colorTheme.panelColor;
	clip: true;

	ListModel { id: menuModel; }

	Column {
		id: menuContent;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		anchors.margins: 10;
		anchors.topMargin: 10;
		spacing: 10;

		Item {
			height: contentsLabel.height;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.leftMargin: 10;

			Text {
				id: contentsLabel;
				text: "Contents";
				font.pixelSize: 24;
				font.weight: 300;
				color: colorTheme.primaryColor;
			}

			WebItem {
				id: moreButton;
				property bool show: !leftMenuProto.wide;
				width: height;
				anchors.top: parent.top;
				anchors.right: parent.right;
				anchors.bottom: parent.bottom;
				visible: leftMenuProto.wide;

				Image {
					id: moreIcon;
					transform.rotate: parent.show ? 180 : 0;
					anchors.centerIn: parent;
					source: "res/up.png";

					Behavior on transform { Animation { duration: 300; } }
				}

				onClicked: { this.show = !this.show }
			}
		}

		ListView {
			height: contentHeight;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.leftMargin: 10;
			spacing: 10;
			model: menuModel; 
			delegate: WebLink {
				width: parent.width;
				height: menuDelegateText.height;
				href: "#" + model.hash;

				Text {
					id: menuDelegateText;
					anchors.left: parent.left;
					anchors.leftMargin: model.depth * 20;
					font.weight: 300;
					font.pixelSize: 18;
					color: parent.hover ? colorTheme.lighterPrimaryColor : colorTheme.textColor;
					text: model.text;
				}
				onClicked: { leftMenuProto.indexChoosed(this._local.model.index) }
			}
		}
	}

	getRow(idx): {
		if (idx < 0 || idx >= menuModel.count) {
			log("Bad index", idx)
			return
		}
		return menuModel.get(idx)
	}

	fillModel(data): {
		menuModel.clear()
		menuModel.append(data)
	}

	Behavior on height { Animation { duration: 300; } }
}
