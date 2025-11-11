export function createH1(text) {
    const h1 = document.createElement('h1')
    h1.textContent = text
    h1.classList.add('h1')
    return h1
}