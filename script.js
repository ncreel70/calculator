const obj = {
    number1: () => { 
        if (document.getElementById('displayOutput').innerHTML === '0') {
            document.getElementById('displayOutput').innerHTML = '1';
        } else {
            document.getElementById('displayOutput').innerHTML = document.getElementById('displayOutput').innerHTML + '1';
        } 
        },
    number2: () => { if (document.getElementById('displayOutput').innerHTML === '0') {
        document.getElementById('displayOutput').innerHTML = '2';
    } else {
        document.getElementById('displayOutput').innerHTML = document.getElementById('displayOutput').innerHTML + '2';
    } 
        },
    number3: () => { if (document.getElementById('displayOutput').innerHTML === '0') {
        document.getElementById('displayOutput').innerHTML = '3';
    } else {
        document.getElementById('displayOutput').innerHTML = document.getElementById('displayOutput').innerHTML + '3';
    } 
        },
    number4: () => { if (document.getElementById('displayOutput').innerHTML === '0') {
        document.getElementById('displayOutput').innerHTML = '4';
    } else {
        document.getElementById('displayOutput').innerHTML = document.getElementById('displayOutput').innerHTML + '4';
    } 
        },
    number5: () => { if (document.getElementById('displayOutput').innerHTML === '0') {
        document.getElementById('displayOutput').innerHTML = '5';
    } else {
        document.getElementById('displayOutput').innerHTML = document.getElementById('displayOutput').innerHTML + '5';
    } 
        },
    number6: () => { if (document.getElementById('displayOutput').innerHTML === '0') {
        document.getElementById('displayOutput').innerHTML = '6';
    } else {
        document.getElementById('displayOutput').innerHTML = document.getElementById('displayOutput').innerHTML + '6';
    } 
        },
    number7: () => { if (document.getElementById('displayOutput').innerHTML === '0') {
        document.getElementById('displayOutput').innerHTML = '7';
    } else {
        document.getElementById('displayOutput').innerHTML = document.getElementById('displayOutput').innerHTML + '7';
    } 
        },
    number8: () => { if (document.getElementById('displayOutput').innerHTML === '0') {
        document.getElementById('displayOutput').innerHTML = '8';
    } else {
        document.getElementById('displayOutput').innerHTML = document.getElementById('displayOutput').innerHTML + '8';
    } 
        },
    number9: () => { if (document.getElementById('displayOutput').innerHTML === '0') {
        document.getElementById('displayOutput').innerHTML = '9';
    } else {
        document.getElementById('displayOutput').innerHTML = document.getElementById('displayOutput').innerHTML + '9';
    } 
        },
    number0: () =>{  if (document.getElementById('displayOutput').innerHTML === '0') {
        document.getElementById('displayOutput').innerHTML = '0'
    } else {
        document.getElementById('displayOutput').innerHTML = document.getElementById('displayOutput').innerHTML + '0';
    }
}
};

[...document.getElementsByClassName('number')].forEach(function(item) {
    item.addEventListener('click', function() {
      obj[this.id]();
    })
  })

