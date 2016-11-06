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
				text: "\"Controls\" library provide simple in use interface for using html5 inputs. All inputs have common properties:";

				KeyValueView {
					shift: 180;
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "font"; value: "object property for font customizing"; }
						ListElement { key: "border"; value: "object property for border customizing"; }
						ListElement { key: "color"; value: "color property for font color setting"; }
						ListElement { key: "backgroundColor"; value: "color property for background color setting"; }
					}
				}
			}

			PageColumn {
				title: "TextInput";
				text: "Use this controls for getting input text from user. Color, font and size can be customized via declarative properties.";

				KeyValueView {
					shift: 180;
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "text"; value: "string property wich stores input text value"; }
						ListElement { key: "passwordMode"; value: "bool property for setting password mode (to hide input charachters)"; }
					}
				}
			}

			PageColumn {
				title: "NumberInput";
				text: "NumberInput is usefull for getting integer value from fixed range.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "max"; value: "integer property wich set maximum number value"; }
						ListElement { key: "min"; value: "integer property wich set minimum number value"; }
						ListElement { key: "step"; value: "integer property wich set value changing step"; }
						ListElement { key: "value"; value: "integer property wich stores current number value"; }
					}
				}
			}

			PageColumn {
				title: "EmailInput";
				text: "This input behaves like an TextInput but has one more field for checking input format according e-mail address convention";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "correct"; value: "bool property wich is false then input is not correct e-mail address and true otherwise"; }
					}
				}
			}

			PageColumn {
				title: "DateInput";
				text: "Input for setting date.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "max"; value: "string property wich set maximum date value"; }
						ListElement { key: "min"; value: "string property wich set minimum date value"; }
						ListElement { key: "value"; value: "string property wich stores current date value"; }
					}
				}
			}

			PageColumn {
				title: "TimeInput";
				text: "Input for setting text.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "max"; value: "string property wich set maximum time value"; }
						ListElement { key: "min"; value: "string property wich set minimum time value"; }
						ListElement { key: "value"; value: "string property wich stores current time value"; }
					}
				}
			}

			PageColumn {
				title: "SearchInput";
				text: "Text input for searching purpose.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "value"; value: "string property wich stores current search input value"; }
					}
				}
			}

			PageColumn {
				title: "ColorInput";
				text: "Color chooser input.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "value"; value: "color property wich stores selected color value"; }
					}
				}
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
