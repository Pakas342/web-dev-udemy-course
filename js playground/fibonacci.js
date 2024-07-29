function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        var fibonacciArray = []
        for (var i=0; i<n; i++) {
            if (fibonacciArray.length === 0) {
                fibonacciArray.push(0);
            } else if (fibonacciArray.length === 1) {
                fibonacciArray.push(1);
            } else {
                var newNumber = fibonacciArray[i- 1] + fibonacciArray[i - 2];
                fibonacciArray.push(newNumber)
            }
        }
        return fibonacciArray
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    