Item {
	id: codeExampleProto;
	property int codeWidth: 300;
	property int codeHeight: 300;
	property int exampleWidth: 300;
	property int exampleHeight: 300;
	property Item sample;
	height: codeContent.height;

	Resource { id: codeSource; }

	Column {
		id: codeContent;
		anchors.left: parent.left;
		anchors.right: parent.right;
		spacing: 10;

		Rectangle {
			id: sampleArea;
			width: codeExampleProto.exampleWidth;
			height: codeExampleProto.exampleHeight;
			border.width: 1;
			border.color: "#ccc";

			property Item content: Item { anchors.fill: parent; }

			onCompleted: {
				var item = codeExampleProto.sample
				item.anchors.fill = this.content
				item.visible = true
				this.content.element.append(item.element)
			}
		}

		CodeHighlighter {
			width: codeExampleProto.codeWidth;
			height: contentHeight;
			font.pixelSize: 18;
			language: "qml";
			code: codeSource.data;
		}
	}

	onRecursiveVisibleChanged: {
		if (!value)
			return

		var codeFile = this.sample.componentName.replace(".", "/").replace("pureqml_web/", "") + ".qml"
		codeSource.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/" + codeFile
	}
}
