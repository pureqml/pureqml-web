Item {
	anchors.fill: context;
	property Object state: context.location.state;

	onStateChanged: {
		if (value.section)
			pages.pageName = value.section;
		else
			pages.pageName = 'about';
	}

	Rectangle {
		anchors.fill: context;
		color: colorTheme.backgroundColor;

		onCompleted: { this.style('position', 'fixed') }
	}

	ColorTheme { id: colorTheme; }

	PageStack {
		id: pages;
		height: contentHeight + 20;
		y: head.height + 20;
		width: parent.width;
		property string pageName;

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
		BasicLesson { }
		MixinLesson { }
		EffectsLesson { }

		onPageNameChanged: {
			var children = this.children
			log("onPageNameChanged", value, "pages", children)
			for (var i in children) {
				if (children[i].url == value) {
					this.currentIndex = i
					head.focusIndex(i)
					return
				}
			}
		}
	}

	Head {
		id: head;

		//onCountChanged: { head.focusIndex(pages.currentIndex) }
		onGoHome: { this._context.location.pushState("home", "home", "index.html") }
	}
}
