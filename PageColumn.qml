Column {
	property string text;
	property string title;
	anchors.left: parent.left;
	anchors.right: parent.right;
	anchors.margins: 10;
	spacing: 10;

	SectionHead { title: parent.title; }

	DescriptionText { text: parent.text; }
}
