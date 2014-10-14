var closeTab;
var closeTabInterval;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tabId != null && tabId == closeTab) {

            //Set interval to ensure the tab is being closed.
            closeTabInterval = setInterval(function() {
                chrome.tabs.remove(tabId, function() {
                    if (!chrome.runtime.lastError) {
                        closeTab = null;

                        clearInterval(closeTabInterval);
                    }
                });
            }, 10);
        }
    }
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
    openTab('nl');
});

function openTab(language) {
    var createProperties = {};
    createProperties.url = 'chrome://settings-frame/languages?lang=' + language;
    createProperties.active = false;

    chrome.tabs.create(createProperties, function(tab) {
        closeTab = tab.id;
    });
}