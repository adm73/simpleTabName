var tabs = require("sdk/tabs");

// Listen for tab content loads.
tabs.on('ready', function(tab) 
{
		console.log('tab is loaded', tab.title, tab.url);

		var newTitle = tab.url;
		var pos;

		pos = newTitle.indexOf("https://") + 1;
		console.log('pos = ', pos);
		
		if(pos) newTitle = newTitle.replace("https://", "");
		console.log('newTitle = ', newTitle);
		
		pos = newTitle.indexOf("http://") + 1;
		console.log('pos = ', pos);
		
		if(pos) newTitle = newTitle.replace("http://", "");
		console.log('newTitle = ', newTitle);
		
		pos = newTitle.indexOf("/");
		console.log('pos/ = ', pos);

		if(pos) newTitle = newTitle.substr(0, pos);		
		console.log('newTitle = ', newTitle);

		tabs.activeTab.title = newTitle;
		
		
});
