function updateCountdown(endTime) {
  // Lấy ngày và giờ hiện tại
  const currentTime = new Date().getTime();

  // Tính thời gian còn lại
  const timeRemaining = endTime - currentTime;

  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Đếm ngược đã kết thúc!";
  } else {
    // Chuyển thời gian còn lại thành ngày, giờ, phút và giây
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Hiển thị kết quả
    const day = document.getElementById("day");
    const hour = document.getElementById("hour");
    const min = document.getElementById("min");
    const sec = document.getElementById("sec");
    day.innerText = days;
    hour.innerText = hours;
    min.innerText = minutes;
    sec.innerText = seconds;
  }
}

// Ngày và giờ bạn muốn đếm ngược đến
const targetDate = new Date("2024-12-28T10:00:00.000Z").getTime();

// Cập nhật thời gian mỗi giây
const countdownInterval = setInterval(function () {
  updateCountdown(targetDate);
}, 1000);
