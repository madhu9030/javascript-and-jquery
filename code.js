/*function program(num,str) {
	// body...
	var txt= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	txt1=txt.length;
	document.write(txt1);
	var add = num + str;
	alert(add);
}
program(777," madhu");*/


//var fruits = ["mango", "orange=friut", "appple", "banana", "guava"];
//document.write(fruits[1])*/



/*var program = {

		name: "madhu",
		age:  24,
		gender: "male",
		city:  "arkansas",
		country: "usa",
		
	function() {
		
		document.write("Above Details are Correct you are good",'\n')
	}	

};


program.age = 26;
document.write(program.name)

if (program.age == 24) {

program.function();
}
else{
	document.write("Above Details are Incorrect");
}*/
/*OBJECTS

var word = "hai guys how are doing today";

word = word.replace('doing','you') ;

document.write(word); */

/*math objects*/

//var num = 5.6;
 
//var newNum = 5 + Math.ceil(num); //round,ceil,floor
//var squa = Math.sqrt(36);
//document.write(squa);
//document.write(newNum);
 //var todayDate = new Date();
 //todayDate.setYear(2017);//"getYear" you will get present year

 //var newString = todayDate.toDateString();// it will change to string 
 //document.write(todayDate);


/*var person = {

	firstName: "Madhu Sudan Reddy",
	lastName:  "Sanaiahgari",

	getFullName:function(){
	return person.firstName + " " + person.lastName;
}
}
var fullName = person.getFullName();
//document.write(fullName);


document.write(fullName);
*/
 

 /*var Car = function(maxSpeed,driver){

	 	this.maxSpeed=maxSpeed;
	 	this.driver=driver;
	 	this.drove=function(speed,time){ 
	 		document.write("The speed of the car is" + " = " + speed * time+"<br>");
	 	}
	 	this.logDriver=function(){
	 		document.write(" Driver name is" + " " + this.driver);
	 	
}
}
	 	function changeStyle(){
	 		var text = document.getElementById("para1").style.fontStyle="italic";
	 	}
var myCar = new Car(100,"madhu");
var myCar1 = new Car(200,"raju");
var myCar2 = new Car(300,"deva");
var myCar3 = new Car(300,"steve");
var myCar4 = new Car(400,"bala");
myCar.drove(50,4);
myCar.logDriver();
changeStyle();
*/




/*call

var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say(greeting) {

    document.write(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

 
say.call(person1, 'Hello');
document.write("<br>"); // Hello Jon Kuperman
say.call(person2, 'Hello'); 


//apply
var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say(greeting) {

    document.write( greeting + ' ' + this.firstName + ' ' + this.lastName);
}
 document.write("<br>");
say.apply(person1, ['Hello']);
document.write("<br>"); // Hello Jon Kuperman
say.apply(person2, ['Hello']);


//bind


var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
var person2 = {firstName: 'Kelly', lastName: 'King'};
 
function say() {
    document.write('Hello ' + this.firstName + ' ' + this.lastName);
}

var sayHelloJon = say.bind(person1);

var sayHelloKelly = say.bind(person2);
 document.write("<br>");
sayHelloJon(); 
document.write("<br>");// Hello Jon Kuperman
sayHelloKelly();
*/

/*function changeBackground() {
	 		var paragraph = document.getElementById("para1").style.color="red";
	 	}
function back() {
	 		var paragraph = document.getElementById("para1").style.color="";
	 	}

*/

/*function paragraph(){
		var element1= document.createElement("h1");
		var main=document.getElementById("main");
		main.appendChild(element1);
		var text1=document.createTextNode("Google Voice");
		element1.appendChild(text1);

		var element= document.createElement("p");
		main.appendChild(element);
		var text=document.createTextNode("Welcome to Google Voice. Google Voice gives you a single phone number that rings all of your phones, saves your voicemail online, and transcribes your voicemail to text. Other cool features include the ability to listen in on messages while they're being left, block unwanted callers, and make cheap international calls. We hope you enjoy using Google Voice.");
		element.appendChild(text)
}

*/













