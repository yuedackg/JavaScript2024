function calcTax( kin, zei ){
    ans = kin * zei ;
    return ans;
}
function calc1(){
    var item = document.getElementById( "shouhinTanka").value;
    item = item * 1;
    var tax = calcTax( item , 0.1 ); 

    alert( "消費税は"+tax);
}