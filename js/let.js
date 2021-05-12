var userAge = +prompt('Введіть Ваш вік:')
var message;
if (userAge !== userAge) {
    message = 'Ви ввели нелівідне значення';
} else if (userAge % 10 === 0 || userAge % 10 >= 5 || userAge % 100 >= 5 && userAge % 100 <= 14) {
    message = `${userAge} років`;
} else if (userAge % 10 === 1) {
    message = `${userAge} рік`;
} else if (userAge % 10 <= 4) {
    message = `${userAge} роки`;
}
alert(message);