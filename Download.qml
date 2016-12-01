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

		Grid {
			id: buttonsRow;
			width: parent.width;
			anchors.top: parent.top;
			horizontalAlignment: Grid.AlignHCenter;
			anchors.topMargin: 15;
			verticalSpacing: 20;
			horizontalSpacing: 20;

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
