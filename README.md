# 🇬🇧 Harry English House — Trang Giới Thiệu Trung Tâm Anh Ngữ

Website giới thiệu chuyên nghiệp cho **Harry English House** — Trung tâm Anh ngữ của Thầy Khôi (Harry), đối tác đào tạo chính thức **IDP IELTS**, chuyên đào tạo **IELTS từ 0 đến 8.0**, Tiếng Anh Giao tiếp và Luyện thi TOEIC tại TP. Hồ Chí Minh.

---

## 🎯 Tổng Quan Dự Án

| Thông tin | Chi tiết |
| :--- | :--- |
| **Loại dự án** | Website giới thiệu trung tâm Anh ngữ (Landing Page) |
| **Phong cách thiết kế** | Modern Academic / Editorial Education |
| **Ngôn ngữ** | Tiếng Việt 🇻🇳 / English 🇬🇧 (i18n tự động) |
| **Chế độ vận hành** | 100% Self-Hosted (không phụ thuộc CDN bên thứ 3) |
| **Trạng thái** | 🔒 Private Repository |

---

## 🧱 Tech Stack

| Công nghệ | Phiên bản | Vai trò |
| :--- | :--- | :--- |
| **React** | 18+ | Thư viện giao diện |
| **Vite** | 6+ | Build tool & Dev Server |
| **Tailwind CSS** | v3 | Styling (100% Utility-first) |
| **i18next** | — | Đa ngôn ngữ (Autoload) |
| **Swiper** | — | Slider / Carousel |
| **Framer Motion** | — | Animation & Micro-interaction |
| **Lenis** | — | Smooth Scroll |
| **Sonner** | — | Toast Notification |
| **Canvas Confetti** | — | Hiệu ứng ăn mừng khi đăng ký |
| **Lucide React** | — | Icon (nét vẽ thanh mảnh) |
| **React Icons** | — | Icon đa dạng (FA, MD, RI...) |
| **@tabler/icons-react** | — | Icon giáo dục, học thuật |
| **@iconify/react** | — | Icon kho khổng lồ (200,000+) |

---

## 📁 Cấu Trúc Thư Mục

```text
src/
├── core/
│   ├── constants/          # Hằng số & Theme Tokens (Màu sắc, Font, Navigation...)
│   ├── i18n/               # Cấu hình đa ngôn ngữ + locales/vi|en
│   ├── hooks/              # Custom React Hooks (useCoursesData, useLenis...)
│   ├── services/           # Lớp truy vấn dữ liệu từ JSON DB
│   └── utils/              # Hàm tiện ích
│
├── db/                     # Database JSON tĩnh (teacher, courses, pricing, roadmap...)
│
├── components/
│   ├── common/             # Button, Card, SectionTitle, Modal, LanguageSwitcher
│   └── layout/             # Navbar, Footer, MainLayout
│
├── pages/
│   └── Home/
│       ├── components/     # HeroSection, AboutFounder, CoursesSection, RoadmapSection,
│       │                   # PricingSection, CertificatesSection, FeedbacksSection,
│       │                   # ActivitiesGallery, ContactSection
│       └── index.jsx       # File Page dạng Page Composition (cực kỳ gọn)
│
├── styles/
│   ├── fonts.css           # @font-face tự lưu trữ (Lexend, Inter, Poppins)
│   └── index.css           # Tailwind directives + layer components
│
└── assets/
    ├── fonts/              # Font cục bộ (Lexend, Inter, Inter Tight, Poppins, Roboto)
    ├── bang-cap-chung-chi/ # 20+ ảnh bằng cấp & chứng chỉ của giảng viên
    ├── feedback-hoc-vien/  # Ảnh phản hồi & kết quả thi IELTS của học viên
    ├── hop-tac-truyen-thong/ # Ảnh hợp tác truyền thông
    ├── ki-niem/            # Ảnh kỷ niệm hoạt động lớp học
    ├── Ministry-of-Higher-Education-2025/ # Ảnh sự kiện Bộ Giáo dục 2025
    ├── trang-ca-nhan/      # Ảnh đại diện & bìa giảng viên
    └── common/             # Tài nguyên chung (cờ ngôn ngữ...)
```

---

## ✨ Tính Năng Nổi Bật

- **🌐 Đa Ngôn Ngữ (i18n):** Chuyển đổi Tiếng Việt ↔ English mượt mà với cờ quốc gia, sử dụng cơ chế Autoload tự động quét file locale mới.
- **🎨 Single Source of Truth cho Theme:** Toàn bộ màu sắc (`THEME_COLORS`) và font chữ (`THEME_FONTS`) được định nghĩa **duy nhất** tại `src/core/constants/theme.constants.js`, tự động đồng bộ sang cả Tailwind Config lẫn CSS Variables.
- **📦 JSON Database Autoload:** Tất cả dữ liệu (khóa học, học phí, lộ trình, feedback, chứng chỉ, media) được quản lý trong `src/db/*.json` và tự động phân giải qua `import.meta.glob`.
- **📸 Lightbox Gallery:** Xem ảnh chứng chỉ, kết quả thi IELTS và ảnh hoạt động toàn màn hình với Modal Lightbox.
- **🎉 Đăng Ký Tư Vấn UX:** Form đăng ký kết hợp Toast notification (`sonner`) và hiệu ứng pháo hoa (`canvas-confetti`) khi gửi thành công.
- **📱 100% Responsive:** Chuẩn chỉ trên mọi màn hình (Mobile, Tablet, Desktop).
- **🔒 Self-Hosted:** Toàn bộ font chữ và tài nguyên lưu trữ nội bộ, không phụ thuộc CDN bên ngoài.

---

## 🚀 Hướng Dẫn Chạy Dự Án

### Yêu cầu
- Node.js >= 18
- npm >= 9

### Cài đặt & Khởi chạy

```bash
# Clone repository
git clone git@github.com:ThanhHai15112004/Project_Harry_English_House.git
cd Project_Harry_English_House

# Cài đặt dependencies
npm install

# Khởi chạy môi trường phát triển
npm run dev

# Biên dịch production
npm run build
```

---

## 📐 Design System

| Token | Giá trị |
| :--- | :--- |
| **Primary** (Harry Blue) | `#1746A2` |
| **CTA** (Bright Blue) | `#2563EB` |
| **Heading** (Academic Navy) | `#10233F` |
| **Body Text** | `#475569` |
| **Sky Accent** | `#38BDF8` |
| **Achievement Gold** | `#C99A3D` |
| **Border** | `#E2E8F0` |
| **Font Heading** | Lexend (Variable), fallback: Outfit |
| **Font Body** | Lexend (Variable), fallback: Inter |

---

## 📋 Quy Chuẩn Phát Triển

Đọc file [.agents/rules/project-architecture-standards.md](.agents/rules/project-architecture-standards.md) trước khi bắt đầu phát triển để nắm:
- Kiến trúc module & ranh giới thành phần
- Quy tắc không hardcode (text, màu sắc, font, link)
- Cơ chế Autoload (i18n, database)
- Cách sử dụng Theme Constants đúng cách
- Tiêu chuẩn hoàn thành task

---

## 👨‍🏫 Thông Tin Giảng Viên

**Thầy Khôi (Harry Khôi)**
- 🏆 IELTS 8.0 — Band cao nhất tại TP.HCM năm học vị
- 🤝 Đối tác chính thức **IDP IELTS** — Tổ chức quản lý thi IELTS toàn cầu
- 🎓 20+ chứng chỉ nghiệp vụ giảng dạy, học thuật và phát triển bản thân
- 📍 Giảng dạy tại: Quận 7, Quận 8, Quận 1/10 và Online (Meet/Zoom)

---

*© Harry English House — Private Repository. All rights reserved.*
