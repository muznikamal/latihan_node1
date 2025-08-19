function verifikasiLogin(username, password) {
  try {
    if (username === "admin" && password === "12345") {
      console.log("Login Berhasil");
    } else if (typeof username == "string" && typeof password == "string") {
      throw new Error("Username & Password salah");
    } else {
      throw new Error("Username dan Password harus berupa teks");
    }
  } catch (e) {
    console.error(e.message);
  }
}

verifikasiLogin("admin", "12345");
verifikasiLogin("admin", "salah");
verifikasiLogin(123, true);
