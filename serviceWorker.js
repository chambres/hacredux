const staticDevCoffee = "hacredux-v1"

const assets = [
    "/",
    "/index.html",
    "./icon.png",
    "./index.html",
    "./loading.css",
    "./loading.html",
    "./login.html",
    "./manifest.json",
    "./serviceWorker.js",
    "./css/.DS_Store",
    "./css/bootstrap.min.css",
    "./css/style.css",
    "./fonts/.DS_Store",
    "./home_assets/style.css",
    "./home_assets/js/script.js",
    "./images/app.483226f18e74628430c4.js",
    "./images/bg.jpg",
    "./js/bootstrap.min.js",
    "./js/jquery.min.js",
    "./js/main.js",
    "./js/popper.js",
    "./scss/style.scss",
    "./splashscreens/iphone5_splash.png",
	  "./splashscreens/iphone6_splash.png",
	  "./splashscreens/iphoneplus_splash.png",
	  "./splashscreens/iphonex_splash.png",
	  "./splashscreens/iphonexr_splash.png",
	  "./splashscreens/iphonexsmax_splash.png",
	  "./splashscreens/ipad_splash.png" ,
	  "./splashscreens/ipadpro1_splash.png" ,
	  "./splashscreens/ipadpro3_splash.png" ,
	  "./splashscreens/ipadpro2_splash.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })