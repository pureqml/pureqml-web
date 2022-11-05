Lesson {
	url: "thirdparty";

	PageColumn {
		title: "Resource files";
		text: "To add any files in your project (images, scripts etc) create directory named <i>\"dist\"</i> in your project root and put any file you wanted. All files from <i>\"dist\"</i> directory will be copied to the result build directory after running <i>\"./qmlcore/build\"</i> command.<br>For example if you want to add a local image to your app you can move it to location like that: <i>\"./dist/lessons/image.png\" after build you will see the <i>./lessons/image.png</i> file in the build directory. Now you can use it by the path relative to the dist directory:<i>";

		CodeHighlighter {
			width: contentWidth + 20;
			height: contentHeight + 10;
			font.pixelSize: 18;
			language: "qml";
			code: "Image {\n\tsource: \"./lessons/image.png\";\n}";
		}
	}

	PageColumn {
		title: "Thirdparty libraries";
		text: "To add third-party js-file to your app you need not only add it to the <i>\"dist\"</i> directory you need to add a link in the <i>index.html</i> file. Because all files from the <i>\"dist\"</i> directory are copied only after app building you can override default output files like <i>\"index.html\"</i> by placing them in the <i>\"dist\"</i> diectory too.<br>To simplify index.html customization it was based on jinja templates. To add new library (<i>\"my_favorite_lib.js\"</i> for example) in the <i>\"index.html\"</i> file you need to add it to the head block like that:";

		CodeHighlighter {
			width: contentWidth + 20;
			height: contentHeight + 10;
			font.pixelSize: 18;
			language: "js";
			code: "{% extends \"index.html\" %}\n{% block head %}\n\t&lt;script src=\"my_favorite_lib.js\"&gt;&lt;/script&gt;\n{% endblock %}";
		}
	}

	PageColumn {
		title: "Add js files without changing index.html";
		text: "There is an easy way to add js source code without changing <i>index.html</i> file. You can just place any js file into the <i>./src</i> directory and its code will be added to the compiled qml js file as is.";
	}

	PageColumn {
		title: "Platform specific resources";
		text: "If you want to add some resources only for specific platforms you can create <i>\"dist.PLATFORM_NAME\"</i><br> Where <i>PLATFORM_NAME</i> is desired platform name in lower case:<br>web | webos | tizen | netcast | orsay | androidtv | android | ios<br><br>Some smart TV platforms have specific resources like icons or splashscreens to override it you can place files with corresponded names in specific dist platform directory. Please find the list of the platform specific files below:";

		H3 {
			anchors.topMargin: 50;
			width: 100%;
			font.weight: 300;
			font.pixelSize: 28;
			text: "WebOS";
			color: colorTheme.primaryColor;
		}

		KeyValueView {
			shift: 180;
			anchors.leftMargin: 20;

			model: ListModel {
				ListElement { key: "appinfo.json"; value: "application manifest file. By default its automatically builded from the app .manifest file info"; }
				ListElement { key: "icon.png"; value: "application icon"; }
				ListElement { key: "preview.png"; value: "application preview. It's used only for WebOS < 3.0 SDK versions"; }
				ListElement { key: "splash.png"; value: "application splash screen image"; }
			}
		}

		H3 {
			anchors.topMargin: 50;
			width: 100%;
			font.weight: 300;
			font.pixelSize: 28;
			text: "Tizen";
			color: colorTheme.primaryColor;
		}

		KeyValueView {
			shift: 180;
			anchors.leftMargin: 20;

			model: ListModel {
				ListElement { key: "config.xml"; value: "application manifest file"; }
				ListElement { key: "icon.png"; value: "application icon"; }
			}
		}

		H3 {
			anchors.topMargin: 50;
			width: 100%;
			font.weight: 300;
			font.pixelSize: 28;
			text: "NetCast";
			color: colorTheme.primaryColor;
		}

		KeyValueView {
			shift: 180;
			anchors.leftMargin: 20;

			model: ListModel {
				ListElement { key: "lgconfig.xml"; value: "application manifest file"; }
				ListElement { key: "icon.png"; value: "application icon"; }
			}
		}

		H3 {
			anchors.topMargin: 50;
			width: 100%;
			font.weight: 300;
			font.pixelSize: 28;
			text: "Orsay";
			color: colorTheme.primaryColor;
		}

		KeyValueView {
			shift: 180;
			anchors.leftMargin: 20;

			model: ListModel {
				ListElement { key: "config.xml"; value: "application manifest file"; }
				ListElement { key: "widget.info"; value: "additional application config file"; }
				ListElement { key: "listIcon.png"; value: "one of the app icon with 85x70 size"; }
				ListElement { key: "bigListIcon.png"; value: "one of the app icon with 95x78 size"; }
				ListElement { key: "thumbIcon.png"; value: "one of the app icon with 106x87 size"; }
				ListElement { key: "bigThumbIcon.png"; value: "one of the app icon with 116x95 size"; }
			}
		}

		H3 {
			anchors.topMargin: 50;
			width: 100%;
			font.weight: 300;
			font.pixelSize: 28;
			text: "AndroidTV";
			color: colorTheme.primaryColor;
		}

		KeyValueView {
			shift: 180;
			anchors.leftMargin: 20;

			model: ListModel {
				ListElement { key: "banner.png"; value: "application android TV wide icon"; }
			}
		}
	}

}
