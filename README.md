### Lưu ý:

Trước khi code luôn chạy **`git pull origin main` (Lưu ý chỉ pull khi đã làm xong tính năng ở branch của mình, nếu chưa làm xong thì không cần mà cứ tiếp tục làm )**

Tiếp tục tạo branch `git checkout -b “Tên branch”` → Ví dụ: `git checkout -b header`

Sau khi code, dù chưa xong vẫn dùng **`git add .`**

Tiếp tục **`git commit -m “Nội dung”`** → Hạn chế ghi linh tinh không có ý nghĩa như aaa, 123123, asd..

Sau đó `git push origin "Tên branch"` -> Nếu đang làm header thì là `git push origin header`

- Để kiểm tra mình đang ở branch nào có thể dùng lệnh `git branch`, để đổi branch thì `git checkout TênBranch`
