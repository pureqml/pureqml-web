PageColumn {
	property string hash;
	onHashChanged: { this.element.setAttribute('id', value) }
}