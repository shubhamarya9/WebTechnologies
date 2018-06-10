$(function(){
	$("#Search").validate({
		rules: {
			searchbar:{
				required: true,
				searchbar: true
			}
		


		},
		messages: {
			searchbar:{
				required:'Cannot be empty',
				searchbar: 'Invalid name'
			}

		}
	})
});