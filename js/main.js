var ViewModel = function(){
	var self = this;

	// Create collection to hold our Recommendations from the model
	// the Model is currently a static list in the model variable
	this.recommendList = ko.observableArray([]);

	// Push all static model data into ko observable array
	model.results.forEach(function(result){
		self.recommendList.push(new Recommendation(result));
	});
};

// Initalize View Model
ko.applyBindings(new ViewModel());
