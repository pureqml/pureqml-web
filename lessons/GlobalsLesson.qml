Lesson {
	url: "globals";

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
		title: "System";
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

		DescriptionText {
			text: "If you need to specify logic for concrete platform use 'System' properties. Examples text (look below) depends on user envoirement.";
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 200;
			exampleHeight: 200;
			sample: SystemExample { }
		}
	}

	PageColumn {
		title: "Location";
		text: "Represents page location object properties and methods";

		KeyValueView {
			shift: 350;
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "hash"; value: "contains current hash value (after '#' charachter)"; }
				ListElement { key: "host"; value: "current host with port number"; }
				ListElement { key: "href"; value: "whole current URL"; }
				ListElement { key: "port"; value: "current port number"; }
				ListElement { key: "origin"; value: "current protocol, hostname and port number of a URL"; }
				ListElement { key: "hostname"; value: "current host name"; }
				ListElement { key: "pathname"; value: "path name of the current URL"; }
				ListElement { key: "historyState"; value: "current history state"; }
				ListElement { key: "changeHref(href)"; value: "change current href value method, argument is new href value"; }
				ListElement { key: "pushState(state, title, url)"; value: "push new state to the history"; }
			}
		}
	}
}
