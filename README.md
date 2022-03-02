<img src="readmePictures/react.png" align="right" width="70" height="70" style="background-color:white;"/>

## CRS - stackoverflow feed app
> A simple React-Native application to fetch stackoverflow user infos


## Features

1. light/dark mode
2. http fetching
3. text input field with debounce (300ms)
4. reset search field
5. opening http content in modal
6. display smootly html encoded characters
7. labels string in external json file (allow to adapt easily i18n)
8. filtering result (server filtering)
9. UT examples
 

## Installation

1. git clone git@github.com:ah584d/crs.git
2. cd stkOverFlow
3. npm ci -d
4. cd ios
5. pod install
6. run Xcode and open ios folder, then press play button, it will take a few minutes and will launch the application

## Usage

In order to test: type user id 1234567 (and change typing speed to test debouncing)

## Screenshots
<img src="readmePictures/screen1.jpg" align="right" width="150" height="300" style="background-color:white;"/>
<img src="readmePictures/screen2.jpg" align="right" width="150" height="300" style="background-color:white;"/>
<img src="readmePictures/screen3.jpg" align="right" width="150" height="300" style="background-color:white;"/>
<img src="readmePictures/screen4.jpg" align="right" width="150" height="300" style="background-color:white;"/>


## Backlog

1. android support
2. client side filter (faster)
3. add state management (Redux, Mobix...)
5. accessibility
6. e2e tests
7. stronger TS types
8. perfect pixel improvment



## License

MIT © [Avraham Hamu]()
