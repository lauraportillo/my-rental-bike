# My rental Bike

Welcome to My Rental Bike, a web application built with **React.js** and **CRA** that allows users to rent bikes. This application has four main functionalities:

- List the available bikes in inventory
- Search for specific bike
- Calculate the price of rentals
- Create a rental request

## Getting Started

To download the repository from GitHub, open a terminal window and run the following command:

    git clone git@github.com:lauraportillo/my-rental-bike.git

Navigate to the project directory and run the following command to install the required dependencies:

    npm install

Once the dependencies have been installed, you can start the project by running the following command:

    npm start

This will start a local development server and open the application in your default web browser.

## Bike List

Here you can find different types of bikes classified by Electric, Road, and City bikes. 
You can navigate between the tabs to see each type of bike. 

![electric bikes](https://github.com/lauraportillo/my-rental-bike/blob/master/src/images/bike1.jpg)

If you need more information about a specific bike, you can click on "More info" and it will take you to the details of the bike, where it specifies the type, characteristics, price per day, and rental conditions. 
From this page, you can directly proceed to rent the bike by selecting "rent".

![detail bike](https://github.com/lauraportillo/my-rental-bike/blob/master/src/images/bike3.jpg)

## Search a Bike
In the search section, you can search for bikes according to their characteristics, such as brand or color.

![search bikes](https://github.com/lauraportillo/my-rental-bike/blob/master/src/images/bike2.jpg)

## Calculating Rental Prices and Request

The price of rentals is based on the type of bike rented and the number of rental days. When making a rental request, customers can specify how many days they want to rent the bike for, and the price will be calculated accordingly.

The shop offers three types of bikes:

- **Electric bikes**: the rental cost is the base price multiplied by the number of rental days.
- **Road bikes**: the rental cost is the base price for the first 3 days, and the base price for each additional day.
- **City bikes**: the rental cost is the base price for the first 5 days, and the base price for each additional day.

The base price is $10 per day if the rental request is made before the 15th of the month, and $12 per day if it is made on the 15th or later.

To rent a bike, you can do it directly from the rental tab...

![rent form](https://github.com/lauraportillo/my-rental-bike/blob/master/src/images/bike4.jpg)

...or from the details of the selected bike.

![rent form bike](https://github.com/lauraportillo/my-rental-bike/blob/master/src/images/bike5.jpg)


## Technologies Used

My Rental Bike is built with the following technologies:

- React.js
- React-router-dom V6
- React-datepicker
- Bootstrap
- Sass
- Hooks
- Git
- GitHub Pages

The application is designed to be **responsive** using Bootstrap and is structured into different components for easy management.

[My rental Bike website 🚲](https://lauraportillo.github.io/my-rental-bike/)


## About me

If you want to contact me or know more about me, you can find me on social media!

- [LinkedIn](https://www.linkedin.com/in/laura-portillo-rodr%C3%ADguez-21965a86/)
- [GitHub](https://github.com/lauraportillo)
- [Twitter](https://twitter.com/LauraPo02860847)

