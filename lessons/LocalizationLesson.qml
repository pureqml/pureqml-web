Lesson {
	url: "localization";

	Resource { id: translationFile; url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/translation_file_example.ts"; }

	PageColumn {
		title: "Localization";
		text: "One of the features of QML it's easy way to support many languages. For example we will try to implement text with 2 supported languages.\nLets look on simple example with text:";

		CodeHighlighter {
			width: parent.width - 30;
			font.pixelSize: 18;
			language: "qml";
			code: "WebItem {\n" +
				"\twidth: 200;\n" +
				"\theight: 200;\n\n" +
				"\tText {\n" +
				"\t\tanchors.centerIn: parent;\n" +
				"\t\tcolor: \"black\";\n" +
				"\t\tfont.pixelSize: 25\n" +
				"\t\ttext: \"Hello world\";\n" +
				"\t}\n" +
			"}";
		}

		MainP {
			anchors.topMargin: 20;
			text: "To make this text multilanguage we shuold add 'qsTr()' method";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeHighlighter {
			width: parent.width - 30;
			font.pixelSize: 18;
			language: "qml";
			code: "WebItem {\n" +
				"\twidth: 200;\n" +
				"\theight: 200;\n\n" +
				"\tText {\n" +
				"\t\tanchors.centerIn: parent;\n" +
				"\t\tcolor: \"black\";\n" +
				"\t\tfont.pixelSize: 25\n" +
				"\t\ttext: qsTr(\"Hello world\");\n" +
				"\t}\n" +
			"}";
		}

		MainP {
			anchors.topMargin: 20;
			text: "To add new translations we have to add desired language codes in .manifest file. Russian language codes for example:";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeHighlighter {
			width: parent.width - 30;
			font.pixelSize: 18;
			language: "qml";
			code: "{\n" +
				"\t\"languages\": [\"ru_RU\"];\n" +
			"}";
		}

		MainP {
			text: "Now we can build translation file";
			horizontalAlignment: Text.AlignLeft;
		}

		MainP {
			text: "If everything is correct you will see ru_RU.ts file in your 'src' folder. In this file you can add your translation &lt;translation&gt; tag";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeHighlighter {
			width: parent.width - 30;
			font.pixelSize: 18;
			language: "qml";
			code: translationFile.data;
		}

		MainP {
			text: "Now try swith language in our text example. Click on text to toggle current language";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: TranslationTextExample { }
		}
	}
}
