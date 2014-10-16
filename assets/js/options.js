$(function() {
    var languages;
    var websites;

    $('#languages').multiselect({
        onChange: function(option, checked, select) {
            if (checked) {
                languages.push($(option).val());
            } else {
                languages.splice(languages.indexOf($(option).val()), 1);
            }

            chrome.storage.sync.set({ languages: languages });
        }
    });

    chrome.storage.sync.get({
        websites: [],
        languages: []
    }, function(items) {
        websites = items.websites;
        languages = items.languages;

        $('#languages').multiselect('select', languages);
    });
});