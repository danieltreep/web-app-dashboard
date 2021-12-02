const alertBanner = document.getElementById("alert");

// create the html for the banner
alertBanner.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
    `;

const x = document.querySelector(".alert-banner-close");

x.addEventListener('click', event => {
    const x = event.target;
    alertBanner.style.display = "none"
});