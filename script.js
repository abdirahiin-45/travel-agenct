
const whatsappNumber = "252617454321";

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);

  const customerName = formData.get("customerName").trim();
  const customerPhone = formData.get("customerPhone").trim();
  const from = formData.get("from").trim();
  const to = formData.get("to").trim();
  const departure = formData.get("departure");
  const returnDate = formData.get("returnDate");
  const passengers = formData.get("passengers");

  if (from.toLowerCase() === to.toLowerCase()) {
    bookingMessage.textContent =
      "Departure and destination must be different.";
    bookingMessage.style.color = "red";
    return;
  }

  if (returnDate && returnDate < departure) {
    bookingMessage.textContent =
      "Return date cannot be before departure.";
    bookingMessage.style.color = "red";
    return;
  }

  const message = `
✈️ NEW TICKET BOOKING

Customer Name: ${customerName}
Customer Phone: ${customerPhone}

From: ${from}
To: ${to}

Departure Date: ${departure}
Return Date: ${returnDate || "One Way"}

Passengers: ${passengers}

SkyWay Travel Agency
  `;

  const whatsappURL =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  bookingMessage.textContent =
    "Your booking message is ready in WhatsApp. Please press Send.";

  bookingMessage.style.color = "green";
});

