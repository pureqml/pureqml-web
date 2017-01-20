Rectangle {
	signal goHome;
	height: 70;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	color: colorTheme.primaryColor;
	effects.shadow.y: 1;
	effects.shadow.blur: 1;
	effects.shadow.color: "#0003";
	effects.shadow.spread: 1;

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
		height: 100%;
		anchors.right: parent.right;
		anchors.rightMargin: 40;

		MenuItem { text: "PureQML"; href: "../"; }
		MenuItem { text: "About"; href: "about"; }
		MenuItem { text: "Download"; href: "download"; }
		MenuItem { text: "Lessons"; href: "lessons"; }
		MenuItem { text: "Docs"; href: "docs"; }

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
