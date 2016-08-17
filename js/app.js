$(function () {
	$("form").on("submit", function(e){
		e.preventDefault();
		var request = gapi.client.youtube.search.list({
		part: "snippet",
		type: "video",
		q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
		maxResults: 3,
		order: "viewCount",
		publishedAfter: "2015-01-01T00:00:00Z"
		});
		request.execute(function(response)) {
			console.log(reponse);
		}
	});
});

function init() {
	gapi.client.setApiKey("AIzaSyC3V8D2JAlnTsGCKgMi_VHUzgSTjfvWWxQ");
	gapi.client.load("youtube", "v3", function() {

	});	


}