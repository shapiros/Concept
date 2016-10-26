function toggleOpen(clicked_id){
   var panel = $("#panel-"+clicked_id);
   if(panel.hasClass("open")){
      panel.removeClass("open");
   }
   else{
      $(".panel").removeClass("open");
      panel.toggleClass("open");
   }
}
