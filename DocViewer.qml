Column {
	spacing: 30;
	width: 100%;
	clip: true;

	H2 {
		id: nameText;
		anchors.topMargin: 30;
		width: 90%;
		x: 5%;
		font.pixelSize: 38;
		color: colorTheme.primaryColor;
	}
	
	Rectangle {
		width: nameText.width;
		x: nameText.x;
		height: 1;
		color: "#AAA";
	}

	Text {
		id: docText;
		width: 90%;
		x: 5%;
	}

	fill(data): {
		var content = data.content
		var output = ""

		nameText.text = data.name

		if (!content) {
			log("Skip no content")
			for (var a in data) {
				output = "<p>" + a + "<br>"
				for (var b in data[a])
					output += b + "<br>"
				output += "</p>"
			}
			docText.text = output;
			return
		}

		for (var a in content) {
			output += '<h3 style="color:#999999;font-size:30px;">' + a + '</h3><br>'
			var p = content[a]
			for (var b in p) {
				var c = p[b]

				var ref = c.ref ? 'href="http://pureqml.com/docs/' + c.ref + '"' : ""
				output += '<div style="color:#616161; border-bottom-style:solid; border-bottom-width:2px; border-bottom-color:#F5F5F5; font-family:Roboto Slab; font-size:26px;">' + b + ' : <a ' + ref + ' style="color:#00897B; position:static;">' + (c.type ? c.type : "") + '</a></div><p style="color:#757575;white-space:normal">' + c.text + '</p><br>'
			}
		}
		docText.text = output;
		return
	}
}
