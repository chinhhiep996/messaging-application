export const transValidation = {
  email_incorrect: "Email phải có dạng example@gmail.com!",
  gender_incorrect: "Ủa, tại sao giới tính lịa bị sai!",
  password_incorrect: "Mật khẩu phải chứa 8 ký tự, bao gồm chũ hoa, chữ thường, chữ số và ký tự đặc biệt!",
  password_confirmation_incorrect: "Nhập lại mật khẩu chưa chính xác!"
};

export const transErrors = {
  account_exited: "Email này đã được sử dụng.",
  account_removed: "Tải khoản này đã bị xóa khỏi hệ thống, nếu muốn biết thêm chi tiết liên hệ với chúng tôi",
  account_not_active: "Tài khoản chưa active, hãy kiểm tra Email",
  token_undefined:  "Token không tồn tại."
}

export const transSuccess = {
  userCreated: (userEmail) => {
    return `Tải khoản <strong>${userEmail} đã được tạo, mã kích hoạt đã được gưởi  tới email của bạn.</strong>`
  },
  account_actived: "Kích hoạt tài khoản thành công, bạn có thể đăng nhập vào ứng dụng."
}

export const transMail = {
  subject: "HiepChat: Xác nhận kích hoạt tài khoản.",
  template: (linkVerify) => {
    return `
      <h2>Bạn nhận dược email này vì đã đăng ký tài khoản trên ứng dụng HiepChat.</h2>
      <h3>Vui lòng click vào link bên dưới để xác nhận tài khoản.</h3>
      <h3><a href="${linkVerify}" target="_blank">Kích hoạt tài khoản</a></h3>
      <h4>Trân trọng cảm ơn</h4>
    `
  },
  send_failed: "Có lỗi trong quá trình gửi email, xin hãy đăng ký lại."
}
