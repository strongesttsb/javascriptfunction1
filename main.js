function getAge(name, birthYear, currentYear) {
    const age = currentYear - birthYear;
    
    
    if (age < 0) {
        return `Неправильный год рождения. Введите еще раз.`;
    }

    return `${name}, Ваш возраст ${age}`;
}


const name = prompt("Введите ваше имя:");
let birthYear;
let currentYear = parseInt(+prompt("Введите нынешний год:"), 10);

do {
    birthYear = parseInt(+prompt("Введите ваш год рождения:"), 10);
    const result = getAge(name, birthYear, currentYear);
    alert(result);
} while (birthYear > currentYear); // Повторять, пока год рождения больше текущего года
