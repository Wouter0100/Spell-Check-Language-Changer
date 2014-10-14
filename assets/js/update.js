var _GET = {};
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    _GET[key] = value;
});

var language = _GET['lang'];

var script = document.createElement('script');
script.textContent = 'chrome.send("setStringPref", [ "spellcheck.dictionary", "' + language + '" ]); chrome.send("spellCheckLanguageChange", [ "' + language + '" ]);';

(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);