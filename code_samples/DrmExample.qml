VideoPlayer {
	width: 100%;
	height: 100%;
	autoPlay: true;

	onCompleted: {
		var la = "http://playready-testserver.azurewebsites.net/rightsmanager.asmx?PlayRight=1&UseSimpleNonPersistentLicense=1"
		var self = this
		this.setupDrm("playready", { "laServer": la }, function() {
			self.source = "http://playready.eastus2.cloudapp.azure.com/smoothstreaming/SSWSS720H264PR/SuperSpeedway_720.ism/Manifest"
		})
	}
}
