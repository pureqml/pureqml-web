SiteActivity {
	name: "gettingstarted";

	HistoryPage {
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
				text: "QmlCore provides a toolchain written in Python using python-future, allowing it to be run on top of both python versions. Normally you don't need to use them directly. <b>build</b> provides a convenient wrapper around them all.";
			}

			HashPageColumn {
				hash: "prerequisites";
				title: "Prerequisites";
				text: "Any modern Python (2 or 3) will go well. Jinja2 is a different option for templating in case you want more than QML loader in your HTML file, while it's not required for small apps.";
			}

			HashPageColumn {
				hash: "howto";
				title: "Simple how-to";

				Column {
					x: 20;
					height: contentHeight;
					width: parent.width - 40;
					spacing: 5;

					HowtoText { text: "Create project directory"; code: "cd &lt;project-dir&gt;"; }
					HowtoText { text: "Clone qmlcore to it"; code: "git clone https://github.com/pureqml/qmlcore.git"; }
					HowtoText { text: "Run"; code: "./qmlcore/build --boilerplate"; }
					HowtoText { text: "Look into"; code: "src/app.qml"; }
					HowtoText { text: "Run"; code: "./qmlcore/build"; }
					HowtoText { text: "Find resulting files in"; code: "build.web/*";}
				}
			}

			HashPageColumn {
				hash: "howitworks";
				title: "How it works";
				text: "Qml compiler scans source directories for qml file and parses each one. Filename, starting with uppercase letter considered component, lowercase instantiated. Project-wide options stored in .manifest file. Result of the compilation is a single JavaScript file with minimum dependencies (modernizr only), ready to use in mobile and desktop environment, accompanied by sample .html launcher and flash video player.";
			}

			HashPageColumn {
				hash: "manifest";
				title: "Manifest options";
				text: "Manifest is a collection of project-wide hacks we used to botch various projects. Some may be useful.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "apps"; value: "dictionary of application and their templates, { app1: template1, app2: template2, app3: template1 }. Templates are taken from dist/ or platform/*/dist directory"; }
						ListElement { key: "templater"; value: "template engine to use, only 'simple' and 'jinja2' are supported at the moment"; }
						ListElement { key: "web-prefix"; value: "see -p option below, specify css rules prefix"; }
						ListElement { key: "minify"; value: "false/true or compiler name as string, only 'gcc' and 'uglify-js' are supported. Google closure compiler requires java to run."; }
						ListElement { key: "platforms"; value: "use additional platform/*/ files, default and only platform is 'web' for now."; }
						ListElement { key: "sources"; value: "directories to search sources for"; }
						ListElement {
							key: "properties";
							value: "custom app properties object. Create any property within and use it in runtime js code. For example: <i>\"properties\": { \"foo\": \"bar\" }</i> - property 'foo' can be accessed in code this way: <i>var foo = $manifest$foo$</i><br>Some properties are reserved by qmlcore and qmlcore-tv:<ul><li><b>title</b> - project title that is used as app name for smartTV apps or web page title</li><li><b>author</b> - project author info object that is passed in smartTV apps configuration files. This property contains this fileds: name, email, organization, site</li><li><b>resolutionWidth, resolutionHeight</b> - app screen size properties it's usefull for smartTV apps with not default OSD size. webOS FHD apps For instance <b>style.font</b> - app default font properties such as family or size</li><li><b>iconColor</b> - app icon color (used only for webOS platform)</li><li><b>version</b> - app version</li><li><b>domain</b> - app donmain name (used only for android applications)</li><li><b>hostname</b> - app host name (used only for android applications)</li></ul>";
						}
					}
				}

				MainP {
					text: "build tool command line options";
					horizontalAlignment: Text.AlignLeft;
				}

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
				text: "QmlCore uses Qt-approach to localisation. You write code in your default language, then generate/update (build -u) .ts translation files, translate them with qt linguist, and compile project. QmlCore recognizes tr, qsTr, qsTranslate function, and QT_TR_NOOP/QT_TRANSLATE_NOOP macros.";
			}

			HashPageColumn {
				hash: "controls";
				title: "Controls library";
				text: "QmlCore contains bare minimum platform controls: images, texts, rectangles and model-view-delegate classes. Various controls that might be useful are in separate repository. Just clone it <code><b>git clone https://github.com/pureqml/controls.git</code></b> in your project, and that's it!";
			}

			HashPageColumn {
				hash: "qmldifference";
				title: "QML differences";
				text: "";

				H3 {
					color: colorTheme.primaryColor;
					width: 100%;
					text: "Grammar";
				}

				MainP {
					horizontalAlignment: Text.AlignLeft;
					text: "Grammar: Semicolon is required after each statement. This might be subject to change.";
				}

				H3 {
					width: 100%;
					color: colorTheme.primaryColor;
					text: "Focus";
				}

				MainP {
					horizontalAlignment: Text.AlignLeft;
					text: "The biggest discrepancy with original QML is focus implementation. We're aiming to have \"always-consistent\" focus everywhere. Mark every focus-able component with focus: true; property, and the rest should work without tweaking. We provide several convenient properties to handle focus with ease:";
				}

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "activeFocus"; value: "this item has current focus and any user input first."; }
						ListElement { key: "focused"; value: "this item has current focus in its parent, but not necessarily focused globally."; }
					}
				}

				H3 {
					width: 100%;
					color: colorTheme.primaryColor;
					text: "Adding modernizr features";
				}

				MainP {
					horizontalAlignment: Text.AlignLeft;
					text: "Please use the following command to get the custom modernizr build page: head -n2 dist/modernizr-custom.js | tail -n1 or just second line of modernizr-custom.js file.";
				}
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
