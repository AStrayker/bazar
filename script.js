            const input2 = document.createElement('input');
            input2.type = 'text';
            input2.placeholder = 'Інформація';
            input2.name = 'extra_field_info';

            const removeButton = document.createElement('button');
            removeButton.type = 'button';
            removeButton.textContent = 'Видалити';
            removeButton.addEventListener('click', () => {
                extraField.remove();
            });

            extraField.appendChild(input1);
            extraField.appendChild(input2);
            extraField.appendChild(removeButton);
            extraFieldsContainer.appendChild(extraField);
        } else {
            alert('Максимум 15 додаткових полів');
        }
    });

    document.getElementById('ad-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Форма відправлена!');
        // Здесь можно добавить обработку данных формы
    });
});
