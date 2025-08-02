// Tabs toolbar
$(document).ready(function () {
  // Show the Detail tab content
  $("#Detail").show();
  $("#DetailButton").addClass("active"); // Add active class to default tab
});

function openTab(tabName) {
  // Hide all tab content
  $(".tab-content").hide();

  // Show the selected tab content
  $("#" + tabName).show();

  // Set the active tab button
  $(".tab-button").removeClass("active");
  $("#" + tabName + "Button").addClass("active");
}
