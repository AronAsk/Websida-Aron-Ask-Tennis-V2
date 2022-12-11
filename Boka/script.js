// Grabbing Elements from the HTML
let bookingform = document.getElementById('bokningformular');

// Hämta bokningar från Localstorage som redan finns
let sparadeBokningar = [];
let spara = JSON.parse(localStorage.getItem('spara'));


let people = document.getElementById('people')
let tid = document.getElementById('time')
let mail = document.getElementById('mail')
let bokatdatum = document.getElementById('date')
let nummer = document.getElementById('number')
let gname = document.getElementById('guestname')



// lägg ett event på "Submit" knappen på sidan
bookingform.addEventListener('submit', (e) => createBooking(e)
)


function createBooking(e) {

    // Förhindra Reload
    e.preventDefault();

// Skapa ett Objekt av bokningen
    let bokning = {
        CourtName: people.value,
        DateTime: bokatdatum.value,
        BookTime: tid.value,
        GuestName: gname.value,
        GuestMail: mail.value, 
        GustPhone: nummer.value,
    }
// Skriver ut bokningen på skärmen för kund
    alert("Vi har sparat din bokning: \n"
        + bokning.CourtName + "\n"
        + bokning.DateTime + "\n"
        + bokning.BookTime + "\n"
        + bokning.GuestName + "\n"
        + bokning.GuestMail + "\n"
        + bokning.GustPhone 
    )

    // Logga bokningen
    console.log(bokning);
    // Spara aktuell bokning i Arrayen
    sparadeBokningar.push(bokning);
    // Spara aktuell array post till localstorage "sparadeBokningar"
    localStorage.setItem('spara', JSON.stringify(sparadeBokningar));
    // Töm Formuläret
    bookingform.reset();

}
