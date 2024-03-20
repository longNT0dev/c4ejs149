// Tất cả code trong thẻ script là code javascript >< java
// function printSomething() {
//     console.log("Bây giờ là 19h30")
// }

// Khai báo biến 
// Từ khóa khai báo biến + Tên biến = Giá trị của biến 
// 1. Từ khóa khai báo biến
// let: Khai báo 1 biến có phạm vi cục bộ  (scope)
// const: Khai báo 1 biến thì giá trị của biến đó không thể bị thay đổi
// var: Khai báo 1 biến có phạm vi toàn cục 

// To nhất
{
    // Phạm vi nhỏ hơn
    {
        // Phạm vi nhỏ hơn nữa
    }
}
// Có thể sử dụng biến a ở ngoài đây

// 2. Tên biến: Đặt mọi tên có thể trừ 1 số trường hợp sau
// Trùng với các từ khóa trong javascript
// Tên biến không được bắt đầu bằng số
// Tên biến không được chứa dấu cách
// Tên biến không được chứa 1 số ký tự đặc biệt -, %
// Tên biến thì nên mang ý nghĩa
// camelCase, snake_case

// 3. Giá trị của biến -> Kiểu dữ liệu
// Các kiểu dữ liệu nguyên thủy (primitive)
// number
// let example1 = 2024
// string
// let example2 = "Đây là 1 string"
// let example3 = 'Đây là 1 string'
// let example4 = `Đây là 1 string ${example1}`

// console.log(example4)


// boolean
// let isPassed = true
// let hasWife = false
// null
// let empty = null
// undefined
// let test

// Sau 1 hồi tính toán, xử lý ta có dữ liệu mới của biến test
// test = "Ngày đầu làm quen với javascript"

// console.log(test)
// Các kiểu dữ liệu khác
// array
// object

// hoisting: Từ khóa var đưa việc khai báo biến lên đầu

// a = 5

// let a = 10 

// console.log(a);

// b = 5

// var b = 10

// console.log(b);

// Convert thành 
// var b 

// b = 10

// let a = 5
// let b = "10"


// console.log(typeof a);
// console.log(typeof b);

// let a = 10
// let b = 5

// console.log("Giá trị biến a trước khi cộng là", a);


// a += b // a = a + b

// console.log("Giá trị biến a sau khi cộng là", a);

// let a = 1

// let b = false

// console.log(a + b);
// console.log(typeof (a + b));

// Ép kiểu, prompt 

// Hàm prompt: Nhận dữ liệu từ người dùng thông dialog

let userInput1 = Number(prompt("Nhập vào tuổi của bạn"))
let userInput2 = parseInt(prompt("Nhập vào tuổi của bạn"))
let userInput3 = +prompt("Nhập vào tuổi của bạn")

console.log(userInput1, userInput2, userInput3);
console.log("test");