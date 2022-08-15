const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
 alert('Служит для вывода информации в консоль')
})

let Alert = document.querySelector('#Alert');

Alert.addEventListener('click', () => {
    alert('Эта функция, показывает сообщение и ждёт, пока пользователь нажмёт кнопку <ОК>')
})

let Prompt = document.querySelector('#Prompt');

Prompt.addEventListener('click', () => {
    alert('Этот код отобразит модальное окно с текстом, полем для ввода текста и кнопками OK/Отмена')
})