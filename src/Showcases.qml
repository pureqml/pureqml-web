SiteActivity {
	name: "showcases";

	Column {
		width: Math.min(100%, 840) - 40;
		anchors.topMargin: 40;
		anchors.horizontalCenter: parent.horizontalCenter;


		MainH2 { text: "Some of notable projects built with PureQML"; }

		MainP {
			text: "Though not limited the framework works at full throttle with various kinds of TV applications. The following are examples of projects that have been built using PureQML and went fully live to a massive audience.";
		}

		WebItem {
			anchors.topMargin: 20;
			width: 100%;
			height: width * 9 / 16;
			clip: true;
			radius: 20;

			Image {
				width: 100% + (parent.hover ? 32 : 0);
				height: 100% + (parent.hover ? 18 : 0);
				x: parent.hover ? -16 : 0;
				y: parent.hover ? -9 : 0;
				source: "res/showcases/ex1.jpg";

				Behavior on x, y, width, height { Animation { duration: 1500; } } 
			}
		}

	}
}
