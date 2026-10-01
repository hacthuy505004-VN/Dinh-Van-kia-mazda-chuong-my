const filters = document.querySelectorAll(".filter");
const cards = document.querySelectorAll(".car-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");
    const brand = filter.dataset.brand;

    cards.forEach(card => {
      card.style.display =
        brand === "all" || card.dataset.brand === brand ? "" : "none";
    });
  });
});

document.getElementById("leadForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const car = document.getElementById("car").value;

  const message =
    `Xin chào, tôi là ${name}. Tôi quan tâm ${car}. SĐT: ${phone}`;

  const zaloUrl =
    "https://zalo.me/0972144840";

  alert("Đã nhận yêu cầu! Bạn có thể bấm OK để mở Zalo và gửi thông tin.");
  window.open(zaloUrl, "_blank");
});
<script>
function openCarDetail() {
  document.getElementById("carModal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeCarDetail() {
  document.getElementById("carModal").style.display = "none";
  document.body.style.overflow = "";
}

window.onclick = function(event) {
  const modal = document.getElementById("carModal");

  if (event.target === modal) {
    closeCarDetail();
  }
}
</script>
