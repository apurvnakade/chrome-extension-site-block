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
<<<<<<< HEAD
		"*://*.twitter.com//*",
=======
>>>>>>> cc976594061c98709e78a04c6260e452d2c4228e
		"*://*.thehindu.com//*",
		"*://*.cnn.com/*",
		"*://twitter.com/*"
		]},
	["blocking"]);