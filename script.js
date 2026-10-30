
const tombol = document.getElementById("tombol");
const pesan = document.getElementById("pesan");

tombol.addEventListener("click", function () {
  pesan.textContent =
    "Halo! Terima kasih sudah mengunjungi website saya.";

  tombol.textContent = "Senang bertemu kamu!";
});
