Lesson {
	url: "localization";

	Resource { id: translationFile; url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/translation_file_example.ts"; }

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
			text: "To add new translations we should add desired language codes in .manifest file. Russian language codes for example:";
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
