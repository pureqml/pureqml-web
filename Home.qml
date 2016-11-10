HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "home";

	Rectangle {
		id: contentRect;
		height: content.contentHeight + 30;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		color: colorTheme.panelColor;

		Column {
			id: content;
			anchors.top: parent.top;
			anchors.topMargin: 10;
			anchors.left: parent.left;
			anchors.right: parent.right;
			spacing: 10;

			Text {
				anchors.horizontalCenter: parent.horizontalCenter;
				color: colorTheme.primaryColor;
				font.weight: 300;
				font.pixelSize: 32;
				text: "What is PureQML?";
			}

			Text {
				width: context.width > 800 ? 700 : parent.width - 20;
				anchors.horizontalCenter: parent.horizontalCenter;
				color: colorTheme.textColor;
				font.weight: 300;
				font.pixelSize: 23;
				wrapMode: Text.WordWrap;
				text: "Whole industry have struggled for many years with UI development. Many solutions were proposed, most of them failed. Complex UI development was dreadful till Qt came out with QML. Declarative, maintainable, quick and exquisite QML became very popular language in many areas. The only problem is Qt. Huge, complicated, inefficient in some aspects. We love Qt, it’s been a gamechanger in the cross-platform development. But one size doesn’t fit all. Sometimes there is no way to get Qt on the platform (e.g. Web browsers, Smart TV, resource critical embedded platforms). That’s how PureQML idea came up.";
			}

			Grid {
				width: parent.width > 300 ? 660 : 200;
				anchors.horizontalCenter: parent.horizontalCenter;
				spacing: 20;

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

				DescriptionPanel {
					icon: "res/icons/speed.png";
					title: "Quick";
					text: "Simple and flexible declarative way for UI building can save much time.";
				}
			}

			Text {
				anchors.horizontalCenter: parent.horizontalCenter;
				color: colorTheme.primaryColor;
				font.weight: 300;
				font.pixelSize: 32;
				text: "Supported platforms";
			}

			ListView {
				width: contentWidth;
				height: 100;
				anchors.horizontalCenter: parent.horizontalCenter;
				orientation: RollerView.Horizontal;
				spacing: 20;
				model: ListModel {
					ListElement { icon: "res/platforms/netcast.png"; text: "LG NetCast"; }
					ListElement { icon: "res/platforms/opera.png"; text: "Opera TV"; }
					ListElement { icon: "res/platforms/webos.png"; text: "LG WebOS"; }
					ListElement { icon: "res/platforms/smarttv.png"; text: "Samsung SmartTV"; }
					ListElement { icon: "res/platforms/tizen.png"; text: "Samsung Tizen"; }
				}
				delegate: Item {
					property Mixin hoverMixin: HoverMixin {}
					property alias hover: hoverMixin.value;
					width: 100;
					height: 100;

					Image {
						anchors.fill: parent;
						source: model.icon;
					}

					Rectangle {
						width: parent.hover ? 180 : 0;
						height: parent.hover ? 50 : 0;
						anchors.left: parent.left;
						anchors.bottom: parent.bottom;
						color: "#424242ee";
						z: parent.z + 1;
						clip: true;

						Text {
							anchors.top: parent.top;
							anchors.left: parent.left;
							anchors.topMargin: 12;
							anchors.leftMargin: 10;
							color: "#eee";
							text: model.text;
							font.pixelSize: 18;
						}

						Behavior on y, height, width { Animation { duration: 300; } }
					}
				}
			}
		}
	}
}
