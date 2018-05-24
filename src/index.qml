ActivityManager {
	property Object state: context.location.state;
	anchors.fill: context;

	Head { z: 2; }

	ColorTheme { id: colorTheme; }

	//@using { src.Main }
	LazyActivity { name: "main"; component: "src.Main"; }
	//@using { src.GettingStarted }
	LazyActivity { name: "gettingstarted"; component: "src.GettingStarted"; }
	//@using { src.Download }
	LazyActivity { name: "download"; component: "src.Download"; }
	//@using { src.Lessons }
	LazyActivity { name: "lessons"; component: "src.Lessons"; }
	//@using { src.Docs }
	LazyActivity { name: "docs"; component: "src.Docs"; }

	onCompleted: { this.push("main") }
}
