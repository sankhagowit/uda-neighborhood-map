/*global ko*/
(function (){
	'use strict';

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	// All code below involving keyhandling and binding handling taken from
	// todomvc knockout js example.
	// A factory function we can use to create binding handlers for specific
	// keycodes.
	function keyhandlerBindingFactory(keyCode) {
		return {
			init: function (element, valueAccessor, allBindingsAccessor, data, bindingContext) {
				var wrappedHandler, newValueAccessor;

				// wrap the handler with a check for the enter key
				wrappedHandler = function (data, event) {
					if (event.keyCode === keyCode) {
						valueAccessor().call(this, data, event);
					}
				};

				// create a valueAccessor with the options that we would want to pass to the event binding
				newValueAccessor = function () {
					return {
						keyup: wrappedHandler
					};
				};

				// call the real event binding's init function
				ko.bindingHandlers.event.init(element, newValueAccessor, allBindingsAccessor, data, bindingContext);
			}
		};
	}

	// a custom binding to handle the enter key
	ko.bindingHandlers.enterKey = keyhandlerBindingFactory(ENTER_KEY);

	// another custom binding, this time to handle the escape key
	ko.bindingHandlers.escapeKey = keyhandlerBindingFactory(ESCAPE_KEY);

	// wrapper to hasFocus that also selects text and applies focus async
	ko.bindingHandlers.selectAndFocus = {
		init: function (element, valueAccessor, allBindingsAccessor, bindingContext) {
			ko.bindingHandlers.hasFocus.init(element, valueAccessor, allBindingsAccessor, bindingContext);
			ko.utils.registerEventHandler(element, 'focus', function () {
				element.focus();
			});
		},
		update: function (element, valueAccessor) {
			ko.utils.unwrapObservable(valueAccessor()); // for dependency
			// ensure that element is visible before trying to focus
			setTimeout(function () {
				ko.bindingHandlers.hasFocus.update(element, valueAccessor);
			}, 0);
		}
	};

}());

var ViewModel = function(){
	var self = this;

	// Create collection to hold our Recommendations from the model
	// the Model is currently a static list in the model variable
	this.recommendList = ko.observableArray([]);

	// Push all static model data into ko observable array
	model.results.forEach(function(result){
		self.recommendList.push(new Recommendation(result));
	});

	this.currentFilter = ko.observable();
	this.currentFilter.subscribe(function(){
		self.filter();
	});
	// Idea/syntax for code below to use a computed observable array for the list of filtered places from the from Knockout TodoMVC example
	this.filteredList = ko.computed(function() {
		return ko.utils.arrayFilter(self.recommendList(), function (rec) {
			return rec.visible();
		});
	});

	this.filter = function () {
		// create variable for search term, make it lower case
		// will use indexOf() which is case sensitive
		var searchTerm = this.currentFilter().trim().toLowerCase();
		// If the searchTerm is not an empty string, lets search
		if(searchTerm) {
			// Looping through each object in the recommendList observable array
			ko.utils.arrayFilter(self.recommendList(), function(rec) {
				//Rec is our recommendation object. Set visible to false/hidden, if this object contains any part of the search string we will set it to true in the loops
				rec.visible(false);
				var name = rec.name().toLowerCase();
				var types = rec.types();
				var setVisible = false;
				types.forEach(function(type){
					if(type.toLowerCase().indexOf(searchTerm) >= 0){
						setVisible = true;
					}
				});
				if (name.indexOf(searchTerm) >= 0){
					setVisible = true;
				}
				// If the search term was found in the loops,
				if(setVisible){rec.visible(true);}
			});
		} else {
			// If searchTerm is empty string reset the whole list to visible
			ko.utils.arrayFilter(self.recommendList(), function(rec){
				rec.visible(true);
			});
		}
	};
};

// Initalize View Model
ko.applyBindings(new ViewModel());
