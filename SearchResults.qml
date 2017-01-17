ContentColumn {
	id: searchResultsProto;
	signal choosed;
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	anchors.margins: 10;
	spacing: 30;

	ListView {
		id: searchView;
		height: contentHeight;
		anchors.top: parent.top;
		anchors.left: parent.left;
		anchors.right: parent.right;
		model: ListModel { }
		delegate: WebLink {
			width: parent.width;
			height: 70;
			href: model.path;

			Text {
				anchors.left: parent.left;
				anchors.verticalCenter: parent.verticalCenter;
				anchors.leftMargin: 10;
				color: parent.hover ? colorTheme.darkerPrimaryColor : colorTheme.lighterPrimaryColor;
				text: model.text;
				font.pixelSize: 32;
				font.weight: 300;
			}

			onClicked(e): {
				e.preventDefault();
				var a = this.href.split("/");
				var state = {}
				if (a[0])
					state.page = a[0]
				if (a[1])
					state.section = a[1]
				if (a[2])
					state.element = a[2]

				this._context.location.pushState(state, this.href, this.href) 
			}
		}
	}

	fill(data): {
		searchView.model.clear()
		searchView.model.append(data)
	}
}
