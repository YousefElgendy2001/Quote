var arrey = [
    {'speaker': 'Oscar Wilde', 
     'maxim': '“Be yourself; everyone else is already taken.”.'
    },
    {'speaker': 'Marilyn Monroe', 
     'maxim': '“Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you canot handle me at my worst, then you sure as hell dont deserve me at my best.”.'
    },
    {'speaker': 'Frank Zappa', 
     'maxim': '“So many books, so little time.”.'
    },
    {'speaker': 'Mae West', 
     'maxim': '“You only live once, but if you do it right, once is enough.”'
    },
    {'speaker': 'Mahatma Gandh', 
     'maxim': '“Be the change that you wish to see in the world.”.'
    },
    {'speaker': 'Mark Twain', 
     'maxim': '“If you tell the truth, you dont have to remember anything.”.'
    },
];

function writecode(){
    const random = Number.parseInt(Math.random()*arrey.length + 1);
    document.getElementById('onput').innerHTML = `\"${arrey[random].maxim}\"`;
    document.getElementById('output').innerHTML = `--${arrey[random].speaker}`;
    
}