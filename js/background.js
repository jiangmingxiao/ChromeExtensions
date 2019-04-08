
chrome.commands.onCommand.addListener(function (command){
    if(command === "test") {
        // chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
		// 	const tab = tabs[0];
		// 	if (tab) {
		// 		const url = tab.url;
		// 		chrome.tabs.update(tab.id, {url: "http://www.baidu.com"});
		// 	}
		// });
		// chrome.windows.getCurrent(function(info) {
		// 	debugger
		// });
		chrome.tabs.captureVisibleTab(null, {format:"png"}, function(dataUrl){
			const img = new Image();
			img.onload = function() {
				const canvas = document.createElement("canvas");
				canvas.width = img.width;
				canvas.height = img.height;
				const context = canvas.getContext("2d");
				context.drawImage(img, 0, 0);
				const link = document.createElement("a");
				link.download = "download.png";
				link.href = dataUrl;
				link.click();
			}
			img.src = dataUrl;
		})
    }
})