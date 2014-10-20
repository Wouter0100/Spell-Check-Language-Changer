var languages = [
    {"code": "af", "displayName": "Afrikaans", "nativeDisplayName": "Afrikaans", "textDirection": "ltr"},
    {"code": "sq", "displayName": "Albanian", "nativeDisplayName": "shqipe", "textDirection": "ltr"},
    {"code": "am", "displayName": "Amharic", "nativeDisplayName": "አማርኛ", "textDirection": "ltr"},
    {"code": "ar", "displayName": "Arabic", "nativeDisplayName": "‎‫العربية‬‎", "textDirection": "ltr"},
    {"code": "hy", "displayName": "Armenian", "nativeDisplayName": "Հայերէն", "textDirection": "ltr"},
    {"code": "az", "displayName": "Azerbaijani", "nativeDisplayName": "azərbaycanca", "textDirection": "ltr"},
    {"code": "eu", "displayName": "Basque", "nativeDisplayName": "euskara", "textDirection": "ltr"},
    {"code": "be", "displayName": "Belarusian", "nativeDisplayName": "беларуская", "textDirection": "ltr"},
    {"code": "bn", "displayName": "Bengali", "nativeDisplayName": "বাংলা", "textDirection": "ltr"},
    {"code": "bh", "displayName": "Bihari", "nativeDisplayName": "Bihari", "textDirection": "ltr"},
    {"code": "bs", "displayName": "Bosnian", "nativeDisplayName": "bosanski", "textDirection": "ltr"},
    {"code": "br", "displayName": "Breton", "nativeDisplayName": "Breton", "textDirection": "ltr"},
    {"code": "bg", "displayName": "Bulgarian", "nativeDisplayName": "български", "textDirection": "ltr"},
    {"code": "ca", "displayName": "Catalan", "nativeDisplayName": "català", "textDirection": "ltr"},
    {"code": "zh", "displayName": "Chinese", "nativeDisplayName": "中文", "textDirection": "ltr"},
    {"code": "zh-CN", "displayName": "Chinese (Simplified Han)", "nativeDisplayName": "中文（简体中文）", "textDirection": "ltr"},
    {"code": "zh-TW", "displayName": "Chinese (Traditional Han)", "nativeDisplayName": "中文 (繁體中文)", "textDirection": "ltr"},
    {"code": "co", "displayName": "Corsican", "nativeDisplayName": "Corsican", "textDirection": "ltr"},
    {"code": "hr", "displayName": "Croatian", "nativeDisplayName": "hrvatski", "textDirection": "ltr"},
    {"code": "cs", "displayName": "Czech", "nativeDisplayName": "čeština", "textDirection": "ltr"},
    {"code": "da", "displayName": "Danish", "nativeDisplayName": "dansk", "textDirection": "ltr"},
    {"code": "nl", "displayName": "Dutch", "nativeDisplayName": "Nederlands", "textDirection": "ltr"},
    {"code": "en", "displayName": "English", "nativeDisplayName": "English", "textDirection": "ltr"},
    {"code": "en-AU", "displayName": "English (Australia)", "nativeDisplayName": "English (Australia)", "textDirection": "ltr"},
    {"code": "en-CA", "displayName": "English (Canada)", "nativeDisplayName": "English (Canada)", "textDirection": "ltr"},
    {"code": "en-NZ", "displayName": "English (New Zealand)", "nativeDisplayName": "English (New Zealand)", "textDirection": "ltr"},
    {"code": "en-ZA", "displayName": "English (South Africa)", "nativeDisplayName": "English (South Africa)", "textDirection": "ltr"},
    {"code": "en-GB", "displayName": "English (United Kingdom)", "nativeDisplayName": "English (United Kingdom)", "textDirection": "ltr"},
    {"code": "en-US", "displayName": "English (United States)", "nativeDisplayName": "English (United States)", "textDirection": "ltr"},
    {"code": "eo", "displayName": "Esperanto", "nativeDisplayName": "esperanto", "textDirection": "ltr"},
    {"code": "et", "displayName": "Estonian", "nativeDisplayName": "eesti", "textDirection": "ltr"},
    {"code": "fo", "displayName": "Faroese", "nativeDisplayName": "føroyskt", "textDirection": "ltr"},
    {"code": "fil", "displayName": "Filipino", "nativeDisplayName": "Filipino", "textDirection": "ltr"},
    {"code": "fi", "displayName": "Finnish", "nativeDisplayName": "suomi", "textDirection": "ltr"},
    {"code": "fr", "displayName": "French", "nativeDisplayName": "français", "textDirection": "ltr"},
    {"code": "fr-CA", "displayName": "French (Canada)", "nativeDisplayName": "français (Canada)", "textDirection": "ltr"},
    {"code": "fr-FR", "displayName": "French (France)", "nativeDisplayName": "français (France)", "textDirection": "ltr"},
    {"code": "fr-CH", "displayName": "French (Switzerland)", "nativeDisplayName": "français (Suisse)", "textDirection": "ltr"},
    {"code": "gl", "displayName": "Galician", "nativeDisplayName": "galego", "textDirection": "ltr"},
    {"code": "ka", "displayName": "Georgian", "nativeDisplayName": "ქართული", "textDirection": "ltr"},
    {"code": "de", "displayName": "German", "nativeDisplayName": "Deutsch", "textDirection": "ltr"},
    {"code": "de-AT", "displayName": "German (Austria)", "nativeDisplayName": "Deutsch (Österreich)", "textDirection": "ltr"},
    {"code": "de-DE", "displayName": "German (Germany)", "nativeDisplayName": "Deutsch (Deutschland)", "textDirection": "ltr"},
    {"code": "de-CH", "displayName": "German (Switzerland)", "nativeDisplayName": "Deutsch (Schweiz)", "textDirection": "ltr"},
    {"code": "el", "displayName": "Greek", "nativeDisplayName": "Ελληνικά", "textDirection": "ltr"},
    {"code": "gn", "displayName": "Guarani", "nativeDisplayName": "Guarani", "textDirection": "ltr"},
    {"code": "gu", "displayName": "Gujarati", "nativeDisplayName": "ગુજરાતી", "textDirection": "ltr"},
    {"code": "ha", "displayName": "Hausa", "nativeDisplayName": "Hausa", "textDirection": "ltr"},
    {"code": "haw", "displayName": "Hawaiian", "nativeDisplayName": "ʻōlelo Hawaiʻi", "textDirection": "ltr"},
    {"code": "he", "displayName": "Hebrew", "nativeDisplayName": "‎‫עברית‬‎", "textDirection": "ltr"},
    {"code": "hi", "displayName": "Hindi", "nativeDisplayName": "हिन्दी", "textDirection": "ltr"},
    {"code": "hu", "displayName": "Hungarian", "nativeDisplayName": "magyar", "textDirection": "ltr"},
    {"code": "is", "displayName": "Icelandic", "nativeDisplayName": "íslenska", "textDirection": "ltr"},
    {"code": "id", "displayName": "Indonesian", "nativeDisplayName": "Bahasa Indonesia", "textDirection": "ltr"},
    {"code": "ia", "displayName": "Interlingua", "nativeDisplayName": "Interlingua", "textDirection": "ltr"},
    {"code": "ga", "displayName": "Irish", "nativeDisplayName": "Gaeilge", "textDirection": "ltr"},
    {"code": "it", "displayName": "Italian", "nativeDisplayName": "italiano", "textDirection": "ltr"},
    {"code": "it-IT", "displayName": "Italian (Italy)", "nativeDisplayName": "italiano (Italia)", "textDirection": "ltr"},
    {"code": "it-CH", "displayName": "Italian (Switzerland)", "nativeDisplayName": "italiano (Svizzera)", "textDirection": "ltr"},
    {"code": "ja", "displayName": "Japanese", "nativeDisplayName": "日本語", "textDirection": "ltr"},
    {"code": "jw", "displayName": "Javanese", "nativeDisplayName": "Javanese", "textDirection": "ltr"},
    {"code": "kn", "displayName": "Kannada", "nativeDisplayName": "ಕನ್ನಡ", "textDirection": "ltr"},
    {"code": "kk", "displayName": "Kazakh", "nativeDisplayName": "Қазақ", "textDirection": "ltr"},
    {"code": "km", "displayName": "Khmer", "nativeDisplayName": "ភាសាខ្មែរ", "textDirection": "ltr"},
    {"code": "ky", "displayName": "Kirghiz", "nativeDisplayName": "Kirghiz", "textDirection": "ltr"},
    {"code": "ko", "displayName": "Korean", "nativeDisplayName": "한국어", "textDirection": "ltr"},
    {"code": "ku", "displayName": "Kurdish", "nativeDisplayName": "Kurdish", "textDirection": "ltr"},
    {"code": "lo", "displayName": "Lao", "nativeDisplayName": "Lao", "textDirection": "ltr"},
    {"code": "la", "displayName": "Latin", "nativeDisplayName": "Latin", "textDirection": "ltr"},
    {"code": "lv", "displayName": "Latvian", "nativeDisplayName": "latviešu", "textDirection": "ltr"},
    {"code": "ln", "displayName": "Lingala", "nativeDisplayName": "Lingala", "textDirection": "ltr"},
    {"code": "lt", "displayName": "Lithuanian", "nativeDisplayName": "lietuvių", "textDirection": "ltr"},
    {"code": "mk", "displayName": "Macedonian", "nativeDisplayName": "македонски", "textDirection": "ltr"},
    {"code": "ms", "displayName": "Malay", "nativeDisplayName": "Bahasa Melayu", "textDirection": "ltr"},
    {"code": "ml", "displayName": "Malayalam", "nativeDisplayName": "മലയാളം", "textDirection": "ltr"},
    {"code": "mt", "displayName": "Maltese", "nativeDisplayName": "Malti", "textDirection": "ltr"},
    {"code": "mr", "displayName": "Marathi", "nativeDisplayName": "मराठी", "textDirection": "ltr"},
    {"code": "mo", "displayName": "Moldavian", "nativeDisplayName": "mo", "textDirection": "ltr"},
    {"code": "mn", "displayName": "Mongolian", "nativeDisplayName": "Mongolian", "textDirection": "ltr"},
    {"code": "ne", "displayName": "Nepali", "nativeDisplayName": "नेपाली", "textDirection": "ltr"},
    {"code": "no", "displayName": "Norwegian", "nativeDisplayName": "norsk", "textDirection": "ltr"},
    {"code": "nb", "displayName": "Norwegian Bokmål", "nativeDisplayName": "norsk bokmål", "textDirection": "ltr"},
    {"code": "nn", "displayName": "Norwegian Nynorsk", "nativeDisplayName": "nynorsk", "textDirection": "ltr"},
    {"code": "oc", "displayName": "Occitan", "nativeDisplayName": "Occitan", "textDirection": "ltr"},
    {"code": "or", "displayName": "Oriya", "nativeDisplayName": "ଓଡ଼ିଆ", "textDirection": "ltr"},
    {"code": "om", "displayName": "Oromo", "nativeDisplayName": "Oromoo", "textDirection": "ltr"},
    {"code": "ps", "displayName": "Pashto", "nativeDisplayName": "‎‫پښتو‬‎", "textDirection": "ltr"},
    {"code": "fa", "displayName": "Persian", "nativeDisplayName": "‎‫فارسی‬‎", "textDirection": "ltr"},
    {"code": "pl", "displayName": "Polish", "nativeDisplayName": "polski", "textDirection": "ltr"},
    {"code": "pt", "displayName": "Portuguese", "nativeDisplayName": "português", "textDirection": "ltr"},
    {"code": "pt-BR", "displayName": "Portuguese (Brazil)", "nativeDisplayName": "português (Brasil)", "textDirection": "ltr"},
    {"code": "pt-PT", "displayName": "Portuguese (Portugal)", "nativeDisplayName": "português (Portugal)", "textDirection": "ltr"},
    {"code": "pa", "displayName": "Punjabi", "nativeDisplayName": "ਪੰਜਾਬੀ", "textDirection": "ltr"},
    {"code": "qu", "displayName": "Quechua", "nativeDisplayName": "Quechua", "textDirection": "ltr"},
    {"code": "ro", "displayName": "Romanian", "nativeDisplayName": "română", "textDirection": "ltr"},
    {"code": "rm", "displayName": "Romansh", "nativeDisplayName": "rumantsch", "textDirection": "ltr"},
    {"code": "ru", "displayName": "Russian", "nativeDisplayName": "русский", "textDirection": "ltr"},
    {"code": "gd", "displayName": "Scottish Gaelic", "nativeDisplayName": "Scottish Gaelic", "textDirection": "ltr"},
    {"code": "sr", "displayName": "Serbian", "nativeDisplayName": "Српски", "textDirection": "ltr"},
    {"code": "sh", "displayName": "Serbo-Croatian", "nativeDisplayName": "Serbo-Croatian", "textDirection": "ltr"},
    {"code": "sn", "displayName": "Shona", "nativeDisplayName": "chiShona", "textDirection": "ltr"},
    {"code": "sd", "displayName": "Sindhi", "nativeDisplayName": "Sindhi", "textDirection": "ltr"},
    {"code": "si", "displayName": "Sinhala", "nativeDisplayName": "සිංහල", "textDirection": "ltr"},
    {"code": "sk", "displayName": "Slovak", "nativeDisplayName": "slovenčina", "textDirection": "ltr"},
    {"code": "sl", "displayName": "Slovenian", "nativeDisplayName": "slovenščina", "textDirection": "ltr"},
    {"code": "so", "displayName": "Somali", "nativeDisplayName": "Soomaali", "textDirection": "ltr"},
    {"code": "st", "displayName": "Southern Sotho", "nativeDisplayName": "Southern Sotho", "textDirection": "ltr"},
    {"code": "es", "displayName": "Spanish", "nativeDisplayName": "español", "textDirection": "ltr"},
    {"code": "es-419", "displayName": "Spanish (Latin America)", "nativeDisplayName": "español (Latinoamérica)", "textDirection": "ltr"},
    {"code": "su", "displayName": "Sundanese", "nativeDisplayName": "Sundanese", "textDirection": "ltr"},
    {"code": "sw", "displayName": "Swahili", "nativeDisplayName": "Kiswahili", "textDirection": "ltr"},
    {"code": "sv", "displayName": "Swedish", "nativeDisplayName": "svenska", "textDirection": "ltr"},
    {"code": "tg", "displayName": "Tajik", "nativeDisplayName": "тоҷикӣ", "textDirection": "ltr"},
    {"code": "ta", "displayName": "Tamil", "nativeDisplayName": "தமிழ்", "textDirection": "ltr"},
    {"code": "tt", "displayName": "Tatar", "nativeDisplayName": "Tatar", "textDirection": "ltr"},
    {"code": "te", "displayName": "Telugu", "nativeDisplayName": "తెలుగు", "textDirection": "ltr"},
    {"code": "th", "displayName": "Thai", "nativeDisplayName": "ไทย", "textDirection": "ltr"},
    {"code": "ti", "displayName": "Tigrinya", "nativeDisplayName": "ትግርኛ", "textDirection": "ltr"},
    {"code": "to", "displayName": "Tonga", "nativeDisplayName": "lea fakatonga", "textDirection": "ltr"},
    {"code": "tr", "displayName": "Turkish", "nativeDisplayName": "Türkçe", "textDirection": "ltr"},
    {"code": "tk", "displayName": "Turkmen", "nativeDisplayName": "Turkmen", "textDirection": "ltr"},
    {"code": "tw", "displayName": "Twi", "nativeDisplayName": "Twi", "textDirection": "ltr"},
    {"code": "ug", "displayName": "Uighur", "nativeDisplayName": "Uighur", "textDirection": "ltr"},
    {"code": "uk", "displayName": "Ukrainian", "nativeDisplayName": "українська", "textDirection": "ltr"},
    {"code": "ur", "displayName": "Urdu", "nativeDisplayName": "‎‫اردو‬‎", "textDirection": "ltr"},
    {"code": "uz", "displayName": "Uzbek", "nativeDisplayName": "Ўзбек", "textDirection": "ltr"},
    {"code": "vi", "displayName": "Vietnamese", "nativeDisplayName": "Tiếng Việt", "textDirection": "ltr"},
    {"code": "cy", "displayName": "Welsh", "nativeDisplayName": "Cymraeg", "textDirection": "ltr"},
    {"code": "fy", "displayName": "Western Frisian", "nativeDisplayName": "Western Frisian", "textDirection": "ltr"},
    {"code": "xh", "displayName": "Xhosa", "nativeDisplayName": "Xhosa", "textDirection": "ltr"},
    {"code": "yi", "displayName": "Yiddish", "nativeDisplayName": "Yiddish", "textDirection": "ltr"},
    {"code": "yo", "displayName": "Yoruba", "nativeDisplayName": "Èdè Yorùbá", "textDirection": "ltr"},
    {"code": "zu", "displayName": "Zulu", "nativeDisplayName": "isiZulu", "textDirection": "ltr"}
];

var enabledLanguages;
var defaultLanguage;
var websites;

$(function () {

    $.each(languages, function(index, language) {
        $('#enabled_languages').append('<option value="' + language.code + '">' + language.displayName + '</option>');
    });

    $('#enabled_languages').multiselect({
        buttonWidth: '100%',
        onChange: function (option, checked, select) {
            var language = $(option).val();

            if (checked) {
                enabledLanguages.push($(option).val());
            } else {
                enabledLanguages.splice(enabledLanguages.indexOf(language), 1);

                websites = $.map(websites, function(website) {
                    if (website.language == language) {
                        return null;
                    }

                    return website;
                });
            }

            updateWebsites(); //also updates languages
            setStorage();
        }
    });

    $(window.document).on('change', '.websites tr[data-hostname] select', function(e) {
        var hostname = $(this).closest('tr').data('hostname');
        var language = $(this).val();

        $.each(websites, function(index, website) {
            if (website.hostname == hostname) {
                website.language = language;
            }
        });

        updateWebsites();
        chrome.storage.sync.set({ websites: websites }, function() {
            chrome.runtime.sendMessage({ type: 'update' });
        });
    });

    $(window.document).on('click', '.remove', function(e) {
        var hostname = $(this).closest('tr').data('hostname');

        websites = $.map(websites, function(website) {
            if (website.hostname == hostname) {
                return null;
            }

            return website;
        });

        updateWebsites();
        setStorage();
    });

    $('#default_language').change(function(e) {
        console.log($(this).val());
    });

    $('.add button').click(function(e) {
        var hostname = $(this).closest('.add').find('input');
        var language = $(this).closest('.add').find('select');

        if (hostname.val().replace('www.', '').trim().length == 0) {
            showError('You didn\'t entered a hostname, damn you!');
            return;
        }

        var website = {};
        website.hostname = hostname.val().replace('www.', '');
        website.language = language.val();

        websites.push(website);

        hostname.val('');

        updateWebsites();
        setStorage();
    });

    getStorage(function() {
        $('#enabled_languages').multiselect('select', enabledLanguages);

        updateWebsites();
    });
});

function updateLanguages() {
    $('.languages-selected').html('');

    $.each(languages, function (index, language) {
        if (enabledLanguages.indexOf(language.code) !== -1) {
            $('.languages-selected').each(function() {
                var isSelected = false;

                if (typeof $(this).closest('tr').data('language') != 'undefined') {
                    if (language.code == $(this).closest('tr').data('language')) {
                        isSelected = true;
                    }
                }

                $(this).append('<option value="' + language.code + '" ' + ((isSelected) ? 'selected="selected"' : '') + '>' + language.displayName + '</option>');
            });
        }
    });
}

function updateWebsites() {
    $('.websites tr[data-hostname]').remove();

    $.each(websites, function(index, website) {
        if (website == null) {
            return;
        }

        $('.websites tr:last').before('<tr data-hostname="' + website.hostname + '" data-language="' + website.language + '"><td>' + website.hostname + '</td><td><select class="form-control languages-selected"></select></td><td><button type="button" class="btn btn-danger"><span class="glyphicon glyphicon-remove remove"></span></button></td></tr>')
    });

    updateLanguages();
}

function showError(message) {
    $('.alert-danger').stop().fadeOut(function() {
       $(this).html('What did you tried? ' + message).fadeIn().delay(20000).fadeOut();
    });
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
        chrome.runtime.sendMessage({ type: 'update' });

        if (typeof callback != 'undefined') {
            callback();
        }
    });
}
