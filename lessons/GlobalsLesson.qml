HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "anchors";

	LeftMenu { id: leftMenu; onIndexChoosed(idx): { content.focusItem(idx) } }

	Rectangle {
		id: contentRect;
		height: content.contentHeight + 30;
		anchors.top: parent.top;
		anchors.left: leftMenu.right;
		anchors.right: parent.right;
		anchors.leftMargin: 10;
		color: colorTheme.panelColor;

		ContentColumn {
			id: content;
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.margins: 10;
			spacing: 30;

			PageColumn {
				title: "Global properties";
				text: "Using globals properties you can manipulate page features like content scroll postion or toggling fullscreen and get information about the platform.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "fullscreen"; value: "bool property which allow to enable or disable fullscreen mode"; }
						ListElement { key: "scrollY"; value: "integer property for setting or getting vertical scroll position of thw window"; }
						ListElement { key: "system"; value: "object wich contains platform info see considered part below for details"; }
						ListElement { key: "location"; value: "object wich contains page location info see considered part below for details"; }
						ListElement { key: "language"; value: "string property for settings language"; }
					}
				}
			}

			PageColumn {
				title: "Sytem";
				text: "This object store readonly information about device, browser and supporting fatures.";

				KeyValueView {
					shift: 250;
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "userAgent"; value: "string property returns navigator.userAgent"; }
						ListElement { key: "language"; value: "string property returns browser lang code"; }
						ListElement { key: "browser"; value: "string property returns current browser name"; }
						ListElement { key: "vendor"; value: "string property returns vendor name"; }
						ListElement { key: "os"; value: "string property returns current OS name"; }
						ListElement { key: "webkit"; value: "bool property returns true is webkit if supporting and false otherwise"; }
						ListElement { key: "support3dTransforms"; value: "bool property returns true if 3dTransforms are supporting and false otherwise"; }
						ListElement { key: "supportTransforms"; value: "bool property returns true if transforms are supporting and false otherwise"; }
						ListElement { key: "supportTransitions"; value: "bool property returns true is transitions are supporting and false otherwise"; }
						ListElement { key: "portrait"; value: "bool property returns true if current layout is portrait oriented and false otherwise"; }
						ListElement { key: "landscape"; value: "bool property returns true if current layout is landscape oriented and false otherwise"; }
						ListElement { key: "pageActive"; value: "bool property which is true when current page is active or false otherwise"; }
						ListElement { key: "contextWidth"; value: "int property wich store current page content width"; }
						ListElement { key: "contextHeight"; value: "int property wich store current page content height"; }
						ListElement { key: "device"; value: "enum property which returns current device, possible values are: Desktop, Tv and Mobile"; }
						ListElement { key: "layoutType"; value: "enum property which represent current layout mode, possible values are: MobileS, MobileM, MobileL, Tablet, Laptop, LaptopL, Laptop4K"; }

					}
				}

				//DescriptionText { text: "Simple example of using such alignment is below:"; }

				//CodeExample {
					//codeWidth: content.width - 20;
					//exampleWidth: 200;
					//exampleHeight: 200;
					//sample: Anchors1 { }
					//sourceFile: "code_samples/Anchors1.qml";
				//}
			}

			PageColumn {
				title: "Location";
				text: "";
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
