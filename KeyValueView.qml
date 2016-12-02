ListView {
	property int shift: 150;
	height: contentHeight;
	anchors.left: parent.left;
	anchors.right: parent.right;
	spacing: 5;
	delegate: Item {
		property bool wide: context.width > 500;
		width: parent.width;
		height: wide ? Math.max(valueText.height, keyText.height) : (valueText.height + keyText.height + 20);

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
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.topMargin: parent.wide ? 0 : (keyText.height + 10);
			anchors.leftMargin: parent.wide ? parent.parent.shift : 10;
			anchors.rightMargin: 10;
			font.pixelSize: 21;
			text: model.value;
		}
	}
}
