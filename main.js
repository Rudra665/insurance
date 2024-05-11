function toggleElement() {
  var elements = document.getElementsByClassName("mean-nav");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element && element.style) {
      if (element.style.display === "none") {
        element.style.display = "block";
        element.style.transition = "2.5s ease";
      } else {
        element.style.display = "none";
        element.style.transition = "2.5s ease";
      }
    } else {
      console.error("Element or style object is undefined for index " + i);
    }
  }
}
