document
  .getElementById("contact-form-main")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    const isValid = validateForm(data);
    if (isValid !== true) {
      displayError(isValid);
      return;
    }

    if (data["Xác nhận"] === "Tham gia" && !data["Số người tham gia"]) {
      data["Số người tham gia"] = "1";
    }

    if (data["Xác nhận"] === "Không tham gia") {
      data["Số người tham gia"] = "";
    }

    const txtSubmitEle = document.querySelector(
      "#contact-form-main .theme-btn .txt-submit"
    );

    if (txtSubmitEle) {
      txtSubmitEle.style.opacity = "0";
    }

    const loadingEle = document.querySelector(
      "#contact-form-main .theme-btn .box-loading"
    );

    if (loadingEle) {
      loadingEle.style.display = "block";
    }

    await fetch(
      "https://script.google.com/macros/s/AKfycbx7-iRJwEo9ErYlGo6dY_6RMtHTD9zjYaKY_R3IgXF1zRa5UPRW_lwlXOUQrhrOQATw/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        redirect: "follow",
      }
    );

    if (txtSubmitEle) {
      txtSubmitEle.style.opacity = "1";
    }

    if (loadingEle) {
      loadingEle.style.display = "none";
    }

    displaySuccess("Cảm ơn bạn đã gửi lời chúc tốt đẹp đến với chúng tôi!.");

    confettiComplete();
  });

const confettiComplete = () => {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 },
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

function validateForm(data) {
  if (!data["Tên"].trim()) {
    return "Bạn có thể cho tôi biết tên của bạn là gì được không?";
  }
  if (!data["Số điện thoại"].trim()) {
    return "Bạn có thể cho tôi xin số điện thoại của bạn được không?";
  }
  return true;
}

function displaySuccess(message) {
  document.getElementById("success").innerText = message;
  document.getElementById("success").style.display = "block";
  document.getElementById("error").style.display = "none";
}

function displayError(message) {
  document.getElementById("error").innerText = message;
  document.getElementById("error").style.display = "block";
  document.getElementById("success").style.display = "none";
}
