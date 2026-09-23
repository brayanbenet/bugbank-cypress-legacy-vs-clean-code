describe('Cadastro BugBank - Legacy', () => {
    it('Deve cadastrar um usuario com sucesso', () => {
        cy.visit('https://bugbank.netlify.app');
        cy.xpath('//button[@class="style__ContainerButton-sc-1wsixal-0 ihdmxA button__child"]').click();
        cy.wait(5000)
        cy.xpath('(//input[@name="email"])[2]').type('testesemsaldo@gmail.com');
        cy.xpath('(//input[@name="name"])[1]').type('Teste Teste');
        cy.xpath('(//input[@class="input__default"])[5]').type('1010');
        cy.xpath('(//input[@name="passwordConfirmation"])[1]').type('1010');
        cy.xpath('(//button[@type="submit" and contains(text(), "Cadastrar")])[1]').click();
        cy.wait(5000)
        cy.get('#modalText').should('contain.text', 'foi criada com sucesso');
        cy.get('#btnCloseModal').click();
    });
    it('Deve cadastrar um usuario com saldo na conta', () => {
        cy.visit('https://bugbank.netlify.app');
        cy.xpath('//button[@class="style__ContainerButton-sc-1wsixal-0 ihdmxA button__child"]').click();
        cy.wait(5000)
        cy.xpath('(//input[@name="email"])[2]').type('testecomsaldo@gmail.com');
        cy.xpath('(//input[@name="name"])[1]').type('Teste Teste');
        cy.xpath('(//input[@class="input__default"])[5]').type('1010');
        cy.xpath('(//input[@name="passwordConfirmation"])[1]').type('1010');
        cy.xpath('(//*[@id="toggleAddBalance"])[1]').click();
        cy.xpath('(//button[@type="submit" and contains(text(), "Cadastrar")])[1]').click();
        cy.wait(5000)
        cy.get('#modalText').should('contain.text', 'foi criada com sucesso');
        cy.get('#btnCloseModal').click();
    });
});