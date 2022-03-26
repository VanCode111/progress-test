//API блока - setState() - установка состояния, setValue() - установка значения прогресса
//Инициализация блока
const progress = new Progress(document.querySelector('.progress'));

const MAX_VALUE = 100;

//Элементы управления
progress.MAX_VALUE = 100;
document.querySelector('#inputValue').addEventListener('input', (e) => {
    if (e.target.value > MAX_VALUE) {
        e.target.value = 100;
    }
    if (!Number(e.target.value)) {
        const str = e.target.value;
        e.target.value = str.slice(0, str.length - 1);
    }
    progress.setValue(e.target.value);
});

const checkboxes = document.querySelectorAll('#check');

checkboxes.forEach((item, idx) => {
    item.addEventListener('input', (e) => {
        if (e.target.checked) {
            checkboxes.forEach((i, j) => {
                if (j != idx) {
                    i.checked = false;
                }
            });
            progress.setState(e.target.dataset.state);
        }else {
            progress.setState('normal');
        }
        
    });
})