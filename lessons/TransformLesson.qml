Lesson {
	url: "transform";

	PageColumn {
		title: "Transform";
		text: "Each items has a 'transform' property to change its perspective, position, scale, scew and rotation";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "perspective"; value: "perspective transformation"; }
				ListElement { key: "translateX"; value: "x-translate"; }
				ListElement { key: "translateY"; value: "y-translate"; }
				ListElement { key: "translateZ"; value: "z-translate"; }
				ListElement { key: "rotateX"; value: "x-axis rotation"; }
				ListElement { key: "rotateY"; value: "y-axis rotation"; }
				ListElement { key: "rotateZ"; value: "z-axis rotation"; }
				ListElement { key: "rotate"; value: "rotate relative transform point"; }
				ListElement { key: "scaleX"; value: "horizontal scale"; }
				ListElement { key: "scaleY"; value: "vertical scale"; }
				ListElement { key: "skewX"; value: "horizontal skew"; }
				ListElement { key: "skewY"; value: "vertical skew"; }
			}
		}
	}

	PageColumn {
		title: "Rotate";
		text: "Tranform any Item as you want like in example below";

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 250;
			exampleHeight: 250;
			sample: TransformScaleExample { }
		}
	}

	PageColumn {
		title: "Translate";
		text: "You can use 'translate' property to move item just like with 'x' or 'y' properties but 'translate' moving are optimized by browsers";

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: 250;
			exampleHeight: 250;
			sample: TransformScaleExample { }
		}
	}
}
