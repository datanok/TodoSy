import requests
import json

url = "https://rc.jiomeet.jio.com/api/meeting"

payload = json.dumps({
  "topic": "tanmayyyyyyyyyyyyyyyyyyyyyyyyy PatiLLLLLLLLLLLLLLLLLLLLLLLLLL's JioMeet Meeting ",
  "startTime": "2023-06-01T10:45:56.806Z",
  "endTime": "2023-06-01T11:15:56.806Z",
  "participants": [
    "kedartempp@gmail.com"
  ],
  "cohosts": [],
  "advancedOptions": {
    "hostAudio": False,
    "participantAudio": True,
    "hostVideo": False,
    "participantVideo": True,
    "joinBeforeHost": True,
    "waitingRoom": False,
    "loggedInOnly": False,
    "colleagueOnly": False,
    "participantHardAudioMute": False,
    "isRestrictedMeeting": False,
    "isClassroomMode": False
  },
  "isDynamicRoom": True,
  "isPinEnabled": True,
  "calendarOptions": {
    "calendar": "other"
  },
  "repeatOptions": {
    "repeat": "none",
    "interval": 1,
    "daysOfWeek": [
      False,
      False,
      False,
      False,
      True,
      False,
      False
    ],
    "dateInMonth": 1,
    "lastDayOfMonth": False,
    "weeksInMonth": [
      0,
      0,
      0,
      0,
      0
    ],
    "endDate": "2023-09-01T18:29:59.999Z"
  }
})
headers = {
  'authority': 'rc.jiomeet.jio.com',
  'accept': 'application/json, text/plain, */*',
  'accept-language': 'en',
  'authorization': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LTA3MzBjMWViLWQyZTMtNDU3Yi1iY2YxLTdiYzE3ZDc1ZTJiNCIsInRva2VuSWQiOiJvdC01MzcxNTZlMy01ZTdlLTQzZmItOGRmMy0wNzE4ZTUxNzM0NjUiLCJzb3VyY2UiOiJnb29nbGUiLCJpYXQiOjE2ODU2MTQxMjksImV4cCI6MTY4NTcwMDUyOX0.KwLscbTUuC1b0PUzZzfmwC4-SrcwNHiwCR8Kx-dnnxl95blk0ZYuXHJGfoxOZwBOWAidPycKXNLZ--avm6RaHu5yrGaGLf0_j0KtUdvRRWL0xPdohjo1ut4rgeROl7m3d58p17Qt2EzSLLrmOy63otKkSdlV6lAp2q_oxpeyizYsdpCA8BZGGadxOHkrMWEekv3dCb4uYJsJuOwBvKtEuRl5Y-35_-fCeelkpK7C5EQ6dKM1vTladCpOjXcQls9T90n0en-LLpIhCdVCocFPOKLcyK4ZzRHRY3LmzP8edaMPSybbSAD9gMv7RGnIq2xQ9D74afMgt9rzN6E6_r9isQ',
  'content-type': 'application/json',
  'cookie': '_ga=GA1.4.917211778.1677557571; GCLB=CPe2sOa0hpeQkwE; _clck=1h9bx5h|1|fax|0; _ga_KTDCM7ZGJS=GS1.1.1681975023.1.1.1681975149.0.0.0; G_ENABLED_IDPS=google; completedMeetingsCount=17; _gid=GA1.2.127575433.1685334610; _gid=GA1.4.127575433.1685334610; connect.sid=s%3AcPHSwLMk0VEGcdS6oJmQHYox9OFR4px3.JFIW%2F7zNAHO3ki6NK0gZEFmbby2dRQRDKq5wItu5s5k; _ga_947V2ZEX33=GS1.1.1685614869.43.1.1685614872.57.0.0; _gat_UA-217441896-4=1; _ga_F1NJ1E2HJ2=GS1.1.1685609671.107.1.1685615515.0.0.0; _ga=GA1.1.1677557571; _ga_DR87B0RL83=GS1.1.1685614123.30.1.1685615527.4.0.0',
  'deviceid': '0089a63c-6245-4f82-b38f-92a1ab5bd94c',
  'devicetype': 'web',
  'origin': 'https://rc.jiomeet.jio.com',
  'referer': 'https://rc.jiomeet.jio.com/home',
  'sec-ch-ua': '"Google Chrome";v="113", "Chromium";v="113", "Not-A.Brand";v="24"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"macOS"',
  'sec-fetch-dest': 'empty',
  'sec-fetch-mode': 'cors',
  'sec-fetch-site': 'same-origin',
  'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36',
  'x-identity': 'tanmaypatiltp25@gmail.com'
}
for i in range(20):

    response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
