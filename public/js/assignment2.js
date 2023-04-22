function  calculate(){
  let a,b,c,delta, resultText;
  a = parseFloat(document.getElementById("number1").value);
  b = parseFloat(document.getElementById("number2").value);
  c = parseFloat(document.getElementById("number3").value);
  if(a === 0){
      if( b === 0 && c !== 0){
          resultText = "Phương trình vô nghiệm";
      }else{
          resultText = "Phương trình có 1 nghiệm duy nhất là  : " + -c/b ;
      }
  } else {
      delta = b*b - 4*a*c;
      if(delta > 0){
          let x1, x2
          x1 = ((-b + Math.sqrt(delta)) / (2 * a))
          x2 = ((-b - Math.sqrt(delta)) / (2 * a))

          resultText = `Phương trình có 2 nghiệm riêng biệt là x1 = ${x1} và x2 = ${x2}`;
      } else if (delta === 0){
          let x
          x = -(b) / (2 * a)
          resultText = `Phương trình có nghiệm kép là x1 = x2 = ${x}`;
      } else {
          resultText = "Phuong trinh vo nghiem";
      }
  }
  document.getElementById("result").innerHTML = resultText;
}