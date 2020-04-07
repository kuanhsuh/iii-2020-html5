const publicVapidKey =
  "BPISvkpNgaUW4xJ178jAc3XDFUbtXx1ULS55h7ugX1-ZSWtmzvaNziiDMD5KACMtYfooG-3k71q_Ps0tY16jPOs";

// check service worker
if ("serviceWorker" in navigator) {
  send().catch((err) => console.log(err));
}

async function send() {
  console.log("register sw");
  const register = await navigator.serviceWorker.register("/sw.js", {
    scope: "/",
  });
  console.log("finished sw register");
  console.log("push");
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(publicVapidKey),
  });
  console.log("push registered...");
  console.log("sending push....");

  await fetch("/subscribe", {
    method: "POST",
    body: JSON.stringify(subscription),
    headers: {
      "content-type": "application/json",
    },
  });
  console.log("push sent");
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
