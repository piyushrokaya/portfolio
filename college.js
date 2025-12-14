// Your friend's task (callback function)
function friendTask() {
    console.log("Friend: Now I'm washing the dishes!");
}

// Your task (main function)
function myTask(callback) {
    console.log("Me: First, I'm cooking...");
    console.log("Me: Cooking done!");
    
    // Now call your friend
    callback(); // This calls friendTask()
}

// Start the process
myTask(friendTask);

for (let i = 1; i <= 5; i++) {
    console.log("count:" +i)
}


// write a program to check if a nnumber i spositive negative or zero
let num=5;
if (num>0){
    console.log("positive")
}
else if (num<0){
    console.log("negative")
}

//give three numbers,prinnnt the largest number
let a=10;
let b=20;
let c=15;       
if (a>b && a>c){
    console.log("a is largest")
}                   

else if (b>a && b>c){       

    console.log("b is largest")
}
else{
    console.log("c is largest")
}

//write a function isPrime(n) that checks if a number is prime
function isPrime(n){
    if (n<=1){
        return false;
    }
    for (let i=2;i<=Math.sqrt(n);i++){
        if (n%i===0){
            return false;
        }           
    }
}
function main(){
    let number=7;
    if (isPrime(number)){
        console.log(number + " is a prime number");
    }               
    else{
        console.log(number + " is not a prime number");
    }       
}

//write a function that takes a sttring and returns the number of vowels
function countVowels(str){
    let count=0;
    let vowels="aeiouAEIOU";                    
    for (let char of str){
        if (vowels.indexOf(char)!==-1){
            count++;
        }
    }
    return count;
}
let string="Hi";
let vowelCount=countVowels(string);
console.log("Number of vowels in '" + string + "': " + vowelCount);





//write a function that check whether a sring is a palindrome
function isPalindrome(str){ 
    if (str===str.split('').reverse().join('')){
        return true;
    }       

    return false;
}
let testString="madam";
if (isPalindrome(testString)){
    console.log("'" + testString + "' is a palindrome");
} else {
    console.log("'" + testString + "' is not a palindrome");
}
