// array of object data
const cardBoxArrays = [,
    { numbers: '65', name: 'Daily News', iconName: 'eye-outline' },
    { numbers: '56', name: 'Sales', iconName: 'cart-outline' },
    { numbers: '14', name: 'Comments', iconName: 'chatbubbles-outline' },
    { numbers: '$ 329', name: 'Earnings', iconName: 'cash-outline' },
]
const allRecentOrdersArrays = [{
        name: 'Williams Smith',
        price: '562',
        payment: 'Paid',
        status: 'delivered',
    },
    { name: 'Jeff Bezos', price: '370', payment: 'Paid', status: 'return' },
    { name: 'Mike Taison', price: '290', payment: 'Paid', status: 'pending' },
    { name: 'Taison Fury', price: '900', payment: 'Paid', status: 'delivered' },
    { name: 'James Haaland', price: '200', payment: 'Due', status: 'inprogress' },
    {
        name: 'Dasaolu Daniel',
        price: '4,430',
        payment: 'Paid',
        status: 'pending',
    },
    { name: 'Lionel Santos', price: '52', payment: 'Paid', status: 'return' },
    { name: 'Mike Taison', price: '290', payment: 'Paid', status: 'pending' },
    { name: 'Taison Fury', price: '900', payment: 'Paid', status: 'delivered' },
    { name: 'James Haaland', price: '200', payment: 'Due', status: 'inprogress' },
    {
        name: 'Dasaolu Daniel',
        price: '4,430',
        payment: 'Paid',
        status: 'pending',
    },
    { name: 'Lionel Santos', price: '52', payment: 'Paid', status: 'return' },
    { name: 'ArchyScript', price: '674', payment: 'Due', status: 'inprogress' },
    { name: 'Kobe Bryant', price: '925', payment: 'Paid', status: 'inprogress' },
    { name: 'Lyon Max', price: '34', payment: 'Paid', status: 'pending' },
    { name: 'Michael Owen', price: '864', payment: 'Paid', status: 'delivered' },
    { name: 'Kun Aguero', price: '145', payment: 'Due', status: 'inprogress' },
    { name: 'ArchyScript', price: '674', payment: 'Due', status: 'inprogress' },
    { name: 'Kobe Bryant', price: '925', payment: 'Paid', status: 'inprogress' },
    { name: 'Lyon Max', price: '34', payment: 'Paid', status: 'pending' },
    { name: 'Michael Owen', price: '864', payment: 'Paid', status: 'delivered' },
    { name: 'Kun Aguero', price: '145', payment: 'Due', status: 'inprogress' },
    { name: 'Bruno Rash', price: '769', payment: 'Paid', status: 'delivered' },
    { name: 'Steve Jobs', price: '5,000', payment: 'Paid', status: 'delivered' },
]
const allRecentCustomersArrays = [
        { name: 'John', country: 'France', payment: './img/spaceX.jpeg' },
        { name: 'Smith', country: 'Ghana', payment: './img/spaceX.jpeg' },
        { name: 'Dray', country: 'England', payment: './img/spaceX.jpeg' },
        { name: 'Daniel', country: 'Finland', payment: './img/spaceX.jpeg' },
        { name: 'Kyle', country: 'Germany', payment: './img/spaceX.jpeg' },
        { name: 'Shawty', country: 'Nigeria', payment: './img/spaceX.jpeg' },
        { name: 'Kelvin', country: 'Portugal', payment: './img/spaceX.jpeg' },
        { name: 'Bernaldo', country: 'Netherland', payment: './img/spaceX.jpeg' },
        { name: 'Ronaldo', country: 'Denmark', payment: './img/spaceX.jpeg' },
        { name: 'Elon Musk', country: 'Wales', payment: './img/spaceX.jpeg' },
        { name: 'Gates', country: 'Nigeria', payment: './img/spaceX.jpeg' },
    ]
    // Darkmode Colors
const allAvailableDarkmodeColors = [{
        mainColorLight: '#da1064',
        mainColorDark: '#38051b',
        veryLightColor: 'light',
        semiLightColor: 'aqua',
        veryDarkColor: '#222',
        semiDarkColor: '#666',
    },
    {
        mainColorLight: '#111111',
        mainColorDark: '#444444',
        veryLightColor: 'light',
        semiLightColor: 'aqua',
        veryDarkColor: '#222',
        semiDarkColor: '#666',
    },
    {
        mainColorLight: '#111111',
        mainColorDark: '#444444',
        veryLightColor: 'light',
        semiLightColor: 'aqua',
        veryDarkColor: '#222',
        semiDarkColor: '#666',
    },
    {
        mainColorLight: '#111111',
        mainColorDark: '#444444',
        veryLightColor: 'light',
        semiLightColor: 'aqua',
        veryDarkColor: '#222',
        semiDarkColor: '#666',
    },
]

// DOM elements
const allNavbarLinks = document.querySelectorAll('.navigation li')
const navbar = document.getElementById('navbar')
const mainPage = document.getElementById('main-page')
const navbarToggler = document.getElementById('navbar-toggler')
const cardBox = document.getElementById('card-box')
const recentOrdersTableBody = document.getElementById(
    'recent-orders-table-body',
)
const recentCustomersTable = document.getElementById('recent-customers-table')
    // Get all CSS root properties
const rootProperties = document.documentElement

// Functions
const activeNavbarLinkFunction = (event) => {
    allNavbarLinks.forEach((eachNavbarLink) => {
        eachNavbarLink.classList.remove('hovered')
    })
}

const navbarTogglerFunction = () => {
    navbar.classList.toggle('active')
    mainPage.classList.toggle('active')
}

const recentCustomersTableFunction = () => {
    recentCustomersTable.innerHTML = ''

    allRecentCustomersArrays.forEach((event) => {
        let name = event.name
        let country = event.country
        let picture = event.picture

        recentCustomersTable.innerHTML += `
            <tr>
                <td>
                    <div class="img-box">
                        <img src="./img/spaceX.jpeg" alt="${name} Image">
                    </div>
                </td>
                <td>
                    <h4>
                        ${name} <br>
                        <span class="recent-customers-country">${country}</span>
                    </h4>
                </td>
            </tr>
        `
    })
}

const cardBoxFunction = () => {
    cardBox.innerHTML = ''

    cardBoxArrays.forEach((event) => {
        let numbers = event.numbers
        let name = event.name
        let iconName = event.iconName

        cardBox.innerHTML += `
            <div class="card">
                <div>
                    <div class="numbers">${numbers}</div>
                    <div class="card-name">${name}</div>
                </div>
                <div class="icon-box">
                    <ion-icon name="${iconName}"></ion-icon>
                </div>
            </div>
        `
    })
}

const updateRecentOrdersFunction = () => {
    recentOrdersTableBody.innerHTML = ''

    allRecentOrdersArrays.forEach((eachRecentOrder) => {
        let name = eachRecentOrder.name
        let price = eachRecentOrder.price
        let payment = eachRecentOrder.payment
        let status = eachRecentOrder.status

        recentOrdersTableBody.innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${price}</td>
                <td>${payment}</td>
                <td><span class="status ${status}">${status}</span></td>
            </tr>
        `
    })
}

// Change Websites color
function setContainerColors() {
    rootProperties.style.setProperty('--main-color-light', '#380214')
    rootProperties.style.setProperty('--main-color-dark', 'pink')

    // allAvailableDarkmodeColors.forEach (event => {

    // if (event.keyContainerBgColor === eachAvailableBackgroundColor.id) {

    //     keyboardBackground.value = eachAvailableBackgroundColor.id

    //     rootProperties.style.setProperty("--key_container_background_color", event.keyContainerBgColor)
    //     rootProperties.style.setProperty("--input_key_background_color", event.inputKeyBgColor)
    //     rootProperties.style.setProperty("--special_key_background_c olor", event.specialKeyBgColor)
    //     rootProperties.style.setProperty("--active_key_background_color", event.activeKeyBackgroundColor)
    // }

    // if (event.keyContainerBgColor === eachAvailableBackgroundColor.id && event.allTextColor === "light") return rootProperties.style.setProperty("--all_text_color", "#ffffff")
    // if (event.keyContainerBgColor === eachAvailableBackgroundColor.id && event.allTextColor === "dark") return rootProperties.style.setProperty("--all_text_color", "#111111")
    // })
}

// Event Listener
allNavbarLinks.forEach((eachNavbarLink) => {
    eachNavbarLink.addEventListener('mouseover', activeNavbarLinkFunction)
        // eachNavbarLink.onmouseover = () => activeNavbarLinkFunction()
})

// navbar toggler
navbarToggler.onclick = () => navbarTogglerFunction()

// Function calls
updateRecentOrdersFunction()
cardBoxFunction()
recentCustomersTableFunction()
setContainerColors()

// // Create a function to toggle between dark and normal mode mode
// function checkDefaultOrDarkModeFunction () {
//   allColorCombinationsArrayOfObjects.forEach(eachColorCombination => {
//     let colorPropertyName = eachColorCombination.colorPropertyName
//     let defaultColor = eachColorCombination.defaultColor
//     let darkModeColor = eachColorCombination.darkModeColor

//     // Set dark mode colors if dark mode is "ON" and default mode color if dark mode is "OFF"
//     darkModeSwitch.checked ? rootProperties.style.setProperty(colorPropertyName, darkModeColor) : rootProperties.style.setProperty(colorPropertyName, defaultColor)              //
//   })
// }

// // Toggle between dark and default mode on click on darkModeSwitch
// darkModeSwitch.onclick = () => checkDefaultOrDarkModeFunction()