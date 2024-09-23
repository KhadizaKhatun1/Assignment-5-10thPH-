// common input function1
function getInputFiledValue(id){
    const inputAmount=parseFloat(document.getElementById(id).value);
    return inputAmount;
}
// function 2
function getInnerText(id){
    const innText=parseFloat(document.getElementById(id).innerText);
    return innText;
}
// hidden function
function hidden(id){
    const hide=document.getElementById(id).classList.add('hidden');
    
}
// donate now button
const donateNowBtn=document.getElementById('donate-now-btn');
donateNowBtn.addEventListener('click',function(){
    const mainAmount=getInnerText('total-amount');
    console.log(mainAmount)
    const donateAmount1=getInputFiledValue('donate-amount');
    // const donateNoakhali=getInputFiledValue('donate-noakhali');
    if(donateAmount1<=0 || isNaN(donateAmount1)){
        alert('Please Enter The Correct Amount')
    }
    else{
        // donateNoakhali
        const remainingAmount=mainAmount-donateAmount1;
        document.getElementById('total-amount').innerText=remainingAmount;
        document.getElementById('donate-noakhali').innerText=donateAmount1;
        // formatCurrency('donate-amount')
        addToHistory1(donateAmount1);
        // hidden('donate-now-btn');

    }
})
// donate now btn2
const donateNowBtn2=document.getElementById('donate-now-btn2');
    donateNowBtn2.addEventListener('click',function(){
    const mainAmount=getInnerText('total-amount')
    console.log(mainAmount)
    const donateAmount2=getInputFiledValue('donate-amount2');
    // const donateNoakhali=getInputFiledValue('donate-noakhali');
    if(donateAmount2<=0 || isNaN(donateAmount2)){
        alert('Please Enter The Correct Amount')
    }
    else{
        // donateNoakhali
        const remainingAmount=mainAmount-donateAmount2;
        document.getElementById('total-amount').innerText=remainingAmount;
        document.getElementById('donate-feni').innerText=donateAmount2;
        addToHistory2(donateAmount2);
        // hidden('donate-now-btn2');



    }
})
// // donate now btn3
let sum=0;
const donateNowBtn3=document.getElementById('donate-now-btn3');
    donateNowBtn3.addEventListener('click',function(){
    const mainAmount=getInnerText('total-amount')
    console.log(mainAmount)
    const donateAmount3=getInputFiledValue('donate-amount3');
    sum=sum+donateAmount3
    // const donateNoakhali=getInputFiledValue('donate-noakhali');
    if(donateAmount3<=0 || isNaN(donateAmount3)){
        alert('Please Enter The Correct Amount')
    }
    else{
        // donateNoakhali
        const remainingAmount=mainAmount-donateAmount3;
        document.getElementById('total-amount').innerText=remainingAmount;
        document.getElementById('donate-quota').innerText=donateAmount3;
        
        addToHistory3(sum);
        // hidden('donate-now-btn3');
    }
})

// button colors of history and donate button
const historyButton=document.getElementById('history-btn');
const donateButton=document.getElementById('donate-btn');
historyButton.addEventListener('click',function(){
    historyButton.classList.add(
        'bg-btn-colors1',
        
    )
    donateButton.classList.remove('bg-btn-colors1','color2')
    document.getElementById('section-container').classList.add('hidden');
    document.getElementById('section-container2').classList.add('hidden');
    document.getElementById('section-container3').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})
donateButton.addEventListener('click',function(){
    donateButton.classList.add(
        'bg-btn-colors1',
        'text-color2'
    )
    donateButton.classList.add('bg-btn-colors1')
    historyButton.classList.remove('bg-btn-colors1')
    document.getElementById('section-container').classList.remove('hidden');
    document.getElementById('section-container2').classList.remove('hidden');
    document.getElementById('section-container3').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden')

})
// to fixed
// function formatCurrency(amount){
//     return `${amount.toFixed(2)}`
// }

// history
// section 1
function addToHistory1(id) {
    const flood1=document.getElementById('noakhali-flood').innerText;
const historyItem = document.createElement('div');
historyItem.className = 'bg-white p-3 rounded-md  mb-4';

historyItem.innerHTML = `
<div class="flex items-center space-x-4 mt-4 border border-gray-200 p-10 rounded-lg">
    <div>
        <p class='text-xl font-semibold text-gray-900'>${id} Taka ${flood1}</p>
        <p class='text-sm text-gray-500'>Date: ${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka', timeZoneName: 'short' })}</p>
    </div>
</div>
`;

// Get the id from html to add the above elements
const historyContainer = document.getElementById('history-list');
console.log(historyContainer);
historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}
// section 2
function addToHistory2(id) {
    const quota1=document.getElementById('feni-flood').innerText;
const historyItem = document.createElement('div');
historyItem.className = 'bg-white p-3 rounded-md  mb-4';

historyItem.innerHTML = `
<div class="flex items-center space-x-4 mt-4 border border-gray-200 p-10 rounded-lg">
    <div>
        <p class='text-xl font-semibold text-gray-900'>${id} Taka ${quota1}</p>
        <p class='text-sm text-gray-500'>Date: ${new Date().toLocaleString('en-GB', { timeZone: 'Asia/Dhaka', timeZoneName: 'short' })}</p>
    </div>
</div>
`;

// Get the id from html to add the above elements
const historyContainer = document.getElementById('history-list');
console.log(historyContainer);
historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}
// section3
    function addToHistory3(id) {
        const quota1=document.getElementById('quota').innerText;
        const historyItem = document.createElement('div');
        historyItem.className = 'bg-white p-3 rounded-md mb-4';

    historyItem.innerHTML = `
    <div class="flex items-center space-x-4 mt-4 border border-gray-200 p-10 rounded-lg">
        <div>
            <p class='text-xl font-semibold text-gray-900 '>${id} Taka ${quota1}</p>
            <p class='text-sm text-gray-500'>
                Date: ${new Date().toString()}
              </p>
        </div>
    </div>
    `;

    // Get the id from html to add the above elements
    const historyContainer = document.getElementById('history-list');
    console.log(historyContainer);
    historyContainer.appendChild(historyItem);
}
// remove hidden and add hidden


