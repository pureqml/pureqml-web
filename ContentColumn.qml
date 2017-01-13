Column {
	width: parent.width < 840 ? parent.width : parent.width - 200;
	signal fillMenu;
	clip: true;
	property Gradient gradient: Gradient {
			orientation: Gradient.Custom;
			angle: 120;
			GradientStop { position: 0; color: "#BBF";}
			GradientStop { position: 1; color: "#BFB";}
	}

	Behavior on y { Animation { duration: 300; } }

	onCompleted: {
		var data = []
		var children = this.children
		for (var i in children) {
			var child = children[i]
			if (child && child.title)
				data.push({"text": child.title, "path": "#" + child.hash, "link": child.link})
		}

		this.fillMenu(data)
	}
}
