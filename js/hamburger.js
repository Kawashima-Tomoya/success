// ハンバーガーメニューの制御
document.addEventListener("DOMContentLoaded", function () {
  const navToggle = document.querySelector(".nav-toggle");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list a");

  // ハンバーガーアイコン用のspan要素を追加
  if (navToggle && !navToggle.querySelector("span")) {
    const span = document.createElement("span");
    navToggle.appendChild(span);
    navToggle.setAttribute("aria-label", "メニューを開く");
  }

  // メニュートグルボタンのクリックイベント
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      const isActive = navList.classList.toggle("active");
      navToggle.classList.toggle("active");

      // アクセシビリティ対応
      navToggle.setAttribute("aria-expanded", isActive);
      navToggle.setAttribute(
        "aria-label",
        isActive ? "メニューを閉じる" : "メニューを開く"
      );
    });
  }

  // メニューリンクをクリックしたらメニューを閉じる
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navList.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "メニューを開く");
      }
    });
  });

  // ウィンドウリサイズ時の処理
  let resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      // デスクトップサイズに戻った時にメニューをリセット
      if (window.innerWidth > 768) {
        navList.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "メニューを開く");
      }
    }, 250);
  });

  // メニュー外をクリックしたら閉じる
  document.addEventListener("click", function (event) {
    const isClickInside = event.target.closest(".global-nav");

    if (!isClickInside && navList.classList.contains("active")) {
      navList.classList.remove("active");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "メニューを開く");
    }
  });
});

// スムーススクロール機能
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");

    // #のみの場合はスキップ
    if (href === "#") {
      e.preventDefault();
      return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      e.preventDefault();

      // ヘッダーの高さを取得
      const header = document.querySelector(".site-header");
      const headerHeight = header ? header.offsetHeight : 0;

      // スクロール位置を計算
      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.pageYOffset -
        headerHeight;

      // スムーススクロール
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// ヘッダーの背景をスクロールで変更（オプション - 必要に応じて有効化）
/*
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.backgroundColor = 'rgba(230, 245, 255, 1)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.backgroundColor = 'rgba(230, 245, 255, 0.95)';
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});
*/
