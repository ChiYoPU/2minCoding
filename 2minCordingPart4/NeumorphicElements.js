//時計の動きに使う定数
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');


//時計の動き
//時間によってCSSの描画を移動させる方法で時計を実装する
clock = () => {
    //今現在の時間を取得する
    let today = new Date();
    let h = (today.getHours() % 12) + today.getMinutes() / 59;
    let m = today.getMinutes();
    let s = today.getSeconds();

    //何度回転するか角度を決める
    h *= 30;//30°を12回で360°
    m *= 6;
    s *= 6;//6°を60回で360°

    rotation(hours, h);
    rotation(minutes, m);
    rotation(seconds, s);

    //0.5秒単位で描画する
    setTimeout(clock, 500);
}

//要素の角度を変える処理
rotation = (target, val) => {
    target.style.transform = 'rotate(${val}deg)';
}

//ウィンドウをロードする度にclock関数が呼び出される
window.onload = clock();