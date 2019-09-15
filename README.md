# Taiwan Railway Route Planner 

Plan your train trip on the Taiwan Railway


You can go from any station to an other station without selecting a transfer station. \
We do that for you, just think about you will do during the train ride. \
Sit back and relax.

Supports the following languages:
- Traditional Mandarin
- English
- Korean
- Dutch

More languages coming soon!





### Information

Data provide by [DATA.GOV.TW](https://data.gov.tw/dataset/6138#r1)

The app is open-source check the Github link in the app.

The loading gif in the app comes from [Fayeliew](https://dribbble.com/fayeliew) on Dribbble


# Taiwan Railway Route Planner 

計劃您在台灣鐵路的火車之旅


您可以在不選擇轉運站的情況下從任何車站前往其他車站。\
我們為您做到這一點，想想你在火車旅行期間會做什麼。\
高枕無憂。

支持以下語言：
- 中文
- 英語
- 韓國人
- 荷蘭人

即將推出更多語言！





### 信息

數據由 [DATA.GOV.TW](https://data.gov.tw/dataset/6138#r1)提供

該應用程序是開源檢查應用程序中的Github鏈接。

應用程序中的加載GIF來自Dribbble上的 [Fayeliew](https://dribbble.com/fayeliew)


## Privacy notice

I don't collect any data of where you go or when. I don't keep any records.

## Difference between the app and then TRA-Website

- You want to go from station A to station B you don't need to select a transfer, we choose one for you if it's needed.
- Certain routes from us are faster then the TRA-website.
- More routes




## Architecture of the system

![](./Architecture.png)

### Explanation

The app sends two types of requests.

1. GET-request
2. POST-request

The GET-request is for getting the station data at the following [link](https://taiwan-railway-route-planner.github.io/TRATimetableData/stationInfo.json). \
The second request the POST-request is for getting a route between 2 stations on a certain day. \
How the backend works is not open source. The backend sends a request to get the all the route data of that day.
By example from [20190915](https://taiwan-railway-route-planner.github.io/TRATimetableData/Schedules/20190915.json)

#### Data

The data comes from [DATA.GOV.TW](https://data.gov.tw/dataset/6138#r1). \
I modify the data a little bit so I can search easier with it. \
The modified data can be found here [TRATimetableData](https://github.com/Taiwan-Railway-Route-Planner/TRATimetableData). \
The unmodified data can be found here [TRAOriginalTimeTable](https://github.com/Taiwan-Railway-Route-Planner/TRAOriginalTimeTable). \


## Questions / Problems

If you have any question / problems just open an issue [this repo Github](https://github.com/Taiwan-Railway-Route-Planner/TRA-app/issues) or email me [support@traapp.tk](mailto:support@traapp.tk).
