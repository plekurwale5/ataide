console.log("Hello1");

document.addEventListener('DOMContentLoaded', function () {
  var checkPageButton = document.getElementById('checkPage');
  console.log("Hello2", checkPageButton);
  checkPageButton.addEventListener('click', function () {
    console.log("Hello3");
    console.log("Hello");
    chrome.windows.create({
      // Just use the full URL if you need to open an external page
      url: chrome.runtime.getURL("Homepage/homePage.html"),
      type: "popup"
    });
  });
}, false);