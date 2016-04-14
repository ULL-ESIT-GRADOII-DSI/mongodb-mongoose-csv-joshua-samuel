var expect = chai.expect;

describe("Comma separated values", function(){
    describe("#calculate", function() {
       it("Deberia crear tabla correctamente", function(){
          var cadena='"producto","precio"';
                                
           var test=calculate(cadena);
           expect(test[0].value[0]).to.equal("producto");
       });
        /*it("(EDGE)Deberia mostrar mensaje de error", function(){
          var cadena=2;
                                
           var test=calculate(cadena);
           expect(test[0].value[0]).to.equal("producto");
       });*/
       
    });
});

