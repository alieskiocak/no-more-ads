var enabled = true;

chrome.webRequest.onBeforeRequest.addListener(

	function(details) {
		
		console.log("blocking:",details.url);
		return {cancel: true };
	},
	{urls: blocked_domains},
	["blocking"]
	
);