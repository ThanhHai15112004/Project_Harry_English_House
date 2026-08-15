---
name: ui-design-guidelines
description: Dùng khi cần tiêu chuẩn kích thước, kiểu chữ, khoảng cách, token, mật độ và quy tắc trình bày giao diện. Khi triển khai, phải ưu tiên theme, token, utility và component style hiện có trước khi thêm giá trị hoặc CSS mới.
---

# Hệ thống tiêu chuẩn thiết kế giao diện và trải nghiệm người dùng

Tài liệu phân tích và quy chuẩn thiết kế giao diện/trải nghiệm người dùng (UI/UX) cho hệ thống, bảo đảm tính nhất quán, gọn gàng và tối ưu không gian hiển thị, đặc biệt với bảng điều khiển và trang quản trị.


## 0. Ưu tiên hệ thống thiết kế hiện có

Các con số trong skill này là giá trị tham khảo khi dự án chưa có quy chuẩn. Nếu codebase đã có theme, token, biến CSS, utility class hoặc cấu hình thư viện UI thì phải ưu tiên dùng hệ thống hiện có.

Trước khi thêm CSS hoặc giá trị thiết kế mới:

- Tìm token, biến, class và component style đang dùng cho cùng vai trò.
- Kiểm tra màn hình lân cận để giữ cùng mật độ, chiều cao và khoảng cách.
- Dùng lại token hoặc utility thay vì ghi lại giá trị cứng ở nhiều tệp.
- Không tạo biến thể gần giống chỉ khác 1–2px nếu không có lý do về căn chỉnh hoặc khả năng tiếp cận.
- Không sao chép khối CSS từ component khác; ưu tiên class dùng chung, composition hoặc token.
- Chỉ thêm token mới khi giá trị có ý nghĩa hệ thống và có từ hai nơi sử dụng thực tế hoặc đã được xác định trong thiết kế chung.

Nếu phải khác quy chuẩn hiện có, ghi rõ lý do, phạm vi ảnh hưởng và màn hình cần kiểm tra hồi quy.

## 1. Cỡ chữ phổ biến

| Thành phần | Kích thước đề xuất |
|---|---|
| Chú thích nhỏ, siêu dữ liệu | 12px |
| Văn bản phụ, nhãn nhỏ | 13px |
| Nội dung bảng, biểu mẫu, trình đơn | 14px |
| Nội dung chính | 15–16px |
| Tiêu đề thẻ hoặc hộp thoại nhỏ | 16–18px |
| Tiêu đề khối nội dung | 20–24px |
| Tiêu đề trang | 24–28px |
| Tiêu đề trang đích | 32–48px |

**Nội dung thân trang nên dùng cỡ chữ bao nhiêu?**
- Bảng điều khiển có mật độ dữ liệu cao: 14px.
- Trang quản trị cần dễ đọc: 15px.
- Trang nội dung hoặc hồ sơ cá nhân: 16px.

Không nên dùng 13px cho nội dung chính vì khá nhỏ trên màn hình lớn. Có thể dùng 15px, nhưng các hệ thống thiết kế thường ưu tiên 14px hoặc 16px vì dễ xây dựng thang cỡ hơn.

Ví dụ:
```css
body {
  font-size: 14px; /* Hoặc 15px tùy mức ưu tiên mật độ dữ liệu */
  line-height: 1.5;
}
```

## 2. Chiều cao dòng (`line-height`)

Không nên chỉ quan tâm cỡ chữ. Chiều cao dòng ảnh hưởng lớn đến khả năng đọc.

| Cỡ chữ | Chiều cao dòng đề xuất |
|---|---|
| 12px | 18px |
| 13px | 20px |
| 14px | 20–22px |
| 15px | 22–24px |
| 16px | 24px |
| 18px | 26–28px |
| 20px | 28–30px |
| 24px | 32–36px |

Ví dụ với nội dung thân trang 14px hoặc 15px:
```css
font-size: 15px;
line-height: 22px;
```

## 3. Hệ thống khoảng cách chuẩn

Nên dùng hệ thống kích thước chia hết cho 4px hoặc 8px.

**Thang khoảng cách phổ biến:**
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px

Không nên dùng quá nhiều giá trị lẻ như 7px, 13px, 17px, 23px hoặc 29px, trừ khi cần căn chỉnh đặc biệt.

## 4. Khoảng đệm phổ biến

### Nút
| Loại nút | Khoảng đệm |
|---|---|
| Nhỏ | 4px 12px |
| Mặc định | 8px 16px |
| Lớn | 10px 20px hoặc 12px 24px |

**Chiều cao nút thường dùng:**
- Nhỏ: 28–32px.
- Mặc định: 36–40px.
- Lớn: 44–48px.

Ví dụ:
```css
.button {
  height: 40px;
  padding: 0 16px;
  font-size: 14px;
}
```

### Ô nhập liệu và danh sách chọn
- Nhỏ: 32px.
- Mặc định: 40px.
- Lớn: 44–48px.

Khoảng đệm ngang thường dùng: `padding: 0 12px;`

Vùng nhập văn bản nhiều dòng: `padding: 10px 12px;`

### Thẻ nội dung
- Thẻ nhỏ: 16px.
- Thẻ mặc định: 20–24px.
- Thẻ lớn: 24–32px.

Bảng điều khiển thông thường:
```css
.card {
  padding: 24px;
}
```

Trên thiết bị di động có thể giảm còn `padding: 16px;`.

### Hộp thoại
- Phần đầu: 20–24px.
- Phần nội dung: 20–24px.
- Phần chân: 16–24px.
- Khoảng cách giữa các trường trong hộp thoại: 16px.

## 5. Lề ngoài và khoảng cách giữa phần tử

Nên ưu tiên `gap` thay vì đặt `margin` riêng cho từng phần tử.

| Quan hệ | Khoảng cách |
|---|---|
| Biểu tượng và văn bản | 6–8px |
| Nhãn và ô nhập liệu | 6–8px |
| Hai nút | 8–12px |
| Hai trường trong biểu mẫu | 16–20px |
| Tiêu đề và nội dung | 12–16px |
| Hai khối trong thẻ | 20–24px |
| Hai khu vực lớn | 32–48px |

Ví dụ biểu mẫu:
```css
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
```

Ví dụ cụm nút:
```css
.actions {
  display: flex;
  gap: 12px;
}
```

## 6. Kích thước bố cục trên máy tính

### Thanh bên
- Thu gọn: 64–80px.
- Mở rộng: 224–256px.
- Phổ biến nhất: `width: 240px;`, hoặc 220px cho giao diện cần gọn.

### Thanh đầu trang
- Các mức thường dùng: 56px, 60px hoặc 64px.
- Bảng điều khiển nên dùng `height: 64px;`, hoặc 60px nếu cần gọn.

### Khoảng đệm vùng nội dung
- Màn hình máy tính nhỏ: 20px.
- Màn hình máy tính mặc định: 24px.
- Màn hình lớn: 32px.

Với màn hình 1920×1080, có thể dùng:
```css
.main-content {
  padding: 24px 32px 32px;
}
```

Không nên để toàn bộ nội dung kéo dài sát hai mép màn hình.

### Chiều rộng tối đa
- Trang biểu mẫu hoặc chi tiết cá nhân: 960–1200px.
- Trang bảng điều khiển hoặc danh sách lớn: 1280–1600px.

Ví dụ:
```css
.page-container {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
```

## 7. Bảng dữ liệu

| Thành phần | Kích thước |
|---|---|
| Cỡ chữ trong bảng | 13–14px |
| Phần đầu bảng | 13–14px, `font-weight: 600` |
| Chiều cao hàng gọn | 40–44px |
| Chiều cao hàng mặc định | 48–52px |
| Khoảng đệm ô | 12px 16px |

Ví dụ:
```css
.table-cell {
  padding: 12px 16px;
  font-size: 14px;
}
```

Không nên để hàng cao hơn 56px nếu bảng có nhiều dữ liệu.

## 8. Độ bo góc

Thang kích thước phổ biến:
- 4px: nhãn trạng thái và ô nhập liệu nhỏ.
- 6px: ô nhập liệu và nút.
- 8px: thẻ nhỏ.
- 12px: thẻ và hộp thoại.
- 16px: thẻ lớn.
- 999px: dạng viên thuốc, ảnh đại diện và huy hiệu tròn.

Một hệ thống bảng điều khiển an toàn:
- Ô nhập liệu và nút: 6–8px.
- Thẻ: 8–12px.
- Hộp thoại: 12px.

Không nên bo tất cả thành phần ở mức 16–24px vì giao diện quản trị sẽ trông quá mềm và thiếu nghiêm túc.

## 9. Kích thước biểu tượng
- Biểu tượng phụ: 14px.
- Biểu tượng trong ô nhập liệu hoặc nút: 16px.
- Biểu tượng trình đơn: 18–20px.
- Biểu tượng hành động chính: 20–24px.
- Minh họa trạng thái trống: 48–80px.

Biểu tượng trong nút thường dùng:
```css
font-size: 16px;
gap: 8px;
```

## 10. Bộ kích thước đề xuất dùng ngay

Với hệ thống quản trị hoặc trang web nghiệp vụ, có thể thống nhất các biến CSS sau:

```css
:root {
  /* Kiểu chữ */
  --font-xs: 12px;
  --font-sm: 13px;
  --font-base: 14px;
  --font-md: 15px;
  --font-lg: 16px;
  --font-xl: 18px;
  --font-2xl: 20px;
  --font-3xl: 24px;
  --font-page-title: 28px;

  /* Khoảng cách */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;

  /* Độ bo góc */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;

  /* Chiều cao điều khiển */
  --control-sm: 32px;
  --control-md: 40px;
  --control-lg: 48px;
}
```
