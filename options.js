document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('optionsSubmit').addEventListener('click', save_options);

// Function to load options from chrome.storage
function restore_options() {
    chrome.storage.sync.get({
        // Declare default settings for options.html
        siteTitleEnable: true,
        metaDescriptionEnable: true,
        h1TitleEnable: true,
        wfLinkEnable: true,
        loremIpsumEnable: true
    },
    function(items) {
        document.getElementById('siteTitleEnable').checked = items.siteTitleEnable;
        document.getElementById('metaDescriptionEnable').checked = items.metaDescriptionEnable;
        document.getElementById('h1TitleEnable').checked = items.h1TitleEnable;
        document.getElementById('wfLinkEnable').checked = items.wfLinkEnable;
        document.getElementById('loremIpsumEnable').checked = items.loremIpsumEnable;
        document.getElementById('mainDiv').style.display = "block";
        document.getElementById('loadingDiv').style.display = "none";
    });
}

// Saves chosen options to chrome.storage
function save_options() {
    var title = document.getElementById('siteTitleEnable').checked;
    var metaDesc = document.getElementById('metaDescriptionEnable').checked;
    var h1 = document.getElementById('h1TitleEnable').checked;
    var wfLink = document.getElementById('wfLinkEnable').checked;
    var loreIps = document.getElementById('loremIpsumEnable').checked;
    
    chrome.storage.sync.set({
        siteTitleEnable: title,
        metaDescriptionEnable: metaDesc,
        h1TitleEnable: h1,
        wfLinkEnable: wfLink,
        
    });
}