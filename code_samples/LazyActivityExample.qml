ActivityManager {
	anchors.fill: context;

	//@using { code_samples.MainActivity }
	LazyActivity { name: "main"; component: "code_samples.MainActivity"; }
	//@using { code_samples.NextActivity }
	LazyActivity { name: "next"; component: "code_samples.NextActivity"; }

	onCompleted: { this.push("main") }
}
