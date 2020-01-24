function myFunction() {
    var str1 = 'Hello this is my Orignal String';
    var person = prompt("Please enter your String", "");
    if (person == "Py" || person == "py") {
        str1 = str1;
    } else {

        str1 = person.concat(", ").concat(str1);
        
    }

    document.getElementById("demo").innerHTML = str1;
  
 
}
