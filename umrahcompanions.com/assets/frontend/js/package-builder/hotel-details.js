function changeImage(el) {
  let mainImage = document.getElementById("mainImage");
  mainImage.src = el.src;
}
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    M.Collapsible.init(elems, {
      accordion: true // true = only one open at a time, false = multiple can stay open
    });
  });
