Column {
	property string url: "main";
	width: 100%;

	Column {
		width: 100%;
		property Gradient gradient: Gradient {
			orientation: Gradient.Custom;
			angle: 120;
			GradientStop { position: 0; color: zombieGame.eaten && zombieGame.active ? "#FF6D00" : "#8BC34A";}
			GradientStop { position: 1; color: zombieGame.eaten && zombieGame.active ? "#B71C1C" : "#00BCD4";}
		}

		Behavior on background { Animation { duration: 2000; easing: "linear"; }}

		H1 {
			anchors.topMargin: 100;
			anchors.bottomMargin: 0;
			width: Math.min(100%, 1200) - 40;
			anchors.horizontalCenter: parent.horizontalCenter;
			horizontalAlignment: Text.AlignHCenter;
			verticalAlignment: Text.AlignVCenter;
			color: "white";
			font.pixelSize: 48;
			font.weight: 100;
			text: "<b>PureQML</b><br>QML-inspired declarative JS-framework for web and some other platforms.";

			HoverMixin { cursor: zombieGame.active ? "default" : "pointer"; }
			onClicked: {
				if (!zombieGame.active) {
					brain.health = 100;
					zombieGame.model.clear();
					zombieGame.active = true;
				}
			}
		}

		Repeater {
			id: zombieGame;
			width: 100%;
			height: 100;
			property bool active;
			property bool eaten: brain.health === 0;

			onCountChanged: {
				log("onCountChanged", value)
				if (value === 0)
					this.active = false;
			}

			model: ListModel { }

			Timer {
				id: creator;
				interval: 3000;
				running: zombieGame.active && !zombieGame.eaten;
				repeat: true;

				onTriggered: {
					this.interval = Math.floor(Math.random() * 4000) + 2000
					var s = Math.floor(Math.random() * 4) + 4
					var n = Math.random() > 0.5 ? "zombie2" : "zombie1"
					log ("timer", this.interval, s, n)

					this.parent.model.append({ speed: s, name: n})
				}
			}
			delegate: Zombie {
				active: true;
				walking: parent.eaten || (x < (parent.width - 150));
				transform.rotateY: parent.eaten ? -180 : 0;
				height: 181;  width: 122;
				name: model.name;
				property int speed: model.speed;
				state: walking ? "w" : "a";
				x: -width; z: 5; y: -30;
				property int idx: model.index;

				onXChanged: {
					if ((value < -this.width) && zombieGame.eaten) {
						log("remove zombie", this.idx)
						this.running = false;
						this.parent.model.remove(this.idx);
					}
				}
				onTriggered: {
					if (!this.walking)
						brain.health--;
					else
						this.x += (zombieGame.eaten ? -this.speed : this.speed);
				}
			}

			Image {
				id: brain;
				property int health: 100;
				source: colorTheme.resPath + "/brain.png";
				y: -20;
				x: (health !== 0 && zombieGame.active) ? 100% - width / 2 : 100%;
				Behavior on x { Animation { duration: 600; }}

				Rectangle {
					y: 100%;
					color: parent.health > 50 ? "green" : (parent.health > 20 ? "yellow" : "red");
					height: 4;
					width: parent.health * parent.width / 200;
				}
			}
		}
	}

	Grid {
		width: Math.min(100%, 1200) - 40;
		anchors.horizontalCenter: parent.horizontalCenter;
		spacing: 20;
		horizontalAlignment: Grid.AlignJustify;

 		MainH2 { text: "What is it all about?"; }

		MainP {
			text: "PureQML is a declarative front-end framework aimed to ease complex UI-development (mobile/desktop/SmartTV/etc.).
				It was originally designed in platform-agnostic manner, at least we've tried it very much.
				In many aspects PureQML is very close to original QML by Qt, but it's not 100% compatible
				and we believe better in some aspects.
				The main concepts are the same though, so if you're familiar with original QML,
				you could start right away.";
		}

		StateButton {
			relPath: "gettingstarted";
			text: "GET STARTED";
		}

		MainH2 {
			text: "Approach";
		}

		MainP {
			text: "Generator/compiler is the place where all the magic happens.
			Qml compiler scans source directories for qml file and parses each one.
			Filename starting with uppercase letter considered component, lowercase instantiated.
			Project-wide options stored in .manifest file.
			For Web-projects the result of the compilation is a single javascript file with minimum dependencies
			(modernizr only), ready to use in mobile and desktop environment, accompanied by sample .html
			launcher and flash video player.";
		}

		MainH2 {
			text: "Platforms";
		}

		MainP {
			text: "Web, and web-based platforms like SmartTV have the most mature platform-implementations.
			Even though we have an experimental implementation for Android (using Cordova).
			And hardly working on a native one (platform/pure) paired with Node.js
			and targeted to various embedded platforms like Set-top boxes or Openmoko.
			The last didn't went public yet, but we hope to have it soon.";
		}

		PlatformImage { href: "https://en.wikipedia.org/wiki/HTML5"; img.source: colorTheme.resPath + "/platforms/html5.png";}
		PlatformImage { href: "http://wiki.openmoko.org/wiki/Main_Page"; img.source: colorTheme.resPath + "/platforms/openmoko.png";}
		PlatformImage { href: "http://webostv.developer.lge.com/discover/netcast/overview/"; img.source: colorTheme.resPath + "/platforms/netcast.png";}
		PlatformImage { href: "https://www.opera.com/opera-tv"; img.source: colorTheme.resPath + "/platforms/opera.png";}
		PlatformImage { href: "http://webostv.developer.lge.com/"; img.source: colorTheme.resPath + "/platforms/webos.png";}
		PlatformImage { href: "http://developer.samsung.com/tv"; img.source: colorTheme.resPath + "/platforms/smarttv.png";}
		PlatformImage { href: "https://developer.tizen.org/tizen/tv"; img.source: colorTheme.resPath + "/platforms/tizen.png";}
		PlatformImage { href: "https://www.android.com"; img.source: colorTheme.resPath + "/platforms/android.png";}

		MainH2 {
			text: "Practical use";
		}

		MainP {
			text: "PureQML shows the most of it's power in complex UI-development where declarations,
			mixins, inheritance, and business-logic incapsulation drastically decrease development and maintanence efforts,
			but it is still possible to use the framework even for quite simple websites if you wish.
			Particularly this website employs PureQML. <br>Also, we haven't seen anything comparable in usefulness
			for web-based SmartTV/STB platforms(actually that was the reason to start this project years ago).";
		}

		MainH2 {
			text: "Current state";
		}

		MainP {
			text: "Lets say, the project is in BETA. You can expect that all basic components and features work well,
			many bottlenecks already have been optimized and with some respect
			you can use PureQML in commercial projects (as we are).
			BUT: there is a huge room for improvements, optimizations and other changes to be made, so please bear
			in mind that some interfaces and approaches are subject to change.";
		}

		StateButton {
			href: "https://github.com/pureqml/qmlcore";
			text: "VIEW IT ON GITHUB";
		}

		StateButton {
			relPath: "docs";
			text: "DOCUMENTATION";
		}

		StateButton {
			relPath: "http://pureqml.com/lessons";
			text: "SOME EXAMPLES";
		}

		MainH2 {
			text: "Limitations and Contributions";
		}

		MainP {
			text: "Suddenly, all of us (PureQML-team) are using Linux on daily-basis, so we never tried to run it on
			Windows or MacOS, though it won't be hard to add corresponding tools to get it working.<br> As we mentioned before
			there are many applications of the technology and enormous amount of integration and optimization work to be done.
			So we are very open and keen for any extra help. If you found a bug, if you have a suggestion, if you feel
			you can contribute to the code, you are very very welcome, please get in touch via
			<a href=\"https://github.com/pureqml/qmlcore\">GitHub</a> or by <a href=\"mailto:team@pureqml.com\">team@pureqml.com</a>";
		}
	}
}
