const display = document.getElementById("display");

function appendtodisplay(input) {
    display.value += input;
}

function cleardisplay() {
    display.value = "";

}
function calculate(){
    try{ 
        display.value = eval(display.value);
    }
catch(Error) {
      display.value = "Error"
    }
}

function appendtodisplay1(input) {
    display.value = display.value.toString().slice(0,-1)
}