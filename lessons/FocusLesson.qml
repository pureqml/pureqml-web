Lesson {
	url: "focus";

	PageColumn {
		title: "Focus";
		text: "";

		KeyValueView {
			shift: 180;
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "focus"; value: "bool property for declaring item focusability"; }
				ListElement { key: "activeFocus"; value: "bool property which becomes 'true' when item is focused and 'false' otherwise"; }
				ListElement { key: "setFocus"; value: "method for focusing on current item"; }
			}
		}
	}


	PageColumn {
		title: "Example";
		text: "Example below shows how focus properties and methods can be used";

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 300;
			exampleHeight: 150;
			sample: FocusExample { }
		}
	}
}
