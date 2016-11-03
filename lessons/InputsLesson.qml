HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "inputs";

	LeftMenu { id: leftMenu; onIndexChoosed(idx): { lessonContent.focusItem(idx) } }

	Rectangle {
		id: contentRect;
		height: lessonContent.contentHeight + 30;
		anchors.top: parent.top;
		anchors.left: leftMenu.right;
		anchors.right: parent.right;
		anchors.leftMargin: 10;
		color: colorTheme.panelColor;

		ContentColumn {
			id: lessonContent;
			anchors.top: parent.top;
			anchors.left: parent.left;
			anchors.right: parent.right;
			anchors.margins: 10;
			spacing: 30;

			PageColumn {
				title: "Inputs";
				text: "\"Controls\" library provide simple in use interface for using html5 inputs";
			}

			PageColumn {
				title: "TextInput";
				text: "";
			}

			PageColumn {
				title: "NumberInput";
				text: "";
			}

			PageColumn {
				title: "EmailInput";
				text: "";
			}

			PageColumn {
				title: "DateInput";
				text: "";
			}

			PageColumn {
				title: "TimeInput";
				text: "";
			}

			PageColumn {
				title: "SearchInput";
				text: "";
			}

			PageColumn {
				title: "ColorInput";
				text: "";
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
