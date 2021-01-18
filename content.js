
function updateSourceImage() {
  const ImageType = document.getElementsByTagName("img");
   const ArrayOfImages = Array.from(ImageType);
   ArrayOfImages.forEach(updateSameImage);
 }
//récupère les images, créé un tableau, et applique la fonction updateSameImage sur chaque élément du tableau

function updateSameImage(el) {
  chrome.storage.sync.get(
    'monImage',
    function(result) {
      el.src = result.monImage;
    }
  );
 }
// Récupère l'url stockée dans google storage par l'utilisateur via la fenêtre popup, marche grâce à une fonction call back
// @see https://subscription.packtpub.com/book/web_development/9781783287314/1/ch01lvl1sec10/the-callback-pattern

updateSourceImage(); // Applique la fonction

// fonction qui retourne tous les textes que match avec l'expression régulière entre parenthèses
function extractEmails ( text ){
    return text.match(/([a-zA-Z0-9\._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
}
console.log(extractEmails(document.body.innerHTML));
    

   
