$(document).ready(function() {
  const switchElement = $("#toggle-switch");
  let isSwitchOn = false;

  switchElement.on("mousedown", function(event) {
    event.preventDefault();
    $(document).on("mousemove", toggleSwitch);
  });

  $(document).on("mouseup", function() {
    $(document).off("mousemove");
  });

  switchElement.on("click", function() {
    isSwitchOn = !isSwitchOn;
    updateSwitchPosition();
  });

  function toggleSwitch(event) {
    const containerOffset = switchElement.parent().offset().left;
    const mouseX = event.pageX - containerOffset;
    const switchWidth = switchElement.width();
    const maxX = switchElement.parent().width() - switchWidth;

    if (mouseX >= 0 && mouseX <= maxX) {
      isSwitchOn = mouseX >= maxX / 2;
      updateSwitchPosition();
    }
  }

  function updateSwitchPosition() {
    const switchWidth = switchElement.width();
    const maxX = switchElement.parent().width() - switchWidth;
    const newPosition = isSwitchOn ? 20 : 0;
    switchElement.css("transform", `translateX(${newPosition}px)`);
    const switchContainer = switchElement.parent();
    if (isSwitchOn) {
      switchContainer.addClass("active");
    } else {
      switchContainer.removeClass("active");
    }
  }
});
