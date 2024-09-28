// Get the sidebar element
let sidebar = document.getElementById("mySidebar");
let mainContent = document.getElementById("main");

// Toggle sidebar open and close
document.getElementById("sidebarToggle").addEventListener("click", (event) => {
  const sideMenu = document.getElementById("mySidebar");

  if (sideMenu.classList.contains("closed")) {
    sideMenu.classList.remove("closed");
    sideMenu.classList.add("open");
  } else {
    sideMenu.classList.remove("open");
    sideMenu.classList.add("closed");
  }
  console.log("Sidebar toggled");
});

// Close sidebar when 'x' is clicked
document.getElementById("closeSidebar").addEventListener("click", (event) => {
  const sideMenu = document.getElementById("mySidebar");

  sideMenu.classList.remove("open");
  sideMenu.classList.add("closed");
  console.log("Sidebar closed");
});
