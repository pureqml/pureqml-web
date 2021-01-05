Lesson {
	url: "animation";

	PageColumn {
		title: "Animation";
		text: "You can add animation for your item properties. Animation object properties:";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "delay"; value: "delay in ms"; }
				ListElement { key: "duration"; value: "duration in ms"; }
				ListElement { key: "cssTransition"; value: "use css transition if possible ('true' by default)"; }
				ListElement { key: "running"; value: "currently running"; }
				ListElement { key: "easing"; value: "easing function ('ease' by default)"; }
				ListElement { key: "target"; value: "target object"; }
			}
		}
	}

	PageColumn {
		text: "To add animation for custom property add 'Behavior' in desired item:";

		CodeHighlighter {
			width: parent.width - 30;
			font.pixelSize: 18;
			language: "qml";
			code: "Behavior on PROPERTY_NAME { Animation { } }";
		}

		MainP {
			text: "'PROPERTY_NAME' is property to animate";
			horizontalAlignment: Text.AlignLeft;
		}

		MainP {
			text: "You can see simple animation usage example below. Click on red rectangle to see 'x' position property animation:";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 300;
			exampleHeight: 120;
			sample: AnimationExample { }
		}
	}

	PageColumn {
		title: "Animation Easing";
		text: "You can specify animation easing by setting corresponding property. It's a string property which supports CSS transition-timing-function: ease, ease-in, linear etc. There is 3 different easing modes below:";

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 300;
			exampleHeight: 360;
			sample: AnimationEasingExample { }
		}
	}

	PageColumn {
		title: "Transform poroperties animation";
		text: "If you wont to animate any transform property you can pass 'transform' property name for item's 'Behavior'. There is 'transform.translateX' animation example below:";

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 300;
			exampleHeight: 360;
			sample: AnimationTransformExample { }
		}
	}
}
