Lesson {
	url: "mixins";

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

		DescriptionText { text: "If you need to get mixins property values you can declare them as \"property\" (see comment 1 in code below). If you just need to apply their features you can jut instanciate it (see comment 2 in code below)"; }

		CodeHighlighter {
			font.pixelSize: 18;
			language: "qml";
			code: "Item {\n\t// 1. Declaring mixin as a property\n\tproperty Mixin hover: HoverMixin { }\n\n\t// 2. Create instance\n\tHoverMixin { }\n}";
		}
	}

	PageColumn {
		title: "DragMixin";
		text: "This mixin allows you to drag and drop items";

		KeyValueView {
			shift: 180;
			anchors.leftMargin: 20;

			model: ListModel {
				ListElement { key: "enabled"; value: "boolean flag for enabling/diabling dragging"; }
				ListElement { key: "pressed"; value: "bool property which becomes 'true' when item was pressed and 'false' otherwise"; }
				ListElement { key: "moved"; value: "boolean flag which means than item was moved from its initial position"; }
				ListElement { key: "top"; value: "top border of dragging area"; }
				ListElement { key: "left"; value: "left border of dragging area"; }
				ListElement { key: "right"; value: "right border of dragging area"; }
				ListElement { key: "bottom"; value: "bottom border of dragging area"; }
				ListElement { key: "direction"; value: "enum valur for customizing avaliable direction, can be: Any, Vertical or Horizontal"; }
			}
		}

		DescriptionText { text: "Simple usage example"; }

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 300;
			exampleHeight: 300;
			sample: DragMixinLesson { }
		}

		DescriptionText { text: "If you need to drag item only horizontally or vertically adjust direction property like in example below"; }

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 300;
			exampleHeight: 300;
			sample: DragMixinDirectionLesson { }
		}
	}

	PageColumn {
		title: "HoverMixin";
		text: "";

		DescriptionText { text: "In example bellow Rectangle change its color when it's hovered and text appears in the middle on mouse clicked event."; }

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: HoverMixinExample { }
		}
	}

	PageColumn {
		title: "ImageMixin";
		text: "ImageMixin is like a usual Image but it doesnt create new instance in parent DOM element. It changes parent's background image instead.";

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: ImageMixinExample { }
		}
	}

	PageColumn {
		title: "OverflowMixin";
		text: "This mixin contatins just one property - \"value\" for setting overflow mode.";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "value"; value: "enum property controlling overflow behavour. Possible values: Visible, Hidden, Scroll, ScrollX, ScrollY"; }
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
		text: "ImageMixin is similar to normal Text component, but it doesn't create new object in parent DOM element. It adds text in parent's node instead.";

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 300;
			exampleHeight: 50;
			sample: TextMixinExample { }
		}
	}
}
