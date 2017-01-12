HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "anchors";

	ContentColumn {
		id: content;
		width: parent.width;
		spacing: 30;

		PageColumn {
			title: "Anchors";
			text: "Each item can can be positionated with anchors. The PureqQML anchors are simillar to the Qt anchors. But has one more value: \"centerIn\" for positionating at the center of correspoding item.";

			DescriptionText { text: "First of all item can be aligned by one of it's own side:"; }

			KeyValueView {
				anchors.leftMargin: 20;
				model: ListModel {
					ListElement { key: "top"; value: ""; }
					ListElement { key: "left"; value: ""; }
					ListElement { key: "right"; value: ""; }
					ListElement { key: "bottom"; value: ""; }
				}
			}

			DescriptionText { text: "Simple example of using such alignment is below:"; }

			CodeExample {
				codeWidth: parent.width - 20;
				exampleWidth: 200;
				exampleHeight: 200;
				sample: Anchors1 { }
			}
		}

		PageColumn {
			title: "Center";
			text: "You also can attach item at center...";

			KeyValueView {
				anchors.leftMargin: 20;
				model: ListModel {
					ListElement { key: "centerIn"; value: ""; }
					ListElement { key: "verticalCenter"; value: ""; }
					ListElement { key: "horizontalCenter"; value: ""; }
				}
			}

			DescriptionText { text: "Simple example of using such alignment is below:"; }

			CodeExample {
				codeWidth: parent.width - 20;
				exampleWidth: 350;
				exampleHeight: 350;
				sample: AnchorsCenter { }
			}
		}

		PageColumn {
			title: "Fill";
			text: "Item can be fill to considered item. In example below red rectangle fill its parent.";

			CodeExample {
				codeWidth: parent.width - 20;
				exampleWidth: 200;
				exampleHeight: 200;
				sample: AnchorsFill { }
			}
		}

		PageColumn {
			title: "Margins";
			text: "Margins...";

			CodeExample {
				codeWidth: parent.width - 20;
				exampleWidth: 200;
				exampleHeight: 200;
				sample: AnchorsMargins { }
			}

			DescriptionText { text: "If you need same margins for each side just set single \"margins\" value:"; }

			CodeExample {
				codeWidth: parent.width - 20;
				exampleWidth: 200;
				exampleHeight: 200;
				sample: AnchorsMarginsFixed { }
			}
		}
	}
}
