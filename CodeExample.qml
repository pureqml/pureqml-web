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

		Text { text: "Code:"; font.pixelSize: 20; }

		CodeHighlighter {
			font.pixelSize: 18;
			language: "qml";
			code: codeSource.data;

			onCodeChanged: { sampleArea.init() }
		}

		Text { text: "Result:"; font.pixelSize: 20; }

		Rectangle {
			id: sampleArea;
			width: codeExampleProto.sample.width;
			height: codeExampleProto.exampleHeight;
			color: "#EEE";

			property Item content: Item { anchors.fill: parent; }

			init: {
				var item = codeExampleProto.sample
				item.anchors.fill = this.content
				item.visible = true
				this.content.element.append(item.element)
			}
		}
	}

	onSampleChanged: {
		if (!this.sample)
			return
		var codeFile = this.sample.componentName.replace(/\./g, "/").replace("pureqml_web/", "") + ".qml"
		log("Code", codeFile)
		codeSource.url = "https://raw.githubusercontent.com/pureqml/pureqml-web/master/" + codeFile
	}
}
