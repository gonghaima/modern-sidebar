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

Inside the main entry src/index.js we're going to clean it up a bit so we can focus on the component alone:

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
import * as serviceWorker from './serviceWorker'
ReactDOM.render(<App />, document.getElementById('root'))
serviceWorker.unregister()
```

Now create src/App.js:

```javascript
import React from 'react'
const App = () => <div />
export default App
```

App will be importing and using our Sidebar component by creating Sidebar.js, so lets go ahead and create that:

```javascript
import React from 'react'
function Sidebar() {
  return null
}
export default Sidebar
```

Now I’m going to install a CSS library, but you can actually achieve the same working functionality of the sidebar that we will be building without it. The reason I’m doing this is that I like seeing the additional ripple effects in addition to having icons readily available to use.

```javascript
npm install @material-ui/core @material-ui/icons
```

Once that is installed, we need to think of a base structure in the user interface that our sidebar will be built upon. A solution is to use the unordered list (```<ul>```) element that renders list items (```<li>```). We will import List and ListItem from @material-ui/core since the List component is essentially a ul element, and the ListItem component is essentially a li.

Let's start off hardcoding a couple of items in the sidebar to visualize how this might look like to boost our confidence. Sometimes a little extra confidence can help improve our productivity:

```javascript
import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function Sidebar() {
  return (
    <List disablePadding dense>
      <ListItem button>
        <ListItemText>Home</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Billing</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemText>Settings</ListItemText>
      </ListItem>
    </List>
  )
}

export default Sidebar
```

disablePadding and dense were used to slightly shrink the size of each of the items, and the button prop was used to add the stunning ripple effect.
This is what we have so far:

![sidebar](md/sidebar.gif)

Now that we have boosted our confidence, let’s go ahead and define props.items, which Sidebar will consume to render its items.
With that said, we’re also going to expect an items prop, which is an array of objects representing each item in the sidebar menu. We want to keep the functionality as simple as possible or else we could quickly overcomplicate the component.
Let’s first create items in the App component and pass it as props.items to Sidebar:

```javascript
import React from 'react'
import Sidebar from './Sidebar'

const items = [
  { name: 'home', label: 'Home' },
  { name: 'billing', label: 'Billing' },
  { name: 'settings', label: 'Settings' },
]

function App() {
  return (
    <div>
      <Sidebar items={items} />
    </div>
  )
}

export default App
```

We will now update the Sidebar component to reflect this array structure:

```javascript
import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function Sidebar({ items }) {
  return (
    <List disablePadding dense>
      {items.map(({ label, name, ...rest }) => (
        <ListItem key={name} button {...rest}>
          <ListItemText>{label}</ListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default Sidebar
```
