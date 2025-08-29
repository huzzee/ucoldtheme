function changeImage(el) {
  let mainImage = document.getElementById("mainImage");
  mainImage.src = el.src;
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {
      accordion: true 
    });
  });
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.tooltipped');
  var instances = M.Tooltip.init(elems, {
    enterDelay: 200,   
    exitDelay: 200,    
    margin: 5,        
  });
});
function backtoPackage(){
  window.location.href = "/umrahcompanions.com/BuildUmrahPackage.html?tab=2&step=another-hotel";
}