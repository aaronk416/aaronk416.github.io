var story;

function getStory(name) {
  return {
    currentScene: "beginning",
    beginning: {
      title: "Seriously, where am I?",
      story: `You, ${name}, are lost in a mysterious town and you must find shelter for the night. You don't know who to trust...`,
	  image: "town.jpg",
      choices: [
        {
          choice: "Walk around.",
          destination: 'town'
        },
        {
          choice: "Enter a laundromat.",
          destination: 'laundry'
        },
        {
          choice: "Follow the large group of people walking.",
          destination: 'group'
        }
      ]
    },
	  town: {
      title: '"There has to be something here that can help.. "',
      story: `You see an abandoned house. You could possibly spend the night here.`,
	  image: "house.jpg",
      choices: [
        {
          choice: "Enter through the front door",
          destination: 'frontdoor'
        },
        {
          choice: "Break open a window",
          destination: 'window'
        }
      ]
    },
	frontdoor: {
      title: '"Are you lost?"',
      story: `You see an old man as you enter through the front door. He reveals that he, and a bunch of other homeless people are freeloading in here. The main offers you shelter and you decide to join them `,
      image: "homeless.jpg"
    },
    window: {
      title: '*Kssshhhhk*',
      story: `You desperately try to break open the glass window. But then you noticed a bunch of people screaming and scrambling. There are people inside. One of them yells at you, threatening that they will physically escort you out. What do you do?`,
		image: "glass.jpg",
      choices: [
        {
          choice: "Attack",
          destination: 'attack'
        },
        {
          choice: "Surrender",
          destination: 'surrender'
        }
      ]
    },
	   attack: {
      title: '"NOOOOO"',
      story: `The hostile people have ambushed you. You have been knocked out.`,
      image: "ambush.jpg"
    },
	  
	  surrender: {
      title: '"EVERYBODY FREEZE"',
      story: `You were able to prove that you meant no harm, but the police have come due to a noise complaint. You have been arrested along with the homeless men.`,
   	  image: "arrest.jpg"
		  
	},	  
	  group: {
      title: '"They are all wearing red.."',
      story: `You approach the mysterious group of people walking, trying to see what is going on. What do you do?`,
	image: "cult.jpg",
       choices: [
        {
          choice: "Ask why they're walking",
          destination: 'ask'
        },
        {
          choice: "Blend in",
          destination: 'blend'
        }
      ]
    },
	  ask: {
      title: '"DO NOT SPEAK TO HIM IN THAT TONE."',
      story: `The people have ambushed you for trying to speak to the leader. You have been knocked out.`,
      image: "gang.jpg"
    },
	  
	  blend: {
      title: '"............................"',
      story: `As you keep walking with them, your mind suddenly goes blank... but your body keeps walking and walking... is this peace..? Or worse.....?`,
      image: "brainwash.png"
		  
	},
    laundry: {
      title: 'The Laundry',
      story: `You enter the laundromat. You see one man sleeping on the chairs, waiting for his Clothes to dry. Your clothes are wet and you are freezing from the rain. What do you do?.`,
		image: "laundry.jpg",
      choices: [
        {
          choice: "Steal the Clothes.",
          destination: 'steal'
        },
        {
          choice: "Steal his wallet",
          destination: 'wallet'
        },
        {
          choice: "Ask the man for help.",
          destination: 'pity'
        }
      ] 
	},	    
    pity: {
      title: 'Seeking Assistance',
      story: `You approach the sleeping man and gently wake him up. You explain your situation and ask if he can offer any assistance.`,
		image: "poor.jpg",
      choices: [
        {
          choice: "Ask if he knows a discreet place to stay.",
          destination: 'place'
        },
        {
          choice: "Ask for an extra set of clothes.",
          destination: 'clothes'
        }
      ]
    },
    place: {
      title: 'The End..?',
      story: `The man pointed you towards an abandoned building 10 minutes from here. You take his advice and thank him`,
	image: "point.jpg"
    },
    clothes: {
      title: 'Nice and warm',
      story: `The man was able to give you an extra t-shirt and a scarf. You feel better already. The man has offered you to drive you to the nearest police station for help.`,
      image: "help.jpg"
    },
       steal: {
      title: '"Zzzzz"',
      story: `You open the drying machine slowly And successfully stole the man's clothes. But as you turn around, you see him about to wake up. What do you do`,
	  image: "asleep.jpg",
   choices: [
        {
          choice: "Run Away with the clothes",
          destination: 'runaway'
        },
        {
          choice: "Attack the man",
          destination: 'hurt'
        },
       ] 
	},	
	runaway: {
      title: 'Hm?',
      story: `The man wakes up from you running away. He sees that his clothes have been stolen..! He calls the police and now you must run.`,
	  image: "catch.webp",
      choices: [
        {
          choice: "Turn Left",
          destination: 'left'
        },
        {
          choice: "Turn Right",
          destination: 'right'
        }
      ]
    },
	   left: {
      title: '"Next Stop: ???"',
      story: `You see a bus about to close its doors and leave. You run straight in and successfully averted the police.`,
      image: "bus.webp"
    },
	  right: {
      title: '"FREEZE"',
      story: `You turn right, and there is a dead end. The poice have caught you.`,
	  image: "arrest.jpg"
    },
	  hurt: {
      title: '!!!?',
      story: `The man has been knocked out by your punch. But the police have witnessed you in a commission of a felony. You are under arrest.`,
	  image: "mike.png"
	  
    },
	  
      wallet: {
      title: '!',
      story: `The man is moving to adjust his sleeping position. Theres no turning back now. How do you approach?`,
	  image: "wallet.jpeg",
      choices: [
        {
          choice: "Quickly grab the wallet",
          destination: 'quick'
        },
        {
          choice: "Slowly grab the wallet",
          destination: 'slow'
        }
      ]
	      },
    quick: {
      title: 'HEY',
      story: `The man has woken up, and caught you in the middle of stealing his wallet. He grabs your arm and calls the police.`,
      image: "grab.jpg"
	}, 
	  slow: {
      title: 'He was rich?!?!?!?',
      story: `You have successfully stolen the mans wallet. You may now spend that stolen money to your hearts content. Thief.`,
      image: "thief.webp"
	}, 
    }
  };


document.addEventListener('DOMContentLoaded', function() {
  var button = document.querySelector('#start-button');
  var content = document.querySelector('#content');
  button.addEventListener('click', function() {
    var name = document.querySelector('#name-input');
    story = getStory(name.value);
    renderScene();
  });
});
function renderScene() {
  var text = "Next";
  var image = "";
  if (story[story.currentScene].image) {
    image = "<img></img>";
  }
	
  if (story[story.currentScene].buttonText) {
    text = story[story.currentScene].buttonText;
  }
  content.innerHTML = `
    <h1>${story[story.currentScene].title}</h1>
    <p>${story[story.currentScene].story}</p>
    ${image}
    ${getButtons()}
  `;
  if (story[story.currentScene].image) {
    document.querySelector("img").src = `./img/${story[story.currentScene].image}`;
  }
}

function getButtons() {
  var buttons = "";
  if (!story[story.currentScene].choices) {
    return "";
  }
  for (var i = 0; i < story[story.currentScene].choices.length; i++) {
    buttons += `
      <button class="btn" onclick="makeChoice('${story[story.currentScene].choices[i].destination}')">
        ${story[story.currentScene].choices[i].choice}
      </button>
    `;
  }
  return `
    <div class="btn-grid">
      ${buttons}
    </div>
  `;
}

function makeChoice(destination) {
  story.currentScene = destination;
  renderScene();
}
