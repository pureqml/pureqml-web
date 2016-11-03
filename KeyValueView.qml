ListView {
	property int shift: 150;
	height: contentHeight;
	anchors.left: parent.left;
	anchors.right: parent.right;
	spacing: 5;
	delegate: Item {
		width: parent.width;
		height: Math.max(valueText.height, keyText.height);

		Text {
			id: keyText;
			anchors.left: parent.left;
			font.pixelSize: 21;
			font.weight: 300;
			color: colorTheme.primaryColor;
			text: model.key;
		}

		DescriptionText {
			id: valueText;
			anchors.bottom: parent.bottom;
			anchors.leftMargin: parent.parent.shift;
			anchors.rightMargin: 10;
			font.pixelSize: 21;
			text: model.value;
		}
	}
}
