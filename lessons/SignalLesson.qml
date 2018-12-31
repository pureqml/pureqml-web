Lesson {
	url: "signals";

	PageColumn {
		title: "Signals";
		text: "Here you can find examples how to create your own signals and handle them.";
	}

	PageColumn {
		title: "Declaration";
		text: "To declare custom signal just write:";

		CodeHighlighter {
			width: parent.width - 20;
			font.pixelSize: 18;
			language: "qml";
			code: "WebItem {\n\tsignal mySignalOccured;\n}";
		}

		DescriptionText { text: "Attention! To use 'WebItem' you have to add <a href='https://github.com/pureqml/controls'>controls</a> into your project"; }
		DescriptionText { text: "To emit this signal, just call such function in its context:"; }

		CodeHighlighter {
			width: parent.width - 20;
			font.pixelSize: 18;
			language: "qml";
			code: "WebItem {\n\tsignal mySignalOccured;\n\n\tonClicked: {\n\t\tthis.mySignalOccured()\n\t}\n}";
		}
	}

	PageColumn {
		title: "Handling";
		text: "To add handler for any signal just write \"onX\", where X is signal name which starts with uppercase letter. In our case handler for \"mySignalOccured\" signal will be called \"onMySignalOccured\". \"SignalTestItem\" in example below is WebItem from prevous part (Declaration). Our signal is triggered when mouse is clicked.";

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: SignalHandling { }
		}
	}

	PageColumn {
		title: "Passing Arguments";
		text: "You also can pass arguments in signal:";

		CodeHighlighter {
			width: parent.width - 20;
			font.pixelSize: 18;
			language: "qml";
			code: "WebItem {\n\tsignal mySignalOccured;\n\n\tonClicked: {\n\t\tthis.mySignalOccured(1, \"test\")\n\t}\n}";
		}

		DescriptionText { text: "To get these arguments in handler, declare considered arguments in it:"; }

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: SignalArgsHandling { }
		}
	}

	PageColumn {
		title: "Properties";
		text: "If ant property value is changed the \"onXChanged\" (where X is property name) event will be triggered. Usage example is below:";

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: PropertyHandling { }
		}

		DescriptionText { text: "Actualy you don't need to write \"this.clickCount\" to get its new value. You can use special alias which called \"value\". You can get it only inside property changed event handler scope. In short you can replace this code:"; }

		CodeHighlighter {
			width: parent.width - 20;
			height: contentHeight;
			font.pixelSize: 18;
			language: "qml";
			code: "onClickCountChanged: { rectText.text = \"Click count: \" + this.clickCount }";
		}

		DescriptionText { text: "with this one:"; }

		CodeHighlighter {
			width: parent.width - 20;
			height: contentHeight;
			font.pixelSize: 18;
			language: "qml";
			code: "onClickCountChanged: { rectText.text = \"Click count: \" + value }";
		}
	}
}
