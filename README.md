# Create a Modern Dynamic Sidebar Menu in React Using Recursion

## The power of recursion in React

![desk](md/desk.jpeg)

Sidebars in web pages are among one of the most useful components that exist on the page due to their navigational functionality.

Today we will be building a modern sidebar in react using recursion. Recursion is a technique in which a function simply calls itself repeatedly until a condition has been met. The three rules of recursion apply when using recursion in this post:

- The function should have a condition that self destructs itself.
- The function should have a base condition.
- The function should be calling itself.

Sidebars are indeed essential to a web page, even if their level of attention does not come first. This is because they can help users navigate in different ways, such as content, that they may be interested in as opposed to a logical navigational menu.

But why would we even want to use recursion for sidebars? What difference does it make as opposed to writing out your sidebar items manually? If you’ve browsed through the internet for a while, you might have come across a website’s sidebar and realized that some sidebar items have subsections. Some sites have sidebars that hide or render certain items based on the page route the user navigated to. That is powerful!

For example, if we look at the image below inside the red circle, the Editors part is an item of the sidebar, and the three items following immediately below (Code Editor, Markdown, Text Editor) are the subsections:

![desk](md/menu-sample.jpg)

You will see by the end of this post that this seemingly complicated sidebar is actually under 50 lines of code. What?!

Here is a basic example of how you can extend the sidebar component from this post to be a little more stylish while still retaining the clean feel of it:

![desk](md/actions.gif)

Without further ado, let’s get started.

In this tutorial, we are going to quickly generate a React project with create-react-app.

Go ahead and create a project using the command below. For this tutorial i’ll call our project modern-sidebar.

```javascript
npx create-react-app modern-sidebar
```

Now go into the directory once it’s done:

```javascript
cd modern-sidebar
```
