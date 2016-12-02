Rectangle {
	signal goHome;
	height: menu.wide ? 100 : 70;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	color: colorTheme.primaryColor;
	effects.shadow.y: 1;
	effects.shadow.blur: 1;
	effects.shadow.color: "#0003";
	effects.shadow.spread: 1;

	Item {
		property Mixin hoverMixin: HoverMixin {}
		height: parent.height;
		width: logo.width + headText.paintedWidth + 10;

		Image {
			id: logo;
			width: height;
			height: parent.height - 20;
			anchors.left: parent.left;
			anchors.leftMargin: 10;
			anchors.verticalCenter: parent.verticalCenter;
			fillMode: Image.PreserveAspectFit;
			source: "res/logo.png";
		}

		Text {
			id: headText;
			anchors.left: logo.right;
			anchors.verticalCenter: parent.verticalCenter;
			anchors.leftMargin: 10;
			font.pixelSize: menu.wide ? 42 : 24;
			color: colorTheme.primaryTextColor;
			text: "PureQML";
		}

		onClicked: { this.parent.goHome() }
	}

	Rectangle {
		anchors.top: menu.top;
		anchors.left: menu.left;
		anchors.right: parent.right;
		anchors.bottom: menu.bottom;
		color: colorTheme.primaryColor;
		visible: !menu.wide;

		Behavior on x, width { Animation { duration: 300; } }

	}

	Grid {
		id: menu;
		property bool wide: context.width > 800;
		property bool show: false;
		width: wide ? 450 : 10;
		anchors.top: parent.top;
		anchors.right: parent.right;
		anchors.topMargin: wide ? 0 : parent.height;
		anchors.rightMargin: wide ? 0 : (show ? contentWidth : -contentWidth);

		navigate(text): {
			menu.show = false
			if (text && window.location.hostname)
				this._context.location.pushState(text, text, "?page=" + text)
		}

		MenuItem { horizontal: menu.wide; text: "About"; onClicked: { this.parent.navigate(this.text.toLowerCase()) } }
		MenuItem { horizontal: menu.wide; text: "Download"; onClicked: { this.parent.navigate(this.text.toLowerCase()) } }
		MenuItem { horizontal: menu.wide; text: "Lessons"; onClicked: { this.parent.navigate(this.text.toLowerCase()) } }
		MenuItem { horizontal: menu.wide; text: "Docs"; onClicked: { this.parent.navigate(this.text.toLowerCase()) } }

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

	focusIndex(idx): {
		//if (idx < 0 || idx >= menu.count)
			//return

		//menu.currentIndex = idx
	}

	onCompleted: { this.style('position', 'fixed') }
}
