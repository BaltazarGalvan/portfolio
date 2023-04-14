const dogCeo = "https://dog.ceo/api/breed/schnauzer/miniature/images/random";

const home = function () {
  fetch(dogCeo)
    .then((res) => res.json())
    .then((data) => {
      const homeHtml =
        '<div class="content-home"><p>Do you love Schnauzers?</p><div class="schnauzer-container"><img id="schnauzer-img" src="' +
        data.message +
        '" alt="" /></div></div>';
      document.querySelector(".content").innerHTML = homeHtml;
    });
};

export default home;
