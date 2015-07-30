/* globals $ */

/* 

Create a function that takes an id or DOM element and:
  

*/

function solve() {
    return function (selector) {
        if (typeof (selector) !== 'string' && !(selector instanceof HTMLElement)) {
            throw new Error('Selector is not a string ot HTML element');
        }

        if (document.getElementById(selector) === null) {
            throw new Error('Selectior is empty');
        }
        var button,
            conternt,
            i;
        button = document.getElementsByClassName('button');
        conternt = document.getElementsByClassName('content');

        for (i = 0; i < button.length; i++) {
            button[i].innerHTML = 'hide';
            button[i].addEventListener('click', function (ev) {
                var clickdButton = ev.target,
                    nextSibling = clickdButton.nextElementSibling,
                    validFirstContent = false,
                    firstContent;
                while (nextSibling) {
                    if (nextSibling.className === 'content') {
                        firstContent = nextSibling;
                        nextSibling = nextSibling.nextSibling;
                        while (nextSibling) {
                            if (nextSibling.className === 'button') {
                                validFirstContent = true;
                                break;
                            }
                            nextSibling = nextSibling.nextElementSibling;
                        }
                        break;
                    } else {
                        nextSibling = nextSibling.nextElementSibling;
                    }
                }
                if (validFirstContent) {
                    if (firstContent.style.display === 'none') {
                        firstContent.style.display = '';
                        clickdButton.innerHTML = 'hide';
                    } else {
                        firstContent.style.display = 'none';
                        clickdButton.innerHTML = 'show';
                    }
                }
            });

        }
    };
};

module.exports = solve;