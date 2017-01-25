Column {
	property string url: "main";
	width: 100%;

	Column {
		width: 100%;
		property Gradient gradient: Gradient {
			orientation: Gradient.Custom;
			angle: 120;
			GradientStop { position: 0; color: "#8BC34A";}
			GradientStop { position: 1; color: "#00BCD4";}
		}

		H1 {
			anchors.margins: 100;
			width: 400;//Math.min(100%, 1200) - 40;
			anchors.horizontalCenter: parent.horizontalCenter;
			horizontalAlignment: Text.AlignHCenter;
			verticalAlignment: Text.AlignVCenter;
			color: "white";
			font.pixelSize: 48;
			font.weight: 100;
			text: "<b>PureQML</b><br>Qtless declarative QML-framework for web and some other platforms.";
		}
	}

	Column {
		width: Math.min(100%, 1200) - 40;
		anchors.horizontalCenter: parent.horizontalCenter;

		HashPageColumn {
			title: "What is PureQML?";
			text: "Whole industry have struggled for many years with UI development. Many solutions were proposed, most of them failed. Complex UI development was dreadful till Qt came out with QML. Declarative, maintainable, quick and exquisite QML became very popular language in many areas. The only problem is Qt. Huge, complicated, inefficient in some aspects. We love Qt, it’s been a gamechanger in the cross-platform development. But one size doesn’t fit all. Sometimes there is no way to get Qt on the platform (e.g. Web browsers, Smart TV, resource critical embedded platforms). That’s how PureQML idea came up.";
		}

		HashPageColumn {
			title: "Benefits";

			Grid {
				id: gridPlat;
				width: parent.width;
				verticalSpacing: 20;
				horizontalSpacing: 20;

				DescriptionPanel {
					icon: "http://pureqml.com/res/icons/speed.png";
					title: "Quick";
					text: "Simple and flexible declarative way for UI building can save much time.";
				}

				DescriptionPanel {
					icon: "http://pureqml.com/res/icons/gamepad.png";
					title: "Gamedev";
					text: "Can be used for game development. Keyboard, Mouse and Gamepad supporting.";
				}

				DescriptionPanel {
					icon: "http://pureqml.com/res/icons/crossplatform.png";
					title: "Crossplatform";
					text: "One code can be used for other platforms: desktop, mobile phones, TVs.";
				}
			}
		}

		HashPageColumn {
			title: "Supported platforms";
			text: "You can write web-sites, applications for modern desktop and mobile browsers. You also can deploy your application for smart TV platforms:";

			Grid {
				width: parent.width;
				verticalSpacing: 50;
				horizontalSpacing: 50;

				PlatformItem { icon: "http://pureqml.com/res/platforms/android.png"; text: "Android"; }
				PlatformItem { icon: "http://pureqml.com/res/platforms/netcast.png"; text: "LG NetCast"; }
				PlatformItem { icon: "http://pureqml.com/res/platforms/opera.png"; text: "Opera TV"; }
				PlatformItem { icon: "http://pureqml.com/res/platforms/webos.png"; text: "LG WebOS"; }
				PlatformItem { icon: "http://pureqml.com/res/platforms/smarttv.png"; text: "Samsung SmartTV"; }
				PlatformItem { icon: "http://pureqml.com/res/platforms/tizen.png"; text: "Samsung Tizen"; }
			}
		}

		HashPageColumn {
			title: "QMLCore";
			text: "QMLCore - QML to JS translator. QMLCore is simple tool we (small team of QML advocates) used for years, simplifying building of html5 UI for both mobile and desktop targets. It was designed with original QML in mind, but it's not 100% compatible and better in some aspects. The main concepts are the same though, so if you're familiar with original QML, you could start right away.";
		}
	}
}