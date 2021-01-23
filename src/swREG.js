export default function swReg() {
    let sw = `${process.env.PUBLIC_URL}/sw.js`;

    if (!navigator.serviceWorker) return;

    navigator.serviceWorker.register(sw).then(function () {
        console.log('Service Worker Registered')
    }).catch(function () {
        console.log("Registration Failed")
    })
}