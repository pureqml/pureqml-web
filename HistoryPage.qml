Item {
	property string url;

	onRecursiveVisibleChanged: {
		if (!value)
			return

		window.scrollTo(0, 0)
	}
}
