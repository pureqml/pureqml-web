Item {
		 Column {
			anchors.top: parent.top;
			anchors.topMargin: -10;
			anchors.left: parent.left;
			anchors.right: parent.right;
			spacing: 10;

			SectionHead { title: "What is PureQML?"; }

			Text {
				width: context.width > 800 ? 700 : parent.width - 20;
				anchors.horizontalCenter: parent.horizontalCenter;
				color: colorTheme.textColor;
				font.weight: 300;
				font.pixelSize: 23;
				wrapMode: Text.WordWrap;
				text: "Whole industry have struggled for many years with UI development. Many solutions were proposed, most of them failed. Complex UI development was dreadful till Qt came out with QML. Declarative, maintainable, quick and exquisite QML became very popular language in many areas. The only problem is Qt. Huge, complicated, inefficient in some aspects. We love Qt, it’s been a gamechanger in the cross-platform development. But one size doesn’t fit all. Sometimes there is no way to get Qt on the platform (e.g. Web browsers, Smart TV, resource critical embedded platforms). That’s how PureQML idea came up. There are three ways how PureQML may be integrated into a system: PureQML Embedded, PureQML WebEngine and PureQML C++ translator.";
			}
		}

}
