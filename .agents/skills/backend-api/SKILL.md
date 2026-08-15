---
name: backend-api
description: Dùng để triển khai phía máy chủ hoặc HTTP API trong Laravel, NestJS hay khung phát triển tương tự, bao gồm tuyến, bộ điều khiển, kiểm tra dữ liệu, dịch vụ, phân quyền, giao dịch, tác vụ nền, sự kiện, hợp đồng yêu cầu hoặc phản hồi và tích hợp bên ngoài.
---

# Phía máy chủ và API

## Mục tiêu

Triển khai hành vi phía máy chủ với hợp đồng ổn định, phân quyền chính xác, trách nhiệm rõ ràng và xử lý thất bại an toàn.

## Quy tắc

- Trước tiên, kiểm tra tuyến, bộ xử lý, kiểm tra dữ liệu, xác thực, hàm hỗ trợ phản hồi, dịch vụ, mô hình, tác vụ nền và các phần triển khai lân cận hiện có.
- Xem các trường yêu cầu, cấu trúc phản hồi, mã trạng thái, khả năng nhận `null`, phân trang và mã lỗi là hành vi công khai.
- Ưu tiên bổ sung theo hướng tương thích ngược. Không đổi tên hoặc xóa trường trong hợp đồng nếu chưa có kế hoạch chuyển đổi được xác nhận.
- Kiểm tra dữ liệu tại máy chủ và phân quyền cho mọi thao tác đọc hoặc ghi nhạy cảm.
- Giữ bộ điều khiển hoặc bộ xử lý tập trung vào yêu cầu, phân quyền, điều phối và ánh xạ phản hồi.
- Đặt lô-gic nghiệp vụ nhiều bước vào lớp dịch vụ, hành động hoặc trường hợp sử dụng hiện có của dự án khi phù hợp; tránh tạo các lớp chỉ làm nhiệm vụ chuyển tiếp.
- Khi có liên quan, phải xem xét giao dịch, hàng đợi, sự kiện, trình quan sát, bộ nhớ đệm, xóa mềm, phạm vi truy vấn, nguy cơ N+1 và dữ liệu cũ.
- Trả về lỗi nhất quán và không chứa thông tin nhạy cảm. Không để lộ bí mật, dấu vết ngăn xếp, đường dẫn nội bộ hoặc bản ghi không liên quan.
- Không thay đổi lược đồ cơ sở dữ liệu trừ khi yêu cầu nêu rõ phạm vi này.

## Quy trình

1. Lần theo điểm vào -> kiểm tra dữ liệu -> quyền truy cập -> lô-gic nghiệp vụ -> lưu trữ hoặc tích hợp -> phản hồi.
2. Ghi lại hợp đồng hiện tại và các nơi đang gọi.
3. Xác định thay đổi xuyên suốt nhỏ nhất.
4. Chủ động thiết kế hành vi thất bại và giao dịch.
5. Kiểm thử các trường hợp hợp lệ, không hợp lệ, bị từ chối, thiếu dữ liệu, dữ liệu trống, trùng lặp và thất bại khi có liên quan.
6. Chạy các lệnh phù hợp của dự án để kiểm tra cú pháp, kiểu dữ liệu, quy tắc mã nguồn, kiểm thử hoặc xây dựng; chỉ báo cáo kết quả đã thực sự quan sát.
