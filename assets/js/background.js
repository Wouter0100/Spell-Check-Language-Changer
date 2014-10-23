var closeTabs = [];

var currentLanguage;

var websites;
var enabledLanguages;
var defaultLanguage;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type == 'update') {
        getStorage(function() {
            if (enabledLanguages.indexOf(currentLanguage) === -1) {
                setLanguage(defaultLanguage);
            }
        });
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        if (tabId != null && closeTabs.indexOf(tabId) !== -1) {
            closeTab(tabId);
            return;
        }
    }

    checkTab(tabId);
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
    checkTab(activeInfo.tabId);
});

chrome.windows.onFocusChanged.addListener(function(windowId) {
    chrome.tabs.query({ active: true, windowId: windowId }, function(tab) {
        checkTab(tab[0].id);
    })
});

chrome.browserAction.onClicked.addListener(function(tab) {
    var url = new URL(tab.url);
    var nextLanguage;

    var currentLanguageIndex = enabledLanguages.indexOf(currentLanguage);

    if (currentLanguageIndex == -1) {
        nextLanguage = defaultLanguage;
    } else {
        var nextLanguageIndex = currentLanguageIndex + 1;

        if (typeof enabledLanguages[nextLanguageIndex] != 'undefined') {
            nextLanguage = enabledLanguages[nextLanguageIndex];
        } else {
            if (typeof enabledLanguages[0] != 'undefined') {
                nextLanguage = enabledLanguages[0];
            } else {
                nextLanguage = null;
            }
        }
    }

    setLanguage(nextLanguage);

    if (nextLanguage == null) {
        if (confirm('Please enable a language within our Options page. Click Ok to open our Options page.')) {
            chrome.tabs.create({ url: 'options.html' });
        }
        return;
    }

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
            $.each(items.websites, function(index, website) {
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
    // Reset everything when language is null, then in "disabled" mode
    if (language == null) {
        chrome.browserAction.setBadgeText({ text: '' });
        currentLanguage = null;

        return;
    }

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
    setLanguage(defaultLanguage);
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
