function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
function() {
  let number = prompt("Write a number");
  if (number > 1) alert(1);
  else if (number < 1) alert(-1);
  else alert(0);
}

function() {
  let result = a + b < 4 ? "Below" : "Over";
}

function(){
    alert( null || 2 || undefined ); / 2
}

function(){
    alert( alert(1) || 2 || alert(3) ); / 1 => 2
}

function(){
    alert( 1 && null && 2 ); / null
}

function(){
    alert( alert(1) && alert(2) ) / 1 => undefined 
}

function(){
    alert( null || 2 && 3 || 4 ); /3
}
function age(){
    let age = 14;
    if(!(age >= 14) && !(age <= 90)){

    }
    if(age < 14 && age > 90){

    }
}

function(){
    let log = prompt('Your login:')
    let pass;
    if(log && log == "Admin")
        if(pass = prompt("Your password") == 'TheMaster') alert("Welcome")
        else if(pass == null) alert('Canceled')
        else alert("Wrong password")
    else if(log && log != "Admin") alert('I don`t lnow you')
    else alert('Canceled')
}


function(){
    let i = 0;
    while (++i < 5) alert( i ); // 1 => 2 => 3 => 4 

    let j = 0;
    while (j++ < 5) alert( j ); // 1 => 2 => 3 => 4 => 5
}

function(){
    for (let i = 0; i < 5; i++) alert( i ); // 0 => 1 => 2 => 3 => 4 
    for (let i = 0; i < 5; ++i) alert( i ); // 0 => 1 => 2 => 3 => 4
}

function (){
    for(let i = 2; i <= 10; i++) alert(i)
}

function (){
    for (let i = 0; i < 3; i++) {
        alert( `number ${i}!` );
    }
    
    let i = 0
    while(i<3){
        alert(`number ${i}`)
        i++
    }
}

function num(){
    let input = prompt('Write a bigger number than 100:');
    while(input<100) input = prompt('Number must be bigger than 100! Try again: ');
}

function prime(){
    let n = prompt("Set n:")
    
    for(let i = 2; i < n; i++){
        if(i % 2 !== 0){
            let temp = 0;
            for(let j = 2; j < i; j++){
                if(i%j === 0) temp++
            }
            if(temp === 0){
                console.log(`Prime number: ${i}`)
            }
        }
    }
}

function browser(){
    switch (browser) {
        case 'Edge':
          alert( "You've got the Edge!" );
          break;
      
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
          alert( 'Okay we support these browsers too' );
          break;
      
        default:
          alert( 'We hope that this page looks ok!' );
    }
}

function checkPormpt(){
    let a = +prompt('a?', '');

    if (a == 0) {
    alert( 0 );
    }
    if (a == 1) {
    alert( 1 );
    }

    if (a == 2 || a == 3) {
    alert( '2,3' );
    }

    function checkAge(age) {
        if (age > 18) {
          return true;
        } else {
          return confirm('Did parents allow you?');
        }
      }

    function checkAge(age) {
        if (age > 18) {
          return true;
        }
        // ...
        return confirm('Did parents allow you?');
    }

    function checkAge(age) {
        if (age > 18) {
          return true;
        } else {
          return confirm('Did parents allow you?');
        }
      }
    
    function checkAge(age){
        return age > 18 ? true : confirm('Did parents allow you?');
    }
    function checkAge(age){
        return age > 18 || confirm('Did parents allow you?');
    }


    function min(a, b){
        return a < b ? b : a > b ? b : a;
    }

    let a = prompt('Select number:');
    let b = prompt('Select power number:');
    alert(pow (a, b));

    function pow(a, b){
        return a ** b;
    }


function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );
  
function sumTo(n){
    let result = 0;
    for(let i=1; i <= n; i++){    
        result += i;
        console.log(result);
    }
    return result;
}

function sumTo(n){
    return n === 1 ? n : n + sumTo(n-1);
}

function sum(n){
    return ((2 + n-1)/2)*n;
}


function fact(n){
    return n === 1 ? n : n * factorial(n-1);
}
