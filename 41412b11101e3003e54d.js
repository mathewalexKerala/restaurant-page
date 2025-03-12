// Create a <style> element

import '../src/index.css';
const style = document.createElement('style');
style.type = 'text/css';

// Define the CSS as a string
const css = `
:root {
    --yellow: #FFC60B;
    --green: #85AE85;
    --light-blue: #0A95FF;
    --dark-blue: #230AFF;
    --purple: #7766FF;
    --lilac: #AAA0FF;
    --dark-orange: #df880a;
    --chocolate: #c16a08;
    --khaki: #ffde73;
}

* {
    margin: 0;
    padding: 0;
    font-family: 'Potta One', cursive;
}



header {
    display: flex;
    justify-content: center;
    background-color: var(--khaki);
    padding-top: 10px;
}

button {
    padding: 20px 30px;
    border: 1px solid black;
    border-radius: 5px 5px 0px 0px;
    border-bottom: none;
    background-color: transparent;
}

nav > button:first-child {
    background-color: var(--dark-orange);
    padding: 0;
}

div.home {
    display: flex;
    flex-direction: column;
    width: 100px;
}

nav {
    display: flex;
    align-items: center;
    position: relative;
    top: 22px;
}

nav > div {
    position: relative;
    top: 21px;
}

button:first-child {
    background-color: rgb(236, 164, 59);
}

nav > button:nth-child(2) {
    margin: 10px;
}

.content {
    background-color: var(--khaki);
    border-radius: 30px;
    max-width: 810px;
    padding: 55px;
    margin: 0 auto;
    margin-top: 55px;
}

.board {
    width: 80%;
    border: 15px solid var(--chocolate);
    height: 60px;
    clip-path: polygon(0 33.3%, 6% 0, 94% 0, 100% 33.3%, 100% 66.6%, 94% 100%, 6% 100%, 0 66.6%);
    background-color: var(--yellow);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}

div.right-bee, div.left-bee {
    width: 50px;
    height: 50px;
}

div.right-bee > img, div.left-bee > img {
    width: 100%;
    height: 100%;
}

.left-bee {
    position: relative;
    left: 10px;
    top: 10px;
    z-index: 1;
}

.right-bee {
    position: relative;
    z-index: 1;
    left: 540px;
    bottom: -3px;
}

.right-bee > img {
    transform: rotate(-353deg);
}

h1 {
    margin: 0;
    font-size: 45px;
    font-family: 'Potta One', cursive;
}

.description {
    border: 20px solid var(--chocolate);
    padding: 40px;
    width: 300px;
    margin-top: 30px;
    clip-path: polygon(0 20%, 10% 0, 90% 0, 100% 20%, 100% 80%, 90% 100%, 10% 100%, 0 80%);
    margin-left: auto;
    margin-right: auto;
    background-color: var(--yellow);
}

.description > h3 {
    margin-left: 20px;
    margin-top: 20px;
}

.hours {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

footer {
    display: flex;
    justify-content: space-evenly;
    height: 100px;
    margin-top: 28px;
    background-color: var(--yellow);
    align-items: center;
    border-radius: 20px 20px 0px 0px;
}
`;

// Add the CSS to the <style> element
if (style.styleSheet) {
    // For IE8 and below
    style.styleSheet.cssText = css;
} else {
    style.appendChild(document.createTextNode(css));
}

// Append the <style> element to the <head>
document.head.appendChild(style)