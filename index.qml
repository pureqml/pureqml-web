Item {
	property string state: context.location.historyState;
	anchors.fill: context;

	Rectangle {
		anchors.fill: context;
		color: colorTheme.backgroundColor;

		onCompleted: { this.style('position', 'fixed') }
	}

	ColorTheme { id: colorTheme; }

	PageStack {
		id: pages;
		height: contentHeight + 20;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		anchors.topMargin: head.height + 20;
		anchors.leftMargin: 20;
		anchors.rightMargin: 20;

		Home {}
		About { }
		Download { }
		Lessons { }
		Docs { }

		//Lessons
		AnchorsLesson { }
		LayoutsLesson { }
		GamepadLesson { }
		KeyboardLesson { }
		SignalLesson { }
		ViewAndModelsLesson { }
		GlobalsLesson { }
		InputsLesson { }

		focusHistoryPage(state): {
			var children = this.children
			for (var i in children) {
				if (children[i].url == state) {
					this.currentIndex = i
					head.focusIndex(i)
					return
				}
			}
		}
	}

	Head {
		id: head;

		onCountChanged: { head.focusIndex(pages.currentIndex) }
		onGoHome: { this._context.location.pushState("home", "home", "?page=home") }
	}

	getParameterByName(name, url): {
		if (!url)
			url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	focusHistoryPage: {
		var state = window.history.state
		if (!state)
			state = this.getParameterByName("page")
		pages.focusHistoryPage(state)
	}

	onStateChanged: { this.focusHistoryPage() }
	onCompleted: { this.focusHistoryPage() }
}
