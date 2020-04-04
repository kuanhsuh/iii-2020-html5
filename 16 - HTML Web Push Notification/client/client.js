const publicVapidKey =
  "BJYBGcOMWV015hgejQ40PJX8hRE1flyWx21Kwl7RaErLCU7RpjbQfCmKNzN8ayDxJ_xk-Ih9fs_HcpRvJ5RQCwQ";

// Check Service Worker
if ("serviceWorker" in navigator) {
  send().catch((err) => console.error(err));
}

// Register SW, Register Push, Send Push
async function send() {
  // Register Service Worker
  console.log("register service worker...");
  const register = await navigator.serviceWorker.register("/sw.js", {
    scope: "/",
  });
  console.log("service worker register...");
  // Register Push
  console.log("Register Push...");
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });
  console.log("push Registered...");

  // send push notification
  console.log("sending push...");
  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });
  console.log("Push Sent");
}

function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

registration.pushManager.subscribe({
  userVisibleOnly: true,
  applicationServerKey: convertedVapidKey,
});
