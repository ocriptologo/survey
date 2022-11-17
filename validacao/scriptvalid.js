function showp(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
  return false;
}

function show(shown, hidden) {
	if(isValid(hidden)){
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
	}
  return false;
}

function isValid(current){
	valid = true;
	
	var currentPage;
	currentPage = document.getElementById(current);


  
	var selectInputs;
  	selectInputs = currentPage.getElementsByTagName("select");
	
	if (selectInputs != null){
		for (i = 0; i < selectInputs.length; i++) {
		// If a field is empty...
		if (selectInputs[i].value == "") {
			alert("selectfalse");
		valid = false;
		}
		}
	}
	
	var checkboxGroup, checkboxInputs, checked = 1;
	checkboxGroup = currentPage.getElementsByClassName("form-group");
	checkboxInputs = checkboxGroup[0].getElementsByClassName("form-check-input");
	if (checkboxInputs.length > 0){
		checked = 0;
		for (i = 0; i < checkboxInputs.length; i++) {
		
		if (checkboxInputs[i].checked) {
			checked++;
		}
		}
		if (checked == 0){
			valid = false;
		}
		
	}
	


	return valid;
}


function o0() {
    // Get the checkbox
    var checkBox = document.getElementById("outro0");
    // Get the output text
    var text = document.getElementById("iii");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
  }