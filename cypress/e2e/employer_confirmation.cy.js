describe('Подтверждение отклика работодателем', () => {
    it('Подтверждение отклика работодателем', () => {


        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type=text]').type('testerEmployer')
        cy.get('input[type=password]').type('Password1')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()

        cy.get(':nth-child(5) > .menu-item__item-name').should('be.visible').click()
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > section.responses-page > div.responses-list.responses-page__nav > div > article:nth-child(1) > div.responses-list-item__actions > div:nth-child(1)').should('be.visible').click({ force: true })

    })
})