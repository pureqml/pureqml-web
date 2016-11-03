HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "layouts";

	LeftMenu { id: leftMenu; onIndexChoosed(idx): { layoutsContent.focusItem(idx) } }

	Rectangle {
		id: contentRect;
		height: layoutsContent.contentHeight + 30;
		anchors.top: parent.top;
		anchors.left: leftMenu.right;
		anchors.right: parent.right;
		anchors.leftMargin: 10;
		color: colorTheme.panelColor;

		ContentColumn {
			id: layoutsContent;
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.margins: 10;
			spacing: 30;

			PageColumn {
				title: "Layouts";
				text: "Usefull controls for content positioning.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "spacing"; value: "integer value for setting space between items"; }
						ListElement { key: "count"; value: "items count"; }
						ListElement { key: "currentIndex"; value: "current focused item index"; }
					}
				}

			}

			PageColumn {
				title: "Row";

				DescriptionText { text: "If you need to place your content horizontaly from left to right use \"Row\":"; }

				CodeExample {
					anchors.left: parent.left;
					codeWidth: layoutsContent.width - 20;
					exampleWidth: 400;
					exampleHeight: 200;
					sample: LayoutRow { }
					sourceFile: "code_samples/LayoutRow.qml";
				}
			}

			PageColumn {
				title: "Column";

				DescriptionText { text: "If you need to place your content verticaly from top to bottom use \"Column\":"; }

				CodeExample {
					anchors.left: parent.left;
					codeWidth: layoutsContent.width - 20;
					exampleWidth: 200;
					exampleHeight: 400;
					sample: LayoutColumn { }
					sourceFile: "code_samples/LayoutColumn.qml";
				}
			}

			PageColumn {
				title: "Grid";

				DescriptionText { text: "In all other cases just use \"Grid\":"; }

				CodeExample {
					anchors.left: parent.left;
					codeWidth: layoutsContent.width - 20;
					exampleWidth: 250;
					exampleHeight: 250;
					sample: LayoutGrid { }
					sourceFile: "code_samples/LayoutGrid.qml";
				}
			}


			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
