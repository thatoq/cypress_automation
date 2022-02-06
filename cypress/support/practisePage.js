class practisePage {
    clickAndValidate_RadioButtons() {
        cy.get('input[value=radio3]').check()
          .should('be.checked')
          .get('input[value=radio2]').check()
          .should('be.checked')
          .screenshot()
          return this
    }
    enterAndClear_Suggestions() {
        cy.get('input[id=autocomplete]')
          .type('South')
          .screenshot()
          .get('li[class=ui-menu-item]').eq('1')
          .should('contain.text','South Africa')
          .screenshot()
          .click()
          .get('input[id=autocomplete]').clear()
          .type('Republic')
          .screenshot()
          .get('li[class=ui-menu-item]').eq('0')
          .should('contain.text','Central African Republic')
          .screenshot()
          .click()
          

          return this
    }
    clickAndValidate_CheckBoxes() {
        cy.get('input[type="checkbox"]')
          .check(['option1', 'option2','option3'])
          .should('be.checked')
          .uncheck('option1').should('not.be.checked')
          .screenshot()
          .get('input[type="checkbox"]')
          .check(['option2', 'option3']).should('be.checked')
          return this
    }
    showAndHide() {
        cy.get('input[name=show-hide]').should('be.visible')
          .screenshot()
          .get('input[value=Hide]').click()
          .get('input[name=show-hide]').should('not.be.visible')
          .get('input[value="Show"]').click() 
          .screenshot()
          .get('input[name=show-hide]').should('be.visible')
          return this
    }
    validateAmountInWebTable() {
        cy.get('div[class=tableFixHead]>table>tbody>tr').eq(5)
          .within(function(){
              cy.get('td').eq('0').should('contain.text','Joe')
                .get('td').eq('2').should('contain.text','Chennai')
                .get('td').eq('3').should('contain.text','46')
                .screenshot()
          })
        .get('div[class=totalAmount]').should('contain.text',' Total Amount Collected: 296 ')
        .screenshot()
          return this
    }
    validateIFrame() {
        cy.get('iframe[id=courses-iframe]').should('be.visible')
          .screenshot()
          .get('iframe[id=courses-iframe]').its('0.contentDocument.body')
          .then(cy.wrap)
          .find('div[class=login-btn]').eq(0)
          .click()
          return this
    }
    }

export default practisePage