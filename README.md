# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [newsletter--Code](https://github.com/lienadochuko/newsletter)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS libraryk
- [Styled Components](https://styled-components.com/) - For styles

```js
const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(form));
        setisSubmit(true)
    };

    useEffect(() => {
        console.log(form);
        console.log(isSubmit);
        console.log(formErrors);        
        formValue(initValue);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            navigator('./Thankyou', {state: form})
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [formErrors])

    const handleChange = (e) => {
        const { name, value } = e.target;
        formValue({ ...form, [name]: value });
    };
```

### Continued development

One thing as a developer is continuous developer and trust me if you rest you rust!!!

### Useful resources

- [Example resource 2](https://mailtrap.io/blog/validate-emails-in-react/) - This is an amazing article which helped me finally understand Email Validation to a deeper degree. I'd recommend it to anyone still learning this concept.Email validation is a procedure that helps identify if an email address is free of typos. Basically, email validation aims to detect and prevent typos and invalid email addresses being entered into any forms. Email validation is mostly (but not always) done at the frontend.

## Author

- Website - [Daniel Erhisohwode](https://erhisdaniel.netlify.app/)
- Frontend Mentor - [@lienadochuko](https://www.frontendmentor.io/profile/lienadochuko)
- Twitter - [@erhisO](https://www.twitter.com/erhisO)


