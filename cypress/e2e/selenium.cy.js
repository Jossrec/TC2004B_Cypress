describe('prueba funcionalidad calculadora', () => {
    // it('buscar y agregar elemento', () => {
    //   cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    //   cy.get('.search-keyword').type('Brocolli')
    //   cy.get(':nth-child(1) > .product-action > button').click()
    // })

    it('buscar y agregar elemento', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('Carrot')
        cy.wait(10)
        cy.get('.increment').eq(0).click()
        cy.wait(10)
        cy.get('.increment').eq(0).click()
        cy.wait(10)
        cy.get('.product-action > button').click()
  
        cy.get('.search-keyword').clear().type('Brocolli')
        cy.get('.increment').eq(0).click()
        cy.get('.increment').eq(0).click()
        cy.get('.increment').eq(0).click()
        cy.get('.increment').eq(0).click()
        cy.get('.product-action > button').click()
  
        cy.get('.search-keyword').clear()
        cy.get('.search-keyword').type('Apple')
        cy.get('.increment').eq(0).click()
        cy.get('.increment').eq(0).click()
        cy.get('.increment').eq(0).click()
        cy.get('.increment').eq(0).click()
        cy.get('.product-action > button').click()
        cy.get('.cart-icon > img').click()
        cy.get('.cart-preview > .action-block > button').click()
        cy.get('[style="text-align: right; width: 100%; margin-top: 20px; margin-right: 10px;"] > :nth-child(14)').click()
        cy.get('select').select('Mexico')
        cy.get('.chkAgree').click()
        cy.get('button').click()
      })
  })
