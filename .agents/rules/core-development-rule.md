---
trigger: always_on
---

# Quy tắc phát triển cốt lõi

Rule này chỉ chứa nguyên tắc toàn cục. Kiến thức chuyên sâu đặt trong skill và chỉ đọc khi cần.

## 1. Nguyên tắc chung

- Hiểu phần code liên quan trước khi sửa; không đọc toàn bộ repository nếu task không cần.
- Dựa trên codebase thực tế; không tự bịa tệp, API, quyền hoặc luồng.
- Sửa nhỏ nhất nhưng đầy đủ, giữ nguyên hành vi không liên quan.
- Ưu tiên tái sử dụng component, service, hook, helper và quy ước hiện có.
- Không tự ý đổi database, migration, API coƯntract, Entity/Model dùng chung hoặc logic liên mô-đun.
- Không thêm dependency, refactor rộng hoặc định dạng tệp ngoài phạm vi nếu không cần.
- Không chạy lệnh Git làm thay đổi repository nếu người dùng chưa yêu cầu.
- Chỉ báo kiểm tra thành công khi đã thực sự chạy và quan sát kết quả.

Yêu cầu sửa/thêm/xóa/triển khai cho phép chỉnh mã nguồn. Yêu cầu review, giải thích, lập kế hoạch hoặc viết tài liệu không cho phép sửa nếu chưa được nói rõ.

## 2. Phân cấp task

Luôn chọn cấp thấp nhất phù hợp. Nếu phạm vi tăng, dừng và phân loại lại.

### Cấp 0 — Chỉ đọc

Review, giải thích, tư vấn, lập kế hoạch, tài liệu.

- Không cần mẫu phân tích trước/sau code.
- Không chạy build, test, lint hoặc Git nếu không cần.

### Cấp 1 — Task nhỏ

Ví dụ: đổi label, màu, icon, kích thước, vị trí, spacing, trạng thái nút, CSS hoặc JSX cục bộ.

Điều kiện: thường 1–3 tệp; không đổi nghiệp vụ, API, database, quyền hoặc shared logic quan trọng.

Trước khi code:

```markdown
## Phân tích nhanh
- Mục tiêu:
- Phạm vi:
- Thành phần có thể tái sử dụng:
- Cách kiểm tra:
```

### Cấp 2 — Task thông thường

Áp dụng khi có logic trong một module, form/state/validation/API/service, nhiều trạng thái giao diện hoặc bug cần lần theo luồng.

Trước khi code:

```markdown
## Phân tích trước khi code
- Mục tiêu và hành vi mong muốn:
- Luồng hiện tại đã kiểm tra:
- Phạm vi tệp/module:
- Thành phần hoặc logic sẽ tái sử dụng:
- Ảnh hưởng, rủi ro và cách kiểm tra:
```

### Cấp 3 — Task lớn hoặc rủi ro cao

Áp dụng cho thay đổi nhiều module, kiến trúc, database/migration, API contract, Entity/Model dùng chung, bảo mật, phân quyền, dữ liệu phá hủy, queue/event/cache hoặc refactor rộng.

Phải phân tích chi tiết: mục tiêu, luồng hiện tại và mong muốn, phạm vi frontend/backend/database, điều kiện nghiệp vụ, ảnh hưởng, rủi ro, kiểm thử và tiêu chí hoàn thành.

Nếu cần thay đổi chưa được duyệt, phải dừng và xin phép trước.

## 3. Chỉ đọc skill cần thiết

- Cấp 0: thường 0 skill.
- Cấp 1: 0–1 skill.
- Cấp 2: 1–2 skill.
- Cấp 3: tối đa 3 skill; vượt quá phải nêu lý do.

Chọn theo task:

- React/component/hook/state/form: `react-frontend`.
- API/service/validation/query/queue: `backend-api`.
- Bug: `bug-fixing`.
- Luồng nhiều tệp hoặc kiến trúc chưa rõ: `architecture-codebase`.
- Đọc/hiểu/phân tích tổng quan hệ thống Coaching (Frontend React, Backend Laravel, Docker, DB): `system-architecture-overview`.
- Database: `database-change`.
- Refactor mã cũ: `safe-refactor-legacy`.
- Bảo mật/quyền/file: `security-files`.
- Nghiệp vụ LMS: `lms-business-context` khi liên quan trực tiếp.
- Dịch thuật/i18n: `localization`.
- Hiệu năng: `performance-optimization` khi có dấu hiệu hoặc số đo.
- Review/thiết kế UX/UI tổng thể: `ui-ux-enterprise`.
- Chỉ sửa kích thước, typography, spacing, token: `ui-design-guidelines`.
- Git: `git-workflow` chỉ khi người dùng yêu cầu.

Không tải đồng thời nhiều skill giao diện cho task nhỏ. Chọn skill gần nhất với mục tiêu.

## 4. Tái sử dụng trước khi tạo mới

Trước khi tạo component, hook, helper, CSS hoặc tệp dùng chung:

1. Kiểm tra module hiện tại.
2. Kiểm tra khu vực `components`, `shared`, `common`, `ui`, `layouts` hoặc tương đương.
3. Kiểm tra màn hình có vai trò tương tự, không chỉ tìm theo tên.

Thứ tự quyết định:

```text
Dùng lại → Kết hợp → Mở rộng → Tách dùng chung → Tạo mới cục bộ
```

Chỉ đưa vào shared khi có ít nhất hai nơi dùng thực tế hoặc là thành phần nền tảng. Không copy JSX, CSS, form, table, filter, modal hoặc logic thành phiên bản gần giống. Không tạo abstraction để dành cho tương lai.

Với Cấp 1, chỉ kiểm tra module hiện tại và khu vực dùng chung gần nhất; không quét toàn repository.

## 5. Điều kiện phải dừng

Dừng và xin duyệt nếu giải pháp cần:

- Đổi database/migration.
- Đổi API contract hoặc Entity/Model dùng chung.
- Sửa logic nghiệp vụ liên mô-đun.
- Thao tác phá hủy dữ liệu.
- Tạo hành vi không tương thích ngược.
- Quyết định bảo mật hoặc nghiệp vụ còn mơ hồ.

Khi dừng, nêu ngắn: lý do, ảnh hưởng, rủi ro, phương án đề xuất và phạm vi cần duyệt.

## 6. Kiểm tra theo phạm vi

Không mặc định chạy toàn bộ `lint + typecheck + test + build`.

### Cấp 1

- Đọc lại diff và luồng vừa sửa.
- Tối đa 1 kiểm tra tập trung nếu có giá trị.
- Thay đổi thuần giao diện có thể chỉ kiểm tra trực quan một lần.
- Không full build/full test nếu không liên quan cấu hình hoặc shared logic.
- Không mở trình duyệt, chụp ảnh hoặc reload lặp lại; tối đa một lần xác minh cuối khi cần.

### Cấp 2

- Ưu tiên lint/typecheck/test theo tệp hoặc module.system
- Mặc định tối đa 2–3 lệnh kiểm tra.
- Chỉ full build khi đổi routing, dependency, cấu hình build, shared component quan trọng hoặc kiểm tra tập trung không đủ.

### Cấp 3

- Kiểm tra tập trung trong lúc làm.
- Chạy một vòng xác minh cuối phù hợp với phạm vi.
- Full build/full test khi ảnh hưởng rộng hoặc người dùng yêu cầu.

Quy tắc chống lặp:

- Không chạy lại cùng lệnh nếu code liên quan chưa thay đổi.
- Chỉ chạy lại sau khi sửa nguyên nhân có thể ảnh hưởng kết quả.
- Mặc định không chạy một lệnh quá 2 lần.
- Lỗi có sẵn, không liên quan hoặc do môi trường: ghi nhận một lần rồi dừng; không tự mở rộng task.

Chỉ kiểm tra các ảnh hưởng liên quan: quyền, validation, loading/error/empty, chống gửi trùng, filter/tab/pagination, responsive, cache/queue/event, notification, report, import/export và localization.

Với bug Cấp 2–3, phải xác định điều kiện tái hiện, nguyên nhân gốc có bằng chứng, cách sửa nhỏ nhất và trường hợp hồi quy chính.

## 7. Báo cáo sau khi code

### Cấp 1

```markdown
## Kết quả
- Tệp đã sửa:
- Thay đổi chính:
- Thành phần đã tái sử dụng:
- Kiểm tra đã thực hiện:
- Phần chưa xác minh hoặc rủi ro:
```

### Cấp 2

```markdown
## Tự đánh giá sau khi code
- Tệp và logic đã thay đổi:
- Thành phần/logic đã tái sử dụng hoặc tạo mới:
- Phạm vi giữ nguyên:
- Kiểm tra đã chạy và kết quả:
- Ảnh hưởng, rủi ro hoặc phần chưa xác minh:
```

### Cấp 3

Báo cáo chi tiết theo: thay đổi, quyết định tái sử dụng, phần giữ nguyên, kiểm thử, ảnh hưởng và rủi ro còn lại.

Không điền `N/A` hàng loạt. Không kết luận hoàn toàn an toàn nếu chưa kiểm thử đủ.

## 8. Trình tự

```text
Phân cấp task
→ Đọc phạm vi và skill tối thiểu
→ Phân tích theo đúng cấp
→ Tái sử dụng trước
→ Sửa nhỏ nhất nhưng đầy đủ
→ Kiểm tra theo ngân sách
→ Báo cáo ngắn, trung thực
```

Không biến task nhỏ thành quy trình kiểm thử của một đợt phát hành.