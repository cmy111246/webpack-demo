
/**************************类*****************************************/
//类的定义
class Animal {
  //ES6中新型构造器
  constructor(name) {
    this.name = name;
  }
  //实例方法
  sayName() {
    console.log('My name is '+this.name);
  }
}
//类的继承
class Programmer extends Animal {
  constructor(name) {
    //直接调用父类构造器进行初始化
    super(name);
  }
  program() {
    console.log("I'm coding...");
  }
}
var animal = new Animal('dummy'),
wayou = new Programmer('wayou');
animal.sayName();//输出 ‘My name is dummy’
wayou.sayName();//输出 ‘My name is wayou’
wayou.program();//输出 ‘I'm coding...’


class Person {
  constructor(name){
    this.name = name;
  }
  getName(){
    console.log(`my name is ${this.name}`)
  }
}

var person = new Person('cmy');
person.getName();
//通过对象字面量创建对象
var human = {
    breathe() {
        console.log('breathing...');
    }
};
var worker = {
    __proto__: human, //设置此对象的原型为human,相当于继承human
    company: 'freelancer',
    work() {
        console.log('working...');
    }
};
human.breathe();//输出 ‘breathing...’
//调用继承来的breathe方法
worker.breathe();//输出 ‘breathing...’
worker.work();//输出 ‘working...’


let a = 1;

for (let i = 1; i < 10; i++) {
  setTimeout(function() {
    console.log(i)
    
  })
}

/****************************字符串模板*********************************/
var num = Math.random();
console.log(`your num is ${num}`);


/********************************解析数组***********************************/
var  items = [1,2,3];
var itemsCopy = [...items];


/********************************默认参数***********************************/
function strTemplate(age, name='dude'){
    console.log(`Hello ${name}`);
}
strTemplate(12);

/********************************不定参***********************************/
function add(...num){
	var sum = 0;
	for (var i = 0; i < num.length; i++) {
		sum += num[i]
	}  
	return sum;
}
console.log(add(1, 2, 3, 4))


/********************************扩展参数***********************************/
var people=['Wayou','John','Sherlock'];
//sayHello函数本来接收三个单独的参数人妖，人二和人三
function sayHello(people1,people2,people3){
  console.log(`Hello ${people1},${people2},${people3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people);//输出：Hello Wayou,John,Sherlock


/********************************解构***********************************/
var [name,gender,age]=['wayou','male','secrect'];//数组解构
console.log('name:'+name+', age:'+age);//输出： name:wayou, age:secrect

/*--------------------------以下不支持------------------------------------*/
/*var promise = new Promise(function(resolve, reject) {
  setTimeout(function() {
  		resolve("promise resolve");
  }, 1000)
});

promise.then(function(v) {
	console.log(v)
})
*/


/*function co(generator) {
  return function(fn) {
    var gen = generator();
    function next(err, result) {
        if(err){
            return fn(err);
        }
        var step = gen.next(result);
        if (!step.done) {
            step.value(next);
        } else {
            fn(null, step.value);
        }
    }
    next();
   }
}

function ajax(url, callback) {
	console.log(callback)
	setTimeout(function() {
		callback(null, {name: "张三", url: url});
	}, 1000)
}

function readFile(url) {
    return function(callback) {
    	ajax(url, callback)
    };
}

co(function * () {
    var file1 = yield readFile('./file/a.txt');
    var file2 = yield readFile('./file/b.txt');

    //console.log(file1);
    //console.log(file2);
    return 'done';
})(function(err, result) {
	console.log(err)
    console.log(result)
});


*/