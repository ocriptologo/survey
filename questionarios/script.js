function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
  return false;
}

function outros(x, y) {
    // Get the checkbox
    var checkBox = document.getElementById(x);
    // Get the output text
    var text = document.getElementById(y);

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
  }