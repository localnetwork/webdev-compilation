var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const popupLogin = async () => {
  const { value: formValues } = await Swal.fire({
    title: "Welcome Back!",
    confirmButtonText: "Login",
    html: `
      <input id="username" class="swal2-input" placeholder="Username">
      <input id="password" class="swal2-input" placeholder="Password">
    `,
    focusConfirm: false,
    preConfirm: () => {
      alert("Happy April Fools Day!");
    },
  });
};
