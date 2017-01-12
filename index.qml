Item {
	anchors.fill: context;
	property Object state: context.location.state;

	onStateChanged: {
		if (value && value.section)
			pages.pageName = value.section;
		else
			pages.pageName = 'about';
	}

	Head { z: 1; }

	ColorTheme { id: colorTheme; }

	PageStack {
		id: pages;
		y: 100;
		width: parent.width;
		property string pageName;

		About { }
		Download { }
		Lessons { }
		Docs { }

		//Lessons
		// AnchorsLesson { }
		// LayoutsLesson { }
		// GamepadLesson { }
		// KeyboardLesson { }
		// SignalLesson { }
		// ViewAndModelsLesson { }
		// GlobalsLesson { }
		// InputsLesson { }
		// BasicLesson { }
		// MixinLesson { }
		// EffectsLesson { }

		onPageNameChanged: {
			var children = this.children
			log("onPageNameChanged", value, "pages", children)
			for (var i in children) {
				if (children[i].url == value) {
					this.currentIndex = i
					return
				}
			}
		}
	}
}
