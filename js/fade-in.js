const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.9, 
};

// コールバック関数
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // 画面内に入ったら visible クラスを追加
      entry.target.classList.add("visible");

      // 一度表示したら監視を解除（オプション）
      // observer.unobserve(entry.target);
    } else {
      // 画面外に出たら visible クラスを削除（繰り返しアニメーションする場合）
      // entry.target.classList.remove('visible');
    }
  });
};

// Observer を作成
const observer = new IntersectionObserver(callback, options);

// 監視対象の要素を指定
const chartBox = document.querySelector(".chart-box");
observer.observe(chartBox);
