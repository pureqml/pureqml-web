HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "mixin";

	LeftMenu { id: leftMenu; anchors.right: contentRect.left; onIndexChoosed(idx): { content.focusItem(idx) } }

	HistoryPageContent {
		id: contentRect;
		height: content.contentHeight + 30;

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

				DescriptionText { text: "In example bellow Rectangle change its color when it's hovered and text appears in the middle on mouse clicked event."; }

				CodeExample {
					codeWidth: parent.width - 20;
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
				text: "This mixin contatins just one proeprty - \"value\" for setting overflow mode.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "value"; value: "enum property which set overflow behavour. Possible values: Visible, Hidden, Scroll, ScrollX, ScrollY"; }
					}
				}

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 200;
					exampleHeight: 200;
					sample: OverflowMixinExample { }
				}
			}

			PageColumn {
				title: "TextMixin";
				text: "";
			}


			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
