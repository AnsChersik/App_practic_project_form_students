export 
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

    const FIO = String(surname) + " " + String(name) + " " + String(middleName)
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