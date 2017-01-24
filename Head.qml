Rectangle {
	height: 70;// context.scrollY > 80 ? 70 : 150 - context.scrollY;
	width: 100%;
	color: colorTheme.panelColor;
	effects.shadow.y: 1; 
	effects.shadow.color: "#0004"; 
	effects.shadow.blur: 1; 
	effects.shadow.spread: 0;

	Rectangle {
		anchors.top: menu.top;
		anchors.left: menu.left;
		anchors.right: parent.right;
		anchors.bottom: menu.bottom;
		color: colorTheme.primaryColor;
		visible: !menu.wide;

		Behavior on x, width { Animation { duration: 300; } }
	}

	Row {
		id: menu;
		property bool wide: context.width > 800;
		property bool show: false;
		height: 70;
		x: 40;

		MenuItem { text: "PureQML"; page: "main"; }
		MenuItem { text: "Getting started"; page: "gettingstarted"; }
		MenuItem { text: "Download"; page: "download"; }
		MenuItem { text: "Lessons"; page: "lessons"; }
		MenuItem { text: "Docs"; page: "docs"; }

		SearchPanel {
			width: 240;
		}

		Behavior on x { Animation { duration: menu.count ? 300 : 0; } }
	}

	WebItem {
		width: height;
		anchors.top: parent.top;
		anchors.right: parent.right;
		anchors.bottom: parent.bottom;
		visible: !menu.wide;

		Image {
			anchors.centerIn: parent;
			source: "res/menuIcon.png";
		}

		onClicked: { menu.show = !menu.show }
	}

	onCompleted: { this.style('position', 'fixed') }
}
