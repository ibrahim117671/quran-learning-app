// chapter1

function exampleone(){

    function functionName() {
      document.write("Hello, world!");
     }
  //chapter2
  functionName();
    }
    function exampletwo(){
      const add=(a,b) => a+b;
      document.write(add(3,5));
    }
    function examplethree(){
      const doubleNumber =(number) =>{
        return number *2;
      }
      document.write(doubleNumber(3));
    }
      
    //examples chapter3
  
  function Example1(){
      const age=30;
      const message=`my age is ${age}year`
      alert(message)
    }
    function Example2(){
      let a =5;
      let b =10;
      let www=a;
      a=b;
      b=kaalay;
      alert("after swaping:a="+a+",b="+b);
      
    }
    function example3(){
      let age =18;
      if(age>=18){
          document.write("you are an adult.");
      }
  }
      function example4(){
          let age =18;
          if(age>=18){
              document.write("you are an adult.");
          }else{
              document.write("you are an adult.");
          }
      }
      function example5(){
          let grade=85;
          if(grade>=90){
              document.write("A");
          }else if(grade>=80){
              document.write("B");
          }else{
              document.write("C");
          }
  
          }
          function example6(){
              let day="saturday";
              switch(day){
                  case "saturday":
                      document.write("it is the start of the week.");
                      break;
                      case "wednesday":
                          document.write("it is almost the weekend!");
                          break;
                          default:
                              document.write("it is a regular day.");
  
              }
          }
          function example7(){
              for(let i=1;i<=5;i++){
                  document.write(i);
              }
          }
          function example8(){
              let i =1;
              while(i<=5){
                  document.write(i);
                  i++;
              }
          }
          function example9(){
              let i=1;
              do{
                  document.write(i);
                  i++;
              }while(i<=5);
          }
          function example10(){
              for(let i=0; i<5;i++){
                  if(i===3){
                      break;
                  }
                  document.write(i);
              }
              
          }
  
          function example11(){
              for(let i=0;i<5;i++){
                  if(i===2){
                      continue;
                  }
                  document.write(i);
              }
          }
  
          function example12() {
                  for (let i = 0; i < 3; i++) {
                      for (let j = 0; j < 3; j++) {
                          document.write(`(${i}, ${j})`);
                      }
                  }
              }
  
  
  //chapter 2//
  function examples1(){
    let result=5+3;
    document.write(result);
  }
  function examples2(){
    let isEqual=2===3;
    document.write(isEqual);
  }
  function examples3(){
    let isTrue=true&&false;
    document.write(isTrue);
  }
  function examples4(){
    let count=10;
    count +=5;
    document.write(count);
  }
  function examples5(){
    let age=20;
    let message = age>18?"Adult":"junior";
    document.write(message);
  }
  
  
  
  
  function numbe() {
    let nmber = 5; 
    if (nmber > 0) {
        document.write("You Entered A Positive Integer: " + nmber + "<br>");
    }
    document.write("This Statement Is Always Executed.<br>");
  }
  function numbE() {
    let nmber = -3;
    if (nmber >= 0) {
        document.write("You Entered A Positive Integer: " + nmber + "<br>");
    } else {
        document.write("You Entered A Negative Number: " + nmber + "<br>");
    }
    document.write("This Statement Is Always Executed.<br>");
  }
  function out() {
    let num = 7; 
    if (num % 2 === 0) {
        document.write("It Is An Even Number.<br>");
    } else {
        document.write("It Is An Odd Number.<br>");
    }
  }
  function printing() {
    for (let i = 1; i <= 5; ++i) {
        document.write(i + "<br>");
    }
  }
  function disp() {
    for (let i = 1; i <= 5; ++i) {
        document.write("Hello World!<br>");
    }
  }
  function natural() {
    let Nub = 5; 
    let Sub = 0;
    for (let count = 1; count <= Nub; ++count) {
        Sub += count;
    }
    document.write("Sum = " + Sub + "<br>");
  }
  function print() {
    let i = 1;
    while (i <= 5) {
        document.write(i + "<br>");
        i++;
    }
  }
  function pos() {
    let sum = 0;
    let numbers = [10, 20, 30, -1]; 
    for (let num of numbers) {
        if (num >= 0) {
            sum += num;
        }
    }
    document.write("The Sum Is: " + sum + "<br>");
  }
  function only() {
    let s = 0;
    let u = 0;
    let numbers = [10, 15, -1];
    do {
        u = numbers.shift();
        if (u > 0) {
            s += u;
        }
    } while (u >= 0);
    document.write("The sum is: " + s + "<br>");
  }
  
  // loops
  function first() {
    const numbers = [1, 2, 3, 4, 5];
  
    // Use a for loop to iterate through the array
    for (let i = 0; i < numbers.length; i++) {
        document.write(numbers[i] + "<br>");
  
        // Use an if...else statement to check if the number is even or odd
        if (numbers[i] % 2 === 0) {
            document.write(numbers[i] + " is even.<br>");
        } else {
            document.write(numbers[i] + " is odd.<br>");
        }
    }
  }
  
  // Define age and student status
  function second() {
    const age = 20;
    const isStudent = true;
  
    // Check eligibility for a discount
    if (age < 18) {
        document.write("You are eligible for a child discount.<br>");
    } else if (age >= 18 && age < 65) {
        if (isStudent) {
            document.write("You are eligible for a student discount.<br>");
        }
    }
  }
  
  // Do While Loop
  function doWhileLoop() {
    let counter = 0;
    while (counter < 10) {
        document.write(counter + "<br>");
        counter++;
    }
  
    let counter1 = 0;
    do {
        document.write(counter1 + "<br>");
        counter1++;
    } while (counter1 <= 10);
  }
  
  // For Loop
  function forLoop() {
    for (let x = 0; x < 20; x++) {
        document.write(x + "<br>");
    }
  }
  
  // Switch Statement
  function switchStatement() {
    const natiijo = 100;
    switch (natiijo) {
        case 90:
            document.write("aad baad u dadaashay<br>");
            break;
        case 60:
            document.write("waad IGA fasaxantahey<br>");
            break;
        case 40:
            document.write("iskabax koley meesha wax kuma heyside<br>");
            break;
        default:
            document.write("in kastoo aan soo dadaaley weli quursasho majirto <br>");
            break;
    }
  }
  
  function out5numwhile() {
    let i = 1;
    while (i <= 5) {
        document.write(i + "<br>");
        i++;
    }
  }
  function out5numDo() {
    let i = 1;
    do {
        document.write(i + "<br>");
        i++;
    } while (i <= 5);
  }
  function BreakFor() {
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            break;
        }
        document.write(i + "<br>");
    }
  }
  function ContinueFor() {
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue;
        }
        document.write(i + "<br>");
    }
  }
  function nestedloop() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.write(`(${i}, ${j})`);
        }
    }
  }
  function multiplication() {
    const size = 10;
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const product = i * j;
            document.write(`${i} * ${j} = ${product}`);
        }
    }
  }
  
  
  
          //chapter4
          function functionName1(){
            document.write("Hello, world!");
        }
        function functionName2(){
            document.write("Hllo,world!");
        }
        function greet(name){
            document.write('Hello,${name}!');
        }
        // greet("Mohamed");
        function fun() {
            
        
        function fun(a,b){
            return a+b;
        }
        const result=add(3,5);
        document.write(functionName3);
    }
  
        function exampl(){
        var globalvariable="i'm in global scope";
        function sayhello(){
            document.write(globalvariable);
        }
        sayhello();
        document.write(globalvariable);
    }
  
    
        function sayhello(){
        var locallvariable="i'm in local scope";
            document.write(locallvariable);
        }
        
        // sayhello();{
        // document.write(locallvariable);
        // }
    
        function block(){
            if(true){
                let blockvariiable="i'm in block scope";
                document.write(blockvariiable);
            }
            document.write(blockvariiable);
        }
        function add() {
            
        
        function add(a,b){
            var result=a+b;
            return result;
        }
            document.write(add);
        }
        
    function sayhello(){
        const sayhello=()=>"hello world";
        document.write(sayhello());
    }
  
    function doublenumber(){
        const doubleNumber=(number)=>{
            return number *2;
    }
    document.write(doubleNumber(3));
    }
  
    function famy() {
        
    
    const add=(a,b)=>a+b;
    document.write(add(3,5));
    }
  
    function call(){
    function dosomething(callback){
        document.write("doing something...");
        callback();
    }
    function oncomplete(){
        document.write("operatin complete!");
  
    }
    dosomething(oncomplete);
  }
  function anonymous(){
  setTimeout(function(){
    document.write("this is a callback executed after 2 second.");
  },2000);
  }
  
  
  
  
  
  
  
  
  
  //chapter5
          //literal aaray
          function literalArray(){
          const names =["Axmed","Mohamed","Ali"];
          document.write(names);
          }
          function Constructer(){
  const names=new Array("Axmed","Mohamed","Ali");
  document.write(names);
          }
          function emptylArray(){
  const myArray =[];
  myArray[0]="first";
  myArray[1]="second";
  document.write(myArray);
  }
  function from(){
      const arrayfromStr=Array.from("hello");
      document.write(arrayfromStr);
  }
  function initializer(){
      const newArray=new Array(3);
      document.write(newArray);
  }
  function spreadoperator(){
      const sourceArray =[1,2,3];
      const newArray =[...sourceArray];
      document.write(sourceArray);
  } function of(){
      const myArray= Array.of(1,2,3);
      document.write(myArray);
  }
  function push(){
      const fruits =["apple","banana"];
      fruits.push("mongo");
      document.write(fruits);
  }
  
  function update(){
      const fruits =["apple","banana","cherry"];
      fruits[1] ="mongo";
      document.write(fruits);
  }
  
  function remove(){
      const fruits =["apple","banana","cherry"];
      fruits.pop();
      document.write(fruits);
  }
  
  function shift(){
      const fruits =["apple","banana","mango"];
      fruits.shift();
      document.write(fruits);
  }
  
  function splice(){
      const fruits =["apple","banana","mango","tomato"];
      fruits.splice(1,2);
      document.write(fruits);
  }
  
  function removed(){
      const fruits =["apple","banana","mango"];
      const removedfruit=fruits.pop();
      document.write(removedfruit);
      document.write(fruits);
  }
  function fruits(){
      const fruits =["apple","banana","mango","tomato"];
      for(let i=0;i<fruits.length;i++){
          document.write(fruits);
      }
  }
  function each(){
      const fruits =["apple","banana","mango","tomato"];
      fruits.forEach(function(fruits){
          document.write(fruits);
      });
  }
  function map(){
      const numbers=[1,2,3];
      const squaredNumbers=numbers.map((num)=>num*num);
      document.write(squaredNumbers);
  }
  function accessing(){
      const fruits =["apple","banana","mango"];
      fruits.forEach((fruits,index)=>{
          document.write('fruits at index${index} is${fruits}')
      });
  }
  function matrics(){
      const matrix=[
          [1,2,3],
          [4,5,6],
          [7,8,9],
      ];
      const element=matrix[1][2];
      document.write(matrix);
  }
  function object(){
      const person={
          firstName:"Mohamed",
          lastName:"Ali",
          age:30,
      };
      document.write(person);
  }
  
  function man(){
      for(const key in person){
          document.write(key,person[key]);
      }
  }
  function jyson(){
      const jsonString='{"name": "Mohamed Ali","age":30}';
      const jsonoject=JSON.parse(jsonString);
      document.write(jsonoject.name);
  }
  function haa(){
      const jsonString='{"name": "Mohamed Ali","age":30}';
      const jsonoject=JSON.parse(jsonString);
      document.write(jsonString);
  }

  /* chapter6 */
  //secting element by ID
    let contentElement = document.getElementById("content");
     // modyfiying content
    contentElement.style.background= "blue";
    contentElement.style.color="white";


//selecting element by class name
let boxElements = document.getElementsByClassName("box");
//mdifiying content
for (let i = 0; i<boxElements.length; i++){
    boxElements[i].style.border = "3px dashed black";
}
// seling element by tag name
let paragraphElements = document.getElementsByTagName("p");
//modifiying content
for (let i =0;i<paragraphElements.length;i++){
    paragraphElements[i].style.fontStyle ="italic";
    paragraphElements[i].style.margin ="10px";
}

let firstparagraph =document.querySelector("p");

let firstBox =document.querySelector(".box");''




    /*chapter7*/
const element=document.getElementById("myButton");
element.addEventListener("click",myfunction);
function myfunction(){
    alert("Button clicked!");
}


function myfunction(){
    alert("Button clicked!");
}

const textinput =document.getElementById("textinput");
const output =document.getElementById("output");

textinput.addEventListener("keydown",function(event){
    outputDiv.innerText =`keydown $P{event.key}`;

});

textinput.addEventListener("keypress",function(event){
    outputDiv.innerText +=`\nkeypress: ${event.key}`;
});

textinput.addEventListener("keyup",function(event){
    outputDiv.innerText +='\keyup: ${event.key}';
});



consttextinput =document.getElementById("textinput");
const outputDiv =document.getElementById("output");
textinput.addEventListener("focus",function(){
    updateoutput("Element focused","focused");
});

textinput.addEventListener("blur",function(){
    updateouput("Element blurred","blurred");
});

function updateoutput(message, className){
    outputDiv.innerText=message;
    outputDiv.className=className;
    
}


//select parent//
    const parentList = document.getElementById("parentList");
    parentList.addEventListener("click", function(event) {
      if (event.target.tagName === "LI") {
        alert("Clicked on: " + event.target.innerText);
      }

  });
  


    //LAP//
function calculator(){
    let num1 = parseFloat(prompt("Enter the first number:"));
    let operator =prompt("Enter an operator(+,-,*,/):")
    let num2 = parseFloat(prompt("Enter the second number:"));
    let result;
    switch (operator){
        case"+":
        result =num1+num2;
        break;
        case"-":
        result =num1-num2;
        break;
        case"*":
        result =num1*num2;
        break;
        case"/":
        result =num2 !==0? num1/num2:"Error: Division by zero";
        break;
        default:
            result = "invalid operator";
    }
    alert("Result:" + result);
}
calculator();

function jadwalkamanta(saacada){
    switch(saacada){
        case "5:00am":
            document.write("waxaan sookacaa 5:00am.<br>");
            break;
            case"6:20am":
            document.write("waxaan adaa jamacadda markey saacadu tahay 6:20am.<br> ");
            break;
            case"7:00am":
            document.write("jamacaddu xiisadeeda waxay bilaawataa  saacadu tahay 7:00am.<br> ");
            break;
            case"2:20pm":
            document.write("waxaan kasoo baxaa jaamacadda  2:20pm. <br> ");
            break;
            default:
                document.write("waxaan sameeyey jadwalkeyga maanta qaar kamid ah. <br>");
                break;


 }

 // Object containing Surah Ayahs
 const quranData = {
    "Al-Faatihah": [
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      "الرَّحْمَٰنِ الرَّحِيمِ",
      "مَالِكِ يَوْمِ الدِّينِ",
      "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ"
    ],
    "Al-Baqarah": [
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "الم",
      "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ",
      "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ"
    ],
    "AL-i-Imraan": [
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "الم",
      "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
      "نَزَّلَ عَلَيْكَ الْكِتَابَ بِالْحَقِّ مُصَدِّقًا لِمَا بَيْنَ يَدَيْهِ...",
      "وَأَنْزَلَ التَّوْرَاةَ وَالْإِنْجِيلَ...",
    ],
    "An-Nisaa": [
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        "يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا",
        "وَآتُوا الَّذِينَ تَرَكُوا مِنْكُمْ أَزْوَاجًا وَفِي قَسَمِهِمْ وَفِي قَسَمِهِمْ حَقًا عَلَيْهِمْ ۚ إِنَّ اللَّهَ يَأْمُرُكُمْ أَنْ تُؤَدُّوا الْأَمَانَاتِ إِلَىٰ أَهْلِهَا وَإِذَا حَكَمْتُمْ بَيْنَ النَّاسِ أَنْ تَحْكُمُوا بِالْعَدْلِ ۗ إِنَّ اللَّهَ نِعِمَّا يَعِظُكُم بِهِ ۗ إِنَّ اللَّهَ كَانَ سَمِيعًا بَصِيرًا",
        "يَا أَيُّهَا الَّذِينَ آمَنُوا أَنْفِقُوا مِمَّا رَزَقْنَاكُمْ مِّنْ قَبْلِ أَنْ يَأْتِيَ يَوْمٌ لَّا بَيْعٌ فِيهِ وَلَا خِلَالٌ وَيُؤْمِنُوا بِاللَّهِ وَرَسُولِهِ وَيُجَاهِدُونَ فِي سَبِيلِهِ بِأَمْوَالِهِمْ وَأَنْفُسِهِمْ ۚ ذَٰلِكَ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ",
        "إِنَّ الَّذِينَ كَفَرُوا وَيُؤْمِنُونَ بِاللَّهِ وَرَسُولِهِ وَيُجَاهِدُونَ فِي سَبِيلِهِ بِي أَمْوَالِهِمْ وَأَنْفُسِهِمْ"
        // Continue adding the rest of the 176 verses for Surah An-Nisa here...
      ],

      "Al-Maaida": [
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  "يَا أَيُّهَا الَّذِينَ آمَنُوا أَوْفُوا بِالْعُقُودِ ۚ أُحِلَّتْ لَكُمْ الطَّيِّبَاتُ مَا دُوْنَ حَرَّمْتُمْ وَرَسُولُ اللَّهِ إِلَيْهِمْ تَرَابِهِنَّ",
  "حَرَّمَتْ عَلَيْكُمُ الْمَيْتَةُ وَالدَّمُ وَلَحْمُ الْخِنزِيرِ وَمَا أُهِلَّ لِهِ لِغَيْرِ اللَّهِ ...",
  "وَإِذَا فَعَلُوا هَذَا فَفَاجِرُوا فِي أَعْنَابِكُمْ فَفَارَغْنَ تَحْتَ النَّاسِ فَفَاجَأَ... "
  // Ku dar dhammaan 120-ka aayad ee Surah Al-Maaida
],

"Al-Anaam": [
  "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  "الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ وَجَعَلَ الظُّلُمَاتِ وَالنُّورَ ثُمَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ",
  "هُوَ الَّذِي خَلَقَكُمْ مِنْ طِينٍ فَإِذَا أَنتُمْ بَشَرٌ تَنتَشِرُونَ",
  "وَفِي السَّمَاءِ رَازِقُكُمْ وَمَا تُوعَدُونَ",
  "وَوَرَثْنَا سُورَةً جَاءَتْ فِي جَنَّتِهِمْ وَأَنَّا نَعْمَلُ فِي جَحِيمِهِمْ"
  // Ku dar dhammaan 165-ka aayad ee Surah Al-An'aam
],
    // Surahs kale
    "AL-araaf": [
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "الْمَصَ كِتَبُ أُنزِلَ إِلَيْكَ فَلَا يَكُن فِي صَدْرِكَ حَرَجٌ مِنْهُ لِتُنذِرَ بِهِ، وَذِكْرَى لِلْمُؤْمِنِينَ",
      "اتَّبِعُوا مَا أُنزِلَ إِلَيْكُم مِّن رَّبِّكُمْ وَلَا تَتَّبِعُوا مِن دُونِهِ أَوْلِيَاءَ قَلِيلًا مَا تَذَكَّرُونَ",
      "وَكَم مِّن قَرْيَةٍ أَهْلَكْنَهَا فَجَاءَ هَا بَأْسُنَا بَيْنَا أَوْهُمْ قَابِلُونَ",
      "فَمَا كَانَ دَعْوَنَهُمْ إِذْ جَاءَ هُم بَأْسُنَا إِلَّا أَن قَالُوا إِنَّا كُنَّا ظَالِمِينَ",
      "فَلَنَسْتَلَنَّ الَّذِينَ أُرْسِلَ إِلَيْهِمْ وَلَنَسْتَلَنَ الْمُرْسَلِينَ",
      "فَلَنَقُصَّنَّ عَلَيْهِم بِعِلْمٍ وَمَا كُنَّا غَابِينَ",
      "وَالْوَزْنُ يَوْمَئِذٍ الْحَقُّ فَمَن ثَقُلَتْ مَوَازِينُهُ فَأُوْلَبِكَ هُمُ الْمُفْلِحُونَ",
      "وَمَنْ خَفَّتْ مَوَازِينُهُ فَأُولَئِكَ الَّذِينَ خَسِرُوا أَنفُسَهُم بِمَا كَانُوا بِنَايَاتِنَا يَظْلِمُونَ",
      "وَلَقَدْ مَكَّنَّكُمْ فِي الْأَرْضِ وَجَعَلْنَا لَكُمْ فِيهَا مَعَيِشَ قَلِيلًا مَا تَشْكُرُونَ",
      "وَلَقَدْ خَلَقْنَاكُمْ ثُمَّ صَوَّرْنَاكُمْ ثُمَّ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ لَمْ يَكُن مِنَ السَّاجِدِينَ"
    ],
  
  


"Al-Anfal": [
  "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  "يَسْأَلُونَكَ عَنِ ٱلْأَنفَالِ ۚ قُلِ ٱلْأَنفَالُ لِلَّهِ وَٱلرَّسُولِ ۚ فَٱتَّقُواْ ٱللَّهَ وَأَصْلِحُواْ ذَٰتَ بَيْنِكُمْ وَأَطِيعُواْ ٱللَّهَ وَرَسُولَهُٓ إِن كُنتُمْ مُؤْمِنِينَ",
  "إِنَّمَا ٱلْمُؤْمِنُونَ ٱلَّذِينَ إِذَا ذُكِرَ ٱللَّهُ وَجِلَتْ قُلُوبُهُمْ وَإِذَاٰ سَمِعُواْ مَآ أُنْزِلَ عَلَىٰٓ رَسُولِهِ وَزَادَتْهُمْ إِيمَٰنًا وَعَلَىٰ رَبِّهِمْ يَتَوَكَّلُونَ",
  "ٱلَّذِينَ يُقِيمُونَ ٱلصَّلَٰةَ وَمِمَّا رَزَقْنَٰهُمْ يُنفِقُونَ",
  "ٱلَّذِينَ يُؤْمِنُونَ بِمَآ أُنزِلَ عَلَىٰكَ وَمَآ أُنزِلَ مِن قَبْلِكَ وَبِٱلْءَاخِرَةِ هُمْ يُوقِنُونَ",
  "أُو۟لَـٰٓئِكَ عَلَىٰ هُدًۭى مِّن رَّبِّهِمْ ۖ وَأُو۟لَـٰٓئِكَ هُمُ ٱلْمُفْلِحُونَ"
  // Ku dar dhammaan 75-ka aayad ee Surah Al-Anfal
],

    "Ibraheem": [
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "الر كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ لِتُخْرِجَ النَّاسَ مِنَ الظُّلُمَاتِ إِلَى النُّورِ بِإِذْنِ رَبِّهِمْ إِلَىٰ صِرَاطِ الْعَزِيزِ الْحَمِيدِ",
      "اللَّهِ الَّذِي لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ وَوَيْلٌ لِّلْكَافِرِينَ مِنْ عَذَابٍ شَدِيدٍ",
      "الَّذِينَ يَسْتَحِبُّونَ الْحَيَاةَ الدُّنْيَا عَلَى الْآخِرَةِ وَيَصُدُّونَ عَنْ سَبِيلِ اللَّهِ وَيَبْغُونَهَا عِوَجًا ۚ أُو۟لَٰٓئِكَ فِى ضَلَٰلٍۢ بَعِيدٍ",
      "وَمَآ أَرْسَلْنَا مِن رَّسُولٍ إِلَّا بِلِسَانِ قَوْمِهِۦ لِيُبَيِّنَ لَهُمْ ۖ فَيُضِلُّ اللَّهُ مَن يَشَآءُ وَيَهْدِى مَن يَشَآءُ ۖ وَهُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ",
      "وَلَقَدْ أَرْسَلْنَا مُوسَىٰ بِـَٔايَـٰتِنَآ أَنْ أَخْرِجْ قَوْمَكَ مِنَ ٱلظُّلُمَـٰتِ إِلَى ٱلنُّورِ وَذَكِّرْهُم بِأَيَّىٰمِ ٱللَّهِ ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّكُلِّ صَبَّارٍۢ شَكُورٍۢ"
      // Ku dar aayadaha kale sida loo baahdo
    ],
    "At-Tawbah": [
  "بَرَاءَةٌ مِّنَ اللَّـهِ وَرَسُولِهِ إِلَى الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ",
  "فَسِيحُوا فِي الْأَرْضِ أَرْبَعَةَ أَشْهُرٍ وَاعْلَمُوا أَنَّكُمْ غَيْرُ مُعْجِزِي اللَّـهِ وَأَنَّ اللَّـهَ مُخْزِي الْكَافِرِينَ",
  "وَأَذَانٌ مِّنَ اللَّـهِ وَرَسُولِهِ إِلَى النَّاسِ يَوْمَ الْحَجِّ الْأَكْبَرِ أَنَّ اللَّـهَ بَرِيءٌ مِّنَ الْمُشْرِكِينَ وَرَسُولُهُ ۚ فَإِن تُبْتُمْ فَهُوَ خَيْرٌ لَّكُمْ وَإِن تَوَلَّيْتُمْ فَاعْلَمُوا أَنَّكُمْ غَيْرُ مُعْجِزِي اللَّـهِ ۗ وَبَشِّرِ الَّذِينَ كَفَرُوا بِعَذَابٍ أَلِيمٍ",
  "إِلَّا الَّذِينَ عَاهَدتُّم مِّنَ الْمُشْرِكِينَ ثُمَّ لَمْ يَنقُصُوكُمْ شَيْئًا وَلَمْ يُظَاهِرُوا عَلَيْكُمْ أَحَدًا فَأَتِمُّوا إِلَيْهِمْ عَهْدَهُمْ إِلَىٰ مُدَّتِهِمْ ۚ إِنَّ اللَّـهَ يُحِبُّ الْمُتَّقِينَ",
  "فَإِذَا انسَلَخَ الْأَشْهُرُ الْحُرُمُ فَاقْتُلُوا الْمُشْرِكِينَ حَيْثُ وَجَدتُّمُوهُمْ وَخُذُوهُمْ وَاحْصُرُوهُمْ وَاقْعُدُوا لَهُمْ كُلَّ مَرْصَدٍ ۚ فَإِن تَابُوا وَأَقَامُوا الصَّلَاةَ وَآتَوُا الزَّكَاةَ فَخَلُّوا سَبِيلَهُمْ ۚ إِنَّ اللَّـهَ غَفُورٌ رَّحِيمٌ",
  // Ku sii dar dhammaan aayadaha kale ilaa laga gaarayo 129
],
    "yuusuf": [
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      "الر تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ",
      "إِنَّا أَنزَلْنَاهُ قُرْءَانًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُونَ",
      "نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ بِمَا أَوْحَيْنَا إِلَيْكَ هَٰذَا الْقُرْءَانَ وَإِن كُنتَ مِن قَبْلِهِۦ لَمِنَ ٱلْغَٰفِلِينَ",
      "إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَـٰٓأَبَتِ إِنِّى رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًۭا وَٱلشَّمْسَ وَٱلْقَمَرَ رَأَيْتُهُمْ لِى سَٰجِدِينَ"
      // Ku dar aayadaha kale haddii loo baahan yahay
    ],

        "Huud": [
            "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
          "الركتَبُ أُحْكِمَتْ آيَتُهُ ثُمَّ فُصِّلَتْ مِن لَّدُنْ حَكِيمٍ خَبِيرٍ",
          "أَلَّا تَعْبُدُوا إِلَّا اللَّهَ إِنَّنِي لَكُمْ مِنْهُ نَذِيرٌ وَبَشِيرٌ",
          "وَأَنِ اسْتَغْفِرُوا رَبَّكُمْ ثُمَّ تُوبُوا إِلَيْهِ يُمَنِعْكُم مَّتَاعًا حَسَنًا إِلَى أَجَلٍ مُّسَمًّى وَيُؤْتِ كُلَّ ذِي فَضْلٍ فَضْلَهُ",
          "وَإِن تَوَلَّوْا فَإِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ كَبِيرٍ",
          "إِلَى اللَّهِ مَرْجِعُكُمْ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
          "أَلَا إِنَّهُمْ يَثْنُونَ صُدُورَهُمْ لِيَسْتَخْفُوا مِنْهُ",
          "أَلَاحِينَ يَسْتَغْشُونَ ثِيَابَهُمْ يَعْلَمُ مَا يُسِرُّونَ وَمَا يُعْلِنُونَ إِنَّهُ عَلِيمٌ بِذَاتِ الصُّدُورِ"
        ],

        
            // Surahs kale
            "yoonis": [
                "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        
              "الرَّ تِلْكَ آيَاتُ الْكِتَابِ الْحَكِيمِ",
              "أَكَانَ لِلنَّاسِ عَجَبًا أَنْ أَوْحَيْنَا إِلَى رَجُلٍ مِنْهُمْ أَنْ أَنْذِرِ النَّاسَ وَبَشِّرِ الَّذِينَ ءَامَنُوا أَنَّ لَهُمْ قَدَمَ صِدْقٍ عِندَ رَبِّهِمْ قَالَ الْكَافِرُونَ إِنَّ هَذَا لَسَاحِرٌ مُّبِينٌ",
              "إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَوَاتِ وَالْأَرْضَ ملے فِي سِتَّةِ أَيَّامٍ ثُمَّ اسْتَوَى عَلَى الْعَرْشِ يُدَبِّرُ الْأَمْرَ",
              "مَا مِن شَفِيعٍ إِلَّا مِنْ بَعْدِ إِذْنِهِ نِهِ ذَلِكُمُ اللَّهُ رَبُّكُمْ فَاعْبُدُوهُ أَفَلَا تَذَكَّرُونَ",
              "إِلَيْهِ مَرْجِعُكُمْ جَمِيعًا وَعْدَ اللَّهِ حَقًّا إِنَّهُ يَبْدُوا الخَلْقَ ثُمَّ يُعِيدُهُ لِيَجْزِيَ الَّذِينَ ءَامَنُوا وَعَمِلُوا الصَّالِحَاتِ بِالْقِسْطِ",
              "وَالَّذِينَ كَفَرُوا لَهُمْ شَرَابٌ مِنْ حَمِيمٍ وَعَذَابٌ أَلِيمٌ بِمَا كَانُوا يَكْفُرُونَ",
              "هُوَ الَّذِي جَعَلَ الشَّمْسَ ج ضِيَاءُ وَالْقَمَرَ نُورًا وَقَدَّرَهُ مَنَازِلَ لِتَعْلَمُوا عَدَدَ السِّنِينَ وَالْحِسَابَ",
              "مَا خَلَقَ اللَّهُ ذَلِكَ إِلَّا بِالْحَقِّ يُفَصِّلُ الْآيَاتِ لِقَوْمٍ يَعْلَمُونَ",
              "إِنَّ فِي اخْتِلَافِ الَّيْلِ وَالنَّهَارِ وَمَا خَلَقَ اللَّهُ فِي السَّمَوَاتِ وَالْأَرْضِ لَآيَاتٍ لِقَوْمٍ يَتَّقُونَ"
            ]
          
      
      
  
  

  };
  






  // Function to display Ayahs
  function displayAyahs(surahName) {
    const ayahs = quranData[surahName];
    const ayahDisplay = document.getElementById("ayah-display");
    const ayahsContent = document.getElementById("ayahs-content");

    if (ayahs) {
      ayahsContent.innerHTML = ayahs.map((ayah, index) => `<p><b>Ayah ${index + 1}:</b> ${ayah}</p>`).join("");
      ayahDisplay.style.display = "block";
    } else {
      ayahsContent.innerHTML = "<p>No data available for this surah.</p>";
    }
  }
};

  
  //quran learning//

 