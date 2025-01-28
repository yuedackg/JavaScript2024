// クリックされたときに、動く関数の名称
function hantei() {
    // テキストボックスに入力された文字を取り出す
    let item = document.getElementById("score").value;
    let oitem = document.getElementById( "outputtext");
    oitem.innerHTML = item;
        
    // 文字列を数字に変換する   "22" * 1 -> 22
    myScore = item * 1 ;

    // 90点以上の場合、「grade 5」と表示する
    if ( myScore >= 90 ){
        alert( "grade 5");
    }

    // 44点未満の場合、「grade 1」と表示する
    if (  myScore < 44          ) {
        alert( "grade 1");
    }
    // 80点から89点までの条件は、二つに分けて考える
    // １：myScoreが80点以上
    // ２：myScoreが90点未満　　
    // 　の二つの条件の両方がいる（AND条件）
    if ( ( myScore >= 80 ) && ( myScore < 90) ){
        alert( "grade 4");
    }

    // 50点から79点までは「grade 3」と表示する
    // 条件１：myScore >= 50
    // 条件２： myScore <= 79　（myScore < 80 ）
    // 条件の結合：and
    if ( ( 50 <= myScore )  &&  ( myScore <= 79 ) ){
        alert( "grade 3");
    }
        
    // 44点から49点までは「grade 2」と表示する
    // 条件１：ｍｙScore >= 44
    // 条件２：myScore <= 49  
    // 条件の結合：and

}