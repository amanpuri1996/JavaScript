
document.write("<br>Current Date and Time <br>");
var date  =  new Date();
document.write(date+"<br>");


document.write("<br>Current Year<br>");
function my_calender(){
var ddate =  new Date();
 document.write("Current Year : " + ddate.getFullYear() + "<br> Current Month : "+ (ddate.getMonth()+1)  + "<br>Current Date : " + ddate.getDate() 
 + "<br>Current Day : " +ddate.getDay() +"<br>Current Hours " + ddate.getHours() +"<br>Current Minutes " + ddate.getMinutes() +
 "<br>Current Seconds " + ddate.getSeconds() +"<br>Current Miliseconds " + ddate.getMilliseconds()     );
}
my_calender();

document.write("<Br>How to write date formate in javascript<br>");
document.write("<Br> var d_format = new date(2020,2,14,8,20,45,0);<br>var d_format = new date(year,month,date,hour,minute,second,millisecond)");

var d_format = new Date(2020,2,14,8,20,45,0);
document.write("<br>" +d_format + "<br>");