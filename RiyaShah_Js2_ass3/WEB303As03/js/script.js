  let forjson = $.getJSON("team.json")
  .done(function (data) {
    $.each(data.members, function (key, val) {
      console.log("data key: ", key, " and data value: ", val);

      $("#team").append(`<div>
          <h2>${val.name}</h2>
          <h5>${val.position}</h5>
          <p>${val.bio}</p>
        </div>`);
    });
    console.log("The getjson object: ", forjson);
  })
  .fail(function () {
    $("#team").text("Something went wrong content couldn't be retrive!!");
  });

$.ajax({
  url: "team.json",
  type: "GET",

  success: function (data) {
    let display = $("#team");
    display.text("loading...");

    setTimeout(function () {
      display.empty();
      $.each(data.members, function (key, val) {
        console.log("data key: ", key, " and data value: ", val);

        $("#team").append(`<div>
            <h2>${val.name}</h2>
            <h5>${val.position}</h5>
            <p>${val.bio}</p>
          </div>`);
      });
    }, 3000);
    return data;
  }
});

$(document).ready(function () {
  $.getJSON();
});
  