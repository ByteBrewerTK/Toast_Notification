const notifications = document.querySelector(".notification"),
    buttons = document.querySelectorAll(".buttons .btn");

const toastDetails = {
    timer: 5000,
    success:{
        icon: "uil-check-circle",
        text:  "Success : This is a success toast.",
        color:  "0abf30",
    },
    error:{
        icon: "uil-times-circle",
        text: "Error : This is an error toast.",
        color:  "e24d4c",
    },
    warning:{
        icon: "uil-exclamation-triangle",
        text: "Warning : This is a warning toast.",
        color: "e9bd0c",
    },
    info:{
        icon: "uil-info-circle",
        text: "Info : This is information toast.",
        color: "3498db",
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 500)
}

const createToast = (id) =>{

    const {icon, text, color} = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;

    toast.innerHTML = `<div class="column">
                        <i class="uil ${icon}" style="color: #${color};"></i>
                        <p>${text}</p>
                    </div>
                    <i class="uil uil-times" onclick="removeToast(this.parentElement)"></i>`;

    notifications.appendChild(toast);

    setTimeout(() => removeToast(toast), toastDetails.timer);
}

buttons.forEach(btn =>{
    btn.addEventListener("click", () => createToast(btn.id));
});