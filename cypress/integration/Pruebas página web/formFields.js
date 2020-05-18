describe('Campos requeridos en un formulario', function() {
    it('Ir a la página seven-seven', function () {
        cy.visit('https://www.sevenseven.com/');
        cy.get('.cerrarpopup').click();
    })
    it('Confirmación de campos de un formulario', function() {
        cy.get('#cliente_email').type('cagamez@gmail.com');
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        cy.get('#form_registro_footer > .line3-2 > .error-nn').should('be.visible','DEBES RELLENAR TODOS LOS CAMPOS OBLIGATORIOS');
    })
    it('Se debe rellenar todos los campos obligatorios', function() {
        cy.get('#cliente_email').type('cagamez@gmail.com');
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        //Debes aceptar la Política de Tratamiento de Datos.
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox > .custom_checkbox_container').click();
        cy.get('#form_registro_footer > .line3-2 > .error-nn').should('be.visible','DEBES RELLENAR TODOS LOS CAMPOS OBLIGATORIOS');
    })
})