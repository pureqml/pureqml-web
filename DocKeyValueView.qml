ListView {
	property int shift: 400;
	height: contentHeight;
	anchors.left: parent.left;
	anchors.right: parent.right;
	anchors.leftMargin: 20;
	spacing: 30;
	model: ListModel { } 
	delegate: Item {
		width: parent.width;
		height: Math.max(valueText.height, keyText.height);

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
			anchors.right: parent.right;
			anchors.bottom: parent.bottom;
			anchors.leftMargin: parent.parent.shift;
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
