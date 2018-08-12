Lesson {
	url: "loader";

	Resource {
		id: rectangeResource;
		url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/src/RectangleExample.qml";
	}

	PageColumn {
		title: "Loader";
		text: "Loader component can load other components dynamically";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "loaded"; value: "when requested component it loaded event signal"; }
				ListElement { key: "source"; value: "component's URL"; }
				ListElement { key: "item"; value: "item for storing requested component"; }
			}
		}

		MainP {
			text: "First of all we need to create a component to be loaded. Lets create a simple component called 'RectangleExample.qml' in our 'src' directory with this code:";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeHighlighter {
			width: contentWidth > parent.width - 30 ? parent.width - 30 : contentWidth;
			font.pixelSize: 18;
			language: "qml";
			code: rectangeResource.data;
		}

		MainP {
			text: "Now we'll try to load this component via loader:";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: LoaderCodeLesson { }
		}

		MainP {
			text: "That's it!";
			horizontalAlignment: Text.AlignLeft;
		}

		MainP {
			text: "!!! IMPORTANT !!!\nDon't forget to add '@using' directive with component URL to be sure that desired component will be included by compiler before that loader instance.";
			horizontalAlignment: Text.AlignLeft;
		}
	}
}
