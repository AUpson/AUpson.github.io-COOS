// ============================================================
//  CWEB 190 – Web Midterm Question Bank
//  LO4 (DOM, BOM, jQuery) + LO5 (Forms, Validation, Regex)
//  50 Multiple Choice  |  20 Coding
// ============================================================

const multipleChoice = [

  // ── LO4: Browser Object Model (BOM) ──────────────────────

  {
    id: "mc01",
    topic: "LO4 – BOM",
    question: "What does <code>window.open(\"https://example.com\")</code> do?",
    options: [
      "Redirects the current tab to the URL",
      "Opens the URL in a new browser tab or window",
      "Fetches the URL in the background",
      "Opens a dialog box with the URL"
    ],
    answer: 1,
    explanation: "window.open() opens the specified URL in a new browser tab or popup window, leaving the current page intact."
  },
  {
    id: "mc02",
    topic: "LO4 – BOM",
    question: "What does <code>history.back()</code> do?",
    options: [
      "Clears the browser history",
      "Navigates back one page in the browser history",
      "Reloads the current page",
      "Closes the current tab"
    ],
    answer: 1,
    explanation: "history.back() is equivalent to clicking the browser's Back button — it navigates to the previous entry in the session history."
  },
  {
    id: "mc03",
    topic: "LO4 – BOM",
    question: "What is the key difference between <code>window.location = url</code> and <code>window.location.replace(url)</code>?",
    options: [
      "There is no difference — both behave identically",
      "location.replace() opens in a new tab; location= stays in the same tab",
      "location= adds the URL to browser history; location.replace() does NOT add to history",
      "location.replace() is faster because it skips DNS lookup"
    ],
    answer: 2,
    explanation: "Assigning to window.location navigates and pushes a new entry onto the history stack (user can press Back). location.replace() replaces the current entry, so the user cannot go back."
  },
  {
    id: "mc04",
    topic: "LO4 – BOM",
    question: "Which expression displays the current page URL in an alert?",
    options: [
      "alert(document.URL)",
      "alert(window.location)",
      "alert(history.url)",
      "alert(window.href)"
    ],
    answer: 1,
    explanation: "window.location (or window.location.href) holds the full current URL. Both A and B technically work, but the course uses window.location directly in alert()."
  },
  {
    id: "mc05",
    topic: "LO4 – BOM",
    question: "What does <code>window.prompt(\"Enter a Name\")</code> do?",
    options: [
      "Displays an alert with the message",
      "Logs the message to the console",
      "Shows a dialog box with a text input and returns the entered value",
      "Creates a form input on the page"
    ],
    answer: 2,
    explanation: "window.prompt() shows a dialog with a message and a text field. It returns the string the user typed, or null if they cancelled."
  },

  // ── LO4: DOM Manipulation ─────────────────────────────────

  {
    id: "mc06",
    topic: "LO4 – DOM Manipulation",
    question: "What does <code>document.createElement(\"p\")</code> return?",
    options: [
      "A string containing \"&lt;p&gt;&lt;/p&gt;\"",
      "A new &lt;p&gt; DOM element node (not yet in the document)",
      "The first &lt;p&gt; element already on the page",
      "The innerHTML of all paragraphs"
    ],
    answer: 1,
    explanation: "document.createElement() creates a new element node of the given tag name. It is detached from the document until you append it somewhere."
  },
  {
    id: "mc07",
    topic: "LO4 – DOM Manipulation",
    question: "What does <code>document.createTextNode(\"Hello\")</code> return?",
    options: [
      "A &lt;span&gt; element containing \"Hello\"",
      "A text node with the value \"Hello\"",
      "An element with innerHTML set to \"Hello\"",
      "An alert dialog showing \"Hello\""
    ],
    answer: 1,
    explanation: "createTextNode() creates a raw text node — not an element. You typically append it to an element with appendChild()."
  },
  {
    id: "mc08",
    topic: "LO4 – DOM Manipulation",
    question: "Which method adds a child node to the END of a parent element?",
    options: [
      "insertBefore()",
      "prependChild()",
      "appendChild()",
      "addChild()"
    ],
    answer: 2,
    explanation: "parent.appendChild(child) attaches the child node as the last child of the parent. prependChild() and addChild() do not exist in standard DOM."
  },
  {
    id: "mc09",
    topic: "LO4 – DOM Manipulation",
    question: "What does <code>element.parentNode</code> return?",
    options: [
      "The first child element",
      "The next sibling element",
      "The parent element of the current node",
      "The root &lt;html&gt; element always"
    ],
    answer: 2,
    explanation: "parentNode is a read-only property that returns the immediate parent node of the element in the DOM tree."
  },
  {
    id: "mc10",
    topic: "LO4 – DOM Manipulation",
    question: "Which method inserts a new node immediately BEFORE a reference node inside a parent?",
    options: [
      "insertAfter(newNode, refNode)",
      "parent.insertBefore(newNode, refNode)",
      "refNode.before(newNode) only",
      "parent.before(newNode)"
    ],
    answer: 1,
    explanation: "parent.insertBefore(newNode, referenceNode) inserts newNode as a child of parent, positioned just before referenceNode."
  },
  {
    id: "mc11",
    topic: "LO4 – DOM Manipulation",
    question: "What is the difference between calling <code>element.replaceWith(newNode)</code> versus <code>parent.replaceChild(newNode, oldNode)</code>?",
    options: [
      "replaceWith() is deprecated and should not be used",
      "replaceWith() is called on the element being replaced; replaceChild() is called on the parent",
      "replaceChild() is the modern method; replaceWith() is the legacy method",
      "They are identical in every way"
    ],
    answer: 1,
    explanation: "replaceWith() is a modern convenience method called directly on the node to be replaced. replaceChild() is the classic method called on the parent node."
  },
  {
    id: "mc12",
    topic: "LO4 – DOM Manipulation",
    question: "What does <code>element.innerHTML = \"&lt;em&gt;Hello&lt;/em&gt;\"</code> do?",
    options: [
      "Creates a separate text node containing the literal string",
      "Sets the element's content, parsing the string as HTML markup",
      "Appends the text without replacing existing content",
      "Logs the HTML string to the console"
    ],
    answer: 1,
    explanation: "innerHTML parses the assigned string as HTML, replacing existing content. This is different from textContent, which treats the string as plain text."
  },
  {
    id: "mc13",
    topic: "LO4 – DOM Manipulation",
    question: "What does <code>document.querySelector(\"button\")</code> return?",
    options: [
      "All button elements on the page as a NodeList",
      "The first button element found in the document",
      "A button element with id=\"button\"",
      "An array of all button elements"
    ],
    answer: 1,
    explanation: "querySelector() returns only the FIRST element that matches the CSS selector. Use querySelectorAll() to get all matches."
  },
  {
    id: "mc14",
    topic: "LO4 – DOM Manipulation",
    question: "Which TWO of the following correctly remove an element from the DOM? (Pick the answer that lists both)",
    options: [
      "parent.deleteChild(child) and child.delete()",
      "parent.removeChild(child) and child.remove()",
      "parent.removeChild(child) only",
      "child.remove() only"
    ],
    answer: 1,
    explanation: "Both parent.removeChild(child) (classic) and child.remove() (modern convenience method) correctly remove an element from the DOM."
  },
  {
    id: "mc15",
    topic: "LO4 – DOM Manipulation",
    question: "What is the purpose of <code>window.onload = function() { ... }</code>?",
    options: [
      "Runs the code immediately when the script tag is parsed",
      "Runs the code after the full page (HTML, images, stylesheets) has finished loading",
      "Loads an external JavaScript file",
      "Triggers code when a specific element is clicked"
    ],
    answer: 1,
    explanation: "window.onload fires after the complete page including all resources (images, stylesheets) has loaded — ensuring DOM elements exist before the script accesses them."
  },

  // ── LO4: jQuery Fundamentals ──────────────────────────────

  {
    id: "mc16",
    topic: "LO4 – jQuery Fundamentals",
    question: "What does the <code>$</code> symbol represent in jQuery code?",
    options: [
      "A CSS variable shorthand",
      "The jQuery function — an alias for jQuery()",
      "A JavaScript template literal marker",
      "A reference to the document object"
    ],
    answer: 1,
    explanation: "$ is simply an alias for the jQuery() function. Writing $(\"p\") is the same as writing jQuery(\"p\")."
  },
  {
    id: "mc17",
    topic: "LO4 – jQuery Fundamentals",
    question: "Which of the following is the PREFERRED shorthand for the jQuery document ready handler?",
    options: [
      "$(document).ready(function() { })",
      "window.onload = function() { }",
      "$(function() { })",
      "$().ready(function() { })"
    ],
    answer: 2,
    explanation: "$(function() { }) is the shortest and most commonly recommended jQuery ready handler. $(document).ready() is the verbose equivalent. window.onload is plain JS and waits for all resources including images."
  },
  {
    id: "mc18",
    topic: "LO4 – jQuery Selectors",
    question: "What does <code>$(\"#myDiv\")</code> select?",
    options: [
      "All elements with class=\"myDiv\"",
      "The element with id=\"myDiv\"",
      "All div elements on the page",
      "The first div element"
    ],
    answer: 1,
    explanation: "# in jQuery (like CSS) selects by ID. Since IDs must be unique, this returns a jQuery object wrapping one element."
  },
  {
    id: "mc19",
    topic: "LO4 – jQuery Selectors",
    question: "What does <code>$(\".highlight\")</code> select?",
    options: [
      "The element with id=\"highlight\"",
      "All elements that have class=\"highlight\"",
      "All currently highlighted text on the page",
      "The first element on the page"
    ],
    answer: 1,
    explanation: ". in jQuery (like CSS) selects by class name. Multiple elements can share a class, so this may return many elements."
  },
  {
    id: "mc20",
    topic: "LO4 – jQuery Selectors",
    question: "What does <code>$(\"ul li:odd\")</code> select?",
    options: [
      "ul elements at odd positions",
      "li elements at odd indexes (1, 3, 5…) inside any ul",
      "li elements that contain the word 'odd'",
      "The first li inside each ul"
    ],
    answer: 1,
    explanation: ":odd is a jQuery filter that selects elements at odd zero-based indexes (i.e., the 2nd, 4th, 6th items). Note: jQuery's :odd is zero-indexed, so index 1, 3, 5… are selected."
  },
  {
    id: "mc21",
    topic: "LO4 – jQuery Selectors",
    question: "What does <code>$(\"p:first\")</code> select?",
    options: [
      "The first child element inside every &lt;p&gt;",
      "The first &lt;p&gt; element in the entire document",
      "All &lt;p&gt; elements with class=\"first\"",
      "The parent of the first &lt;p&gt;"
    ],
    answer: 1,
    explanation: ":first is a jQuery filter that limits the matched set to only the very first matched element across the whole document."
  },
  {
    id: "mc22",
    topic: "LO4 – jQuery CSS",
    question: "What is the correct jQuery syntax to set MULTIPLE CSS properties at once?",
    options: [
      "$('p').css('color: red; font-size: 14px')",
      "$('p').css('color', 'red', 'font-size', '14px')",
      "$('p').css({ color: 'red', fontSize: '14px' })",
      "$('p').setCSS({ color: 'red' })"
    ],
    answer: 2,
    explanation: "To set multiple properties, pass a plain object (key-value pairs) to .css(). CSS property names can be camelCase (fontSize) or quoted kebab-case ('font-size')."
  },
  {
    id: "mc23",
    topic: "LO4 – jQuery CSS",
    question: "What does <code>$(\"p\").hide()</code> do?",
    options: [
      "Deletes all &lt;p&gt; elements from the DOM",
      "Sets display: none on all &lt;p&gt; elements, making them invisible",
      "Moves &lt;p&gt; elements off-screen using position",
      "Removes the text content of all &lt;p&gt; elements"
    ],
    answer: 1,
    explanation: ".hide() sets display: none on matched elements. The elements remain in the DOM — use .show() or .toggle() to reveal them again."
  },
  {
    id: "mc24",
    topic: "LO4 – jQuery Show/Hide",
    question: "What does <code>$(\"#result\").show('slow')</code> do?",
    options: [
      "Displays the element immediately with no animation",
      "Makes the element visible with a slow fade/expand animation",
      "Shows a slow-loading spinner inside the element",
      "Logs 'slow' to the console"
    ],
    answer: 1,
    explanation: ".show() with a speed string ('slow', 'fast') or milliseconds animates the element into visibility. 'slow' ≈ 600ms."
  },

  // ── LO4: jQuery DOM Manipulation ─────────────────────────

  {
    id: "mc25",
    topic: "LO4 – jQuery DOM",
    question: "What does <code>$(\"body\").append(\"&lt;p&gt;Hello&lt;/p&gt;\")</code> do?",
    options: [
      "Inserts the &lt;p&gt; before the &lt;body&gt; tag",
      "Adds the &lt;p&gt; as the LAST child of &lt;body&gt;",
      "Replaces the entire body content with the &lt;p&gt;",
      "Prepends the &lt;p&gt; at the beginning of &lt;body&gt;"
    ],
    answer: 1,
    explanation: ".append() inserts content at the END (as the last child) of each matched element. Use .prepend() for the beginning."
  },
  {
    id: "mc26",
    topic: "LO4 – jQuery DOM",
    question: "What does <code>$(\"body\").prepend(\"&lt;p&gt;Hello&lt;/p&gt;\")</code> do?",
    options: [
      "Adds the &lt;p&gt; at the END of the body",
      "Adds the &lt;p&gt; at the BEGINNING of the body (first child)",
      "Inserts the &lt;p&gt; before the opening &lt;body&gt; tag",
      "Replaces the first child of body"
    ],
    answer: 1,
    explanation: ".prepend() inserts content at the beginning (as the first child) of each matched element — the opposite of .append()."
  },
  {
    id: "mc27",
    topic: "LO4 – jQuery DOM",
    question: "What does <code>$(\"p\").after(\"&lt;span&gt;Hi&lt;/span&gt;\")</code> do?",
    options: [
      "Inserts the &lt;span&gt; inside each &lt;p&gt; at the end",
      "Inserts the &lt;span&gt; immediately AFTER each &lt;p&gt; element (as a sibling)",
      "Inserts the &lt;span&gt; before each &lt;p&gt;",
      "Appends the &lt;span&gt; to the parent of each &lt;p&gt;"
    ],
    answer: 1,
    explanation: ".after() inserts the content as a sibling immediately following each matched element. Use .before() for the preceding position."
  },
  {
    id: "mc28",
    topic: "LO4 – jQuery DOM",
    question: "What does <code>$(\".even\").remove()</code> do?",
    options: [
      "Hides elements with class=\"even\" using display:none",
      "Permanently removes all elements with class=\"even\" from the DOM",
      "Clears the text content inside .even elements",
      "Removes the class \"even\" from matched elements"
    ],
    answer: 1,
    explanation: ".remove() completely removes matched elements and their children from the DOM. This is different from .hide(), which only hides them visually."
  },
  {
    id: "mc29",
    topic: "LO4 – jQuery DOM",
    question: "What does <code>$(\"#para\").replaceWith(\"&lt;h2&gt;New Heading&lt;/h2&gt;\")</code> do?",
    options: [
      "Adds an &lt;h2&gt; after #para",
      "Replaces the element #para in the DOM with a new &lt;h2&gt; element",
      "Wraps #para in an &lt;h2&gt; tag",
      "Changes the tag name of #para to h2"
    ],
    answer: 1,
    explanation: ".replaceWith() replaces each matched element with the provided content. The original element is removed from the DOM."
  },

  // ── LO4: jQuery Events and Effects ────────────────────────

  {
    id: "mc30",
    topic: "LO4 – jQuery Events",
    question: "What does <code>$(\"#btn\").on(\"click\", handler)</code> do?",
    options: [
      "Triggers a click on #btn immediately",
      "Attaches a click event listener to the element with id=\"btn\"",
      "Removes all existing click listeners from #btn",
      "Creates a new button element"
    ],
    answer: 1,
    explanation: ".on(event, handler) is the standard jQuery way to attach event listeners. It is preferred over shorthand methods like .click() because it also supports event delegation."
  },
  {
    id: "mc31",
    topic: "LO4 – jQuery Events",
    question: "In jQuery, what is the relationship between <code>.on(\"click\", fn)</code> and <code>.click(fn)</code>?",
    options: [
      ".click() is the modern preferred method; .on() is legacy",
      "They are functionally equivalent for simple click binding; .on() is more flexible overall",
      ".on() does not work for click events",
      ".click() supports multiple event types; .on() only supports one"
    ],
    answer: 1,
    explanation: "For basic click binding they behave identically. .on() is more powerful because it can handle multiple events, namespacing, and event delegation for dynamic elements."
  },
  {
    id: "mc32",
    topic: "LO4 – jQuery Events",
    question: "What does <code>.hover(enterFn, leaveFn)</code> do in jQuery?",
    options: [
      "Applies a CSS :hover style",
      "Attaches mouseenter and mouseleave event handlers simultaneously",
      "Changes the cursor to a pointer on hover",
      "Delays code execution by the hover duration"
    ],
    answer: 1,
    explanation: ".hover() is a jQuery shorthand that binds the first function to mouseenter and the second to mouseleave on the matched elements."
  },
  {
    id: "mc33",
    topic: "LO4 – jQuery Effects",
    question: "What does <code>.slideDown(100)</code> do in jQuery?",
    options: [
      "Scrolls the page down 100 pixels",
      "Reveals the element with a sliding animation over 100 milliseconds",
      "Hides the element by sliding it down over 100ms",
      "Moves the element 100 pixels down the page"
    ],
    answer: 1,
    explanation: ".slideDown() makes a hidden element visible by animating its height from 0 to its full height. The argument is the duration in milliseconds."
  },
  {
    id: "mc34",
    topic: "LO4 – jQuery Effects",
    question: "In the dropdown menu example, what does <code>$(\"ul\", this)</code> mean inside a .hover() handler?",
    options: [
      "Selects all &lt;ul&gt; elements on the entire page",
      "Selects &lt;ul&gt; elements that are descendants of 'this' (the hovered element)",
      "Selects &lt;ul&gt; elements with class=\"this\"",
      "Selects the parent &lt;ul&gt; of the hovered element"
    ],
    answer: 1,
    explanation: "The second argument to $() sets the search context. $('ul', this) finds all ul elements inside 'this' (the currently hovered li), not across the whole page."
  },
  {
    id: "mc35",
    topic: "LO4 – jQuery Selectors",
    question: "What does the CSS selector <code>\"#menubar > li\"</code> select?",
    options: [
      "All &lt;li&gt; elements anywhere inside #menubar (any depth)",
      "Only DIRECT child &lt;li&gt; elements of #menubar",
      "The first &lt;li&gt; inside #menubar",
      "&lt;li&gt; elements whose id contains 'menubar'"
    ],
    answer: 1,
    explanation: "The > combinator is the 'child combinator' — it only selects direct children, not grandchildren or deeper descendants."
  },

  // ── LO5: HTML Forms ───────────────────────────────────────

  {
    id: "mc36",
    topic: "LO5 – HTML Forms",
    question: "What is the purpose of <code>&lt;label for=\"nameID\"&gt;</code> paired with <code>&lt;input id=\"nameID\"&gt;</code>?",
    options: [
      "It gives the form a visible title",
      "It associates the label with the input so clicking the label also focuses the input",
      "It sets the input's placeholder text",
      "It gives the input a CSS class name"
    ],
    answer: 1,
    explanation: "The for attribute on a label must match the id of the corresponding form control. This improves accessibility and usability — clicking the label activates the input."
  },
  {
    id: "mc37",
    topic: "LO5 – HTML Forms",
    question: "Which pair of HTML elements groups related form controls and provides an optional group title?",
    options: [
      "&lt;section&gt; and &lt;h3&gt;",
      "&lt;fieldset&gt; and &lt;legend&gt;",
      "&lt;div&gt; and &lt;label&gt;",
      "&lt;form&gt; and &lt;title&gt;"
    ],
    answer: 1,
    explanation: "&lt;fieldset&gt; draws a box around a group of controls. The optional &lt;legend&gt; inside it provides a caption/title for the group."
  },
  {
    id: "mc38",
    topic: "LO5 – HTML Forms",
    question: "What does <code>&lt;input type=\"reset\"&gt;</code> do?",
    options: [
      "Submits the form data to the server",
      "Resets all form fields to their default (original HTML) values",
      "Clears only text fields",
      "Refreshes the entire page"
    ],
    answer: 1,
    explanation: "A reset button sets every form control back to its defaultValue / defaultChecked — the values set in the HTML markup, not a blank state."
  },
  {
    id: "mc39",
    topic: "LO5 – HTML Forms",
    question: "In a group of radio buttons, what makes only ONE selectable at a time?",
    options: [
      "Each radio must have a unique id attribute",
      "All radio buttons in the group must share the same name attribute",
      "The type=\"radio\" attribute alone enforces mutual exclusivity",
      "A JavaScript listener must enforce it manually"
    ],
    answer: 1,
    explanation: "The browser groups radio buttons by their name attribute. Only one radio button with the same name can be selected at a time."
  },
  {
    id: "mc40",
    topic: "LO5 – HTML Forms",
    question: "What does the HTML attribute <code>checked</code> do on a radio or checkbox input?",
    options: [
      "Validates the input on form load",
      "Sets the control as selected/checked by default when the page loads",
      "Disables the input from being changed",
      "Adds a visible checkmark style"
    ],
    answer: 1,
    explanation: "The checked attribute marks the control as pre-selected. In JavaScript this corresponds to the defaultChecked property."
  },
  {
    id: "mc41",
    topic: "LO5 – HTML Forms",
    question: "Which attribute limits the maximum number of characters a text input will accept?",
    options: ["limit", "maxlength", "size", "max"],
    answer: 1,
    explanation: "maxlength sets the maximum number of characters a user can type into a text or password input."
  },

  // ── LO5: JavaScript Form Handling ─────────────────────────

  {
    id: "mc42",
    topic: "LO5 – Form Handling",
    question: "What does <code>event.preventDefault()</code> do inside a form submit handler?",
    options: [
      "Pauses form submission until all validation is done",
      "Cancels the form's default submission behaviour (prevents the page from navigating)",
      "Prevents the user from typing in the form",
      "Resets all form fields"
    ],
    answer: 1,
    explanation: "event.preventDefault() tells the browser not to execute the default action for the event. For a form submit, the default action is to send the data and navigate — calling preventDefault() stops that."
  },
  {
    id: "mc43",
    topic: "LO5 – Form Handling",
    question: "How do you access all form controls as an array-like collection in JavaScript?",
    options: [
      "document.getForms()",
      "form.controls",
      "form.elements",
      "form.inputs"
    ],
    answer: 2,
    explanation: "The elements property of a form element returns an HTMLFormControlsCollection containing all the form controls (inputs, selects, textareas, buttons)."
  },
  {
    id: "mc44",
    topic: "LO5 – Form Handling",
    question: "For a checkbox element, which property gives a boolean indicating whether it is currently checked?",
    options: [".value", ".selected", ".checked", ".isChecked"],
    answer: 2,
    explanation: ".checked returns true or false for checkbox and radio inputs. Do not use .value — that returns the value attribute string, not the checked state."
  },
  {
    id: "mc45",
    topic: "LO5 – Form Handling",
    question: "What does <code>select.selectedIndex</code> return when the placeholder (first) option with no value is chosen?",
    options: ["1", "null", "0", "-1"],
    answer: 2,
    explanation: "selectedIndex returns the zero-based index of the selected option. The placeholder option at the top is index 0. It returns -1 only if nothing at all is selected (rare in practice)."
  },
  {
    id: "mc46",
    topic: "LO5 – Form Handling",
    question: "Which event fires when an input field LOSES focus (the user clicks or tabs away)?",
    options: ["change", "focus", "blur", "leave"],
    answer: 2,
    explanation: "blur fires when an element loses focus. It is commonly used to validate a field immediately after the user finishes with it."
  },
  {
    id: "mc47",
    topic: "LO5 – Form Handling",
    question: "What is the difference between <code>input.value</code> and <code>input.defaultValue</code>?",
    options: [
      "They are always identical",
      "value is the current (live) value; defaultValue is the value originally set in the HTML",
      "defaultValue holds the placeholder text",
      "value only works on text inputs; defaultValue works on all inputs"
    ],
    answer: 1,
    explanation: "input.value reflects what the user has typed (or the current state). input.defaultValue is the value that was in the HTML markup when the page loaded — clicking Reset restores inputs to their defaultValue."
  },
  {
    id: "mc48",
    topic: "LO5 – Form Handling",
    question: "Why should you use <code>element.textContent = \"Error!\"</code> for error messages rather than <code>element.innerHTML</code>?",
    options: [
      "textContent renders HTML tags; innerHTML does not",
      "textContent treats the string as plain text (safer — no HTML injection risk); innerHTML parses it as HTML",
      "textContent requires jQuery; innerHTML is pure JS",
      "innerHTML cannot update error messages"
    ],
    answer: 1,
    explanation: "textContent is safer for displaying user-controlled or dynamic text because it never parses HTML, preventing XSS-style injection. innerHTML should only be used when you intentionally want HTML markup."
  },

  // ── LO5: Regex ────────────────────────────────────────────

  {
    id: "mc49",
    topic: "LO5 – Regex",
    question: "What do the <code>^</code> and <code>$</code> anchors mean in a regular expression?",
    options: [
      "^ means NOT; $ means end of a word",
      "^ means start of the string; $ means end of the string",
      "Both mean the start of a new line",
      "^ is a power operator; $ is a variable marker"
    ],
    answer: 1,
    explanation: "In a regex, ^ anchors the match to the beginning of the string and $ anchors it to the end. Together they ensure the entire string matches the pattern, not just a substring."
  },
  {
    id: "mc50",
    topic: "LO5 – jQuery Validate",
    question: "In the jQuery Validate plugin, what object are the <code>rules</code> keys based on?",
    options: [
      "The id attributes of the input elements",
      "The name attributes of the input elements",
      "The class attributes of the input elements",
      "The order of inputs in the DOM"
    ],
    answer: 1,
    explanation: "jQuery Validate looks up rules by the name attribute of form controls, not by id. This matches how form data is submitted to a server."
  }
];

// ============================================================
//  CODING QUESTIONS (20)
// ============================================================

const codingQuestions = [
  {
    id: "cd01",
    topic: "LO4 – BOM",
    question: "Write JavaScript code that opens <code>\"https://www.saskpolytech.ca\"</code> in a new browser tab when the button with <code>id=\"btnOpen\"</code> is clicked.",
    hint: "Use document.getElementById to get the button, assign to .onclick, then call window.open().",
    answer: `document.getElementById("btnOpen").onclick = function() {
    window.open("https://www.saskpolytech.ca");
};`
  },
  {
    id: "cd02",
    topic: "LO4 – BOM",
    question: "Show both ways to navigate to <code>\"https://tsn.ca\"</code>: one that <strong>adds</strong> an entry to browser history, and one that <strong>does not</strong>.",
    hint: "Assign to window.location for history; use window.location.replace() to skip history.",
    answer: `// Adds to browser history (Back button works):
window.location = "https://tsn.ca";

// Does NOT add to history (Back button skips it):
window.location.replace("https://tsn.ca");`
  },
  {
    id: "cd03",
    topic: "LO4 – DOM Manipulation",
    question: "Using pure JavaScript DOM methods, create a new <code>&lt;p&gt;</code> element containing the text <code>\"Hello World\"</code> and append it to <code>document.body</code>.",
    hint: "You need createElement, createTextNode, appendChild (twice — once for text→p, once for p→body).",
    answer: `const newPara = document.createElement("p");
const textNode = document.createTextNode("Hello World");
newPara.appendChild(textNode);
document.body.appendChild(newPara);`
  },
  {
    id: "cd04",
    topic: "LO4 – DOM Manipulation",
    question: "Insert a new <code>&lt;p&gt;</code> element containing <code>\"Inserted!\"</code> immediately BEFORE an existing element with <code>id=\"para\"</code>, using <code>insertBefore()</code>.",
    hint: "You need the new node, the reference node, and the parent. Remember: parentNode gives you the parent.",
    answer: `const newPara = document.createElement("p");
newPara.appendChild(document.createTextNode("Inserted!"));
const oldPara = document.getElementById("para");
oldPara.parentNode.insertBefore(newPara, oldPara);`
  },
  {
    id: "cd05",
    topic: "LO4 – DOM Manipulation",
    question: "Get the element with <code>id=\"smart\"</code> and replace it with a new <code>&lt;em&gt;</code> element containing the text <code>\"Updated text\"</code>, using <code>replaceWith()</code>.",
    hint: "replaceWith() is called on the element being removed, not the parent.",
    answer: `const newEm = document.createElement("em");
newEm.appendChild(document.createTextNode("Updated text"));
const smart = document.getElementById("smart");
smart.replaceWith(newEm);`
  },
  {
    id: "cd06",
    topic: "LO4 – jQuery",
    question: "Write jQuery code using the document ready <strong>shorthand</strong> to: set the first paragraph's colour to red, and set the background-color, colour, and padding of all spans using a single <code>.css()</code> call with an object.",
    hint: "Use $(function(){}) for ready. $('p:first') and $('span').css({ ... }) with an object literal.",
    answer: `$(function() {
    $("p:first").css("color", "red");
    $("span").css({
        "background-color": "blue",
        color: "white",
        padding: "3px"
    });
});`
  },
  {
    id: "cd07",
    topic: "LO4 – jQuery",
    question: "Write jQuery code for a dropdown menu: hovering over direct child <code>&lt;li&gt;</code> elements of <code>#menubar</code> slides down their nested <code>&lt;ul&gt;</code> (100ms), and slides it back up on mouse leave.",
    hint: "Use the child combinator selector, .hover() with two functions, and $('ul', this) for context.",
    answer: `$(function() {
    $("#menubar > li").hover(
        function() {
            $("ul", this).slideDown(100);
        },
        function() {
            $("ul", this).slideUp(100);
        }
    );
});`
  },
  {
    id: "cd08",
    topic: "LO4 – jQuery",
    question: "Write jQuery code inside a document ready handler that: (1) attaches a click handler to <code>#italic</code> using <code>.on()</code> that alerts \"Hello\", and (2) attaches a click handler to <code>#bold</code> using <code>.click()</code> that alerts \"Hi\".",
    hint: "Both methods are equivalent for simple click binding.",
    answer: `$(function() {
    $("#italic").on("click", function() {
        alert("Hello");
    });

    $("#bold").click(function() {
        alert("Hi");
    });
});`
  },
  {
    id: "cd09",
    topic: "LO4 – jQuery",
    question: "Write jQuery code that: appends a new <code>&lt;p&gt;Cheesiest line&lt;/p&gt;</code> to the body, then removes the last <code>&lt;p&gt;</code> on the page.",
    hint: "Use .append() on body, then $('p:last').remove().",
    answer: `$("body").append("<p>Cheesiest line</p>");
$("p:last").remove();`
  },
  {
    id: "cd10",
    topic: "LO5 – Form Handling",
    question: "Write a form submit handler that loops over all elements in the form with <code>id=\"myForm\"</code> using <code>form.elements</code>, and builds a string showing each element's <code>name</code>, <code>type</code>, and either <code>.checked</code> (for checkboxes) or <code>.value</code>. Call <code>event.preventDefault()</code>.",
    hint: "Access form.elements, loop by index, branch on elements[i].type === 'checkbox'.",
    answer: `function handleSubmission(event) {
    const elements = document.getElementById("myForm").elements;
    let output = "";
    for (let i = 0; i < elements.length; i++) {
        output += "Name: " + elements[i].name;
        output += ", Type: " + elements[i].type;
        if (elements[i].type === "checkbox") {
            output += ", Value: " + elements[i].checked;
        } else {
            output += ", Value: " + elements[i].value;
        }
        output += "\\n";
    }
    alert(output);
    event.preventDefault();
}`
  },
  {
    id: "cd11",
    topic: "LO5 – Form Handling",
    question: "Write code to read the <code>selectedIndex</code> and total number of options from a <code>&lt;select id=\"size\"&gt;</code>, then loop through its options and push the <code>.text</code> of any selected option into an array.",
    hint: "Use select.length, select.selectedIndex, select.options, options[i].selected, and options[i].text.",
    answer: `const sizeSelect = document.getElementById("size");
const numOptions = sizeSelect.length;
const selectedIdx = sizeSelect.selectedIndex;

const selectedItems = [];
for (let i = 0; i < sizeSelect.options.length; i++) {
    if (sizeSelect.options[i].selected) {
        selectedItems.push(sizeSelect.options[i].text);
    }
}
console.log("Options:", numOptions, "Selected:", selectedItems);`
  },
  {
    id: "cd12",
    topic: "LO5 – Form Validation",
    question: "Write a <code>blur</code> event handler for an input with <code>id=\"name\"</code>. If the field is empty, display an error in a <code>&lt;span id=\"error\"&gt;</code> and turn the input background red. If it has a value, clear the error and reset the background.",
    hint: "Attach to 'blur' event. Check .value === ''. Use .textContent for error and .style.backgroundColor for the field.",
    answer: `window.addEventListener("load", function() {
    document.getElementById("name").addEventListener("blur", validateName);
});

function validateName(event) {
    const element = document.getElementById("name");
    if (element.value === "") {
        document.getElementById("error").textContent = "Name field must not be blank";
        element.style.backgroundColor = "Red";
        event.preventDefault();
    } else {
        document.getElementById("error").textContent = "";
        element.style.backgroundColor = "";
    }
}`
  },
  {
    id: "cd13",
    topic: "LO5 – Regex",
    question: "Write a regex pattern that validates a CST student ID: exactly 3 letters (upper or lower case) followed by exactly 3 digits. Then show how to test a value against it using <code>.test()</code>.",
    hint: "Use ^ and $ anchors. [A-Za-z]{3} for letters, [0-9]{3} for digits.",
    answer: `const regex_pattern = /^[A-Za-z]{3}[0-9]{3}$/;

const studentId = "CST123";
if (regex_pattern.test(studentId)) {
    console.log("Valid student ID");
} else {
    console.log("Invalid student ID");
}`
  },
  {
    id: "cd14",
    topic: "LO5 – Regex",
    question: "Write a regex pattern that matches a full name: one or more letters, a single space, then one or more letters (first name + space + last name). Use it inside a form submit handler that calls <code>element.focus()</code> and <code>event.preventDefault()</code> on failure.",
    hint: "Pattern: /^[A-Za-z]+ [A-Za-z]+$/ — note the literal space in the middle.",
    answer: `function handleSubmission(event) {
    const nameInput = document.getElementById("name");
    const regex_pattern = /^[A-Za-z]+ [A-Za-z]+$/;
    if (regex_pattern.test(nameInput.value)) {
        console.log("Valid name");
    } else {
        nameInput.focus();
        event.preventDefault();
    }
}`
  },
  {
    id: "cd15",
    topic: "LO5 – jQuery Validate",
    question: "Write the jQuery Validate setup for a form with <code>id=\"testForm\"</code> with rules for: <code>name</code> (required, minlength 2) and <code>age</code> (required, digits, range 1–100). Include custom messages for both <code>name</code> and <code>age</code> required rules.",
    hint: "Rules are keyed by the input's name attribute. Use the rules and messages objects inside .validate({}).",
    answer: `$(function() {
    $("#testForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            age: {
                required: true,
                digits: true,
                range: [1, 100]
            }
        },
        messages: {
            name: {
                required: "Please enter your name"
            },
            age: {
                required: "You have to enter your age"
            }
        },
        submitHandler: function() {
            alert("Submission Succeeded");
        }
    });
});`
  },
  {
    id: "cd16",
    topic: "LO5 – jQuery Validate",
    question: "Write the jQuery Validate rule that ensures a field named <code>\"confirm-password\"</code> must equal the value of an input with <code>id=\"new-password\"</code>.",
    hint: "Use the equalTo built-in rule with a CSS selector string.",
    answer: `$("#myForm").validate({
    rules: {
        "confirm-password": {
            equalTo: "#new-password"
        }
    }
});`
  },
  {
    id: "cd17",
    topic: "LO5 – jQuery Validate",
    question: "Write the code to add a custom validation method called <code>\"pattern\"</code> to jQuery Validate. It should accept a regex parameter, return <code>true</code> if the field is optional and empty, otherwise test the value against the regex.",
    hint: "Use $.validator.addMethod(name, fn, message). Inside the fn, use this.optional(element) and new RegExp(param).",
    answer: `$.validator.addMethod("pattern", function(value, element, param) {
    if (this.optional(element)) return true;
    param = new RegExp(param);
    return param.test(value);
}, "Invalid pattern");`
  },
  {
    id: "cd18",
    topic: "LO5 – jQuery Validate",
    question: "Write the <code>invalidHandler</code> for jQuery Validate that counts invalid fields with <code>validator.numberOfInvalids()</code> and shows a message — singular (\"1 field\") or plural (\"N fields\") — inside a <code>div.error span</code>.",
    hint: "Use a ternary operator for singular vs plural. Show the div with .show().",
    answer: `invalidHandler: function(event, validator) {
    let errors = validator.numberOfInvalids();
    if (errors) {
        let message = (errors == 1)
            ? "You missed 1 field. It has been highlighted"
            : "You have missed " + errors + " fields. They have been highlighted";
        $("div.error span").html(message);
        $("div.error").show();
    }
}`
  },
  {
    id: "cd19",
    topic: "LO5 – Form Validation",
    question: "Write a complete <code>window load</code> handler that attaches a submit listener to <code>id=\"myForm\"</code>. The handler should validate: (1) the name input is not empty, and (2) a select with <code>id=\"size\"</code> has <code>selectedIndex !== 0</code>. Display errors in spans and call <code>event.preventDefault()</code> if either fails.",
    hint: "Track a 'valid' boolean. Check each field individually and set .textContent on error spans. Only preventDefault if !valid.",
    answer: `window.addEventListener("load", function() {
    document.getElementById("myForm").addEventListener("submit", handleSubmit);
});

function handleSubmit(event) {
    let valid = true;

    const nameInput = document.getElementById("name");
    if (nameInput.value === "") {
        document.getElementById("nameError").textContent = "Name is required";
        nameInput.style.backgroundColor = "red";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
        nameInput.style.backgroundColor = "";
    }

    const sizeSelect = document.getElementById("size");
    if (sizeSelect.selectedIndex === 0) {
        document.getElementById("sizeError").textContent = "Please select a size";
        valid = false;
    } else {
        document.getElementById("sizeError").textContent = "";
    }

    if (!valid) {
        event.preventDefault();
    }
}`
  },
  {
    id: "cd20",
    topic: "LO4 – jQuery DOM",
    question: "Using jQuery, write code that: (1) replaces the element with <code>id=\"para\"</code> with a new <code>&lt;p&gt;</code>, (2) adds a new paragraph after every existing <code>&lt;p&gt;</code>, and (3) inserts a paragraph before the first <code>&lt;p&gt;</code>.",
    hint: "Use .replaceWith(), .after(), and $('p:first').before(). Order matters — call replaceWith first.",
    answer: `// Replace #para with a new paragraph
$("#para").replaceWith("<p>Replaced paragraph</p>");

// Add a sibling after every p
$("p").after("<p>Added after</p>");

// Insert before the first p
$("p:first").before("<p>Added before first</p>");`
  }
];
