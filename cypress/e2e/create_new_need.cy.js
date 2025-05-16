describe('Создание новой потребности работодателем', () => {
    it('Позитивный тест: Создание новой потребности работодателем', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type="text"]').type('testerEmployer')
        cy.get('input[type="password"]').type('Password1')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()

        cy.get(':nth-child(6) > .menu-item__item-name').should('be.visible').click()
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(7) > section > div > div.needs-block__filters-wrapper > button').click()

        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div > input').type('Решатель проблем')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div.salary-field__wrapper.salary-field__wrapper--bottom > div > :first-child').click()
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(1) > div > input').type('100')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div > input').type('1000')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(3) > div > textarea').type('Взрослый человек для не очень взрослого человека. Помогает решить любую проблему разных уровней сложности.')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(4) > div > textarea').type('Стрессоустойчивость, серьёзность, умность, стрессоустойчивость.')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(5) > div > div > div').click()
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(5) > div > div > div.form-select__items.form-select__items--wrap-top > div:nth-child(3)').click()
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div.form__buttons > button').scrollIntoView().click({force: true})

        cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(7) > section > div > div.infinite-loader.need-list > div:nth-child(1) > div > div.need-item__footer-wrapper > div > div.need-footer__button-wrapper > button.button.button__background-color-green.button__size-small.button__color-white').click()
    })
    it('Негативный тест: Ошибка авторизации - неверный пароль', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type="text"]').type('testerEmployer')
        cy.get('input[type="password"]').type('Password')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()
    })
    it('Негативный тест: Ошибка авторизации - неверный логин', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type="text"]').type('tester#mplo7er')
        cy.get('input[type="password"]').type('Password1')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()
    })
    it('Негативный тест: Ошибка при создании потребности – обязательное поле не заполнено', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type="text"]').type('testerEmployer')
        cy.get('input[type="password"]').type('Password1')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()

        cy.get(':nth-child(6) > .menu-item__item-name').should('be.visible').click()
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(7) > section > div > div.needs-block__filters-wrapper > button').click()

        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div > input').type('Решатель проблем')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div.salary-field__wrapper.salary-field__wrapper--bottom > div > :first-child').click()
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(1) > div > input').type('10000')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div > input').type('100')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div.form__buttons > button').scrollIntoView().click()
    })
    it('Негативный тест: Ошибка при создании потребности – нарушение ограничения по вводу символов', () => {
        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type="text"]').type('testerEmployer')
        cy.get('input[type="password"]').type('Password1')
        cy.get('div[class="login-form__button"] button[type="submit"]').click()

        cy.get(':nth-child(6) > .menu-item__item-name').should('be.visible').click()
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(7) > section > div > div.needs-block__filters-wrapper > button').click()

        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div > input').type('Пусть это будет длинное название какой-то потребности, хоть и бессмысленное. И хотя этого всё ещё недостаточно, я продолжу писать и писать, ведь это всё, что мне остаётся, если я не умею генерировать запросы в поисковых системах, и может, наберу нужное количество символов.')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div.salary-field__wrapper.salary-field__wrapper--bottom > div > :first-child').click()
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(1) > div > input').type('10000000')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div > input').type('100')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(3) > div > textarea').type('ааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааааа')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(4) > div > textarea').type('памагити')
        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div.form__buttons > button').scrollIntoView().click()
    })
})
