# Anderson Sprenger Homepage Project

This repository hosts the code for my personal webpage, crafted from a template by Peter Girnus. It serves as a digital showcase for my resume, portfolio, projects, and more. Future enhancements, such as auto-scrolling features, are in the pipeline to enrich user experience.

## Template Adoption

My webpage springs from a template devised by Peter Girnus, a gem found on CodePen. This template has been tailored to suit the needs of this project, ensuring a sleek, responsive design.

- Template Creator: Peter Girnus
- Template Source: [Explore the template on CodePen](https://codepen.io/Gothburz/pen/YyLMVx)

## Licensing

This project embraces the MIT License, allowing open-source utilization. For detailed licensing information, refer to the [LICENSE](LICENSE) document included in this repository.

### Template License Overview

The original webpage template is under the MIT License, authorizing the usage, modification, and distribution of the software.

## Getting Started

For those interested in using this template, simply clone this repository and tweak the HTML, CSS, and JavaScript according to your desired aesthetics and functionality. Here's a guide to making it your own:

- Modify the data variable within script.js to personalize the webpage content. For instance, the Font Awesome icon `fa-search` is used to symbolize the research section. Browse through the [Font Awesome Icons collection](https://fontawesome.com/icons) to find icons that best align with your topics.

```js
{ selector: '#researchFocus', text: "RESEARCH", classAdd: { selector: '#researchIcon', classes: 'fa fa-search' }},
{ selector: '#hciDataScience', text: "FOCUS: HUMAN COMPUTER INTERACTION AND DATA SCIENCE AT DAVINT LAB, PUCRS" },
```

- Ensure that the selector corresponds with an element's ID in `index.html` for adding new content or altering existing entries.

```html
<i id="researchIcon"></i>
<h3 id="researchFocus" class="inline"></h3>
<h4 id="hciDataScience" class="sub-item"></h4>
```

- Main topics (which I marked with icons) use `<h3/>`, while subtopics are denoted with `<h4/>`. Feel free to adjust these tags as needed.

- Leverage [GitHub Pages to deploy your webpage at no cost](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages), just as I have.