document.addEventListener('DOMContentLoaded', () => {
  const roles = [
    "Computational Biologist",
    "Oral Microbiome Researcher",
    "Computational Toxicologist",
    "Science Communicator"
  ];
  let roleIndex = 0;

  const roleElement = document.getElementById('role');

  function updateRole() {
    roleElement.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length; // Loop through roles
  }

  setInterval(updateRole, 3000); // Change every 3 seconds
});

