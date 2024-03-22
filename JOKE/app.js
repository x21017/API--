// ボタンがクリックされた時に `joke` 関数を呼び出すように設定
document.getElementById('btn').addEventListener('click', joke);

// ジョークを取得して表示する非同期関数
async function joke() {
    // リクエストの設定
    let config = {
        headers: {
            Accept: "application/json", // JSON形式のデータを要求する
        },
    };

    // ジョークAPIからデータを取得
    let response = await fetch("https://icanhazdadjoke.com/", config);
    let jokeData = await response.json(); // JSONデータを取得してパース

    // 取得したジョークをHTMLの特定の要素に表示





    
    document.getElementById("content").innerHTML = jokeData.joke;
}
