// TwentyTwenty Reveal
$(document).ready(function () {
  if ($("#beforeAndAfterContainer").length > 0) {
    $("#beforeAndAfterContainer").twentytwenty({
      default_offset_pct: 0.5, // How much of the before image is visible when the page loads
      //   orientation: "vertical", // Orientation of the before and after images ('horizontal' or 'vertical')
      before_label: "Stinger96", // Set a custom before label
      after_label: "Avenger96", // Set a custom after label
      //   no_overlay: true, //Do not show the overlay with before and after
      //   move_slider_on_hover: true, // Move slider on mouse hover?
      //   move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
      //   click_to_move: false, // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
    });
  }
  if ($("#giveaway_mezzanine").length > 0) {
    var giveaway_mezzanines = [
      {
        name: "On Camera Mezzanine",
        image: "/assets/images/products/mezzanine/on-camera-front-sd.png",
      },
      {
        name: "Shiratech Bosch Sensor Mezzanine",
        image: "/assets/images/products/mezzanine/shiratech-bosch-front-sd.jpg",
      },
      {
        name: "Shiratech LTE CAT-M1/NB1",
        image: "/assets/images/products/mezzanine/shiratech-nb1-front-sd.jpg",
      },
      {
        name: "Tresor Mezzanine",
        image: "/assets/images/products/mezzanine/tresor-front-sd.png",
      },
      {
        name: "Shiratech FPGA Mezzanine",
        image: "/assets/images/products/mezzanine/shiratech-fpga-front-sd.jpg",
      },
      {
        name: "Shiratech LTE Mezzanine",
        image: "/assets/images/products/mezzanine/shiratech-lte-front-sd.jpg",
      },
      {
        name: "Audio Mezzanine",
        image: "/assets/images/products/mezzanine/audio-mezzanine.png",
      },
      {
        name: "AiVA-96",
        image: "/assets/images/products/mezzanine/aiva96-front-sd.png",
      },
      {
        name: "D3Camera",
        image:
          "/assets/images/products/mezzanine/Camera_Mezzanine_Board_OV5640_front.jpg",
      },
      {
        name: "Ethernet Card",
        image: "/assets/images/products/mezzanine/Ethernet_Front.jpg",
      },
      {
        name: "Link Sprite",
        image:
          "/assets/images/products/mezzanine/linksprite-mezzanine-kit-front-sd.png",
      },
      {
        name: "STM32 Sensor Mezzanine Board",
        image: "/assets/images/products/mezzanine/STM32_Front.png",
      },
      {
        name: "Analog Devices 3D Time Of Flight Mezzanine Stack",
        image: "/assets/images/products/mezzanine/3dtof-side.jpg",
      },
    ];

    $("#mezz_select").change(function (e) {
      var board_name = e.target.value;
      for (i = 0; i < giveaway_mezzanines.length; i += 1) {
        if (giveaway_mezzanines[i].name === board_name) {
          $("#mezz_image").attr("src", giveaway_mezzanines[i].image);
        }
      }
    });
  }
});
