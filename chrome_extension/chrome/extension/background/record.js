console.log('{PAWAN} record');
chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    console.log('{PAWAN} request: ', request);
    if(request.data === "start"){
        console.log('{PAWAN} start');
        // startTracking();
    } else if(request.data === "stop") {
        console.log('{PAWAN} stop');
        // stopTracking();
    } else {
        console.log('{PAWAN} Message does not have required data: ', request);
    }
});
