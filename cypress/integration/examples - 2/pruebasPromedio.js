describe('Average tests', function () {
    var expectedResult = 2.80;
    var expectResultStudent = "Maria Diaz con 3.93";
    beforeEach(function () {
        cy.visit('/Promedio/index.html');
    })
    it ('Let enter text', function() {
        cy.get('#student1').type('Juanito Pérez');
        cy.get('#student2').type('Maria Diaz');
        cy.get('#student3').type('Ana Salazar');
    })
    it ('Do not enter numbers', function() {
        cy.get('#student1').type('0123456789');
        cy.get('#student2').type('0123456789');
        cy.get('#student3').type('0123456789');
    })
    it ('Do not enter symbols', function() {
        cy.get('#student1').type('!·$%&/()=');
        cy.get('#student2').type('!·$%&/()=');
        cy.get('#student3').type('!·$%&/()=');
    })
    it ('Deje ingresar más de 15 caracteres', function() {
        cy.get('#student1').type('asdfghjkloiuytrewqazxcvbnmlñpoiuy').should('asdfghjkloiuytr');
        cy.get('#student2').type('asdfghjkloiuytrewqazxcvbnmlñpoiuy').should('asdfghjkloiuytr');
        cy.get('#student3').type('asdfghjkloiuytrewqazxcvbnmlñpoiuy').should('asdfghjkloiuytr');
    })
    it ('Do not enter numbers greater than 5', function() {
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('66');
        cy.get(':nth-child(2) > :nth-child(3) > .form-control').type('78');
        cy.get(':nth-child(3) > :nth-child(3) > .form-control').type('92');
    })
    it ('The students average', function() {
        cy.get('#student1').type('Juanito Pérez');
        cy.get('#student2').type('Maria Diaz');
        cy.get('#student3').type('Ana Salazar');
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('12');
        cy.get(':nth-child(2) > :nth-child(3) > .form-control').type('45');
        cy.get(':nth-child(3) > :nth-child(3) > .form-control').type('1');
        cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('22');
        cy.get(':nth-child(2) > :nth-child(4) > .form-control').type('35');
        cy.get(':nth-child(3) > :nth-child(4) > .form-control').type('43');
        cy.get(':nth-child(1) > :nth-child(5) > .form-control').type('5');
        cy.get(':nth-child(2) > :nth-child(5) > .form-control').type('38');
        cy.get(':nth-child(3) > :nth-child(5) > .form-control').type('41');
        cy.get('.btn').click();
    })
    it ('The average done is correct', function() {
        cy.get('#student1').type('Juanito Pérez');
        cy.get('#student2').type('Maria Diaz');
        cy.get('#student3').type('Ana Salazar');
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('12');
        cy.get(':nth-child(2) > :nth-child(3) > .form-control').type('45');
        cy.get(':nth-child(3) > :nth-child(3) > .form-control').type('1');
        cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('22');
        cy.get(':nth-child(2) > :nth-child(4) > .form-control').type('35');
        cy.get(':nth-child(3) > :nth-child(4) > .form-control').type('43');
        cy.get(':nth-child(1) > :nth-child(5) > .form-control').type('5');
        cy.get(':nth-child(2) > :nth-child(5) > .form-control').type('38');
        cy.get(':nth-child(3) > :nth-child(5) > .form-control').type('41');
        cy.get('.btn').click();
        cy.get(':nth-child(1) > :nth-child(6) > .form-control').should('have', expectedResult);
    })
    it ('The best student', function() {
        cy.get('#student1').type('Juanito Pérez');
        cy.get('#student2').type('Maria Diaz');
        cy.get('#student3').type('Ana Salazar');
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('12');
        cy.get(':nth-child(2) > :nth-child(3) > .form-control').type('45');
        cy.get(':nth-child(3) > :nth-child(3) > .form-control').type('1');
        cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('22');
        cy.get(':nth-child(2) > :nth-child(4) > .form-control').type('35');
        cy.get(':nth-child(3) > :nth-child(4) > .form-control').type('43');
        cy.get(':nth-child(1) > :nth-child(5) > .form-control').type('5');
        cy.get(':nth-child(2) > :nth-child(5) > .form-control').type('38');
        cy.get(':nth-child(3) > :nth-child(5) > .form-control').type('41');
        cy.get('.btn').click();
        cy.get(':nth-child(1) > :nth-child(6) > .form-control').should('have', expectResultStudent);
    })
    it("Do not calculate the average without the student's name", function () {
        cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('12');
        cy.get(':nth-child(2) > :nth-child(3) > .form-control').type('45');
        cy.get(':nth-child(3) > :nth-child(3) > .form-control').type('1');
        cy.get(':nth-child(1) > :nth-child(4) > .form-control').type('22');
        cy.get(':nth-child(2) > :nth-child(4) > .form-control').type('35');
        cy.get(':nth-child(3) > :nth-child(4) > .form-control').type('43');
        cy.get(':nth-child(1) > :nth-child(5) > .form-control').type('5');
        cy.get(':nth-child(2) > :nth-child(5) > .form-control').type('38');
        cy.get(':nth-child(3) > :nth-child(5) > .form-control').type('41');
        cy.get('.btn').click();
    })
})