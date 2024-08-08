// Инициализация Firestore и Storage
var db = firebase.firestore();
var storage = firebase.storage();

// Функция для добавления объявления
function addAd(event) {
    event.preventDefault();

    // Получение значений из формы
    var adTitle = document.getElementById('ad-title').value;
    var adPrice = document.getElementById('ad-price').value;
    var adQuantity = document.getElementById('ad-quantity').value;
    var adUnit = document.getElementById('ad-unit').value;
    var adDescription = document.getElementById('ad-description').value;
    var adSellerName = document.getElementById('ad-seller-name').value;
    var adSellerPhone = document.getElementById('ad-seller-phone').value;
    var adCategory = document.getElementById('ad-category').value;
    var adLocation = document.getElementById('ad-location').value;
    var adAddress = document.getElementById('ad-address').value;

    // Загружаем фото в Firebase Storage и получаем ссылки
    var files = document.getElementById('ad-photos').files;
    var uploadPromises = [];
    var downloadURLs = [];

    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var storageRef = storage.ref('ads/' + file.name);
        var uploadTask = storageRef.put(file);

        uploadPromises.push(
            uploadTask.then((snapshot) => {
                return snapshot.ref.getDownloadURL().then((url) => {
                    downloadURLs.push(url);
                });
            })
        );
    }

    // Сохранение объявления в Firestore после загрузки всех фото
    Promise.all(uploadPromises).then(() => {
        db.collection('ads').add({
            title: adTitle,
            price: adPrice,
            quantity: adQuantity,
            unit: adUnit,
            description: adDescription,
            sellerName: adSellerName,
            sellerPhone: adSellerPhone,
            category: adCategory,
            location: adLocation,
            address: adAddress,
            photos: downloadURLs,
            date: new Date()
        }).then(() => {
            alert('Объявление добавлено успешно!');
            // Очистка формы
            document.getElementById('ad-form').reset();
        }).catch((error) => {
            console.error('Ошибка добавления объявления: ', error);
        });
    });
}

// Обработчик для формы добавления объявления
document.getElementById('ad-form').addEventListener('submit', addAd);
