document.addEventListener('DOMContentLoaded', () => {
  const roles = [
    "Computational Biologist",
    "Oral Microbiome Researcher",
    "Toxicologist",
    "Science Communicator"
  ];

  let roleIndex = 0;
  const roleElement = document.querySelector('.dynamic-role');

  setInterval(() => {
    roleElement.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
  }, 3000);
});
