ContentColumn {
	spacing: 30;

	H2 {
		id: nameText;
		width: 100% - 40;
		x: 20;
		color: colorTheme.primaryColor;
	}

	Text {
		id: docText;
		width: 100% - 40;
		x: 20;
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
			output += '<h3 style="color:#43A047">' + a + '</h2><br>'
			var p = content[a]
			for (var b in p) {
				var c = p[b]
				output += '<p style="color:#424242">' + b + ' : <span style="color:#00897B">' + c.type + '</span><br>' + '<span style="color:#757575">' + c.text + '</span><br></p>'
			}
		}
		docText.text = output;
		return
	}
}
