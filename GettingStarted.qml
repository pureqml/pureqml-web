HistoryPage {
	url: "gettingstarted";
	height: contentCol.contentHeight;

	LeftMenu {
		id: leftMenu;
	}

	ContentColumn {
		id: contentCol;
		spacing: 30;

		HashPageColumn {
			hash: "usage";
			title: "Usage";
			text: "QMLCore provides a set of tools written in python2 (sorry about that, lol) Usually you don't need to use them directly. build provides convenient wrapper around them all.";
		}

		HashPageColumn {
			hash: "prerequisites";
			title: "Prerequisites";
			text: "Any modern python 2.x will go well. Jinja2 is better option for templating in case you want more than qml loader in your html file, but it's not required for small apps.";
		}

		HashPageColumn {
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

		HashPageColumn {
			hash: "howitworks";
			title: "How it works";
			text: "Qml compiler scans source directories for qml file and parses each one. Filename starting with uppercase letter considered component, lowercase instantiated. Project-wide options stored in .manifest file. Result of the compilation is single javascript file with minimum dependencies (modernizr only), ready to use in mobile and desktop environment, accompanied by sample .html launcher and flash video player.";
		}

		HashPageColumn {
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

		HashPageColumn {
			hash: "localisation";
			title: "Localisation";
			text: "QmlCore uses Qt-approach to localisation. You write code in your default language, then generate/update (build -u) .ts translation files, translate them with qt linguist, and compile project. QmlCore recognizes tr, qsTr, qsTranslate function, as well as QT_TR_NOOP/QT_TRANSLATE_NOOP macros.";
		}

		HashPageColumn {
			hash: "controls";
			title: "Controls library";
			text: "QmlCore contains bare minimum of platform controls: images, texts, rectangles and model-view-delegate classes. Various controls that might be useful are in separate repository. Just clone it <code><b>git clone git@github.com:pureqml/controls.git</code></b> in your project and that's it!";
		}

		HashPageColumn {
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
