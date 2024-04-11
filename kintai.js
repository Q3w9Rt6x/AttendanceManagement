//時間表示
function Time2(num) {
    var ret;
    if(num < 10){
        ret = "0" + num;
    }
    else{
        ret = num;
    }
    return ret;
}
function Time() {
    var nowTime = new Date();
    var Year = Time2(nowTime.getFullYear());
    var Month = Time2(nowTime.getMonth()+1);
    var Day = Time2(nowTime.getDate());
    var Hour = Time2(nowTime.getHours());
    var Min  = Time2(nowTime.getMinutes());
    var Sec  = Time2(nowTime.getSeconds());
    var msg = Year + "年" + Month + "月" + Day + "日" + "\n" + Hour + ":" + Min + ":" + Sec;
    document.getElementById("realtime").innerHTML = msg;
    }
setInterval('Time()',1000);

//名前
