document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tabs .tab");
  const sections = document.querySelectorAll(".package-section");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Hide all sections
      sections.forEach(sec => sec.style.display = "none");

      // Show the selected one
      const target = tab.dataset.target;
      const targetSection = document.getElementById(`${target}-section`);
        if (targetSection) targetSection.style.display = "flex";
    });
  });
  const elems = document.querySelectorAll('.package-datepicker');
  M.Datepicker.init(elems, {
    autoClose: true,
    format: 'yyyy-mm-dd', // So JS Date can parse it
    minDate: new Date(),
    onSelect: function () {
      // Trigger change event so your logic runs
      $(this.el).trigger('change');
    }
  });
});
