// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector("#menu-toggle");
// Создаем переменную, в которую положим меню
let menu = document.querySelector(".sidebar");
// отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener("click", function(event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    // вешаем класс на меню, когда кликнули по кнопке меню
    menu.classList.toggle("visible");
});

const loginElem = document.querySelector(".login");
const loginForm = document.querySelector(".login-form");
const emailInput = document.querySelector(".login-email");
const passwordInput = document.querySelector(".login-password");
const loginSignup = document.querySelector(".login-signup");

const listUsers = [{
        id: "01",
        email: "andrew@gmail.com",
        password: "12345",
        displayName: "andrewJS",
    },
    {
        id: "02",
        email: "sofiya@gmail.com",
        password: "123456",
        displayName: "sofiyaMuha",
    },
];

const setUsers = {
    user: null,
    logIn(email, password) {},
    logOut() {
        console.log("LOG OUT");
    },
    signUp() {
        if (!this.getUser(email)) {
            listUsers.push({ email, password, displayName: email });
            console.log(listUsers);
        } else {
            alert("We have a User with that email.");
        }
    },
    getUser(email) {
        let user = null;
    },
};

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailValue = emailInput.value;
    const passwordValue = passwordInput.value;

    console.log(emailValue);
    console.log(passwordValue);

    setUsers.signUp(emailValue, passwordValue);
});

loginSignup.addEventListener("click", (event) => {
    event.preventDefault();
    setUsers.signUp();
});