

function closeNetflixTab(){
	console.log("what i learned in boating school today is\n");
	var periodValue = null;
        	var repeat = document.getElementById("repeatAlarm").value;
           	if(repeat == "Yes"){
           		periodValue = 720;
           	}
           	else{
           		periodValue = 0;
           	}
	var queryInfo = {
			'title': "Netflix"
	};
	var date = new Date();
	var time = date.getTime();
	console.log(time);
	console.log(document.getElementById("alarmEnd"));
	chrome.alarms.create("myAlarm", 
            	{delayInMinutes: (document.getElementById("alarmEnd") - time), 
            	periodInMinutes: periodValue} );
	chrome.tabs.query(queryInfo, function(tabs){
			for(var i = 0; i < tabs.length; ++i){
				var tab = tabs[i];
				chrome.tabs.remove(tab.id);
			}
	});
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('saveP').addEventListener('click', closeNetflixTab);
});


