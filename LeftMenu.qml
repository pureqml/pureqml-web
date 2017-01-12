Rectangle {
	id: leftMenuProto;
	property bool collapsed;
	width: parent.width < 840 ? parent.width : 200;
	height: menuContent.height + 20;
	color: "#FDD";// colorTheme.panelColor;
	clip: true;

	ListModel { id: menuModel; }

	Column {
		id: menuContent;
		width: parent.width - 20;
		x: 10; y: 10;
		spacing: 10;

		Item {
			height: contentsLabel.height;
			width: parent.width;

			Text {
				id: contentsLabel;
				text: "Contents";
				font.pixelSize: 24;
				font.weight: 300;
				color: colorTheme.primaryColor;
			}

			WebItem {
				id: moreButton;
				width: height;
				anchors.top: parent.top;
				anchors.right: parent.right;
				anchors.bottom: parent.bottom;

				Image {
					id: moreIcon;
					transform.rotate: leftMenuProto.collapsed ? 0 : 180;
					anchors.centerIn: parent;
					source: "res/up.png";

					Behavior on transform { Animation { duration: 300; } }
				}

				onClicked: { leftMenuProto.collapsed = !leftMenuProto.collapsed }
			}
		}

		ListView {
			height: contentHeight;
			width: parent.width - 20;
			x: 10;
			visible: !leftMenuProto.collapsed;
			spacing: 10;
			model: menuModel; 
			delegate: WebLink {
				width: parent.width;
				height: menuDelegateText.height;
				href: model.hash ? "#" + model.hash : model.link;

				Text {
					id: menuDelegateText;
					anchors.left: parent.left;
					anchors.leftMargin: model.depth * 20;
					font.weight: 300;
					font.pixelSize: 18;
					color: parent.hover ? colorTheme.lighterPrimaryColor : colorTheme.textColor;
					text: model.text;
				}
			}
		}
	}

	fillModel(data): {
		menuModel.clear()
		menuModel.append(data)
	}

	Behavior on height { Animation { duration: 300; } }
}
