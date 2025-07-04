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
  initTab();
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

/*
Menu Tab
*  */
function initTab() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabContents = document.querySelectorAll(".tab-content");
  const activeBg = document.getElementById("active-bg");

  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Reset trạng thái nút
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.toggle("text-white", false);
        btn.classList.toggle("text-black", true);
      });

      // Kích hoạt nút hiện tại
      button.classList.add("active");
      button.classList.remove("text-black");
      button.classList.add("text-white");

      // Di chuyển nền đen (activeBg)
      if (index === 0) {
        activeBg.style.left = "0%";
        activeBg.classList.remove("rounded-r-full", "rounded-l-none");
        activeBg.classList.add("rounded-l-full", "rounded-r-none");
      } else {
        activeBg.style.left = "50%";
        activeBg.classList.remove("rounded-l-full", "rounded-r-none");
        activeBg.classList.add("rounded-r-full", "rounded-l-none");
      }

      // Hiển thị nội dung tab tương ứng
      const tabId = button.getAttribute("data-tab");
      tabContents.forEach((content) => content.classList.add("hidden"));
      const targetTab = document.getElementById(tabId);
      if (targetTab) targetTab.classList.remove("hidden");
    });
  });
}
