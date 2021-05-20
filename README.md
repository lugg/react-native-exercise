# React Native Exercise

This is a vanilla React Native Application containing a single screen with a placeholder view that will be replaced with a custom component.

__IMPORTANT__ - Please do not add any UI libraries to complete this exercise - no carousel libraries, no swipeable row libriaries, etc. If you'd like to import libraries like `moment` for dates or `lodash` to make working with arrays and objects easier feel free :) 

### What You'll Be Building

Lugg customers want the ability to schedule a Lugg in advance. In order to accomplish this we have designed a time picker allowing the customer to select the day and time window for when they would like their movers to arrive. A customer can schedule a Lugg no more than 30 days in advance. You do not need to build the entire screen just the time picker component in the highlighted area in the right image.

![image](https://cloud.githubusercontent.com/assets/59875/18215276/4bcc5f52-7105-11e6-8cfe-ce631eaab9fb.png)


https://user-images.githubusercontent.com/59875/119058075-e398cf00-b98a-11eb-83ac-3f5209486e36.mp4


#### Notes on UX

Below is a screenshot of how the component should function. If you need any clarification please ask :)

- Both days and time windows should be scrollable.
- As you scroll the days, the time windows below should scroll to that corresponding day in sync and vice versa when paging the time windows.
- You can implement this custom component on the platform of your choosing (iOS or Android). If you are feeling ambitious please feel free to try both.

![lugg-time-picker](https://cloud.githubusercontent.com/assets/59875/18221695/e69c7a5e-7136-11e6-89e9-56e6ba3acc17.gif)

### Setup
```shell
$ git clone git@github.com:luggit/react-native-exercise.git
$ cd react-native-exercise
$ npm install
$ react-native run-ios
```

After running the above commands the iOS simulator should open showing an application that looks like the image below.

![image](https://cloud.githubusercontent.com/assets/59875/18214822/853af692-7103-11e6-9555-26fabe7f8c72.png)
