const cacheName = "cacheData";
const resoucesToPreccache = ["/", "index.html", "style.css"];

self.addEventListener("install", event => {
  console.log("Service worker install event");
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        return cache.addAll(resoucesToPreccache);
      })
      .catch(error => {
        console.log("Failed", error);
      })
  );
});

self.addEventListener("activate", () => {
  console.log("Activate");
});

self.addEventListener("fetch", event => {
  console.log("Fetch intercepted for: " + event.request.url);
});
