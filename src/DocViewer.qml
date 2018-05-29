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
					output += '<a href="https://pureqml.com/docs/' + a + '/' + b + '" style="font-family:Roboto Slab; font-size:26px; padding-bottom:8px; color:#00897B; position:static;">' + b + "</a><br>"
			}
			docText.text = output;
			window.scrollTo(0, 0)
			return
		}

		nameText.text = data.name

		for (var a in content) {
			var p = content[a]
			var publicCount = 0
			for (var docItems in p) {
				var c = p[docItems]
				if (!c.internal)
					++publicCount
			}
			if (publicCount == 0)
				continue

			output += '<h3 style="color:#999999;font-size:28px;font-weight:300;">' + a + '</h3><br>'

			for (var b in p) {
				var c = p[b]
				if (c.internal)
					continue

				var ref = c.ref ? 'href="https://pureqml.com/docs/' + c.ref + '"' : ""
				output += '<div style="color:#616161; padding-bottom:8px; border-bottom-style:solid; border-bottom-width:2px; border-bottom-color:#F5F5F5; font-family:Roboto Slab; font-size:26px;">'

				// Methods
				if (!c.type) {
					var paramText = "("
					var params = c.params

					if (params) {
						for (var i in params) {
							paramText += params[i].name + ": "
							paramText += params[i].type
							paramText += (i == params.length - 1 ? "" : ", ")
						}
					}
					paramText += ")"

					output += b + paramText + '<a ' + ref + ' style="color:#00897B; position:static;"></a></div><p style="color:#757575;white-space:normal">' + c.text + '</p><br>'
				} else {
					output += b + ' : <a ' + ref + ' style="color:#00897B; position:static;">' + c.type + '</a></div><p style="color:#757575;white-space:normal">' + c.text + '</p><br>'
				}
				//output += '<div style="color:#616161; padding-bottom:8px; border-bottom-style:solid; border-bottom-width:2px; border-bottom-color:#F5F5F5; font-family:Roboto Slab; font-size:26px;">' + b + ' : <a ' + ref + ' style="color:#00897B; position:static;">' + (c.type ? c.type : "") + '</a></div><p style="color:#757575;white-space:normal">' + c.text + '</p><br>'
			}
		}
		docText.text = output;
		window.scrollTo(0, 0)
		return
	}
}
