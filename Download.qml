HistoryPage {
	url: "download";
	horizontalAlignment: Grid.AlignHCenter;
	spacing: 30;

	BigButton {
		icon: "github.png";
		text: "View on github";

		onClicked: { window.location = "https://github.com/pureqml/qml2js" }
	}

	BigButton {
		icon: "download.png";
		text: "Download";

		onClicked: { window.location = "https://github.com/pureqml/qml2js/archive/master.zip" }
	}
}
