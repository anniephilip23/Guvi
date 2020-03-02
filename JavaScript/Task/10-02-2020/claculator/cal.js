class calculator {
    number(){
        var number1 = parseInt(prompt('Enter the 1st number:'));
        var number2 = parseInt(prompt('Enter the 2nd number:'));
        var operator = prompt('1:Addition,2:Subraction,3:Multiplication,4:Division');
        this.number1  = number1 ;
        this.number2 = number2;
        this.operator = operator;
        }
    
        Calculate() {
          var result;  
          if (this.operator == 1){
            result = this.number1 + this.number2;}
          else if (this.operator == 2){
            result = this.number1 - this.number2;}
          else if (this.operator == 3){
            result =  this.number1 * this.number2;}
          else if (this.operator == 4){
           result =  this.number1 / this.number2;}
           alert(result);
        }        
}
var calc = new calculator();
calc.number();
calc.Calculate()

    