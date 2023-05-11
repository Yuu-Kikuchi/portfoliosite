"use strict";

//****************************************************** */
//ハンバーガーメニュー
//****************************************************** */

//ハンバーガーメニューを取得
const ham = document.getElementById("hamburger-menu");

//ヘッダーのグローバルナビゲーションメニューを取得
const gnavM = document.querySelector(".header-gnav .gnav-menu");

//ハンバーガーメニューを押したときの処理
ham.onclick = function () {
    //右から流れるようにメニューが出現
    gnavM.classList.toggle("show");
    //ハンバーガーが×に変化
    this.classList.toggle("cross");
    //上下スクロールを無効
    document.querySelector("body").classList.toggle("no-scroll");
}

//*********************************************** */
//Topへ戻るボタン
//*********************************************** */

// トップへ戻るボタンを取得
const pageTop = document.getElementById("pagetop-butn");

// クリックしたら一番上までスクロールするイベントを追加
pageTop.addEventListener("click", scroll_top);

// 一番上へスムーズにスクロールさせるための関数を定義
function scroll_top() {
    window.scroll({ top: 0, behavior: "smooth" });
}

// 一定の所までスクロールされたらボタンを表示
window.addEventListener("scroll", topButn_event);
// ボタンを表示させるスクロールイベントを定義
function topButn_event() {
    // 規定の位置に移動したらボタンを表示
    if (window.pageYOffset > 400) {
        pageTop.classList.add("show");
    } else{
        pageTop.classList.remove("show");
    }
}
