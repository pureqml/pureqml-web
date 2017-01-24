Lesson {
	url: "basics";

	PageColumn {
		title: "Item";
		text: "Item is the simplest and basic layout. It's just simple rectangle container.";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "x"; value: "x coordinate"; }
				ListElement { key: "y"; value: "y coordinate"; }
				ListElement { key: "z"; value: "z coordinate (items z-order value)"; }
				ListElement { key: "width"; value: "width of visible area"; }
				ListElement { key: "height"; value: "height of visible area"; }
				ListElement { key: "clip"; value: "clip all children outside rectangular area defined by x, y, width, height"; }
				ListElement { key: "visible"; value: "this item and its children are visible"; }
				ListElement { key: "opacity"; value: "opacity of the item"; }
			}
		}
	}

	PageColumn {
		title: "Rectangle";
		text: "Rectangle is Item but have more additional properties:";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "color"; value: "rectangle background color"; }
				ListElement { key: "radius"; value: "round corner radius"; }
				ListElement { key: "border"; value: "object holding properties of the border"; }
				ListElement { key: "gradient"; value: "if gradient object was set, it displays gradient instead of solid color"; }
			}
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 250;
			exampleHeight: 250;
			sample: RectanglesExample { }
		}
	}

	PageColumn {
		title: "Text";
		text: "Text is item with text wich can customized by user.";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "text"; value: "text to be displayed"; }
				ListElement { key: "color"; value: "color of the text"; }
				ListElement { key: "font"; value: "object for text font customizing"; }
			}
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 150;
			exampleHeight: 50;
			sample: TextExample { }
		}
	}

	PageColumn {
		title: "Image";
		text: "Image is item with image";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "source"; value: "image URL"; }
				ListElement { key: "fillMode"; value: "enum property for setting image filling mode possible values: Stretch, PreserveAspectFit, PreserveAspectCrop, Tile, TileVertically, TileHorizontally"; }
			}
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: ImageExample { }
		}
	}
}
