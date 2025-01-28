function enshu1(){
    // locationにアドレスをセットすると、ブラウザでそのアドレスを入力したように動作する
    window.location = "http://www.yahoo.co.jp/";
}
function enshu2(){
    alert( window.location)
}
function back1(){ 
    window.history.back(1);
}
function back2(){
    window.history.back(2);
}