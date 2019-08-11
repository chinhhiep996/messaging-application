export const transValidation = {
  email_incorrect: "Email phải có dạng example@gmail.com!",
  gender_incorrect: "Ủa, tại sao giới tính lịa bị sai!",
  password_incorrect: "Mật khẩu phải chứa 8 ký tự, bao gồm chũ hoa, chữ thường, chữ số và ký tự đặc biệt!",
  password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác!"
};

export const transErrors = {
  account_exited: "Email này đã được sử dụng.",
  account_removed: "Tải khoản này đã bị xóa khỏi hệ thống, nếu muốn biết thêm chi tiết liên hệ với chúng tôi",
  account_not_active: "Tài khoản chưa active, hãy kiểm tra Email"
}

export const transSuccess = {
  userCreated: (userEmail) => {
    return `Tải khoản <strong>${userEmail} đã được tạo, mã kích hoạt đã được gưởi  tới email của bạn.</strong>`
  }
}
