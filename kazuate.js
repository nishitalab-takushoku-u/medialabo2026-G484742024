// 乱数を使って正解を作る
let kotae = Math.floor(Math.random() * 10) + 1;
console.log("答え（デバッグ用）: " + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// そのほか，必要に応じて変数を宣言してもよい
let owari = false;

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
// ここから: 予想回数を1増やして，span#kaisu 要素のテキストを更新
    kaisu++;
    let s = document.querySelector("span#kaisu");
    s.textContent = kaisu;
// ここまで: 予想回数を1増やして，span#kaisu 要素のテキストを更新


 // ここから: テキストボックスに指定された数値を yoso に代入する
 let yoso;
 let t = document.querySelector("input#yosou");
 yoso = Number(t.value);

 let a = document.querySelector("span#answer");
 a.textContent = yoso;

     // ここまで: テキストボックスに指定された数値を yoso に代入する


    // ここから: 正解判定する
    //          正解/不正解のときのメッセージを表示する

 let p = document.querySelector("p#result");

    if (owari) {
        let p = document.querySelector("p#result");
        p.textContent = "答えは " + kotae + " でした．すでにゲームは終わっています";
        return;
    }

    if (yoso === kotae) {
        p.textContent = "正解です．おめでとう！";
        owari = true;
    }
    else if (kaisu === 3) {
        p.textContent = "まちがい．残念でした．答えは " + kotae + " です．";
        owari = true;
    }
    else if (yoso < kotae) {
        p.textContent = "まちがい．答えはもっと大きいですよ";
    }
    else {
        p.textContent = "まちがい．答えはもっと小さいですよ";
    }
     // ここまで: 正解判定する
}
// ここから: ボタンを押した時のイベントハンドラとして hantei を登録
let button = document.querySelector("button#kaitou");
button.addEventListener("click", hantei);
// ここまで: ボタンを押した時のイベントハンドラとして hantei を登録