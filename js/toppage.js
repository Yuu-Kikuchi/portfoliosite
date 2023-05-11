"use strict";

// ********************************* */
// キービジュアル画像の切り替え処理
//********************************** */

let time = new Date();
let TimeHours = time.getHours();

let kVisual;

function keyVisual(){
    let kVisual = document.getElementById("key-visual");

    if (TimeHours > 5 && TimeHours < 18) {
    kVisual.style.backgroundImage = "url(./images/bg_tokushima_noon.jpg)";
    } else {
    kVisual.style.backgroundImage = "url(./images/bg_tokushima_night.jpg)";
    }

    // 5時以降、指定時刻が来たタイミングで背景が切り替わる処理(夜→昼)
    if (TimeHours === 5) {
        setTimeout(function () {
            kVisual.style.backgroundImage = "url(./images/bg_tokushima_night.jpg)";
        }, new Date().setHours(6, 0, 0, 0) - time);
    }


//   17時以降、指定時刻が来たタイミングで背景が切り替わる処理(昼→夜)
    if (TimeHours === 17) {
        setTimeout(function () {
            kVisual.style.backgroundImage = "url(./images/bg_tokushima_night.jpg)";
        }, new Date().setHours(18, 0, 0, 0) - time);
    }
}

keyVisual();


// ********************************* */
// Works、Blogのコンテンツをスクロールでフェードインさせる処理
//********************************** */

// フェードインをさせるコンテンツを取得
const fadeinTarget = document.querySelectorAll(".fade");

// スクロールでフェードインイベントの実行
window.addEventListener("scroll", fadeinBoxes);

// 関数の定義
function fadeinBoxes() {
    //発火位置の指定
    const triggerBottom = window.innerHeight;

    fadeinTarget.forEach((box) => {
        //コンテンツ(box)の頭の部分の座標を取得
        const boxTop = box.getBoundingClientRect().top;

        //boxの頭部分が発火位置を超えたら処理実行
        if (boxTop < triggerBottom) {
            box.classList.add("open");
        }
    });
}
