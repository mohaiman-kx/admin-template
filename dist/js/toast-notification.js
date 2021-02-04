const notification_btn = document.getElementById('submit-notification');
const oo_notification = document.getElementById('o-notification');

notification_btn.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const create_notification = document.createElement('div');

    create_notification.classList.add('toast-notification');

    create_notification.innerHTML = `Your order <span class='o-complate-toast'>#S00052</span> has been fullfilled.`;

    oo_notification.appendChild(create_notification);

    setTimeout(() => {
        create_notification.remove();
    }, 4000);

    console.log('i am working')
}
