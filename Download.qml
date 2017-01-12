HistoryPage {
	url: "download";
	horizontalAlignment: Grid.AlignHCenter;

	BigButton {
		anchors.margins: 30;
		icon: "github.png";
		text: "View on github";

		onClicked: { window.location = "https://github.com/pureqml/qml2js" }
	}

	BigButton {
		anchors.margins: 30;
		icon: "download.png";
		text: "Download";

		onClicked: { window.location = "https://github.com/pureqml/qml2js/archive/master.zip" }
	}
}
