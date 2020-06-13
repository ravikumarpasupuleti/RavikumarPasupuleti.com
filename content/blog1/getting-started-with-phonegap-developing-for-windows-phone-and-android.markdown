---
  
date: 2014-03-04 16:06:40+00:00

slug: getting-started-with-phonegap-developing-for-windows-phone-and-android
author: [Rahul Nath]
title: 'Getting Started with PhoneGap: Developing for Windows Phone and Android'
wordpress_id: 949
tags:
  - Android
  - PhoneGap
  - Windows Phone
  - XPlat
thumbnail: ../images/Cordova_Android.jpg
---

With lots of devices and operating systems out there, developing a native application for each of these platforms might not always be an option for many businesses, because of the time, effort and money that would be required to be on all platforms. [PhoneGap](http://phonegap.com/) is one option that could be explored in this case, which helps to develop hybrid applications that can exists on a [variety of platforms](http://phonegap.com/about/feature/) integrating with platform specific features. [Apache Cordova](http://cordova.apache.org/) is what powers PhoneGap and is free and open source under the [Apache License, Version 2.0](http://phonegap.com/about/license/).

Setting up PhoneGap is pretty easy and direct with its integration with [node.js](http://nodejs.org/). Lets take a look on how to setup our project from scratch.

1. Install [node.js](http://nodejs.org/)

2. Install PhoneGap using node.js

   **_npm install –g phonegap_**


    npm is the official node package manager

    -g installs the package in global scope.If you face any error while installing the package(since I happened to, I guess because I closed the console while it was installing the first time) you can try following the below steps, which helped me solve it.

    **            npm list –g**

    If the above step shows that there is a _unmet dependency phonegap_, then you could follow the below steps

    **            npm rm phonegap**

    **            npm cache clear**

    Try installing PhoneGap again using _npm install –g phonegap_

3. Install Cordova
   **npm install –g cordova**
4. Now we have everything setup for PhoneGap project. Lets create the project. Navigate to your project root folder and create a project.

   **phonegap create appname**

   This will create the basic folder structure for your PhoneGap project which looks like below.

   <img class="left" src="../images/cordova_folder_structure.png" alt="cordova_folder_structure" />

   **.cordova: **This directory contains files related to cordova.

   **merges: **This directory contains platform specific assets. A sub-directory for each platform is created inside here, whenever  a new platform is created. This sub-directory mirrors the structure of the \_www \_directory, which allows to add platform specific files to appropriate folders.

   **platforms: **This directory contains native code for each of the [supported platforms](http://docs.phonegap.com/en/edge/guide_platforms_index.md.html). By default this is empty and we need to add the required platforms, which we will see later.

   **plugins: **This directory contains the [plugins](https://build.phonegap.com/plugins) that provide extra support to interface with each of the native platforms.

   **www: **This directory contains the primary files that is required for your project/application. This gets copied into each of the platform specific projects in \_platforms \_folder whenever a build is performed. So this is where your core development would happen and all your cross-platform code would live in.

5. Lets now create a native project, for windows phone.

   **cordova platform add wp8**

   This will add a wp8 folder inside _platforms \_and also \_merges. \_The one in platforms will have the native project setup with all the files in \_www_ folder copied into it. You can open up the sln file in Visual Studio and build and run. We have the application up and running on our first platform!
   Lets add in some code so that it makes sense as an application. We will stick on with our usual 500px api and show off some beautiful pictures. I have added jquery from nuget in Visual studio and also updated the files to show pictures from 500px, which I would not be explaining here as it is just some html/js/css..(Updated files in www folder can later be copied into the root \_www \_folder later. Need to figure out the correct way on how to go about this. In case you know how, please do leave a comment. Would be more than happy to learn.)

6. Once we copy out the updated files in platform specific \_www \_folder into root www folder we can go ahead and add android platform.

   **cordova platform add android**

   This creates an android folder inside _platforms_ and _merges_ folder. You can open up the project in your IDE([Eclipse](https://www.eclipse.org/downloads/), [IntelliJ](http://www.jetbrains.com/idea/) or [Android Studio](http://developer.android.com/sdk/installing/studio.html) etc) for android, build and run. We have the application up and running also on the second platform!
   For android you would need to make sure the config files are updated with the required permissions for accessing internet and also to enable [CORS](http://en.wikipedia.org/wiki/Cross-origin_resource_sharing). By default internet permissions are enabled, you would only have to update the config for cors(_origin header_) as it defaults to ‘_127.0.0.1\*_’. I have updated this to just ‘\*’, inside **_res/xml/config.xml _**(since there is one config.xml inside assets/www folder too).If you are new to android platform, which I was then you can check out here on [Setting up the development environment for phonegap on android](http://rahulpnath.com/blog/setting-up-the-development-environment-for-phonegap-on-android/).
   At times I did have the Android emulator not moving past the '_Connecting to Device_' screen while running the application. I just killed all the emulators and started a fresh one from AVD (Android Virtual Device) Manager, unchecking 'launch from snapshot' and 'save to snapshot' options.

With PhoneGap/Cordova, you can see how easy it is to have an app in various platforms of your choice. We have not seen on how to utilize any of the platform specific features of devices using PhoneGap, but I am sure that you should be able to figure out from here, now that you have all that you need up and running.

![Cordova_WP](../images/Cordova_WP.jpg)
![Cordova_Android](../images/Cordova_Android.jpg)

The source code for the sample is available [here](https://github.com/rahulpnath/Blog/tree/master/GettingStartedOnPhoneGap). Don’t forget to update the [api key for 500px](http://developers.500px.com/) before you run the application.
