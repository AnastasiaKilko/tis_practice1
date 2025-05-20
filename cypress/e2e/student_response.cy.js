describe('Отклик студента на потребность', () => {
    it('Позитивный тест - отклик студента', () => {

        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type=text]').type('nastyaStudent')
        cy.get('input[type=password]').type('Password1')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()
        cy.url().should('include', '/account/main')

        cy.get('header nav a.header__item span').contains('Потребности').click()
        cy.get('button.vacancy-page-card__button').first().click()
    })
})