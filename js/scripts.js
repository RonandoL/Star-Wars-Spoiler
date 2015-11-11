// 1. Hide Spoiler
  $(".spoiler-falcon span").hide();
  $(".spoiler-siblings span").hide();
  $(".spoiler-jarjar span").hide();

// 2. add a button
  $(".spoiler-falcon").append("<button class='btn btn-info'>Reveal 1st Spoiler!</button>");
  $(".spoiler-siblings").append("<button class='btn btn-success'>Reveal 2nd Spoiler!</button>")
  $(".spoiler-jarjar").append("<button class='btn btn-warning'>Reveal 3rd Spoiler!</button>")

// 3. do something when button 1 is pressed
  $(".spoiler-falcon button").click(function() {
  // 3.1 show spoiler
    $(".spoiler-falcon span").show();
  // 3.2 get rid of the button
    $(".spoiler-falcon button").remove();
  });

// 3. do something when button 2 is pressed
  $(".spoiler-siblings button").click(function() {
  // 3.1 show spoiler
    $(".spoiler-siblings span").show();
  // 3.2 get rid of the button
    $(".spoiler-siblings button").remove();
  });

// 3. do something when button 3 is pressed
  $(".spoiler-jarjar button").click(function() {
  // 3.1 show spoiler
    $(".spoiler-jarjar span").show();
  // 3.2 get rid of the button
    $(".spoiler-jarjar button").remove();

  });
