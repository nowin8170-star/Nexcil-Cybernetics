document.addEventListener('DOMContentLoaded', () => {const instantTextElement = document.getElementById('instant-text');const words = ['₩ğ฿ķť', 'Æƒ₪țǐľ', 'ĮΦ₭₩j'];let wordIndex = 0;
function switchText() {instantTextElement.textContent = words[wordIndex];wordIndex = (wordIndex + 1) % words.length;}
switchText();
setInterval(switchText, 280);});