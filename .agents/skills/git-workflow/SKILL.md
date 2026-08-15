---
name: git-workflow
description: Chỉ dùng khi người dùng yêu cầu rõ các thao tác Git như tạo nhánh, đưa tệp vào vùng chờ, tạo bản ghi thay đổi, kéo hoặc đẩy mã nguồn, hợp nhất, tái cơ sở, xử lý xung đột hoặc chuẩn bị yêu cầu hợp nhất.
---

# Quy trình Git

## Mục tiêu

Thực hiện thao tác Git được yêu cầu mà không làm mất công việc cục bộ, trộn tệp không liên quan hoặc viết lại lịch sử ngoài dự kiến.

## Quy tắc

- Bắt đầu bằng kiểm tra chỉ đọc: trạng thái, nhánh hiện tại, kho từ xa khi có liên quan và phần khác biệt tập trung.
- Phát hiện tệp đã sửa hoặc chưa được theo dõi nhưng không liên quan trước khi đưa vào vùng chờ, chuyển nhánh, kéo mã nguồn, hợp nhất hoặc tái cơ sở.
- Không tự giả định nhánh cơ sở, kho từ xa, mã công việc, quy ước bản ghi thay đổi hoặc đích đẩy mã nguồn.
- Chỉ đưa các tệp thuộc yêu cầu vào vùng chờ và xem lại phần khác biệt đã đưa vào vùng chờ trước khi tạo bản ghi thay đổi.
- Không chạy `pull`, chuyển nhánh, tạo nhánh, `commit`, `push`, `merge`, `rebase`, `stash`, `revert`, xử lý xung đột hoặc mở yêu cầu hợp nhất nếu chưa được yêu cầu.
- Không bao giờ đẩy cưỡng bức nếu chưa có chỉ dẫn rõ ràng sau khi đã giải thích rủi ro.
- Không dùng `reset`, `restore`, `checkout` đối với tệp hoặc `clean` để loại bỏ công việc nếu chưa được phê duyệt rõ.
- Xử lý xung đột bằng cách giữ đúng ý định của cả thay đổi cục bộ và thay đổi nhận vào, không mù quáng chọn một phía.
- Sau mọi thao tác Git, kiểm tra lại trạng thái và báo cáo nhánh, tệp, mã băm bản ghi thay đổi và đích từ xa khi áp dụng.

## Trình tự tạo bản ghi thay đổi an toàn

Kiểm tra -> xem lại phần khác biệt của yêu cầu -> chạy kiểm tra liên quan -> đưa đúng tệp vào vùng chờ -> xem lại phần khác biệt đã đưa vào vùng chờ -> tạo bản ghi thay đổi theo quy ước của kho mã nguồn -> báo cáo kết quả và các thay đổi còn lại.
