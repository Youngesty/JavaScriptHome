PROMPT.addEventListener('click',(e)=>{

e.preventDefault();

let text=prompt('Введите текст для ссылки');

PROMPT.textContent=text;
});