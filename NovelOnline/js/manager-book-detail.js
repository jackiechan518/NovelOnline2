const urlParams = new URLSearchParams(window.location.search);
const pageNumber = urlParams.get('page');

const page = document.querySelectorAll(".page");
page.forEach((item) => {
    if (item.innerHTML = `${page}`){
        item.classList.add("active");
    }
});
