Item {
	property string url;
	property int minWidth: 200;
	property int leftMenuWidth: wide ? minWidth : 0;
	property int contentWidth: Math.min(context.width - leftMenuWidth - (wide ? 50 : 40), 1000);
	property bool wide: context.width > 600;
	property bool bigScreen: context.width - leftMenuWidth < 1050;

	onRecursiveVisibleChanged: {
		if (!value)
			return

		window.scrollTo(0, 0)
	}
}
