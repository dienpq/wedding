import { useCallback, useEffect, useState } from 'react';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const useCountdown = (targetDate: string): Countdown => {
  const calculateTimeLeft = useCallback((): Countdown => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    let timeLeft: Countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  }, [targetDate]);

  // Khởi tạo ban đầu tất cả các giá trị là 0
  const [timeLeft, setTimeLeft] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Đợi 1 giây trước khi bắt đầu tính toán thời gian còn lại
    setTimeLeft(calculateTimeLeft());
    // Sau đó cập nhật mỗi giây
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Dọn dẹp khi component unmount
    return () => clearInterval(interval);

    // return () => clearTimeout(timer);
  }, [calculateTimeLeft, targetDate]);

  return timeLeft;
};
