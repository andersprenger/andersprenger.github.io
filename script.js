$(document).ready(function () {
    var initDot = $("#loading");
    var loadingInterval = setInterval(function () {
        var dots = initDot.text();
        initDot.text(dots.length >= 5 ? "" : dots + ".");
    }, 350);

    setTimeout(function () {
        clearInterval(loadingInterval);
        $('#loadingH1').hide();
        startProgram();
    }, 1500);

    function startProgram() {
        var data = [
            { selector: '#message', text: "Running Resume Protocol for @andersprenger" },
            { selector: '#developerOccupation', text: "Occupation: iOS Developer | Human Computer Interaction and Data Science Researcher" },
            { selector: '#developerAwards', text: "Awards: Apple WWDC 2022 Swift Student Challenge" },
            { selector: '#iOSDevelopmentSkills', text: "iOS Development", classAdd: { selector: '#iOSDevIcon', classes: 'fa fa-apple' } },
            { selector: '#coreSkills', text: "iOS Core: Swift | UIKit | SwiftUI | View Code | Objective-C" },
            { selector: '#additionalSkills', text: "Skills: ARKit | SceneKit | SpriteKit | Core ML | XCTest | Core Data" },
            { selector: '#methodologies', text: "Methodologies: Agile | Scrum | MVVM | CI/CD | Unit Testing" },
            { selector: '#publishedApps', text: "Apps Published: Voyage Travel Planner | CodeBird | Space Void" },
            { selector: '#professionalExperience', text: "Professional Experience: February 2021 ~ December 2022 - Apple Developer Academy" },
            { selector: '#researchFocus', text: "Research", classAdd: { selector: '#researchIcon', classes: 'fa fa-search' } },
            { selector: '#hciDataScience', text: "Focus: Human Computer Interaction and Data Science at Davint Lab, PUCRS" },
            { selector: '#educationBackground', text: "Education", classAdd: { selector: '#educationIcon', classes: 'fa fa-graduation-cap' } },
            { selector: '#csDegree', text: "BSc Computer Science Student at PUCRS" },
            { selector: '#academyAlumnus', text: "2022 Apple Developer Academy Alumnus" }
        ];

        var greeting = "About Anderson Sprenger";
        typeText('#greeting', greeting, 0, function () {
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

            typeText(item.selector, item.text, 0, function () {
                $(item.selector).removeClass("cursor");
                if (item.selector === '#message') { // After #message, show loading
                    loadingResume(function () {
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
        var loadingAlpha = setInterval(function () {
            if (dotAlpha.innerHTML.length == 6) {
                dotAlpha.innerHTML = "";
            } else {
                dotAlpha.innerHTML += ".";
            }
        }, 350); // Dot Speed

        setTimeout(function () {
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
            setTimeout(function () {
                typeText(selector, text, i + 1, callback, addSignCursor);
            }, 35);
        } else {
            if (callback) callback();
        }
    }
});
