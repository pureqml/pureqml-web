HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "focus";

	ContentColumn {
		id: focusLessonContent;
		width: parent.width;
		spacing: 30;

		PageColumn {
			title: "";
			text: "";
		}
	}
}
