---
name: lms-business-context
description: Chỉ dùng cho hệ thống quản lý học tập, huấn luyện, cố vấn, khóa học, lịch, buổi học, hoạt động học tập, tiến độ, hoàn thành, điểm danh, đánh giá, xuất bản nội dung hoặc quy trình giáo dục theo vai trò.
---

# Bối cảnh nghiệp vụ hệ thống quản lý học tập

## Mục tiêu

Giữ thay đổi phù hợp với các quy tắc học tập và huấn luyện đã được xác nhận, đồng thời xem mã nguồn trong kho và yêu cầu rõ ràng là nguồn sự thật.

## Quy tắc

- Xác định người thực hiện, đối tượng, quyền truy cập, trạng thái hiện tại, chuyển đổi mong muốn và kết quả dự kiến.
- Không viết cứng mã vai trò hoặc trạng thái; dùng quyền, kiểu liệt kê, hằng số và quy trình hiện có.
- Xác nhận các loại nội dung và hoạt động được mã nguồn hỗ trợ trước khi thêm loại mới.
- Lần theo quy tắc tiến độ và hoàn thành qua hoạt động bắt buộc, phê duyệt, điểm danh, bài nộp, điểm số, ngày tháng, khả năng hiển thị và khóa khi có liên quan.
- Giữ bối cảnh hữu ích của lịch hoặc danh sách như tháng, bộ lọc, phân trang, thẻ đang chọn và đường dẫn quay lại.
- Dùng hộp thoại hoặc bảng trượt cho công việc ngắn theo ngữ cảnh; dùng trang riêng cho cấu hình nhiều bước, tải tệp, sắp xếp, phân tích tiến độ hoặc quản lý nội dung phức tạp.
- Kiểm tra tất cả vai trò bị ảnh hưởng và các chuyển đổi trạng thái quan trọng.
- Giữ nguyên hồ sơ lịch sử và luồng học tập ổn định trừ khi yêu cầu nêu rõ cần thay đổi.

## Quy trình

1. Tìm một quy trình tương tự đang tồn tại.
2. Lần theo giao diện, API, phía máy chủ, cơ sở dữ liệu, tác vụ nền, thông báo và báo cáo dùng chung quy tắc.
3. Triển khai thay đổi xuyên suốt nhỏ nhất nhưng đầy đủ.
4. Kiểm thử các vai trò bị ảnh hưởng, chuyển đổi trạng thái, bản ghi cũ và luồng hiện có.
5. Báo cáo mọi giả định nghiệp vụ chưa được xác nhận bởi mã nguồn hoặc yêu cầu.
