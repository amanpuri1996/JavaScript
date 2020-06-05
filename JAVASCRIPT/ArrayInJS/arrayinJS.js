

var  p_str = ["Dell","Lenovo","HP"];
var p_str_num = ["Dell","Lenovo",311]
p_str_num[1] = Date();
document.getElementById('p_array').innerHTML += p_str+"<br>";
document.getElementById('p_array').innerHTML += "position of array  position(0) "+p_str[0]+"\n\n position(2) " + p_str[2]+"<br>";
document.getElementById('p_array').innerHTML += "<b>Length of </b>"+p_str+" <b> Array is </b>"+p_str.length+"<br>";
document.getElementById('p_array').innerHTML += "<b>Sort Array</b>"+p_str+" <b> = </b>"+p_str.sort()+"<br>";
document.getElementById('p_array').innerHTML += "array also accepted string and number in one variable "+p_str_num+" "+p_str_num[1];

document.write("Loop in Array..!! <br>");
document.write("for Loop..<br>");
var fruit,fruit_length,fruit_text,i;
fruit = ["Mango","Apple","Orange","Banana","Grapes","Papaya"];
fruit_length=fruit.length;
function function_forloop(){
text = "<ul><ol>";
for(i=0;i<fruit_length; i++){
	text += "<li>" + fruit[i] + "</li>";
}
text +="</ol></ul>";

document.write(text,"<br>");
}
function_forloop();

document.write("foreach Loop..<br>");

function function_foreach(){
	text ="<ul><ol>";
	fruit.forEach(function(entry){
		text +="<li>"+typeof entry+ " "+ entry+"</li>";
	});
	text +="</ol></ul>"; 
	document.write(text);
}
function_foreach();

//push() method used to add new Element in a array..
document.write("push() method used to add new Element in a array.."+"<br>");
function function_push(){
fruit.push("Lemon","Coconut");
document.write(fruit+"<br>"+"<br>");	
}
function_push();

//Fruit(fruit.length) method used to add new Element in a array..
document.write("fruit(fruit.length) method used to add new Element in a array.."+"<br>");
function function_fruit_length(){
fruit[fruit.length]="Lemon"+"<br>";
document.write(fruit+"<br>");	
}
function_fruit_length();
//document.write(fruit+"<br>"+"<br>");	

//Add new Element in a array in a alternate position..
document.write("Add new Element in a array in a alternate position.."+"<br>");
fruit[8]="Watermelon";	
fruit[12]="Watermelon";	
var fruit_l,fruit_txt,i;
fruit_l = fruit.length;
fruit_txt="";
 
function add_fruit_in_alternate_position(){
for(i=0; i<fruit_l; i++)
{
	fruit_txt += fruit[i]+"<br>";
}
	document.write(fruit_txt+"<br>");
}
add_fruit_in_alternate_position();

document.write("<br>"+"Array With Name Indexes are called Associated Array"+"<br>");	

//Check the variable are Array or not
document.write("<br>"+"Check the variable are Array or not"+"<br>");	

//var chk_its_array_or_not = document.getElementById('p_array').innerHTML;
//var chk_its_array_or_not =Array.isArray(fruit);
//isArray() function not support old browser
document.write(Array.isArray(fruit)+"<br>");

document.write(fruit+"<br>");
document.write(chk_var_is_arr_or_not(fruit));

//document.getElementById('check_var_is_arr_or_not').innerHTML=chk_var_is_arr_or_not(fruit);
//another way fro old browser
function chk_var_is_arr_or_not(IsItArray)
{
	return IsItArray.constructor.toString().indexOf("Array") > 2;
}
/* Diamond Shape
function diamond_shape(d_shape){
	var str_diamond = "*";
	var diamond_text="";
	var i;
	var j;
	document.write("<br>");
	document.write("<center>");
	if(d_shape>0)
	{
		for(i=0; i<=number; i++)
		{
			document.write(" "+ i);
		}
		
		for(j=number-1; j>0; j-- )
		{
			document.write(" "+ j);
		}
		diamond_shape(d_shape-1);
		document.write("<br>");
	}
	document.write("<center>");
}
diamond_shape();

function f_number(){
var n = prompt("Please enter number of rows");
n=eval(n);
var s=n-1;
for(var i=1;i<=n;i++)
{
     for (var c = 1;c<=s;c++)
      document.write(" ");
    s--;
     for(c=1;c<=2*i-1;c++)
         document.write("*");         
     document.write("<br>");
}
s=1;

for(i=1;i<=n-1;i++)
{
   for(c=1;c<=s;c++) 
    document.write(" ");
    
    s++;
    
    for(c=1;c<=2*(n-i)-1;c++)
     document.write("*");
     
    document.write("<br>");
}
}
f_number();	
	*/
	
//Convert Array to Strings

document.write("<br><br>Convert Array to Strings using toString() <br><br>");
	function convert_array_to_string(){
		var arr_to_str = ["apple","Mango","Banana","Orange"];
		var type_of_arr_to_str=arr_to_str.toString();
		document.write(typeof type_of_arr_to_str+" = "+ type_of_arr_to_str + "<br>");
		//join() method use to join all array element to string
	document.write("<br> join() method use to join all array element to string<br>");
	 var arr_to_str_full_join = arr_to_str.join("-");
    document.write("<br>" + typeof arr_to_str_full_join+" = "+ arr_to_str_full_join + "<br>");
	}
	convert_array_to_string();
		
	//splice() methos is used to add new item and remove in an array..
	function splice_add_item(){
		var splice_fruit = ["Mango","Apple","Orange","Banana","Grapes","Papaya"];
		document.write("<br><br>" +splice_fruit+"<br>");
			splice_fruit.splice(2,3, "kiwi","lemon");
		document.write("<br><br>" +splice_fruit+"<br>");
		//	splice_fruit.splice(2,2, "kiwi","lemon");
						
		//splice_fruit.splice(2,2, "kiwi","lemon");
		//document.write("<br><br>" +splice_fruit+"<br>");
	}
	splice_add_item();
		
		
		//pop() remove last item in an array
		//push() add item in last position in an array
		//shift() remove the first element in an array
		//unshift() add a new element in an array
	
	//concatenating Array
	document.write("Merge (Concatenating) Array"+"<br>");
	var concat_str1 = ["abc","def","ghi","ijk"];
	var concat_str2 = ["lmn","opq","rst","uvw","xyz"];
	var concat_array = concat_str1.concat(concat_str2).join("");
	document.write(concat_array);
	
	
	//resverse array
	
function reverse_arr()
{
	var str =  "Aman";
	var str_text="";
	var str_len = str.length;
	for(var  i=str_len-1;i>=0;  i-- ){
		str_text +=str[i];
	}
	document.write("<br>");	
	document.write(str_text);
	
	document.write("<br>");
}

reverse_arr();


function star(){
	var str = "*";
	var str_txt = " ";
	var str_len = str.length;
	for(var i=0;i<str_len;i++)
	{
		for(var i=0;i<str_len;i++)
		{
		str_txt +=str_txt[i]; 
		}	
	}
	document.write(str_txt);
}
 star();

//Array Sort
document.write("<br>"+ "Sort string in Array "+ "<br>");
function sort_array(){
		var str1 = ["lmn","opq","rst","uvw","xyz","abc","def","ghi","ijk"];
		document.write("<br>" + str1 +"<br>");
		str1.sort();
		document.write("<br>" + str1 + "<br>");
}
sort_array();

//sort Number
document.write("<br>"+ "Sort Number in Array "+ "<br>");
function sort_numb_alpha_in_array(){
		var str1 = [1,32,12,1,23,43,123,54,76,8,9,09,211,432,545,23,654,65,123,3453,23,56,92,7,2,811,932];
		document.write("<br>" + str1 +"<br>");
		str1.sort();
		document.write("<br>" + "Sort Number alphabetically "+ str1 + "<br>");
}
sort_numb_alpha_in_array();

function sort_numb_in_array(){
		var str1 = [1,32,12,1,23,43,123,54,76,8,9,09,211,432,545,23,654,65,123,3453,23,56,92,7,2,811,932];
		document.write("<br>" + str1 +"<br>");
		str1.sort(function (a,b){
			return a-b
		});
		document.write("<br>" + "Sort Number Numerically "+ str1 + "<br>");
		str1.reverse();
		document.write("<br>" + "Sort decending Number Numerically "+ str1 + "<br>");
}
sort_numb_in_array();

var str_highest_numb_in_array = [1,32,12,1,23,43,123,54,76,8,9,09,211,432,545,23,654,65,123,3453,23,56,92,7,2,811,932];
function highest_numb_in_array(arr){
		return	Math.max.apply(null,arr);
	}

highest_numb_in_array(str_highest_numb_in_array);

		document.write("<br>" + "Highest Number "+ highest_numb_in_array(str_highest_numb_in_array) + "<br>");
		
		//Array Iteration
		document.write("<br> Array Iteration..");
		
		document.write("<br> forEach call a function once for every and each element <br>");
		
		var str_foreach = [1,23,43,21,4,6,54,1,334,90,6,574,35,6,326,675,3452,234,54,67843,342];
		var txt_foreach= "";
		function func_forEach(value,index,array){
			txt_foreach = txt_foreach+ value + "<br>";
		}
	str_foreach.forEach(func_forEach);
		document.write(txt_foreach);
		
		
		document.write("<br><br> map()method creates a new array by performing a function on each array element. <br>");
		
		var map_arr = [1,23,43,21,4,6,54,1,334,90,6,574,35,6,326,675,3452,234,54,67843,342];
		var map_arr2 = map_arr.map(func_map);
		
		function func_map(value,index,array){
			return value *12; 
		}
		document.write(map_arr2 + "<br>");
		
		document.write("<br><br> The filter() method creates a new array with array elements that passes a test. <br>");
		var filter_arr = [1,68,58, 69,23,43,21,4,6,54,1,34,90,6,54,35,6,326,675,52,234,54,843,42];
		var filter_arr2 = filter_arr.filter(func_filter).sort(function (a,b){return a-b;});
		
		function func_filter(value,index,array){
			return value >30;
		}
		
		document.write(filter_arr2 + "<br>");
		
		
		
		document.write("<br><br> reduce()method used to add the all element prensent in array <br>");
		var reduce_arr = [1,68,59, 69,23,43,21,4,6,54,1,34,90,6,54,35,6,326,675,52,234,54,843,42,"dgka"];
		document.write("<br>"+ reduce_arr + "<br>");
		var reduce_arr2 = reduce_arr.reduce(func_reduce);		
		var reduce_right = reduce_arr.reduceRight(func_reduce);
		function func_reduce(total,value,index,array){
			return total+value;
		}
		
		document.write("reduce value : - "+ reduce_arr2 + "<br>");
		document.write("reduce value : - "+ reduce_right + "<br><br>");
		
		
		document.write("every() method check if all array values pass a test.every() always return boolean values.<br>");
		var arr_every_str = [12,43,64,123,5,64,1,3,12,231,4,6,23];
		var arr_every_method= arr_every_str.every(function_every);
		function function_every(value,index,array){
				return value>23; 
		}
		document.write("Every array : - "+ arr_every_str + "<br>");
		document.write("Every value >23 : - "+ arr_every_method + "<br><br>");
		
		document.write("some() method check if some array values pass a test.every() always return boolean values.<br>");
		var arr_some_str = [12,43,64,123,5,64,1,3,12,231,4,6,23];
		var arr_some_method= arr_some_str.some(function_some);
		function function_some(value,index,array){
				return value>34; 
		}
		document.write("Some array : - "+ arr_some_str + "<br>");
		document.write("Some()  value 45 > : - "+ arr_some_method + "<br><br>");