// Create alert banner
const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> The chickens have escaped!</p>
        <p class="alert-banner-close">x</p>
    </div>
    `;

// Close banner when clicked on X
const x = document.querySelector(".alert-banner-close");

x.addEventListener('click', () => {
    alertBanner.style.display = "none"
});

// When bell is clicked remove dot, show dropdown
const bell = document.querySelector(".bell-svg");
const dot = document.querySelector(".dot");
const dropdown = document.querySelector(".dropdown-content");
let dropdownShow = 0;

bell.addEventListener('click', () => {
    dot.style.display = "none";

    if (dropdownShow === 0) {
        dropdown.style.display = "block";
        dropdownShow = 1;
    } else if (dropdownShow === 1) {
        dropdown.style.display = "none"; 
        dropdownShow = 0;
    }
});

// Traffic Chart 
const trafficCanvas = document.getElementById("traffic-chart");

let trafficDataHourly = {
    labels: ["Hour 1", "Hour 1", "Hour 1", "Hour 1", "Hour 1", "Hour 1", "Hour 1", 
    "Hour 1", "Hour 1", "Hour 1", "Hour 1"], 
    datasets: [{
        data: [50, 50, 10, 20, 50, 40, 20, 50, 20, 10, 80],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};
let trafficDataDaily = {
    labels: ["Day 1", "Day 1", "Day 1", "Day 1", "Day 1", "Day 1", "Day 1", 
    "Day 1", "Day 1", "Day 1", "Day 1"], 
    datasets: [{
        data: [750, 250, 100, 200, 150, 750, 250, 150, 250, 150, 280],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};
let trafficDataWeekly = {
    labels: ["Week 1", "Week 1", "Week 1", "Week 1", "Week 1", "Week 1", "Week 1", 
    "Week 1", "Week 1", "Week 1", "Week 1"],
    datasets: [{
        data: [1750, 2250, 3000, 2000, 1800, 1250, 2250, 2850, 3250, 2500,
    1800],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};
let trafficDataMonthly = {
    labels: ["Month 1", "Month 1" ,"Month 1", "Month 1", "Month 1", "Month 1", 
    "Month 1", "Month 1", "Month 1", "Month 1", "Month 1"],
    datasets: [{
        data: [11750, 11250, 12000, 12000, 12500, 14750, 15250, 13850, 12250, 16500,
    12800],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,
    }]
};

let trafficOptions = {
    backgroundColor: 'rgba(112, 104, 201, .5)',
    fill: true,
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        y: {
            beginAtZero: true
    }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficDataHourly,
    options: trafficOptions
});

// Switch data on traffic Nav
const trafficNav = document.querySelector(".traffic-nav");

trafficNav.addEventListener('click', (event) => {
    
    let tab = event.target;
    let activeTab = document.querySelector(".active");

    // Check if tab is not already active, if so add class and remove from previous
    if (tab.className !== "traffic-nav-link active" && tab.tagName === "LI") {
        
        tab.className = "traffic-nav-link active";
        activeTab.className = "traffic-nav-link";
        
        // Activate new data sets based on tabs
        if (tab.textContent.includes("Hourly")) {
            
            trafficChart.destroy();
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficDataHourly,
                options: trafficOptions
            });

        } else if (tab.textContent.includes("Daily")) {

            trafficChart.destroy();
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficDataDaily,
                options: trafficOptions
            });
                
        } else if (tab.textContent.includes("Weekly")) {

            trafficChart.destroy();
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficDataWeekly,
                options: trafficOptions
            });

        } else if (tab.textContent.includes("Monthly")) {

            trafficChart.destroy();
            trafficChart = new Chart(trafficCanvas, {
                type: 'line',
                data: trafficDataMonthly,
                options: trafficOptions
            });
        }
    } 
});

// Daily Chart
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

const dailyOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    },
    plugins: {
        legend: {
            display: false
        }
    }
};

let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

//  Mobile Chart
const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phone", "Screenreader"],
    datasets: [{
        
        data: [2000, 550, 500, 50],
        label: '# of Users',
        borderWidth: 0,
        backgroundColor: [
        '#7477BF',
        '#78CF82',
        '#51B6C8',
        '#C71585'
        ]
    }]
};
const mobileOptions = {
    aspectRatio: 1.9,
    plugins: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }
};
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

// Messages
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");
const autoComplete = document.querySelector(".autocomplete");

send.addEventListener('click', () => {
    // ensure user and message fields are filled out
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
});

// Autocomplete user input
const userNames = ["Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver", "Gandalf", "Khaleesi", "Santa Claus", "Homer Simpson", "Garfield", "Handsome Jack", "Ragnar Lothbrok"];

user.addEventListener("input", (event) => {
    let inputValue = event.target.value;
    inputValue = inputValue.toUpperCase();
    let userNameFiltered = [];

    // Check if input value matches array of usernames and create new array from filter 
    if (inputValue) {

        // Create new array from filter
        userNameFiltered = userNames.filter(userNames => userNames.toUpperCase().includes(inputValue));

        // Create new array with li elements from each filtered user name
        userNameFiltered = userNameFiltered.map(userNames => `<li class="matching-name"> ${userNames} </li>`);
    }

    // Function creates html from filtered username array
    showUsernames(userNameFiltered);
    
});

function showUsernames(userNameFiltered) {
    let html = '';

    // If the array is empty, show nothing. Otherwise combine the array items to a string
    if (!userNameFiltered.length) {
        html = '';
        autoComplete.style.display = "none";
    } else {
        html = userNameFiltered.join('');
        autoComplete.style.display = "block";
    }

    // Insert the string into the html
    autoComplete.innerHTML = html;
}

// Remove autocomplete if it is not active
document.addEventListener('click', () => {
    if (user !== document.activeElement) {
        autoComplete.style.display = "none";
    }
})
