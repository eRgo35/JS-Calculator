// Calculator

// function Input(val) {
//   var screen = document.getElementById('screen');
//   var preview = document.getElementById('preview');
//   screen.value += val;
//   preview.value = eval(screen.value);
// }

const screen = document.getElementById('screen');
const preview = document.getElementById('preview');
const clear = document.getElementById('clear');
const back = document.getElementById('back');

const verify = (input) => {
  reg = '/([-+]?[0-9]*\.?[0-9]+[\/\+\-\*])+([-+]?[0-9]*\.?[0-9]+)/g';
  if (input.match(reg)) {
    return input;
  }
  else {
    return null;
  }
}

const input = (value) => {
  screen.value += value;
  
  // if (verify(preview.value) != null) {
  //   preview.value = eval(screen.value);
  // }
  preview.value = eval(screen.value);
}

const answer = () => {
  screen.value = eval(screen.value);
  preview.value = '';

  clear.style.display = "block"; 
  back.style.display = "none";
}

const cls = () => {
  screen.value = "";

  clear.style.display = "none"; 
  back.style.display = "block";
}

const bck = () => screen.value = screen.value.substring(0, screen.value.length - 1);