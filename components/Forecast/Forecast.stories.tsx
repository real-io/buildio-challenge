import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Forecast from './Forecast';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Forecast',
    component: Forecast,
} as ComponentMeta<typeof Forecast>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Forecast> = (args) => <Forecast {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    "city": {
        "id": 0,
        "name": "Beverly Hills",
        "coord": {
            "lat": 34.0901,
            "lon": -118.4065
        },
        "country": "US",
        "population": 0,
        "timezone": -28800,
        "sunrise": 1673362784,
        "sunset": 1673398923
    },
    "days": {
        "Sunday": [
            {
                "dt": 1673740800,
                "main": {
                    "temp": 284.9,
                    "feels_like": 284.45,
                    "temp_min": 284.9,
                    "temp_max": 284.9,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 992,
                    "humidity": 89,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.16,
                    "deg": 131,
                    "gust": 5.71
                },
                "visibility": 10000,
                "pop": 0.98,
                "rain": {
                    "3h": 1.33
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-15 00:00:00"
            },
            {
                "dt": 1673751600,
                "main": {
                    "temp": 285.08,
                    "feels_like": 284.78,
                    "temp_min": 285.08,
                    "temp_max": 285.08,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 990,
                    "humidity": 94,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 4.29,
                    "deg": 160,
                    "gust": 8.94
                },
                "visibility": 2095,
                "pop": 0.99,
                "rain": {
                    "3h": 4.72
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-15 03:00:00"
            },
            {
                "dt": 1673762400,
                "main": {
                    "temp": 286.27,
                    "feels_like": 285.86,
                    "temp_min": 286.27,
                    "temp_max": 286.27,
                    "pressure": 1009,
                    "sea_level": 1009,
                    "grnd_level": 989,
                    "humidity": 85,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 501,
                        "main": "Rain",
                        "description": "moderate rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.62,
                    "deg": 277,
                    "gust": 5.5
                },
                "visibility": 10000,
                "pop": 1,
                "rain": {
                    "3h": 8.57
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-15 06:00:00"
            },
            {
                "dt": 1673773200,
                "main": {
                    "temp": 284.25,
                    "feels_like": 283.58,
                    "temp_min": 284.25,
                    "temp_max": 284.25,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 990,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 29
                },
                "wind": {
                    "speed": 3.65,
                    "deg": 273,
                    "gust": 6.38
                },
                "visibility": 10000,
                "pop": 0.15,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-15 09:00:00"
            },
            {
                "dt": 1673784000,
                "main": {
                    "temp": 283.79,
                    "feels_like": 283.1,
                    "temp_min": 283.79,
                    "temp_max": 283.79,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 991,
                    "humidity": 84,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 64
                },
                "wind": {
                    "speed": 2.49,
                    "deg": 281,
                    "gust": 3.87
                },
                "visibility": 10000,
                "pop": 0.07,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-15 12:00:00"
            },
            {
                "dt": 1673794800,
                "main": {
                    "temp": 283.56,
                    "feels_like": 282.82,
                    "temp_min": 283.56,
                    "temp_max": 283.56,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 992,
                    "humidity": 83,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.13,
                    "deg": 311,
                    "gust": 1.66
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-15 15:00:00"
            },
            {
                "dt": 1673805600,
                "main": {
                    "temp": 285.33,
                    "feels_like": 284.51,
                    "temp_min": 285.33,
                    "temp_max": 285.33,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 995,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.31,
                    "deg": 261,
                    "gust": 1.7
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-15 18:00:00"
            },
            {
                "dt": 1673816400,
                "main": {
                    "temp": 286.75,
                    "feels_like": 285.81,
                    "temp_min": 286.75,
                    "temp_max": 286.75,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 994,
                    "humidity": 63,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 88
                },
                "wind": {
                    "speed": 3,
                    "deg": 259,
                    "gust": 3.87
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-15 21:00:00"
            }
        ],
        "Monday": [
            {
                "dt": 1673827200,
                "main": {
                    "temp": 286.68,
                    "feels_like": 285.71,
                    "temp_min": 286.68,
                    "temp_max": 286.68,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 993,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 84
                },
                "wind": {
                    "speed": 3.37,
                    "deg": 234,
                    "gust": 3.35
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-16 00:00:00"
            },
            {
                "dt": 1673838000,
                "main": {
                    "temp": 285.03,
                    "feels_like": 284.18,
                    "temp_min": 285.03,
                    "temp_max": 285.03,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 995,
                    "humidity": 73,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 93
                },
                "wind": {
                    "speed": 2.45,
                    "deg": 244,
                    "gust": 3.82
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-16 03:00:00"
            }
        ],
        "Wednesday": [
            {
                "dt": 1673416800,
                "main": {
                    "temp": 284.23,
                    "feels_like": 283.56,
                    "temp_min": 284.23,
                    "temp_max": 284.61,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1001,
                    "humidity": 83,
                    "temp_kf": -0.38
                },
                "weather": [
                    {
                        "id": 801,
                        "main": "Clouds",
                        "description": "few clouds",
                        "icon": "02n"
                    }
                ],
                "clouds": {
                    "all": 20
                },
                "wind": {
                    "speed": 1.34,
                    "deg": 283,
                    "gust": 2.25
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-11 06:00:00"
            },
            {
                "dt": 1673427600,
                "main": {
                    "temp": 284.07,
                    "feels_like": 283.31,
                    "temp_min": 283.75,
                    "temp_max": 284.07,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1001,
                    "humidity": 80,
                    "temp_kf": 0.32
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 30
                },
                "wind": {
                    "speed": 1.15,
                    "deg": 318,
                    "gust": 1.4
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-11 09:00:00"
            },
            {
                "dt": 1673438400,
                "main": {
                    "temp": 283.64,
                    "feels_like": 282.76,
                    "temp_min": 283.35,
                    "temp_max": 283.64,
                    "pressure": 1021,
                    "sea_level": 1021,
                    "grnd_level": 1000,
                    "humidity": 77,
                    "temp_kf": 0.29
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 45
                },
                "wind": {
                    "speed": 0.86,
                    "deg": 12,
                    "gust": 0.83
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-11 12:00:00"
            },
            {
                "dt": 1673449200,
                "main": {
                    "temp": 282.93,
                    "feels_like": 282.93,
                    "temp_min": 282.93,
                    "temp_max": 282.93,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1002,
                    "humidity": 75,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 89
                },
                "wind": {
                    "speed": 1.18,
                    "deg": 66,
                    "gust": 1.28
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-11 15:00:00"
            },
            {
                "dt": 1673460000,
                "main": {
                    "temp": 285.57,
                    "feels_like": 284.49,
                    "temp_min": 285.57,
                    "temp_max": 285.57,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 1004,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 90
                },
                "wind": {
                    "speed": 0.97,
                    "deg": 53,
                    "gust": 1.15
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-11 18:00:00"
            },
            {
                "dt": 1673470800,
                "main": {
                    "temp": 287.68,
                    "feels_like": 286.49,
                    "temp_min": 287.68,
                    "temp_max": 287.68,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1002,
                    "humidity": 50,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 37
                },
                "wind": {
                    "speed": 1.33,
                    "deg": 187,
                    "gust": 0.83
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-11 21:00:00"
            }
        ],
        "Thursday": [
            {
                "dt": 1673481600,
                "main": {
                    "temp": 287.74,
                    "feels_like": 286.59,
                    "temp_min": 287.74,
                    "temp_max": 287.74,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1002,
                    "humidity": 51,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 29
                },
                "wind": {
                    "speed": 1.62,
                    "deg": 238,
                    "gust": 1.23
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-12 00:00:00"
            },
            {
                "dt": 1673492400,
                "main": {
                    "temp": 286.29,
                    "feels_like": 285.23,
                    "temp_min": 286.29,
                    "temp_max": 286.29,
                    "pressure": 1023,
                    "sea_level": 1023,
                    "grnd_level": 1003,
                    "humidity": 60,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 37
                },
                "wind": {
                    "speed": 1.15,
                    "deg": 291,
                    "gust": 1.62
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-12 03:00:00"
            },
            {
                "dt": 1673503200,
                "main": {
                    "temp": 285.87,
                    "feels_like": 284.69,
                    "temp_min": 285.87,
                    "temp_max": 285.87,
                    "pressure": 1023,
                    "sea_level": 1023,
                    "grnd_level": 1003,
                    "humidity": 57,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 37
                },
                "wind": {
                    "speed": 1.53,
                    "deg": 359,
                    "gust": 1.67
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-12 06:00:00"
            },
            {
                "dt": 1673514000,
                "main": {
                    "temp": 285.58,
                    "feels_like": 284.16,
                    "temp_min": 285.58,
                    "temp_max": 285.58,
                    "pressure": 1023,
                    "sea_level": 1023,
                    "grnd_level": 1003,
                    "humidity": 49,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 48
                },
                "wind": {
                    "speed": 2.28,
                    "deg": 354,
                    "gust": 2.51
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-12 09:00:00"
            },
            {
                "dt": 1673524800,
                "main": {
                    "temp": 285.05,
                    "feels_like": 283.5,
                    "temp_min": 285.05,
                    "temp_max": 285.05,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1002,
                    "humidity": 46,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 65
                },
                "wind": {
                    "speed": 2.93,
                    "deg": 1,
                    "gust": 3.43
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-12 12:00:00"
            },
            {
                "dt": 1673535600,
                "main": {
                    "temp": 284.82,
                    "feels_like": 283.22,
                    "temp_min": 284.82,
                    "temp_max": 284.82,
                    "pressure": 1023,
                    "sea_level": 1023,
                    "grnd_level": 1003,
                    "humidity": 45,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 83
                },
                "wind": {
                    "speed": 3.21,
                    "deg": 6,
                    "gust": 3.94
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-12 15:00:00"
            },
            {
                "dt": 1673546400,
                "main": {
                    "temp": 288.13,
                    "feels_like": 286.65,
                    "temp_min": 288.13,
                    "temp_max": 288.13,
                    "pressure": 1024,
                    "sea_level": 1024,
                    "grnd_level": 1004,
                    "humidity": 37,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 91
                },
                "wind": {
                    "speed": 3.11,
                    "deg": 7,
                    "gust": 4.08
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-12 18:00:00"
            },
            {
                "dt": 1673557200,
                "main": {
                    "temp": 291.17,
                    "feels_like": 289.84,
                    "temp_min": 291.17,
                    "temp_max": 291.17,
                    "pressure": 1021,
                    "sea_level": 1021,
                    "grnd_level": 1001,
                    "humidity": 31,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.67,
                    "deg": 13,
                    "gust": 3.49
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-12 21:00:00"
            }
        ],
        "Friday": [
            {
                "dt": 1673568000,
                "main": {
                    "temp": 291.16,
                    "feels_like": 289.88,
                    "temp_min": 291.16,
                    "temp_max": 291.16,
                    "pressure": 1021,
                    "sea_level": 1021,
                    "grnd_level": 1001,
                    "humidity": 33,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.47,
                    "deg": 354,
                    "gust": 3.57
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-13 00:00:00"
            },
            {
                "dt": 1673578800,
                "main": {
                    "temp": 288.6,
                    "feels_like": 287.14,
                    "temp_min": 288.6,
                    "temp_max": 288.6,
                    "pressure": 1021,
                    "sea_level": 1021,
                    "grnd_level": 1001,
                    "humidity": 36,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.84,
                    "deg": 10,
                    "gust": 3.27
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-13 03:00:00"
            },
            {
                "dt": 1673589600,
                "main": {
                    "temp": 287.75,
                    "feels_like": 286.23,
                    "temp_min": 287.75,
                    "temp_max": 287.75,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1002,
                    "humidity": 37,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 2.6,
                    "deg": 8,
                    "gust": 2.87
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-13 06:00:00"
            },
            {
                "dt": 1673600400,
                "main": {
                    "temp": 287.09,
                    "feels_like": 285.53,
                    "temp_min": 287.09,
                    "temp_max": 287.09,
                    "pressure": 1021,
                    "sea_level": 1021,
                    "grnd_level": 1001,
                    "humidity": 38,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.42,
                    "deg": 14,
                    "gust": 2.58
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-13 09:00:00"
            },
            {
                "dt": 1673611200,
                "main": {
                    "temp": 286.8,
                    "feels_like": 285.21,
                    "temp_min": 286.8,
                    "temp_max": 286.8,
                    "pressure": 1021,
                    "sea_level": 1021,
                    "grnd_level": 1001,
                    "humidity": 38,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.17,
                    "deg": 5,
                    "gust": 2.08
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-13 12:00:00"
            },
            {
                "dt": 1673622000,
                "main": {
                    "temp": 286.87,
                    "feels_like": 285.26,
                    "temp_min": 286.87,
                    "temp_max": 286.87,
                    "pressure": 1021,
                    "sea_level": 1021,
                    "grnd_level": 1001,
                    "humidity": 37,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.6,
                    "deg": 41,
                    "gust": 1.81
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-13 15:00:00"
            },
            {
                "dt": 1673632800,
                "main": {
                    "temp": 289.19,
                    "feels_like": 287.74,
                    "temp_min": 289.19,
                    "temp_max": 289.19,
                    "pressure": 1022,
                    "sea_level": 1022,
                    "grnd_level": 1002,
                    "humidity": 34,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.43,
                    "deg": 356,
                    "gust": 0.97
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-13 18:00:00"
            },
            {
                "dt": 1673643600,
                "main": {
                    "temp": 290.98,
                    "feels_like": 289.58,
                    "temp_min": 290.98,
                    "temp_max": 290.98,
                    "pressure": 1020,
                    "sea_level": 1020,
                    "grnd_level": 1000,
                    "humidity": 29,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.38,
                    "deg": 231,
                    "gust": 1.24
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-13 21:00:00"
            }
        ],
        "Saturday": [
            {
                "dt": 1673654400,
                "main": {
                    "temp": 290.24,
                    "feels_like": 288.87,
                    "temp_min": 290.24,
                    "temp_max": 290.24,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 999,
                    "humidity": 33,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 1.43,
                    "deg": 213,
                    "gust": 1.43
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-14 00:00:00"
            },
            {
                "dt": 1673665200,
                "main": {
                    "temp": 288.7,
                    "feels_like": 287.33,
                    "temp_min": 288.7,
                    "temp_max": 288.7,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1000,
                    "humidity": 39,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 97
                },
                "wind": {
                    "speed": 0.77,
                    "deg": 222,
                    "gust": 1.44
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-14 03:00:00"
            },
            {
                "dt": 1673676000,
                "main": {
                    "temp": 287.71,
                    "feels_like": 286.34,
                    "temp_min": 287.71,
                    "temp_max": 287.71,
                    "pressure": 1019,
                    "sea_level": 1019,
                    "grnd_level": 1000,
                    "humidity": 43,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 99
                },
                "wind": {
                    "speed": 0.29,
                    "deg": 106,
                    "gust": 0.7
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-14 06:00:00"
            },
            {
                "dt": 1673686800,
                "main": {
                    "temp": 287.4,
                    "feels_like": 286.06,
                    "temp_min": 287.4,
                    "temp_max": 287.4,
                    "pressure": 1018,
                    "sea_level": 1018,
                    "grnd_level": 998,
                    "humidity": 45,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.26,
                    "deg": 255,
                    "gust": 0.63
                },
                "visibility": 10000,
                "pop": 0.04,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-14 09:00:00"
            },
            {
                "dt": 1673697600,
                "main": {
                    "temp": 286.98,
                    "feels_like": 285.83,
                    "temp_min": 286.98,
                    "temp_max": 286.98,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 996,
                    "humidity": 54,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10n"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.66,
                    "deg": 200,
                    "gust": 0.82
                },
                "visibility": 10000,
                "pop": 0.23,
                "rain": {
                    "3h": 0.31
                },
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-01-14 12:00:00"
            },
            {
                "dt": 1673708400,
                "main": {
                    "temp": 286.54,
                    "feels_like": 285.55,
                    "temp_min": 286.54,
                    "temp_max": 286.54,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 996,
                    "humidity": 62,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 0.94,
                    "deg": 175,
                    "gust": 1.22
                },
                "visibility": 10000,
                "pop": 0.92,
                "rain": {
                    "3h": 0.7
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-14 15:00:00"
            },
            {
                "dt": 1673719200,
                "main": {
                    "temp": 286.27,
                    "feels_like": 285.31,
                    "temp_min": 286.27,
                    "temp_max": 286.27,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 997,
                    "humidity": 64,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 2.83,
                    "deg": 136,
                    "gust": 4
                },
                "visibility": 10000,
                "pop": 0.76,
                "rain": {
                    "3h": 0.4
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-14 18:00:00"
            },
            {
                "dt": 1673730000,
                "main": {
                    "temp": 285.58,
                    "feels_like": 284.89,
                    "temp_min": 285.58,
                    "temp_max": 285.58,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 994,
                    "humidity": 77,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 500,
                        "main": "Rain",
                        "description": "light rain",
                        "icon": "10d"
                    }
                ],
                "clouds": {
                    "all": 100
                },
                "wind": {
                    "speed": 3.33,
                    "deg": 133,
                    "gust": 4.29
                },
                "visibility": 10000,
                "pop": 0.78,
                "rain": {
                    "3h": 0.56
                },
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-01-14 21:00:00"
            }
        ]
    }
}