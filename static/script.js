var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};

//Found me! Damn you're good! Heres a third of the puzzle peice: _c00l}