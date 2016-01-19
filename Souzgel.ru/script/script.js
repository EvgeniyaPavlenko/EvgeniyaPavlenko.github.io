 
  $(document).ready(function(){
     $(function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 50,
          max: 1500,
          values: [ 50, 1500],
          slide: function( event, ui ) {
            $( "#amount" ).val( "м" + ui.values[ 0 ] + " - м" + ui.values[ 1 ] );
          }
        });
        $( "#amount" ).val( "м" + $( "#slider-range" ).slider( "values", 0 ) +
          " - м" + $( "#slider-range" ).slider( "values", 1 ) );
      });
  });