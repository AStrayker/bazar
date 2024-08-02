document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

const addFieldButton = document.getElementById('addFieldButton');
const additionalFields = document.getElementById('additionalFields');
let fieldCount = 0;

addFieldButton.addEventListener('click', () => {
    if (fieldCount < 15) {
        const fieldDiv = document.createElement('div');
        const fieldName = document.createElement('input');
        fieldName.setAttribute('type', 'text');
        fieldName.setAttribute('placeholder', 'Назва поля');

        const fieldValue = document.createElement('input');
        fieldValue.setAttribute('type', 'text');
        fieldValue.setAttribute('placeholder', 'Значення');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'X';
        removeButton.addEventListener('click', () => {
            additionalFields.removeChild(fieldDiv);
            fieldCount--;
        });

        fieldDiv.appendChild(fieldName);
        fieldDiv.appendChild(fieldValue);
        fieldDiv.appendChild(removeButton);
        additionalFields.appendChild(fieldDiv);

        fieldCount++;
    }
});
