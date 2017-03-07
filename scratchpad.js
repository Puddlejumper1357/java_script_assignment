document.title='Your mission: to create a webpage using as little HTML as possible';


function myFibfuc(n){
	var value;
var div=document.createElement('div');
div.setAttribute("class", "fib");
	
if(n<2){
	if(n===1){
		value=1
	}	
	else if(n===0){
		value=0;
	}
	var p=document.createElement('p');
	p.textContent='Fib('+n+')= '+value;
	div.appendChild(p);
}
else{
	var left=myFibfuc(n-1);
	var clas=left.html.getAttribute("class");
	left.html.setAttribute("class", clas+" fib-left")
	
	
	var right=myFibfuc(n-2);
	clas=right.html.getAttribute("class");
	right.html.setAttribute("class", clas+ " fib-right");
	
	value=left.value + right.value;
	var p=document.createElement('p');
	p.textContent= 'Fib('+n+')= '+value;
	div.appendChild(p);
	
	div.appendChild(left.html);
	div.appendChild(right.html);
	
}
return{	'value':value,'html':div };
}
var fib=function (n, node){
	var tree= myFibfuc(n)
	node.appendChild(tree.html);
	node.setAttribute("id", "fib");
}


var makeDiv=function(cls,id){
	var div=document.createElement('div');
	div.setAttribute('class', cls+ ' shadowed stuff-box');
	div.setAttribute('id',id);
	document.body.appendChild(div);
}



makeDiv('blue', 'fib');


fib(11,document.querySelector('.blue'));

function myPellfunc(n){
var value;
var div=document.createElement('div');
div.setAttribute("class", "pell");
if(n<2){
	if(n===0){
		value=0;
	}
	else if(n===1){
		value=1
	}
	var p=document.createElement('p');
	p.textContent = 'Pell(' + n + ') = ' + value;
	div.appendChild(p);
}
else{
	var left=myPellfunc(n-1);
	var clas=left.html.getAttribute("class");
	left.html.setAttribute("class", clas+" pell-left");
	
	var right=myPellfunc(n-2);
	clas=right.html.getAttribute("class");
	right.html.setAttribute("class", clas+" pell-right");
	
	value=(2*left.value)+right.value;
	var p=document.createElement('p');
	p.textContent = 'Pell(' + n + ') = ' + value;
	div.appendChild(p);
	
	div.appendChild(left.html);
	div.appendChild(right.html);
}
return{'value': value, 'html':div};

}
var pell=function(n,node){
	var tree=myPellfunc(n);
	node.appendChild(tree.html);
	node.setAttribute("id", "pell");
}

makeDiv('yellow','pell');
pell(11, document.querySelector('.yellow'));
function myTribfunc(n){
    var value;
    var div=document.createElement('div');
    div.setAttribute("class", "trib");
    if(n<3){
        if(n===0 || n===1){
            value=0;
        }
        else if(n===2){
            value=1;
        }
        var p=document.createElement('p');
        p.textContent= 'Trib(' + n + ') = ' + value;
        div.appendChild(p);
    }
    else{
        var left=myTribfunc(n-1);
        var clas=left.html.getAttribute("class");
        left.html.setAttribute("class", clas+ " trib-left");
        
        var center=myTribfunc(n-2);
        clas=center.html.getAttribute("class");
        center.html.setAttribute("class", clas+ " trib-center");
        
        var right=myTribfunc(n-3);
        var clas=right.html.getAttribute("class");
        right.html.setAttribute("class", clas+ " trib-right");
        
        value=left.value+center.value+right.value;
        var p=document.createElement('p');
        p.textContent= 'Trib(' + n + ') = ' + value;
        div.appendChild(p);
        
        div.appendChild(left.html);
        div.appendChild(right.html);
        div.appendChild(center.html);
    }
    return{'value': value, 'html':div}
}

var trib=function(n,node){
    var tree=myTribfunc(n);
    node.appendChild(tree.html);
    node.setAttribute("id", "trib");
}
makeDiv('red', 'trib');
trib(11, document.querySelector('.red'));




var myDiv=document.createElement('div');
myDiv.setAttribute("id", "pargraph");
var para=document.createElement('p');
para.textContent=("Here are some links to learn more: ");
myDiv.appendChild(para);


var MakeLink=function(wording, link){
	var myLink=document.createElement('a');
	myLink.setAttribute("href",link)
	myLink.textContent=wording;

var myList=document.createElement('ul');
myList.appendChild(myLink);
myDiv.appendChild(myList);



//	myDiv.appendChild(myLink);

}
MakeLink('Fibonacci ',"https://oeis.org/A000045");
MakeLink(' Pell ',"https://oeis.org/A000129");
MakeLink(' Tribonacci',"https://oeis.org/A000073");




makeDiv('green','paragraph');
var element=document.getElementById("paragraph");
element.appendChild(myDiv);


var styleSheet=document.createElement('style');
styleSheet.textContent=
	"#fib {" +
"	display: inline-block;" +
"	width: 20000px;" +
"}" +
".fib{" +
"    background-color: rgba(200,0,0,0.1);" +
"}" +
".fib-left{" +
"    float: left;" +
"    display: inline-block;" +
"    margin-right: 4px;" +
"}" +
".fib-right{" +
"        float: right;" +
"    display: inline-block;" +
"    margin-left: 4px;" +
"}" +
"#pell{" +
"	display: inline-block;" +
"	width: 20000px;" +
"}" +
".pell{" +
"    background-color: rgba(0,0,200,0.1);" +
"}" +
".pell-left{" +
"    float: left;" +
"    display: inline-block;" +
"    margin-right: 4px;" +
"}" +
".pell-right{" +
"        float: right;" +
"    display: inline-block;" +
"    margin-left: 4px;" +
"}" +
"#trib{" +
"    display: inline-block;" +
"	width: 50000px;" +
"}" +
".trib{" +
"    background-color: rgba(0,0,0,0.1);" +
"}" +
".trib-left{" +
"    float: left;" +
"    display: inline-block;" +
"    margin-right: 4px;" +
"  " +
"}" +
".trib-center{" +
"    float: center;" +
"    display: inline-block;" +
"    " +
"}" +
".trib-right{" +
"        float: right;" +
"    display: inline-block;" +
"    margin-left: 4px;" +
"   " +
"}" +
".stuff-box {" +
"	font-family: 'helvetica neue', helvetica, sans-serif;" +
"	letter-spacing: 1px;" +
"	text-transform: capitalize;" +
"	text-align: center;" +
"	padding: 3px 10px;" +
"	margin: 10px;" +
"	cursor: pointer;" +
"	border-radius: 10px;" +
"	border-width: 2px;" +
"	border-style: solid;" +
"}" +
".shadowed {" +
"	text-shadow: 1px 1px 2px black;" +
"	color:       white;" +
"}" +
".red {" +
"	border-color: rgb(255,0,0);" +
"	background:   rgb(180,60,60);" +
"	box-shadow: 1px 1px 2px rgba(200,0,0,0.4);" +
"}" +
"" +
".yellow {" +
"	border-color: rgb(255,255,0);" +
"	background:   rgb(180,180,60);" +
"	box-shadow: 1px 1px 2px rgba(200,200,0,0.4);" +
"}" +
"" +
".blue {" +
"	border-color: rgb(0,0,255);" +
"	background:   rgb(60,60,180);" +
"	box-shadow: 1px 1px 2px rgba(0,0,200,0.4);" +
"}" +
".green{" +
"	border-color: rgb(0,255,0);" +
"	background: rgb(60,180,60);" +
"	box-shadow: 1px 1px 2px rgba(0,200,0,.4);" +
"}" ;

document.querySelector('body').appendChild(styleSheet);