function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const form = document.getElementById("bookingForm");
const notif = document.getElementById("notif");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const lokasi = document.getElementById("lokasi").value;
  const layanan = document.getElementById("jenisLayanan").value;
  const pesan = document.getElementById("pesan").value;

  const nomorWA = "6281943256139";
  const mapsLink = "https://maps.app.goo.gl/VeobGss5zhSFMwKU8?g_st=aw";

  const teksPesan = `Halo, saya ${nama}. Saya ingin melakukan *${layanan.toUpperCase()}*.\nLokasi: ${lokasi}\nCatatan: ${pesan}`;

  if (layanan === "panggilan") {
    window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(teksPesan)}`, "_blank");
    notif.textContent = "Membuka WhatsApp...";
  } else {
    window.open(mapsLink, "_blank");
    notif.textContent = "📍 Membuka lokasi bengkel di Google Maps...";
  }

  notif.style.color = "#00cc66";
  form.reset();
});
