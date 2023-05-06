// function in js  : object , method
// this
// let test = function (){}
// test  //  object.
// test() // hàm  -> thực thi hàm đó .
// 2 cách thể hiện  : method của 1 object  , js global object .\
//
const  student = {
    fullname : function (age , sex){
        return this.fistname + " " + this.lastname + " ," + "age :  "+ age
            + " ,sex  "+ (sex === "M" ? "Male" : "Female") ;  // this  = student
    }
}

const  student1 = {
    fistname : "Nguyễn",
    lastname : "Văn A",
    age : 10,
    sex : "M"
}
const  student2 = {
    fistname : "Nguyễn",
    lastname : "Văn B",
    age : 10,
    sex : "M"
}
console.log(student.fullname.apply(student2, [student2.age, student2.sex ]));


// console.log(student.fullname())  // tính chất của hướng đối tượng
// this :  not a variable , keyword , not change value
// ý nghĩa  : phụ thuộc vào từng trường hợp
// TH đứng 1 mình  : global object .
//  function : global object , strict : undefined
// event : đề cập đến phần tử nhận cái sự kiện

// call  , apply  , bind  .

function Product(name , price){  // constructor
    this.name  = name;
    this.price = price;
}
function Food(name , price){
    Product.call(this,name,price)  // food >> product (this = product)
    this.category = "food"
}
var meet = new Food("meet" , 100000);
console.log(meet)


console.log(Math.min(5,6))
// Tính kế thừa  :  Động vật -> động vật có vú  -> đi bằng hai chân -> ... -> con người

// aplly : giống call , khác : nhận tham số dưới dạng mảng [] , chứ không phải dưới dạng riêng rẽ.
