sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/ui/core/routing/History',
    'sapui5/demo/mvcapp/model/formatter',
    'sapui5/demo/mvcapp/model/types',
  ],
  function (Controller, History, formatter, types) {
    'use strict';

    return Controller.extend('sapui5.demo.mvcapp.controller.Detail', {
      formatter: formatter,
      types: types,
      onInit: function () {
        this._oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        this._oRouter
          .getRoute('detail')
          .attachPatternMatched(this._onDetailMatched, this);
      },
      _onDetailMatched: function (oEvent) {
        var sObjectPath = '/Suppliers/' + oEvent.getParameter('arguments').ID;
        var oView = this.getView();
        oView.bindElement(sObjectPath);
      },
      onNavPress: function () {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();

        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          this._oRouter.navTo('master');
        }
      },
    });
  }
);
