
const randomQuotesApiUrl = 'http://api.quotable.io/random'; 
const qouteDisplay = document.getElementById('qouteDisplay');

const input = document.getElementById('input');

// console.log("Input = ",Input.value);


input.addEventListener('input',() => {
 const  arrayOfQuote = qouteDisplay.querySelectorAll('span');
 const arrayValue = qouteDisplay.value.split('');

 arrayOfQuote.forEach((characterSpan, index)=> {

   
 });
});


function getRandomQuote(){
   return  fetch(randomQuotesApiUrl)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderNewQuote(){
 
     const quote =  await getRandomQuote();
     qouteDisplay.innerHTML = '';
 
     quote.split('').forEach(character => {
        const characterSpan = document.createElement('span');

        characterSpan.innerText = character;
        qouteDisplay.appendChild(characterSpan);
     });
      
    input.value = '';
}

renderNewQuote();