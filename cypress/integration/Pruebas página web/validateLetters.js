describe('Valide letras en campos de números', function() {
    it('Ir a la página seven-seven', function () {
        cy.visit('/');
        cy.get('.cerrarpopup').click();
    })
    it ('Validar que se envíe el formulario con números como texto', function () {
        cy.get('#cliente_email').type('anago@gmail.com');
        cy.get('#firstName').type('Ana');
        cy.get('#lastName').type('Gómez');
        cy.get('#cliente_celular').type('akgkidn');
        cy.get('#document-type').select('Cédula de Ciudadanía');
        cy.get('#cliente_documento').type('jycnidk');
        cy.get('#dia').select('12');
        cy.get('#mes').select('Diciembre');
        cy.get('#anio').select('1986');
        cy.get('#male').click();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox > .custom_checkbox_container').click();
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        // Validación formulario exitoso
        cy.get('.thanks-normal-text > p').contains('Gracias por registrarte y ser parte de nuestra comunidad');
    })
})