const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);
if (vw > "760") {
  window.onscroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("NCC-Logo").classList.add("ncc_shrink");
      document.getElementById("NITJ-Logo").classList.add("NITJ_shrink");
      document.getElementById("navbar_links").classList.add("navbar_shrink");
    } else {
      document.getElementById("NCC-Logo").classList.remove("ncc_shrink");
      document.getElementById("NITJ-Logo").classList.remove("NITJ_shrink");
      document.getElementById("navbar_links").classList.remove("navbar_shrink");
    }
  };
} else {
  document.getElementById("navbar_links").classList.add("hide");
  // document.getElementById("nav-mb").classList.remove("hide");
}
