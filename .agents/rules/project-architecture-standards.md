# Quy Chuẩn Kiến Trúc & Tiêu Chuẩn Lập Trình Dự Án (Harry English House)

Tài liệu này là **kim chỉ nam bắt buộc** dành cho mọi AI Agent và lập trình viên khi tham gia phát triển, bảo trì hoặc mở rộng mã nguồn website **Harry English House**.

---

## 1. Phong Cách Thiết Kế & Bảng Màu Chuẩn (Modern Academic / Editorial Education)

Dự án áp dụng phong cách **Modern Academic / Editorial Education** với bảng màu và font chữ chính thức được định nghĩa tại `src/core/constants/theme.constants.js` và `tailwind.config.js`:

### 🎨 Bảng màu (THEME_COLORS)
| Vai trò (Role) | Tên màu | Mã Hex | Ứng dụng cụ thể |
| :--- | :--- | :--- | :--- |
| **Main Background** (~70%) | Pure White | `#FFFFFF` | Dùng cho phần lớn homepage, giữ cảm giác sáng sủa, thoáng đãng. |
| **Alt Background** | Soft White | `#F7F9FC` | Dùng để phân tách các section (`bg-academic-soft-white`). |
| **Surface** | Cool Surface | `#F1F5F9` | Dùng cho card nhẹ, ô input, background phụ (`bg-academic-surface`). |
| **Light Blue** | Light Primary | `#EAF2FF` | Highlight banner nhẹ, icon background (`bg-academic-light-blue`). |
| **Heading / Dark** | Academic Navy | `#10233F` | Headline, tiêu đề lớn, header, số liệu, icon chính (`text-academic-heading`). |
| **Body Text** | Slate Body | `#475569` | Văn bản nội dung chính, tương phản tốt, chống mỏi mắt (`text-academic-body`). |
| **Muted Text** | Muted Subtext | `#64748B` | Chú thích, nhãn phụ, ngày tháng (`text-academic-muted`). |
| **Primary** | Harry Blue | `#1746A2` | Màu thương hiệu cốt lõi, uy tín học thuật (`bg-academic-primary`). |
| **Interactive / CTA** | Bright Blue | `#2563EB` | Nút kêu gọi hành động (CTA), link, active state, hover (`bg-academic-cta`). |
| **Sky Accent** (5–10%) | Sky Blue | `#38BDF8` | Đường gạch chân (underline), tag trang trí, graphic (`text-academic-sky`). |
| **Achievement** | Academic Gold | `#C99A3D` | Huy hiệu bằng cấp, chứng chỉ, sao đánh giá, đối tác IDP (`text-academic-gold`). |
| **Border** | Divider Border | `#E2E8F0` | Đường kẻ phân cách, viền card tiêu chuẩn (`border-academic-border`). |

### 🔤 Kiểu chữ tự lưu trữ (THEME_FONTS - 100% Self-Hosted)
* **Toàn bộ font được lưu trữ nội bộ (Local)** trong `src/assets/fonts/` và khai báo trong `src/styles/fonts.css`. **Tuyệt đối không dùng CDN Google Fonts hay bên thứ 3** trong `index.html`.
* `THEME_FONTS.HEADING`: `Lexend, Outfit, sans-serif` (Tiêu đề H1-H6).
* `THEME_FONTS.BODY`: `Lexend, Inter, sans-serif` (Văn bản nội dung).
* `THEME_FONTS.LEXEND`: `Lexend, sans-serif`.
* `THEME_FONTS.INTER`: `Inter, sans-serif`.
* `THEME_FONTS.POPPINS`: `Poppins, sans-serif`.

---

## 2. Tổng Quan Công Nghệ (Tech Stack)

* **Core:** React 18 + Vite 6 + JavaScript (JSX).
* **Styling:** Tailwind CSS v3 (sử dụng PostCSS & Autoprefixer, kết nối trực tiếp với `theme.constants.js`).
* **Đa ngôn ngữ (i18n):** `i18next` + `react-i18next` với cơ chế **Autoload** tự động quét thư mục `locales/`.
* **Database:** JSON Database dạng tĩnh đặt tại `src/db/` với cơ chế **Autoload** tự động phân giải master DB.
* **Icon Ecosystem:** `lucide-react`, `react-icons`, `@tabler/icons-react`, `@iconify/react`.
* **UI & Hiệu ứng:** `swiper` (carousel/slider), `framer-motion` (animation), `lenis` (smooth scroll), `sonner` (toast notifications), `canvas-confetti` (hiệu ứng chúc mừng).

---

## 3. Cấu Trúc Thư Mục & Ranh Giới Module

```text
src/
├── core/                        # Tầng lõi (Logic, Config, Hooks, Services, i18n, Theme)
│   ├── constants/               # Toàn bộ hằng số (Theme, App, Navigation, Courses, Storage, i18n)
│   ├── i18n/                    # Bộ cài đặt i18next (Autoload locales qua import.meta.glob)
│   │   └── locales/             # vi/translation.json và en/translation.json
│   ├── services/                # Lớp dịch vụ truy vấn dữ liệu từ DB
│   ├── hooks/                   # Custom React Hooks (useCoursesData, useLenis,...)
│   ├── utils/                   # Hàm tiện ích (formatCurrency, scrollToSection,...)
│   └── index.js                 # Export tập trung toàn bộ core
│
├── db/                          # DATABASE JSON (Dữ liệu khóa học, học phí, lộ trình, feedback)
│   ├── *.json                   # teacher.json, courses.json, roadmap.json, pricing.json,...
│   └── index.js                 # Autoload toàn bộ JSON qua import.meta.glob và export
│
├── components/                  # COMPONENT DÙNG CHUNG
│   ├── common/                  # Button, Card, SectionTitle, Modal, LanguageSwitcher
│   ├── layout/                  # Navbar, Footer, MainLayout
│   └── index.js                 # Export tập trung components
│
├── pages/                       # CÁC TRANG (GIAO DIỆN)
│   ├── Home/
│   │   ├── components/          # Từng phần độc lập (HeroSection, AboutFounder, CoursesSection,...)
│   │   │   └── index.js         # Export toàn bộ section của Home
│   │   ├── index.jsx            # FILE PAGE SIÊU TINH GỌN (Chỉ compose các sub-components)
│   │   └── index.js
│   └── index.js                 # Export tập trung pages
│
├── styles/                      # GLOBAL CSS & TAILWIND
│   ├── fonts.css                # Tự lưu trữ @font-face (Lexend, Inter, Poppins)
│   └── index.css                # @tailwind directives, layer components, scrollbar
│
└── assets/                      # TÀI NGUYÊN HÌNH ẢNH & TƯ LIỆU GỐC
```

---

## 4. Quy Tắc Bắt Buộc Khi Viết Code

### 🚫 1. TUYỆT ĐỐI KHÔNG DÙNG CDN BÊN THỨ 3 & KHÔNG HARDCODE
* **100% tài nguyên nội bộ:** Ảnh, font chữ, icon đều được đóng gói nội bộ trong repo, không gọi link ngoài.
* **Chuỗi hiển thị giao diện:** Bắt buộc dùng hook `useTranslation()` (`const { t } = useTranslation()`) và khai báo key dịch thuật đồng thời trong cả 2 file:
  * `src/core/i18n/locales/vi/translation.json` (Tiếng Việt)
  * `src/core/i18n/locales/en/translation.json` (English)
* **Số điện thoại, Hotline, Link MXH, Tên trung tâm, ID Section:** Bắt buộc lấy từ `src/core/constants/` (ví dụ `APP_INFO.CONTACT.HOTLINE_DISPLAY`, `SECTION_IDS.COURSES`).

### 📦 2. QUY TẮC FILE PAGE SIÊU TINH GỌN (PAGE COMPOSITION)
* File Page (như `src/pages/Home/index.jsx`) **CHỈ đóng vai trò ráp nối các component con**.
* **Không bao giờ nhồi nhét hàng trăm dòng JSX, state phức tạp trực tiếp vào file page.** Khi cần sửa đổi giao diện hoặc logic của phần nào, **CHỈ sửa đúng sub-component đó** trong `pages/{PageName}/components/{SubComponent}/index.jsx`.

### 🧩 3. QUY ƯỚC BARREL EXPORT (`index.js` / `index.jsx`)
* Mỗi thư mục module, component, page, core đều phải có file `index.js` hoặc `index.jsx` để export tập trung.
* Khi import từ nơi khác, luôn sử dụng alias `@/` ngắn gọn:
  * `import { Button, Card } from '@/components';`
  * `import { useCoursesData, APP_INFO, THEME_COLORS, THEME_FONTS } from '@/core';`
  * `import { db } from '@/db';`

### 🎨 4. QUY TẮC STYLING VỚI TAILWIND CSS
* **Không tự ý tạo thêm các file `.css` đơn lẻ rời rạc** cho từng component nhỏ trừ trường hợp đặc biệt. Hãy sử dụng trực tiếp các class tiện ích của Tailwind CSS v3 kết hợp bảng màu `academic-*` và font `font-sans`, `font-heading`, `font-lexend`.
* Đảm bảo responsive đầy đủ trên mọi thiết bị: `sm:`, `md:`, `lg:`, `xl:`.

---

## 5. Quy Trình Kiểm Tra Bắt Buộc Trước Khi Hoàn Thành Task

1. **Kiểm tra code:** Đảm bảo không còn chuỗi text nào bị hardcode ngoài file i18n, các import sử dụng alias `@/`.
2. **Kiểm tra biên dịch:** Chạy lệnh `npm run build`.
3. **Tiêu chuẩn đạt:** Lệnh build phải chạy thành công **(0 lỗi, 0 cảnh báo nghiêm trọng)**.
