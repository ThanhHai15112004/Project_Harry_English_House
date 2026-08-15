---
name: ui-ux-enterprise
description: Dùng để thiết kế, triển khai hoặc đánh giá giao diện và trải nghiệm người dùng cho bảng điều khiển, trang quản trị, LMS, CRM, ERP, biểu mẫu, bảng, danh sách, trang chi tiết, hộp thoại, bảng trượt, bố cục đáp ứng, trạng thái trực quan và khả năng tiếp cận. Khi triển khai, bắt buộc kiểm kê và ưu tiên mẫu giao diện/component hiện có trước khi đề xuất hoặc tạo mới.
---

# Giao diện và trải nghiệm người dùng doanh nghiệp

## Mục tiêu

Tạo giao diện nghiệp vụ rõ ràng, nhất quán, dễ tiếp cận, tối ưu cho tác vụ lặp lại và không phát sinh các mẫu giao diện riêng lẻ không cần thiết.

## Thứ tự ra quyết định

1. Mục tiêu nghiệp vụ và dữ liệu bắt buộc.
2. Khả năng hiểu và hoàn thành tác vụ của người dùng.
3. Phân cấp thông tin và khả năng quét nhanh.
4. Tính nhất quán với sản phẩm và hệ thống thiết kế hiện có.
5. Khả năng tái sử dụng của mẫu giao diện.
6. Mức độ hoàn thiện trực quan.

## Kiểm kê trước khi thiết kế hoặc triển khai

- Kiểm tra các màn hình cùng nhóm nghiệp vụ và các màn hình lân cận.
- Kiểm tra layout, page header, breadcrumb, thanh hành động, bộ lọc, bảng, form, card, modal, drawer, status tag, empty state, pagination và thông báo hiện có.
- Kiểm tra thư viện UI, theme, token, icon, utility class và quy ước responsive của dự án.
- Xác định mẫu nào giữ nguyên, mẫu nào có thể mở rộng và phần nào thật sự cần mới.
- Khi đề xuất giao diện mới, phải nêu rõ sự khác biệt nghiệp vụ khiến mẫu hiện có không đáp ứng.

Không được tạo một bố cục hoặc phong cách riêng cho từng trang nếu các trang cùng sản phẩm có thể dùng chung cấu trúc. Không sao chép màn hình cũ rồi chỉnh nhẹ thành một biến thể độc lập.

## Quy tắc

- Trước tiên, xác định người dùng mục tiêu, mục đích màn hình, hành động chính, thông tin quan trọng và lỗi người dùng dễ mắc.
- Tái sử dụng biến thiết kế, component, biểu tượng, thuật ngữ, mật độ và mẫu tương tác hiện có.
- Ưu tiên cùng một component cho cùng một vai trò trên toàn hệ thống; khác biệt dữ liệu nên được xử lý bằng cấu hình hoặc composition có giới hạn, không bằng nhiều bản sao gần giống.
- Xây dựng phân cấp bằng kiểu chữ, khoảng cách, căn chỉnh và nhóm trước khi thêm nền, đường viền, bóng đổ hoặc chuyển động.
- Giữ một hành động chính cho mỗi khu vực ra quyết định và bảo toàn thông tin nghiệp vụ quan trọng.
- Dùng mật độ vừa phải. Tránh thẻ lồng nhau, chuyển màu ngẫu nhiên, bóng đổ mạnh, tiêu đề quá lớn, biểu tượng trang trí và bố cục mỗi trường một thẻ.
- Dùng bảng để so sánh theo cột, danh sách cho nội dung hỗn hợp, modal cho tác vụ ngắn, drawer cho công việc nhanh theo ngữ cảnh và trang riêng cho luồng dài hoặc nhiều bước.
- Giữ bộ lọc và hành động ổn định; bảo toàn trạng thái tìm kiếm, sắp xếp, phân trang, tab và quay lại khi hữu ích.
- Xác định trạng thái mặc định, hover, active, focus, selected, disabled, loading, empty, no-result, error, success và forbidden khi có liên quan.
- Dùng điều khiển đúng ngữ nghĩa, focus dễ thấy, hỗ trợ bàn phím, nhãn luôn hiển thị, lỗi gần trường, trạng thái không chỉ dựa vào màu và tên hỗ trợ cho hành động chỉ có biểu tượng.
- Trên màn hình hẹp, giữ nội dung và hành động quan trọng; ngăn điều khiển bị ẩn và tràn ngang ngoài ý muốn.

## Khi nào được tạo mẫu giao diện mới

Chỉ tạo mẫu mới khi ít nhất một điều sau đúng:

- Luồng nghiệp vụ khác bản chất, không chỉ khác dữ liệu hoặc nhãn.
- Mẫu hiện tại gây cản trở khả năng sử dụng, khả năng tiếp cận hoặc responsive và đã có bằng chứng.
- Không có component hoặc mẫu tương đương trong codebase.
- Việc mở rộng mẫu hiện tại sẽ làm API rối, tạo nhiều cờ điều kiện hoặc ảnh hưởng màn hình đang ổn định.

Nếu mẫu mới có khả năng xuất hiện ở nhiều nơi, thiết kế nó như một pattern hoặc component dùng chung có phạm vi rõ ràng. Nếu chỉ phục vụ một trang, giữ ở phạm vi tính năng, không đưa lên cấp dùng chung quá sớm.

## Đánh giá

Kiểm tra phân cấp, căn chỉnh, khoảng cách, kiểu chữ, chiều cao điều khiển, độ rõ trạng thái, gửi trùng, văn bản dài, luồng bàn phím, focus, độ tương phản, responsive và tính nhất quán với các màn hình vận hành lân cận.

Khi đánh giá phần triển khai, bổ sung:

- Component hoặc pattern nào đang được tái sử dụng.
- Phần nào bị sao chép hoặc tạo biến thể không cần thiết.
- Component nào nên hợp nhất, tách dùng chung hoặc giữ cục bộ.
- Rủi ro khi sửa component dùng chung và các nơi gọi cần kiểm tra.

Chỉ báo cáo những gì đã thực sự đánh giá.
