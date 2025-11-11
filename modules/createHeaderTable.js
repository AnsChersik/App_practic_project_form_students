export function createHeaderTable() {
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