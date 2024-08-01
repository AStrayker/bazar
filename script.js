document.addEventListener('DOMContentLoaded', () => {
    const addFieldButton = document.getElementById('add-field');
    const additionalFieldsContainer = document.getElementById('additional-fields-container');

    addFieldButton.addEventListener('click', () => {
        if (additionalFieldsContainer.children.length < 15) {
            const newField = document.createElement('div');
            newField.classList.add('additional-field');
            newField.innerHTML = `
                <input type="text" name="additional-field-name" placeholder="Назва поля">
                <input type="text" name="additional-field-value" placeholder="Інформація">
                <button type="button" class="remove-field">Видалити</button>
            `;
            additionalFieldsContainer.appendChild(newField);

            newField.querySelector('.remove-field').addEventListener('click', () => {
                newField.remove();
            });
        }
    });
});
