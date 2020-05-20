describe('Registro de un usuario en la página seven-seven', function() {
    it('Ir a la página seven-seven', function () {
        cy.visit('/');
        cy.get('.cerrarpopup').click();
        cy.get('.derechos').find('span').contains('Todos los derechos reservados Seven - Seven');
    })
    it ('Validar que se envíe el formulario', function () {
        cy.get('#cliente_email').type('andream@gmail.com');
        cy.get('#firstName').type('Andrea');
        cy.get('#lastName').type('Matos');
        cy.get('#cliente_celular').type('627283');
        cy.get('#document-type').select('Cédula de Ciudadanía');
        cy.get('#cliente_documento').type('89300393');
        cy.get('#dia').select('25');
        cy.get('#mes').select('Enero');
        cy.get('#anio').select('1999');
        cy.get('#female').click();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').check({ force: true });
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        // Validación formulario exitoso
        cy.get('.thanks-top').contains('Gracias por registrarte y ser parte de nuestra comunidad');
    })
})