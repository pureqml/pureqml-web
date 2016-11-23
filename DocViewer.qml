ContentColumn {
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	anchors.margins: 10;
	spacing: 30;

	H2 {
		id: nameText;
		anchors.left: parent.left;
		anchors.leftMargin: 10;
		color: colorTheme.primaryColor;
	}

	PageColumn {
		id: propertiesColumn;
		title: "Properties";

		DocKeyValueView { id: propertiesView; }
	}

	PageColumn {
		id: aliasesColumn;
		title: "Alias Properties";

		DocKeyValueView { id: aliasesView; }
	}

	PageColumn {
		id: signalsColumn;
		title: "Signals";

		DocKeyValueView { id: signalsView; }
	}

	PageColumn {
		id: methodsColumn;
		title: "Methods";

		DocKeyValueView { id: methodsView; }
	}

	fill(data): {
		var content = data.content
		if (!content) {
			log("Skip no content")
			return
		}

		nameText.text = data.name

		var properties = content["Properties"]
		propertiesColumn.visible = properties 
		propertiesView.fill(properties)

		var aliases = content["Alias Properties"]
		aliasesColumn.visible = aliases 
		aliasesView.fill(aliases)

		var signals = content["Signals"]
		signalsColumn.visible = signals
		signalsView.fill(signals)

		var methods = content["Methods"]
		methodsColumn.visible = methods
		methodsView.fill(methods)
	}
}
