chrome.webRequest.onBeforeRequest.addListener(function(details) { 
		return {cancel: true}; 
	},
	{urls: ["*://*.reddit.com/*"]},
	["blocking"]);