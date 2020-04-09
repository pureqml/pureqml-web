Lesson {
	url: "restapi";

	PageColumn {
		title: "Rest";
		text: "To preform XmlHttpRequest use 'Rest' control.";

		KeyValueView {
			shift: 250;
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "baseUrl"; value: "base URL for your API methods"; }
				ListElement { key: "error"; value: "error occured signal"; }
				ListElement { key: "internetConnectionLost"; value: "internet connection lost signal"; }
			}
		}

		MainP {
			text: "To implement any REST method place 'Method' object inside 'Rest' scope.";
			horizontalAlignment: Text.AlignLeft;
		}

		KeyValueView {
			shift: 250;
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "type"; value: "method type the default value is 'GET'"; }
				ListElement { key: "name"; value: "method function name which can be called in runtime"; }
				ListElement { key: "path"; value: "REST method route"; }
				ListElement { key: "headers(Object)"; value: "set method headers function"; }
			}
		}

		MainP {
			horizontalAlignment: Text.AlignLeft;
			text: "Simple GET request usage example. Click on red rectangle area to make request.";
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 250;
			exampleHeight: 250;
			sample: RestGetExample { }
		}

		H2 {
			width: 100%;
			font.weight: 300;
			font.pixelSize: 36;
			text: "Query parameters";
			color: colorTheme.primaryColor;
		}

		MainP {
			horizontalAlignment: Text.AlignLeft;
			text: "To add query parameter put desired paremeter in braces '{}' in method's path property value. And then you will call this method in runtime pass this parameter as first argument before success and error callback";
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: RestQueryExample { }
		}

		H2 {
			width: 100%;
			font.weight: 300;
			font.pixelSize: 36;
			text: "Headers";
			color: colorTheme.primaryColor;
		}

		MainP {
			horizontalAlignment: Text.AlignLeft;
			text: "To set request headers add 'headers' function in 'Rest' control scope. If you want to set header for custom method add 'headers' function in 'Method' scope";
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 300;
			exampleHeight: 150;
			sample: RestHeadersExample { }
		}
	}
}
