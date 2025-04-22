describe('Quizz de automatización', () => {
    it('Speed Game', () => { 
        cy.visit('https://thelab.boozang.com/')
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(2) > .sub_list > :nth-child(1) > span > .link').click()
        cy.get('[data-testid="startBtn"]').click()
        cy.get('.delete',{ timeout: 30000 }).should('be.visible').click()
        cy.get('[data-testid="message"]').should('be.visible')
     })
     it('Wait Game', () => { 
        cy.visit('https://thelab.boozang.com/')
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(2) > .sub_list > :nth-child(2) > span > .link').click()
        cy.get('[data-testid="startBtn"]').click()
        cy.wait(100)
        cy.get('.delete').click()
        cy.get('[data-testid="message"]').should('be.visible')
     })
     it('Yellow or Blue', () => { 
        cy.visit('https://thelab.boozang.com/')
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(3) > .sub_list > :nth-child(1) > span > .link').click()
        cy.get('.add').click()
        cy.get('.color').then(($elemento)=> {
            if($elemento.text().trim() === 'yellow'){
                cy.get('.yellow').click()
                cy.get('[data-testid="message"]').should('be.visible')
            }
            else {
                cy.get('.blue').click()
                cy.get('[data-testid="message"]').should('be.visible')
            }
        }
        )
     })

     it('Sorted list', () => {
        cy.visit('https://thelab.boozang.com/')
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(4) > .sub_list > :nth-child(1) > span > .link').click()
      
        cy.get('input').should('exist').type('Hokeis')
        cy.get('.form_btn').should('exist').should('not.be.disabled').click()
      
        cy.get('input').clear().type('Chokomil')
        cy.get('.form_btn').click()
        cy.wait(100)
      })
      

    it('Form Fill', () => {
        cy.fixture('users').then((users) => {
            cy.visit('https://thelab.boozang.com/')
            cy.get('.veggie_burger').click()
            cy.get(':nth-child(4) > .sub_list > :nth-child(2) > span > .link').click()
    
            // user1
            cy.get(':nth-child(1) > input').click().type(users.user1.firstName)
            cy.get(':nth-child(2) > input').click().type(users.user1.lastName)
            cy.get(':nth-child(3) > input').click().type(users.user1.email)
            cy.get(':nth-child(4) > input').click().type(users.user1.password)
            cy.get('.btn_section > .form_btn').click()
            cy.wait(100)

            // user2
            cy.get(':nth-child(1) > input').click().type(users.user2.firstName)
            cy.get(':nth-child(2) > input').click().type(users.user2.lastName)
            cy.get(':nth-child(3) > input').click().type(users.user2.email)
            cy.get(':nth-child(4) > input').click().type(users.user2.password)
    
            cy.get('.btn_section > .form_btn').click()


        })
    })

    it('Cat Shelter', () => {
        cy.fixture('cats').then((cats) => {
            cy.visit('https://thelab.boozang.com/')
            cy.get('.veggie_burger').click()
            cy.wait(50)
            cy.get(':nth-child(4) > .sub_list > :nth-child(3) > span > .link').click()
            cy.wait(50)
            // cat1
            cy.get('.cat_shelter_header > .link_btn').click()
            cy.get('.list_form > :nth-child(1) > input').click().type(cats.cat1.name)
            cy.get('textarea').click().type(cats.cat1.description)
            cy.get(':nth-child(1) > label > input').click()

            cy.get('.text-center > .form_btn').click()
            cy.wait(100)

            // cat2
            cy.get('.cat_shelter_header > .link_btn').click()
            cy.get('.list_form > :nth-child(1) > input').click().type(cats.cat2.name)
            cy.get('textarea').click().type(cats.cat2.description)
            cy.get(':nth-child(1) > label > input').click()

            cy.get('.text-center > .form_btn').click()
            cy.wait(100)
        })
    })

    it('Concatenate Strings', () => { 
        cy.visit('https://thelab.boozang.com/')
        let palabra1;
        let palabra2;
        cy.get('.veggie_burger').click()
        cy.get(':nth-child(7) > .sub_list > li > span > .link').click()
        cy.get('.strings_section > :nth-child(2)').click()
        cy.get('.string1').then(($elemento) => {
            palabra1 = $elemento.text();
        });
        cy.get('.string2').then(($elemento) => {
            palabra2 = $elemento.text();
        });
        cy.then(() => {
            cy.get('input').type(`${palabra1}${palabra2}`);
        })
        cy.get('.text-center > .form_btn').click();
        cy.get('[data-testid="message"]').should('be.visible');
     })
  })

