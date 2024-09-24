// common input function1
function getInputFiledValue(id){
    const inputAmount=Number(document.getElementById(id).value);
    return inputAmount;
}
// function 2
function getInnerText(id){
    const innText=Number(document.getElementById(id).innerText);
    return innText;
}

// blog button
const blogBtn=document.getElementById('blog-btn');
blogBtn.addEventListener('click',function(){
    window.location.href='./blog.html'
})
// home button
const homeBtn=document.getElementById('home-btn');
homeBtn.addEventListener('click',function(){
    window.location.href = './index.html';
})
// donate now button
let sum1=0;
const donateNowBtn=document.getElementById('donate-now-btn');
donateNowBtn.addEventListener('click',function(){
    const mainAmount=getInnerText('total-amount');
    const donateAmount1=getInputFiledValue('donate-amount');
    // const donateNoakhali=getInputFiledValue('donate-noakhali');
    if(donateAmount1<=0 || isNaN(donateAmount1) || mainAmount<donateAmount1){
        alert('Please enter the valid amount')
        
    }
    else{
        // donateNoakhali
        const remainingAmount=mainAmount-donateAmount1;
        document.getElementById('total-amount').innerText=remainingAmount;
        sum1=sum1+donateAmount1
        document.getElementById('donate-noakhali').innerText=sum1;
        addToHistory1(donateAmount1);
        const modal = document.getElementById('my_modal_5');
        modal.showModal();

    }
})
// donate now btn2
let sum2=0;
const donateNowBtn2=document.getElementById('donate-now-btn2');
    donateNowBtn2.addEventListener('click',function(){
    const mainAmount=getInnerText('total-amount')
    // console.log(mainAmount)
    const donateAmount2=getInputFiledValue('donate-amount2');
    // const donateNoakhali=getInputFiledValue('donate-noakhali');
    if(donateAmount2<=0 || isNaN(donateAmount2)|| mainAmount<donateAmount2){
        alert('Please enter the valid amount')
    }
    else{
        // donateNoakhali
        const remainingAmount=mainAmount-donateAmount2;
        document.getElementById('total-amount').innerText=remainingAmount;
        sum2=sum2+donateAmount2
        document.getElementById('donate-feni').innerText=sum2;
        addToHistory2(donateAmount2);
        const modal = document.getElementById('my_modal_5');
        modal.showModal();

        // hidden('donate-now-btn2');



    }
})
// // donate now btn3
let sum3=0;
const donateNowBtn3=document.getElementById('donate-now-btn3');
donateNowBtn3.addEventListener('click',function(){
const mainAmount=getInnerText('total-amount');
const donateAmount3=getInputFiledValue('donate-amount3');
    
    // const donateNoakhali=getInputFiledValue('donate-noakhali');
if(donateAmount3<=0 || isNaN(donateAmount3) || mainAmount<donateAmount3){
        alert('Please enter the valid amount')
}
else{
        // donateNoakhali
        const remainingAmount=mainAmount-donateAmount3;
        document.getElementById('total-amount').innerText=remainingAmount;
        sum3=sum3+donateAmount3
        document.getElementById('donate-quota').innerText=sum3;
        addToHistory3(donateAmount3);
        const modal = document.getElementById('my_modal_5');
        modal.showModal();
        // hidden('donate-now-btn3');
    }
        
})

// button colors of history and donate button
const historyButton=document.getElementById('history-btn');
const donateButton=document.getElementById('donate-btn');
historyButton.addEventListener('click',function(){
    historyButton.classList.add('bg-btn-colors1')
    donateButton.classList.remove('bg-btn-colors1')
    // donateButton.classList.add('text-font-color')
    // historyButton.classList.add('bg-btn-colors1,text-color')
    document.getElementById('footer-section').classList.add('hidden')
    document.getElementById('section-container').classList.add('hidden');
    document.getElementById('section-container2').classList.add('hidden');
    document.getElementById('section-container3').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');
})
donateButton.addEventListener('click',function(){
    donateButton.classList.add(
        'bg-btn-colors1',)
    donateButton.classList.add('bg-btn-colors1')
    historyButton.classList.remove('bg-btn-colors1')
    document.getElementById('section-container').classList.remove('hidden');
    document.getElementById('section-container2').classList.remove('hidden');
    document.getElementById('section-container3').classList.remove('hidden');
    document.getElementById('history-section').classList.add('hidden')

})
function addToHistory1(id) {
    const flood1=document.getElementById('noakhali-flood').innerText;
const historyItem = document.createElement('div');
historyItem.className = 'bg-white p-3 rounded-md  mb-4';

historyItem.innerHTML = `
<div class="flex items-center space-x-4 mt-4 border border-gray-200 p-10 rounded-lg">
    <div>
        <p class='text-xl font-semibold text-gray-900'>${id} Taka is Donated for ${flood1}</p>
        <p class='text-sm text-gray-500'>
                Date: ${new Date().toString()}
        </p>
    </div>
</div>
`;

// Get the id from html to add the above elements
const historyContainer = document.getElementById('history-list');
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
        <p class='text-xl font-semibold text-gray-900'>${id} Taka is Donated for ${quota1}</p>
        <p class='text-sm text-gray-500'>
                Date: ${new Date().toString()}
        </p>
    </div>
</div>
`;
// Get the id from html to add the above elements
const historyContainer = document.getElementById('history-list');
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
            <p class='text-xl font-semibold text-gray-900 '>${id} Taka is Donated for ${quota1}</p>
            <p class='text-sm text-gray-500'>
                Date: ${new Date().toString()}
              </p>
        </div>
    </div>
    `;

    // Get the id from html to add the above elements
    const historyContainer = document.getElementById('history-list');
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    // historyContainer.appendChild(historyItem);
}
// remove hidden and add hidden


