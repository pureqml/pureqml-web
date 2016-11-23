ContentColumn {
	anchors.top: parent.top;
	anchors.left: parent.left;
	anchors.right: parent.right;
	anchors.margins: 10;
	spacing: 30;

	PageColumn {
		id: propertiesColumn;
		title: "Properties";

		DocKeyValueView {
			id: propertiesView;
			anchors.leftMargin: 20;
		}
	}

	PageColumn {
		id: aliasesColumn;
		title: "Alias Properties";

		DocKeyValueView {
			id: aliasesView;
			anchors.leftMargin: 20;
		}
	}

	PageColumn {
		id: signalsColumn;
		title: "Signals";

		DocKeyValueView {
			id: signalsView;
			anchors.leftMargin: 20;
		}
	}

	PageColumn {
		id: methodsColumn;
		title: "Methods";

		DocKeyValueView {
			id: methodsView;
			anchors.leftMargin: 20;
		}
	}

	fill(data): {
		var content = data.content

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
