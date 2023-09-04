$(document).ready(function() {

    $("#stream1_btn").click(function() {
        $(".stream1").hide('highlight_stream');
        $(".stream2").hide('slow');
        $(".stream3").hide('fast');
        $(".stream1").hide('1000');
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").show('highlight_stream');
        $(".stream2").show('highlight_stream');
        $(".stream3").show('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").show('highlight_stream');
        $(".stream2").show('highlight_stream');
        $(".stream3").show('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });

}); 