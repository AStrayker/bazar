document.addEventListener('DOMContentLoaded', () => {
    const photoInput = document.getElementById('photo');
    const photoPreview = document.getElementById('photoPreview');
    const toggleThemeButton = document.getElementById('toggleTheme');
    const body = document.body;

    const updatePhotoPreview = () => {
        photoPreview.innerHTML = '';
        Array.from(photoInput.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                photoPreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    };

    photoInput.addEventListener('change', updatePhotoPreview);

    toggleThemeButton.addEventListener('click', () => {
        if (body.style.backgroundColor === 'black') {
            body.style.backgroundColor = 'white';
            body.style.color = 'black';
        } else {
            body.style.backgroundColor = 'black';
            body.style.color = 'white';
        }
    });

    const addFieldButton = document.getElementById('addField');
    const additionalFieldsContainer = document.getElementById('additionalFields');

    addFieldButton.addEventListener('click', () => {
        const fieldGroup = document.createElement('div');
        fieldGroup.className = 'additional-field-group';
        fieldGroup.innerHTML = `
            <input type="text" placeholder="Назва поля">
            <input type="text" placeholder="Інформація">
            <button type="button" class="remove-field">×</button>
        `;
        additionalFieldsContainer.insertBefore(fieldGroup, addFieldButton);

        const removeButton = fieldGroup.querySelector('.remove-field');
        removeButton.addEventListener('click', () => {
            additionalFieldsContainer.removeChild(fieldGroup);
        });
    });
});
