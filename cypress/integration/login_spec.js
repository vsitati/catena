describe('Catena Demo', () => {
    it('Successful login', () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
    cy.get('input[id="password"]').type('secret_sauce')
    cy.get('#login-button').click();
    cy.get('.app_logo')
    cy.get('.title').should('contain.text','Products')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_desc_label').should('contain.text','DESCRIPTION')
    cy.get('.inventory_item_name').should('contain.text','Sauce')
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('TestUser')
    cy.get('[data-test="lastName"]').type('Usertester')
    cy.get('[data-test="postalCode"]').type('40100')
    cy.get('[data-test="continue"]').click()
    cy.get('.summary_total_label').should('contain.text','Total')
    cy.get('[data-test="finish"]').click();
    cy.get('.pony_express').should('have.attr', 'src', '/static/media/pony-express.46394a5d.png')
    cy.get('[data-test="back-to-products"]').click()
    cy.get('.bm-burger-button').click();
    cy.get('#logout_sidebar_link').click()
    })
    it('locked_out_user', () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('locked_out_user').should('have.value', 'locked_out_user')
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('contain.text','Sorry, this user has been locked out')  
        })
    it('problem_user', () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('problem_user').should('have.value', 'problem_user')
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('#login-button').click();
        cy.get('#item_4_img_link > .inventory_item_img').should('have.attr','src', '/static/media/sl-404.168b1cce.jpg') 
        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click()
        })   
    it('performance_glitch_user', () => {
        cy.visit("https://www.saucedemo.com/");
        cy.get('#user-name').type('performance_glitch_user').should('have.value', 'performance_glitch_user')
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('#login-button').click();
        cy.get('#item_4_img_link > .inventory_item_img').should('have.attr','src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg')
        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click() 
        })        
    })