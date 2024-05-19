function toggleElement() {
  var elements = document.getElementsByClassName("mean-nav");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element && element.style) {
      if (element.style.display === "none") {
        element.style.display = "block";
        element.style.transition = "2.5s ease";
      } else {
        element.style.display = "none";
        element.style.transition = "2.5s ease";
      }
    } else {
      console.error("Element or style object is undefined for index " + i);
    }
  }
}

function redirectToWhatsApp(number) {
  // Check if the number is valid
  if (/^\d{10}$/.test(number)) {
    // Redirect to WhatsApp with the specified number
    window.location.href = `https://wa.me/${number}`;
  } else {
    console.error("Invalid WhatsApp number format");
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const fullName = document.getElementById("full_name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email_address").value;
  const message = document.getElementById("msg").value;

  const subject = encodeURIComponent("New Contact Form Submission");
  const body = encodeURIComponent(
    `Name: ${fullName}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
  );

  const mailtoLink = `mailto:careverge.enterprises@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
}