var component  = function (){
   var initForm  = () => {
      // const numbers = [45, 4, 9, 16, 25];
      // let man  = {
      //    fname  : "trinh",
      //    tname : "van"
      // }
      const text = "xin chao"
      for (let char of text) {
         console.log(char)
      }
   }
   var function1  = () => console.log("function1")
   var function2  = () => console.log("function2")
   var function3  = () => console.log("function3")
   var function4  = () => console.log("function4")
   return {
      init : function(){
         initForm();
      }
   }
}();
window.onload = function (){component.init()};
// document.addEventListener('DOMContentLoaded', function (){component.init()});


// window.onload = function (){
//    var x = 5;
//    x = (x === 5) ? 6 : 0;
//    x = (x === 5) ? 6 : 0;
//    console.log(x);

    // /* Khai bao bien */
    // var seconds = 0;
    // var tens = 0; // 100 = 1000 milisecconds
    // var appendSeconds = document.getElementById("seconds")
    // var appendTens = document.getElementById("tens")
    // var startButton = document.getElementById("button-start")
    // var stopButton = document.getElementById("button-stop")
    // var resetButton = document.getElementById("button-reset")
    // var interval;
    // startButton.onclick = function (){
    //     clearInterval(interval);
    //     interval = setInterval(timer,10)
    // }
    // stopButton.onclick = () => { clearInterval(interval); }
    // resetButton.onclick = function (){
    //     clearInterval(interval);
    //     tens = 0;
    //     seconds = 0;
    //     appendTens.innerHTML = "00";
    //     appendSeconds.innerHTML = "00";
    // }
    // function timer(){
    //     tens ++
    //     if(tens <= 9){
    //         appendTens.innerHTML = "0"+tens
    //     }
    //     if(tens > 9){
    //         appendTens.innerHTML = tens
    //     }
    //     if( tens > 99){
    //         seconds++;
    //         appendSeconds.innerHTML = "0" + seconds;
    //         tens = 0;
    //         appendTens.innerHTML = "0" + tens;
    //     }
    //     if(seconds <= 9){
    //         appendSeconds.innerHTML = "0"+seconds;
    //     }else{
    //         appendSeconds.innerHTML = seconds;
    //     }
    //
    // }

// }