describe('No valida simbolos en campos de texto', function() {
    it('Ir a la página seven-seven', function () {
        cy.visit('/');
        cy.get('.cerrarpopup').click();
    })
    it ('No valida que se envíe el formulario con simbolos como texto', function () {
        cy.get('#cliente_email').type('!"·$%@gmail.com');
        cy.get('#firstName').type('*^¨Ç');
        cy.get('#lastName').type(':;_¨Ç*');
        cy.get('#cliente_celular').type('!"(%$');
        cy.get('#document-type').select('Cédula de Ciudadanía');
        cy.get('#cliente_documento').type('=/%&/');
        cy.get('#dia').select('5');
        cy.get('#mes').select('Abril');
        cy.get('#anio').select('1975');
        cy.get('#male').click();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox > .custom_checkbox_container').click();
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        // Validación formulario exitoso
        cy.get('#form_registro_footer > .line3-2').contains('Ha ocurrido un error durante el proceso de registro, por favor recarga la página y vuelve a intentarlo');
    })
})