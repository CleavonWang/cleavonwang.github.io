
  function showRandomImage() {
    const imageUrls = [
      "ImagesFolder/communityIcon_12lr0tjcbks71.png",
    ];

    const randomIndex = Math.floor(Math.random() * imageUrls.length);

    const img = document.createElement('img');
    img.src = imageUrls[Math.floor(Math.random() * imageUrls.length)];
    img.style.position = 'fixed';
    img.style.top = `${Math.floor(Math.random() * 100)}vh`;
    img.style.left = `${Math.floor(Math.random() * 100)}vw`;
    img.style.zIndex = '99999';

    document.body.appendChild(img);

    setTimeout(() => {
        img.remove();
      }, 1000);
      
}
  setInterval(showRandomImage, 1000);
