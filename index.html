// EmailJS configuration
const SERVICE_ID = 'service_3cautbu';
const TEMPLATE_ID = 'template_kxpqasp';
const PUBLIC_KEY = 'hIO4q6WFLjqFgvnqF';

emailjs.init(PUBLIC_KEY);

document.getElementById('topup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;

  const templateParams = {
    uid: form.uid.value,
    amount: form.amount.value,
  };

  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
    .then(() => {
      document.getElementById('status').innerText = '✅ Order submitted successfully!';
      form.reset();
    }, (error) => {
      console.error('FAILED...', error);
      alert('❌ Error: ' + JSON.stringify(error)); // Mobile me dikhega
      document.getElementById('status').innerText = '❌ Failed to submit order. Try again.';
    });
});
