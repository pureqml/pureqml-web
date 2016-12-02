ListView {
	property int shift: 400;
	property bool wide: context.width > 800;
	height: contentHeight;
	anchors.left: parent.left;
	anchors.right: parent.right;
	anchors.leftMargin: wide ? 20 : 0;
	spacing: 30;
	model: ListModel { } 
	delegate: Item {
		property bool wide: parent.wide;
		width: parent.width;
		height: wide ? Math.max(valueText.height, keyText.height) : (valueText.height + keyText.height + 20);

		Text {
			id: keyText;
			anchors.left: parent.left;
			font.pixelSize: 21;
			font.weight: 400;
			color: colorTheme.primaryColor;
			text: model.type ? model.key + ":" : model.key;
		}

		Text {
			id: typeText;
			anchors.left: keyText.right;
			anchors.leftMargin: 10;
			font.pixelSize: 21;
			font.weight: 300;
			color: colorTheme.primaryColor;
			text: model.type;
			visible: text;
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

	fill(data): {
		this.model.clear()
		for (var i in data) {
			var row = data[i]
			if (!row.internal)
				this.model.append({"key": i, "value": row.text, "type": row.type})
		}
	}
}
