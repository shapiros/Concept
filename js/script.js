SchoolBlocksApp.bundles.pageBuilder = true;

function PageBuilder(organizationData) {
    "use strict";
    var pb = this,
        no_of_posts = 2,
        browserWidth = $(document).width();

    pb.organizationData = organizationData;
    pb.blocks = pb.organizationData.blocks;
    pb.thirdPartyLinks = pb.organizationData.thirdPartyLinks;

    if(browserWidth > 1024){
        no_of_posts = 3;
        $("a.navbar-logo img").attr('src','assets/Logo.png');
    } else if(browserWidth <= 700){
        no_of_posts = 1;
    }

    pb.blocks.forEach(function (block) {
        switch(block.type) {
            case "video":
                pb.handleVideoBlock(block);
                break;

            case "message":
                pb.handleMessageBlock(block);
                break;

            case "eventlist":
                pb.handleEventListBlock(block, no_of_posts);

                break;

            case "newsstream":
                pb.handleNewsStreamBlock(block, no_of_posts);
                break;

            case "quicklink":
                pb.handleQuicklinkBlock(block,no_of_posts+1);
                break;

            case "staffdirectory":
                pb.handleStaffBlock(block,no_of_posts+1);
                break;
        }
    });

    pb.getSocialLinks();
    pb.getLocation();
    pb.mapLocation();
    $(".slide").hide();
    $("#news-slide-1").show();
    $("#event-slide-1").show();
}

PageBuilder.prototype.handleVideoBlock = function (block) {
    "use strict";
    var pb = this,
        $blockWell = $('.sb-data-block.video'),
        $html = $('<iframe></iframe>');

    if(block.embedUrl !== "") {
        $html.attr("src", block.embedUrl);
        $html.attr("frameborder", "0");
        $html.attr("allowfullscreen", "true");
        $blockWell.html($html);
    }
};

PageBuilder.prototype.getSocialLinks = function () {
    "use strict";
    var pb = this;

   var facebook = pb.thirdPartyLinks[1];
   var twitter = pb.thirdPartyLinks[2];
   $("a.facebook-link").attr('href',facebook.value);
   $("a.twitter-link").attr('href',twitter.value);
   $("#school-name").html(pb.organizationData.title);
   $(".cover-content img.ph").remove();
   $(".cover-title").html(pb.organizationData.title);
   $(".cover-description").html(pb.organizationData.blocks[0].items[0].message.substring(0,100)+"...");
   //console.log(pb.organizationData.blocks[0].items[0].message);
};

PageBuilder.prototype.handleMessageBlock = function (block) {
    "use strict";
    var pb = this;
   var msg = block.items[0].message;
   var title = block.items[0].title;
   $("#abt-text").html(msg.substring(0,400)+"...");
   $("#abt-title").html("<span class=\"text\">"+title.substring(0,title.indexOf(" "))+"</span>"+title.substring(title.indexOf(" ")));
   $(".text a.btn-large").attr('href',block.items[0].url);
};

PageBuilder.prototype.getEventHTML = function (object, index) {
    "use strict";
    $(".featured-events div.PH").remove();
    var pb = this;
   var code = "";
   //Event Code Start
   code += "<div id=\"event-"+(index+1)+"\" class=\"f-event\">";
      if(object[index].start!=null){
         code += "<div class=\"date\"><p class=\"month\">"+pb.getMonth(object[index].start)+"</p>";
         code += "<p class=\"_date\">"+object[index].start.substring(8,10)+"</p></div>";
      }
      else{
         code += "<div class=\"date\">";
         code += "<p class=\"month\">X</p></div>";
      }

   code += "<div class=\"body\">";

      if(object[index].title!=null){
         code += "<h3 class=\"event-title event\">"+object[index].title+"</h3>";
      }
      else{
         code += "<h3 class=\"event-title event\">Event "+(index+1)+"</h3>";
      }

      if(object[index].start!=null||object[index].location!=null){
   code += "<p class=\"time-venue\">"//2016-10-21 09:30:00
      if(object[index].start!=null&object[index].start.substring(11,16)!="00:00"){
         code += object[index].start.substring(11,16)+" ";
      }
      if(object[index].end!=null&&object[index].end.substring(11,16)!="00:00"){
            code += "- "+object[index].end.substring(11,16)+" ";
      }
      if(object[index].location!=null){
            code +="<i style=\"padding:0px 10px\" class=\"fa fa-map-marker\"></i>   "+ object[index].location.substring(0,30)+"...";
      }
      code += "</p>";
      if(object[index].description!=null){
         code += "<p class=\"description\">"+object[index].description.substring(0,200)+"..."+"</p>";
      }
      else{
         code += "<p class=\"description\">Event Description Not Avilable</p>";
      }
   }
   code += "</div></div>";
   //Event Code End
   return code;
};

PageBuilder.prototype.getMonth = function (start) {
    "use strict";
    var pb = this;
   var month = "";
   var date = start.substring(5,7);
   switch(date){
      case "01": month = "JAN";break;
      case "02": month = "FEB";break;
      case "03": month = "MAR";break;
      case "04": month = "APR";break;
      case "05": month = "MAY";break;
      case "06": month = "JUN";break;
      case "07": month = "JUL";break;
      case "08": month = "AUG";break;
      case "09": month = "SEPT";break;
      case "10": month = "OCT";break;
      case "11": month = "NOV";break;
      case "12": month = "DEC";break;
   }
   return month;
};

PageBuilder.prototype.handleEventListBlock = function (block, pod) {
   "use strict";
   var pb = this;
   $(".latest-news div.PH").remove();
   var feEvents = block.items;
   var index = 0,code ="",j=1;
   var posts = feEvents.length;
   while(index<posts){
     var i=pod;
     code += "<div id=\"event-slide-"+j+"\"class=\"slide\">";
     while(i--) {
       code += pb.getEventHTML(feEvents,index++);
       if(index==posts)break;
     }
     code+="</div>";
     if(index==posts)break;
     j++;
   }
   $(".featured-events").append(code);
};

PageBuilder.prototype.getNewsMonth = function (start) {
    "use strict";
    var pb = this;
   var month = "";
   var date = start.substring(5,7);
   switch(date){
      case "01": month = "January";break;
      case "02": month = "February";break;
      case "03": month = "March";break;
      case "04": month = "April";break;
      case "05": month = "May";break;
      case "06": month = "June";break;
      case "07": month = "July";break;
      case "08": month = "August";break;
      case "09": month = "September";break;
      case "10": month = "October";break;
      case "11": month = "November";break;
      case "12": month = "December";break;
   }
   return month;
};

PageBuilder.prototype.getNewsHTML = function (object, index) {
    "use strict";
    var pb = this;
   var code = "";
   //Event Code Start
   code += "<div id=\"news-"+(index+1)+"\" class=\"l-news\">";
   if(object[index].image!=null){
      code += "<div class=\"thumbnail\" style=\"background:url("+object[index].image+");background-position: center;background-size: cover;\"></div>"
   }
   else{
      code += "<div class=\"thumbnail\" style=\"background:url(assets/video-ph.png);background-position: center;background-size: cover;\"></div>"
   }
   code += "<div class=\"body\">";
      if(object[index].title!=null){
         code += "<h3 class=\"event-title\">"+object[index].title.substring(0,50)+"...</h3>";
      }
      else{
         code += "<h3 class=\"event-title\">Event "+(index+1)+"</h3>";
      }
      if(object[index].timestamp!=null){
      code += "<p class=\"time-venue\">"//2016-10-21 09:30:00
      code += pb.getNewsMonth(object[index].timestamp)+", "+object[index].timestamp.substring(0,4);
      code += "</p>";
      }
      if(object[index].description!=null){
         code += "<p class=\"description\">"+object[index].description.substring(0,200)+"..."+"</p>";
      }
      else{
         code += "<p class=\"description\">Event Description Not Avilable</p>";
      }
      code += "</div></div>";
   //Event Code End
   return code;
};

PageBuilder.prototype.handleNewsStreamBlock = function (block, pod) {
   "use strict";
   var pb = this;
   var news = block.items;
   var index = 0,code ="",j=1;
   var posts = news.length;
   while(index<posts){
     var i=pod;
     code += "<div id=\"news-slide-"+j+"\"class=\"slide\">";
     while(i--) {
       code += pb.getNewsHTML(news,index++);
       if(index==posts)break;
     }
     code+="</div>";
     if(index==posts)break;
     j++;
   }
   //news.forEach( function(){
   //    code+=getNewsHTML(news,index++,pod);
   //});
   $(".latest-news").append(code);
};

PageBuilder.prototype.getNumberOfSlides = function (object, postsToDisplay) {
    "use strict";
    var pb = this;
    var i,posts = object.length;
    return parseInt(posts/postsToDisplay);
};

PageBuilder.prototype.getLocation = function () {
    "use strict";
    var pb = this;
    var location = pb.organizationData.locations[0];
    //var lat = parseFloat(location.coordinates.substring(1,location.coordinates.indexOf(",")));
    //var long = parseFloat(location.coordinates.substring(location.coordinates.indexOf(",")+1,location.coordinates.indexOf(")")));
    //console.log(lat+""+long);
    var code="";
    if(location.address!=null){
      code += "<p class=\"address\"><span><i class=\"fa fa-location-arrow\" style=\"padding:0;padding-right:15px\"></i>Address </span>"+location.address+", "+location.city+", "+location.state+"</p>";
    }
    if(location.phone!=null){
     code += "<p class=\"address\"><span><i class=\"fa fa-phone\" style=\"padding:0;padding-right:15px\"></i>Phone </span>"+location.phone+"</p>";
    }
    pb.mapLocation();
    $("#mylocation").append(code);
};

PageBuilder.prototype.mapLocation = function () {
    "use strict";
    var pb = this;
    var coordinates = pb.organizationData.locations[0].coordinates;
    var lat = parseFloat(coordinates.substring(1,coordinates.indexOf(",")));
    var long = parseFloat(coordinates.substring(coordinates.indexOf(",")+1,coordinates.indexOf(")")));
    var mapOptions = {
      center: new google.maps.LatLng(lat,long),
      zoom: 18,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({position:mapOptions.center});
    marker.setMap(map);
};

PageBuilder.prototype.handleQuicklinkBlock = function (block,pod) {
    "use strict";
    var pb = this;
    var links = block.items;
    var index = 0,code ="",j=1;
    var posts = links.length;
    //$("section.quicklinks").css('background-image','url(./assets/quick-link.png)')
    $("section.quicklinks div.contents").css('background-color','rgba(0,4,24,0.8)')
    $("div.qlinks ul li").remove();
    if($(document).width()<=700)pod=1;
    while(index<posts){
      var i=pod;
      code += "<li>";
      while(i--) {
        code += "<a href=\""+links[index].url+"\"><img src=\""+links[index].image+"\"></img><span>"+links[index++].title+"</span></a>";
        //code += "<div><a href=\""+links[index].url+"\"></div>"
        if(index==posts)break;
      }
      code += "</li>";
      if(index==posts)break;
      j++;
    }
    $(".qlinks ul").append(code);
};
PageBuilder.prototype.getTeacher = function (object,pod){
  "use strict";
  var pb = this;
  var teachers = object;
  var index = 0,code ="",j=1;
  var posts = teachers.length;
  //console.log(teachers);
  while(index<posts){
    var i=pod;
    code += "<li class=\"teachers\">";
    while(i--) {
      code+="<div class=\"teacher\">";
      if(teachers[index].image!=null){
        code+="<a class=\"img\" style=\"background:url("+teachers[index].image+");background-size:cover;background-position:center\">0</a>";
      }
      if(teachers[index].title!=null){
        code+="<p class=\"name\">"+teachers[index].title+"</p>";
      }
      if(teachers[index].subject!=null){
        code+="<p class=\"subject\">("+teachers[index].subject+")</p>";
      }
      if(teachers[index].description!=null){
        code+="<p class=\"description\">"+teachers[index++].description+"</p>";
      }
      code+="<ul class=\"social-links\"><li><a class=\"twitter-link\" style=\"padding-left:0\" href=\"#\"><i class=\"fa fa-twitter\"></i></a></li><li><a class=\"facebook-link\" href=\"#\"><i class=\"fa fa-facebook\"></i></a></li><li><a id=\"linkedin\" href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li><li><a id=\"instagram\" href=\"#\"><i class=\"fa fa-instagram\"></i></a></li></ul>"
      code+="</div>"
      if(index==posts)break;
    }
    code += "</li>";
    if(index==posts)break;
    j++;
  }
  return code;
}
PageBuilder.prototype.handleStaffBlock = function (block,pod) {
    "use strict";
    var pb = this;
    var subject = block.items;
    var index = 0,code="",code1="",j=1;
    var temp = "active"
    var posts = subject.length;
    while(index<posts){
      //code += "<li><a data-toggle=\"tab\" href=\"#"+subject[index].title+"\">"+subject[index].title+"</a></li>";
      code += "<li><a data-toggle=\"tab\" href=\"#"+subject[index].title+"\">"+subject[index].title+"</a></li>";
      code1 += "<div id=\""+subject[index].title+"\" class=\"tab-pane fade in\"><div class=\"slider\"><ul>";
      code1 += pb.getTeacher(subject[index++].teachers,pod);
      code1 += "</ul></div></div>";
    }
    $("section.staff-directory ul").append(code);
    $("section.staff-directory div.tab-content").append(code1);
    $("ul.nav.nav-tabs li:first").addClass("active");
    $("div.tab-content div:first").addClass("active");
};
