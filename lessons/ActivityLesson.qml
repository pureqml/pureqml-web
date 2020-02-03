Lesson {
	url: "activity";

	PageColumn {
		title: "Activities";
		text: "Activity is a single Item which can be displayed just one at the moment. Activities are very usefull when you build multipage application where user can switch between pages. To use them you need <a href='https://github.com/pureqml/controls'>controls</a> lib in your project. There are two kind of activities:";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "Activity"; value: "simple activity item as is"; }
				ListElement { key: "LazyActivity"; value: "is like a simle activity but with lazy initizlization its very usefull for better performance"; }
			}
		}

		MainP {
			text: "Lets create two activities";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeHighlighter {
			width: parent.width - 20;
			font.pixelSize: 18;
			language: "qml";
			code: mainActivityResource.data;

			onCodeChanged: { sampleArea.init() }
		}

		CodeHighlighter {
			width: parent.width - 20;
			font.pixelSize: 18;
			language: "qml";
			code: nextActivityResource.data;

			onCodeChanged: { sampleArea.init() }
		}

		MainP {
			text: "Now we will use them as simple activities:";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 500;
			exampleHeight: 500;
			sample: SimpleActivityExample { }
		}

		MainP {
			text: "If you look in logs you will see that both activites was initialized because log from 'onCompleted' event handler was triggered.<br>Lets look on LazyActivity case:";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 500;
			exampleHeight: 500;
			sample: LazyActivityExample { }
		}

		MainP {
			text: "Now the NextActivity created event wasn't fired untill you will call NextActivity explicitly by pushing it in stack.<br>As you can see it'se more efficint to use lazy activities.";
			horizontalAlignment: Text.AlignLeft;
		}

		MainP {
			text: "";
			horizontalAlignment: Text.AlignLeft;
		}
	}

	Resource { id: mainActivityResource; url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/code_samples/MainActivity.qml"; }
	Resource { id: nextActivityResource; url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/code_samples/NextActivity.qml"; }
}
