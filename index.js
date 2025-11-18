import { createForm } from "./modules/createForm.js"
import { createFilterInput } from "./modules/createFilterInput.js"
import { createH1 } from "./modules/createH1.js"
import { createDiv } from "./modules/createDiv.js"
import { createTable } from "./modules/createTable.js"
import { createHeaderTable } from "./modules/createHeaderTable.js"
import { createBodyTable } from "./modules/createBodyTable.js"
import { createLineTable } from "./modules/createLineTable.js"
import { saveToLocalStorage } from "./modules/saveToLocalStorage.js"


function createH3(text) {
    const h3 = document.createElement('h3')
    h3.textContent = text
    h3.classList.add('h3')
    return h3
}

function createApp() {
    const container = document.getElementById('Student')

    const divFilterStudent = createDiv()
    divFilterStudent.classList.add('FilterSDiv')
    container.append(divFilterStudent)

    const titileFilterStudent = createH1("Фильтрация студентов")
    divFilterStudent.append(titileFilterStudent)

    const filterInputs = createFilterInput()
    divFilterStudent.append(filterInputs.divFilter)

    const divTableStudent = createDiv()
    divTableStudent.classList.add('tableDiv')
    container.append(divTableStudent)

    const nameTable = createH1("Таблица студентов")
    divTableStudent.append(nameTable)

    const titleh3Student = createH3("")
    divTableStudent.append(titleh3Student)

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

    function MessegeH3() {
        if (arrayStudentInfo.length === 0) {
            titleh3Student.innerHTML = 'Таблица пуста. Добавьте первые данные'
        } else {
            titleh3Student.innerHTML = ''
        }
    }

    MessegeH3()

    function renderFilteredData() {
        const filterFIO = filterInputs.inputFIOfFlter.value.toLowerCase()
        const filterFaculty = filterInputs.inputFacultuFilter.value.toLowerCase()
        const filterYearStart = filterInputs.inputYearsStarstFilters.value.trim()
        const filterYearFinish = filterInputs.inputYearsFinishFilters.value.trim()

        tableBodyStudents.innerHTML = ''

        arrayStudentInfo.forEach((element) => {
            const surnameLower = element.surnameStudent.toLowerCase()
            const nameLower = element.nameStudent.toLowerCase()
            const middleLower = element.middleNameStudent.toLowerCase()
            const facultyLower = element.facultyStudent.toLowerCase()

            const fioMatch = surnameLower.includes(filterFIO) || nameLower.includes(filterFIO) || middleLower.includes(filterFIO)
            const facultyMatch = facultyLower.includes(filterFaculty)
            const yearStartMatch = filterYearStart === '' || element.yearStartStudent === filterYearStart
            const yearFinishMatch = filterYearFinish === '' || (Number(element.yearStartStudent) + 4) === Number(filterYearFinish)

            if (fioMatch && facultyMatch && yearStartMatch && yearFinishMatch) {
                const line = createLineTable(
                    element.nameStudent,
                    element.surnameStudent,
                    element.middleNameStudent,
                    element.dateStudent,
                    element.yearStartStudent,
                    element.facultyStudent
                )
                tableBodyStudents.append(line.tr)
            }
        })
    }

    renderFilteredData()

    filterInputs.inputFIOfFlter.addEventListener('input', renderFilteredData)
    filterInputs.inputFacultuFilter.addEventListener('input', renderFilteredData)
    filterInputs.inputYearsStarstFilters.addEventListener('input', renderFilteredData)
    filterInputs.inputYearsFinishFilters.addEventListener('input', renderFilteredData)

    function updateTable() {
        renderFilteredData()
    }

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
            updateTable()
            MessegeH3()

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

    tableHeaderformStudent.thFIO.addEventListener('click', () => {
        arrayStudentInfo.sort((a, b) => {
            const nameA = a.surnameStudent.toLowerCase()
            const nameB = b.surnameStudent.toLowerCase()
            if (nameA < nameB) return -1
            if (nameA > nameB) return 1
            return 0
        })

        saveToLocalStorage(arrayStudentInfo)
        updateTable()
    })

    tableHeaderformStudent.thFacultiy.addEventListener('click', () => {
        arrayStudentInfo.sort((a, b) => {
            const facultyA = a.facultyStudent.toLowerCase()
            const facultyB = b.facultyStudent.toLowerCase()
            if (facultyA < facultyB) return -1
            if (facultyA > facultyB) return 1
            return 0
        })
        saveToLocalStorage(arrayStudentInfo)
        updateTable()
    })

    tableHeaderformStudent.thDate.addEventListener('click', () => {
        arrayStudentInfo.sort((a, b) => {
            const dateA = a.dateStudent.toLowerCase()
            const dateB = b.dateStudent.toLowerCase()
            if (dateA < dateB) return -1
            if (dateA > dateB) return 1
            return 0
        })
        saveToLocalStorage(arrayStudentInfo)
        updateTable()
    })

    tableHeaderformStudent.thYearsStudy.addEventListener('click', () => {
        arrayStudentInfo.sort((a, b) => {
            const yearStartA = a.yearStartStudent.toLowerCase()
            const yearStartB = b.yearStartStudent.toLowerCase()
            if (yearStartA < yearStartB) return -1
            if (yearStartA > yearStartB) return 1
            return 0
        })
        saveToLocalStorage(arrayStudentInfo)
        updateTable()
    })

    filterInputs.buttonFilter.addEventListener('click', () => {
        renderFilteredData()
    })
}

document.addEventListener('DOMContentLoaded', createApp)



