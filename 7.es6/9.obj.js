let name = 'zfpx';
let age = 8;

//console.log(this === module.exports);
let getName = function () {
    console.log(this.name);
}
let person = {
    name,
    age,
    getName
}
//person.getName();

//console.log(NaN == NaN);
//console.log(Object.is(NaN,NaN));
var nameObj = {name: 'zfpx'};
var ageObj = {age: 8};
//var obj = {};
Object.assign = function (target, ...sources) {
    function copy(target, source) {
        for (let attr in source) {
            var str = Object.prototype.toString.call(source[attr]);
            //如果是一个对象
            if (str == '[object Object]') {
                var newObj = {};//构建一个空对象
                for(var key in source[attr]){
                    newObj[key] = source[attr][key];
                }
                target[attr] = newObj;
            } else if (str == '[object Array]') {//如果属性是一个数组
                var newArr = [];
                for(var i=0;i<source[attr].length;i++){
                    newArr[i] = source[attr][i];
                }
                target[attr] = newArr;
            } else {
                //当属性是值的时候直接赋值
                target[attr] = source[attr];
            }
        }

    }

    sources.forEach(source=> {
        copy(target, source);
    });
}
/*
var obj = {};
var source = {hobbies: ['smoking', 'drinking']}
Object.assign(obj, source);
console.log(obj);
console.log(source);
obj.hobbies.push('hair');
console.log('======================');
console.log(obj);
console.log(source);*/

var obj1 = {name:'zfpx1'};
var obj2 = {name:'zfpx2'};
var obj = {};// __proto__ Object.prototype
/*Object.setPrototypeOf(obj,obj1);
console.log(obj.name);
Object.setPrototypeOf(obj,obj2);
console.log(obj.name);
console.log(Object.getPrototypeOf(obj));*/

/*var obj3 = {
    //直接在对象字面量中设置原型 __ptoto__
    __proto__:obj1
}
console.log(obj3.name);
console.log(Object.getPrototypeOf(obj3));*/

let p = {
    eat(){
        return 'milk';
    }
}
console.log(p.eat());
let stu = {
    __proto__:p,
    eat(){
        //可以在方法中使用super来引用__proto__
        return super.eat()+'+bread';
    }
}
console.log(stu.eat());

