Rectangle {
	signal search;
	height: 50;
	anchors.top: parent.top;
	color: colorTheme.panelColor;

	TextInput {
		id: searchText;
		height: 30;
		anchors.left: parent.left;
		anchors.right: searchIcon.left;
		anchors.verticalCenter: parent.verticalCenter;
		anchors.leftMargin: 20;
		anchors.rightMargin: 10;
		font.pixelSize: 18;
		font.weight: 300;
		font.family: "Roboto Slab";
		focus: true;

		onTextChanged: { searchTimer.restart() }
	}

	Image {
		id: searchIcon;
		width: height;
		height: parent.height - 10;
		anchors.right: parent.right;
		anchors.verticalCenter: parent.verticalCenter;
		anchors.rightMargin: 5;
		source: "res/search.png";
		fillMode: Image.PreserveAspectFit;
	}

	Rectangle {
		height: 1;
		anchors.top: searchText.bottom;
		anchors.left: searchText.left;
		anchors.right: searchText.right;
		color: colorTheme.primaryColor;
	}

	Timer {
		id: searchTimer;
		interval: 300;

		onTriggered: { this.parent.searchCall() }
	}

	searchCall: {
		if (searchText.text)
			this.search(searchText.text)
	}
}
