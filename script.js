var initDot = document.getElementById("loading");
var loading = setInterval(function() {
    if(initDot.innerHTML.length == 5) {
        initDot.innerHTML = "";
    } else {
        initDot.innerHTML += ".";
    }
}, 350); // Dot Speed

var $loadingMessage = $('#loadingH1');
 
setTimeout(function() {
      clearInterval(loading);
      $loadingMessage.hide();
   }, 1500);

var initProgram = setTimeout(function(){
    var greeting = "ABOUT ANDERSON SPRENGER";
    var message = "RUNNING RESUME PROTOCOL FOR @ANDERSPRENGER";
    var $identityDiv = $("#identity-results");
    var $name = "OCCUPATION: iOS DEVELOPER | HUMAN COMPUTER INTERACTION AND DATA SCIENCE RESEARCHER";
    var $awards  = "AWARDS: APPLE WWDC 2022 SWIFT STUDENT CHALLENGE";
    var $appleDev  = "iOS DEVELOPMENT";
      var $appleDevCore = "iOS CORE: SWIFT | UIKIT | SWIFT UI | VIEW CODE | OBJECTIVE-C";
      var $appleDevSkills = "SKILLS: ARKIT | SCENEKIT | SPRITEKIT | CORE ML | XCTESTS | CORE DATA";
      var $appleDevMethodologies = "METHODOLOGIES: AGILE | SCRUM | MVVM | CI/CD | UNIT TESTING";
      var $appleDevPublished = "APPS PUBLISHED: VOYAGE TRAVEL PLANNER | CODEBIRD | SPACE VOID";
      var $appleDevExperience = "PROFESSIONAL EXPERIENCE: FEBRUARY 2021 ~ DECEMBER 2022 - APPLE DEVELOPER ACADEMY";
    var $research = "RESEARCH";
      var $researchFocus = "FOCUS: HUMAN COMPUTER INTERACTION AND DATA SCIENCE AT DAVINT LAB, PUCRS";
    var $education = "EDUCATION";
      var $educationBsc = "BSc COMPUTER SCIENCE STUDENT AT PUCRS";
      var $educationAcademy = "2022 APPLE DEVELOPER ACADEMY ALUMNUS";
      
   function initIdentityResults(i){
       $("#message").addClass("sign cursor").text(message.substring(0, i));
         if(i < message.length){
             setTimeout(function(){
                 initIdentityResults(i + 1);
             }, 35);   
         }else{
            $('#message').removeClass("cursor");
            var loadingResume = function(){
                  $("#loadingMessage2").show()
                  var dotAlpha = document.getElementById("alpha-loading");
                  var loadingAlpha = setInterval(function() {
                   if(dotAlpha.innerHTML.length == 6) {
                       dotAlpha.innerHTML = "";
                   } else {
                       dotAlpha.innerHTML += ".";
                       setTimeout(function() {
                           clearInterval(loadingAlpha);
                           $("#loadingMessage2").hide();
                        }, 2000);
                   }
               }, 350);  // Dot Speed
            }
            loadingResume();
            function initOccupation(i){
               $("#occupation").addClass("sign cursor").text($name.substring(0, i));
                  if(i < $name.length){
                     setTimeout(function(){
                        initOccupation(i + 1);   
                     }, 35);
                  }else{
                     $("#occupation").removeClass("cursor");
                     setTimeout(function() {
                        initAwards(0);
                     }, 1500);      
                  }
            }
            setTimeout(function() {
               initOccupation(0);
            }, 2500);
         }
         function initAwards(i){
            $("#awards").addClass("sign cursor").text($awards.substring(0, i));
                  if(i < $awards.length){
                     setTimeout(function(){
                        initAwards(i + 1);   
                     }, 35);
                  }else{
                     $("#awards").removeClass("cursor");
                     setTimeout(function() {
                        initAppleDevelopment(0);
                     }, 1500);
                  }
         }
         function initAppleDevelopment(i){
            $('#front-end-span').addClass('fa fa-apple');
            $('#front-end').addClass("cursor").text($appleDev.substring(0, i));
               if(i < $appleDev.length){
                  setTimeout(function(){
                     initAppleDevelopment(i + 1);  
                  }, 35);
               }else{
                  $('#front-end').removeClass("cursor");
                     setTimeout(function() {
                        initAppleDevCore(0);
                     }, 1500);
               }
         }
         function initAppleDevCore(i){
            $('#js-frameworks').addClass("sign cursor").text($appleDevCore.substring(0, i));
               if(i < $appleDevCore.length){
                  setTimeout(function(){
                      initAppleDevCore(i + 1);  
                  }, 35);
               }else{
                  $('#js-frameworks').removeClass("cursor");
                     setTimeout(function() {
                        initSkills(0);
                     }, 1500);
               }
         }
         function initSkills(i){
            $('#js-libs').addClass("sign cursor").text($appleDevSkills.substring(0, i));
               if(i < $appleDevSkills.length){
                  setTimeout(function(){
                      initSkills(i + 1);  
                  }, 35);
               }else{
                  $('#js-libs').removeClass("cursor");
                     setTimeout(function() {
                        initMethodologies(0);
                     }, 1500);
               }
         }
         function initMethodologies(i){
            $('#css-frameworks').addClass("sign cursor").text($appleDevMethodologies.substring(0, i));
               if(i < $appleDevMethodologies.length){
                  setTimeout(function(){
                      initMethodologies(i + 1);  
                  }, 35);
               }else{
                  $('#css-frameworks').removeClass("cursor");
                  setTimeout(function() {
                        initAppPublished(0);
                     }, 1500);
               }
         }
          function initAppPublished(i){
            $('#css-pre').addClass("sign cursor").text($appleDevPublished.substring(0, i));
               if(i < $appleDevPublished.length){
                  setTimeout(function(){
                      initAppPublished(i + 1);  
                  }, 35);
               }else{
                  $('#css-pre').removeClass("cursor");
                  setTimeout(function() {
                        initProfessionalExperience(0);
                     }, 1500);
               }
         }
         function initProfessionalExperience(i){
            $('#front-end-animation').addClass("sign cursor").text($appleDevExperience.substring(0, i));
               if(i < $appleDevExperience.length){
                  setTimeout(function(){
                      initProfessionalExperience(i + 1);  
                  }, 35);
               }else{
                  $('#front-end-animation').removeClass("cursor");
                  setTimeout(function() {
                        initResearch(0);
                     }, 1500);
               }
         }
         function initResearch(i){
            $('#cms-span').addClass("fa fa-search")
            $('#CMS-development').addClass("cursor").text($research.substring(0, i));
               if(i < $research.length){
                  setTimeout(function(){
                      initResearch(i + 1);  
                  }, 35);
               }else{
                  $('#CMS-development').removeClass("cursor");
                  setTimeout(function() {
                        initEducationInfo(0);
                     }, 1500);
               }
         }
         function initEducationInfo(i){
            $('#wordpress').addClass("sign cursor").text($researchFocus.substring(0, i));
               if(i < $researchFocus.length){
                  setTimeout(function(){
                      initEducationInfo(i + 1);  
                  }, 35);
               }else{
                  $('#wordpress').removeClass("cursor");
                  setTimeout(function() {
                        initEducation(0);
                     }, 1500);
               }
         }
          function initEducation(i){
            $('#design-span').addClass('fa fa-graduation-cap');
            $('#design').addClass("cursor").text($education.substring(0, i));
               if(i < $education.length){
                  setTimeout(function(){
                      initEducation(i + 1);  
                  }, 35);
               }else{
                  $('#design').removeClass("cursor");
                  setTimeout(function() {
                        initUniversity(0);
                     }, 1500);
               }
         }
         function initUniversity(i){
            $('#web-design').addClass("sign cursor").text($educationBsc.substring(0, i));
               if(i < $educationBsc.length){
                  setTimeout(function(){
                      initUniversity(i + 1);  
                  }, 35);
               }else{
                  $('#web-design').removeClass("cursor");
                  setTimeout(function() {
                        initAcademy(0);
                     }, 1500);
               }
         }
         function initAcademy(i){
            $('#branding').addClass("sign cursor").text($educationAcademy.substring(0, i));
               if(i < $educationAcademy.length){
                  setTimeout(function(){
                      initAcademy(i + 1);  
                  }, 35);
               }else{
                  // $('#branding').removeClass("cursor");
                  // setTimeout(function() {
                  //       initDesignAnimation(0);
                  //    }, 1500);
               }
         }
         // function initDesignAnimation(i){
         //    $('#design-animation').addClass("sign cursor").text($designAnimation.substring(0, i));
         //       if(i < $designAnimation.length){
         //          setTimeout(function(){
         //              initDesignAnimation(i + 1);  
         //          }, 35);
         //       }else{
         //          //$('#design-animation').removeClass("cursor");
         //       }
         // }
      }
      
   function initProgramAlpha(i){
       $("#greeting").addClass("cursor").text(greeting.substring(0, i));
         if(i < greeting.length){
             setTimeout(function(){
                 initProgramAlpha(i + 1);
             }, 35);   
         }else{
            $("#greeting").removeClass("cursor");
            initIdentityResults(0);
         }
      }
      initProgramAlpha(0)

}, 1500);

initProgram()


