import basePage from    "../../support/basePage"
import practisePage from "../../support/practisePage"

const nav=new basePage()
const practise=new practisePage()

describe('My Practise Page Tests',function(){
    before(() => {
    nav.navigate()
    })
    it('check radio buttons',function(){
        practise.clickAndValidate_RadioButtons()
    })
    it('Type and select sugestions',function(){
      practise.enterAndClear_Suggestions()
  })
    it('Checkboxes',function(){
      practise.clickAndValidate_CheckBoxes()

    })
    it('Show & Hide',function(){
      practise.showAndHide()

    })
    it('Table',function(){
      practise.validateAmountInWebTable()

    })
    it('iFrame',function(){
      practise.validateIFrame()

    })
    
})