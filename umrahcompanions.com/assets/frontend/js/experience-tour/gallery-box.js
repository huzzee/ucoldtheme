// Fancy Gallery Box
$(document).ready(function () {
  $(".galleryButton").click(function () {
    const images = [
      { src: "images/desert-sand.jpeg", caption: "Image 1" },
      { src: "images/desert-road.jpeg", caption: "Image 2" },
      { src: "images/saudi-prince.jpg", caption: "Image 3" },
      // Add more images as needed
    ];

    const items = images.map((image) => ({
      src: image.src,
      caption: image.caption,
    }));

    Fancybox.show(items, {
      autoFocus: false,
    });
  });
});
