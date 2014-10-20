var closeTabs = [];

var currentLanguage;

var websites;
var enabledLanguages;
var defaultLanguage;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == 'update') {
        getStorage();
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tabId != null && closeTabs.indexOf(tabId) !== -1) {
            closeTab(tabId);
            return;
        }

        checkTab(tabId);
    }
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
    checkTab(activeInfo.tabId);
});

chrome.browserAction.onClicked.addListener(function(tab) {
    if (closeTabs.length != 0) {
        return;
    }

    var url = new URL(tab.url);
    var nextLanguage;

    if (currentLanguage == 'nl') {
        nextLanguage = 'en-US';
    } else {
        nextLanguage = 'nl';
    }

    setLanguage(nextLanguage);

    websites = $.map(websites, function(website) {
        if (website.hostname == url.hostname.replace('www.', '')) {
            return null;
        }

        return website;
    });

    var website = {};
    website.hostname = url.hostname.replace('www.', '');
    website.language = nextLanguage;

    websites.push(website);

    setStorage();
});

function checkTab(tabId) {
    chrome.tabs.get(tabId, function(tab) {
        var url = new URL(tab.url);

        chrome.storage.sync.get({ websites: [] }, function(items) {
            items.websites.forEach(function(website) {
                if (website == null) {
                    return;
                }

                if (website.hostname == url.hostname.replace('www.', '')) {
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
    createProperties.focused = false;
    createProperties.width = 1;
    createProperties.height = 1;
    createProperties.left = 1;
    createProperties.top = 1;
    createProperties.type = 'popup';

    chrome.windows.create(createProperties, function(window) {
        closeTabs.push(window.tabs[0].id);
    });
}

function closeTab(tabId) {
    setTimeout(function() {
        chrome.tabs.remove(tabId, function() {
            if (!chrome.runtime.lastError) {
                closeTabs.remove(tabId);
            } else {
                closeTab(tabId);
            }
        });
    }, 10);
}

function getStorage(callback) {
    chrome.storage.sync.get({ websites: [], enabledLanguages: [], defaultLanguage: null }, function(items) {
        websites = items.websites;
        enabledLanguages = items.enabledLanguages;
        defaultLanguage = items.defaultLanguage;

        if (typeof callback != 'undefined') {
            callback();
        }
    });
}

function setStorage(callback) {
    chrome.storage.sync.set({ websites: websites, enabledLanguages: enabledLanguages, defaultLanguage: defaultLanguage }, function() {
        if (typeof callback != 'undefined') {
            callback();
        }
    });
}

getStorage(function() {
   //set default language
});

//Some prototype things, just to be lacy.
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};
