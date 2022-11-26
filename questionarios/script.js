function showp(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
  return false;
}

function show(shown, hidden) {
	//if(isValid(hidden)){
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
	//}
  return false;
}

var choice;
var endOfPath;

function isValid(current){
	valid = true;
	
	var currentPage;
	currentPage = document.getElementById(current);
	
	var textInputs;
  	textInputs = currentPage.getElementsByClassName("form-control");
	
	if (textInputs != null){
		for (i = 0; i < textInputs.length; i++) {
		// If a field is empty...
		if ((textInputs[i].value == "") && textInputs[i].style.display!='none') {
			alert("textfalse");
		valid = false;
		}
		}
	}

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
			alert("checkboxfalse");
			valid = false;
		}
		
	}
	


	return valid;
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

function bloqueia_outros(x, y) {
    // Get the checkbox
    var checkBox = document.getElementById(x);
    // Get the output text
    var text = document.getElementById(y);

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "none";
    } else {
        text.style.display = "block";
    }
}

function deficiencia(x, y, z) {
    // Get the checkbox
    var checkBox = document.getElementById(x);
    // Get the output text
    var text = document.getElementById(y);
	// Get the output text
    var text1 = document.getElementById(z);

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "block";
		text1.style.display = "block";
    } else {
        text.style.display = "none";
		text1.style.display = "none";
    }
}

function bloqueia_deficiencia(x, y, z) {
    // Get the checkbox
    var checkBox = document.getElementById(x);
    // Get the output text
    var text = document.getElementById(y);
	// Get the output text
    var text1 = document.getElementById(z);

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        text.style.display = "none";
		text1.style.display = "none";
    } else {
        text.style.display = "block";
		text1.style.display = "block";
    }
}