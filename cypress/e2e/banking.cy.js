describe('prueba funcionalidad banco', () => {
    it('Iniciar sesión como Manager y dar de alta a un cliente', () => {
      cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
      cy.get(':nth-child(3) > .btn').click()
      cy.get('[ng-class="btnClass1"]').click()
      cy.get(':nth-child(1) > .form-control').click().type('Joselyn')
      cy.get(':nth-child(2) > .form-control').click().type('Reyna')
      cy.get(':nth-child(3) > .form-control').click().type('6400')
      cy.get('form.ng-dirty > .btn').click()

      // Iniciar sesión como manager y al cliente creado, abrirle una cuenta en Dolares
      cy.get('[ng-class="btnClass2"]').click()
      cy.get('#userSelect').select('Joselyn Reyna')
      cy.get('#currency').select('Dollar')
      cy.get('form.ng-dirty > button').click()
      // Iniciar sesión como usuario. Hacer un deposito de $800, validar que el saldo se vea reflejado en la parte superior, al lado del Account Number
      cy.get('.home').click()
      cy.get('.borderM > :nth-child(1) > .btn').click()
      cy.get('#userSelect').select('Joselyn Reyna')
      cy.get('form.ng-valid > .btn').click()
      cy.get('[ng-class="btnClass2"]').click()
      cy.get('.form-control').type('800')
      cy.get('form.ng-dirty > .btn').click()

      //Iniciar sesión como usuario. Hacer un retiro por $1,500, validar que se muestre el mensaje "Transaction Failed..."
      cy.get('[ng-class="btnClass3"]').click()
      cy.get('.form-control').type('1500')
      cy.wait(50)
      cy.get('form.ng-dirty > .btn').click()
      cy.wait(50)

      //Iniciar sesión como usuario. Hacer un retiro por $500, validar que se muestre el mensaje "Transaction successful"
      cy.get('.form-control').type('500')
      cy.wait(50)
      cy.get('form.ng-dirty > .btn').click()
      cy.wait(50)

      //Iniciar sesión como usuario. Ir a la parte de transacciones. Validar que se tengan las 2 transacciones realizadas correctamente en la parte de arriba
      cy.wait(500)
      cy.get('[ng-class="btnClass1"]').click()

    })
  })

