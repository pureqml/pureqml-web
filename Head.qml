Rectangle {
	property bool open;
	height: menu.rowsCount > 1 ? (open ? menu.height : 0) + 50 : menu.height;
	width: 100%;
	color: colorTheme.panelColor;
	clip: true;
	effects.shadow.y: 1; 
	effects.shadow.color: "#0004"; 
	effects.shadow.blur: 1; 
	effects.shadow.spread: 1;
	transform.translateZ: 1;
	property bool newWindow;
	Behavior on height { Animation { duration: 400; }}



	Grid {
		id: menu;
		width: Math.min(100%, 1200) - 40;
		y: rowsCount > 1 ? (parent.open ? 50 : -height) : 0;
		x: (parent.width - width) / 2;

		Behavior on y { Animation { duration: 400; }}

		MenuItem { text: "PureQML"; page: ""; }
		MenuItem { text: "Getting started"; page: "gettingstarted"; }
		MenuItem { text: "Download"; page: "download"; }
		MenuItemExt { text: "Lessons"; page: "lessons"; }
		MenuItem { text: "Docs"; page: "docs"; }

		SearchPanel {
			width: 240;
		}
	}

	MaterialIcon {
		width: 100%;
		height: 50;
		anchors.bottom: menu.top;
		horizontalAlignment: Text.AlignHCenter;
		verticalAlignment: Text.AlignVCenter;
		icon: "keyboard_arrow_up";
		size: 36;
		color: "#828282";
		opacity: parent.open;
		visible: menu.rowsCount > 1;
		Behavior on opacity, y { Animation { duration: 400; }}
		HoverMixin { cursor: "pointer"; }
		onClicked: { this.parent.open = false; }
	}


	MaterialIcon {
		width: 100%;
		height: 50;
		anchors.top: menu.bottom;
		horizontalAlignment: Text.AlignHCenter;
		verticalAlignment: Text.AlignVCenter;
		icon: "keyboard_arrow_down";
		size: 36;
		color: "#828282";
		opacity: !parent.open;
		visible: menu.rowsCount > 1;
		Behavior on opacity, y { Animation { duration: 400; }}
		HoverMixin { cursor: "pointer"; }
		onClicked: { this.parent.open = true; }
	}

	onCompleted: { 
		this.style('position', 'fixed')
		this.style('will-change', 'transform')
	}
}
