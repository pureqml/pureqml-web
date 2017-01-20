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
		font.weight: 100;
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

		if (!content) {
			log("Skip no content", data)
			for (var a in data) {
				nameText.text = a
				for (var b in data[a]) 
					output += '<a href="http://pureqml.com/docs/' + a + '/' + b + '" style="font-family:Roboto Slab; font-size:26px; padding-bottom:8px; color:#00897B; position:static;">' + b + "</a><br>"
			}
			docText.text = output;
			return
		}

		nameText.text = data.name

		for (var a in content) {
			output += '<h3 style="color:#999999;font-size:30px;">' + a + '</h3><br>'
			var p = content[a]
			for (var b in p) {
				var c = p[b]

				var ref = c.ref ? 'href="http://pureqml.com/docs/' + c.ref + '"' : ""
				output += '<div style="color:#616161; padding-bottom:8px; border-bottom-style:solid; border-bottom-width:2px; border-bottom-color:#F5F5F5; font-family:Roboto Slab; font-size:26px;">' + b + ' : <a ' + ref + ' style="color:#00897B; position:static;">' + (c.type ? c.type : "") + '</a></div><p style="color:#757575;white-space:normal">' + c.text + '</p><br>'
			}
		}
		docText.text = output;
		return
	}
}
