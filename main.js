// Создаем переменную, в которую положим кнопку меню
let menuToggle = document.querySelector('#menu-toggle');
// Создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
// отслеживаем клик по кнопке меню и запускаем функцию 
menuToggle.addEventListener('click', function (event) {
  // отменяем стандартное поведение ссылки
  event.preventDefault();
  // вешаем класс на меню, когда кликнули по кнопке меню 
  menu.classList.toggle('visible');
})

const loginElem = document.querySelector('.login');
const loginForm = document.querySelector('.login-form');
const emailInput = document.querySelector('.login-email');
const passwordInput = document.querySelector('.login-password');
const loginSignup = document.querySelector('.login-signup');

const userElem = document.querySelector('.user');
const userNameElem = document.querySelector('.user-name');



const listUsers = [
  {
    id: '01',
    email: 'maks@mail.com',
    password: '12345',
    displayName: 'MaksJS'
  },

  {
    id: '02',
    email: 'kate@mail.com',
    password: '123456',
    displayName: 'kateJS'
  }
];

const setUsers = {
  user: null,
  logIn(email, password, handler) {
   const user = this.getUser(email);
   if (user && user.password === password) {
     this.authorizedUser(user)
     handler();
   } else {
     alert('Пользователь с такими данными не найден')
   }
  },
  logOut() {
    console.log('выход')
  },
  signUp(email, password, handler) {
    if (!this.getUser(email)){
      const user = {email, password, displayName: email}
      listUsers.push(user);
      this.authorizedUser(user)
      handler();
    } else {
      alert('Пользователь с таким email уже зарегистрирован')
    }
  },
  getUsers(email) {
    return listUsers.find(item => item.email === email)      
  },
  authorizedUser(user) {
    this.user = user;
  }
};

const toggleAuthDom = () => {
  const user = setUsers.user;
  console.log('user:', user);

  if(user) {
    loginElem.style.display = 'none';
    userElem.style.display = '';
    userNameElem.textContent = user.displayName;
  } else {
    loginElem.style.display = '';
    userElem.style.display = 'none';
  }
};

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const passwordValue = passwordInput.value;

  setUsers.signUp(emailValue, passwordValue);


  setUsers.signUp( emailValue, passwordValue, toggleAuthDom);
});

toggleAuthDom();






$email = 'Здесь должен быть email'
 
function emailValidation($email) //создаем функцию
{
    if($email) // Если переменная email не пуста
    {
        if(preg_match("/[0-9a-z_\.\-]+@[0-9a-z_\.\-]+\.[a-z]{2,4}/i", $email)) // если есть совпадение выводим сообщение
        {
            $message = "Это действительно Email";
        }
        else // если совпадений нет, выводим сообщение об ошибке
        {
            $message = "Некорректный Email адрес";
        }
    }       
    else // Если переменная email пуста
    {
        $message = 'Email не указан!';
    }
 
    return $message; 
}
 
$message = emailValidation($email); // помещаем в переменную  результат работы функции
echo emailValidation($email); // выводим на экран результат работы функции