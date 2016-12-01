HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "effects";

	LeftMenu {
		id: leftMenu;
		wide: !contentRect.wide;
		anchors.left: parent.left;
		anchors.leftMargin: !parent.bigScreen ? (parent.width - width - contentRect.width) / 2 - 10 : 0;

		onIndexChoosed(idx): { content.focusItem(idx) }
	}

	HistoryPageContent {
		id: contentRect;
		anchors.top: leftMenu.top;
		anchors.topMargin: !wide ? leftMenu.height + 10 : 0;
		height: content.contentHeight + 30;

		ContentColumn {
			id: content;
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.margins: 10;
			spacing: 30;

			PageColumn {
				title: "Effects";
				text: "You can use various effects for your project and customize them declrative way. List of supported effects:";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "blur"; value: "real property wich applies a Gaussian blur to the item"; }
						ListElement { key: "grayscale"; value: "real property wich converts the item to grayscale"; }
						ListElement { key: "sepia"; value: "real property wich converts the item to sepia"; }
						ListElement { key: "brightness"; value: "real property wich adjust brightness of the item"; }
						ListElement { key: "contrast"; value: "real property wich adjust items's contrast"; }
						ListElement { key: "hueRotate"; value: "real property wich applies a hue rotation on the item"; }
						ListElement { key: "invert"; value: "real property wich invert the samples in the item"; }
						ListElement { key: "saturate"; value: "real property wich staturate the item"; }
						ListElement { key: "shadow"; value: "object property for shadow customizing for details see below"; }
					}
				}
			}

			PageColumn {
				title: "Shadow";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "x"; value: "x coordinate of the shadow"; }
						ListElement { key: "y"; value: "int property y coordinate of the shadow"; }
						ListElement { key: "color"; value: "color of the shadow"; }
						ListElement { key: "blur"; value: "real property wich applies a Gaussian blur to the shadow"; }
						ListElement { key: "spread"; value: "int property wich applies shadow's spread distance"; }
					}
				}
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
