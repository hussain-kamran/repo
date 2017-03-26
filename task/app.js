var input1= prompt("enter a numaber");
var input2 =prompt("enter a noun");
alert(input1+" "+input2);

var number =prompt("enter a number");
if (number<0)
{
	alert("it is negative!");
}
else if (number==0)
{ 
	alert("it is zero");
}
else
{
	alert("it is psitive!");
}

var code =prompt("enter a language code");
if (code=="en")
{
	alert("hello world");
}
else if (code=="fr")
{
	alert("Bonjour le monde");
}
else if (code=="it")
{
	alert("Ciao mondo");
}
else
{
	alert("cant understand");
}
alert("hello world");

var num1=prompt("enter a number");
var num2=prompt("enter another number");
if (num1<num2)
{
    alert("the greater number of "+num1+" & "+num2+" is "+num2);
}
else if(num1>num2)
{
    alert("the greater number of "+num1+" & "+num2+" is "+num1);
}
else
{
     alert("both are equal");

}

var score=prompt("enter your score")
if (score>=50)
{
    alert("you have passed!");
}
else
{
    alert("you have fialed!");
}

var day=prompt("what is the day today")
if (day==="saturday")
{
    alert("it is weekend");
}
else if(day==="sunday")
{
    alert("yay! it is holiday");
}
else{
    alert("it is a weekday");
}

var int1=prompt("enter first number");
var int2=prompt("enter second number");
var in1=parseInt(int1);
var in2=parseInt(int2);
var operation=prompt("enter an mathematical opertion")
if (operation=="+")
{
    alert(in1+in2);
}
else if (operation=="-")
{
    alert(in1-in2);
}
else if (operation=="*")
{
    alert(in1*in2);
}
else if (operation=="/")
{
    alert(in1/in2);
}
else if (operation=="%")
{
    alert((in1/in2)*100 + "%");
}

var temperature=prompt("enter today's temperature");
if (temperature>=40)
{
    alert("It is too hot outside.");
}
else if (temperature>=30 && temperature<40)
{
    alert("The Weather today is Normal.");
}
else if (temperature>=20 && temperature<30)
{
    alert("Today’s Weather is cool");
}
else
{
    alert("OMG! Today’s weather is so Cool");
}

var check=prompt("enter a number");
if(check % 2==0)
{
    alert("it is even");
}
else
{
    alert("it is odd");
}

var strng=prompt("enter a string");
var num=prompt("enter a number");
var cnum=parseInt(num);
var bool=prompt("enter a boolean");
var cbool=Boolean(bool);
alert(strng + " is a "+ typeof(strng));
alert(num + " is a "+ typeof(cnum));
alert(bool + " is a "+ typeof(cbool));


var markobt=prompt("enter obtained marks");
var marktot=prompt("enter total marks");
var percent=(markobt/marktot)*100;

if (percent >= 80)
{
    var grade="A-one";
    document.write("<h2>" + "marksheet" +"</h2>");
    document.write("total marks: "+ marktot + "<br/>");
    document.write("obtained marks: "+ markobt + "<br/>");
    document.write("percentage: "+ percent +" % " + "<br/>");
    document.write("grade: "+ grade + "<br/>");
    document.write("remarks: Excellent");
}
else if (percent >= 70 && percent <80)
{
    var grade="A";
    document.write("<h2>" + "marksheet" +"</h2>");
    document.write("total marks: "+ marktot + "<br/>");
    document.write("obtained marks: "+ markobt + "<br/>");
   document.write("percentage: "+ percent +" % " + "<br/>");
    document.write("grade: "+ grade + "<br/>");
    document.write("remarks: good " );
}

else if (percent >= 60 && percent <70)
{
    var grade="B";
    document.write("<h2>" + "marksheet" +"</h2>");
    document.write("total marks: "+ marktot + "<br/>");
    document.write("obtained marks: "+ markobt + "<br/>");
    document.write("percentage: "+ percent +" % " + "<br/>");
    document.write("grade: "+ grade + "<br/>");
    document.write("remarks: you need to improve " );
}

else
{
    var grade="fail";
    document.write("<h2>" + "marksheet" +"</h2>");
    document.write("total marks: "+ marktot + "<br/>");
    document.write("obtained marks: "+ markobt + "<br/>");
    document.write("percentage: "+ percent +" % " + "<br/>");
    document.write("grade: "+ grade + "<br/>");
    document.write("remarks: sorry " );
}


var fuel=prompt("enter amount of fuel in your car");
if(fuel<.25)
{
    alert("Please refill the fuel in your car");
}
else
{
    alert("you have enough fuel in your car");
}

var item1=prompt("enter item1 name");
var item2=prompt("enter item2 name");
var price1=+prompt("enter item1 price");
var price2=+prompt("enter item2 price");
var ordqty1=+prompt("enter item1 quantity");
var ordqty2=+prompt("enter item2 quantity");
var shipchrg=+prompt("enter shipping charges");
var totcost=(price1*ordqty1)+(price2*ordqty2)+shipchrg;
if(totcost>=2000)
{
    var discount=totcost-(totcost*0.1);
    document.write("<h2>" + "shopping cart" + "</h2>" + "<br/>");
    document.write("price of " + item1 + " is " + price1 + "<br/>");
    document.write("price of " + item2 + " is " + price2 + "<br/>");
    document.write("quantity of " + item1 + " is " + ordqty1 + "<br/>");
    document.write("quantity of " + item2 + " is " + ordqty2 + "<br/>");
    document.write("<br/>"+"<br/>");
    document.write("shipping charges: " + shipchrg + "<br/>");
    document.write("<br/>"+"<br/>");
    document.write("total cost of your order: " + totcost + "<br/>");
    document.write("dicounted price is " + discount + "<br/>");
}
else
{
     var discount=0;
    document.write("<h2>" + "shopping cart" + "</h2>" + "<br/>");
    document.write("price of " + item1 + " is " + price1 + "<br/>");
    document.write("price of " + item2 + " is " + price2 + "<br/>");
    document.write("quantity of " + item1 + " is " + ordqty1 + "<br/>");
    document.write("quantity of " + item2 + " is " + ordqty2 + "<br/>");
    document.write("<br/>"+"<br/>");
    document.write("shipping charges: " + shipchrg + "<br/>");
    document.write("<br/>"+"<br/>");
    document.write("total cost of your order: " + totcost + "<br/>");
    document.write("dicounted price is " + discount + "<br/>");
}

var secretno=3;
var guess=prompt("guess a number between 1-10");
if (guess==3)
{
    alert("bingo! you guessed it write");
}
else if(guess==4 || guess==2)
{
    alert("you were close");
}
else
{
    alert("sorry! you were wrong");
}

var no=prompt("enter a number");
if(no%3==0)
{
    alert("number is divisible by 3");

}
else{
    alert("number is not divisible by 3")
}

var team1=prompt("enter team1 name");
var team2=prompt("enter team2 name");
var scr1=prompt("enter team1 score");
var scr2=prompt("enter team2 score");
if(scr1>scr2)
{
    alert(team1 + " has won" );
}
else if(scr1<scr2)
{
    alert(team2 + " has won" );
}
else{
    alert("there is a tie");
}

var name=prompt("enter your name");
alert("welcome "+ name);


var table=+prompt("enter table number");
var times=1;
document.write(table + " x" + times +" = " + table*times++ + "<br/>");
document.write(table + " x" + times +" = " + table*times++ + "<br/>");
document.write(table + " x" + times +" = " + table*times++ + "<br/>");
document.write(table + " x" + times +" = " + table*times++ + "<br/>");
document.write(table + " x" + times +" = " + table*times++ + "<br/>");
document.write(table + " x" + times +" = " + table*times++ + "<br/>");
document.write(table + " x" + times +" = " + table*times++ + "<br/>");
document.write(table + " x" + times +" = " + table*times++ + "<br/>");
document.write(table + " x" + times +" = " + table*times++ + "<br/>");
document.write(table + " x" + times +" = " + table*times++ + "<br/>");

var tble=+prompt("enter table number");
if(tble-table==0)
{
    tble=5;
    times=1;
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");


}
else{
    times=1;
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");
document.write(tble + " x" + times + " = " + tble*times++ + "<br/>");

}

var city=prompt("enter your city");
if(city==="karachi"||"Karachi")
{
    alert("welcome to city of lights");
}
else
{
    alert("welcome to "+ city);
}

var gender=prompt("enter your gender");
if(gender==="male")
{
    alert("good morning sir");
}
else{
    alert("good morning madam");
}

var color=prompt("enter traffic light color");
if(color==="red")
{
    alert("vehicles must stop");
}
else if(color==="yellow")
{
    alert("vehicles should get ready to move");
}
else{
    alert("vehicles can move now");
}


var age=prompt("enter your age");
var maxage=50;
if(age<maxage)
{
    alert("you are welcome")
}
else{
    alert("you are over aged");
}