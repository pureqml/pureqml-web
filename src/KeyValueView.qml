ListView {
	property int shift: 150;
	height: contentHeight;
	anchors.left: parent.left;
	anchors.right: parent.right;
	spacing: 5s;
	delegate: Item {
		property bool wide: context.width > 500;
		width: parent.width;
		height: wide ? Math.max(valueText.height, keyText.height) : (valueText.height + keyText.height + 20);

		Text {
			id: keyText;
			anchors.left: parent.left;
			font.weight: 300;
			font.pixelSize: 20;
			color: colorTheme.primaryColor;
			text: model.key;
		}

		Text {
			id: valueText;
			wrapMode: Text.WordWrap;
			width: 100% - (parent.wide ? parent.parent.shift : 20);
			x: parent.wide ? parent.parent.shift : 10;
			y: parent.wide ? 0 : keyText.height + 10;
			font.weight: 100;
			font.pixelSize: 20;
			text: model.value;
		}
	}
}
