describe('Formas de encontrar un elemeto', function () {
    it ('Buscar en el buscador', function() {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('Hola');
        cy.get('#search_query_top').type(' Como te va ');
        cy.get('[name="search_query"]').type('Me va bien');

    })
})