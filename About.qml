HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "about";

	LeftMenu {
		id: leftMenu;
		wide: !contentRect.wide;
		anchors.left: parent.left;
		anchors.leftMargin: !parent.bigScreen ? (parent.width - width - contentRect.width) / 2 - 10 : 0;
	}

	HistoryPageContent {
		id: contentRect;
		anchors.top: leftMenu.top;
		anchors.topMargin: !wide ? leftMenu.height + 10 : 0;
		height: content.contentHeight + 30;

		ContentColumn {
			id: content;
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.margins: 10;
			spacing: 30;

			PageColumn {
				hash: "whatispure";
				title: "What is PureQML?";
				text: "Whole industry have struggled for many years with UI development. Many solutions were proposed, most of them failed. Complex UI development was dreadful till Qt came out with QML. Declarative, maintainable, quick and exquisite QML became very popular language in many areas. The only problem is Qt. Huge, complicated, inefficient in some aspects. We love Qt, it’s been a gamechanger in the cross-platform development. But one size doesn’t fit all. Sometimes there is no way to get Qt on the platform (e.g. Web browsers, Smart TV, resource critical embedded platforms). That’s how PureQML idea came up.";
			}

			PageColumn {
				hash: "benefits";
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
				hash: "platforms";
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
				hash: "qmlcore";
				title: "QMLCore";
				text: "QMLCore - QML to JS translator. QMLCore is simple tool we (small team of QML advocates) used for years, simplifying building of html5 UI for both mobile and desktop targets. It was designed with original QML in mind, but it's not 100% compatible and better in some aspects. The main concepts are the same though, so if you're familiar with original QML, you could start right away.";
			}

			PageColumn {
				hash: "usage";
				title: "Usage";
				text: "QMLCore provides a set of tools written in python2 (sorry about that, lol) Usually you don't need to use them directly. build provides convenient wrapper around them all.";
			}

			PageColumn {
				hash: "prerequisites";
				title: "Prerequisites";
				text: "Any modern python 2.x will go well. Jinja2 is better option for templating in case you want more than qml loader in your html file, but it's not required for small apps.";
			}

			PageColumn {
				hash: "howto";
				title: "Simple how-to";

				Column {
					height: contentHeight;
					width: parent.width - 40;
					x: 20;
					spacing: 5;
					HowtoText { text: "Create project directory"; code: "cd &lt;project-dir&gt;"; }
					HowtoText { text: "Clone qmlcore to it"; code: "git clone git@github.com:pureqml/qmlcore.git"; }
					HowtoText { text: "Run"; code: "./qmlcore --boilerplate"; }
					HowtoText { text: "Look into"; code: "app.qml"; }
					HowtoText { text: "Run"; code: "./qmlcore/build"; }
					HowtoText { text: "Find resulting files in"; code: ".app.web/*";}
				}
			}

			PageColumn {
				hash: "howitworks";
				title: "How it works";
				text: "Qml compiler scans source directories for qml file and parses each one. Filename starting with uppercase letter considered component, lowercase instantiated. Project-wide options stored in .manifest file. Result of the compilation is single javascript file with minimum dependencies (modernizr only), ready to use in mobile and desktop environment, accompanied by sample .html launcher and flash video player.";
			}

			PageColumn {
				hash: "manifest";
				title: "Manifest options";
				text: "Manifest is a collection of project-wide hacks we used to botch various projects. Some of them may or may not be useful.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "apps"; value: "dictionary of application and their templates, { app1: template1, app2: template2, app3: template1 }. Templates are taken from dist/ or platform/*/dist directory"; }
						ListElement { key: "templater"; value: "template engine to use, only 'simple' and 'jinja2' are supported at the moment"; }
						ListElement { key: "web-prefix"; value: "see -p option below, specify css rules prefix"; }
						ListElement { key: "minify"; value: "false/true or compiler name as string, only 'gcc' and 'uglify-js' are supported. google closure compiler requires java to run."; }
						ListElement { key: "platforms"; value: "use additional platform/*/ files, default and only platform is 'web' for now"; }
						ListElement { key: "path"; value: "additional directories to search sources for"; }
					}
				}

				H3 { text: "build tool command line options"; }

				KeyValueView {
					shift: 270;
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "-m, --minify"; value: "minify with default option ('uglify-js')"; }
						ListElement { key: "-k, --keep"; value: "keep original source after minification, useful for debugging minification warnings"; }
						ListElement { key: "-d, --devel"; value: "development mode, keep running and wait for changes, requires inotify module"; }
						ListElement { key: "-p, --web-prefix"; value: "web prefix, removed default CSS rules, adds 'qml-' prefix for them, allowing you to interchange HTML/QML"; }
						ListElement { key: "-u, --update-translation"; value: "update translation files, specified in manifest.languages"; }
						ListElement { key: "--boilerplate"; value: "initialises bare minimum for quicker kick-off in current directory."; }
					}
				}
			}

			PageColumn {
				hash: "localisation";
				title: "Localisation";
				text: "QmlCore uses Qt-approach to localisation. You write code in your default language, then generate/update (build -u) .ts translation files, translate them with qt linguist, and compile project. QmlCore recognizes tr, qsTr, qsTranslate function, as well as QT_TR_NOOP/QT_TRANSLATE_NOOP macros.";
			}

			PageColumn {
				hash: "controls";
				title: "Controls library";
				text: "QmlCore contains bare minimum of platform controls: images, texts, rectangles and model-view-delegate classes. Various controls that might be useful are in separate repository. Just clone it <code><b>git clone git@github.com:pureqml/controls.git</code></b> in your project and that's it!";
			}

			PageColumn {
				hash: "qmldifference";
				title: "QML differences";
				text: "";

				H3 {
					color: colorTheme.primaryColor;
					text: "Grammar"; 
				}

				MainText { text: "Semicolon is required after each statement. This might be a subject to change."; }

				H3 {
					anchors.left: parent.left;
					color: colorTheme.primaryColor;
					font.weight: 300;
					font.pixelSize: 25;
					text: "Focus"; 
				}

				MainText {
					text: "The biggest discrepancy with original QML is focus implementation. We're aiming to have \"always-consistent\" focus everywhere. You have to mark every focus-able component with focus: true; property, and the rest should work without tweaking. We provide several convenient properties to handle focus with ease:";
				}

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "activeFocus"; value: "this item has current focus and got any user input first"; }
						ListElement { key: "focused"; value: "this item has current focus in its parent, but not necessarily focused globally"; }
					}
				}

				H3 {
					anchors.left: parent.left;
					color: colorTheme.primaryColor;
					font.weight: 300;
					font.pixelSize: 25;
					text: "Adding modernizr features"; 
				}

				MainText { text: "Please use the following command to get the custom modernizr build page: head -n2 dist/modernizr-custom.js | tail -n1 or just second line of modernizr-custom.js file"; }
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
