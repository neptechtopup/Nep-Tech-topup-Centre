const SERVICE_ID = 'service_3cautbu';
const TEMPLATE_ID = 'template_kxpqasp';
const PUBLIC_KEY = 'hIO4q6WFLjqFgvnqF';

emailjs.init(PUBLIC_KEY);

document.getElementById('topup-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const form = e.target;
  const fileInput = document.getElementById('screenshot');
  const file = fileInput.files[0];

  if (!file) {
    document.getElementById('status').innerText = 'Please upload a screenshot.';
    return;
  }

  const reader = new FileReader();

  reader.onload = function () {
    const img = new Image();
    img.onload = function () {
      const canvas = document.createElement('canvas');
      const MAX_WIDTH = 300;  // reduce max width
      const scaleSize = MAX_WIDTH / img.width;
      canvas.width = MAX_WIDTH;
      canvas.height = img.height * scaleSize;

      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Reduce quality more to 0.4
      const base64Image = canvas.toDataURL('image/jpeg', 0.4);

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
          console.error('FAILED...', error);
          alert('Error: ' + JSON.stringify(error));
          document.getElementById('status').innerText = 'Failed to submit order. Try again.';
        });
    };

    img.src = reader.result;
  };

  reader.readAsDataURL(file);
});
