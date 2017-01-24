Item {
	id: codeExampleProto;
	width: 90%; x: 5%;
	property int codeWidth: 300;
	property int codeHeight: 300;
	property int exampleWidth: 300;
	property int exampleHeight: 300;
	property Item sample;
	height: codeContent.height;

	Resource { id: codeSource; }

	Column {
		id: codeContent;
		width: 100%;
		spacing: 10;

		Text { text: "Code:"; }

		CodeHighlighter {
			width: 100%;
			font.pixelSize: 18;
			language: "qml";
			code: codeSource.data;
		}

		Text { text: "Result:"; }

		Rectangle {
			id: sampleArea;
			width: 100%;
			height: codeExampleProto.exampleHeight;
			color: "#EEE";

			property Item content: Item { anchors.fill: parent; }

			onCompleted: {
				var item = codeExampleProto.sample
				item.anchors.fill = this.content
				item.visible = true
				this.content.element.append(item.element)
			}
		}
	}

	onRecursiveVisibleChanged: {
		if (!value)
			return

		var codeFile = this.sample.componentName.replace(/\./g, "/").replace("pureqml_web/", "") + ".qml"
		codeSource.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/" + codeFile
	}

	onCompleted: {
		this.recursiveVisible = false
		this.recursiveVisible = true
	}
}
