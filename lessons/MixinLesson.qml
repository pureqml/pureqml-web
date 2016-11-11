HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "mixin";

	LeftMenu { id: leftMenu; onIndexChoosed(idx): { content.focusItem(idx) } }

	Rectangle {
		id: contentRect;
		height: content.contentHeight + 30;
		anchors.top: parent.top;
		anchors.left: leftMenu.right;
		anchors.right: parent.right;
		anchors.leftMargin: 10;
		color: colorTheme.panelColor;

		ContentColumn {
			id: content;
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.margins: 10;
			spacing: 30;

			PageColumn {
				title: "Mixin";
				text: "Mixins are very usefull and simple in use features for item extending. QML doesn't support multiple inheritance but you can extend functionalty using mixins. In PureQML mixins - are entities which add some functinality to its parent Item. \"Controls\" library provide some mixins:";

				KeyValueView {
					shift: 180;
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "DragMixin"; value: "mixin which allows to drag and drop Item"; }
						ListElement { key: "HoverMixin"; value: "mixin which allows to handle mouse hover and clicked events"; }
						ListElement { key: "ImageMixin"; value: "mixin which allows to place image in Item"; }
						ListElement { key: "OverflowMixin"; value: "mixin which allows to customize content overflow behaviour see considered part below for more details"; }
						ListElement { key: "TextMixin"; value: "mixin which allows to place text in Item"; }
					}
				}
			}

			PageColumn {
				title: "DragMixin";
				text: "";
			}

			PageColumn {
				title: "HoverMixin";
				text: "";

				CodeExample {
					codeWidth: anchorsContent.width - 20;
					exampleWidth: 200;
					exampleHeight: 200;
					sample: ClickMixinExample { }
				}
			}

			PageColumn {
				title: "ImageMixin";
				text: "";
			}

			PageColumn {
				title: "OverflowMixin";
				text: "";
			}

			PageColumn {
				title: "TextMixin";
				text: "";
			}


			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
