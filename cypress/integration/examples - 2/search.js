describe('Search test cases', function (){
    before (function() {
        cy.log('Ejecutando precondiciones a las pruebas');
    })
    after (function() {
        cy.log('Ejecutando todas las postcondiciones a las pruebas');
    })
    beforeEach(function() {
        cy.visit('http://automationpractice.com/index.php');
    })
    afterEach(function() {
        console.log("Poniendo datos en su estado original");
    })
    it ('Search with results', function() {
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })
    it ('Search with results', function() {
        cy.get('#search_query_top').type('hat');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"hat"');
    })
})