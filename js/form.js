const radioButtons = document.querySelectorAll('input[name="employmentType"]');
const subjectField = document.getElementById("subject");
const privacyCheckbox = document.getElementById("privacyPolicy");
const submitBtn = document.getElementById("submitBtn");

radioButtons.forEach((radio) => {
  radio.addEventListener("change", function () {
    switch (this.value) {
      case "新卒採用":
        subjectField.value = "【新卒採用】エントリーのお願い";
        break;
      case "中途採用":
        subjectField.value = "【中途採用】エントリーのお願い";
        break;
      case "その他":
        subjectField.value = "【その他】お問い合わせ";
        break;
    }
  });
});

function updateSubmitButton() {
  if (privacyCheckbox.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

updateSubmitButton();

// チェックボックスの変更を監視
privacyCheckbox.addEventListener("change", updateSubmitButton);

// フォーム送信時の処理
document.getElementById("entryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // プライバシーポリシーの同意確認
  if (!privacyCheckbox.checked) {
    alert("プライバシーポリシーに同意してください。");
    return;
  }

  // フォームデータを取得
  const formData = {
    氏名: document.getElementById("name").value,
    メールアドレス: document.getElementById("email").value,
    電話番号: document.getElementById("phone").value,
    採用種別: document.querySelector('input[name="employmentType"]:checked')
      .value,
    件名: document.getElementById("subject").value,
    エントリー理由: document.getElementById("reason").value,
    プライバシーポリシー同意: privacyCheckbox.checked,
  };

  // コンソールに出力（実際はサーバーに送信）
  console.log("送信データ:", formData);
  alert(
    "フォームを送信しました！\n（実際の送信処理はサーバー側で実装してください）"
  );
});
