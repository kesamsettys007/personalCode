({
    getProductlistFn : function(component) {
        var action = component.get("c.getProductList"); 
		action.setParams({
                countryCode: component.get('v.countryCode'),
                productType: component.get('v.productType')
            });
		
        var self = this;
        action.setCallback(this, function(actionResult) {
            component.set('v.products', actionResult.getReturnValue());
         });
          $A.enqueueAction(action);
    }
})