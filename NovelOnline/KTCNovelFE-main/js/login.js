const loginButton = document.querySelector(".login-btn");
const registerButton = document.querySelector(".register-btn");
const border = document.querySelector(".border");
const main = document.querySelector(".main-form");

const templateRegister = `
  <form action="register" method = "POST">
    <div class="field">
      <div class="title">
        <label for="email">Email</label>
      </div>
      <input type="text" id="email" placeholder="Nhập email" />
      <div class="error"></div>
    </div>
    <div class="field">
      <div class="title">
        <label for="username">Tên đăng nhập</label>
      </div>
      <input
        type="text"
        id="username"
        placeholder="Nhập tên đăng nhập"
      />
    </div>
    <div class="error"></div>
    <div class="field password-field">
      <div class="title">
        <label for="password">Mật khẩu</label>
      </div>
      <input
        type="password"
        id="password"
        placeholder="Nhập mật khẩu"
      />
    </div>
    <div class="error"></div>
    <div class="field password-field">
      <div class="title">
        <label for="re-password">Nhập lại mật khẩu</label>
      </div>
      <input
        type="password"
        id="re-password"
        placeholder="Nhập lại mật khẩu"
      />
    </div>
    <div class="error"></div>
    <div class="button">
      <button>Đăng ký</button>
    </div>
  </form>`;
const templateLogin = `<form action="" method = "POST">
<div class="field">
  <div class="title">
    <label for="username">Tên đăng nhập</label>
  </div>
  <input type="text" id="username" placeholder="Nhập tên đăng nhập"/>
</div>
<div class="error">
</div>
<div class="field password-field">
  <div class="title">
    <label for="password">Mật khẩu</label>
  </div>
  <input type="password" id="password" placeholder="Nhập mật khẩu"/>
</div>

<div class="button">
  <button>Đăng nhập</button>
</div>
</form>`;
registerButton.addEventListener("click", function (event) {
  const login = document.querySelector(".login");
  if (login) {
    main.classList.add("wrapper-register");
    main.classList.remove("wrapper-login");
    const registerDiv = document.createElement("div");
    registerDiv.className = "form register";
    registerDiv.innerHTML = templateRegister;
    border.classList.add("active");
    main.removeChild(login);
    main.insertAdjacentElement("beforeEnd", registerDiv);
  }
});

loginButton.addEventListener("click", function (event) {
  const register = document.querySelector(".register");
  if (register) {
    main.classList.remove("wrapper-register");
    main.classList.add("wrapper-login");
    const loginDiv = document.createElement("div");
    loginDiv.className = "form login";
    loginDiv.innerHTML = templateLogin;
    border.classList.remove("active");
    main.removeChild(register);
    main.insertAdjacentElement("beforeEnd", loginDiv);
  }
});

const loginBtn = document.querySelector(".login-button");
loginBtn.addEventListener("click", (event)=>{
  event.preventDefault();
  const error = document.createElement("div");
  error.innerText = "Đăng nhập không thành công"
  error.classList.add("error");
  const noti = document.querySelector(".notification");
  noti.appendChild(error);
  setTimeout(()=>{
    error.classList.add("hide");
  }, 2500);
  setTimeout(()=>{
    noti.removeChild(error);
  }, 3000);
})