---
name: security-files
description: Dùng cho xác thực, phân quyền, vai trò, ranh giới quyền sở hữu hoặc đơn vị thuê, dữ liệu nhạy cảm, đầu vào không đáng tin cậy, tải tệp riêng tư, tải lên, đường dẫn lưu trữ, thay thế tệp, xóa tệp hoặc xử lý đa phương tiện.
---

# Bảo mật và tệp

## Mục tiêu

Bảo vệ ranh giới truy cập và xử lý an toàn dữ liệu hoặc tệp do người dùng kiểm soát trong toàn bộ vòng đời.

## Quy tắc bảo mật

- Xác định người thực hiện, hành động, tài nguyên, quyền sở hữu hoặc phạm vi đơn vị thuê và quyền bắt buộc.
- Thực thi phân quyền tại máy chủ; ẩn điều khiển trên giao diện không phải là biện pháp bảo mật.
- Giới hạn phạm vi truy vấn trước khi đọc hoặc thay đổi bản ghi để ngăn truy cập đối tượng trực tiếp không an toàn (IDOR) và truy cập chéo đơn vị thuê.
- Kiểm tra và chuẩn hóa đầu vào bằng API an toàn của khung phát triển. Không tạo SQL, đường dẫn, HTML hoặc lệnh hệ thống bằng cách nối chuỗi.
- Giữ nguyên bảo vệ CSRF, phiên, mã thông báo, chính sách, phần mềm trung gian và quyền sở hữu.
- Chỉ trả về các trường cần thiết; không để bí mật, mật khẩu, mã thông báo, OTP, đường dẫn nội bộ hoặc dữ liệu cá nhân không cần thiết xuất hiện trong phản hồi và nhật ký.

## Quy tắc về tệp

- Kiểm tra kích thước, loại MIME được phát hiện, nội dung được phép và phần mở rộng; không chỉ tin vào tên tệp từ máy khách.
- Sinh tên an toàn, ngăn duyệt xuyên đường dẫn và dùng lớp trừu tượng lưu trữ đã cấu hình.
- Giữ tệp riêng tư ở trạng thái riêng tư và phân quyền cho mọi lần xem trước hoặc tải xuống.
- Xem cập nhật lưu trữ và cơ sở dữ liệu là một quy trình thống nhất. Không xóa tệp cũ cho đến khi tệp mới và cập nhật bản ghi đều thành công.
- Xác định cách dọn dẹp khi tải lên bị gián đoạn, xử lý thất bại, cơ sở dữ liệu thất bại, thay thế hoặc xóa.
- Kiểm tra tham chiếu dùng chung trước khi xóa và dùng tác vụ nền hoặc hàng đợi cho xử lý lớn khi hệ thống hỗ trợ.

## Xác minh

Kiểm thử các trường hợp được phép, bị từ chối, chưa xác thực, sai chủ sở hữu, mã định danh bị sửa, loại tệp không hợp lệ, tệp quá lớn, tệp thiếu, tải lên gián đoạn, thay thế và xóa khi có liên quan. Báo cáo ranh giới đã thực thi và các kiểm tra thực tế.
