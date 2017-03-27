var stringarr =["a","b","c","d"];
var numarr =[1,2,3,4];
var boolarr =[true,false];
var mixarr =[1,"a","b",2];
var mobnet =["warid","jazz","ufone","zong","telenor"];


var qualification =["BS","MS","B.E","M.E","Phd","m.phil","HSC","SSC","B.COM","M.COM"];
document.write("<b>" + "Qualification" + "</b>" + "<br/>"+"<br/>");
document.write("1 ) " + qualification[0]+ "<br/>");
document.write("2 ) " + qualification[1]+ "<br/>");
document.write("3 ) " + qualification[2]+ "<br/>");
document.write("4 ) " + qualification[3]+ "<br/>");
document.write("5 ) " + qualification[4]+ "<br/>");
document.write("6 ) " + qualification[5]+ "<br/>");
document.write("7 ) " + qualification[6]+ "<br/>");
document.write("8 ) " + qualification[7]+ "<br/>");
document.write("9 ) " + qualification[8]+ "<br/>");
document.write("10 ) " + qualification[9]+ "<br/>");

var movies=[];
movies.push("avengers");
movies.push("jurassic world");
movies.push("spectre");
movies.push("inside out");
len=movies.length;
l=len;
document.write("<b>" + "Top movies of 2015 "+ "</b>"+"<br/>")
document.write("1) "+ movies[len - --l] +  "<br/>");
document.write("2) " +movies[len - --l] +  "<br/>");
document.write("3) " +movies[len - --l] +  "<br/>");
document.write("4 )" +movies[len - --l] +  "<br/>");
document.write("<b>" +"length of array: "+ len +"</b>");


var favcars=["audi","lamborghini","ferrari","porshe"];
document.write("<b>"+ "Favourite cars"+ "</b>"+ "<br/>");
document.write("first index: " + favcars.indexOf("audi")+"<br/>");
document.write("car at first index: " + favcars[0]+"<br/>");
document.write("last index: " + favcars.indexOf("porshe")+"<br/>");
document.write("car at last index: " + favcars[favcars.length-1]+"<br/>");

var names=["ahmed","hussain","aslam"];
var scores=[450,480,440];
document.write("score of "+names[0]+" is"+ scores[0]+" .percentage: "+(scores[0]/500)*100 +"<br/>");
document.write("score of "+names[1]+" is"+ scores[1]+" .percentage: "+(scores[1]/500)*100 +"<br/>");
document.write("score of "+names[2]+" is"+ scores[2]+" .percentage: "+(scores[2]/500)*100 +"<br/>");


var colorname=["red","yellow","green","blue"];
for(var i=0;i<colorname.length;i++)
{
    document.write(+colorname[i]+"<br/>");
}

var addcolor=prompt("what color do you want to the beginning?");
colorname.unshift(addcolor);
document.write("unshift: "+colorname + "<br/>");

var addcolorend=prompt("what color do you want to the end?");
colorname.push(addcolorend);
document.write("push: "+colorname + "<br/>");

colorname.unshift("purple","pink");
document.write("unshift 2 :"+colorname + "<br/>");

colorname.shift();
document.write("shift: "+colorname + "<br/>");

colorname.pop();
document.write("pop: "+colorname + "<br/>");

var addtoindex=prompt("at which index you want to add?");
var whatcolor=prompt("what color you want to add?");
colorname.splice(addtoindex,0,whatcolor);
document.write("add via splice: "+colorname + "<br/>");

var del=prompt("at which index you want to delete?");
var howmany=prompt("how many colors you want to delete?");
colorname.splice(del,howmany);
document.write("delete via splice: "+colorname + "<br/>");


var cities=["karachi","lahore","islamabad","quetta","peshawer"];
var selectedcities=cities.slice(0,3);

document.write("cities: "+ cities + "<br/>");
document.write("selected cities: "+ selectedcities);

var stdscr=[320,230,480,120];
document.write("ordered scores of students: " + stdscr.sort());

var fruits = ["strawberry", "apple", "orange", "banana"];
document.write("ordered fruit list: " + fruits.sort());

var arr = ["This", "is", "my", "cat"];
document.write("array: " + arr + "<br/>");
document.write("string: " + arr.join(" "));

var devices=["keyboard","mouse","monitor","printer"];
document.write("devices:" + "<br/>" + devices + "<br/>");
document.write("out:" + "<br/>");
for(var i=0;i<devices.length;i++)
{
    
    document.write(devices[i] + "<br/>");
}

var devices=["keyboard","mouse","monitor","printer"];
document.write("devices:" + "<br/>" + devices + "<br/>");
document.write("out:" + "<br/>");
for(var i=devices.length-1;i>=0;i--)
{
    
    document.write(devices[i] + "<br/>");
}