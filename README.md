# _Ask Me Anything_

#### Independent project for Epicodus - 6/2/17

#### By _**Dominic Brown**_

## Description

This small app was created as a simple exercise to demonstrate a rudimentary knowledge of the ember.js framework.  The app mimics some of the functionality of popular message boards such as reddit, allowing users to post questions and answers.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

In OSX terminal or Git Bash on Windows:
```
git clone https://github.com/Umitosan/AMA.git
```
* change into the new directory (i.e. '~/Desktop/AMA')
```
npm install
```
```
bower install
```
## Run the app

In your terminal opened in the AMA project folder:
```
ember server
```
* Open your browser at [http://localhost:4200](http://localhost:4200).

## Specifications

| behavior |  input   |  output  |
|----------|:--------:|:--------:|
|The app allows a user to add a question as a message on the board|user enters a few lines of text into an text box and presses a button to post the message|the message appears on the page|
|The app attaches an author name to each message|the user enters their name into a text box separate from the message body|the message appears on the page with the author's name attached|
|The app has a path to each message's details as a link|the user clicks a 'details' link on the main page|the browser navigates to a new page showing the message's details|
|The app allows modification of a question's details|after navigating to a specific question detail page, the user clicks a button to 'edit' the question's contents and click's 'save'|the question's body and/or author is then updated on the page|
|The app allow answers to be posted and attached to a question|the user navigates to a question's detail page, clicks a button to add an answer, enters the answer text and author, then clicks a 'save' button|the answer appears under the question|
|The app has a nav bar for easy |||

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

## Authors

* Dominic Brown

## License

_This is web page is licensed under the MIT License._

Copyright © 2017 **_Dominic Brown_**
