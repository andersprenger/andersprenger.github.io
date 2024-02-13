$(document).ready(function() {
   var initDot = $("#loading");
   var loadingInterval = setInterval(function() {
       var dots = initDot.text();
       initDot.text(dots.length >= 5 ? "" : dots + ".");
   }, 350);

   setTimeout(function() {
       clearInterval(loadingInterval);
       $('#loadingH1').hide();
       startProgram();
   }, 1500);

   function startProgram() {
       var data = [
           { selector: '#message', text: "RUNNING RESUME PROTOCOL FOR @ANDERSPRENGER" },
           { selector: '#developerOccupation', text: "OCCUPATION: iOS DEVELOPER | HUMAN COMPUTER INTERACTION AND DATA SCIENCE RESEARCHER" },
           { selector: '#developerAwards', text: "AWARDS: APPLE WWDC 2022 SWIFT STUDENT CHALLENGE" },
           { selector: '#iOSDevelopmentSkills', text: "iOS DEVELOPMENT", classAdd: { selector: '#iOSDevIcon', classes: 'fa fa-apple' }},
           { selector: '#coreSkills', text: "iOS CORE: SWIFT | UIKIT | SWIFT UI | VIEW CODE | OBJECTIVE-C" },
           { selector: '#additionalSkills', text: "SKILLS: ARKIT | SCENEKIT | SPRITEKIT | CORE ML | XCTESTS | CORE DATA" },
           { selector: '#methodologies', text: "METHODOLOGIES: AGILE | SCRUM | MVVM | CI/CD | UNIT TESTING" },
           { selector: '#publishedApps', text: "APPS PUBLISHED: VOYAGE TRAVEL PLANNER | CODEBIRD | SPACE VOID" },
           { selector: '#professionalExperience', text: "PROFESSIONAL EXPERIENCE: FEBRUARY 2021 ~ DECEMBER 2022 - APPLE DEVELOPER ACADEMY" },
           { selector: '#researchFocus', text: "RESEARCH", classAdd: { selector: '#researchIcon', classes: 'fa fa-search' }},
           { selector: '#hciDataScience', text: "FOCUS: HUMAN COMPUTER INTERACTION AND DATA SCIENCE AT DAVINT LAB, PUCRS" },
           { selector: '#educationBackground', text: "EDUCATION", classAdd: { selector: '#educationIcon', classes: 'fa fa-graduation-cap' }},
           { selector: '#csDegree', text: "BSc COMPUTER SCIENCE STUDENT AT PUCRS" },
           { selector: '#academyAlumnus', text: "2022 APPLE DEVELOPER ACADEMY ALUMNUS" }
       ];        

       var greeting = "ABOUT ANDERSON SPRENGER";
       typeText('#greeting', greeting, 0, function() {
           $('#greeting').removeClass("cursor");
           typeTextSequentially(data, 0);
       }, false);
   }

   function typeTextSequentially(data, index) {
       if (index < data.length) {
           var item = data[index];
           var addSignCursor = true;

           if (item.classAdd && item.classAdd.classes.includes('fa')) {
               addSignCursor = false;
               $(item.classAdd.selector).addClass(item.classAdd.classes);
           }
           
           typeText(item.selector, item.text, 0, function() {
               $(item.selector).removeClass("cursor");
               if (item.selector === '#message') { // After #message, show loading
                   loadingResume(function() {
                       typeTextSequentially(data, index + 1);
                   });
               } else {
                   typeTextSequentially(data, index + 1);
               }
           }, addSignCursor);
       }
   }

   function loadingResume(callback) {
       $("#loadingMessage2").show();
       var dotAlpha = document.getElementById("alpha-loading");
       var loadingAlpha = setInterval(function() {
           if(dotAlpha.innerHTML.length == 6) {
               dotAlpha.innerHTML = "";
           } else {
               dotAlpha.innerHTML += ".";
           }
       }, 350); // Dot Speed

       setTimeout(function() {
           clearInterval(loadingAlpha);
           $("#loadingMessage2").hide();
           if (callback) callback(); // Proceed to the next part of the sequence
       }, 2000);
   }

   function typeText(selector, text, i, callback, addSignCursor = true) {
       if (addSignCursor) {
           $(selector).addClass("sign cursor").text(text.substring(0, i));
       } else {
           $(selector).text(text.substring(0, i));
       }
       if (i < text.length) {
           setTimeout(function() {
               typeText(selector, text, i + 1, callback, addSignCursor);
           }, 35);
       } else {
           if (callback) callback();
       }
   }
});
