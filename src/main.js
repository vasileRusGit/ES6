////////////////////////////////////////////////////////////////////////////// FUNCTIONS DECLARATION
// class TaskCollection {
// 	constructor (tasks = []) {
// 		this.tasks = tasks;
// 	}

// 	log(){
// 		// with => 'this' don't change
// 		this.tasks.forEach((task) => {
// 			console.log(this);
// 		});
// 		// with function 'this' changes
// 		this.tasks.forEach(function(task) {
// 			console.log(this);
// 		});
// 	}
// }



////////////////////////////////////////////////////////////////////////////// DEFAULT PARAMETERS
// function defaultDiscount(){
// 	return .10;
// }

// function applyDiscount(cost, discount = defaultDiscount()){
// 	return cost - (cost * discount);
// }

// console.log(applyDiscount(100));



////////////////////////////////////////////////////////////////////////////// REST PARAMETERS
// // the parameters you specified are saved in a arary (... -> rest operator)
// function sumRest(...numbers){
// 	return numbers.reduce(function(prev, curent){
// 		return prev + curent;
// 	});
// }
// console.log(sumRest(1,2,3,4,5));

// // the array you specified are sspead in single parameters (... -> rest operator)
// function sumSpread(x , y){
// 	return x + y;
// }
// let nums = [1,2]
// console.log(sumSpread(...nums));



////////////////////////////////////////////////////////////////////////////// TEMPLATE STRINGS
// let name = 'Foo';
// let template = `
// 		<div class="Alert">
// 			<p>${name}</p>
// 		</div>
// 	`;

// console.log(template);



////////////////////////////////////////////////////////////////////////////// OBJECT SHORTHEND
// function getPersonDetails(){
// 	let name = 'Foo';
// 	let age = 25;

// 	return {
// 		name, 
// 		age,
// 		greet(){
// 			return `Hello ${this.name}`;
// 		}
// 	}
// }
// console.log(getPersonDetails().greet());

// // object destructuring into variables
// let person = {
// 	name: 'Karen',
// 	age: 32
// }
// let {name, age} = person;
// console.log(name);

// function greet({name, age}){
// 	console.log(`Hello ${name}. You are ${age} old.`);
// }
// greet({
// 	name: 'Foo',
// 	age: 50
// })



////////////////////////////////////////////////////////////////////////////// CLASSES
// class User{
// 	constructor(username, email){
// 		this.username = username;
// 		this.email = email;
// 	}

// 	// you can access static method without first need to instnaceate the class
// 	static register(username){
// 		return new User(username);
// 	}

// 	changeEmail(newEmail){
// 		this.email = newEmail;
// 	}
// }
// let userRegister = User.register('Vasile');
// console.log(userRegister.username);

// let user = new User('Vasi', 'vasi.rus@cercel.com');
// console.log(user.email);

// user.changeEmail('vasi.rus@cercel2.com');
// console.log(user.email);



////////////////////////////////////////////////////////////////////////////// MODULES
// import {TaskCollection, foo} from './taskCollection';
// console.log(foo)



////////////////////////////////////////////////////////////////////////////// PROMISES
// promise - placeholder for an operation that not have started 
// var timer= new Promise(function(resolve, reject){
// 	console.log('init promise');

// 	setTimeout(function(){
// 		console.log('timeout done');
// 		resolve();
// 	}, 2000);
// });

// timer.then(function(){
// 	console.log('end');
// });




////////////////////////////////////////////////////////////////////////////// STRING ADDITION
// let title = 'Red Rising';
// // title.includes();
// // title.startsWith();
// // title.endsWith();
// // title.repeat(n);

// if(title.includes('R')){
// 	console.log('R is the first caracter.');
// }
// if (title.startsWith('Red')){
// 	console.log("This buck start with RED");
// }



////////////////////////////////////////////////////////////////////////////// ARRAY ADDITION
// class User{
// 	constructor(name, isAdmin){
// 		this.name = name;
// 		this.isAdmin = isAdmin;
// 	}
// }

// let users = [
// 	new User('A', true),
// 	new User('B', false),
// 	new User('C', true)
// ];

// console.log(users.find(user => user.isAdmin).name);



////////////////////////////////////////////////////////////////////////////// GENERATOR
// function *numbers(){
// 	console.log('begin');
// 	yield 1;
// 	yield 2;
// 	yield 3;
// }

// let iterator = numbers();

// console.log(iterator.next());

function *range(start, end){
	while(start <= end){
		yield start;
		start++;
	}
}

let iterator = range(1,5);

for(let i of iterator){
	console.log(i);
}