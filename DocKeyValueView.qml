KeyValueView {
	shift: 300;
	anchors.leftMargin: 20;
	spacing: 30;
	model: ListModel { } 

	fill(data): {
		this.model.clear()
		for (var i in data) {
			var row = data[i]
			if (!row.internal)
				this.model.append({"key": i, "value": row.text})
		}
	}
}
