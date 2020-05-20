describe('Valide letras en campos de números', function() {
    it('Ir a la página seven-seven', function () {
        cy.visit('/');
        cy.get('.cerrarpopup').click();
    })
    it ('Validar que se envíe el formulario con números como texto', function () {
        cy.get('#cliente_email').type('andreasal@gmail.com');
        cy.get('#firstName').type('Andrea');
        cy.get('#lastName').type('Salazar');
        cy.get('#cliente_celular').type('yensklsi');
        cy.get('#document-type').select('Cédula de Ciudadanía');
        cy.get('#cliente_documento').type('twgbsko');
        cy.get('#dia').select('29');
        cy.get('#mes').select('Enero');
        cy.get('#anio').select('1985');
        cy.get('#male').click();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').check({ force: true });
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        // Validación formulario exitoso
        cy.get('.thanks-normal-text > p').contains('Gracias por registrarte y ser parte de nuestra comunidad');
    })
})