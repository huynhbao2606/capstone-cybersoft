
# 🚀 Quy trình làm việc với Git

## 📌 Trước khi bắt đầu code
> **Chỉ thực hiện bước này nếu bạn đã hoàn thành tính năng đang làm trên branch riêng. Nếu chưa hoàn thành, hãy bỏ qua bước này.**

```bash
git pull origin main
```

## 🌿 Tạo branch mới

```bash
git checkout -b <ten-branch>
```

**Ví dụ:**  
```bash
git checkout -b header
```

---

## 💻 Trong quá trình code

> Dù bạn chưa hoàn thành tính năng, vẫn **phải commit thường xuyên** để tránh mất dữ liệu.

```bash
git add .
git commit -m "Thông tin rõ ràng về nội dung commit"
```

❌ Tránh các nội dung commit không rõ ràng như:
- `asd`
- `123123`
- `aaa`

✅ Ví dụ nội dung commit hợp lệ:
- `"add Header UI"`
- `"fix responsive issue for mobile"`
- `"update login validation"`

---

## 📤 Push code lên Git

```bash
git push origin <ten-branch>
```

**Ví dụ:**
```bash
git push origin header
```

---

## 🔁 Kiểm tra & chuyển branch

- Kiểm tra đang ở branch nào:
  ```bash
  git branch
  ```
- Chuyển sang branch khác:
  ```bash
  git checkout <ten-branch>
  ```

---

## 📎 Link Task Notion

👉 [Click để xem Notion Taskboard](https://salty-payment-257.notion.site/2170b462417e80918ac0f262c4ad5b57?v=2170b462417e81aa81d3000c5b50db58)

---

## 📷 Task 

![Giao diện mẫu](https://github.com/user-attachments/assets/0d71a610-cc2f-43b6-8736-b9b9db043ed8)
