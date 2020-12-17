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
		MainP {
			text: "Amediateka is a premium VOD service, nicknamed as home of HBO, for very demanding users.";
		}
		ShowcaseImage { source: colorTheme.resPath + "/showcases/amedia.jpg"; }

		MainH2 { text: "START"; }
		MainP {
			text: "START - ambitious subscription video service, focused on Russian content for local and international audience.";
		}
		ShowcaseImage { source: colorTheme.resPath + "/showcases/start.jpg"; }

		MainH2 { text: "Tvigle"; }
		MainP {
			text: "Tvigle is one of the old-timers of ad sponsored video streaming services, recently revamped their technological stack with PureQML.";
		}
		ShowcaseImage { source: colorTheme.resPath + "/showcases/tvigle.jpg"; }
	}
}
