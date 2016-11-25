Rectangle {
	signal search;
	width: 300;
	height: 50;
	anchors.top: parent.top;
	anchors.rightMargin: 10;
	color: colorTheme.panelColor;

	TextInput {
		id: searchText;
		width: 230;
		height: 30;
		anchors.left: parent.left;
		anchors.verticalCenter: parent.verticalCenter;
		anchors.leftMargin: 20;
		font.pixelSize: 18;
		font.weight: 300;
		font.family: "Roboto Slab";
		focus: true;
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

	WebItem {
		anchors.fill: searchIcon;

		onClicked: { this.parent.searchCall() }
	}

	Rectangle {
		height: 1;
		anchors.top: searchText.bottom;
		anchors.left: searchText.left;
		anchors.right: searchText.right;
		color: colorTheme.primaryColor;
	}

	searchCall: {
		if (searchText.text)
			this.search(searchText.text)
	}

	onSelectPressed: { this.searchCall() }
}