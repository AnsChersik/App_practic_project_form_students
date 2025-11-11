export function createForm() {
    const form = document.createElement('form')
    const inputName = document.createElement('input')
    const inputSurname = document.createElement('input')
    const inputMiddleName = document.createElement('input')
    const inputDate = document.createElement('input')
    const inputYearStart = document.createElement('input')
    const inputFaculty = document.createElement('input')
    const button = document.createElement('button')

    const pName = document.createElement('p')
    const pSurname = document.createElement('p')
    const pMiddleName = document.createElement('p')
    const pDate = document.createElement('p')
    const pYearStart = document.createElement('p')
    const pFaculty = document.createElement('p')

    const pErrorName = document.createElement('p')
    const pErrorSurname = document.createElement('p')
    const pErrorMiddleName = document.createElement('p')
    const pErrorDate = document.createElement('p')
    const pErrorYearStart = document.createElement('p')
    const pErrorFaculty = document.createElement('p')

    pErrorName.classList.add('pError')
    pErrorSurname.classList.add('pError')
    pErrorMiddleName.classList.add('pError')
    pErrorDate.classList.add('pError')
    pErrorYearStart.classList.add('pError')
    pErrorFaculty.classList.add('pError')

    form.classList.add('form')
    inputName.classList.add('formInput')
    inputSurname.classList.add('formInput')
    inputMiddleName.classList.add('formInput')
    inputDate.classList.add('formInput')
    inputYearStart.classList.add('formInput')
    inputFaculty.classList.add('formInput')
    button.classList.add('formButton')

    inputDate.type = 'date'

    pName.classList.add('p')
    pSurname.classList.add('p')
    pMiddleName.classList.add('p')
    pDate.classList.add('p')
    pYearStart.classList.add('p')
    pFaculty.classList.add('p')

    pName.innerHTML = "Введите имя"
    pSurname.innerHTML = "Введите фамилию"
    pMiddleName.innerHTML = "Введите отчество"
    pDate.innerHTML = "Введите дату рождения"
    pYearStart.innerHTML = "Введите год начала обучения"
    pFaculty.innerHTML = "Введите факультет"

    button.textContent = "Добавить"

    form.append(pName)
    form.append(inputName)
    form.append(pErrorName)

    form.append(pSurname)
    form.append(inputSurname)
    form.append(pErrorSurname)

    form.append(pMiddleName)
    form.append(inputMiddleName)
    form.append(pErrorMiddleName)

    form.append(pDate)
    form.append(inputDate)
    form.append(pErrorDate)

    form.append(pYearStart)
    form.append(inputYearStart)
    form.append(pErrorYearStart)

    form.append(pFaculty)
    form.append(inputFaculty)
    form.append(pErrorFaculty)

    form.append(button)

    return {
        form,
        pName,
        inputName,
        pErrorName,
        pSurname,
        inputSurname,
        pErrorSurname,
        pMiddleName,
        inputMiddleName,
        pErrorMiddleName,
        pDate,
        inputDate,
        pErrorDate,
        pYearStart,
        inputYearStart,
        pErrorYearStart,
        pFaculty,
        inputFaculty,
        pErrorFaculty,
        button
    }
}