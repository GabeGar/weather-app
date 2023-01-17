export function handleErrorMsg(response) {
    const errorMsg = document.querySelector(".error-msg");
    const searchField = document.querySelector("#search-locale");

    if (searchField.value.length === 0 || response.status >= 400) {
        errorMsg.classList.add("show");
        setTimeout(() => {
            errorMsg.classList.remove("show");
        }, 5000);
    }
}
