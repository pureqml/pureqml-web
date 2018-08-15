Lesson {
	url: "localization";

	PageColumn {
		title: "Localization";
		text: "One of the feature of QML it's easy way to support many languages. For example we will try to implement text with 3 supported languages.\nLets look on simple text example:";

		CodeHighlighter {
			width: parent.width - 30;
			font.pixelSize: 18;
			language: "qml";
			code: "Text {\n" +
				"\ttext: \"Hello world\";\n" +
			"}";
		}

		MainP {
			text: "To make this text multilanguage we shuold add 'qsTr()' method";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeHighlighter {
			width: parent.width - 30;
			font.pixelSize: 18;
			language: "qml";
			code: "Text {\n" +
				"\ttext: qsTr(\"Hello world\");\n" +
			"}";
		}

		MainP {
			text: "To add new translations we should add desired language codes in .manifest file. Russian and German language codes for example:";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeHighlighter {
			width: parent.width - 30;
			font.pixelSize: 18;
			language: "qml";
			code: "{\n" +
				"\t\"languages\": [\"ru_RU\", \"de_DE\"];\n" +
			"}";
		}

		MainP {
			text: "Now we can build translation file";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeHighlighter {
			width: parent.width - 30;
			font.pixelSize: 18;
			language: "shell";
			code: "./qmlcore/build -u";
		}

		MainP {
			text: "If everything is correct you will see ru_RU.ts and de_DE.ts files in your 'src' folder. With this files you can add yout translation";
			horizontalAlignment: Text.AlignLeft;
		}
	}
}
