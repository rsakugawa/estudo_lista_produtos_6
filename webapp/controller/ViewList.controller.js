sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, Filter, FilterOperator) {
		"use strict";

		return Controller.extend("estudolistaprodutos.controller.ViewList", {

			oList: null,

			onInit: function () {
               this.oList = this.byId("list");
			},

			onLiveChange: function(oEvent){
			  var aFilter = [];
			  var orFilter = [];
			  var sNewValue = oEvent.getParameters().newValue; 
			  
			if(sNewValue){

				// Exemplo de filtro com declaração completa ..
				//aFilter.push( new Filter({
				//	path: "Name",
				//	operator: FilterOperator.Contains,
				//	value1: sNewValue 
				 //                 })				
			      //           ) 
                
				// Exemplo  de filtro com 'OR'/
				var sValueLower = sNewValue.toLowerCase();
                var sValueUpper = sNewValue.toUpperCase();
				var sValueUpLow = sNewValue[0].toUpperCase() + sNewValue.substr(1).toLowerCase();  

				aFilter.push (new Filter("Name", FilterOperator.Contains, sValueLower));
                aFilter.push (new Filter("Name", FilterOperator.Contains, sValueUpper));
				aFilter.push (new Filter("Name", FilterOperator.Contains, sValueUpLow));
				aFilter.push (new Filter("Id", FilterOperator.Contains, sValueLower));
				aFilter.push (new Filter("Id", FilterOperator.Contains, sValueUpper));
				aFilter.push (new Filter("Id", FilterOperator.Contains, sValueUpLow));

				orFilter.push(new Filter(aFilter, false));

			              }	

			    


			  var oBinding = this.oList.getBinding("items"); 
			  oBinding.filter(orFilter); 
			}
		});
	});
