Item {
	width: 500;
	height: 500;

	Grid {
		width: 500;
		height: 800;
		spacing: 20;
		flow: Grid.FlowTopToBottom;

		Rectangle {
			width: 200;
			height: 100;
			border.color: "red";
			border.width: 2;

			Image {
				anchors.fill: parent;
				source: colorTheme.resPath + "/lessons/image.png";
				fillMode: Image.Stretch;
			}

			Text {
				color: "#0f0";
				text: "Stretch";
				font.pixelSize: 21;
			}
		}

		Rectangle {
			width: 200;
			height: 100;
			border.color: "red";
			border.width: 2;

			Image {
				anchors.fill: parent;
				source: colorTheme.resPath + "/lessons/image.png";
				fillMode: Image.PreserveAspectFit;
			}

			Text {
				color: "#0f0";
				text: "PreserveAspectFit";
				font.pixelSize: 21;
			}
		}

		Rectangle {
			width: 200;
			height: 100;
			border.color: "red";
			border.width: 2;

			Image {
				anchors.fill: parent;
				source: colorTheme.resPath + "/lessons/image.png";
				fillMode: Image.PreserveAspectCrop;
			}

			Text {
				color: "#0f0";
				text: "PreserveAspectCrop";
				font.pixelSize: 21;
			}
		}

		Rectangle {
			width: 200;
			height: 200;
			border.color: "red";
			border.width: 2;

			Image {
				anchors.fill: parent;
				source: colorTheme.resPath + "/lessons/image.png";
				fillMode: Image.Tile;
			}

			Text {
				color: "#0f0";
				text: "Tile";
				font.pixelSize: 21;
			}
		}
	}
}
