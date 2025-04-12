console.log("JS loaded!");
// Example college data (replace this later with real data from backend)
const colleges = [
    {
      name: "College A",
      type: "government",
      logoUrl: "https://via.placeholder.com/100?text=College+A",
      website: "https://official-website-a.com",
      ourWebsite: "https://examsofbeu.com/college-a"
    },
    {
      name: "College B",
      type: "private",
      logoUrl: "https://via.placeholder.com/100?text=College+B",
      website: "https://official-website-b.com",
      ourWebsite: "https://examsofbeu.com/college-b"
    },
    // Add all 53 colleges here or fetch from backend
  ];
  
  // DOM Elements
  const collegeGrid = document.getElementById("collegeGrid");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const logoModal = document.getElementById("logoModal");
  const officialLink = document.getElementById("officialLink");
  const ourLink = document.getElementById("ourLink");
  
  // Function to display colleges
  function displayColleges(collegesToShow) {
    collegeGrid.innerHTML = ""; // Clear the grid
    collegesToShow.forEach(college => {
      const logo = document.createElement("img");
      logo.src = college.logoUrl;
      logo.alt = college.name;
      logo.title = college.name;
      logo.onclick = () => openModal(college);
      collegeGrid.appendChild(logo);
    });
  }
  
  // Filter colleges by type
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
  
      const type = btn.getAttribute("data-type");
      if (type === "all") {
        displayColleges(colleges);
      } else {
        const filtered = colleges.filter(college => college.type === type);
        displayColleges(filtered);
      }
    });
  });
  
  // Modal Functions
  function openModal(college) {
    officialLink.href = college.website;
    ourLink.href = college.ourWebsite;
    logoModal.style.display = "flex";
  }
  
  function closeModal() {
    logoModal.style.display = "none";
  }
  
  window.onclick = function (event) {
    if (event.target === logoModal) {
      closeModal();
    }
  };
  
  // Initial load
  displayColleges(colleges);


  

  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menuIcon');
    const dropdownMenu = document.getElementById('dropdownMenu');
  
    // Toggle menu on icon click
    menuIcon.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle('active');
    });
  
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!menuIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.classList.remove('active');
      }
    });
  });