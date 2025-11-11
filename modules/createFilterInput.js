export function createFilterInput() {
    const divFilter = document.createElement('div')

    const inputFIOfFlter = document.createElement('input')
    const inputFacultuFilter = document.createElement('input')
    const inputYearsStarstFilters = document.createElement('input')
    const inputYearsFinishFilters = document.createElement('input')

    const buttonFilter = document.createElement('button')

    const pFIOfFlter = document.createElement('p')
    const pFacultuFilter = document.createElement('p')
    const pYearsStarstFilters = document.createElement('p')
    const pYearsFinishFilters = document.createElement('p')

    divFilter.classList.add('conteinerFilter')

    inputFIOfFlter.classList.add('input')
    inputFacultuFilter.classList.add('input')
    inputYearsStarstFilters.classList.add('input')
    inputYearsFinishFilters.classList.add('input')

    pFIOfFlter.classList.add('p')
    pFacultuFilter.classList.add('p')
    pYearsStarstFilters.classList.add('p')
    pYearsFinishFilters.classList.add('p')

    buttonFilter.classList.add('buttonFilter')
    buttonFilter.textContent = "Применить фильтр"

    pFIOfFlter.innerHTML = "Введите фильтр для ФИО"
    pFacultuFilter.innerHTML = "Введите фильтр для факультета"
    pYearsStarstFilters.innerHTML = "Введите фильтр для  года начала обучения"
    pYearsFinishFilters.innerHTML = "Введите фильтр для года окончания обучения"

    divFilter.append(pFIOfFlter)
    divFilter.append(inputFIOfFlter)
    divFilter.append(pFacultuFilter)
    divFilter.append(inputFacultuFilter)
    divFilter.append(pYearsStarstFilters)
    divFilter.append(inputYearsStarstFilters)
    divFilter.append(pYearsFinishFilters)
    divFilter.append(inputYearsFinishFilters)
    divFilter.append(buttonFilter)

    return {
        divFilter,
        pFIOfFlter,
        inputFIOfFlter,
        pFacultuFilter,
        inputFacultuFilter,
        pYearsStarstFilters,
        inputYearsStarstFilters,
        pYearsFinishFilters,
        inputYearsFinishFilters,
        buttonFilter
    }
}