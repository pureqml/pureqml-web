Column {
	property string url: "main";
	width: 100%;

	Rectangle {
		width: 100%;
		color: "#8BC34A";
		height: 300;

		H1 {
			width: 100%; height: 100%;
			horizontalAlignment: Text.AlignHCenter;
			verticalAlignment: Text.AlignVCenter;
			color: "white";
			font.pixelSize: 42;
			font.weight: 100;
			text: "<b>PureQML</b><br>Qtless, but cute QML-framework for many platforms.";
		}
	}

	Column {
		anchors.topMargin: 100;
		width: Math.min(100%, 1200) - 40;
		anchors.horizontalCenter: parent.horizontalCenter;

		PageColumn {
			title: "What is PureQML?";
			text: "Whole industry have struggled for many years with UI development. Many solutions were proposed, most of them failed. Complex UI development was dreadful till Qt came out with QML. Declarative, maintainable, quick and exquisite QML became very popular language in many areas. The only problem is Qt. Huge, complicated, inefficient in some aspects. We love Qt, it’s been a gamechanger in the cross-platform development. But one size doesn’t fit all. Sometimes there is no way to get Qt on the platform (e.g. Web browsers, Smart TV, resource critical embedded platforms). That’s how PureQML idea came up.";
		}

		PageColumn {
			title: "Benefits";

			Grid {
				id: gridPlat;
				width: parent.width;
				verticalSpacing: 20;
				horizontalSpacing: 20;

				DescriptionPanel {
					icon: "res/icons/speed.png";
					title: "Quick";
					text: "Simple and flexible declarative way for UI building can save much time.";
				}

				DescriptionPanel {
					icon: "res/icons/gamepad.png";
					title: "Gamedev";
					text: "Can be used for game development. Keyboard, Mouse and Gamepad supporting.";
				}

				DescriptionPanel {
					icon: "res/icons/crossplatform.png";
					title: "Crossplatform";
					text: "One code can be used for other platforms: desktop, mobile phones, TVs.";
				}
			}
		}

		PageColumn {
			title: "Supported platforms";
			text: "You can write web-sites, applications for modern desktop and mobile browsers. You also can deploy your application for smart TV platforms:";

			Grid {
				width: parent.width;
				verticalSpacing: 50;
				horizontalSpacing: 50;

				PlatformItem { icon: "res/platforms/android.png"; text: "Android"; }
				PlatformItem { icon: "res/platforms/netcast.png"; text: "LG NetCast"; }
				PlatformItem { icon: "res/platforms/opera.png"; text: "Opera TV"; }
				PlatformItem { icon: "res/platforms/webos.png"; text: "LG WebOS"; }
				PlatformItem { icon: "res/platforms/smarttv.png"; text: "Samsung SmartTV"; }
				PlatformItem { icon: "res/platforms/tizen.png"; text: "Samsung Tizen"; }
			}
		}

		PageColumn {
			title: "QMLCore";
			text: "QMLCore - QML to JS translator. QMLCore is simple tool we (small team of QML advocates) used for years, simplifying building of html5 UI for both mobile and desktop targets. It was designed with original QML in mind, but it's not 100% compatible and better in some aspects. The main concepts are the same though, so if you're familiar with original QML, you could start right away.";
		}
	}
}