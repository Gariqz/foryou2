const messages = [
    "Sebelumnya, aku minta maaf",
    "Belakangan ini rasanya...",
    "Aku jarang reach up kamuu",
    "Eitss...",
    "I'm here to explain it..",
    "Sooo...",
    "Mungkin bisa dibilang..",
    "Belakangan ini cukup hectic",
    "Di satu sisi, minggu ini cukup banyak tugas yaa...",
    "Mulai dari project, lomba, presentasi, dan lain-lain...",
    "Kalo bahas tugas rasanya kamu lebih banyak dan hectic juga yaa...",
    "Makanya aku ga mau terlalu 'highlight' tentang tugas ini...",
    "Pastinya nak pgsd lebih banyak pasti wkwkwk",
    "Kalo boleh jujur...",
    "Kind of burn out",
    "Okeeyy, so the main problem i kinda busy is my fams",
    "Kalo kamu belum tau",
    "Papa aku itu ngidap penyakit jantung",
    "And so yapp...",
    "Dibarengi sama puasa ini juga...",
    "Mama aku cukup kewalahan buat prepare makanan",
    "Entah itu buat buka ataupun sahur",
    "So i'm the one to take care of my dad",
    "Belakangan ini papa lagi dapet sakitnya..",
    "Aku sama mama gantian buat jaga dia",
    "Even aku cuma sebatas mijit dan ngasih obat",
    "Sometimes juga ngurus administratif obat-obatannya",
    "Entah kenapa cukup exhaust ya :)",
    "Gatau apa aku yg gampang cape, apa emang karena lagi puasa",
    "Tapi sehabis doing all that stuff, aku suka langsung ngantuk",
    "Dan yaa, aku langsung tidur biasanya..",
    "Bangun sore, and repeat it again",
    "Oiyaa...",
    "With this situation..",
    "Ofc, papa aku ga lagi di kondisi primanya buat kerja",
    "Again mungkin aku terlalu alay aja",
    "But, i just dont want to put pressure on them...",
    "Rasanya kalo aku sering keluar, bahkan sampai spend out lebih tuh",
    "Kaya aku leave out my 'responsibility' sebagai anaknya",
    "Like, at least aku bisa bantu-bantu di sini",
    "Agak takut juga sih",
    "Tapi jatuhnya kaya aku mengabaikan kamu gini ya :(",
    "Kalo aku ga bisa ngasih perhatian yang cukup, aku minta maaf yaa..",
    "Kalo kondisinya udah better, aku usahain buat spend out more time with you",
    "Oiya mungkin aku ga bisa main sesering dulu deh",
    "Gatau sih (alay lagi nih sumpah)",
    "Mungkin aku bakal kurangin porsi main aku (?)",
    "Ummm... masi sempet dehh harusnya",
    "Aku bisa cut porsi main sama anak-anak hehe",
    "Yapp... sebenernya ada rasa ga enak...",
    "Maksudnya, kaya aku minta uang mulu trus cabut main gituu",
    "Jujur pengen gawe, biar ada pemasukan sendiri :D",
    "YAAAA UDAH AH ALAYYY",
    "dah yaa, intinya minggu depan should be fine again..",
    "but seriously, in my deepest down heart",
    "I felt guilty of the way i'm treating you",
    "Well 'guilty' in the way that i couldn't gave you what you expect",
    "Bukan di kondisi sekarang juga ya, tapi overall",
    "Hehe...",
    "I'm kinda bad at express my own feeling",
    "But i know, as long as i love you",
    "I'd always find a way to make it through",
    "I love you, and i will always will ❤️",
    "maafkan aku yang alay ini yaa hehe 😅",
    "dah yaa, intinya minggu depan should be fine again..",
    "dah yaa, intinya minggu depan should be fine again..",






];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    // const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    // yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}