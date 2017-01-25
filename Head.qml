Rectangle {
	height: menu.height;
	width: 100%;
	color: colorTheme.panelColor;
	effects.shadow.y: 1; 
	effects.shadow.color: "#0004"; 
	effects.shadow.blur: 1; 
	effects.shadow.spread: 1;

	Grid {
		id: menu;
		width: Math.min(100%, 1200) - 40;
		x: (parent.width - width) / 2;

		MenuItem { text: "PureQML"; page: ""; }
		MenuItem { text: "Getting started"; page: "gettingstarted"; }
		MenuItem { text: "Download"; page: "download"; }
		MenuItem { text: "Lessons"; page: "lessons"; }
		MenuItem { text: "Docs"; page: "docs"; }

		SearchPanel {
			width: 240;
		}
	}

	onCompleted: { this.style('position', 'fixed') }
}
