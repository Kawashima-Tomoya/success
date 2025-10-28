const moreButton = document.getElementById("moreButton");
const popupOverlay = document.getElementById("popupOverlay");
const closeButton = document.getElementById("closeButton");

// ポップアップを開く
moreButton.addEventListener("click", function () {
  popupOverlay.classList.add("active");
  document.body.classList.add("popup-active");
});

// ポップアップを閉じる関数
function closePopup() {
  popupOverlay.classList.remove("active");
  document.body.classList.remove("popup-active");
}

// ポップアップを閉じる
closeButton.addEventListener("click", closePopup);

// オーバーレイをクリックして閉じる
popupOverlay.addEventListener("click", function (e) {
  if (e.target === popupOverlay) {
    closePopup();
  }
});

// ESCキーで閉じる
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && popupOverlay.classList.contains("active")) {
    closePopup();
  }
});
