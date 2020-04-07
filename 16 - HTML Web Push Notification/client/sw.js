self.addEventListener("push", (e) => {
  const data = e.data.json;
  self.registration.showNotification(data.title, {
    body: "Notified by Danny",
    icon:
      "https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png",
  });
});
