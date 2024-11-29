//const quotes = ['Safaa' , 'Mohamed' , 'Ahmed' , 'Elmhalawy'];


//function generatorQuote(){

//}

// Array of quotes
const arrayOfQuotes = [
    {'author': 'Peter Drucker', 
    'quote': 'The best way to predict the future is to create it.'
    },
    {'author': 'Jim Rohn', 
    'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {'author': 'John Lennon', 
    'quote': 'Life is what happens when you are busy making other plans.'
    },
    {'author': 'Epictetus', 
    'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {'author': 'Frank Sinatra', 
    'quote': 'The best revenge is massive success.'
    },
    {'author': 'Wayne Gretzy', 
    'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {'author': 'Nelson Mandela', 
    'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {'author': 'Elbert Hubbard', 
    'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {'author': 'Theodore Roosevelt', 
    'quote': 'Believe you can and you are halfway there.'
    },

];


function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}