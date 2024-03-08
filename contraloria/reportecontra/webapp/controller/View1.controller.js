sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("urn.udp.contraloria.reportecontra.controller.View1", {
            onInit: function () {

            },
            buscarvalores:function(){
                const sURL = "/sap/opu/odata/sap/ZGW_CURSO_FIORI_SRV/";
                var vrut = this.getView().byId("txtrut").getValue();
                const sCombo1Srv = "GSK_NotificacionesSet?$filter=Stcd1 eq '" + vrut + "'";
                //const serviceUrl = this.getOwnerComponent().getManifestObject()._oBaseUri._parts.path;
                var fullUrl = sURL + sCombo1Srv;
                fullUrl = fullUrl.replace("\/\/","\/");
                var listado = new sap.ui.model.json.JSONModel;
                listado.loadData(fullUrl,"",false);
                listado.getProperty("/d/results");
                var lista = [];
                for(var i=0;i<listado.oData.d.results.length;i++){
                    lista.push(listado.oData.d.results[i]);
                }
                var oModel = new sap.ui.model.json.JSONModel;
                oModel.setData(
                    lista
                ); 
                    
                this.getView().setModel(oModel,"notificaciones");
                /*const sCombo2Srv = "HorariosComboSet?sap-language='ES'&$filter=IdCombo eq 'ANO'";
                fullUrl = serviceUrl + sURL + sCombo2Srv;
                fullUrl = fullUrl.replace("\/\/","\/");
                const AñosModel = new sap.ui.model.json.JSONModel;
                this.getView().byId("combo2").setModel(AñosModel);
                AñosModel.loadData(fullUrl, "", false);
                AñosModel.getProperty("/d/results");        
                //
                const sCombo3Srv = "/HorariosComboSet";
                //
                const oFilter1 = new Filter('IdCombo', sap.ui.model.FilterOperator.EQ, 'MODULO');
                var that = this;
                this.getOwnerComponent().getModel().read(sCombo3Srv, {
                    filters: [oFilter1],
                    success: function (oData, response) {
                        const oViewModel = new sap.ui.model.json.JSONModel;
                        that.getView().setModel(oViewModel);
                        const AsignaturasModel = new sap.ui.model.json.JSONModel;
                        AsignaturasModel.setData(response.data.results);
                        that.getView().setModel(AsignaturasModel, "AsignaturasModel");
                    },
                    error: function (oError) {
                        sap.m.MessageToast.show(oError.message);
                    }
                });    */                    
            },
        });
    });
