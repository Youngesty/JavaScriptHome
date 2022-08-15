document.querySelector('button').addEventListener('click', myClick);

function myClick() {
   let a = document.querySelector('.myInput').value;
   console.log(a);
   Input.value = "";
   duplicateField.textContent = "";
   //document.querySelector('.duplicateField').textContent += a;
}

Input.oninput = function() {
    duplicateField.textContent = Input.value;
}