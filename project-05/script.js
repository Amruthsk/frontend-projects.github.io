// wave effect span
const labels = document.querySelectorAll('.form-control label')//get all the lables

//using the list of labels

labels.forEach(label =>{
    label.innerHTML = label.innerText
                      .split('')
                      .map((letter, idx) => `<span
                       style="transition-delay:${idx * 50}ms">${letter}</span>`)
                      .join('')
                         
})