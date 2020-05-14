describe('Pruebas en el sitio women', function () {
    beforeEach(function () {
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category');
    })
    it ('Checkear elementos', function () {
        cy.get('#layered_category_4').check();
        cy.get('#layered_id_attribute_group_3').check();
        cy.get('#layered_category_4').uncheck();
        cy.get('#layered_id_attribute_group_3').uncheck();
    })
    it ('Seleccionar objetos', function () {
        cy.get('.selectProductSort').select('In stock');
    })
})