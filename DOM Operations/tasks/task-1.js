/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {

    return function (element, contents) {
        var currentElement,
            firstChild,
            documentFragment,
            i,
            newDiv,
            divToAdd;

        if (typeof (element) !== 'string' && !(element instanceof HTMLElement)) {
            throw new Error('Element type is not string or instance of HTML');
        }

        if (typeof (element) === 'string') {
            currentElement = document.getElementById(element);
        } else {
            currentElement = element;
        }

        if (!contents || contents.some(function (item) {
            return (typeof (item) !== 'string' && typeof (item) !== 'number');
        })) {
            throw new Error('Contents is neight string or number');
        }

        firstChild = currentElement.firstChild;
        while (currentElement.firstChild) {
            currentElement.removeChild(firstChild);
            firstChild = firstChild.nextSibling;
        }

        newDiv = document.createElement('div');
        documentFragment = document.createDocumentFragment();
        for (i = 0; i < contents.length; i++) {
            divToAdd = newDiv.cloneNode(true);
            divToAdd.innerHTML = contents[i];
            documentFragment.appendChild(divToAdd);
        }

        currentElement.appendChild(documentFragment);
    };
};