describe('Login BugBank - Legacy', () => {
    it('Deve fazer login com sucesso', () => {
        cy.visit('https://bugbank.netlify.app');
        cy.xpath('//button[@class="style__ContainerButton-sc-1wsixal-0 ihdmxA button__child"]').click();
        cy.xpath('(//input[@name="email"])[2]').type('testesemsaldo@gmail.com');
        cy.xpath('(//input[@name="name"])[1]').type('Teste Teste');
        cy.xpath('(//input[@class="input__default"])[5]').type('1010');
        cy.xpath('(//input[@name="passwordConfirmation"])[1]').type('1010');
        cy.xpath('(//button[@type="submit" and contains(text(), "Cadastrar")])[1]').click();
        cy.get('#modalText').should('contain.text', 'foi criada com sucesso');
        cy.get('#btnCloseModal').click();
        cy.get(':nth-child(1) > [name="email"]').type('testesemsaldo@gmail.com');
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]')
            .type('1010');
        cy.get('.otUnI').click()
        cy.get('.home__ContainerText-sc-1auj767-7 > :nth-child(2)').should('contain.text', 'bem vindo ao BugBank :)');
    });
});