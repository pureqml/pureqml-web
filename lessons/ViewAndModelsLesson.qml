HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "views";

	LeftMenu {
		id: leftMenu;
		wide: !contentRect.wide;
		anchors.left: parent.left;
		anchors.leftMargin: !parent.bigScreen ? (parent.width - width - contentRect.width) / 2 - 10 : 0;

		onIndexChoosed(idx): { content.focusItem(idx) }
	}

	HistoryPageContent {
		id: contentRect;
		anchors.top: leftMenu.top;
		anchors.topMargin: !wide ? leftMenu.height + 10 : 0;
		height: content.contentHeight + 30;

		ContentColumn {
			id: content;
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.margins: 10;
			spacing: 30;

			PageColumn {
				title: "Views and Models";
				text: "MVC oriented controls which allows to separate view and data. Describe UI in delegate and data in model. All views inherits from BaseView item. The all have same basic properties and signals:";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "count"; value: "view elements count"; }
						ListElement { key: "currentIndex"; value: "index of current focused element in view"; }
						ListElement { key: "model"; value: "object which attached to model"; }
						ListElement { key: "delegate"; value: "item which described each element UI"; }
					}
				}
			}

			PageColumn {
				title: "Model";
				text: "The simple model with minimal interface is \"ListModel\" use it or inhirits from it.";

				CodeHighlighter {
					width: parent.width - 20;
					height: contentHeight;
					font.pixelSize: 18;
					language: "qml";
					code: "ListView {\n\tmodel: ListModel {\n\t\tListElement { text: \"foo\"; }\n\t\tListElement { text: \"bar\"; }\n\t\tListElement { text: \"baz\"; }\n\t}\n}";
				}
			}

			PageColumn {
				title: "Delegate";
				text: "Delegate describes UI of each element. You can get considered model's data via \"model\".";

				CodeHighlighter {
					width: parent.width - 20;
					height: contentHeight;
					font.pixelSize: 18;
					language: "qml";
					code: "ListView {\n\tmodel: ListModel {\n\t\tListElement { text: \"foo\"; }\n\t\tListElement { text: \"bar\"; }\n\t\tListElement { text: \"baz\"; }\n\t}\n\tdelegate: Text { text: model.text; }  \n}";
				}
			}

			PageColumn {
				title: "ListView";
				text: "ListView is usefull when you need to layout models data in one direction (both horizontaly and verticaly).";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "orientation"; value: "Enumeration proeprty can be \"Vertical\" or \"Horizontal\". Orientation is vertical by default"; }
					}
				}

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 200;
					exampleHeight: 50;
					sample: ListViewExample { }
				}
			}

			PageColumn {
				title: "GridView";
				text: "If you need to diaply model data in grid - use GridView.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "cellWidth"; value: "Grid cell width, if you need to customize horizontal spacing between delegates you can set its value different from delegate's width"; }
						ListElement { key: "cellHeight"; value: "Grid cell height, if you need to customize vertical spacing between delegates you can set its value different from delegate's height"; }
						ListElement { key: "rows"; value: "readonly property which returns the count of dispalyed grid rows"; }
						ListElement { key: "columns"; value: "readonly property which returns the count of dispalyed grid columns"; }
						ListElement { key: "flow"; value: "Enumeration property can be \"FlowLeftToRight\" or \"FlowTopToBottom\". This property set the direction of the new element appending to the grid"; }
					}
				}

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 330;
					exampleHeight: 330;
					sample: GridViewExample { }
				}
			}

			PageColumn {
				title: "ProxyModel";
				text: "If you need to sort or filter model with same data you actually don't have to implement new model for every case. You can just use ProxyModel.<br>For example we have a model this recieved messages:";

				CodeHighlighter {
					width: parent.width - 20;
					height: contentHeight;
					font.pixelSize: 18;
					language: "qml";
					code: proxyModelsCode.data;
				}

				DescriptionText {
					text: "If we want to display in view data of single contact we can use ProxyModel. ProxyModel has a \"target\" .";
				}

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "target"; value: "property for setting target model which data must be sorted or filtered"; }
						ListElement { key: "setCompare"; value: "method which takes compare function with two arguments and which returns 1, -1 or 0"; }
						ListElement { key: "setFilter"; value: "method which takes filter method and return bool value"; }
					}
				}

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 300;
					exampleHeight: 250;
					sample: ProxyLessonExample { }
				}
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}

	Resource {
		id: proxyModelsCode;
		url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/code_samples/ProxyMessages.qml";
	}
}
