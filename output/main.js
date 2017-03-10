(function () {
'use strict';

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
var User = function User(name, isAdmin){
	this.name = name;
	this.isAdmin = isAdmin;
};

var users = [
	new User('A', true),
	new User('B', false),
	new User('C', true)
];

console.log(users.find(function (user) { return user.isAdmin; }).name);

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEZVTkNUSU9OUyBERUNMQVJBVElPTlxuLy8gY2xhc3MgVGFza0NvbGxlY3Rpb24ge1xuLy8gXHRjb25zdHJ1Y3RvciAodGFza3MgPSBbXSkge1xuLy8gXHRcdHRoaXMudGFza3MgPSB0YXNrcztcbi8vIFx0fVxuXG4vLyBcdGxvZygpe1xuLy8gXHRcdC8vIHdpdGggPT4gJ3RoaXMnIGRvbid0IGNoYW5nZVxuLy8gXHRcdHRoaXMudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuLy8gXHRcdFx0Y29uc29sZS5sb2codGhpcyk7XG4vLyBcdFx0fSk7XG4vLyBcdFx0Ly8gd2l0aCBmdW5jdGlvbiAndGhpcycgY2hhbmdlc1xuLy8gXHRcdHRoaXMudGFza3MuZm9yRWFjaChmdW5jdGlvbih0YXNrKSB7XG4vLyBcdFx0XHRjb25zb2xlLmxvZyh0aGlzKTtcbi8vIFx0XHR9KTtcbi8vIFx0fVxuLy8gfVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIERFRkFVTFQgUEFSQU1FVEVSU1xuLy8gZnVuY3Rpb24gZGVmYXVsdERpc2NvdW50KCl7XG4vLyBcdHJldHVybiAuMTA7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGFwcGx5RGlzY291bnQoY29zdCwgZGlzY291bnQgPSBkZWZhdWx0RGlzY291bnQoKSl7XG4vLyBcdHJldHVybiBjb3N0IC0gKGNvc3QgKiBkaXNjb3VudCk7XG4vLyB9XG5cbi8vIGNvbnNvbGUubG9nKGFwcGx5RGlzY291bnQoMTAwKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUkVTVCBQQVJBTUVURVJTXG4vLyAvLyB0aGUgcGFyYW1ldGVycyB5b3Ugc3BlY2lmaWVkIGFyZSBzYXZlZCBpbiBhIGFyYXJ5ICguLi4gLT4gcmVzdCBvcGVyYXRvcilcbi8vIGZ1bmN0aW9uIHN1bVJlc3QoLi4ubnVtYmVycyl7XG4vLyBcdHJldHVybiBudW1iZXJzLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjdXJlbnQpe1xuLy8gXHRcdHJldHVybiBwcmV2ICsgY3VyZW50O1xuLy8gXHR9KTtcbi8vIH1cbi8vIGNvbnNvbGUubG9nKHN1bVJlc3QoMSwyLDMsNCw1KSk7XG5cbi8vIC8vIHRoZSBhcnJheSB5b3Ugc3BlY2lmaWVkIGFyZSBzc3BlYWQgaW4gc2luZ2xlIHBhcmFtZXRlcnMgKC4uLiAtPiByZXN0IG9wZXJhdG9yKVxuLy8gZnVuY3Rpb24gc3VtU3ByZWFkKHggLCB5KXtcbi8vIFx0cmV0dXJuIHggKyB5O1xuLy8gfVxuLy8gbGV0IG51bXMgPSBbMSwyXVxuLy8gY29uc29sZS5sb2coc3VtU3ByZWFkKC4uLm51bXMpKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBURU1QTEFURSBTVFJJTkdTXG4vLyBsZXQgbmFtZSA9ICdGb28nO1xuLy8gbGV0IHRlbXBsYXRlID0gYFxuLy8gXHRcdDxkaXYgY2xhc3M9XCJBbGVydFwiPlxuLy8gXHRcdFx0PHA+JHtuYW1lfTwvcD5cbi8vIFx0XHQ8L2Rpdj5cbi8vIFx0YDtcblxuLy8gY29uc29sZS5sb2codGVtcGxhdGUpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIE9CSkVDVCBTSE9SVEhFTkRcbi8vIGZ1bmN0aW9uIGdldFBlcnNvbkRldGFpbHMoKXtcbi8vIFx0bGV0IG5hbWUgPSAnRm9vJztcbi8vIFx0bGV0IGFnZSA9IDI1O1xuXG4vLyBcdHJldHVybiB7XG4vLyBcdFx0bmFtZSwgXG4vLyBcdFx0YWdlLFxuLy8gXHRcdGdyZWV0KCl7XG4vLyBcdFx0XHRyZXR1cm4gYEhlbGxvICR7dGhpcy5uYW1lfWA7XG4vLyBcdFx0fVxuLy8gXHR9XG4vLyB9XG4vLyBjb25zb2xlLmxvZyhnZXRQZXJzb25EZXRhaWxzKCkuZ3JlZXQoKSk7XG5cbi8vIC8vIG9iamVjdCBkZXN0cnVjdHVyaW5nIGludG8gdmFyaWFibGVzXG4vLyBsZXQgcGVyc29uID0ge1xuLy8gXHRuYW1lOiAnS2FyZW4nLFxuLy8gXHRhZ2U6IDMyXG4vLyB9XG4vLyBsZXQge25hbWUsIGFnZX0gPSBwZXJzb247XG4vLyBjb25zb2xlLmxvZyhuYW1lKTtcblxuLy8gZnVuY3Rpb24gZ3JlZXQoe25hbWUsIGFnZX0pe1xuLy8gXHRjb25zb2xlLmxvZyhgSGVsbG8gJHtuYW1lfS4gWW91IGFyZSAke2FnZX0gb2xkLmApO1xuLy8gfVxuLy8gZ3JlZXQoe1xuLy8gXHRuYW1lOiAnRm9vJyxcbi8vIFx0YWdlOiA1MFxuLy8gfSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyBDTEFTU0VTXG4vLyBjbGFzcyBVc2Vye1xuLy8gXHRjb25zdHJ1Y3Rvcih1c2VybmFtZSwgZW1haWwpe1xuLy8gXHRcdHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbi8vIFx0XHR0aGlzLmVtYWlsID0gZW1haWw7XG4vLyBcdH1cblxuLy8gXHQvLyB5b3UgY2FuIGFjY2VzcyBzdGF0aWMgbWV0aG9kIHdpdGhvdXQgZmlyc3QgbmVlZCB0byBpbnN0bmFjZWF0ZSB0aGUgY2xhc3Ncbi8vIFx0c3RhdGljIHJlZ2lzdGVyKHVzZXJuYW1lKXtcbi8vIFx0XHRyZXR1cm4gbmV3IFVzZXIodXNlcm5hbWUpO1xuLy8gXHR9XG5cbi8vIFx0Y2hhbmdlRW1haWwobmV3RW1haWwpe1xuLy8gXHRcdHRoaXMuZW1haWwgPSBuZXdFbWFpbDtcbi8vIFx0fVxuLy8gfVxuLy8gbGV0IHVzZXJSZWdpc3RlciA9IFVzZXIucmVnaXN0ZXIoJ1Zhc2lsZScpO1xuLy8gY29uc29sZS5sb2codXNlclJlZ2lzdGVyLnVzZXJuYW1lKTtcblxuLy8gbGV0IHVzZXIgPSBuZXcgVXNlcignVmFzaScsICd2YXNpLnJ1c0BjZXJjZWwuY29tJyk7XG4vLyBjb25zb2xlLmxvZyh1c2VyLmVtYWlsKTtcblxuLy8gdXNlci5jaGFuZ2VFbWFpbCgndmFzaS5ydXNAY2VyY2VsMi5jb20nKTtcbi8vIGNvbnNvbGUubG9nKHVzZXIuZW1haWwpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIE1PRFVMRVNcbi8vIGltcG9ydCB7VGFza0NvbGxlY3Rpb24sIGZvb30gZnJvbSAnLi90YXNrQ29sbGVjdGlvbic7XG4vLyBjb25zb2xlLmxvZyhmb28pXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gUFJPTUlTRVNcbi8vIHByb21pc2UgLSBwbGFjZWhvbGRlciBmb3IgYW4gb3BlcmF0aW9uIHRoYXQgbm90IGhhdmUgc3RhcnRlZCBcbi8vIHZhciB0aW1lcj0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbi8vIFx0Y29uc29sZS5sb2coJ2luaXQgcHJvbWlzZScpO1xuXG4vLyBcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbi8vIFx0XHRjb25zb2xlLmxvZygndGltZW91dCBkb25lJyk7XG4vLyBcdFx0cmVzb2x2ZSgpO1xuLy8gXHR9LCAyMDAwKTtcbi8vIH0pO1xuXG4vLyB0aW1lci50aGVuKGZ1bmN0aW9uKCl7XG4vLyBcdGNvbnNvbGUubG9nKCdlbmQnKTtcbi8vIH0pO1xuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gU1RSSU5HIEFERElUSU9OXG4vLyBsZXQgdGl0bGUgPSAnUmVkIFJpc2luZyc7XG4vLyAvLyB0aXRsZS5pbmNsdWRlcygpO1xuLy8gLy8gdGl0bGUuc3RhcnRzV2l0aCgpO1xuLy8gLy8gdGl0bGUuZW5kc1dpdGgoKTtcbi8vIC8vIHRpdGxlLnJlcGVhdChuKTtcblxuLy8gaWYodGl0bGUuaW5jbHVkZXMoJ1InKSl7XG4vLyBcdGNvbnNvbGUubG9nKCdSIGlzIHRoZSBmaXJzdCBjYXJhY3Rlci4nKTtcbi8vIH1cbi8vIGlmICh0aXRsZS5zdGFydHNXaXRoKCdSZWQnKSl7XG4vLyBcdGNvbnNvbGUubG9nKFwiVGhpcyBidWNrIHN0YXJ0IHdpdGggUkVEXCIpO1xuLy8gfVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEFSUkFZIEFERElUSU9OXG5jbGFzcyBVc2Vye1xuXHRjb25zdHJ1Y3RvcihuYW1lLCBpc0FkbWluKXtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaXNBZG1pbiA9IGlzQWRtaW47XG5cdH1cbn1cblxubGV0IHVzZXJzID0gW1xuXHRuZXcgVXNlcignQScsIHRydWUpLFxuXHRuZXcgVXNlcignQicsIGZhbHNlKSxcblx0bmV3IFVzZXIoJ0MnLCB0cnVlKVxuXTtcblxuY29uc29sZS5sb2codXNlcnMuZmluZCh1c2VyID0+IHVzZXIuaXNBZG1pbikubmFtZSk7Il0sIm5hbWVzIjpbImxldCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0tBLElBQU0sSUFBSSxHQUFBLGFBQ0UsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO0NBQzFCLElBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0NBQ2xCLElBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0NBQ3ZCLENBQUE7O0FBR0ZBLElBQUksS0FBSyxHQUFHO0NBQ1gsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQztDQUNuQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDO0NBQ3BCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7Q0FDbkIsQ0FBQzs7QUFFRixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUMsU0FBRyxJQUFJLENBQUMsT0FBTyxHQUFBLENBQUMsQ0FBQyxJQUFJLENBQUM7OyJ9
