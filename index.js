function createForm() {
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

function createH1(text) {
    const h1 = document.createElement('h1')
    h1.textContent = text
    h1.classList.add('h1')
    return h1
}

function createDiv() {
    const div = document.createElement('div')
    return div
}

function createTable() {
    const table = document.createElement('table')
    table.classList.add('table')
    return table
}

function createHeaderTable() {
    const tr = document.createElement('tr')
    tr.classList.add('tr')

    const thFIO = document.createElement('th')
    const thFacultiy = document.createElement('th')
    const thDate = document.createElement('th')
    const thYearsStudy = document.createElement('th')

    thFIO.classList.add('th')
    thFIO.classList.add('buttonFio')
    thFacultiy.classList.add('th')
    thDate.classList.add('th')
    thYearsStudy.classList.add('th')

    thFIO.innerHTML = "ФИО"
    thFacultiy.innerHTML = "Факультет"
    thDate.innerHTML = "Дата рождения и возраст"
    thYearsStudy.innerHTML = "Годы обучения и номер курса"

    tr.append(thFIO)
    tr.append(thFacultiy)
    tr.append(thDate)
    tr.append(thYearsStudy)

    return {
        tr,
        thFIO,
        thFacultiy,
        thDate,
        thYearsStudy
    }
}

function createBodyTable() {
    const bodyTable = document.createElement('tbody')
    bodyTable.classList.add('bodyTable')
    return bodyTable
}

function createLineTable(name, surname, middleName, date, yearsStudy, facultiy) {
    const tr = document.createElement('tr')
    tr.classList.add('tr')

    const tdFIO = document.createElement('td')
    const tdFacultiy = document.createElement('td')
    const tdDate = document.createElement('td')
    const tdYearsStudy = document.createElement('td')

    tdFIO.classList.add('td')
    tdFacultiy.classList.add('td')
    tdDate.classList.add('td')
    tdYearsStudy.classList.add('td')

    const FIO = String(name) + " " + String(surname) + " " + String(middleName)
    const today = new Date();
    const birthDate = new Date(date);

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    const coursDate = new Date(yearsStudy);

    let cours = today.getFullYear() - (coursDate.getFullYear() - 1);

    let yearsAllStudy;

    if (cours == 4 && coursDate.getMonth() + 1 > 8) {
        cours = 'Закончил'
        yearsAllStudy = Number(yearsStudy) + 4
    } else if (cours > 4) {
        cours = 'Закончил'
        yearsAllStudy = Number(yearsStudy) + 4
    } else {
        yearsAllStudy = Number(yearsStudy) + cours
        cours = String(cours) + " курс"
    }

    const dateTable = String(date) + " (" + String(age) + " лет)"
    const dateCours = String(yearsStudy) + "-" + String(yearsAllStudy) + " (" + String(cours) + ")"

    tdFIO.innerHTML = FIO
    tdFacultiy.innerHTML = facultiy
    tdDate.innerHTML = dateTable
    tdYearsStudy.innerHTML = dateCours

    tr.append(tdFIO)
    tr.append(tdFacultiy)
    tr.append(tdDate)
    tr.append(tdYearsStudy)

    return {
        tr,
        tdFIO,
        tdFacultiy,
        tdDate,
        tdYearsStudy
    }
}

function saveToLocalStorage(arr) {
    localStorage.setItem('Students', JSON.stringify(arr));
}



function createApp() {

    const container = document.getElementById('Student')

    const divTableStudent = createDiv()
    divTableStudent.classList.add('tableDiv')
    container.append(divTableStudent)

    const nameTable = createH1("Таблица студентов")
    divTableStudent.append(nameTable)

    const tableStudent = createTable()
    divTableStudent.append(tableStudent)

    const tableHeaderformStudent = createHeaderTable()
    tableStudent.append(tableHeaderformStudent.tr)

    const tableBodyStudents = createBodyTable()
    tableStudent.append(tableBodyStudents)











    const divFormStudent = createDiv()
    divFormStudent.classList.add('formDiv')
    container.append(divFormStudent)

    const nameForm = createH1("Регистрация студента")
    divFormStudent.append(nameForm)

    const formStudent = createForm()
    divFormStudent.append(formStudent.form)

    let arrayStudentInfo = JSON.parse(localStorage.getItem('Students')) || []

    arrayStudentInfo.forEach((element) => {
        const lineTable = createLineTable(element.nameStudent, element.surnameStudent, element.middleNameStudent, element.dateStudent, element.yearStartStudent, element.facultyStudent)
        tableBodyStudents.append(lineTable.tr)
    })

    tableHeaderformStudent.thFIO.addEventListener('click', (event) => {
    })


    formStudent.button.addEventListener('click', (event) => {
        event.preventDefault()

        const birthDate = new Date(formStudent.inputDate.value)
        const yearStartNumber = Number(formStudent.inputYearStart.value)
        const today = new Date()
        const todayYear = today.getFullYear()

        let flagName = (formStudent.inputName.value.trim() !== '') ? true : false
        let flagSurname = (formStudent.inputSurname.value.trim() !== '') ? true : false
        let flagMiddleName = (formStudent.inputMiddleName.value.trim() !== '') ? true : false
        let flagDate = (formStudent.inputDate.value.trim() !== '' && birthDate.getFullYear() >= 1900 && birthDate.getFullYear() <= todayYear) ? true : false
        let flagYearStart = (formStudent.inputYearStart.value.trim() !== '' && yearStartNumber >= 2000 && yearStartNumber <= todayYear) ? true : false
        let flagFaculty = (formStudent.inputFaculty.value.trim() !== '') ? true : false

        if ((flagName && flagSurname && flagMiddleName && flagDate && flagYearStart && flagFaculty) &&
            (birthDate.getFullYear() >= 1900 && birthDate.getFullYear() <= todayYear) &&
            (yearStartNumber >= 2000 && yearStartNumber <= todayYear)) {
            const objectinfoStident = {
                nameStudent: formStudent.inputName.value,
                surnameStudent: formStudent.inputSurname.value,
                middleNameStudent: formStudent.inputMiddleName.value,
                dateStudent: formStudent.inputDate.value,
                yearStartStudent: formStudent.inputYearStart.value,
                facultyStudent: formStudent.inputFaculty.value
            }

            arrayStudentInfo.push(objectinfoStident)

            const lineTableStudent = createLineTable(objectinfoStident.nameStudent, objectinfoStident.surnameStudent, objectinfoStident.middleNameStudent, objectinfoStident.dateStudent, objectinfoStident.yearStartStudent, objectinfoStident.facultyStudent)
            tableBodyStudents.append(lineTableStudent.tr)

            formStudent.inputName.value = ''
            formStudent.inputSurname.value = ''
            formStudent.inputMiddleName.value = ''
            formStudent.inputDate.value = ''
            formStudent.inputYearStart.value = ''
            formStudent.inputFaculty.value = ''

            saveToLocalStorage(arrayStudentInfo)

            formStudent.inputName.style.borderColor = 'black'
            formStudent.pErrorName.textContent = ''

            formStudent.inputSurname.style.borderColor = 'black'
            formStudent.pErrorSurname.textContent = ''

            formStudent.inputMiddleName.style.borderColor = 'black'
            formStudent.pErrorMiddleName.textContent = ''

            formStudent.inputDate.style.borderColor = 'black'
            formStudent.pErrorDate.textContent = ''

            formStudent.inputYearStart.style.borderColor = 'black'
            formStudent.pErrorYearStart.textContent = ''

            formStudent.inputFaculty.style.borderColor = 'black'
            formStudent.pErrorFaculty.textContent = ''
        } else {
            if (flagName == false) {
                formStudent.inputName.style.borderColor = 'red'
                formStudent.pErrorName.innerHTML = 'Введите имя'
                formStudent.pErrorName.style.color = 'red'
            } else {
                formStudent.inputName.style.borderColor = 'black'
                formStudent.pErrorName.textContent = ''
            }
            if (flagSurname == false) {
                formStudent.inputSurname.style.borderColor = 'red'
                formStudent.pErrorSurname.innerHTML = 'Введите фамилию'
                formStudent.pErrorSurname.style.color = 'red'
            } else {
                formStudent.inputSurname.style.borderColor = 'black'
                formStudent.pErrorSurname.textContent = ''
            }
            if (flagMiddleName == false) {
                formStudent.inputMiddleName.style.borderColor = 'red'
                formStudent.pErrorMiddleName.innerHTML = 'Введите отчество'
                formStudent.pErrorMiddleName.style.color = 'red'
            } else {
                formStudent.inputMiddleName.style.borderColor = 'black'
                formStudent.pErrorMiddleName.textContent = ''
            }
            if (flagDate == false) {
                if (birthDate.getFullYear() < 1900 || birthDate.getFullYear() > todayYear) {
                    formStudent.inputDate.style.borderColor = 'red'
                    formStudent.pErrorDate.innerHTML = 'Введите корректную дату больше 1900 и до нашего года'
                    formStudent.pErrorDate.style.color = 'red'
                } else {
                    formStudent.inputDate.style.borderColor = 'red'
                    formStudent.pErrorDate.innerHTML = 'Введите дату'
                    formStudent.pErrorDate.style.color = 'red'
                }
            } else {
                formStudent.inputDate.style.borderColor = 'black'
                formStudent.pErrorDate.textContent = ''
            }
            if (flagYearStart == false) {
                formStudent.inputYearStart.style.borderColor = 'red'
                if (yearStartNumber == '') {
                    formStudent.pErrorYearStart.innerHTML = 'Введите год начала обучения'
                }
                else if (yearStartNumber < 2000 || yearStartNumber > todayYear) {
                    formStudent.pErrorYearStart.innerHTML = 'Введите корректный год от 2000-ых гг начала обучения'
                }
                else {
                    formStudent.pErrorYearStart.innerHTML = 'Введите корректный год начала обучения'
                }
                formStudent.pErrorYearStart.style.color = 'red'
            }
            else {
                formStudent.inputYearStart.style.borderColor = 'black'
                formStudent.pErrorYearStart.textContent = ''
            }
            if (flagFaculty == false) {
                formStudent.inputFaculty.style.borderColor = 'red'
                formStudent.pErrorFaculty.innerHTML = 'Введите факультет'
                formStudent.pErrorFaculty.style.color = 'red'
            } else {
                formStudent.inputFaculty.style.borderColor = 'black'
                formStudent.pErrorFaculty.textContent = ''
            }
        }
    })

}

document.addEventListener('DOMContentLoaded', createApp)



