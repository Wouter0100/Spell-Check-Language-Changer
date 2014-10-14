var closeTab;
var closeTabInterval;

var currentLanguage;

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

            return;
        }

        checkTab(tabId);
    }
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
    checkTab(activeInfo.tabId);
});

chrome.browserAction.onClicked.addListener(function(tab) {
    var url = new URL(tab.url);
    var nextLanguage;

    if (currentLanguage == 'nl') {
        nextLanguage = 'en_US';
    } else {
        nextLanguage = 'nl';
    }

    setLanguage(nextLanguage);

    chrome.storage.sync.get({ websites: [] }, function(items) {

        items.websites.forEach(function(website, index) {
            if (website == null) {
                return;
            }

            if (website.hostname == url.hostname) {
               delete items.websites[index];
            }
        });

        var website = {};
        website.hostname = url.hostname;
        website.language = nextLanguage;

        items.websites.push(website);

        chrome.storage.sync.set(items);
    });
});

function checkTab(tabId) {
    chrome.tabs.get(tabId, function(tab) {
        var url = new URL(tab.url);

        chrome.storage.sync.get({ websites: [] }, function(items) {
            items.websites.forEach(function(website) {
                if (website == null) {
                    return;
                }

                if (website.hostname == url.hostname) {
                    setLanguage(website.language);
                }
            });
        });
    });
}

function setLanguage(language) {
    if (currentLanguage != language) {
        openTab(language);

        currentLanguage = language;
        chrome.browserAction.setBadgeText({ text: language });
    }
}

function openTab(language) {
    var createProperties = {};
    createProperties.url = 'chrome://settings-frame/languages?lang=' + language;
    createProperties.active = false;

    chrome.tabs.create(createProperties, function(tab) {
        closeTab = tab.id;
    });
}

setLanguage('nl');