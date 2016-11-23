Rectangle {
	id: leftMenuProto;
	signal indexChoosed;
	width: 200;
	height: menuContent.height + 20;
	anchors.top: parent.top;
	anchors.rightMargin: 10;
	color: colorTheme.panelColor;

	ListModel { id: menuModel; }

	Column {
		id: menuContent;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		anchors.margins: 10;
		anchors.topMargin: 10;
		spacing: 10;

		Text {
			text: "Contents";
			font.pixelSize: 24;
			color: colorTheme.primaryColor;
		}

		ListView {
			height: contentHeight;
			anchors.left: parent.left;
			anchors.right: parent.right;
			spacing: 10;
			model: menuModel; 
			delegate: WebItem {
				width: parent.width;
				height: menuDelegateText.height;

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
}
