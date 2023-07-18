let numbers = document.querySelectorAll(".number")
let result = document.querySelectorAll(".calculator-input")
let temporalNumber ;
let temporalOperator ;

// numbers.forEach(function(number){
//     document.querySelector(".number").addEventListener('click', function(){
//         result.value = document.querySelector(".number").textContent
//     })
// }) 

numbers.forEach(function(number) { // forEach ' i numbersta yani tum sayilarin toplandigi bir arrayda kullaniyoruz. Boylece belirttigimiz fonksiyo tum sayilarda yani sirayla tum nummber'larda gecerli olacak.
    number.addEventListener('click', function() {
        if (document.querySelector(".calculator-input").value == 0){
      document.querySelector(".calculator-input").value = number.textContent
    } else {document.querySelector(".calculator-input").value = document.querySelector(".calculator-input").value + number.textContent}
    });
  });

document.querySelector(".clear").addEventListener('click', function() {
    document.querySelector(".calculator-input").value = "0"
})

document.querySelector(".plus").addEventListener('click', function(){
    temporalNumber = document.querySelector(".calculator-input").value
    temporalOperator = document.querySelector(".plus")
    document.querySelector(".calculator-input").value = "0"
})

document.querySelector(".minus").addEventListener('click', function(){
  temporalNumber = document.querySelector(".calculator-input").value
  temporalOperator = document.querySelector(".minus")
  document.querySelector(".calculator-input").value = "0"
})

document.querySelector(".divide").addEventListener('click', function(){
  temporalNumber = document.querySelector(".calculator-input").value
  temporalOperator = document.querySelector(".divide")
  document.querySelector(".calculator-input").value = "0"
})

document.querySelector(".times").addEventListener('click', function(){
  temporalNumber = document.querySelector(".calculator-input").value
  temporalOperator = document.querySelector(".times")
  document.querySelector(".calculator-input").value = "0"
})

document.querySelector(".precent").addEventListener('click', function(){
  temporalNumber = document.querySelector(".calculator-input").value
  document.querySelector(".calculator-input").value = document.querySelector(".calculator-input").value / 100
})

document.querySelector(".decimal").addEventListener('click', function(){
  temporalNumber = document.querySelector(".calculator-input").value
  document.querySelector(".calculator-input").value = temporalNumber + "."
})

document.querySelector(".negative").addEventListener('click', function(){
  temporalNumber = document.querySelector(".calculator-input").value
  document.querySelector(".calculator-input").value = (temporalNumber) * (-1)
})

document.querySelector(".equal").addEventListener('click', function(){
  if(temporalOperator == document.querySelector(".plus")){
    document.querySelector(".calculator-input").value = Number(temporalNumber) + Number(document.querySelector(".calculator-input").value)
    temporalNumber = 0
  } else if (temporalOperator == document.querySelector(".minus")){
    document.querySelector(".calculator-input").value = Number(temporalNumber) - Number(document.querySelector(".calculator-input").value)
  } else if (temporalOperator == document.querySelector(".divide")){
    document.querySelector(".calculator-input").value = Number(temporalNumber) / Number(document.querySelector(".calculator-input").value)
  } else if (temporalOperator == document.querySelector(".times")){
    document.querySelector(".calculator-input").value = Number(temporalNumber) * Number(document.querySelector(".calculator-input").value)
  } 
  
})





