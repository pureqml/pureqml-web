Lesson {
	url: "sprite";

	PageColumn {
		title: "Sprites";
		text: "There is very intersting item in controls it's called AnimatedSprite. This item helps to work with sprite animation. It works with image which contains all frames in it see example below:";

		Image {
			width: parent.width;
			fillMode: Image.PreserveAspectFit;
			source: "res/lessons/bug_sprite.png";
		}

		MainP {
			text: "Image above contain 4 frames of bug moving, we can animate it by adjusting AnimatedSprite properties below:";
			horizontalAlignment: Text.AlignLeft;
		}

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "frameCount"; value: "frames in duration value"; }
				ListElement { key: "currentFrame"; value: "displayed frame index"; }
				ListElement { key: "duration"; value: "animation time interval in milliseconds"; }
				ListElement { key: "repeat"; value: "repeat animation flag"; }
				ListElement { key: "running"; value: "animation is running flag"; }
			}
		}

		MainP {
			text: "To simplify properties adjusting process we make very simple tool for it you can try it by clicking the link below:";
			horizontalAlignment: Text.AlignLeft;
		}

		WebLink {
			width: linkText.paintedWidth;
			height: linkText.paintedHeight;
			href: "http://krvch.com/spritest/";

			Text {
				id: linkText;
				anchors.centerIn: parent;
				font.pointSize: 16;
				font.family: "Roboto Slab";
				color: parent.hover ? "#AED581" : "#666666";
				text: "Sprite Test Tool";
			}
		}

		MainP {
			text: "Now we can customize our animation and make our bug run";
			horizontalAlignment: Text.AlignLeft;
		}

		CodeExample {
			codeWidth: parent.width - 20;
			exampleWidth: parent.width;
			exampleHeight: 600;
			sample: SpriteExample { }
		}
	}
}
