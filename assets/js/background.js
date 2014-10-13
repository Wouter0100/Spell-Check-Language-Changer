var SPELL_CHECK_DICTIONARY_PREF = 'spellcheck.dictionary';

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    console.log(changeInfo);
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
    setLanguage('nl');
});

function setLanguage(language) {
    chrome.send('setStringPref', [ SPELL_CHECK_DICTIONARY_PREF, String(language) ]);

    chrome.send('spellCheckLanguageChange', [language]);
}