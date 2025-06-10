// Replace with your EmailJS info
const SERVICE_ID = 'service_3cautbu';
const TEMPLATE_ID = 'template_kxpqasp';
const PUBLIC_KEY = 'hIO4q6WFLjqFgvnqF';

emailjs.init(PUBLIC_KEY);

document.getElementById('topup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;

  const fileInput = document.getElementById('screenshot');
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const base64Image = reader.result;

    const templateParams = {
      uid: form.uid.value,
      amount: form.amount.value,
      screenshot: base64Image,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
      .then(() => {
        document.getElementById('status').innerText = 'Order submitted successfully!';
        form.reset();
      }, (error) => {
  console.error('FAILED...', error); // Console me error print karega
  alert('Error: ' + JSON.stringify(error)); // Mobile pe popup me error dikhayega
  document.getElementById('status').innerText = 'Failed to submit order. Try again.';
});
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    document.getElementById('status').innerText = 'Please upload a screenshot.';
  }
});
