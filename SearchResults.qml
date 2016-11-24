ContentColumn {
	id: searchResultsProto;
	signal choosed;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	anchors.margins: 10;
	spacing: 30;

	ListView {
		id: searchView;
		height: contentHeight;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		model: ListModel { }
		delegate: WebItem {
			width: parent.width;
			height: 70;

			Text {
				anchors.left: parent.left;
				anchors.verticalCenter: parent.verticalCenter;
				anchors.leftMargin: 10;
				color: parent.hover ? colorTheme.darkerPrimaryColor : colorTheme.lighterPrimaryColor;
				text: model.text;
				font.pixelSize: 32;
				font.weight: 300;
			}

			onClicked: { searchResultsProto.choosed(this._local.model.ref) }
		}
	}

	fill(data): {
		searchView.model.clear()
		searchView.model.append(data)
	}
}
