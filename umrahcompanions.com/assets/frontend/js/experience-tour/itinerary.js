//Itinerary
$(document).ready(function () {
  $(".faq-question-container").on("click", function () {
    const container = $(this);
    const answer = container.next();
    const question = container.find(".faq-question"); // Make sure the selector is correct
    const icon = container.find(".icon");

    // Close all other answers except the clicked one
    $(".faq-question.active, .faq-answer.active")
      .not(answer)
      .removeClass("active");
    $(".icon").not(icon).removeClass("fa-minus").addClass("fa-plus");

    answer.slideToggle(500, function () {
      answer.toggleClass("active"); // Slide toggle animation for opening/closing

      if (answer.hasClass("active")) {
        icon.removeClass("fa-plus").addClass("fa-minus");
        question.addClass("active");
        icon.addClass("active"); // Add the active class to the minus icon
      } else {
        icon.removeClass("fa-minus").addClass("fa-plus");
        // No need to remove the active class from the question or icon here
      }
    });
  });
});
