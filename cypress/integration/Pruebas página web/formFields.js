describe('Confirmación de mensaje de un campo obligatorio', function() {
    it('Ir a la página seven-seven', function () {
        cy.visit('/');
        cy.get('.cerrarpopup').click();
    })
    it('Ingresando solo el email', function() {
        cy.get('#cliente_email').type('cagamez@gmail.com');
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        //Debe aceptar la Política de Tratamiento de Datos
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').check({ force: true });
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        cy.get('#form_registro_footer > .line3-2').contains('DEBES RELLENAR TODOS LOS CAMPOS OBLIGATORIOS.');
        cy.get('#cliente_email').type('cagamez@gmail.com').clear();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').uncheck({ force: true });
    })
    it('Ingresando solo el nombre', function() {
        cy.get('#firstName').type('Camilo');
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        //Debe aceptar la Política de Tratamiento de Datos
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').check({ force: true });
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        cy.get('#form_registro_footer > .line3-2').contains('DEBES RELLENAR TODOS LOS CAMPOS OBLIGATORIOS.');
        cy.get('#firstName').type('Camilo').clear();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').uncheck({ force: true });
    })
    it('Ingresando solo el apellido', function() {
        cy.get('#lastName').type('Agamez');
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        //Debe aceptar la Política de Tratamiento de Datos
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').check({ force: true });
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        cy.get('#form_registro_footer > .line3-2').contains('DEBES RELLENAR TODOS LOS CAMPOS OBLIGATORIOS.');
        cy.get('#lastName').type('Agamez').clear();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').uncheck({ force: true });
    })
    it('Ingresando solo el celular', function() {
        cy.get('#cliente_celular').type('2345678');
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        //Debe aceptar la Política de Tratamiento de Datos
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').check({ force: true });
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        cy.get('#form_registro_footer > .line3-2').contains('DEBES RELLENAR TODOS LOS CAMPOS OBLIGATORIOS.');
        cy.get('#cliente_celular').type('2345678').clear();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').uncheck({ force: true });
    })
    it('Ingresando solo la cédula', function() {
        cy.get('#document-type').select('Cédula de Ciudadanía');
        cy.get('#cliente_documento').type('123456987');
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        //Debe aceptar la Política de Tratamiento de Datos
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').check({ force: true });
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        cy.get('#form_registro_footer > .line3-2').contains('DEBES RELLENAR TODOS LOS CAMPOS OBLIGATORIOS.');
        cy.get('#document-type').select('Tipo de documento*');
        cy.get('#cliente_documento').type('123456987').clear();
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').uncheck({ force: true });
    })
    it('Ingresando solo la fecha de nacimiento', function() {
        cy.get('#dia').select('8');
        cy.get('#mes').select('Agosto');
        cy.get('#anio').select('2000');
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        //Debe aceptar la Política de Tratamiento de Datos
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').check({ force: true });
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        cy.get('#form_registro_footer > .line3-2').contains('DEBES RELLENAR TODOS LOS CAMPOS OBLIGATORIOS.');
        cy.get('#dia').select('Día');
        cy.get('#mes').select('Mes');
        cy.get('#anio').select('Año');
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').uncheck({ force: true });
    })
    it('Autorizando solo el tratamiento de datos', function() {
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').check({ force: true });
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        cy.get('#form_registro_footer > .line3-2').contains('DEBES RELLENAR TODOS LOS CAMPOS OBLIGATORIOS.');
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').uncheck({ force: true });
    })
    it('Ingresando solo el género', function() {
        cy.get('#male').click();
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        //Debe aceptar la Política de Tratamiento de Datos
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').check({ force: true });
        cy.get('#form_registro_footer > :nth-child(12) > #registro').click();
        cy.get('#form_registro_footer > .line3-2').contains('DEBES RELLENAR TODOS LOS CAMPOS OBLIGATORIOS.');
        cy.get('#form_registro_footer > :nth-child(10) > .checkbox').find('[type="checkbox"]').uncheck({ force: true });
    })
})