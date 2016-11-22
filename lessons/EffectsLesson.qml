HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "effects";

	LeftMenu { id: leftMenu; anchors.right: contentRect.left; onIndexChoosed(idx): { content.focusItem(idx) } }

	HistoryPageContent {
		id: contentRect;
		height: content.contentHeight + 30;

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
