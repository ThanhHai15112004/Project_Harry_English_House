---
name: performance-optimization
description: Chỉ dùng khi một trang, API, truy vấn, lần kết xuất, tác vụ nền, luồng mạng, bộ nhớ đệm, lưu trữ, hình ảnh hoặc video đã được đo là quá chậm hoặc tiêu thụ quá nhiều tài nguyên.
---

# Tối ưu hiệu năng

## Mục tiêu

Cải thiện điểm nghẽn đã được xác minh trong khi vẫn giữ tính đúng đắn, bảo mật và khả năng bảo trì.

## Quy tắc

- Thiết lập số liệu nền hoặc bằng chứng mạnh: thời gian phản hồi, số truy vấn, kích thước dữ liệu truyền, bộ nhớ, số yêu cầu, số lần kết xuất, thời lượng hàng đợi hoặc kích thước tệp đa phương tiện.
- Xác định lớp giới hạn hiệu năng trước khi thay đổi kiến trúc.
- Sửa nguyên nhân có tác động lớn nhất với phạm vi nhỏ nhất trước.
- Kiểm tra truy vấn N+1, thiếu chỉ mục, danh sách không giới hạn, cột hoặc quan hệ không cần thiết, yêu cầu trùng, vòng lặp hiệu ứng, kết xuất tốn kém, tệp đa phương tiện quá lớn và công việc dài chạy đồng bộ.
- Không thêm bộ nhớ đệm cho đến khi khóa, phạm vi, cách vô hiệu hóa, thời gian sống, xử lý đồng thời, hành vi dữ liệu cũ và hành vi khi thất bại đã rõ.
- Giữ nguyên ranh giới quyền truy cập và tính đúng đắn của dữ liệu.
- Ghi lại đánh đổi như mức dùng bộ nhớ, độ cũ dữ liệu, tính nhất quán và độ phức tạp vận hành.

## Quy trình

1. Tái hiện và đo luồng chậm.
2. Xác định chi phí chi phối.
3. Chọn tối ưu an toàn nhỏ nhất.
4. Triển khai mà không thay đổi kiến trúc không liên quan.
5. Lặp lại cùng phép đo và các kiểm tra chức năng.
6. Kiểm tra trường hợp dữ liệu trống, dữ liệu lớn, xử lý đồng thời và thất bại khi có liên quan.
7. Báo cáo bằng chứng trước và sau cùng các giới hạn còn lại.
