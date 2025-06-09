(function () {
  emailjs.init("hIO4q6WFLjqFgvnqF"); // Public Key
})();

document.getElementById("topupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var uid = document.getElementById("uid").value;
  var amount = document.getElementById("amount").value;
  var payment = document.getElementById("payment").value;
  var esewa = document.getElementById("esewa").value;
  var number = document.getElementById("number").value;

  emailjs.send("service_1b2iqge", "template_ekyudkm", {
    name: name,
    uid: uid,
    amount: amount,
    payment: payment,
    esewa: esewa,
    number: number
  }).then(function (response) {
    alert("Order placed successfully!");
    document.getElementById("topupForm").reset();
  }, function (error) {
    alert("Failed to place order. Please try again.");
    console.log("FAILED...", error);
  });
});
