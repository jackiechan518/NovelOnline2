const action = document.querySelector(".action");
const menu = document.querySelector("nav .menu");

axios
  .get("http://localhost:8080/session-user")
  .then((response) => {
    if (response.data) {
      const userTemplate = `
          <a href="" class="message">
          <i class="fa-regular fa-message"></i>
          </a>
          <a href="" class="user"><i class="fa-solid fa-user"></i>${response.data.name}</a>`;
      const user = document.createElement("div");
      user.classList.add("wrapper-user");
      user.innerHTML = userTemplate;
      menu.removeChild(action);
      menu.insertAdjacentElement("beforeend", user);
    }
  })
  .catch((error) => {
    console.warn(error);
  });
