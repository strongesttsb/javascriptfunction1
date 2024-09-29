function getAge(name, birthYear, currentYear) {
    const age = currentYear - birthYear;

    // Проверка на отрицательное значение возраста
    if (age < 0) {
        return `Неправильный год рождения. Введите еще раз.`;
    }

    return `${name}, Ваш возраст ${age}`;
}

// Пример использования
const name = prompt("Введите ваше имя:");
let birthYear;
let currentYear;

// Получаем нынешний год с проверкой
while (true) {
    currentYear = prompt("Введите нынешний год:");
    if (!isNaN(currentYear) && currentYear.trim() !== "") {
        currentYear = parseInt(currentYear, 10);
        break;
    }
    alert("Пожалуйста, введите корректный номер года.");
}

// Получаем год рождения с проверкой
do {
    while (true) {
        birthYear = prompt("Введите ваш год рождения:");
        if (!isNaN(birthYear) && birthYear.trim() !== "") {
            birthYear = parseInt(birthYear, 10);
            break;
        }
        alert("Пожалуйста, введите корректный номер года.");
    }
    
    const result = getAge(name, birthYear, currentYear);
    alert(result);
} while (birthYear > currentYear); // Повторять, пока год рождения больше текущего года
