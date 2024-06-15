const allBtn = document.getElementsByClassName('btn-add');

for(const btn of allBtn){
   btn.addEventListener('click', function (e){
       const siteName = e.target.parentNode.childNodes[1].innerText;
       const perSitPrice = getConvertedValue('per-set-price');
       const sitClass = 'Economoy';

       e.target.setAttribute('disabled', false);
    
    // validation check seat 
    const increaseCountCard = getConvertedValue('increase-seat');
    const decreaseCountCard = getConvertedValue('decrease-seat');

    if(increaseCountCard + 1 > 3 || decreaseCountCard - 1 < 0){
      alert('Limit exceeded : only 4 seat allowed.');
    }
   
  e.target.parentNode.style.backgroundColor = '#1DD100';
  e.target.parentNode.style.borderRadius = '10px';
  


    // increase set count 
       const setCount = getConvertedValue('increase-seat');
       document.getElementById('increase-seat').innerText = setCount + 1;
       
    // decrease set count 
    const decreaseSetCount = getConvertedValue('decrease-seat');
    document.getElementById('decrease-seat').innerText = decreaseSetCount - 1;


// append section 
 const appendContainer = document.getElementById('append-container');

    const div = document.createElement('div');
      div.classList.add('selected-div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');


    p1.innerText = siteName;
    p2.innerText = sitClass;
    p3.innerText = perSitPrice;

    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    appendContainer.appendChild(div);
    updateTotalPrice(perSitPrice);
    grandTotal();
   })
}


// grand total and coupon code apply 
function grandTotal(status){
    const totalPrice  = getConvertedValue('total-price');
    if(status == undefined){
      document.getElementById('grand-total').innerText = totalPrice ;
    }

    else{
        const couponCode = document.getElementById('coupon-code').value;
        if( couponCode == 'Couple20'){
      const discount = totalPrice * 0.2;
      const grandTotal = totalPrice - discount;
      document.getElementById('grand-total').innerText = grandTotal;
      document.getElementById('coupon-code').value = '';
        }
        else if(couponCode == 'NEW15'){
            const discount = totalPrice * 0.15;
            const grandTotal = totalPrice - discount;
            document.getElementById('grand-total').innerText = grandTotal;
            document.getElementById('coupon-code').value = '';
        }
        else{
            alert("please Enter a valid coupon code");
            couponCode.setAttribute('disabled', true);
        }
    }
}

// apply button function create disabled 
document.getElementById('coupon-code').addEventListener('keyup', function (e) {
    const text =  e.target.value;
    const button = document.getElementById('apply');
    if(text == 'Couple20' || text == 'NEW15'){
    button.removeAttribute('disabled');
    }
    else{
      button.setAttribute('disabled', true);
    }
})
  
 
// next button function working 

const passengerField = NextButtonFunction("passenger-field");
 const numberField = NextButtonFunction("phoneNumber-field");

function NextButtonFunction(id){
  document.getElementById(id).addEventListener('keyup', function (e) {
    const passengerField = e.target.value; 
    const numberField = e.target.value; 
    const nextButton = document.getElementById('next-btn');

    if (passengerField.length >=1 && numberField.length >= 1) {
      nextButton.removeAttribute('disabled');
    } else {
      nextButton.setAttribute('disabled', true);
    }

  });
}





// total price 
function updateTotalPrice(value){
    const totalPrice = getConvertedValue('total-price');
    const sum = totalPrice + parseInt(value); 
    document.getElementById('total-price').innerText = sum;
}


// per ticket price 
function getConvertedValue(id){
    const Price  = document.getElementById(id).innerText;     
    const convertedPrice = parseInt(Price);
    return convertedPrice;
}



// changing home screen 


function changingPage(){
  const homeScreen = document.getElementById('home-screen');
  homeScreen.classList.add('hidden');

  const continueScreen = document.getElementById('output-section');
  continueScreen.classList.remove('hidden');
}




















































