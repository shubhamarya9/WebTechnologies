 $(document).ready( function() {
    $( "#datepicker" ).datepicker();
  } );

 $(document).ready(function()
{
  $("#Search").on("keyup", function() 
  {
    var value = $(this).val().toLowerCase();
    $("#tableData tr").filter(function() 
    {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});