SiteActivity {
	name: "download";

	HistoryPage {
		height: contentGrid.height + Math.max((context.height - contentGrid.height - 240 - 70), 0);

		Grid {
			id: contentGrid;
			width: 100%;
			horizontalAlignment: Grid.AlignHCenter;

			BigButton {
				anchors.margins: 30;
				icon: "github.png";
				text: "View on github";
				href: "https://github.com/pureqml/";
			}

			BigButton {
				anchors.margins: 30;
				icon: "download.png";
				text: "Download";
				href: "https://github.com/pureqml/qmlcore/archive/master.zip";
			}

			BigButton {
				anchors.margins: 30;
				icon: "win.png";
				text: "Win32 Snapshot";
				href: "https://github.com/pureqml/qmlcore/releases/tag/v1.2.1";
			}
		}
	}
}
