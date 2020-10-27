
document.getElementById("save").onclick = function() {
  const value = document.getElementById("sourceImage").value;
  chrome.tabs.reload();
  chrome.storage.sync.set({"monImage": value}, function(){
  })
}

// document.getElementById("fetch").onclick = function extractEmails();
// On a éssayé mais ça marche pas ^
