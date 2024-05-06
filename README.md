# ASP .NET Core React App
This project is an example of using React for the front end and ASP .NET for the backend, it's quite barebones at the moment but it's a good opportunity to add to it like a navbar with routing. It seems that Visual Studio's base project for React and ASP is a lot less than what they used to have which did have basic routing and a navbar.

I've also been using this project as an example on creating seperate branches and pull requests for merging them back into the master branch while working on different components of the app.

The navbar has been added in now along with some routing and a basic home screen that has a button that links to the weather stats in table form.

[![Image from Gyazo](https://i.gyazo.com/19d0a6cc10aaec6532ef4bd5dced0b69.png)](https://gyazo.com/19d0a6cc10aaec6532ef4bd5dced0b69)

I think it would be interesting to add more to the homepage like a carousel with the latest weather updates from different cities.

One thing that's been implemented now is the weather forecast page that used the randomised data from the api call to the backend and displays it dynamically in customised weather widgets. 

[![Image from Gyazo](https://i.gyazo.com/319099a661cdd0cd22525712de227ba5.png)](https://gyazo.com/319099a661cdd0cd22525712de227ba5)

The next step for this would be to add some conditional logic that prevents a windy summary from showing if the wind speed is below a certain threshold since currently the data being displayed is just being randomised between a set number range with no correlation between them.

Beyond that it would be good to implement some more fetures like global/city specific weather updates and maybe hour on hour updates further down the line.
