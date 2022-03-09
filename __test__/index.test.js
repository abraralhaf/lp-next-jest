
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'



describe('Home', () => {

  // it('renders a heading', () => {
  //   render(<Home />)

  //   const heading = screen.getByRole('heading', {
  //     name: /welcome to next\.js!/i,
  //   })

  //   expect(heading).toBeInTheDocument()
  // })


  it('renders homepage unchanged', () => {
    const { container } = render(<Home />)
    expect(container).toMatchSnapshot()
  })

})



// import { test, expect } from '@playwright/test'

// test('should navigate to the about page', async ({ page }) => {
//   // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
//   await page.goto('http://localhost:3000/')
//   // Find an element with the text 'About Page' and click on it
//   await page.click('text=Mulai')
//   // The new url should be "/about" (baseURL is used there)
//   await expect(page).toHaveURL('#')
//   // The new page should contain an h1 with "About Page"
//   // await expect(page.locator('h1')).toContainText('About Page')
// })

// import React from "react";
// import ReactDOM from "react-dom";
// import Index from '../pages/index.js';
// import { render, screen } from '@testing-library/react';

// test('renders learn react link', () => {
//     render(<Index />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
//   });

  
// test("renders the conntent", () =>{
   
//     const root =document.createElement("div");
//     ReactDOM.render(<Index />, root);
// });

// describe('Renders the Content', () => {
//     test('load', ()=>{

//         render(<Index />);
//         const linkElement = screen.getByText(/learn react/i);
//         expect(linkElement).toBeInTheDocument();

//         // const wrapper = shallow(<Benefit></Benefit>);
//         // const text = wrapper.find('p p');
//         // expect(text.text()).toBe('Dengarkan dimana saja')
//     }); 
    
// })































