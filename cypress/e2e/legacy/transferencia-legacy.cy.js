describe('Transferência BugBank - Legacy', () => {
    it('Deve validar a transferência de uma conta para outra', () => {
        cy.visit('https://bugbank.netlify.app');
        cy.xpath('//button[@class="style__ContainerButton-sc-1wsixal-0 ihdmxA button__child"]').click();
        cy.xpath('(//input[@name="email"])[2]').type('testesemsaldo@gmail.com');
        cy.xpath('(//input[@name="name"])[1]').type('Teste Teste');
        cy.xpath('(//input[@class="input__default"])[5]').type('1010');
        cy.xpath('(//input[@name="passwordConfirmation"])[1]').type('1010');
        cy.xpath('(//button[@type="submit" and contains(text(), "Cadastrar")])[1]').click();
        cy.get('#modalText').should('contain.text', 'foi criada com sucesso');
        cy.get('#modalText')
            .should('contain.text', 'foi criada com sucesso')
            .invoke('text')
            .then((textoCompleto) => {
                const match = textoCompleto.match(/(\d+)-(\d+)/);
                const numeroConta = match[1];
                const digitoConta = match[2];
                cy.wrap(numeroConta).as('numeroConta');
                cy.wrap(digitoConta).as('digitoConta');
                cy.log(`Conta: ${numeroConta} | Dígito: ${digitoConta}`);
            });
        cy.visit('https://bugbank.netlify.app');
        cy.xpath('//button[@class="style__ContainerButton-sc-1wsixal-0 ihdmxA button__child"]').click();
        cy.xpath('(//input[@name="email"])[2]').type('testecomsaldo@gmail.com');
        cy.xpath('(//input[@name="name"])[1]').type('Teste Teste');
        cy.xpath('(//input[@class="input__default"])[5]').type('1010');
        cy.xpath('(//input[@name="passwordConfirmation"])[1]').type('1010');
        cy.xpath('(//*[@id="toggleAddBalance"])[1]').click();
        cy.xpath('(//button[@type="submit" and contains(text(), "Cadastrar")])[1]').click();
        cy.get('#modalText').should('contain.text', 'foi criada com sucesso');
        cy.get('#btnCloseModal').click();
        cy.get(':nth-child(1) > [name="email"]').type('testecomsaldo@gmail.com');
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]')
            .type('1010');
        cy.get('.otUnI').click()
        cy.get('.home__ContainerText-sc-1auj767-7 > :nth-child(2)').should('contain.text', 'bem vindo ao BugBank :)');
        cy.xpath('//span[contains(text(), "1.000,00")]').should('have.text', 'R$\u00a01.000,00');
        cy.get('#btn-TRANSFERÊNCIA').click()
        cy.get('@numeroConta').then((conta) => {
            cy.get('[name="accountNumber"]').type(conta);
        });
        cy.get('@digitoConta').then((digito) => {
            cy.get('[name="digit"]').type(digito);
        });
        cy.get('[name="transferValue"]').type(500)
        cy.get('[name="description"]').type("Transferência Teste")
        cy.get('.style__ContainerButton-sc-1wsixal-0').click()
        cy.get('#modalText').should('have.text', 'Transferencia realizada com sucesso');
        cy.get('#btnCloseModal').click()
        cy.get('#btnExit').click()
        cy.get(':nth-child(1) > [name="email"]').type('testesemsaldo@gmail.com');
        cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > [name="password"]')
        .type('1010');
        cy.get('.otUnI').click()
        cy.get('.home__ContainerText-sc-1auj767-7 > :nth-child(2)').should('contain.text', 'bem vindo ao BugBank :)');
        cy.get('#textBalance > span').should('have.text', 'R$\u00a0500,00');
    });
});