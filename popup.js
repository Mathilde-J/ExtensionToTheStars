document.getElementById("save").onclick = function() {
  const value = document.getElementById("sourceImage").value;
  chrome.tabs.reload();
  chrome.storage.sync.set({"monImage": value}, function(){
  })
}

<<<<<<< HEAD
// document.getElementById("fetch").onclick = function extractEmails();
// On a éssayé mais ça marche pas ^
=======
//Au click sur le bouton Go(id=save), on récupère l'url entrée par l'utilisateur (id=sourceImage), puis on la stocke avec chrome storage, associée à la clé MonImage.


//Bordel tests et documentation:
document.getElementById("save").addEventListener("click",function(){
chrome.tabs.reload();
console.log("L'eventlis marche");
});
// User data will be automatically synced with Chrome.
  // @see https://developer.chrome.com/apps/storage


  // el.src = document.getElementById('sourceImage').value;
  // el.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Grumpy_Cat_by_Gage_Skidmore.jpg/1024px-Grumpy_Cat_by_Gage_Skidmore.jpg";
>>>>>>> e51394ebc4a6a9a66619f62f7954a059c993cfaf
