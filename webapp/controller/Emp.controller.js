sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.Emp", {
		onShowHello : function () {
		},
		_getDialog : function () {
         if (!this._oDialog) {
            this._oDialog = sap.ui.xmlfragment("sap.ui.demo.walkthrough.view.HelloDialog");
            this.getView().addDependent(this._oDialog);
         }
         return this._oDialog;
      },
      onPress : function () {
         this._getDialog().open();
      }
		// onPress : function () {
		// 	var oView = this.getView();
		
		// 	oView.byId("helloDialog").open();
                                                
	// 		// create dialog lazily
	// 		if (!this.byId("helloDialog")) {
	// 			// load asynchronous XML fragment
	// 			Fragment.load({
	// 				id: oView.getId(),
	// 				name: "sap.ui.demo.walkthrough.view.HelloDialog"
	// 			}).then(function (oDialog) {
	// 				// connect dialog to the root view of this component (models, lifecycle)
	// 				oView.addDependent(oDialog);
	// 				oDialog.open();
	// 			});
	// 		} else {
	// 			this.byId("helloDialog").open();
				
	// 		}
	 	// }

	 });
});