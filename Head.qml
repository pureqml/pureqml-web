Rectangle {
	signal goHome;
	property alias count: menu.count;
	height: 100;
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
			font.pixelSize: 42;
			color: colorTheme.primaryTextColor;
			text: "PureQML";
		}

		onClicked: { this.parent.goHome() }
	}

	ListView {
		id: menu;
		width: contentWidth;
		height: parent.height;
		anchors.right: parent.right;
		anchors.bottom: parent.bottom;
		contentFollowsCurrentItem: false;
		orientation: ListView.Horizontal;
		focus: true;
		model: ListModel {
			ListElement { text: "About"; url: "about"; }
			ListElement { text: "Download"; url: "download"; }
			ListElement { text: "Lessons"; url: "lessons"; }
			ListElement { text: "Docs"; url: "docs"; }
		}
		delegate: WebItem {
			property int index: model.index;
			width: menuItemText.paintedWidth + 40;
			height: parent.height;
			color: hover ? "#0003" : "#0000";
			z: parent.z + 1;

			Text {
				id: menuItemText;
				anchors.centerIn: parent;
				horizontalAlignment: Text.AlignHCenter;
				text: model.text;
				font.pointSize: 15;
				color: colorTheme.primaryTextColor;
				opacity: parent.hover || parent.activeFocus ? 1.0 : 0.8;

				Behavior on opacity { Animation { duration: 300; } }
			}

			Rectangle {
				height: 2;
				width: parent.activeFocus ? menuItemText.width : 0;
				anchors.top: menuItemText.bottom;
				anchors.horizontalCenter: menuItemText.horizontalCenter;
				anchors.topMargin: 5;
				color: colorTheme.primaryTextColor;
				opacity: menuItemText.opacity;

				Behavior on x, width, opacity { Animation { duration: 300; } }
			}

			onClicked: { this.parent.currentIndex = this.index }

			Behavior on color { ColorAnimation { duration: 300; } }
		}

		onCurrentIndexChanged: {
			var url = this.model.get(value).url
			if (url && window.location.hostname) {
				this._context.location.pushState(url, url, "?page=" + url)
			}
		}
	}

	focusIndex(idx): {
		if (idx < 0 || idx >= menu.count)
			return

		menu.currentIndex = idx
	}

	onCompleted: { this.style('position', 'fixed') }
}
