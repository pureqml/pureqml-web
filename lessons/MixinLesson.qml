HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "mixin";

	LeftMenu { id: leftMenu; onIndexChoosed(idx): { content.focusItem(idx) } }

	Rectangle {
		id: contentRect;
		height: content.contentHeight + 30;
		anchors.top: parent.top;
		anchors.left: leftMenu.right;
		anchors.right: parent.right;
		anchors.leftMargin: 10;
		color: colorTheme.panelColor;

		ContentColumn {
			id: content;
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.margins: 10;
			spacing: 30;

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
