ListView {
	spacing: 5;
	delegate: Rectangle {
		width: 200;
		height: 100;
		border.width: 1;
		border.color: "black";

		Text {
			anchors.top: parent.top;
			anchors.right: parent.right;
			anchors.margins: 5;
			text: model.contactId;
		}

		Text {
			width: parent.width - 20;
			anchors.centerIn: parent;
			wrapMode: Text.WordWrap;
			text: model.text;
		}
	}
	model: ProxyModel {
		target: ProxyMessages{ }

		onCompleted: {
			this.setCompare(function(a, b) {
				return a.unixTime == b.unixTime ? 0 : (a.unixTime < b.unixTime ? 1 : -1)
			})

			this.setFilter(function(item) { return item.contactId == 1 })
		}
	}
}
