// Compoment
document.addEventListener("DOMContentLoaded", () => {
  const components = Array.from(document.getElementsByTagName("compoment"));
  const loadPromises = components.map((c) => loadComponent(c));

  Promise.all(loadPromises).then(() => {
    console.log("Tất cả component đã được load.");
    initLibraries();
  });
});

// Load Compoment
function loadComponent(element) {
  const src = element.getAttribute("src");
  return fetch(src)
    .then((res) => {
      if (!res.ok) throw new Error("Không thể tải component: " + src);
      return res.text();
    })
    .then((html) => {
      const parent = element.parentNode;
      if (parent) {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = html;
        parent.replaceChild(wrapper, element);
        console.log("Load thành công:", src);
      } else {
        console.warn("Khong thể chèn element: ", src);
      }
    })
    .catch((err) => {
      console.error(err.message);
    });
}

/**
 * Load Hàm Thư Viện
 */
function initLibraries() {
  initSlick();
  initLightbox();
  initFlowbite();
  initJos();
}

/**
 * Slick
 */
function initSlick() {
  if (typeof $ !== "undefined" && $(".my-slider").length > 0) {
    console.log("Khởi tạo slick...");
    $(".my-slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 300,
      arrows: false,
      dots: false,
      cssEase: "ease",
    });
  } else {
    console.warn("Không tìm thấy .my-slider hoặc jQuery chưa có.");
  }
}

/**
 * LightBox
 */
function initLightbox() {
  if (typeof Lightbox !== "undefined") {
    Lightbox.refresh?.();
  }
}

/**
 * Jos
 * */
function initJos() {
  if (typeof JOS !== "undefined") {
    JOS.init();
  }
}
