'use strict';

let button_createDeployMessage = document.getElementById('createDeployMessage');

button_createDeployMessage.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript({
      file: 'pantheon-commits.js'
    });
  });
};
