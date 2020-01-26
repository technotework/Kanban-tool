import { injectGlobal } from "vue-styled-components";
import props from "./props";

injectGlobal`
//normalize and initial styles
html {
  font-size: ${props.fontSize.base};
  -webkit-text-size-adjust: 100%; 
}

body {
  margin: 0;
  font-size: ${props.fontSize.medium};
  font-family: ${props.fontFamily.nomal};
  line-height: ${props.lineHeight.medium};
}

h1{
  font-family: ${props.fontFamily.nomal};
}

main {
  display: block;
}

hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}

pre {
  font-size: ${props.fontSize.medium};
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}

b,
strong {
  font-weight: bolder;
}

code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: ${props.fontSize.medium};
}

small {
  font-size: ${props.fontSize.medium};
}

sub,
sup {
  font-size: ${props.fontSize.medium};
  line-height: ${props.lineHeight.medium};
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
}

*:focus {
outline: none;
}
 
button,
input,
optgroup,
select,
textarea,
label { 
  font-size: ${props.fontSize.medium};
  line-height: ${props.lineHeight.medium};
  margin: 0; 
}

button,
input { 
  overflow: visible;
}

button,
select { 
  text-transform: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: none;
  border: none;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

legend {
  box-sizing: border-box; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}


progress {
  vertical-align: baseline;
}

textarea {
  overflow: auto;
}


[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  -webkit-appearance: button; 
}

details {
  display: block;
}

summary {
  display: list-item;
}

template {
  display: none;
}

[hidden] {
  display: none;
}
`;