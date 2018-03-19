if(typeof CMS == "undefined") CMS={};
if(typeof CMS.OrderRetrievev2 == "undefined") CMS.OrderRetrievev2={};
CMS.OrderRetrievev2_class = function() {};
Object.extend(CMS.OrderRetrievev2_class.prototype, Object.extend(new AjaxPro.AjaxClass(), {
	ServerSideUpdateItemQuanity: function(orderId, envCatalogueId, productId, itemId, quantity, cartType, countryCode, vertical, isQuote, v2, cartSummaryTemplateName, cartSummaryTemplateHash) {
		return this.invoke("ServerSideUpdateItemQuanity", {"orderId":orderId, "envCatalogueId":envCatalogueId, "productId":productId, "itemId":itemId, "quantity":quantity, "cartType":cartType, "countryCode":countryCode, "vertical":vertical, "isQuote":isQuote, "v2":v2, "cartSummaryTemplateName":cartSummaryTemplateName, "cartSummaryTemplateHash":cartSummaryTemplateHash}, this.ServerSideUpdateItemQuanity.getArguments().slice(12));
	},
	ServerSideDrawCartEmpty: function(cartId, envCatalogueId) {
		return this.invoke("ServerSideDrawCartEmpty", {"cartId":cartId, "envCatalogueId":envCatalogueId}, this.ServerSideDrawCartEmpty.getArguments().slice(2));
	},
	ServerSideUpdateShipping: function(orderId, shippingOptionId, envCatalogueId) {
		return this.invoke("ServerSideUpdateShipping", {"orderId":orderId, "shippingOptionId":shippingOptionId, "envCatalogueId":envCatalogueId}, this.ServerSideUpdateShipping.getArguments().slice(3));
	},
	ServerSideApplyDiscountCode: function(orderId, discountcode, envCatalogueId) {
		return this.invoke("ServerSideApplyDiscountCode", {"orderId":orderId, "discountcode":discountcode, "envCatalogueId":envCatalogueId}, this.ServerSideApplyDiscountCode.getArguments().slice(3));
	},
	ServerSideApplyGiftVoucher: function(orderId, giftvoucherCode, envCatalogueId) {
		return this.invoke("ServerSideApplyGiftVoucher", {"orderId":orderId, "giftvoucherCode":giftvoucherCode, "envCatalogueId":envCatalogueId}, this.ServerSideApplyGiftVoucher.getArguments().slice(3));
	},
	ServerSideUpdateTaxCode: function(orderId, taxcodeId, taxShipping, taxGiftVouchers, envCatalogueId, countryCode, state, postCode, updateAdd) {
		return this.invoke("ServerSideUpdateTaxCode", {"orderId":orderId, "taxcodeId":taxcodeId, "taxShipping":taxShipping, "taxGiftVouchers":taxGiftVouchers, "envCatalogueId":envCatalogueId, "countryCode":countryCode, "state":state, "postCode":postCode, "updateAdd":updateAdd}, this.ServerSideUpdateTaxCode.getArguments().slice(9));
	},
	ServerSideRegisterGiftVoucher: function(orderId, recipientName, recipientEmail, message) {
		return this.invoke("ServerSideRegisterGiftVoucher", {"orderId":orderId, "recipientName":recipientName, "recipientEmail":recipientEmail, "message":message}, this.ServerSideRegisterGiftVoucher.getArguments().slice(4));
	},
	ServerSideSetShippingCountry: function(orderId, countrycode, state, postcode, envCatalogueId) {
		return this.invoke("ServerSideSetShippingCountry", {"orderId":orderId, "countrycode":countrycode, "state":state, "postcode":postcode, "envCatalogueId":envCatalogueId}, this.ServerSideSetShippingCountry.getArguments().slice(5));
	},
	ServerSideSetShippingAddress: function(orderId, countrycode, state, postcode) {
		return this.invoke("ServerSideSetShippingAddress", {"orderId":orderId, "countrycode":countrycode, "state":state, "postcode":postcode}, this.ServerSideSetShippingAddress.getArguments().slice(4));
	},
	ServerSideRetrieveShipping: function(orderId, countrycode, state, postcode, envCatalogueId, isResidential) {
		return this.invoke("ServerSideRetrieveShipping", {"orderId":orderId, "countrycode":countrycode, "state":state, "postcode":postcode, "envCatalogueId":envCatalogueId, "isResidential":isResidential}, this.ServerSideRetrieveShipping.getArguments().slice(6));
	},
	ServerSideSaveShipping: function(orderId, shippingoptionId, catalogId, key) {
		return this.invoke("ServerSideSaveShipping", {"orderId":orderId, "shippingoptionId":shippingoptionId, "catalogId":catalogId, "key":key}, this.ServerSideSaveShipping.getArguments().slice(4));
	},
	ServerSideReDrawShoppingCart: function(orderId) {
		return this.invoke("ServerSideReDrawShoppingCart", {"orderId":orderId}, this.ServerSideReDrawShoppingCart.getArguments().slice(1));
	},
	url: '/ajaxpro/CMS.OrderRetrievev2,Catalyst.Web.CMS.ashx'
}));
CMS.OrderRetrievev2 = new CMS.OrderRetrievev2_class();

