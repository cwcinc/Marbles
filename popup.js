// popup.js
document.addEventListener('DOMContentLoaded', function () {
  var changeCssButton = document.getElementById('changeCssButton');

  // Add a click event listener to the button
  changeCssButton.addEventListener('click', function () {
    // Send a message to the content script to trigger CSS change
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'changeCss' });
    });
  });
});
