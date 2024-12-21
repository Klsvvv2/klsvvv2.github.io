const items = [
    { name: "Мистический меч", img: "https://i.pinimg.com/736x/38/29/80/3829806a2389108a1de6c1869dccaafd.jpg", xp: 50 },
    { name: "Серебрянный щит", img: "https://thumbs.dreamstime.com/b/magic-amulet-all-seeing-eye-mystic-alchemy-spirituality-tattoo-art-isolated-vector-print-magic-amulet-all-seeing-eye-221115222.jpg", xp: 40 },
    { name: "Мистический амулет", img: "https://www.pmtarot.com/pic/jewelry/07456.jpg", xp: 30 },
    { name: "Какая то фигня", img: "https://avatars.mds.yandex.net/i?id=c16be8a16e262395f73f50a3484d2afb70503fe7-9154408-images-thumbs&n=13", xp: 20 },
    { name: "Яйцо Дракона", img: "https://i.pinimg.com/736x/0b/04/d7/0b04d7f67d836af867c4192699773c52.jpg", xp: 70 },
    { name: "Золотые монеты", img: "https://avatars.mds.yandex.net/i?id=9dd377147a70782df6b66e720d795209c0382adb-12460761-images-thumbs&n=13", xp: 10 },
    { name: "Редкий камень", img: "https://i.pinimg.com/originals/f8/05/e1/f805e18cfe551ffc2dc9bbc022218fd5.jpg", xp: 60 }
];

const specialBoxItems = [
    { name: "Крушитель", img: "https://yandex-images.clstorage.net/WWw5g4164/75622cgQ/dguedAkSFH-jKYxQX6edOa-aBT3agfh9-hFcyrGaV6AwdtM7qHUsomXMO5FS0zFlw3FGitDloDmVpuWZvFloMdMPayA8FqGb0yndFO8DXJlum1H8DrCsXGpRKVpxLCE3t0GAqR7Xq4WSOO6EMsMwxHJlFTkUg8QJo1AEns2Jj3W2u_62GGMk2RE4zaXtNy-qnIlRHmgh_l2tAMxMVn6CZYQhsHls9prnoEkOx3Oxw5ETtTebgmBlOyBhJ648iq3GRtnNZZnhh9sCmZ-lHZbfSJ-bc6was4wN_wL9v9ZOcObns0BJfPfplCDL7cYw4sIh4BdWqDOT9RuBgGVfjAoMJ8coTWYqIHXYUuifV911TpiumpB_uJIurX_wjb4UPbA0BRNgGZ2nWxdg6Q4FcLNQUAJ0dinz0CVb4zP1r-3JndZ2KH0HaCAV6kEbPZe_B6xKTOlxXWpB_62e4R0vd22y9qQjUMrsplsHgDgc9_JA8jHRtiQJQmBHGTNAFF5_yfyFljpPVBlxllrgaVxknNSPqx6aozx7od-uzODO3kbvYZaFIgDIjRdK10F7n5Xj4XOzEnVG2dCRhBjiQdaNvQmPlCS5zWXJ0Uer8whd1OwWv2hMuOLcO-LPH4xgrA90rQGnVHKjikyWSUQTiW3F4AOTkjJ3FPrBs7cJc4IW3y86_6eWCnwWC-OlK6FKT6e_ZZ8bH1jSvxnCfg_NAkxd1R1wtPdys0suV7hUA-n-RvChozOjhAb5wtPXWYMz5v-tCewmRzhNJNkxlGrC6s3EnnWfec-Lk59Kco68XrP8L8ZMU1X10rMI7Sd5t_P7DhSS4OAio4ckG_JBFYqTY8a-TXqMpcZ4nFeoUHXqAWq-VawlXtvNS5HP2_JsP69Drw4FnlH2BjNwSf1USdQAylzX4ZDzwmPnBmjA0fRoQ4GkT7zbz8SliG33iXB0yMHqvzbOpb1onQgAj6twH58vMr3MNVziY", xp: 100 },
    { name: "СУ-130ПМ", img: "https://i.ytimg.com/vi/JjXUR0yACYs/maxresdefault.jpg", xp: 80 },
    { name: "Lowe", img: "https://avatars.dzeninfra.ru/get-zen_doc/3524431/pub_6004f3a1d0d4386c9fb940d6_60050171fd62ee0689d4fed7/scale_1200", xp: 120 },
    { name: "Super Conqueror", img: "https://i.ytimg.com/vi/51bpLpAGcls/maxresdefault.jpg", xp: 90 },
    { name: "Фигня", img: "https://avatars.mds.yandex.net/i?id=c16be8a16e262395f73f50a3484d2afb70503fe7-9154408-images-thumbs&n=13", xp: 150 },
    { name: "Т22 СР", img: "https://avatars.mds.yandex.net/i?id=cf6e7c97fa5d52b387b43bdb4a796366_l-5232238-images-thumbs&n=13", xp: 110 },
];


// Игрок
let inventory = [];
let level = 1;
let xp = 0;
const xpToNextLevel = 100;

// Элементы страницы
const resultMessage = document.getElementById("result-message");
const inventoryList = document.getElementById("inventory-list");
const levelDisplay = document.getElementById("level");
const xpDisplay = document.getElementById("xp");
const xpToNextDisplay = document.getElementById("xp-to-next");

// Звуки
const openSound = document.getElementById("open-sound");
const rewardSound = document.getElementById("reward-sound");

// Загрузка данных из локального хранилища
window.onload = () => {
    const savedInventory = JSON.parse(localStorage.getItem("inventory"));
    const savedLevel = localStorage.getItem("level");
    const savedXp = localStorage.getItem("xp");

    if (savedInventory) inventory = savedInventory;
    if (savedLevel) level = parseInt(savedLevel);
    if (savedXp) xp = parseInt(savedXp);

    updateLevelDisplay();
    updateInventory();
};

// Открытие коробки
function openBox(boxName) {
    openSound.play();
    resultMessage.textContent = `Открытие ${boxName}...`;

    setTimeout(() => {
        let randomItem;

        // Выбираем предмет в зависимости от названия коробки
        if (boxName === "Коробка Обычная") {
            randomItem = items[Math.floor(Math.random() * items.length)];
        } else if (boxName === "Коробка Редкая") {
            randomItem = items[Math.floor(Math.random() * items.length)];
        } else if (boxName === "Коробка Суперская") {
            randomItem = items[Math.floor(Math.random() * items.length)];
        } else if (boxName === "Мистический Танковый контейнер") {
            randomItem = specialBoxItems[Math.floor(Math.random() * specialBoxItems.length)];
        }

        // Показать награду
        resultMessage.innerHTML = `🎉 Получено: <strong>${randomItem.name}</strong>!`;
        rewardSound.play();

        // Добавляем предмет в инвентарь
        inventory.push(randomItem);
        updateInventory();

        // Добавляем опыт
        gainXp(randomItem.xp);

    }, 2000); // Имитация задержки
}


// Обновление уровня
function gainXp(amount) {
    xp += amount;

    if (xp >= xpToNextLevel) {
        level++;
        xp -= xpToNextLevel;
    }

    saveProgress();
    updateLevelDisplay();
}

// Обновление инвентаря
function updateInventory() {
    inventoryList.innerHTML = ""; // Очищаем список

    inventory.forEach((item, index) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            ${item.name}
            <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
        `;
        inventoryList.appendChild(li);
    });

    saveProgress();
}

// Удаление предмета из инвентаря
function removeItem(index) {
    inventory.splice(index, 1);
    updateInventory();
}

// Обновление отображения уровня
function updateLevelDisplay() {
    levelDisplay.textContent = level;
    xpDisplay.textContent = xp;
    xpToNextDisplay.textContent = xpToNextLevel;
}

// Сохранение прогресса
function saveProgress() {
    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("level", level);
    localStorage.setItem("xp", xp);
}


// Уведомление о повышении уровня
function showLevelUpNotification() {
    const notification = document.getElementById("level-up-notification");
    notification.classList.remove("hidden"); // Показываем уведомление

    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
        notification.classList.add("hidden");
    }, 3000);
}

// Обновление уровня (с добавлением уведомления)
function gainXp(amount) {
    xp += amount;

    if (xp >= xpToNextLevel) {
        level++;
        xp -= xpToNextLevel;
        showLevelUpNotification(); // Показываем уведомление о новом уровне
    }

    saveProgress();
    updateLevelDisplay();
}
