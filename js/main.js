// ЗАВДАННЯ 1
console.log("ЗАВДАННЯ 1");

// Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". 
// Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", 
// який дозволяє знімати гроші з рахунку.
// Використайте confirm() щоб поповнити рахунок або отримати готівку та prompt() щоб дізнатися суму. 
// Після проведення операції виводити повідомлення про залишок на рахунку. 

const bankAccount = {
    ownerName: "Oleksandr",
    accountNumber: "4343 5359 5353 9234",
    balance: 100,
    
    deposit() {
        const result = confirm("Чи бажаєте ви поповнити свій рахунок?");
        if (result === !true) {
            alert("Ви скасували операцію. Якщо зробили це помилково, то перезавантажте сторінку");
            console.log("Операція скасована");
            return;
        } else {
            const userAmount = Number(prompt("Внесіть кількість гривень"));
            this.balance += userAmount;
            alert(`Операцію успішно проведено. Ваш рахунок зараз ${this.balance} гривень`);
            console.log("Операцію успішно проведено");
            return;
        }
    },

    withdraw() {
        const result = confirm("Чи бажаєте ви зняти гроші зі свого рахунку?");
        if (result === !true) {
            alert("Ви скасували операцію. Якщо зробили це помилково, то перезавантажте сторінку");
            console.log("Операція скасована");
            return;
        } else {
            const userAmount = Number(prompt("Внесіть кількість гривень, яку ви хочете зняти"));
            if (userAmount > this.balance) {
                alert("Недостатня кількість грошей");
                console.log("Недостатня кількість грошей");
                return;
            } else {
                this.balance = this.balance - userAmount;
                alert(`Операцію успішно проведено. Ваш рахунок зараз ${this.balance} гривень`);
                console.log("Операцію успішно проведено");
                return;
            }
        }
    },
};

// ПОПОВНИТИ РАХУНОК
// bankAccount.deposit();

// ЗНЯТИ ГРОШІ З РАХУНКУ
bankAccount.withdraw();

console.log(bankAccount);



// ЗАВДАННЯ 2
console.log("ЗАВДАННЯ 2");

// Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". 
// Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, 
// та "false", якщо температура вище або рівна 0 градусів Цельсія. 
// Температуру потрібно отримати з prompt(). 
// Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки.

const temperature = Number(prompt("Введіть температуру за шкалою Цельсія"));
console.log(temperature);

const weather = {
    temperature,
    humidity: "48%",
    windSpeed: "57,6 m/s",

    measuringTemperature() {
        if (this.temperature < 0) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        };
    },
}

if (weather.measuringTemperature()) {
    alert("Температура нижче 0 градусів Цельсія");
} else {
    alert("Температура вище 0 градусів Цельсія");
};



// ЗАВДАННЯ 3
console.log("ЗАВДАННЯ 3");

// Створіть об’єкт "user", який буде мати властивості "name", "email", "password". 
// Додайте метод "login", який буде перевіряти правильність введеного email та password. 

const user = {
    name: "Oleksandr",
    email: "oleksandrromaniukviacheslavovych@gmail.com",
    password: "FsK933%*",

    login() {
        if (this.email.includes("@")) {
            console.log("Пошта написана правильно");
            if (this.password.length >= 8) {
                console.log("Пароль написаний правильно");
            } else {
                console.log("Помилка! Пароль має містити хоча б 8 символів");
            };
        } else {
            console.log("Помилка! Пошта не правильна");
        };
    },
}

user.login();

// ЗАВДАННЯ 4
console.log("ЗАВДАННЯ 4");

// Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". 
// Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, 
// та "false", якщо рейтинг фільму 8 або нижче. 
// Вивести значення властивостей в консоль. 

const movie = {
    title: "Аватар",
    director: "Джеймс Кемерон",
    year: "2009",
    rating: "7.9",

    checkingRating() {
        if (this.rating > 8) {
            console.log(true);
            return true;
        } else {
            console.log(false);
            return false;
        }
    },
}

console.log(movie.title);
console.log(movie.director);
console.log(movie.year);
console.log(movie.rating);

movie.checkingRating();