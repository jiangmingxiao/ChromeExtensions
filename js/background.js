chrome.commands.onCommand.addListener(function callback(command){
    if(command === "test") {
        chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
			const tab = tabs[0];
			if (tab) {
				const url = tab.url;
				chrome.tabs.update(tab.id, {url: "http://www.baidu.com"});
			}
	    });
    }
})