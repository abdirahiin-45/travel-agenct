
// WHATSAPP NUMBER
const whatsappNumber = "252617454321";

// GET HTML ELEMENTS
const bookingForm = document.getElementById("bookingForm");
const bookingMessage = document.getElementById("bookingMessage");


// BOOKING FORM
if (bookingForm && bookingMessage) {

  bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData(bookingForm);

    // CUSTOMER DETAILS
    const customerName = formData.get("customerName").trim();
    const customerPhone = formData.get("customerPhone").trim();

    // FLIGHT DETAILS
    const from = formData.get("from").trim();
    const to = formData.get("to").trim();

    const departure = formData.get("departure");
    const returnDate = formData.get("returnDate");

    // PASSENGERS
    const adults = Number(formData.get("adults")) || 1;
    const children = Number(formData.get("children")) || 0;

    const passengers = adults + children;

    // CHECK SAME DESTINATION
    if (from.toLowerCase() === to.toLowerCase()) {

      bookingMessage.textContent =
        "Departure and destination must be different.";

      bookingMessage.style.color = "red";
      return;
    }

    // CHECK RETURN DATE
    if (returnDate && returnDate < departure) {

      bookingMessage.textContent =
        "Return date cannot be before departure.";

      bookingMessage.style.color = "red";
      return;
    }

    // WHATSAPP MESSAGE
    const message = `
✈️ NEW TICKET BOOKING

Customer Name: ${customerName}
Customer Phone: ${customerPhone}

From: ${from}
To: ${to}

Departure Date: ${departure}
Return Date: ${returnDate || "One Way"}

Adults: ${adults}
Children: ${children}
Total Passengers: ${passengers}

SkyWay Travel Agency
    `;

    // WHATSAPP URL
    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // OPEN WHATSAPP
    window.open(whatsappURL, "_blank");

    bookingMessage.textContent =
      "Your booking message is ready in WhatsApp. Please press Send.";

    bookingMessage.style.color = "green";

  });

}


// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const isOpen = navMenu.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

  });

  navMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");

    });

  });

}


// DESTINATION BOOKING BUTTONS
document.querySelectorAll(".book-destination").forEach(button => {

  button.addEventListener("click", () => {

    const destination = button.dataset.destination;

    const toInput = document.getElementById("to");

    if (toInput) {

      toInput.value = destination;

      document.getElementById("booking").scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});


// FOOTER CURRENT YEAR
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
