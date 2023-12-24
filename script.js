// Store passwords and GIFs for each level
const passwords = ["23/04/2022", "Bijuzinho", "Techno", "Mumbai","6", "LEGO"]; // Replace with your actual passwords
const gifs_right = ["https://media.giphy.com/media/fUMsFIbDNjKg1I65dY/giphy.gif", 
										"https://media.giphy.com/media/fUMsFIbDNjKg1I65dY/giphy.gif", 
										"https://media.giphy.com/media/fUMsFIbDNjKg1I65dY/giphy.gif", 
										"https://media.giphy.com/media/fUMsFIbDNjKg1I65dY/giphy.gif",
										"https://media.giphy.com/media/fUMsFIbDNjKg1I65dY/giphy.gif", 
										"https://media.giphy.com/media/fUMsFIbDNjKg1I65dY/giphy.gif" ]; // Replace with your GIF URLs
const gifs_wrong = ["https://media.giphy.com/media/3XuEQA6Ygv0StEzuRg/giphy.gif", 
										"https://media.giphy.com/media/5kzB8SARBWCmQ/giphy.gif", 
										"https://tenor.com/pt-BR/view/that-was-embarrassing-grady-smith-that-made-me-feel-bad-that-was-awkward-gif-14330004361665142528", 
										"https://tenor.com/pt-BR/view/confused-gif-1288351512682894859",
										"https://tenor.com/pt-BR/view/confused-confused-face-confused-look-im-confused-im-so-confused-gif-16067865999736184254", 
										"https://tenor.com/pt-BR/view/littlest-friends-timothy-winchester-goose-goosey-congratulations-gif-20824652"]; // Replace with your GIF URLs

const currentLevel = parseInt(window.location.href.split("level")[1].split(".html")[0], 10); // Extracts level number from URL

document.getElementById("unlock-button").addEventListener("click", checkPassword);

function checkPassword() {
  const enteredPassword = document.getElementById("password").value;

  if (enteredPassword.toLowerCase() === passwords[currentLevel - 1].toLowerCase()) {
    // Password is correct!
    document.getElementById("gif-container").innerHTML = `<img src="${gifs_right[currentLevel - 1]}" alt="Uhuuuu">`;
    document.getElementById("message").textContent = "Certa Resposta Mozão!!!";

		//hide button
		document.getElementById("unlock-button").style.display = "none";

    setTimeout(() => {
      // Transition to the next level after 3 seconds
      window.location.href = `level${currentLevel + 1}.html`; // pages are named level1.html, level2.html...
    }, 3000);
  } else {
    // Incorrect password, display error message and GIF
    document.getElementById("gif-container").innerHTML = `<img src="${gifs_wrong[currentLevel - 1]}" alt="Booooo">`;
    document.getElementById("message").textContent = "Poxa Mozão! Tá errado, tenta de novo!";
  }
}


//Questoes
//1- Qual foi a data que casamos no civil?
//2- Eu sou seu...
//3- Meu estilo de musica eletronica preferido
//4- Que cidade eu fiz o meu voluntario
//5- Quantos paises ja visitamos juntos?
//6- Eu amo muito meu Bombonzinho, mas amo tambem...
