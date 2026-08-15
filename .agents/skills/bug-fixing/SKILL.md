---
name: bug-fixing
description: Chỉ dùng khi chẩn đoán một lỗi thực tế, lỗi hồi quy, lỗi khi chạy hoặc xây dựng, kết quả sai, điều kiện tranh chấp hoặc lỗi chỉ xuất hiện trong một môi trường cụ thể.
---

# Sửa lỗi

## Mục tiêu

Xác nhận nguyên nhân gốc và áp dụng bản sửa nhỏ nhất nhưng đầy đủ, không dọn dẹp phần không liên quan.

## Quy tắc

- Ghi lại hành vi quan sát được, hành vi mong muốn, điều kiện tái hiện và lỗi hoặc bằng chứng chính xác.
- Chỉ lần theo luồng lỗi qua giao diện, API, phía máy chủ, cơ sở dữ liệu, bộ nhớ đệm, hàng đợi, lưu trữ, cấu hình và quyền truy cập trong phạm vi cần thiết.
- Tách biệt bằng chứng đã xác nhận khỏi giả định. Kiểm chứng giả thuyết chính trước khi chỉnh sửa nhiều tệp.
- Sửa tại nguồn gây lỗi, không chỉ che triệu chứng nhìn thấy.
- Không mặc định dùng tải lại trang, thời gian chờ tùy ý, yêu cầu trùng, xóa toàn bộ bộ nhớ đệm, khối `catch` rỗng, bỏ qua bằng giá trị viết cứng hoặc viết lại diện rộng để sửa lỗi.
- Giữ ổn định các hợp đồng và hành vi không liên quan.
- Với lỗi chỉ xuất hiện trên môi trường vận hành, so sánh phiên bản, giá trị môi trường, dữ liệu cũ, xử lý đồng thời, độ trễ, khóa bộ nhớ đệm, thời điểm hàng đợi, chỉ mục và quyền truy cập.

## Quy trình

1. Tái hiện lỗi hoặc xác định đường dẫn tái hiện rõ nhất.
2. Xác định lớp xảy ra lỗi và các phần phụ thuộc trực tiếp.
3. Xác nhận một giả thuyết nguyên nhân gốc bằng mã nguồn, nhật ký, dữ liệu hoặc kiểm thử tập trung.
4. Áp dụng bản sửa nhỏ nhất nhưng đầy đủ.
5. Chạy lại trường hợp ban đầu cùng một trường hợp thành công, một trường hợp biên và một trường hợp hồi quy gần đó.
6. Báo cáo nguyên nhân gốc, các tệp đã thay đổi, những kiểm tra đã chạy và phần chưa được xác minh.
