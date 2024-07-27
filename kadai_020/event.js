// HTML要素を定数に代入
const textElement = document.getElementById("text");
const buttonElement = document.getElementById("btn");

// ボタンがクリックされたときのイベントリスナーを設定
buttonElement.addEventListener("click", () => {
    // テキストを変更
    textElement.textContent = "ボタンをクリックしました";
});