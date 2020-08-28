SiteActivity {
	name: "showcases";

	Column {
		width: Math.min(100%, 840) - 40;
		height: contentHeight + 50;
		anchors.topMargin: 40;
		anchors.horizontalCenter: parent.horizontalCenter;

		MainH2 { text: "Some of notable projects built with PureQML"; }

		MainP {
			text: "Though not limited the framework works at full throttle with various kinds of TV applications. The following are examples of projects that have been built using PureQML and went fully live to a massive audience.";
		}

		MainH2 { text: "Amediateka"; }
		ShowcaseImage { source: "res/showcases/amedia.jpg"; }

		MainH2 { text: "START"; }
		ShowcaseImage { source: "res/showcases/start.jpg"; }

		MainH2 { text: "PLINQ"; }
		ShowcaseImage { source: "res/showcases/plinq.png"; }

		MainH2 { text: "Tvigle"; }
		ShowcaseImage { source: "res/showcases/tvigle.jpg"; }
	}
}
