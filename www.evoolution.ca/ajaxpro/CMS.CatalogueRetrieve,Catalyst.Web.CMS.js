if(typeof CMS == "undefined") CMS={};
if(typeof CMS.CatalogueRetrieve == "undefined") CMS.CatalogueRetrieve={};
CMS.CatalogueRetrieve_class = function() {};
Object.extend(CMS.CatalogueRetrieve_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideAddItemToOrder: function(cartId, catalogueId, productId, units, relatedProductIds, attributeIDs, instructions, vertical, templateTypeID, isQuote, targetFrame, v2, templateName, templateHash, cartSummaryTemplateName, cartSummaryTemplateHash) {
		return this.invoke("ServerSideAddItemToOrder", {"cartId":cartId, "catalogueId":catalogueId, "productId":productId, "units":units, "relatedProductIds":relatedProductIds, "attributeIDs":attributeIDs, "instructions":instructions, "vertical":vertical, "templateTypeID":templateTypeID, "isQuote":isQuote, "targetFrame":targetFrame, "v2":v2, "templateName":templateName, "templateHash":templateHash, "cartSummaryTemplateName":cartSummaryTemplateName, "cartSummaryTemplateHash":cartSummaryTemplateHash}, this.ServerSideAddItemToOrder.getArguments().slice(16));
	},
	AddToCart: function(productInfos) {
		return this.invoke("AddToCart", {"productInfos":productInfos}, this.AddToCart.getArguments().slice(1));
	},
	ServerSideDrawProduct: function(catalogueId, productId, templateTypeID, targetFrame, templateName, templateHash) {
		return this.invoke("ServerSideDrawProduct", {"catalogueId":catalogueId, "productId":productId, "templateTypeID":templateTypeID, "targetFrame":targetFrame, "templateName":templateName, "templateHash":templateHash}, this.ServerSideDrawProduct.getArguments().slice(6));
	},
	url: '/ajaxpro/CMS.CatalogueRetrieve,Catalyst.Web.CMS.ashx'
}));
CMS.CatalogueRetrieve = new CMS.CatalogueRetrieve_class();

