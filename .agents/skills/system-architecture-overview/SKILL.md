---
name: system-architecture-overview
description: Dùng khi cần đọc, hiểu hoặc phân tích tổng quan cấu trúc toàn bộ hệ thống Coaching (Frontend React 19/Vite, Backend Laravel 11, Docker, DB MySQL/Redis, Queues & Luồng dữ liệu) để nắm bắt kiến trúc ngay lập tức.
---

# Tổng quan Kiến trúc & Cấu trúc Hệ thống Coaching

Document này cung cấp bức tranh toàn cảnh về kiến trúc hệ thống Coaching cho AI đọc vào là nắm bắt toàn bộ luồng, thư mục, mô-đun và quy ước dự án ngay lập tức.

---

## 1. Môi trường & Tổng quan Mô hình Monorepo

Hệ thống được tổ chức dạng Monorepo gồm 2 ứng dụng chính và hạ tầng Containerization:

- **`backend-coaching/`**: RESTful API Backend viết bằng **PHP 8.2+ & Laravel 11.x**.
- **`frontend-coaching/`**: Single Page Application (SPA) viết bằng **React 19, Vite 6 & React Router 7**.
- **Containerization & Infra**: Docker Compose (`docker-compose.yml`), MySQL 8.0, Redis 7, Nginx/Web Server, Queue Worker, Scheduler.

---

## 2. Kiến trúc & Cấu trúc Backend (`backend-coaching`)

### 2.1 Công nghệ chính (Tech Stack)
- **Framework**: Laravel 11.x (PHP 8.2+)
- **Xác thực (Auth)**: Laravel Sanctum (Bearer Token), Google2FA (OTP 2 yếu tố), SSO Integration.
- **Cơ sở dữ liệu**: MySQL 8.0, Redis 7 (Cache, Session & Queue).
- **Thư viện mở rộng**:
  - `spatie/laravel-activitylog`: Ghi vết nhật ký hệ thống (Audit trail).
  - `genealabs/laravel-model-caching`: Bộ nhớ đệm ORM Model tự động.
  - `knuckleswtf/scribe`: Tự động sinh API Documentation.
  - `maatwebsite/excel`, `phpoffice/phpspreadsheet`, `phpoffice/phpword`: Đọc/xuất file báo cáo.

### 2.2 Sơ đồ thư mục & Mô hình phân lớp (Layered Architecture)
Backend áp dụng mô hình phân lớp chuẩn: **`Route -> Controller -> Service -> Repository -> Model/DB`**.

```text
backend-coaching/app/
├── Http/
│   ├── Controllers/          # Xử lý request, validate sơ bộ, gọi Service và trả về response
│   │   ├── AuthController.php, DashboardAdminController.php, QuizController.php, ...
│   │   └── Api/              # Các sub-controller cho API chuyên biệt
│   ├── Middleware/           # Kiểm tra token Sanctum, phân quyền, CORS, logging
│   └── Requests/             # Request Form Validation
├── Services/                 # NƠI CHỨA LOGIC NGHIỆP VỤ CHÍNH (Business Logic Layer)
│   ├── QuizService.php, MentorService.php, ScheduleCompletionService.php, ...
│   ├── QuizWebcamMonitorService.php # Giám sát thi qua webcam
│   └── ElearningSyncService.php     # Đồng bộ dữ liệu với LMS bên ngoài
├── Repositories/             # Tầng truy xuất dữ liệu DB (Data Access Layer)
├── Models/                   # Eloquent ORM Models (User, Quiz, Schedule, Mentor, Student...)
├── Events/ & Listeners/      # Xử lý sự kiện bất đồng bộ
├── Jobs/                     # Tác vụ hàng đợi (Queue Jobs)
├── Helpers/ & Support/       # Helper dùng chung
└── Observers/                # Lắng nghe sự thay đổi của Eloquent Model
```

### 2.3 Phân hệ Mô-đun Nghiệp vụ Backend chính
1. **Phân hệ Auth & Người dùng**: Quản lý tài khoản, vai trò (Roles: Admin, Manager, UnitManager, Mentor/Coach, Student), SSO, 2FA, Lịch sử đăng nhập.
2. **Phân hệ Coach / Mentor**: Lịch huấn luyện, mục tiêu, hoạt động, đăng ký & gợi ý kỹ năng (`MentorService`, `MentorScheduleActivityService`).
3. **Phân hệ Học viên (Student)**: Làm bài thi, nộp bài, xem lịch trình học tập/coaching, comment hoạt động.
4. **Phân hệ Ngân hàng câu hỏi & Thi (Quiz / Exams)**:
   - Quản lý ngân hàng câu hỏi, danh mục, import Excel.
   - Quản lý đề thi (`QuizService`), ma trận đề thi.
   - Chấm điểm tự động (`QuizAttemptGradingService`), tự động nộp bài hết giờ (`QuizAttemptAutoSubmitService`).
   - Giám sát gian lận qua Webcam (`QuizWebcamMonitorService`).
5. **Phân hệ Tích hợp & Tải file**:
   - `ScormPackageService`: Xử lý gói bài giảng chuẩn SCORM.
   - `ChunkUploadService`: Upload file dung lượng lớn theo chunk.
   - `ElearningSyncService`: Đồng bộ dữ liệu LMS hệ thống khác.

---

## 3. Kiến trúc & Cấu trúc Frontend (`frontend-coaching`)

### 3.1 Công nghệ chính (Tech Stack)
- **Core**: React 19, Vite 6 (SWC plugin).
- **Routing**: React Router 7 (`react-router-dom`).
- **State Management**: Redux Toolkit (`@reduxjs/toolkit`, `react-redux`).
- **UI & Component System**:
  - Ant Design 5 (`antd`, `@ant-design/icons`) cho Giao diện Web Desktop.
  - `antd-mobile` cho Giao diện Mobile.
  - Styled Components & Bootstrap 5 utilities.
- **Tính năng nâng cao**:
  - `@mediapipe/tasks-vision`: Nhận diện khuôn mặt/giám sát webcam trực tiếp trong bài thi.
  - `docx-preview`, `react-pdf`: Xem trước tài liệu PDF, DOCX trực tuyến.
  - `i18next`, `react-i18next`: Đa ngôn ngữ (Việt - Anh).
  - `chart.js`, `react-chartjs-2`: Biểu đồ thống kê báo cáo.

### 3.2 Sơ đồ thư mục & Kiến trúc Giao diện Kép (Dual View Layout)
Frontend tách biệt rõ ràng giữa bản Web Desktop (`srcWeb`) và bản Mobile (`srcMobile`):

```text
frontend-coaching/src/
├── srcWeb/                   # NỀN TẢNG GIAO DIỆN DESKTOP WEB
│   ├── layouts/              # Bố cục chính (AdminLayout, StudentLayout, Header, Sidebar, Footer)
│   ├── modules/              # Phân hệ theo Vai trò người dùng (Role-based Modules):
│   │   ├── admin/            # Quản trị viên (Exams, Users, Config, Dashboards)
│   │   ├── coachmentor/      # Giao diện dành cho Coach / Mentor
│   │   ├── student/          # Giao diện dành cho Học viên (Làm bài thi, Lịch học)
│   │   ├── unitmanager/      # Quản lý đơn vị
│   │   ├── super_admin/      # Quản trị hệ thống cấp cao
│   │   └── core/             # Module dùng chung (Auth, Login, Profile)
│   ├── shared/               # Shared components, Modals, Tables, Cards dùng chung cho Web
│   └── store/                # Redux Store & Slices cho Web
├── srcMobile/                # NỀN TẢNG GIAO DIỆN MOBILE
│   ├── layouts/              # Bố cục dạng Mobile Screen / Navigation Bar
│   ├── modules/              # Phân hệ giao diện tối ưu hóa cho di động
│   └── store/                # Redux Store cho Mobile
├── components/               # UI components dùng chung toàn dự án
├── config/                   # Axios instance, API endpoints, App Constants
├── helper/                   # Helper functions (Format date, storage, validation rules)
├── hooks/                    # Custom React Hooks
└── routes/                   # Routing configuration & Route Guards (RequireAuth, CheckRole)
```

---

## 4. Hạ tầng & Vận hành (Infra & Deployment)

1. **Docker Compose (`docker-compose.yml`)**:
   - `backend`: Nginx + PHP-FPM container chạy API.
   - `frontend`: Container phục vụ bản build React App trên Nginx port `3000`.
   - `db`: MySQL 8.0 database service (port `3306`).
   - `redis`: Redis 7 alpine service (port `6379`).
   - `backend-queue`: Worker xử lý tác vụ hàng đợi bất đồng bộ (`php artisan queue:work`).
   - `backend-scheduler`: Cron job thực thi lịch làm việc tự động (`php artisan schedule:work`).
2. **Kịch bản tự động**: `.gitlab-ci.yml`, `ci-deploy.sh`, `deploy-cicd.sh`, `sync-dev.ps1`.

---

## 5. Luồng Dữ liệu & Tương tác Hệ thống (Data Flow)

```text
[React Client (srcWeb / srcMobile)]
       │
       ▼ (HTTP Request với Bearer Token trong Header)
[Axios Client Interceptor (config/axios)]
       │
       ▼
[Laravel Routes (routes/api.php)]
       │
       ▼
[Middleware: auth:sanctum + RoleCheck]
       │
       ▼
[Controller (Validate Request)]
       │
       ▼
[Service Layer (Xử lý nghiệp vụ chính)]
       │
       ├──► [Repository Layer] ──► [MySQL DB (Eloquent Model + Model Caching)]
       │
       ├──► [Redis Cache / Session / Queue Job]
       │
       ▼
[JSON Response Standard: { success, data, message }]
       │
       ▼
[React Component / Redux Store Update]
```

---

## 6. Quy tắc cốt lõi cho AI khi đọc và làm việc với dự án Coaching

1. **Tìm phần hiện có trước khi tạo mới**:
   - Với Backend: Đọc `Controllers` và `Services` tương ứng trước khi viết hàm mới. Tuân thủ mô hình `Service` xử lý nghiệp vụ, `Controller` chỉ điều phối.
   - Với Frontend: Kiểm tra trong `srcWeb/shared/` hoặc `components/` để tái sử dụng Form, Table, Modal, Button.
2. **Tuân thủ đúng phân vùng giao diện**:
   - Code giao diện Web Desktop đặt tại `src/srcWeb/modules/<role>/`.
   - Code giao diện Mobile đặt tại `src/srcMobile/modules/<role>/`.
3. **Giữ nguyên API Contract & DB Schema**:
   - Không tự ý sửa cấu trúc JSON Response API hoặc bảng DB khi chưa được phép.
