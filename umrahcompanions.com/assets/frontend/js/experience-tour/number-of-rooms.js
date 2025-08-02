// Dynamically add a new dropdown
$(document).ready(function () {
  // Function to generate room dropdowns
  function generateRoomDropdowns(selectedRooms) {
    // Clear existing selectRoom-Dropdown elements with slideUp animation
    $(".custom-dropdown.selectRoom-Dropdown").slideUp(300, function () {
      $(this).empty();

      // Clear the room-form-separator
      $(".room-select-seperator").remove();

      if (selectedRooms > 0) {
        // Add new selectRoom-Dropdown elements based on the selected number of rooms
        for (var i = 1; i <= selectedRooms; i++) {
          var roomDropdown = $(
            '<div class="selectRoom-Dropdown"' +
              (i > 1 ? ' style="margin-top: 20px;"' : "") +
              '> <!-- Add margin-top for spacing starting from the second room --> \
    <label for="select-room-type">Per Person:</label>\
    <div class="display-select-inline">\
      <div class="select-adult">\
        <select name="room' +
              i +
              '-adults">\
          <option value="">Adult</option>\
          <option value="1">1</option>\
          <option value="2">2</option>\
          <option value="3">3</option>\
          <option value="4">4</option>\
          <option value="5">5</option>\
        </select>\
      </div>\
      <div class="select-child">\
        <select name="room' +
              i +
              '-children">\
          <option value="">Child</option>\
          <option value="1">1</option>\
          <option value="2">2</option>\
          <option value="3">3</option>\
          <option value="4">4</option>\
          <option value="5">5</option>\
        </select>\
      </div>\
    </div>\
  </div>'
          );

          $(".custom-dropdown.selectRoom-Dropdown").append(roomDropdown);
        }

        // Add the separator after the last room dropdown
        $(".custom-dropdown.selectRoom-Dropdown").after(
          '<div class="room-select-seperator"></div>'
        );
      }

      // Show or hide the separator based on selectedRooms
      $(".room-select-seperator").toggle(selectedRooms > 0);

      // Slide down the selectRoom-Dropdown elements with animation
      $(".custom-dropdown.selectRoom-Dropdown").slideDown("slow");
    });
  }

  // Listen for changes in the "No. of Rooms" select element
  $("#numberOfRooms").on("change", function () {
    var selectedRooms = parseInt($(this).val());

    generateRoomDropdowns(selectedRooms);
  });

  // Trigger the change event to initialize the dropdowns
  $("#numberOfRooms").trigger("change");
});
