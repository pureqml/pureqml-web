Rectangle {
	height: menu.height;
	width: 100%;
	color: colorTheme.panelColor;
	effects.shadow.y: 1; 
	effects.shadow.color: "#0004"; 
	effects.shadow.blur: 1; 
	effects.shadow.spread: 0;

	Grid {
		id: menu;
		width: Math.min(100%, 1200) - 40;
		anchors.horizontalCenter: parent.horizontalCenter;
		property bool wide: height <= 70;
		property bool show: false;

		MenuItem { text: "PureQML"; page: ""; }
		MenuItem { text: "Getting started"; page: "gettingstarted"; }
		MenuItem { text: "Download"; page: "download"; }
		MenuItem { text: "Lessons"; page: "lessons"; }
		MenuItem { text: "Docs"; page: "docs"; }

		SearchPanel {
			width: 240;
		}
	}

	WebItem {
		width: height;
		anchors.top: parent.top;
		anchors.right: parent.right;
		anchors.bottom: parent.bottom;
		visible: !menu.wide;

		Image {
			anchors.centerIn: parent;
			source: "http://pureqml.com/res/menuIcon.png";
		}

		onClicked: { menu.show = !menu.show }
	}

	onCompleted: { this.style('position', 'fixed') }
}
