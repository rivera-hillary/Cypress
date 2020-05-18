describe('Registro de un usuario en la página seven-seven', function() {
    it('Ir a la página seven-seven', function () {
        cy.visit('https://www.sevenseven.com/');
        cy.get('.cerrarpopup').click();
    })
    it ('Validar que se envíe el formulario', function () {
        cy.get('#cliente_email').type('dagamez@gmail.com');
        cy.get('#firstName').type('Danilo');
        cy.get('#lastName').type('Agamez');
        cy.get('#cliente_celular').type('21735478');
        cy.get('#document-type').select('Cédula de Ciudadanía');
        cy.get('#cliente_documento').type('84635241');
        cy.get('#dia').select('15');
        cy.get('#mes').select('Octubre');
        cy.get('#anio').select('1995');
        cy.get('#male').click();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox > .custom_checkbox_container').click();
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        // Validación formulario exitoso
        cy.visit('https://www.sevenseven.com/registro/web/confirmacion');
        cy.get('.thanks-top').should('be.visible','GRACIAS POR REGISTRARTE Y SER PARTE DE NUESTRA COMUNIDAD');
    })
})