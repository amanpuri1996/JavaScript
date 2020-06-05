var ab= 3131;
console.log(ab);
const arr1 = [52,12,66,53,45,37,87];
arr1.push(1,21,23);
// arr1.pop();
arr1.splice(0,3);
console.log(arr1);



        function adddnewele(){
            var node =  document.createElement("li");
            var txtnode = document.createTextNode("aman");
            node.appendChild(txtnode);
            document.getElementById('mylist').appendChild(node);
            var addp = document.createElement("p");
            addp.innerHTML="This is mew paragraph";

            var list = document.getElementById('mylist');
            list.insertBefore(node,list.childNodes[0]);
           
            function addtxt(){
        const node= document.getElementById('')
            }
        }

//To do list
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) 
{
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className="close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}


var close = document.getElementsByClassName("close");
for(var i=0; i<close.length; i++){
    close[i].onclick=function(){
        var div = this.parentElement;
        div.style.display="none";
    }
}

var chklist = document.querySelector('ul');
chklist.addEventListener('click',function(ev){
    if(ev.target.tagName === 'li'){
    ev.target.classList.toggle('checkbox_box');
    }
},false);

function newlitag(){
    var li = document.createElement("li");
    var inputtxt =document.getElementById("inputid").value;
    var txt = document.createTextNode(inputtxt);
    li.appendChild(txt);
    if(inputtxt === ''){
        alert("please type something text value..");
    }
    else{
        document.getElementById("spantxtbox").appendChild(li);
    }
    document.getElementById("inputid").value="";
    var span  = document.createElement("span");
    var spantxt = document.createTextNode("\u00d7");
    span.className= "close";
    span.appendChild(spantxt);
    li.appendChild(span);
    for(var i=0; i < close.length; i++){
        close[i].onclick=function(){
            var div = this.parentElement;
            div.style.display="none";
        }
    }
}


var nodea = document.getElementById("asas").hasChildNodes();
document.write(nodea);
function funcnodeabcd(){
var nodeabcd  =  document.getElementById('abcd');
if(nodeabcd.hasChildNodes){
    nodeabcd.removeChild(nodeabcd.firstChild);
} 
}


//create text using appendChild
function appendtxt(){
    var txtnode = document.getElementById('appendul');
    var creatennode= document.createElement('li');
    var txtnode = document.createTextNode('aman');
    creatennode.appendChild(txtnode);
  document.getElementById('appendul').appendChild(creatennode);  
} 