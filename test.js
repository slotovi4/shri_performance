var webp = require("webp-converter");

webp.cwebp(
  "assets/old/newbanner.jpg",
  "assets/old/newbanner.webp",
  "-q 100",
  function(status) {
    console.log(status);
  }
);

/* webp.cwebp(
  "assets/old/cloud-drizzle.png",
  "assets/old/cloud-drizzle.webp",
  "-q 9",
  function(status) {
    console.log(status);
  }
);

webp.cwebp("assets/old/logo.png", "assets/old/logo2.webp", "-q 10", function(
  status
) {
  console.log(status);
});
webp.cwebp("assets/old/sh.png", "assets/old/sh.webp", "-q 9", function(status) {
  console.log(status);
});

webp.cwebp("assets/old/sh22.jpg", "assets/old/sh22.webp", "-q 9", function(
  status
) {
  console.log(status);
});
 */
