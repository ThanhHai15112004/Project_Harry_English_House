---
name: database-change
description: Chỉ dùng cho thay đổi lược đồ hoặc dữ liệu đã lưu, bao gồm tệp di trú, SQL, cột, bảng, chỉ mục, ràng buộc, dữ liệu khởi tạo, điền bù dữ liệu, tập lệnh sửa dữ liệu hoặc thao tác phá hủy dữ liệu.
---

# Thay đổi cơ sở dữ liệu

## Mục tiêu

Thay đổi lược đồ hoặc dữ liệu đã lưu mà không làm mất bản ghi, tạo tệp di trú trùng lặp hoặc phá vỡ hành vi cũ của ứng dụng.

## Quy tắc

- Kiểm tra lược đồ hiện tại, các tệp di trú, dữ liệu đại diện, nơi đọc, nơi ghi, báo cáo, tác vụ nền, bộ nhớ đệm và hợp đồng API phụ thuộc vào dữ liệu.
- Với bảng đã được triển khai, tạo một tệp di trú tiến về phía trước; không sửa tệp di trú lịch sử đã được áp dụng.
- Chỉ cập nhật lược đồ cơ sở duy trì lâu dài khi kho mã nguồn thực sự sử dụng nó và yêu cầu có nêu phạm vi này.
- Quyết định khả năng nhận `null`, giá trị mặc định, chỉ mục, khóa ngoại, tính duy nhất và hành vi khi xóa dựa trên cách truy cập thực tế và dữ liệu hiện có.
- Lập kế hoạch xử lý các dòng dữ liệu cũ trước khi bắt buộc một trường mới.
- Dùng thay đổi theo từng giai đoạn cho cập nhật có rủi ro: thêm cấu trúc tương thích, điền bù dữ liệu an toàn, chuyển luồng đọc hoặc ghi, rồi mới áp dụng ràng buộc.
- Với lượng dữ liệu điền bù lớn, phải giới hạn theo lô và có thể chạy tiếp sau khi gián đoạn.
- Không xóa bảng, làm rỗng bảng, cập nhật hàng loạt hoặc xóa hàng loạt nếu chưa có phê duyệt rõ ràng và kế hoạch khôi phục.
- Không thực thi tệp di trú hoặc SQL làm thay đổi dữ liệu nếu người dùng chưa yêu cầu rõ.

## Quy trình

1. Xác nhận lược đồ hiện tại và hình dạng dữ liệu.
2. Lần theo các nơi đọc và ghi quan trọng.
3. Xác định khả năng tương thích, thứ tự triển khai, cách điền bù dữ liệu và phương án khôi phục.
4. Viết tệp di trú hoặc tập lệnh an toàn nhỏ nhất.
5. Xem xét khóa, chỉ mục, ràng buộc và giới hạn của việc hoàn tác.
6. Kiểm thử dữ liệu cũ, mới, `null`, trùng lặp và không hợp lệ khi có liên quan.
7. Nêu rõ các lệnh mới chỉ được chuẩn bị hay đã thực sự được thực thi.
