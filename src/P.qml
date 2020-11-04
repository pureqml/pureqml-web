Text {
	width: 100%;
	wrapMode: Text.WordWrap;

	function getTag() { return 'p' }

	function registerStyle(style, tag) {
		style.addRule(tag, 'margin-top: 0px; margin-bottom: 0px; -webkit-margin-after: 0px; -webkit-margin-before: 0em; position: absolute; visibility: inherit; border-style: solid; border-width: 0px; border-radius: 0px; pointer-events: auto; touch-action: auto')
	}
}
