class Form {

    constructor() {
        this.grossincome = createInput("What is ur gross income");
        this.taxrate = createInput("What is the combined rate of all your taxes, monthly");
        this.insurance = createInput("What is your insurance premium monthly?");
        this.other = createInput("Put in a value for any other expenses you have monthly");
        this.familySize = createInput("How big is your family (that lives with you?");
        this.generalFees = createInput("How much do your fixed expenses cost you? (this includes gas, electric, water, etc. However, this does not include shopping")
      this.button = createButton('Optimize Budget');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('Reset')
      this.displaynetincome = createElement('h2');
  
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.income.hide();
      this.taxrate.hide();
      this.insurance.hide();
      this.other.hide();
      this.familySize.hide();
      this.generalFees.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Budget Optimizer");
      this.title.position(displayWidth/2 - 50, 0);
  
      this.income.position(displayWidth/2 - 40 , displayHeight/2 - 80);
      this.taxrate.position(displayWidth/2 - 60 , displayHeight/2 - 80);
      this.insurance.position(displayWidth/2 - 80 , displayHeight/2 - 80);
      this.other.position(displayWidth/2 - 100 , displayHeight/2 - 80);
      this.familySize.position(displayWidth/2 - 120 , displayHeight/2 - 80 );
      this.generalFees.position(displayWidth/2 - 140 , displayHeight/2 -80);

      this.button.position(displayWidth/2 + 30, displayHeight/2);
      this.reset.position(displayWidth-100,20)
      grossincome = this.grossincome.value()
      taxRate = this.taxrate.value()
      insurance = this.insurance.value()
      other = this.other.value()
      familySize = this.familySize.value()
      generalFees = this.generalFees.value()
      this.button.mousePressed(()=>{
        var netincome = grossincome - grossincome*taxRate
        console.log(netincome)
        var food = familySize * 10* 3
        var discretionaryincome = netincome - generalFees -familySize-other


        
        this.displaynetincome.html("Your net income is: "+netincome);
        this.displaynetincome.position(displayWidth/2 - 70, displayHeight/4);


        
  

  
     });
    }
  }
  