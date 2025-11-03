Lesson {
	url: "androidnative";

	PageColumn {
		title: "Build";
		text: "PureQML can be compiled into native Android code and ported to Android devices. To build the Android project:";

		CodeHighlighter {
			width: contentWidth > parent.width - 30 ? parent.width - 30 : contentWidth;
			font.pixelSize: 18;
			language: "bash";
			code: "./qmlcore/platform/pure.femto/build-android-native.sh";
		}

		MainP {
			anchors.topMargin: 30s;
			horizontalAlignment: Text.AlignLeft;
			text: "The result apk files will be stored in <i>build.pure.femto.app/app/app/build/outputs/apk</i> direcotory";
		}
	}

	PageColumn {
		title: "Requirements";
		text: "To build the Android project You have to specify application domain/package in the <i>.manifest</i> file in the <i>properties.domain</i> section:";

		CodeHighlighter {
			width: contentWidth > parent.width - 30 ? parent.width - 30 : contentWidth;
			font.pixelSize: 18;
			language: "bash";
			code: "{\n\t\"properties\": {\n\t\t\"domain\": \"my.app.domain\",\n\t\t...\n\t}\n}";
		}
	}

	PageColumn {
		title: "Android device methods";
		text: "These methods are permitted only on Android devices and are not reliable on other platforms";

		KeyValueView {
			height: 80s;
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "keepScreenOn"; value: "Keep the application screen on or off according to the incoming boolean argument value"; }
			}
		}

		CodeHighlighter {
			width: contentWidth > parent.width - 30 ? parent.width - 30 : contentWidth;
			font.pixelSize: 18;
			language: "qml";
			code: "Item {\n\tDevice { id: device; }\n\n\tonCompleted: {\n\t\tdevice.keepScreenOn(true);\n\t}\n}";
		}

		KeyValueView {
			anchors.topMargin: 60s;
			height: 80s;
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "lockOrientaion"; value: "Lock the screen orientation to a fixed mode: 'portrait' or 'landscape'. Pass the corresponding string argument <i>portrait</i> or <i>landscape</i> to this method."; }
			}
		}

		CodeHighlighter {
			width: contentWidth > parent.width - 30 ? parent.width - 30 : contentWidth;
			font.pixelSize: 18;
			language: "qml";
			code: "Item {\n\tDevice { id: device; }\n\n\tonCompleted: {\n\t\tdevice.lockOrientaion(\"landscape\");\n\t}\n}";
		}
	}

	PageColumn {
		title: "Android device methods";
		text: "If you need to add custom intents to your project's resulting <i>AndroidManifest.xml</i> file, place the <i>AndroidManifestIntent.xml</i> file into the <i>./dist.platform.pure.femto/</i> directory. The entire content of the <i>AndroidManifestIntent.xml</i> file will be added to the resulting manifest file";
	}
}
