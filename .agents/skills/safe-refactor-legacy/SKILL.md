---
name: safe-refactor-legacy
description: Chỉ dùng khi tái cấu trúc mã nguồn nhưng phải giữ nguyên hành vi, hoặc khi chỉnh sửa mô-đun cũ dễ vỡ, dữ liệu lịch sử, máy khách cũ, trường đã lỗi thời hoặc cơ chế dự phòng tương thích.
---

# Tái cấu trúc an toàn và tương thích mã nguồn cũ

## Mục tiêu

Cải thiện cấu trúc hoặc khả năng tương thích mà không làm hỏng nơi gọi hiện có, dữ liệu hoặc tác dụng phụ.

## Quy tắc

- Xác định hành vi quan sát được phải giữ nguyên trước khi chỉnh sửa.
- Kiểm tra nơi gọi, kiểm thử, lỗi cũ, lịch sử tệp di trú, sự kiện, trình quan sát, hook, phạm vi truy vấn, bộ nhớ đệm, giao dịch và cơ chế dự phòng có liên quan đến mục tiêu.
- Dự kiến bản ghi lịch sử có thể chứa `null`, thiếu quan hệ, trạng thái cũ, đường dẫn cũ hoặc nhiều cấu trúc JSON khác nhau.
- Ưu tiên thay đổi bổ sung, bộ chuyển đổi, đọc phòng thủ và chuyển đổi theo giai đoạn thay vì thay thế ngay lập tức.
- Giữ ổn định API công khai, tên trường, tên sự kiện, ý nghĩa dữ liệu trong cơ sở dữ liệu và tác dụng phụ trừ khi được nêu rõ trong phạm vi.
- Tái cấu trúc theo các bước nhỏ có thể đánh giá; không trộn định dạng diện rộng hoặc dọn dẹp không liên quan.
- Không âm thầm che giấu dữ liệu hỏng. Cung cấp phương án dự phòng an toàn cho người dùng và thông tin chẩn đoán hữu ích cho nhà phát triển.
- Xác định khi nào mã tương thích tạm thời có thể được loại bỏ.

## Quy trình

1. Ghi lại đầu vào, đầu ra, tác dụng phụ, nơi gọi và dữ liệu cũ đại diện hiện tại.
2. Xác định ranh giới tương thích hoặc tái cấu trúc nhỏ nhất.
3. Thiết lập kiểm thử nền tập trung hoặc bước kiểm tra thủ công.
4. Mỗi lần chỉ áp dụng một thay đổi cấu trúc hoặc phòng thủ.
5. Kiểm thử dữ liệu cũ, dữ liệu mới và các nơi gọi quan trọng.
6. Xem lại phần khác biệt cuối cùng để phát hiện thay đổi hành vi ngoài ý muốn.
