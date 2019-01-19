/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    //if there was no number mentioned.then default to 1. 
    if ( (/^[a-z]+$/).test(input))
    {
      console.log('inside the if');
                  
      return 1;
    }
    else
    {
      console.log('else the if');
    //find all the alphabets
      let chars = input.match(/[a-zA-Z]*$/);
      
    //get the first digits until text starts.
     result = input.match(/^\d*\.?\d*\/?\d*/);
      //if there are no extra digits because of double fraction
      console.log('ch '+chars[0] +'res '+ result[0]);
     if( result[0]+chars[0] == input)
     {
    //if the above pattern is not followed ,then send back number if not, then send invalid unit.
    console.log('result in get number '+result[0]);

    return result?parseFloat(eval(result[0])).toPrecision(5) :"invalid number";
     }
      else
      {
        console.log("invalid number");
        return "invalid number";
      }
    }
  };
  
  this.getUnit = function(input) {
    var result;
    
    //get the units in text
    result = input.match(/[a-zA-Z]*$/);
    let valid_units = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
    //console.log('result in get unit '+result[0]);
    
    //result = result[0].toLowerCase();
    if(result && valid_units.includes(result[0]) )
    {
      console.log('result in get unit '+result[0]);
       return result[0];
    }
    //if the above pattern is not followed ,then send back number if not, then send invalid unit.
    return 'invalid unit'
   
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    if(initUnit == 'invalid unit')
    {
     return "";
    }
    var input = ['gal','l','mi','km','lbs','kg'];
    var output = ['l','gal','km','mi','kg','lbs'];
    
    console.log('in return unit '+output[input.indexOf(initUnit)]);
    
    return  output[input.indexOf(initUnit.toLowerCase())];
  };

  this.spellOutUnit = function(unit) {
    var result;
    var input = ['gal','l','mi','km','lbs','kg'];
    var output = ['gallons','litres','miles','kilometers','pounds','kilograms'];
   // console.log(output[input.indexOf(unit)]);
    
    return  output[input.indexOf(unit.toLowerCase())];
    
    
    //return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (initUnit.toLowerCase())
    {
        //['gal','l','mi','km','lbs','kg'];
      case "gal": 
        result = initNum * galToL;
        break;
      case  "l":
        result = initNum /galToL;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
        
        
    }
    console.log('in convert '+result);
    return result?parseFloat(result.toPrecision(5)):null;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    //3.1 miles converts to 5.00002 kilometers'
    result = initNum +" " + this.spellOutUnit(initUnit)+" converts to "+ returnNum +" "+this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
