// let inform = function (){
//     alert("warning");
// }
let inform  = () =>{
    alert("warning");
}
setInterval(inform,3000);
clearInterval(inform)




// function calculate() {
//     var result;
//     let num_1 = parseInt(document.getElementById("numberInput_1").value);
//     let num_2 = parseInt(document.getElementById("numberInput_2").value);
//     let num_3 = parseInt(document.getElementById("numberInput_3").value);
//     if(num_1 === 0 ){
//         if(num_2 === 0 && num_3 !== 0 ){
//             result = "Vô nghiệm ";
//         }else{
//             if(num_2 === 0 && num_3 === 0){
//                 result = "Vô số nghiệm ";
//             }else{
//                 result = "Phương trình có 1 nghiệm suy nhất là  : " + (-num_3 / num_2);
//             }
//         }
//     }else {
//         let delta = num_2**2 - 4*num_1*num_3;
//         if (delta < 0) {
//             result = "Vô nghiệm ";
//         } else if (delta === 0) {
//             result = "Phương trình có 1 ngiệm  là  : "+(-num_2/(2*num_1));
//         } else {
//             let x1 , x2 ;
//             x1 = (-num_2 + Math.sqrt(delta))/(2*num_1)
//             x2 = (-num_2 - Math.sqrt(delta))/(2*num_1)
//             result = `Phương trình có 2 ngiệm phân biệt là  : ${x1} và ${x2}`;
//         }
//     }
//     document.getElementById("result").innerHTML = result;
// }