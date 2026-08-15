---
name: react-frontend
description: Dùng cho hành vi và luồng dữ liệu React, bao gồm thành phần, hook, định tuyến, biểu mẫu, trạng thái cục bộ hoặc máy chủ, lệnh gọi API, bộ nhớ đệm, bộ lọc, phân trang, hộp thoại, kết xuất và trạng thái điều hướng. Bắt buộc dùng khi triển khai giao diện React để kiểm tra và ưu tiên tái sử dụng component hiện có. Không tải cho việc chỉ đánh giá thiết kế trực quan.
---

# Giao diện React

## Mục tiêu

Xây dựng giao diện React có thể dự đoán, dễ bảo trì và ưu tiên tái sử dụng đúng mức thay vì sao chép hoặc tạo component mới không cần thiết.

## Kiểm tra bắt buộc trước khi viết component

Trước khi tạo component, hook, helper, form, table, modal, drawer, filter hoặc style mới, phải kiểm tra:

- Phiên bản React, bộ định tuyến, thư viện truy vấn, thư viện biểu mẫu, thư viện UI và cơ chế quản lý trạng thái.
- Các thư mục `components`, `shared`, `common`, `ui`, `layouts`, component trong mô-đun hiện tại và các mô-đun lân cận.
- Các màn hình có cùng loại nghiệp vụ hoặc mẫu tương tác, kể cả khi tên component khác nhau.
- Theme, token, utility class, CSS module, styled component, Storybook hoặc tài liệu component nếu dự án có.
- Nơi component tương tự đang được import và cách API của nó được sử dụng.

Không chỉ tìm theo tên tệp. Phải tìm theo vai trò như tiêu đề trang, thanh bộ lọc, bảng dữ liệu, trạng thái, hộp thoại xác nhận, biểu mẫu, tải tệp, phân trang, trạng thái trống và hành động hàng.

Trước khi code, ghi ngắn gọn:

```markdown
### Kiểm tra tái sử dụng giao diện
- Thành phần hoặc mẫu đã tìm:
- Thành phần phù hợp nhất:
- Quyết định: dùng lại / kết hợp / mở rộng / tách dùng chung / tạo cục bộ:
- Lý do tạo mới nếu có:
- Vị trí đặt component:
```

## Thứ tự ưu tiên

1. Dùng lại component hiện có nguyên trạng.
2. Kết hợp các primitive hoặc component nhỏ hiện có.
3. Mở rộng component hiện có nếu vẫn cùng trách nhiệm và API còn rõ ràng.
4. Tách component dùng chung từ phần đã lặp lại ở ít nhất hai nơi thực tế.
5. Tạo component cục bộ khi chỉ phục vụ một tính năng đặc thù.
6. Chỉ tạo component dùng chung mới khi có nhu cầu tái sử dụng rõ ràng hoặc đó là primitive thuộc hệ thống thiết kế.

Không copy-paste JSX, CSS hoặc lô-gic rồi đổi tên. Không tạo phiên bản `New`, `V2`, `Custom`, `Special` khi có thể mở rộng hoặc kết hợp component hiện tại một cách sạch sẽ.

## Ranh giới component

- Phân loại rõ: primitive giao diện, component dùng chung, component tính năng và component trang.
- Đặt component ở phạm vi nhỏ nhất có đủ người dùng; không đưa vào thư mục dùng chung chỉ vì “có thể sẽ dùng sau”.
- Tách theo trách nhiệm và khả năng thay đổi, không theo số dòng tùy ý.
- Dùng composition, slot, children hoặc render prop khi phù hợp; tránh component có quá nhiều cờ `isX`, `showY`, `modeZ`.
- Không nhét lô-gic nghiệp vụ của nhiều mô-đun vào component dùng chung.
- Giữ API component nhỏ, có kiểu dữ liệu rõ ràng và tên thuộc tính phản ánh ý nghĩa nghiệp vụ.

## Quản lý trạng thái và dữ liệu

- Tách trạng thái giao diện, biểu mẫu, bộ lọc, phân trang, URL và máy chủ khi chúng có chủ sở hữu hoặc vòng đời khác nhau.
- Chỉ giữ một nguồn sự thật. Không sao chép props hoặc dữ liệu máy chủ vào trạng thái cục bộ nếu không có nhu cầu đồng bộ thực sự.
- Chỉ dùng effect cho tác dụng phụ. Tránh vòng lặp effect, thiếu dependency và trạng thái suy ra vốn nên tính trong lần render.
- Đưa mọi giá trị làm thay đổi kết quả vào khóa yêu cầu và xử lý hủy yêu cầu hoặc phản hồi cũ khi nhiều yêu cầu chồng lấn.
- Giữ trạng thái tìm kiếm, bộ lọc, tab, phân trang và quay lại khi luồng sản phẩm yêu cầu.
- Xử lý trạng thái khởi tạo, đang tải, trống, lỗi, vô hiệu hóa, đang gửi, thành công và quyền truy cập.
- Ngăn gửi trùng và giữ giá trị người dùng đã nhập sau lỗi validation có thể khắc phục.
- Chỉ thêm memoization, cache hoặc trạng thái toàn cục khi quy ước của kho mã nguồn hoặc bằng chứng chứng minh là cần thiết.

## Quy trình

1. Lần theo route, cây component, chủ sở hữu trạng thái, API và hành vi URL.
2. Kiểm kê component, mẫu giao diện và token có thể tái sử dụng.
3. Chọn phương án theo thứ tự ưu tiên; ghi rõ lý do nếu tạo mới.
4. Triển khai thay đổi nhỏ nhất bằng thư viện và component hiện có.
5. Kiểm tra tải lại, điều hướng lùi hoặc tiến, thao tác nhanh liên tiếp, trạng thái trống, lỗi và quyền truy cập.
6. Tìm lại phần JSX, CSS, hook hoặc lô-gic tương tự để bảo đảm không tạo trùng lặp mới.
7. Chạy lint, typecheck, test và build phù hợp; chỉ báo cáo kết quả đã quan sát.

## Tiêu chí hoàn thành

- Không có component mới trùng vai trò với component hiện có.
- Component dùng chung có ít nhất hai nơi sử dụng thực tế hoặc là primitive được xác định rõ.
- Component đặc thù được giữ trong phạm vi tính năng phù hợp.
- Không tạo API component bằng nhiều cờ điều kiện khó hiểu.
- Không sao chép CSS, JSX hoặc lô-gic có thể tái sử dụng.
- Các trạng thái tải, trống, lỗi, quyền và gửi trùng đã được xử lý.
