var webp = require("webp-converter");

webp.cwebp("assets/old/banner.jpg", "assets/old/banner.webp", "-q 7", function(
  status
) {
  console.log(status);
});

webp.cwebp(
  "assets/old/cloud-drizzle.png",
  "assets/old/cloud-drizzle.webp",
  "-q 7",
  function(status) {
    console.log(status);
  }
);

webp.cwebp("assets/old/logo.png", "assets/old/logo.webp", "-q 7", function(
  status
) {
  console.log(status);
});
webp.cwebp("assets/old/sh.png", "assets/old/sh.webp", "-q 7", function(status) {
  console.log(status);
});

webp.cwebp("assets/old/sh22.jpg", "assets/old/sh22.webp", "-q 7", function(
  status
) {
  console.log(status);
});
