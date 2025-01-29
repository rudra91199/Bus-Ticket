let sum=0;
let seatArray=[];
let seatDivContainer;
let divContainer;
function seatSelection(id){
    if(seatArray.length<4){

        seatArray.push(id);
        document.getElementById(id).classList.remove('bg-gray-100');
        document.getElementById(id).classList.add('bg-[#1DD100]');
        document.getElementById(id).classList.add('text-white');
        calculateSeatPrice();
        seatShow(id);
        
    }
    else{
        alert('You can select only 4 seats');
    }

}
function ticket(id)
{
   
    seatSelection(id);
    document.getElementById('seat-numbers').innerText= seatArray.length;
    
}   

function seatShow(id)
{
    let seatDiv= document.getElementById('seat-div');
    seatDivContainer= seatDiv;
    const div= document.createElement('div');
    divContainer=div;
   div.classList.add('flex','justify-between','px-8','py-2');

   div.innerHTML =`
    <p class="inter text-[16px] text-gray-500">${id}</p>
     <p class="inter text-[16px] text-gray-500">Economy</p>
    <p class="inter text-[16px] text-gray-500">550</p>
     `;
    seatDiv.appendChild(div); 
  
}
function calculateSeatPrice()
{
    let totalPrice= seatArray.length*550;
    sum = totalPrice;
    document.getElementById('total-price').innerText = sum;
    document.getElementById('grand-total').innerText = sum;
}
function nextPage()
{
    let passangerDetails;
    if(seatArray.length > 0 && Phone.value!=''){
        console.log(Phone.value);

        let passangerName = Name.value;
        let passangerPhoneNumber = Phone.value;
        let passangerEmail= Email.value;
        let totalTickets = seatArray;
        passangerDetails={
            passangerName,passangerPhoneNumber,passangerEmail,totalTickets
        };
        document.getElementById('header-section').classList.add('hidden');
        document.getElementById('main-section').classList.add('hidden');
        document.getElementById('footer-section').classList.add('hidden');
        document.getElementById('next-page').classList.remove('hidden');
    } 
    else{
        alert('You must have to buy at least one ticket & Please insert your Phone Number!');
    }
    console.log(passangerDetails);
    
   
}
function getCoupon()
{
    let couponCode= document.getElementById('coupon-code').value;
    if(couponCode =='Couple 20')
    {
        let getDiscount = (sum*20)/100;
        let price = sum- getDiscount;
        document.getElementById('grand-total').innerText = price;
    }
    else if(couponCode =='NEW15')
    {
        let getDiscount = (sum*15)/100;
        let price = sum- getDiscount;
        document.getElementById('grand-total').innerText = price;
    }
}

function remainingSeat()
{
    document.getElementById('header-section').classList.remove('hidden');
    document.getElementById('main-section').classList.remove('hidden');
    document.getElementById('footer-section').classList.remove('hidden');
    document.getElementById('next-page').classList.add('hidden');
    let seatLeft= 40-seatArray.length;
    document.getElementById('seat-left').innerText = seatLeft;
    seatArray=[];
    seatDivContainer.innerHTML='';
    sum = 0;
    document.getElementById('total-price').innerText = sum;
    document.getElementById('grand-total').innerText = sum;
    
    
}