sap.ui.controller("sap.ui.demo.walkthrough.view.Emp", {

	onPress: function(evt) {
		jQuery.sap.require("sap.m.MessageToast");
		sap.m.MessageToast.show(evt.getSource().getId() + " Pressed");
	}
});