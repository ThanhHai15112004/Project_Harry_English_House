---
name: localization
description: Chỉ dùng cho giao diện hoặc thông báo API được dịch, tệp ngôn ngữ, chuyển đổi ngôn ngữ, chèn giá trị vào chuỗi, số nhiều hoặc định dạng ngày, giờ, số và tiền tệ theo ngôn ngữ/vùng.
---

# Bản địa hóa

## Mục tiêu

Giữ ngôn ngữ hiển thị cho người dùng đầy đủ, nhất quán, an toàn và có thể tái sử dụng trên mọi ngôn ngữ được hỗ trợ.

## Quy tắc

- Trước tiên, kiểm tra thư viện hiện có, không gian tên, cấu trúc tệp, quy ước khóa, các ngôn ngữ được hỗ trợ và hành vi dự phòng.
- Chỉ tái sử dụng một khóa khi ý nghĩa và ngữ cảnh thực sự giống nhau.
- Ưu tiên khóa ngữ nghĩa ổn định, đồng thời giữ nguyên các khóa hiện có và thứ tự trong tệp.
- Thêm hoặc cập nhật cùng một khóa ngữ nghĩa trong mọi ngôn ngữ bắt buộc trong cùng một thay đổi.
- Dùng biến giữ chỗ có tên và cơ chế số nhiều gốc; không nối các mảnh câu đã dịch.
- Luôn thoát giá trị do người dùng kiểm soát và không đặt bí mật hoặc chi tiết chỉ dành cho nhà phát triển trong thông báo đã dịch.
- Giữ ổn định mã lỗi dành cho máy đọc ngay cả khi thông báo cho người dùng được dịch.
- Dùng định dạng theo ngôn ngữ/vùng cho ngày, giờ, số và tiền tệ khi nằm trong phạm vi.

## Quy trình

1. Tìm cấu hình ngôn ngữ hiện có và cách diễn đạt tương đương.
2. Thêm hoặc cập nhật khóa trong mọi ngôn ngữ bắt buộc.
3. Thay văn bản hiển thị cho người dùng được viết cứng bằng cơ chế dịch hiện có.
4. Kiểm thử chèn giá trị, số nhiều, dự phòng, chuyển đổi ngôn ngữ, văn bản dài và bố cục đáp ứng.
5. Báo cáo các khóa và ngôn ngữ đã thay đổi.
