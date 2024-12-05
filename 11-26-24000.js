function printFrom1To20(){
    // ブラウザに括弧の中の値を表示する
    var i = 1 ;
// for(  初期値 ; 継続の判断  ;　増分  ){
//     繰り返しの内容
// }    
//              ≦       i += 1, i++
    for ( i=1 ; i<=20 ; i= i+1 ){
        document.write( i + "<br>");
    }
}

function sumFrom2To100(){
    var sum = 0 ;
    for ( i=2  ; i<=100 ; i=i+2 ){
        sum = sum + i ; 
    }
    document.write( "2から100までの合計"+sum);
}