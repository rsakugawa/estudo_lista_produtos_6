/*global QUnit*/

sap.ui.define([
	"estudo_lista_produtos/controller/ViewList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewList Controller");

	QUnit.test("I should test the ViewList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
