function showTime(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let  session = "AM";

    let time1 = h 
   let h1=  document.getElementById("hrs").innerHTML = time1;

    let time2 = m 
    document.getElementById("min").innerHTML = time2;

    let time3 = s 
    document.getElementById("sec").innerHTML = time3;

    let session1 = session
    document.getElementById("session").innerHTML = session1;

   

    setTimeout(showTime, 1000);
}