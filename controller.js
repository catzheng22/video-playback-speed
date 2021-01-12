/* controller settings */
var cs = {
    enabled: true, // default enabled
    speed: 1.0, // defaults to 1.0 speed
}

chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // show page action if video detected on tab
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                css: ["video"]
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.pageAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.set({speed: cs.speed}, function() {
        console.log("The playback speed is 1.0 (default)");
    });
    console.log('Video playback speed enabled');
})