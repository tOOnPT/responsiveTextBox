var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();

//Version 2.0
kendo.data.binders.valueInserted = kendo.data.Binder.extend({
    init: function(element, bindings, options) {
        kendo.data.Binder.fn.init.call(this, element, bindings, options);
        var that = this;
        $(that.element).bind("input propertychange paste", function(){
            delay(function(){
                that.refresh();
            }, 2000 );
        });
    },
    refresh: function() {
        var value = this.element.value;
        this.bindings["valueInserted"].set(value);
    }
});

//Version 1.0
//kendo.data.binders.valueInserted = kendo.data.Binder.extend({
//    
//    init: function(element, bindings, options) {
//        //call the base constructor
//        kendo.data.Binder.fn.init.call(this, element, bindings, options);
//        
//        var that = this;
        //listen for the change event of the element
//        $(that.element).on("change", function() {
            //call the change function
//            that.change();
//        });
        
        //listen for the keyup event of the element
//        var binding = this.bindings.keyPress;
//        $(that.element).bind("keyup", function(){
//            delay(function(){
                //call the change function
//                that.change();
//            }, 1000 );
//        });
//    },
    
//    refresh: function() {
//        var that = this,
            //get the value from the View-Model
//            value = that.bindings["valueInserted"].get();
        
        //update the HTML input element
//        $(that.element).val(value);
//    },
    
//    change: function() {
//        var value = this.element.value;
        
        //update the View-Model
//        this.bindings["valueInserted"].set(value);
//    }
//});

//View-Model source
var viewModel = kendo.observable({
    textInserted: "some text... :P"
});

kendo.bind(document.body, viewModel);
