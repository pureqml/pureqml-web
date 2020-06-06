Lesson {
	url: "videoplayer";

	Resource { id: videoCodeSource; url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/code_samples/VideoPlayerSample.qml";}

	ListModel {
		id: playerPropertiesModel;

		onCountChanged: {
			if (!value)
				return
			playerPropertiesModel.setProperty(0, "value", player.source)
			playerPropertiesModel.setProperty(1, "value", player.backgroundImage)
			playerPropertiesModel.setProperty(2, "value", player.backgroundColor)
		}
	}

	PageColumn {
		title: "VideoPlayer";
		text: "VideoPlayer control allows to play video (on various platforms). Usage example below:";

		Grid {
			width: 100%;
			spacing: 10;

			CodeHighlighter {
				width: contentWidth > parent.width - 30 ? parent.width - 30 : contentWidth;
				font.pixelSize: 18;
				language: "qml";
				code: videoCodeSource.data;
			}

			VideoPlayer {
				id: player;
				width: 355;
				height: 200;
				anchors.topMargin: 50;
				source: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";
				autoPlay: false;
				backgroundImage: "http://media.w3.org/2010/05/bunny/poster.png";

				ClickMixin { }

				onClicked: {
					if (!this.ready)
						return

					if (this.paused)
						this.play()
					else
						this.pause()
				}

				onReadyChanged: { playerPropertiesModel.setProperty(5, "value", value) }
				onPausedChanged: { playerPropertiesModel.setProperty(7, "value", value) }
				onWaitingChanged: { playerPropertiesModel.setProperty(8, "value", value) }
				onDurationChanged: { playerPropertiesModel.setProperty(10, "value", value) }
				onProgressChanged: { playerPropertiesModel.setProperty(11, "value", value) }
				onBufferedChanged: { playerPropertiesModel.setProperty(12, "value", value) }
			}

			ListView {
				x: 5%;
				width: 400;
				height: contentHeight;
				anchors.topMargin: 50;
				model: playerPropertiesModel;
				spacing: 1;
				delegate: Item {
					width: 400;
					height: 30;

					Rectangle {
						width: 150;
						height: 100%;

						Text {
							width: 100%;
							height: 100%;
							horizontalAlignment: Text.AlignRight;
							verticalAlignment: Text.AlignVCenter;
							text: model.title;
							color: colorTheme.textColor;
							font.pixelSize: 16;
							font.bold: true;
						}
					}

					Rectangle {
						x: 170;
						width: 250;
						height: 100%;

						Text {
							width: 100%;
							height: 100%;
							horizontalAlignment: Text.AlignLeft;
							verticalAlignment: Text.AlignVCenter;
							text: model.value;
							color: colorTheme.textColor;
							font.pixelSize: 16;
						}
					}
				}

				onCompleted: {
					var data = [
						{ "title": "source", "value": "" },
						{ "title": "backgroundImage", "value": "" },
						{ "title": "backgroundColor", "value": "" },
						{ "title": "volume", "value": 1.0 },
						{ "title": "loop", "value": false, "type": "bool" },
						{ "title": "ready", "value": false, "type": "bool" },
						{ "title": "muted", "value": false, "type": "bool" },
						{ "title": "paused", "value": false, "type": "bool" },
						{ "title": "waiting", "value": false, "type": "bool" },
						{ "title": "autoPlay", "value": false, "type": "bool" },
						{ "title": "duration", "value": 0.0 },
						{ "title": "progress", "value": 0.0 },
						{ "title": "buffered", "value": 0.0 }
					]
					playerPropertiesModel.append(data)
				}
			}
		}
	}
}
