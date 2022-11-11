# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- [x] View the optimal layout depending on their device's screen size
- [x] See hover and focus states for interactive elements

### Screenshots

Desktop

![](./src/assets/Overview%20Desktop.jpeg)

Mobile

![](./src/assets/Overview%20Mobile.jpeg)

Video

![](./src/assets/Overview.gif)

### Links

- Solution URL: [GitHub](https://github.com/im-victor-mendez/React-Product_Preview_Card_Component)
- Live Site URL: [Netlify](https://fabulous-starlight-803819.netlify.app/)

## My process

### Built with

- [React](https://reactjs.org/) - JS library
- [Framer Motion](https://www.framer.com/motion/) - Animation library for React
- Mobile-first workflow
- Semantic HTML5 markup
- CSS custom properties
- Flex

### What I learned

How to use Framer Motion:
<br />
To use animation properties, you need to import { motion } from 'framer-motion' and add to an html tag:
```html
<motion.tagName></motion.tagName>
```
Then I used:
  - states:
    ```js
    initial={{
      opacity: 0, scale: 0.5
    }}
    ```
  - animate (from the initial state to this values):
    ```js
    animate={{
      opacity: 1, scale: 1
    }}
    ```
  - transition (time of the animation in seconds):
    ```js
    transition= {{
      duration: 0.5
    }}
    ```
  - whileHover
  - variants (to use with React states):
    ```js
    const [isAdded, setIsAdded] = useState()
    
    const variants = {
      added: {
          backgroundColor: 'red',
          width: 'fit-content',
          borderRadius: '0.5rem',
      },
      deleted: {
          backgroundColor: 'var(--dark-cyan)',
          width: '100%',
          borderRadius: '0.5rem',
      }
    }

    /* In element as property */
    variants={{variants}}
    ```

## Author

- LinkedIn - [in/im-victor-mendez](https://www.linkedin.com/in/im-victor-mendez/)
- GitHub - [@im-victor-mendez](https://github.com/im-victor-mendez)
- Frontend Mentor - [@im-victor-mendez](https://www.frontendmentor.io/profile/im-victor-mendez)