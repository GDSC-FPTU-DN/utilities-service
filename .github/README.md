<div style="width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center">
<img style="width:80px"
src="https://seeklogo.com/images/G/google-developers-logo-F8BF3155AC-seeklogo.com.png" alt="logo"/>
</div>
<h3 style="text-align:center">Google Developer Student Clubs - FPT University Da Nang</h3>

# Utilities Services

![version](https://img.shields.io/badge/version-0.1.0-green)
![release](https://img.shields.io/badge/release-0.1.0-blue)

### 📃 Documentation

Checkout Postman documentation here: [Postman Docs]()

## ✨ Services

### ✉️ Gmails

Send Email via Gmails. `/api/emails/send`

```bash
curl --location '{domain}/api/emails/send' --data '{data}'
```

Data format

```json
{
  "to": "example@gmail.com, example2@gmail.com",
  "cc": "example@gmail.com, example2@gmail.com",
  "bcc": "example@gmail.com, example2@gmail.com",
  "subject": "Subject of Email",
  "content": "(Optional) Content of email",
  "template": "(Optional) Built-in template for email",
  "data": {}
}
```

#### Built-in Template

- OTP. `"template": "otp"`

```json
"data": {
    "code": 123456
}
```

#### Technologies

- `express`. Back-end library.
- `nodemailer`. Email service.

## ☁️ Server

Deployment server: [Azure]()

## 😊 Contributors

- Đoàn Quang Minh [[Ming-doan](https://github.com/Ming-doan)]
- GDSC-FPTU [[gdsc-fptu](https://github.com/gdsc-fptu)]
