const radioButtons = document.querySelectorAll('input[name="employmentType"]');
const subjectField = document.getElementById("subject");

radioButtons.forEach((radio) => {
  radio.addEventListener("change", function () {
    switch (this.value) {
      case "新卒採用":
        subjectField.value = "【新卒採用】 エントリーのお願い";
        break;
      case "中途採用":
        subjectField.value = "【中途採用】 エントリーのお願い";
        break;
      case "その他":
        subjectField.value = "【その他】 お問い合わせ";
        break;
    }
  });
});

// フォーム送信時の処理
document.getElementById("entryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = {
    氏名: document.getElementById("name").value,
    メールアドレス: document.getElementById("email").value,
    電話番号: document.getElementById("phone").value,
    採用種別: document.querySelector('input[name="employmentType"]:checked')
      .value,
    件名: document.getElementById("subject").value,
    エントリー理由: document.getElementById("reason").value,
  };

  console.log("送信データ:", formData);
  alert("フォームを送信しました！\n（送信処理はサーバー側で実装してください）");
});
