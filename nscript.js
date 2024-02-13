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
            executeSequentially(data, 0);
        });
    }

    function executeSequentially(data, index) {
        if (index < data.length) {
            var item = data[index];
            typeText(item.selector, item.text, 0, function() {
                $(item.selector).removeClass("cursor");
                executeSequentially(data, index + 1);
            });
        }
    }

    function typeText(selector, text, i, callback) {
        $(selector).addClass("sign cursor").text(text.substring(0, i));
        if (i < text.length) {
            setTimeout(function() {
                typeText(selector, text, i + 1, callback);
            }, 35);
        } else {
            if (callback) callback();
        }
    }
});
