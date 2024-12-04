function deleteCompany(companyId) {
    const companyRef = ref(database, 'companies/' + currentUser.uid + '/' + companyId);
    remove(companyRef).then(() => {
        alert('Компания удалена!');
        window.location.href = 'companies.html'; // Перенаправление на страницу с компаниями
    }).catch((error) => {
        alert('Ошибка удаления: ' + error.message);
    });
}
