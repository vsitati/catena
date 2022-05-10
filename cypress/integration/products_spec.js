describe('Catena Demo', () => {
    it('Successful login', () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('#user-name').type('standard_user').should('have.value', 'standard_user')
    cy.get('input[id="password"]').type('secret_sauce')
    cy.get('#login-button').click();
    cy.get('.app_logo')
    cy.get('.title').should('contain.text','Products')
    cy.get('#item_4_title_link > .inventory_item_name').should('contain.text','Sauce')
    cy.get('#item_3_title_link > .inventory_item_name').should('contain.text','Red')
    })
})