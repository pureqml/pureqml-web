Lesson {
	url: "localization";

	Resource { id: translationFile; url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/translation_file_example.ts"; }

	PageColumn {
		title: "Localization";
		text: "Localisation is easy. Let's try to implement text with 2 supported languages.\nSimple example with text:";

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
			text: "Attention! To use 'WebItem' you have to add <a href='https://github.com/pureqml/controls'>controls</a> into your project";
			horizontalAlignment: Text.AlignLeft;
		}

		MainP {
			anchors.topMargin: 20;
			text: "To make this text multilanguage we should add 'tr()' call";
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
				"\t\ttext: tr(\"Hello world\");\n" +
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
				"\t\"languages\": [\"ru_RU\"]\n" +
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
