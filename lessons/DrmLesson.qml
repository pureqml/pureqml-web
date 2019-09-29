Lesson {
	url: "drm";

	PageColumn {
		title: "DRM video playing";
		text: "You can play DRM video with using common interface for all platforms. DRM is supported now for SmartTV platforms:";

		KeyValueView {
			anchors.leftMargin: 20;
			model: ListModel {
				ListElement { key: "LG WebOS"; value: ""; }
				ListElement { key: "LG NetCast"; value: ""; }
				ListElement { key: "Samsung Tizen"; value: ""; }
				ListElement { key: "Samsung Orsay"; value: ""; }
			}
		}
	}

	DescriptionText { text: "To play DRM in web-browser you can use shaka player. To use it just add this line in app .manifest file:"; }

	CodeHighlighter {
		width: contentWidth + 10;
		font.pixelSize: 18;
		language: "qml";
		code: "\"requires\": [\"video.shaka\"]";
	}

	Resource { id: drmExampleSource; url: "https://raw.githubusercontent.com/pureqml/pureqml-web/master/code_samples/DrmExample.qml"; }

	PageColumn {
		title: "Code example";
		text: "Simple code usage example";

		CodeHighlighter {
			width: contentWidth > parent.width - 30 ? parent.width - 30 : contentWidth;
			font.pixelSize: 18;
			language: "qml";
			code: drmExampleSource.data;
		}
	}
}
