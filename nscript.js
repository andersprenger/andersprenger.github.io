$(document).ready(function() {
    var initDot = $("#loading");
    var loadingInterval = setInterval(function() {
        var dots = initDot.text();
        initDot.text(dots.length >= 5 ? "" : dots + ".");
    }, 350); // Dot Speed

    setTimeout(function() {
        clearInterval(loadingInterval);
        $('#loadingH1').hide();
        startProgram();
    }, 1500);

    function startProgram() {
        var data = [
            { selector: '#message', text: "RUNNING RESUME PROTOCOL FOR @ANDERSPRENGER" },
            { selector: '#occupation', text: "OCCUPATION: iOS DEVELOPER | HUMAN COMPUTER INTERACTION AND DATA SCIENCE RESEARCHER" },
            { selector: '#awards', text: "AWARDS: APPLE WWDC 2022 SWIFT STUDENT CHALLENGE" },
            { selector: '#front-end', text: "iOS DEVELOPMENT", classAdd: { selector: '#front-end-span', classes: 'fa fa-apple' }},
            { selector: '#js-frameworks', text: "iOS CORE: SWIFT | UIKIT | SWIFT UI | VIEW CODE | OBJECTIVE-C" },
            { selector: '#js-libs', text: "SKILLS: ARKIT | SCENEKIT | SPRITEKIT | CORE ML | XCTESTS | CORE DATA" },
            { selector: '#css-frameworks', text: "METHODOLOGIES: AGILE | SCRUM | MVVM | CI/CD | UNIT TESTING" },
            { selector: '#css-pre', text: "APPS PUBLISHED: VOYAGE TRAVEL PLANNER | CODEBIRD | SPACE VOID" },
            { selector: '#front-end-animation', text: "PROFESSIONAL EXPERIENCE: FEBRUARY 2021 ~ DECEMBER 2022 - APPLE DEVELOPER ACADEMY" },
            { selector: '#CMS-development', text: "RESEARCH", classAdd: { selector: '#cms-span', classes: 'fa fa-search' }},
            { selector: '#wordpress', text: "FOCUS: HUMAN COMPUTER INTERACTION AND DATA SCIENCE AT DAVINT LAB, PUCRS" },
            { selector: '#design', text: "EDUCATION", classAdd: { selector: '#design-span', classes: 'fa fa-graduation-cap' }},
            { selector: '#web-design', text: "BSc COMPUTER SCIENCE STUDENT AT PUCRS" },
            { selector: '#branding', text: "2022 APPLE DEVELOPER ACADEMY ALUMNUS" }
        ];

        var greeting = "ABOUT ANDERSON SPRENGER";
        typeText('#greeting', greeting, 0, function() {
            $('#greeting').removeClass("cursor");
            typeTextSequentially(data, 0);
        }, false); // No "sign cursor" for the greeting
    }

    function typeTextSequentially(data, index) {
        if (index < data.length) {
            var item = data[index];
            var addSignCursor = true; // Default to adding "sign cursor"
            
            // Avoid adding "sign cursor" for items with FontAwesome icons
            if (item.classAdd && item.classAdd.classes.includes('fa')) {
                addSignCursor = false;
                $(item.classAdd.selector).addClass(item.classAdd.classes);
            }
            
            typeText(item.selector, item.text, 0, function() {
                $(item.selector).removeClass("cursor");
                typeTextSequentially(data, index + 1);
            }, addSignCursor);
        }
    }

    function typeText(selector, text, i, callback, addSignCursor = true) {
        if (addSignCursor) {
            $(selector).addClass("sign cursor").text(text.substring(0, i));
        } else {
            $(selector).text(text.substring(0, i)); // Keep the text update but without adding classes
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
