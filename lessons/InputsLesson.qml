HistoryPage {
	height: contentRect.height;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	url: "inputs";

	LeftMenu {
		id: leftMenu;
		wide: !contentRect.wide;
		anchors.left: parent.left;
		anchors.leftMargin: !parent.bigScreen ? (parent.width - width - contentRect.width) / 2 - 10 : 0;

		onIndexChoosed(idx): { content.focusItem(idx) }
	}

	HistoryPageContent {
		id: contentRect;
		anchors.top: leftMenu.top;
		anchors.topMargin: !wide ? leftMenu.height + 10 : 0;
		height: content.contentHeight + 30;

		ContentColumn {
			id: content;
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
						ListElement { key: "paddings"; value: "paddings mixin object adjusts text paddings inside the input"; }
						ListElement { key: "placeholder"; value: "inner text placeholder"; }
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

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 200;
					exampleHeight: 200;
					sample: TextInputExample { }
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

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 100;
					exampleHeight: 100;
					sample: NumberInputExample { }
				}
			}

			PageColumn {
				title: "EmailInput";
				text: "This input behaves like an TextInput but has one more field for checking input format according e-mail address convention";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "correct"; value: "bool property wich is false then input is not the correct e-mail address and true otherwise"; }
					}
				}

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 200;
					exampleHeight: 200;
					sample: EmailInputExample { }
				}
			}

			PageColumn {
				title: "DateInput";
				text: "Input for setting date.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "max"; value: "string property wich set maximal date value"; }
						ListElement { key: "min"; value: "string property wich set minimal date value"; }
						ListElement { key: "value"; value: "string property wich stores current date value"; }
					}
				}

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 200;
					exampleHeight: 200;
					sample: DateInputExample { }
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

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 200;
					exampleHeight: 200;
					sample: TimeInputExample { }
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

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 200;
					exampleHeight: 200;
					sample: SearchInputExample { }
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

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 200;
					exampleHeight: 200;
					sample: ColorInputExample { }
				}
			}

			PageColumn {
				title: "RangeInput";
				text: "Range input item.";

				KeyValueView {
					anchors.leftMargin: 20;
					model: ListModel {
						ListElement { key: "max"; value: "integer property wich set maximum range value"; }
						ListElement { key: "min"; value: "integer property wich set minimum range value"; }
						ListElement { key: "step"; value: "adjusts value changing step"; }
						ListElement { key: "value"; value: "integer property wich stores current range value"; }
						ListElement { key: "orientation"; value: "enum value for setting orientation can be 'Horizontal' or 'Vertical'"; }
					}
				}

				CodeExample {
					codeWidth: parent.width - 20;
					exampleWidth: 200;
					exampleHeight: 200;
					sample: RangeInputExample { }
				}
			}

			onFillMenu(data): { leftMenu.fillModel(data) }
		}
	}
}
