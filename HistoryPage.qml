Item {
	property string url;
	property int leftMenuWidth: 200;
	property int contentWidth: Math.min(context.width - leftMenuWidth - 50, 1000);
	property bool bigScreen: context.width - leftMenuWidth < 1050;

	onRecursiveVisibleChanged: {
		if (!value)
			return

		window.scrollTo(0, 0)
	}
}
