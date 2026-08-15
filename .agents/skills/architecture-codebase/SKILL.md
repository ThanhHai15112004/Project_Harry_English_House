---
name: architecture-codebase
description: Dùng khi lập kế hoạch kiến trúc, xác định ranh giới mô-đun, lần theo luồng thực thi nhiều tệp chưa quen hoặc khi cần quyết định nên tái sử dụng, mở rộng hay tạo abstraction/component mới. Không tải cho thay đổi nhỏ khi đã biết chính xác tệp, hành vi và thành phần phù hợp.
---

# Kiến trúc và cơ sở mã nguồn

## Mục tiêu

Hiểu đúng luồng thực tế, nhận diện phần có thể tái sử dụng và chọn cấu trúc nhỏ nhất có thể bảo trì trước khi chỉnh sửa.

## Quy tắc

- Bắt đầu từ một điểm vào cụ thể: route, command, event, page, API call, component, background job hoặc trường dữ liệu.
- Chỉ lần theo đường đi cần thiết: đầu vào -> validation và quyền -> lô-gic nghiệp vụ -> lưu trữ hoặc dependency ngoài -> đầu ra.
- Kiểm tra nơi gọi trước khi thay đổi hành vi dùng chung và kiểm tra mã nguồn lân cận trước khi đưa vào một mẫu thiết kế mới.
- Trước khi tạo abstraction, service, helper, hook hoặc component mới, tìm phần có cùng trách nhiệm, không chỉ cùng tên.
- Với giao diện, lập bản đồ ngắn gồm layout, component dùng chung, component tính năng, token/style và màn hình tương tự.
- Tuân theo quy ước hiện có về mô-đun, cách đặt tên, dependency và framework, trừ khi chính chúng gây ra vấn đề được yêu cầu xử lý.
- Chỉ tách lớp giao tiếp, trình bày, quy tắc nghiệp vụ và lưu trữ khi việc tách giúp trách nhiệm rõ hơn hoặc dễ kiểm thử hơn.
- Áp dụng SOLID và pattern theo hướng thực dụng. Không tạo chuỗi chỉ chuyển tiếp `Controller -> Action -> Service -> Repository`.
- Không tạo abstraction “để dành cho tương lai” nếu chưa có người dùng thực tế hoặc ranh giới trách nhiệm rõ ràng.
- Dừng tìm kiếm khi đã xác định các tệp chính, hợp đồng, tác dụng phụ, phần tái sử dụng phù hợp và ranh giới chỉnh sửa an toàn.
- Không thiết kế lại mô-đun không liên quan hoặc thay đổi hành vi công khai khi chưa có phạm vi rõ ràng.

## Quyết định tái sử dụng

Đánh giá theo thứ tự:

1. Dùng lại nguyên trạng.
2. Kết hợp phần nhỏ hiện có.
3. Mở rộng phần hiện có mà không làm sai trách nhiệm.
4. Tách phần dùng chung từ ít nhất hai nơi đang trùng lặp.
5. Tạo mới ở phạm vi nhỏ nhất.

Một abstraction mới chỉ hợp lý khi có trách nhiệm ổn định, tên miền hoặc vai trò rõ ràng, API nhỏ và làm giảm trùng lặp hoặc phụ thuộc thật sự. Không hợp lý khi nó chỉ đổi tên, chuyển tiếp lời gọi hoặc gom các trường hợp không liên quan bằng nhiều cờ cấu hình.

## Quy trình

1. Xác định điểm vào và hành vi mong muốn.
2. Tìm phần triển khai chính, phần tương tự và các nơi gọi quan trọng.
3. Lập bản đồ dependency, tác dụng phụ, hợp đồng công khai và tài sản có thể tái sử dụng.
4. Ghi quyết định dùng lại, kết hợp, mở rộng, tách dùng chung hoặc tạo mới kèm lý do.
5. Chọn cấu trúc khả thi nhỏ nhất và phạm vi đặt mã phù hợp.
6. Ghi các tệp bị ảnh hưởng và rủi ro trước khi triển khai.
7. Đối chiếu cấu trúc cuối cùng với quy ước của kho mã nguồn và kiểm tra không phát sinh abstraction trùng lặp.
