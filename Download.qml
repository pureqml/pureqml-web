HistoryPage {
	height: downloadRectContent.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "download";

	Rectangle {
		id: downloadRectContent;
		height: buttonsRow.contentHeight + 30;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		color: colorTheme.panelColor;

		Row {
			id: buttonsRow;
			anchors.top: parent.top;
			anchors.horizontalCenter: parent.horizontalCenter;
			anchors.topMargin: 15;
			height: 100;
			spacing: 20;

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
	}
}
