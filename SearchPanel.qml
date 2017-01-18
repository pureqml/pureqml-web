Rectangle {
	signal search;
	height: 50;
	anchors.top: parent.top;
	color: "#FAFAFA";// colorTheme.panelColor;

	MaterialIcon {
		anchors.verticalCenter: parent.verticalCenter;
		x: (parent.height - height) / 2;
		icon: "search";
		color: "#929292";
		size: 30;
	}

	SearchInput {
		id: searchText;
		height: 30;
		width: 100% - 60;
		x: 50;
		anchors.verticalCenter: parent.verticalCenter;
		font.pixelSize: 18;
		font.weight: 300;
//		font.family: "Roboto Slab";
		backgroundColor: "#FAFAFA";
		placeholder: "Search";

		onTextChanged: {
			if (value.length > 1)
				searchTimer.restart() 
		}
	}

	// Rectangle {
	// 	height: 1;
	// 	width: searchText.width;
	// 	x: searchText.x;
	// 	anchors.top: searchText.bottom;
	// 	color: colorTheme.primaryColor;
	// }

	Timer {
		id: searchTimer;
		interval: 500;

		onTriggered: { this.parent.searchCall() }
	}

	searchCall: {
		if (searchText.text)
			this.search(searchText.text)
	}
}
