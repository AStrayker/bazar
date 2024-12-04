function deleteAd(adId) {
    const adRef = ref(database, 'ads/' + currentUser.uid + '/' + adId);
    remove(adRef).then(() => {
        alert('Объявление удалено!');
        window.location.href = 'ads.html'; // Перенаправление на страницу с объявлениями
    }).catch((error) => {
        alert('Ошибка удаления: ' + error.message);
    });
}
