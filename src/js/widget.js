// Widget Simplibook per prenotazioni
(function (w, d, s, i) {
  var script = d.createElement(s);
  script.async = true;
  script.src = "//widget.simplybook.it/v2/widget/widget.js";
  script.onload = function () {
    new SimplybookWidget({
      widget_type: "iframe",
      url: "https://daianalashartist.simplybook.it",
      theme: "minimal",
      theme_settings: {
        timeline_show_end_time: "1",
        timeline_modern_display: "as_slots",
        hide_company_label: "0",
        timeline_hide_unavailable: "1",
        hide_past_days: "0",
        sb_base_color: "#5c3324",
        btn_color_1: "#5c3324,#6e3d2a,#99573d",
        link_color: "#5c3324",
        display_item_mode: "block",
        body_bg_color: "#f9f9f9",
        sb_review_image: "",
        dark_font_color: "#38160d",
        light_font_color: "#ffffff",
        sb_company_label_color: "#6e4230",
        hide_img_mode: "1",
        sb_busy: "#d9caca",
        sb_available: "#38160d",
      },
      timeline: "modern",
      datepicker: "top_calendar",
      is_rtl: false,
      app_config: { clear_session: 0, allow_switch_to_ada: 0, predefined: [] },
      container_id: "sbw_giwswo",
    });
  };
  d.head.appendChild(script);
})(window, document, "script", "sbw_giwswo");

// ----- end widget prenotazioni

// Widget Simplibook per contatti
(function (w, d, s, i) {
  var script = d.createElement(s);
  script.async = true;
  script.src = "//widget.simplybook.it/v2/widget/widget.js";
  script.onload = function () {
    new SimplybookWidget({
      widget_type: "contact-button",
      url: "https://daianalashartist.simplybook.it",
      theme: "minimal",
      theme_settings: {
        timeline_show_end_time: "1",
        timeline_modern_display: "as_slots",
        hide_company_label: "0",
        timeline_hide_unavailable: "1",
        hide_past_days: "0",
        sb_base_color: "#5c3324",
        btn_color_1: "#5c3324,#6e3d2a,#99573d",
        link_color: "#5c3324",
        display_item_mode: "block",
        body_bg_color: "#f9f9f9",
        sb_review_image: "2",
        sb_review_image_preview:
          "/uploads/daianalashartist/image_files/preview/a766b9d6f04420f9a8273b3918b3455d.png",
        dark_font_color: "#38160d",
        light_font_color: "#ffffff",
        sb_company_label_color: "#6e4230",
        hide_img_mode: "0",
        sb_busy: "#d9caca",
        sb_available: "#38160d",
      },
      timeline: "modern",
      datepicker: "top_calendar",
      is_rtl: false,
      app_config: { clear_session: 0, allow_switch_to_ada: 0, predefined: [] },
      button_title: "Contattaci",
      button_background_color: "#99573d",
      button_text_color: "#ffffff",
      button_position: "right",
      button_position_offset: "85%",
      container_id: "sbw_yvbblb",
    });
  };
  d.head.appendChild(script);
})(window, document, "script", "sbw_yvbblb");
// ----- end widget contatti

(function (w, l) {
  w.addEventListener("message", function (e) {
    if (
      /(easyweek|eswk)\./.test(e.origin) &&
      e.data &&
      e.data.type === "redirect"
    ) {
      l.replace(e.data.url);
    }
  });
})(window, location);

