describe('Mensaje de confirmación de un usuario ya registrado en la página seven-seven', function() {
    it('Ir a la página seven-seven', function () {
        cy.visit('/');
        cy.get('.cerrarpopup').click();
    })
    it ('Mensaje de confirmación', function () {
        cy.get('#cliente_email').type('cagamez@gmail.com');
        cy.get('#firstName').type('Camilo');
        cy.get('#lastName').type('Agamez');
        cy.get('#cliente_celular').type('2345678');
        cy.get('#document-type').select('Cédula de Ciudadanía');
        cy.get('#cliente_documento').type('123456987');
        cy.get('#dia').select('8');
        cy.get('#mes').select('Agosto');
        cy.get('#anio').select('2000');
        cy.get('#male').click();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox > .custom_checkbox_container').click();
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        // Validación de un mensaje de confirmación de un usuario ya registrado
        cy.get('#form_registro_footer > .line3-2 > .error-nn').should('be.visible','EL CLIENTE YA SE ENCUENTRA REGISTRADO');
    })
})