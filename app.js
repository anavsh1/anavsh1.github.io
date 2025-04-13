var coll = document.getElementsByClassName("comp-title");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    // Get all exp-desc elements for this company
    var nextSibling = this.nextElementSibling;
    while (nextSibling && nextSibling.classList.contains("exp-desc")) {
      nextSibling.classList.toggle("active");
      nextSibling = nextSibling.nextElementSibling;
    }
  });
}