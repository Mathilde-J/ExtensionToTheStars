// On selectionne le bouton par son id et est stocké dans une variable pour pouvoir l'utiliser plus facilement.

buttonSave = document.getElementById("save");

// On ajoute un EventListener qui va déclencher, quand on cliquera sur le bouton, une fonction qui va récuperer les images de la page, reload la page et mettre remplacer par l'image entrée dans le popup. 

buttonSave.addEventListener("click", function() {
  const value = document.getElementById("sourceImage").value;
  chrome.tabs.reload();
  chrome.storage.sync.set({"monImage": value}, function(){
  })
});

// cf explication ci-dessus

buttonfetch = document.getElementById("fetch");

// Pareil que pour le bouton du dessus au 'click' on execute le contenu de la page Content.js

buttonfetch.addEventListener("click", function() {
  chrome.tabs.executeScript(null, { file: "content.js" });
  document.getElementById("email").value = "patate";
});


