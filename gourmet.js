
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log("1件目の検索結果");
  console.log("店舗名:"+data.results.shop[0].name);
  console.log("住所:"+data.results.shop[0].address);
  console.log("予算:"+data.results.shop[0].budget.name);
  console.log("キャッチコピー:"+data.results.shop[0].catch);
  console.log("サジャンル:"+data.results.shop[0].genre.name);
  console.log("営業日時:"+data.results.shop[0].open);
  console.log("アクセス:"+data.results.shop[0].access);
  console.log("最寄駅:"+data.results.shop[0].station_name);

  console.log("2件目の検索結果");
  console.log("店舗名:"+data.results.shop[1].name);
  console.log("住所:"+data.results.shop[1].address);
  console.log("予算:"+data.results.shop[1].budget.name);
  console.log("キャッチコピー:"+data.results.shop[1].catch);
  console.log("サジャンル:"+data.results.shop[1].genre.name);
  console.log("営業日時:"+data.results.shop[1].open);
  console.log("アクセス:"+data.results.shop[1].access);
  console.log("最寄駅:"+data.results.shop[1].station_name);


  }

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

    let div = document.querySelector('#result');
    div.innerHTML = "";
    let span = document.querySelector("#kensu");
    span.textContent = data.results.shop.length;

    for (let s of data.results.shop) {

        let h3 = document.createElement('h3');
        h3.textContent = "店舗名：" + s.name;
        div.insertAdjacentElement('beforeend', h3);

        let img = document.createElement('img');
        img.setAttribute('src', s.photo.pc.l);
        div.insertAdjacentElement('beforeend', img);

        let p = document.createElement('p');
        p.textContent = "住所：" + s.address;
        div.insertAdjacentElement('beforeend', p);

        p = document.createElement('p');
        p.textContent = "予算：" + s.budget.name;
        div.insertAdjacentElement('beforeend', p);

        p = document.createElement('p');
        p.textContent = "キャッチコピー：" + s.catch;
        div.insertAdjacentElement('beforeend', p);

        p = document.createElement('p');
        p.textContent = "サブジャンル：" + s.genre.name;
        div.insertAdjacentElement('beforeend', p);

        p = document.createElement('p');
        p.textContent = "営業時間：" + s.open;
        div.insertAdjacentElement('beforeend', p);

        p = document.createElement('p');
        p.textContent = "アクセス：" + s.access;
        div.insertAdjacentElement('beforeend', p);

        p = document.createElement('p');
        p.textContent = "最寄駅：" + s.station_name;
        div.insertAdjacentElement('beforeend', p);
    }
}
// 課題6-1 のイベントハンドラ登録処理は以下に記述
let b = document.querySelector("#print");
b.addEventListener("click", sendRequest);



// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {
  let genre = document.querySelector("#genre").value;

  let url = 'https://www.nishita-lab.org/web-contents/jsons/hotpepper/'+genre+'.json'
  //通信開始
  axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish);

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {

  let data = resp.data;

  if(typeof data == 'string') {
    data =JSON.parse(data);
  }

  printDom(data);

}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}