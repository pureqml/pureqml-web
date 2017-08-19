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

		Behavior on background { Animation { duration: 2000; easing: "linear"; }}

		H1 {
			anchors.topMargin: 100;
			anchors.bottomMargin: 100;
			width: Math.min(100%, 1200) - 40;
			anchors.horizontalCenter: parent.horizontalCenter;
			horizontalAlignment: Text.AlignHCenter;
			verticalAlignment: Text.AlignVCenter;
			color: "white";
			font.pixelSize: 48;
			font.weight: 100;
			text: "<b>PureQML</b><br>QML-inspired declarative JS-framework for web (and other platforms).";
		}
	}

	Grid {
		width: Math.min(100%, 840) - 40;
		anchors.horizontalCenter: parent.horizontalCenter;
		spacing: 20;
		horizontalAlignment: Grid.AlignJustify;

 		MainH2 { text: "What is it all about?"; }

		MainP {
			text: "PureQML is a declarative front-end framework aimed to ease complex UI-development (mobile/desktop/SmartTV/etc.).
				It was originally designed in a platform-agnostic manner.
				The ultimate goal is to have complete compatibility with original QML by Qt, so, applications developed for Qt QML
				can be launched in PureQML environment, but due architectural differences between Qt/HTML5/Android/etc., this approach may cause some performance issues, and
				to avoid that PureQML provides a number of extentions, which allow to achieve a close to native performance.
				In any case, you can enjoy both portability and performance";
		}

		StateButton {
			relPath: "gettingstarted";
			text: "GET STARTED";
		}

		StateButton {
			href: "https://t.me/pureqml";
			color: hover ? "#5682a3" : "transparent";
			border.color: "#5682a3";
			text: "Telegram support channel";
			onClicked: {}
		}

		MainH2 {
			text: "Approach";
		}

		MainP {
			text: "Generator/compiler is the place where all the magic happens.
			Qml compiler scans source directories for qml file and parses each one.
			Filename, starting with uppercase letter considered component, lowercase instantiated.
			Project-wide options stored in .manifest file.
			For Web-projects, the result of the compilation is a single JavaScript file with minimum dependencies
			(modernizr only), ready to use in mobile and desktop environment, accompanied by sample .html
			launcher and flash video player.";
		}

		MainH2 {
			text: "Platforms";
		}

		MainP {
			text: "Web and web-based platforms, like SmartTV, have the most mature platform-implementations.
			But we have an experimental implementation for Android (using Cordova)
			and are working on a native one (platform/pure) paired with Node.js
			and targeted to various embedded platforms, like Set-top boxes or Openmoko.";
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
			text: "PureQML shows most of its power in complex UI-development, where declarations,
			mixins, inheritance, and business-logic incapsulation drastically decrease development and maintenance efforts,
			but it is still possible to use the framework even for simple websites if you wish.
			Particularly, this website employs PureQML. <br>Also, we have seen nothing comparable in usefulness
			for web-based SmartTV/STB platforms(actually that was the reason to start this project years ago).";
		}

		MainH2 {
			text: "Current state";
		}

		MainP {
			text: "Let's say, the project is in BETA. You can expect all basic components and features work well,
			many bottlenecks already have been optimized, and in some respect,
			you can use PureQML in commercial projects (as we are).
			BUT: there is room for improvements, optimizations, and other changes to be made, so please
			remember some interfaces and approaches are subject to change.";
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
			relPath: "lessons";
			text: "SOME EXAMPLES";
		}

		MainH2 {
			text: "Limitations and Contributions";
		}

		MainP {
			text: "At the moment, PureQML can be easily deployed on Linux and MacOS, if you want to have one on Windows you have to install Python
			on your own (it can be a bit tricky for a first time), while special tools for Windows are still in development.
			<br> As we mentioned,
			there are many applications of the technology and an enormous amount of integration and optimization work to be done.
			So, we are very open and keen for any extra help. If you found a bug, if you have a suggestion, if you feel
			you can contribute to the code, you are welcome; please get in touch via
			<a href=\"https://github.com/pureqml/qmlcore\">GitHub</a> or by <a href=\"mailto:team@pureqml.com\">team@pureqml.com</a>";
		}
	}
}