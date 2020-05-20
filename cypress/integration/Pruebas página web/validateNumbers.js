describe('Valide números en campos de texto', function() {
    it('Ir a la página seven-seven', function () {
        cy.visit('/');
        cy.get('.cerrarpopup').click();
    })
    it ('Validar que se envíe el formulario con números como texto', function () {
        cy.get('#cliente_email').type('42525637@gmail.com');
        cy.get('#firstName').type('7483882');
        cy.get('#lastName').type('5463882');
        cy.get('#cliente_celular').type('64789221');
        cy.get('#document-type').select('Cédula de Ciudadanía');
        cy.get('#cliente_documento').type('54783929');
        cy.get('#dia').select('21');
        cy.get('#mes').select('Junio');
        cy.get('#anio').select('1992');
        cy.get('#male').click();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').check({ force: true });
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        // Validación formulario exitoso
        cy.get('.thanks-normal-text > p').contains('Gracias por registrarte y ser parte de nuestra comunidad');
    })
})