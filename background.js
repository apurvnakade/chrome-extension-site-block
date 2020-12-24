chrome.webRequest.onBeforeRequest.addListener(function(details) { 
		return {cancel: true}; 
	},
	{urls: [
		"*://*.reddit.com/*",
		"*://*.nytimes.com/*",
		"*://*.theatlantic.com/*",
		"*://*.theguardian.com/*",
		"*://*.foxnews.com/*",
		"*://*.news.google.co.in/*",
		"*://*.news.google.com/*",
		"*://*.bloomberg.com/*",
		"*://*.reuters.com/*",
		"*://*.fivethirtyeight.com//*",
		"*://*.thehindu.com//*",
		"*://*.cnn.com/*",
		"*://twitter.com/*"
		]},
	["blocking"]);