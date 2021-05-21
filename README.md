# React Native Exercise

This is a vanilla React Native Application containing a single screen with a placeholder view that will be replaced with a custom component.

## !!!IMPORTANT!!!
Please do not add any UI libraries to complete this exercise - no carousel libraries, no swipeable row libriaries, etc. If you'd like to import libraries like `moment` for dates or `lodash` to make working with arrays and objects easier feel free :)

### What You'll Be Building

Lugg customers want the ability to schedule a Lugg in advance. In order to accomplish this we have designed a time picker allowing the customer to select the day and time window for when they would like their movers to arrive. A customer can schedule a Lugg no more than 30 days in advance. You do not need to build the entire screen just the time picker component in the highlighted area in the right image.

![image](https://user-images.githubusercontent.com/59875/119059991-9a4a7e80-b98e-11eb-86e7-2fecb8014556.png)

#### Notes on UX

Below is a screenshot of how the component should function. If you need any clarification please ask :)

- Both days and time windows should be scrollable.
- As you scroll the days, the time windows adjacent should update to that corresponding day in sync and vice versa when scrolling the time windows.
- You can implement this custom component on the platform of your choosing (iOS or Android). If you are feeling ambitious please feel free to try both.

![lugg-time-picker](https://user-images.githubusercontent.com/59875/119059528-b994dc00-b98d-11eb-923b-34e61f95a054.gif)

### Setup

```shell
$ git clone git@github.com:luggit/react-native-exercise.git
$ cd react-native-exercise
$ yarn install
$ cd ios && pod install
$ cd ..
$ npx react-native run-ios
```

After running the above commands the iOS simulator should open showing an application that looks like the image below.

![image](https://user-images.githubusercontent.com/59875/119060146-e09fdd80-b98e-11eb-896c-9bc2116d3832.png)
