export function saveToLocalStorage(arr) {
    localStorage.setItem('Students', JSON.stringify(arr));
}