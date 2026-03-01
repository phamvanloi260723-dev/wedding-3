// Import Images
import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import img6 from '../assets/images/6.jpg';
import img7 from '../assets/images/7.jpg';
import img8 from '../assets/images/8.jpg';
import img9 from '../assets/images/9.jpg';
import img10 from '../assets/images/10.jpg';
import img11 from '../assets/images/11.jpg';
import img12 from '../assets/images/12.jpg';
import img13 from '../assets/images/13.jpg';
import img14 from '../assets/images/14.jpg';
import img15 from '../assets/images/15.jpg';
import img16 from '../assets/images/16.jpg';
import img17 from '../assets/images/17.jpg';
import img18 from '../assets/images/18.jpg';


// Wedding site configuration
export const siteConfig = {
  title: "Tên cô dâu & Tên chú rể - Lễ Đính Hôn",
  bride: {
    shortName: "Tên",
    fullName: "Tên đầy đủ cô dâu",
    father: "Tên cha",
    mother: "Tên mẹ",
    phone: "0345xxx888",
    image: img1, // New Image
    qrCode: img15, // Using a placeholder for QR from new images
    facebook: "https://facebook.com/hoanh",
    instagram: "https://instagram.com/hoanh",
    bio: "Một cô gái dịu dàng, hay cười và luôn tràn đầy năng lượng tích cực. Cô tin rằng tình yêu cần được vun đắp mỗi ngày."
  },
  groom: {
    shortName: "Tên",
    fullName: "Tên đầy đủ chú rể",
    father: "Tên cha",
    mother: "Tên mẹ",
    phone: "0961514205",
    image: img2, // New Image
    qrCode: img16, // Using a placeholder for QR from new images
    facebook: "https://facebook.com/trai",
    instagram: "https://instagram.com/trai",
    bio: "Một chàng trai hiền lành, chân thành và luôn yêu thương gia đình. Với anh, hạnh phúc chính là được bên cạnh người mình yêu."
  },
  events: [
    {
      id: "engagement",
      title: "Lễ Đính Hôn",
      date: "21 . 03 . 2026",
      time: "09:00 Sáng",
      locations: [
        {
          label: "Nhà Gái",
          address: "Đang Cập Nhật Địa Chỉ",
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.747!2d108.3!3d15.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzAwLjAiTiAxMDjCsDE4JzAwLjAiRQ!5e0!3m2!1svi!2s!4v1"
        },
        {
          label: "Nhà Trai",
          address: "Đang Cập Nhật Địa Chỉ",
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.747!2d108.3!3d15.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzAwLjAiTiAxMDjCsDE4JzAwLjAiRQ!5e0!3m2!1svi!2s!4v1"
        }
      ],
      icon: "💍",
      targetDate: "2026-03-21T09:00:00"
    },
    {
      id: "wedding",
      title: "Lễ Thành Hôn",
      date: "28 . 03 . 2026",
      time: "11:00 Trưa",
      locations: [
        {
          label: "Nhà Gái",
          address: "Đang Cập Nhật Địa Chỉ",
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.747!2d108.3!3d15.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzAwLjAiTiAxMDjCsDE4JzAwLjAiRQ!5e0!3m2!1svi!2s!4v1"
        },
        {
          label: "Nhà Trai",
          address: "Đang Cập Nhật Địa Chỉ",
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.747!2d108.3!3d15.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ4JzAwLjAiTiAxMDjCsDE4JzAwLjAiRQ!5e0!3m2!1svi!2s!4v1"
        }
      ],
      icon: "🥂",
      targetDate: "2026-03-28T11:00:00"
    }
  ],
  countdownDate: "2026-03-28T11:00:00",
  slideshowImages: [img3, img4, img5, img6], // New Slideshow Images
  galleryImages: [img7, img8, img9, img10, img11, img12, img13, img14, img17, img18], // New Gallery Images
  musicUrl: "/music/i_do-duc_phuc.mp3", // Corrected path for public folder
  thankYouMessage: {
    quote: "Tình yêu không làm cho thế giới quay tròn, nhưng làm cho chuyến đi đáng giá",
    details: [
      "Chúng mình xin chân thành cảm ơn tất cả những người thân yêu đã luôn đồng hành, ủng hộ và chúc phúc cho tình yêu của chúng mình.",
      "Sự hiện diện của các bạn trong ngày trọng đại này là niềm vinh hạnh và hạnh phúc lớn lao nhất đối với chúng mình.",
      "Cảm ơn vì đã là một phần trong câu chuyện tình yêu của chúng mình! ❤️"
    ]
  },
  hero: {
    subtitle: "The Wedding Celebration of",
    quote: "Một tình yêu chân thành bắt đầu khi hai trái tim đập cùng một nhịp. Sự hiện diện của bạn là món quà quý giá nhất trong ngày trọng đại của chúng mình.",
    discoverText: "Discover Our Story"
  },
  footerText: "HelenStudio"
};
