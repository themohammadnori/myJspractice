'use strict'
  
// var list = [1,2,3,4,5];

// function sum(numbers){
     
    // for(var i = 0; i < arr.length; i++) {
        
    //     console.log('total : ' + total + ' item : ' + arr[i]);
    //      total = total + arr[i];
    // }
    // var i = 0;
    // while(i < 5) {

    //     total = total + arr[i];
    //     i++;

    // }
    // var total = 0;
    // arr.forEach(function(x){
    //   total += x;
    // });

    // return numbers.reduce(function(total, value){
    //  console.log(total , value);
    //  return total + value;
    // },10);
       
        
    // }


// console.log(sum(list));

//var list = ["item shop",0,1,2,3,4,5];
//var list2 = [6,7,8,9];
 
// console.log(list.shift());
// console.log(list.shift());

// console.log(list.unshift(55));
// console.log(list.unshift(54));
// console.log(list.unshift("New Item"));
// console.log(list.indexOf(55));
//console.log(list.splice(0,3));
//console.log(list.slice(0,5));
//console.log(list.join(' '));
//var newlist = list2.concat(list);
//console.log(list , list2);
//console.log(newlist.sort());
//console.log(newlist.reverse());
// var filterlist = newlist.filter(function(item){
//      return item % 2 == 1; //0 even  //1 odd
// });

// var maplist = newlist.map(function(item){
//     return item * 2;
// })

// console.log(maplist);
//console.log(filterlist);
//console.log(newlist);



// var car = {
//     make: 'Ford',
//     model: 'Mustang',
//     "year-old": 1963,
//     details : {
//         colors :["Black" , "Red ", "Green"],
//         wheels : 4
//     },
//     run: function(){
//         return 'Speed Up to 220';
//     },
//     summary: function(){
    
//         return "Car Company : " + this.make +"  "+ " Model name : " + this.model; 
//     }
// };

// var car_2 = new Object();
// car_2.model = "Cheverlet";
// console.log(car_2.model);
// console.log(car == car_2);


// console.log(car.make);
// console.log(car.model)
// console.log(car["year-old"]);
// console.log(car.details.colors[1]);
// console.log(car.run());
// console.log(car.summary());


// var car1 = {
//     company : 'ford',
//     model : 'mustang',
//     color : 'blue',
//     year : '1969',
// }

// var car2 = new Object();
// car2.model = 'GMC';

// Object.prototype.sum = function() {
//     return 'Sum';
// }

//--------------------------

// function Car(company, model , year){
//     this.company = company;
//     this.model = model;
//     this.year = year;
    // this.run =function(){
    //     return 'speed ups to 110 KM/h'
    // }

//}

// Car.prototype.fun = function(){
//     return 'Fun';
// }

// Car.prototype.run = function(){
//     return 'Run!';
// }


// var car3 = new Car('irankhodro', 'pars' , '1395');
// var car4 = new Car('ford' , 'mustang' , '1969');

// function Person(name){
//      this.name= name;
// }

// Person.prototype.sum = function() {
//     return 'Sum + 1 ';
// }


// var person1 = new Person('hassan');

// var list = new Array(1,2,3,4,5,6,7);
// var name = new String('Mohammad');
// var num = new Number(47);
// var status = new Boolean(true);





// function Car(company, model , year){
//     this.company = company;
//     this.model = model;
//     this.year = year;
    // this.run =function(){
    //     return 'speed ups to 110 KM/h'
    // }

// }

// Car.prototype.run = function(){
//     return 'Run!';
// }


// var car3 = new Car('ford' , 'mustang' , '1969');
// car3.color = 'red';


// var car4 = Object.create(car3);
// car4.makeAsmile = function(){
//     console.log(' :) ')
// }



// var car5 = Object.create(car4);
//  car5.color = 'Yellow';
//  car5.year = '2020';








// var car = {
//     make : 'sipa',
//     model : '111',

// }
// var car2 = {
//     make : 'sipa',
//     model : 'tiba2'
// }




// function displayDetails(name , year) {
//     console.log(name, year)
//     console.log(' Maker : ' + this.make + ' , Model : ' + this.model);
// }


//apply
// displayDetails.apply(car2,[' Ali' , 1398]);

//call
// displayDetails.call(car2,' Ali' , 1398);

//bind
// var a = displayDetails.bind(car2 ,' Ali ' , 1398)();








// var i = 0;
// var list = [];

// while(i < 10){
//     //debugger;
//     if(i % 2 === 0){
//        console.log("Even")
//     } else {
//        console.log("Odd")
//     }

//     if(i % 2 !== 0) {
//         list.push(i);
//     }
//     i++;
// }

// console.log(list);





// try {
//     if(true) {
//         throw { name : 'Error', message: 'Not Correctd'}
//     }

// } catch(err)  {
//         console.log(err);
//       //console.log(err.name , err.message);
// } finally {
//     console.log("The End");
//}



// setTimeout(function(){
//     console.log("Hello Hassan I coming soon");
// },3000)

// var i = 0;
// setInterval(function(){
//     console.log(i);
//     i++;
// },1000)







// function getRandomInt(max){
//     return Math.floor( Math.random() * Math.floor(max));

 
// }





// var ul = document.createElement('ul');
// ul.classList.add('item-shop');
// //ul.id('item-shop');
// ul.setAttribute('id' , 'item-shop');


// var li1 = document.createElement('li');
// li1.classList.add('item-group');
// li1.textContent = 'Item 1';

// var li2 = document.createElement('li');
// li2.classList.add('item-group');
// li2.textContent = 'Item 2';


// ul.appendChild(li1);
// ul.appendChild(li2);

// document.querySelector('.item').appendChild(ul);




   
//alert('This is mork');
//console.log(confirm('Are you 18 year old ?'));
//console.log(prompt("What's your name ?"));






// var title = document.querySelector('#title');
 

//  title.onmouseenter = function(event) {
//       event.target.style.backgroundColor = 'red';
//  }


//  title.onmouseout =  function(e) {
//     e.target.style.backgroundColor = 'yellow';
// }









// title.onmouseenter = function(event) {
//     console.log('Click 1');
//      event.target.style.backgroundColor = 'red';
// }


// title.onmouseout =  function(e) {
//     console.log('Click 2');
//    e.target.style.backgroundColor = 'yellow';
// }









// var title1 = document.querySelector('.item1');
//  var title2 = document.querySelector('.item2');

//  title1.addEventListener('click', function(e){
//      console.log('Title 1');
//  });

//  var elfunc = function(e){
//   e.stopPropagation();
//   console.log('Title 2');
// }

//  title2.addEventListener('click', elfunc );

//  var link = document.getElementById('web');
//  link.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log('click');
//  });

//  setInterval(() => {
//    title2.removeEventListener('click' , elfunc);
//  }, 2000);












// var ajax = new XMLHttpRequest();
    

//     ajax.open('GET', 'https://jsonplaceholder.typicode.com/users');

//     // ajax.onreadystatechange = function(){
//     //   if(this.readyState == XMLHttpRequest.DONE){
//     //        if(this.status == 200) {
//     //          console.log('Done', this.responseText);
//     //        }else if(this.status == 404){
//     //          console.log('Not Found');
//     //        }
//     //   }
//     // }


//     ajax.addEventListener('load', function(){
//       if(this.readyState == XMLHttpRequest.DONE){
//            if(this.status == 200) {
//              console.log('Done', this.responseText);
//            }else if(this.status == 404){
//              console.log('Not Found');
//            }
//       }
//     });



//     ajax.send();









// var ajax = new XMLHttpRequest();

// var data = {
//   username: 'Themohammadnori',
//   Email: 'mnz1393@gmail.com'
// }

// ajax.open('POST', 'https://jsonplaceholder.typicode.com/users');
// ajax.setRequestHeader('Content-type', "application/json; charset=UTF-8")


// ajax.addEventListener('load', function(){
//   if(this.readyState == XMLHttpRequest.DONE){
//     if(this.status == 201) {
//       console.log('Done');
//       var data = JSON.parse(this.responseText);
//       console.log(data);
//     }else {
//       console.log(this.status);
//     }
//   }
// })


// ajax.send(JSON.stringify(data));







//------------------------------------------------------------------------------------------------------------
//ES6


// function sum(a, b) {
//     return a + b;
// }

// let sum = function(a, b) {
//     return a + b;

// }

// let sum = (a, b) => {
//     return {a : a, b : b}

// }
// console.log(sum(50 , 5));

// let arr = [1,2,3,4,5];

// console.log(arr.map((item) => {
//     return item * 2;
// }));

// function Person(){
//     this.age = 0;
//     let that = this;

//     setInterval(() => {
//         this.age++;
//         console.log(this.age);

// }, 2000);

// }

// let person = new Person();


//let arguments = [1,2,3,4];

// function sum(a,b){
//     console.log(arguments[1])
// }

//let sum = (a,b) => console.log(arguments)

    //let obj = {
    //     a : 10,
    //     b : function(){
    //         console.log(this.a, this);
    //     },
    //     c : () => {
    //         console.log(this.a, this);
    //     }
    // }
    
    // obj.b();
    // obj.c();


   // function sum(a, b) {
//     let x = a || 1      //let x = typeof a == 'undefined' ? 1 : a;
//     let y = b || 1     //let y = typeof b == 'undefined' ? 1 : b;
//     console.log(x , y);
//     console.log(x + y);
// }


// sum(2 ,)
// sum(3, 4)

// function sum(a = 1 , b = 1) {
//     console.log(a, b);
//     console.log(a+ b);
// }

// sum(2,)
// sum(4,3)
// sum()




// function sum(a ,b , ...c) {
//     console.log(a, b, c);
//     console.log(a + b)   
// }
// sum(1,2,3,4,5,200)




// function sum(a ,b , ...args) {
//     console.log(a, b);
//     return args.reduce((pre, current) => {
//         return pre + current;
//     })
// }

// console.log(sum(1,2,3,4,5,200))



// function sum(a, b, c, ...x) {
//     console.log(x);
//     console.log(a +b + c);
// }

// let list = [1, 2 ,3, 512];
// //let list1 = [4, 5, 6];

// //sum.apply(null,list);
// sum(...list)

// //console.log([...list, ...list1]);




// //let list = [1,2,3,4,5,6];
// let name = 'Mohammad';

// //list.forEach(item => console.log(item));

// for(let item of name){
//     console.log(item);
// }






// let list = [1, 'Mohammad', 'Ali', false,5]

// let [item1 , item2] = list;

// console.log(item1, item2);

// let [ a , b] = [1, 2]
// //let [ a=1  , b=1] = [2]        with deafault paramets
// console.log(a, b);



// let list = [1, 'Mohammad', 'Ali', false,5]

// let [item1, , , item2, item3] = list;       // ignore is done

// console.log(item1, item2, item3);



// function foo(){
//     return [22,33,44,55,66,77,88,99];
// }


// let [ a , b, ...c] = foo();
// //let [ a=1  , b=1] = [2]        with deafault paramets
// console.log(a, b, c);



// let obj = {
//     name:'Mohammad',
//     age: 23,
//     foo: () => { return ' Mazash in the jail'}
// }

// // let name = obj.name;
// // let age = obj.age;
// // let bar = obj.foo;
// let { name , age = 20 , foo : bar} = obj;

// console.log(name, age, bar());





// let obj = {
//     name : 'Mohammad ',
//     age : 23
// }

// let text = `Hello ${obj.name} ${obj.age} \${it is mork}`

// console.log(text);








// function Car(make , model , year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.run = function() {
//         return "Speed Up To 200";
//     }

// }

// let car1 = new Car("Ford", "Mustang", "1990");
// console.log(car1);

// class Car {

//     constructor(make , model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     run() {
//         return "Speed Up To 200";
//     }

// }

// let car1 = new Car("Ford", "Mustang", 1998);
// let car2 = new Car("sipa" , "111" , 2000);
// console.log(car1);
// console.log(car2.run());
// console.log(car2.__proto__ == Car.prototype);












// function Car(make , model , year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.run = function() {
//         return "Speed Up To 200";
//     }

// }

// let car1 = new Car("Ford", "Mustang", "1990");
// console.log(car1);

// class Car {

//     constructor(make , model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//     run() {
//         return "Speed Up To 200";
//     }

// }



// class IranCar extends Car {
//     constructor(make, model, year, color) {
//         super(make, model, year)
//         this.color = color;
//     }

//     fly(){
//         return ' Car is Flying';
//     }
//     run(){
//         console.log(super.run())
//         return ' Speed up to 40'
//     }

//     go(){
//         return this.run();
//     }
// }

// let car1 = new Car("Ford", "Mustang", 1998);
// let car2 = new IranCar("sipa" , "111" , 2000, 'White');
// console.log(car2);
// console.log(car2.fly());
// console.log(car2.go());









// class Car {

//     constructor(make , model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }

//   static run() {
//         return "Speed Up To 200";
//     }

// }



// class IranCar extends Car {
//     constructor(make, model, year, color) {
//         super(make, model, year)
//         this.color = color;
//     }

//     fly(){
//         return ' Car is Flying';
//     }
//     static run(){
//         //console.log(super.run())
//         return ' Speed up to 40'
//     }

//    static go(){
//         return this.run();
//     }
// }

// let car1 = new Car("Ford", "Mustang", 1998);
// let car2 = new IranCar("sipa" , "111" , 2000, 'White');
// // console.log(car2);
// // console.log(car2.fly());
// // console.log(car2.go());


// //console.log(car2.go());
// //console.log(IranCar.go());








// class AdvanceArray extends Array {
 
//     find(value) {
//         let val = this.filter(item => item == value)
//         return val.length == 0 ? 'error' : val[0];

//     }
// }




// let list = new AdvanceArray('Mohammad' , 'Ali' , 'Hassan');
// console.log(list.find("Mohammad"));
// console.log(list.reverse());









// class Foo {
//     constructor(){
//         this.log = [];
//     }


//     set current(value) {
//         this.log.push(value);
//     }

//     get latest(){
//         if(this.log.length == 0){
//             return undefined;
//         }

//         return this.log[this.log.length - 1]

//     }


    
// }


// let bar = new Foo();
// bar.current = 'A';
// bar.current = 'B';

// console.log(bar.log);
// console.log(bar.latest);






// let name = "Mohammad";
// let keyname = "Full name";

// let obj = {
//     name,
//     [keyname] : "Hassan Nori",
//     // sayhello(){
//     //     return "hello Hassan we miss you";
//     // }
//     "Hello hassan"(){
//         return 'come back to the Heart';
//     }
// }

// console.log(obj);
// //console.log(obj.sayhello());
// console.log(obj["Hello hassan"]());









// // let symbol1 = Symbol.for('Fullname');
// // let symbol2 = Symbol('Age');

// // let obj = {
// //     name : "Mohammad",
// //     [symbol1] : 23
// // }

// // // for(let o in obj) {
// // //     console.log(o);
// // // }

// // //console.log(obj);
// // let symbolN = Symbol.for('Fullname');
// // //console.log(obj[symbol1]);
// // console.log(symbol1 == symbolN);
// // console.log(obj[symbolN]);

// class ReplaceX {
//     constructor(value){
//         this.value = value;
//     }

//     [Symbol.replace](string){
//         //return 'Hassan'
//         return `/${string}/${this.value}`;
//     }
// }

// console.log('Foo'.replace(new ReplaceX('bar')));









//let list = [1,2,3,4,5,6,7,8,9];

// let list2 = Array.of(2);
// let list3 = Array.from(list, item => item * 5);


// console.log(list3);
// console.log(list3.filter(item => item % 2 == 0));


// for(let item of list.entries()){
//     console.log(item);
// }
// let arr = list.entries();
// console.log(arr.next());
// console.log(arr.next());


//console.log(list.fill(55,3));
//console.log(list.fill(55,3,5));
//console.log(list.fill('Mohammad'));
//console.log(list.fill(55));
//console.log(list.fill(false));



//console.log(list3.find(item => item % 2 == 0));    //first element selected
//console.log(list3);
//console.log(list3.find(item => item == 20))

//console.log(list.map(item => item * 2));


//console.log(list.copyWithin(2,6));
//console.log(list.copyWithin(1,4));
//console.log(list);
//console.log(list.copyWithin(3,4,6));





// let num = 50 + 'cvcvcv'; 

// console.log(isNaN(num));

// let num = Infinity;

// console.log(Number.isFinite(num));

//let num = 1.2;

//console.log(Number.isInteger(num));

// let num = 100; //100 , -100 , 0 , NaN

// console.log(Math.sign(num));  // 1:is positive number  0: is zero number  -1:is negative number  NaN : is not a number



// console.log(Math.trunc(-1.66));
// console.log(Math.floor(-1.66));















// // let text = "mohammad nori";

// // console.log(text.includes("mohammad"));
// // console.log(text.includes("mohammad", 2));


// // let text = "hassan nori";

// // console.log(text.startsWith("hass"));
// // console.log(text.startsWith("san",3));
// // console.log(text.endsWith("ori"));

// // let obj1 = {
// //     name : 'Mohammad'
// // }

// // let obj2 = {
// //     family : 'Nori Zade'
// // }

// // let obj3 = Object.assign(obj1 , obj2);
// // console.log(obj3);


// // let obj1 = {
// //     name : 'Mohammad',
// //     family : 'Davis'
// // }

// // let obj2 = {
// //     family : 'Nori Zade',
// //     name : 'Alphnso',
// //     age : 23
// // }

// // let obj3 = Object.assign(obj1 , obj2);
// // console.log(obj3);


// class Class1 {
//     constructor() {

//      this.name = "mohammad"
//      }
// }

// class Class2 {
//     constructor(){
//         this.family = "nori"
//     }
// }

// class Class3 {
//     constructor(){
//         this.age = 23
//     }
// }


// let obj1 = new Class1();
// let obj2 = new Class2();
// let obj3 = new Class3();

// //Object.setPrototypeOf(obj2, obj1);  // to change prototype of your object if you want

// let obj4 = Object.assign({}, obj1 , obj2, obj3)
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(obj4);

















// // let names = ['Mohammad', 'Ali' , 'Hassan'];

// // // console.log();
// // // names[Symbol.iterator] = null;

// // // console.log(names[Symbol.iterator]());

// // names[Symbol.iterator] = function() {
// //     //console.log(this[2]);
// //     let item = this;
// //     let step = 0;
// //     return {
// //         // Mohammad(){
// //         //     console.log('Hassan ibn Taghi');
// //         // }
// //         next(){
// //             //console.log(this);
// //             let obj = {
// //                 //done : false,
// //                 done : step >= item.length,
// //                 value : item[step]
                
// //             }
// //             step++;
// //             return obj;
// //         }
// //     }
// // }




// // //let nameIt = names[Symbol.iterator]();

// // // console.log(nameIt.next());
// // // console.log(nameIt.next());
// // // console.log(nameIt.next());
// // // console.log(nameIt.next());

// // // console.log(nameIt.Mohammad());

// // //console.log(nameIt.next());

// // for(name of names) {
// //     console.log(name);
// // }




// let user = {
//     id : 1,
//     name : 'Mohammad',
//     email : 'themohammadnori@yahoo.com',
//     posts : [
//         {
//             id : 1,
//             title : 'This is post one'
//         },
//         {
//             id : 2,
//             title : 'This is post two'
//         }


//     ]
// }


// user[Symbol.iterator] = function(){
//     let posts = this.posts;
//     let step = 0;
//     return {
//         next(){

//             let obj = {
//                 done : step >= posts.length,
//                 value : posts[step]

//             }
//             step++;
//             return obj;
//         }

//     }
// }


// // let userIt = user[Symbol.iterator]();
// // console.log(userIt.next());
// // console.log(userIt.next());
// // console.log(userIt.next());
// // console.log(userIt.next());


// for(let post of user){
//     console.log(post);
// }


















// // // function* createNames(){
// // //     console.log('Prccess Mohammad');
// // //     yield 'Mohammad'
// // //     console.log('Prccess Ali');
// // //     yield 'Ali'
// // //     console.log('Prccess Hassan');
// // //     yield 'Hassan'

// // //     return "Done Names";

// // // }

// // // let nameIt = createNames();
// // // console.log(nameIt.next());
// // // console.log(nameIt.next());
// // // console.log(nameIt.next());
// // // console.log(nameIt.next());
// // // console.log(nameIt.next());


// // // for(const name of createNames()){
// // //     console.log(name);
// // // }

// // //console.log([...createNames()]);


// // let myObj= {
// //     name : 'Mohammad',
// //     age : 23,
// //     // [Symbol.iterator](){
// //     //     let list = [0,1,2,3,4,5];
// //     //     let step = 0;
// //     //     return {
// //     //         next(){
// //     //             let obj = {
// //     //                 done : step >= list.length,
// //     //                 value : list[step]
// //     //             }
// //     //             step++;
// //     //             return obj;
// //     //         }
// //     //     }
// //     // }
// //     *[Symbol.iterator](){
// //         yield 0
// //         yield 1
// //         yield 2
// //         yield 3
// //         yield 4
// //         yield 5

// //     }
// //  }




// // // for(const item of myObj){
// // //     console.log(item);
// // // }

// // let myObjIt = myObj[Symbol.iterator]();
// // console.log(myObjIt.next());
// // console.log(myObjIt.next());
// // console.log(myObjIt.next());
// // console.log(myObjIt.next());
// // console.log(myObjIt.next());
// // console.log(myObjIt.next());
// // console.log(myObjIt.next());






// let user = {
//     id : 1,
//     name : 'Mohammad',
//     email : 'themohammadnori@yahoo.com',
//     posts : [
//         {
//             id : 1,
//             title : 'This is post one'
//         },
//         {
//             id : 2,
//             title : 'This is post two'
//         }


//     ],
//     *[Symbol.iterator](){
//         yield* this.posts
//        //yield this.posts[1]

//     }
// }

// // user[Symbol.iterator] = function(){           // we dont need this whenever we have generator & yield :)
// //     let posts = this.posts;
// //     let step = 0;
// //     return {
// //         next(){

// //             let obj = {
// //                 done : step >= posts.length,
// //                 value : posts[step]

// //             }
// //             step++;
// //             return obj;
// //         }

// //     }
// // }

// // for(let post of user){
// //     console.log(post);
// // }
// let userIt = user[Symbol.iterator]();
// console.log(userIt.next());
// console.log(userIt.next());  
// console.log(userIt.next()); 
// console.log(userIt.next()); 












// // function doSomething(callback){
// //     setTimeout(() => {
// //         callback('Run 2')
// //     }, 2000);
     
// // }

// // console.log('Run 1');
// // doSomething(function(data) {
// //     console.log(data);
// // });
// // console.log('Run 3'); 


// function doSomething(callback, error){
//     setTimeout(() => {
//         let title = 'This is article one';
//         if(!title) { error('Error'); }
//         setTimeout(() => {
//             let data = { user : ''}
//             if(!data){ error('Err Data'); //return;}
//         }
//             callback(data);
            
//         }, 2000);
//     }, 2000);
     
// }

// console.log('Run 1');
// doSomething(function(data) {
//     console.log(data);
// },function(error){
//     console.log(error);
// });
// console.log('Run 3'); 













// let myFirstPromise = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         //resolve('Run 2')
//         reject('This is an moork')
//     }, 2000);
// });





// console.log('Run 1');

// myFirstPromise
//          .then(function(data){
//             console.log(data);
//      })
//      .catch(err => console.log(err))

// console.log('Run 3');






// function getData(url){
//     return new Promise((resolve , reject) => {
//         const httpRequest = new XMLHttpRequest();
//     httpRequest.open("GET", url);
//     httpRequest.onreadystatechange = function() {
//         console.log(XMLHttpRequest.DONE);
//         if(this.readyState == XMLHttpRequest.DONE){
//             if(this.status == 200) {
//                 resolve(this.responseText)
//             } else if(this.status == 404) {
//                 reject('Data not found')
//             } else {
//                 reject('Something Went Wrong ')
//             }

//         }
//     }
//     httpRequest.send();
//     })
// }


// function paresToJson(dataText){
//     return new Promise((resolve , reject) => {
//         setTimeout(() => {
//             try {
//                 resolve(JSON.parse(dataText))
//             } catch (error) {
//                 reject(error)
//             }
//         }, 2000);
//     })
// }


// getData("https://jsonplaceholder.typicode.com/todos")
//          .then(data => {
//              return paresToJson(data)
//          })
//          .then((json) => {
//              console.log(json);
//          })
//          .catch(err => console.log(err))













// function doSomething(){
//     let name = 'Mohammad';
//       return Promise.reject('Error!!')
//     //return Promise.resolve(name)
// }

// doSomething().then((data) => console.log(data) , err => console.log(err))




// // let promise1 = new Promise((resolve , reject) => {
// //     setTimeout(() => {
// //         reject('Rejected')
// //     }, 2000);
// // })

// // let num = 42;

// // let promise3 = new Promise((resolve,reject) => {
// //     setTimeout(() => {
// //         resolve('Resolved :)')
// //     }, 1000);
// // })

// // Promise.all([promise1 , num , promise3])
// // .then((data) => {
// //     console.log(data)
// // })
// // .catch((err) => {
// //     console.log(err)
// // })




// let promise1 = new Promise((resolve , reject) => {
//     setTimeout(() => {
//         reject('Rejected')
//     }, 2000);
// })

// //let num = 42;

// let promise3 = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve('Resolved :)')
//     }, 1000);
// })

// Promise.race([promise1 , promise3]) // Rcae for run faster request
// .then((data) => {
//     console.log(data)
// })
// .catch((err) => {
//     console.log(err)
// })












// // let mySymbol = Symbol('my Data');
// // let myObj = {};
// // let myfunc = function() {}

// // let list = new Map();
// // list.set('Key 1' , 'Mohammad')
// // list.set('key 2' , 'Hassan')
// // list.set('key 3', 'Davis')
// // list.set(mySymbol , 22)
// // list.set(myObj , 'Ali')
// // list.set(myfunc, 1024)



// // //console.log(list.size);
// // //list.delete(mySymbol);
// // //list.clear();

// // //console.log(list.has('Key 1'));

// // // list.forEach((val, key) => {
// // //     console.log(key,val)
// // // })

// // console.log(list);
// // console.log('-----------------------------------------')
// // // //console.log(list[0]);  //Don’t work
// // // //console.log(list['Keyname 1']); //Don’t work
// // // console.log(list.get('Keyname 1'));
// // // console.log(list.get(mySymbol));

// // // for (const [key , value] of list) {
// // //     console.log(key , value);
// // // }

// // //console.log(list.entries());

// // for (const key  of list.keys()) {
// //     console.log(key );
// // }




// let arr = [['key 1' , 'Mohammad'], ['key 2' , 'Ali'], ['key 3', 'Hassan']];
// let listarr = new Map(arr);





// for (const key  of listarr.keys()) {
//     console.log(key );
// }










// let list = new Set();
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add('Hassan');
// list.add(1);

// //list.clear();
// list.delete(2);

// //console.log(list.entries());

// // for (const [key , value] of list.entries()) {
// //     console.log(key, value);
// // }
// // console.log(list.keys());
// // console.log(list.values());
// // console.log(list.has('Hassan'));
// // console.log('-----------------')

// console.log([...list]);
// console.log(list);

// let sheet = new Set([1,2,3,4,5,6,7,8,9]);  //if we want insert data in Set is like this
// console.log(sheet);













// // class Car {
// //     constructor(){
// //         this.value = new Array(10000).join('---');
// //     }

// // }
// // window.car = new Car();
// // //console.log(window.car);



// // let list = new WeakMap();

// // list.set(window.car, 'Ani');


// // delete window.car;
// // console.log(window.car);



// // console.log(list);





// class Car {
//     constructor(){
//         this.value = new Array(10000).join('---');
//     }

// }
// window.car = new Car();


// let list = new WeakSet([ window.car , {b : 2} ]); //in the WeakSet all item must be an object

// delete window.car;
// console.log(window.car);

// console.log(list);
// console.log(list.has(window.car));





// // // //let symbol1 = Symbol('asad')
// // // let list = new WeakMap();

// // // //list.set('keyname' , 'Ani');
// // // //list.set(symbol1 , 2);
// // // list.set({names : 'ali' , family : 'nori'} , 'ani')

// // // // for (const item of list) {  // Don’t work
// // // //     console.log(item);
// // // // }


// // // console.log(list);












// // class Car {
// //     constructor(make, model) {
// //         this.make = make;
// //         this.model = model;
// //     }
// // }

// // class Irancar {
// //     constructor(){

// //     }
// // }

// // // let obj = new Car('Ford' , '2020');
// // // console.log(obj);
// // let obj2 = Reflect.construct(Car, ['Jackwar', '2019'], Irancar);
// // console.log(obj2);


// // let user = {
// //     name : 'Hassan',
// //     email : 'hassan1398@gmail.com'
// // }

// // function sayHello(age,x) {
// //     console.log(x);
// //     return `Hey ${this.name} , your Email is ${this.email} , and You’re ${age} `;
// // }

// // //console.log(sayHello.apply(user, [23, '55']));
// // console.log(Reflect.apply(sayHello, user, [23, '55']));




// // let user = {
// //     name : 'Hassan',
// //     email : 'hassan1398@gmail.com'
// // }

// // console.log(Reflect.getPrototypeOf(user));


// // class Car {
// //     constructor(make, model) {
// //         this.make = make;
// //         this.model = model;
// //     }
// // }


// // let obj = Reflect.construct(Car, ['Jackwar', '2019']);

// // console.log(Reflect.getPrototypeOf(obj));



// class Car {
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }
// }

// let obj = Reflect.construct(Car, ['Jackwar', '2019']);



// let obj3 = {
//     age : 2048
// }


// Reflect.setPrototypeOf(obj, obj3);
// console.log(Reflect.getPrototypeOf(obj));
// console.log(obj);













// // let obj = {
// //     name : 'Mohammad'
// // }

// // Reflect.defineProperty(obj, 'family ', {
// //     value : 'nori zade',
// //     writable : false
    
// // })
// // obj.name = 'Hassan'

// // console.log(obj);



// // let obj = {
// //     name : 'Mohammad',
// //     age : 55
// // }

// // Reflect.defineProperty(obj, 'family ', {
// //     value : 'nori zade',
    
// // })

// // //Reflect.deleteProperty(obj , 'name');
// // //console.log(obj);

// // //console.log(Reflect.get(obj, 'name'));

// // //console.log(Reflect.has(obj , 'name'))

// // // let arr = ['Hassan' , 'Ali' , 'Mohammad'];
// // // console.log(Reflect.get(arr , 0))

// // Reflect.set(obj, 'age' , 23);
// // //console.log(obj);
// // console.log(Reflect.ownKeys(obj));





// let obj = {
//     name : 'Mohammad'
// }

// console.log(Reflect.isExtensible(obj));

// Reflect.defineProperty(obj, 'family ', {
//     value : 'nori zade',
    
// })
// console.log(obj);

// Reflect.preventExtensions(obj);
// console.log(Reflect.isExtensible(obj));


// Reflect.set(obj, 'age' , 23);
// //console.log(obj);
// console.log(obj);












// class Car {
    //     constructor(make, model) {
    //         this.make = make;
    //         this.model = model;
    //     }
    // }
    
    // let carObj = new Car('Ford' , '2021');
    
    // let handler = {
    //     get(obj, propkey) {
    //         //return 'This is a method of object handler';
    //         //return propkey in obj ? obj[propkey]  : 'Property Don’t Exist ';
    //         return Reflect.has(obj , propkey)
    //                      ? Reflect.get(obj , propkey)
    //                      : 'Property Hasn’t exist';
    //     },
    //     has(obj , propkey){
    //         console.log('Do Something! ');
    //         return Reflect.has(obj, propkey);
    //     },
    //     set(obj , propkey , value){
    //         console.log(typeof value);
    //         if(typeof value == 'number'){
    //             Reflect.set(obj , propkey , value);
    //         }
    //     }
    // }
    
    // //let proxy = new Proxy(carObj ,handler );
    // let proxy = new Proxy({} ,handler );
    // //console.log(proxy);
    // Reflect.setPrototypeOf(carObj , proxy); //proto has change to proxy :)
    // console.log(carObj);
    // carObj.year = 2019;
    // carObj.name = 'Mohammad'
    // console.log(carObj.name);
    // console.log(Reflect.has(carObj , 'year'));
    
    
    
    
    // // // // console.log(proxy.make);
    // // // // console.log(proxy.make);
    
    // // // // console.log(proxy.make);
    // // // // console.log(proxy.year);
    // // // // console.log(Reflect.get(proxy, 'year')); //Look Like (proxy.year) up
    
    // // // console.log(proxy.make);
    // // // console.log('make' in proxy);
    // // // console.log('year' in proxy);
    // // // console.log(Reflect.has(proxy, 'year')); //Look like up :)
    
    // // proxy.year = 2019;
    // // proxy.name = 'Mohammad'
    
    // // //console.log(proxy.year);
    // // //console.log(Reflect.has(proxy , 'year'));
    // // console.log(proxy.name);










    //function sum(a, b) {
        //     return a + b;
        // }
        
        // let handler = {
        //     apply(target , thisArg , args ) {
        //        console.log(`arguments : ${args}`,);//target);
        //        return target(...args) * 2          //return target(args[0] , args[1]) * 2
        //     }
            
        // }
        
        
        // let proxy = new Proxy(sum , handler);
        
        // console.log(sum(1,2));
        
        // console.log(proxy(1, 2));










        // class Car {
        //     constructor(make, model) {
        //         this.make = make;
        //         this.model = model;
        //     }
        // }
        
        // let carObj = new Car('Ford' , '2021');
        
        // let handler = {
        //     get(obj, propkey) {
        //         //return 'This is a method of object handler';
        //         //return propkey in obj ? obj[propkey]  : 'Property Don’t Exist ';
        //         return Reflect.has(obj , propkey)
        //                      ? Reflect.get(obj , propkey)
        //                      : 'Property Hasn’t exist';
        //     },
        //     has(obj , propkey){
        //         console.log('Do Something! ');
        //         return Reflect.has(obj, propkey);
        //     },
        //     set(obj , propkey , value){
        //         console.log(typeof value);
        //         if(typeof value == 'number'){
        //             Reflect.set(obj , propkey , value);
        //         }
        //     }
        // }
        
        // //let proxy = new Proxy(carObj ,handler );
        // let { proxy , revoke } = Proxy.revocable({} ,handler );    //let proxy = Proxy.revocable({} ,handler );
        // //console.log(proxy);
        // Reflect.setPrototypeOf(carObj , proxy); //proto has change to proxy :)
    
        // revoke();
        // console.log(carObj);
        // carObj.year = 2019;
        // carObj.name = 'Mohammad'
        // console.log(carObj.name);
        // console.log(Reflect.has(carObj , 'year'));












    //     const fetchData = (url) => {
    

    //         return new Promise((resolve , reject ) => {
               
    //                 let data = { name : 'Mohammad' , family : 'Nori Zade'}
    //                 if(true) {
    //                     resolve(data)
    //                 }else {
    //                     reject('Error')
    //                 }
               
        
    //         })
        
    //     }
        
    //     const saveDataToDB = (data) => {
            
    //         return new Promise((resolve , reject ) => {
               
    //             let data = { name : 'Mohammad' , family : 'Nori Zade'}
    //             if(true) {
    //                 resolve(true)
    //             }else {
    //                 reject('Error')
    //             }
    //     })
            
    //     }
        
        
    //     // try {
    //     //     fetchData('roocket.ir' , (data) => {
        
    //     //     })
    //     //     try {
    //     //         saveDataToDB(data , (status) => {
    //     //             console.log(status);
    //     //         } )
                
    //     //     } catch (err) {
    //     //         //err
    //     //     }
            
    //     // } catch (err) {
    //     //     //err
    //     // }
            
            
    //  console.log('first logged');

    //  fetchData('roocket.ir')
    
    //  .then((data) => saveDataToDB((data))
    //  .then((status) => console.log(status)))
    //  .catch((err) => console.log(err)); 
    
    







    // const fetchData = async(url) => {
    
    //     let data = { name : 'Mohammad' , family : 'Nori Zade'}
    //         if(true) {
    //             return data;
    //         }else {
    //             throw new Error("Error URL");
    //         }
    
    
    // }
    
    // const saveDataToDB = async(data) => {
          
    //         if(true) {
    //             return true;
    //         }else {
    //             throw new Error("Error DB")
    //         }
        
    // }
    
    
    // // try {
    // //     fetchData('roocket.ir' , (data) => {
    
    // //     })
    // //     try {
    // //         saveDataToDB(data , (status) => {
    // //             console.log(status);
    // //         } )
            
    // //     } catch (err) {
    // //         //err
    // //     }
        
    // // } catch (err) {
    // //     //err
    // // }
        
        
    
    
    
    //  console.log('first logged');
    
    // // fetchData('roocket.ir')
        
    // //      .then((data) => saveDataToDB((data))
    // //      .then((status) => console.log(status)))
    // //      .catch((err) => console.log(err , 'they happen honestly'));
    
    
    
    //      //console.log(fetchData('roocket.ir'));
    
    
    
    //      let executeFetchData = async() => {
    //        try { 
    //         let data = await fetchData('roocket.ir');
    //         let statusDB = await saveDataToDB(data);
    //         //console.log('data');
    //         console.log(statusDB);
    //        }catch(err) {
    //            console.log(err);
    //        }
    
    //      }
    
    
    //      executeFetchData();













        