// functionを使って書かれた関数は実行はされない。
// 定義の部分で、実際の実行は呼び出されてから。
function stringInputPrint() {
    var inStr;

    // 文字列”・・・”を出力して、文字列を入力し、inStrにセットする
    // ダイアログに入力されている文字を2つ目に指定
    inStr = prompt("Enter number: ", "初期値");
    
    // 入力された文字列の前に”・・・”を付けて表示する
    alert("your input is : " + inStr);
}

// 実行するには、命令を書く必要がある
// stringInputPrint();
