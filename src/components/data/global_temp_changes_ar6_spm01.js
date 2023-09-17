// tranform
const dataSet = [
	{
		"year": 1850,
		"change": -0.059
	},
	{
		"year": 1851,
		"change": 0.049
	},
	{
		"year": 1852,
		"change": 0.079
	},
	{
		"year": 1853,
		"change": 0.046
	},
	{
		"year": 1854,
		"change": 0.049
	},
	{
		"year": 1855,
		"change": 0.049
	},
	{
		"year": 1856,
		"change": -0.051
	},
	{
		"year": 1857,
		"change": -0.146
	},
	{
		"year": 1858,
		"change": -0.039
	},
	{
		"year": 1859,
		"change": 0.069
	},
	{
		"year": 1860,
		"change": -0.056
	},
	{
		"year": 1861,
		"change": -0.091
	},
	{
		"year": 1862,
		"change": -0.154
	},
	{
		"year": 1863,
		"change": 0.001
	},
	{
		"year": 1864,
		"change": -0.049
	},
	{
		"year": 1865,
		"change": 0.034
	},
	{
		"year": 1866,
		"change": 0.051
	},
	{
		"year": 1867,
		"change": 0.049
	},
	{
		"year": 1868,
		"change": 0.061
	},
	{
		"year": 1869,
		"change": 0.059
	},
	{
		"year": 1870,
		"change": 0.021
	},
	{
		"year": 1871,
		"change": -0.006
	},
	{
		"year": 1872,
		"change": 0.024
	},
	{
		"year": 1873,
		"change": 0.016
	},
	{
		"year": 1874,
		"change": -0.021
	},
	{
		"year": 1875,
		"change": -0.006
	},
	{
		"year": 1876,
		"change": -0.044
	},
	{
		"year": 1877,
		"change": 0.271
	},
	{
		"year": 1878,
		"change": 0.331
	},
	{
		"year": 1879,
		"change": 0.084
	},
	{
		"year": 1880,
		"change": 0.031
	},
	{
		"year": 1881,
		"change": 0.116
	},
	{
		"year": 1882,
		"change": 0.064
	},
	{
		"year": 1883,
		"change": -0.001
	},
	{
		"year": 1884,
		"change": -0.129
	},
	{
		"year": 1885,
		"change": -0.134
	},
	{
		"year": 1886,
		"change": -0.114
	},
	{
		"year": 1887,
		"change": -0.169
	},
	{
		"year": 1888,
		"change": -0.011
	},
	{
		"year": 1889,
		"change": 0.111
	},
	{
		"year": 1890,
		"change": -0.146
	},
	{
		"year": 1891,
		"change": -0.039
	},
	{
		"year": 1892,
		"change": -0.121
	},
	{
		"year": 1893,
		"change": -0.119
	},
	{
		"year": 1894,
		"change": -0.101
	},
	{
		"year": 1895,
		"change": -0.059
	},
	{
		"year": 1896,
		"change": 0.089
	},
	{
		"year": 1897,
		"change": 0.089
	},
	{
		"year": 1898,
		"change": -0.114
	},
	{
		"year": 1899,
		"change": 0.016
	},
	{
		"year": 1900,
		"change": 0.116
	},
	{
		"year": 1901,
		"change": 0.064
	},
	{
		"year": 1902,
		"change": -0.079
	},
	{
		"year": 1903,
		"change": -0.169
	},
	{
		"year": 1904,
		"change": -0.239
	},
	{
		"year": 1905,
		"change": -0.054
	},
	{
		"year": 1906,
		"change": 0.024
	},
	{
		"year": 1907,
		"change": -0.134
	},
	{
		"year": 1908,
		"change": -0.174
	},
	{
		"year": 1909,
		"change": -0.221
	},
	{
		"year": 1910,
		"change": -0.191
	},
	{
		"year": 1911,
		"change": -0.209
	},
	{
		"year": 1912,
		"change": -0.136
	},
	{
		"year": 1913,
		"change": -0.114
	},
	{
		"year": 1914,
		"change": 0.079
	},
	{
		"year": 1915,
		"change": 0.136
	},
	{
		"year": 1916,
		"change": -0.086
	},
	{
		"year": 1917,
		"change": -0.214
	},
	{
		"year": 1918,
		"change": -0.061
	},
	{
		"year": 1919,
		"change": -0.006
	},
	{
		"year": 1920,
		"change": 0.034
	},
	{
		"year": 1921,
		"change": 0.074
	},
	{
		"year": 1922,
		"change": -0.009
	},
	{
		"year": 1923,
		"change": 0.016
	},
	{
		"year": 1924,
		"change": 0.019
	},
	{
		"year": 1925,
		"change": 0.056
	},
	{
		"year": 1926,
		"change": 0.186
	},
	{
		"year": 1927,
		"change": 0.081
	},
	{
		"year": 1928,
		"change": 0.091
	},
	{
		"year": 1929,
		"change": -0.071
	},
	{
		"year": 1930,
		"change": 0.136
	},
	{
		"year": 1931,
		"change": 0.199
	},
	{
		"year": 1932,
		"change": 0.154
	},
	{
		"year": 1933,
		"change": -0.011
	},
	{
		"year": 1934,
		"change": 0.136
	},
	{
		"year": 1935,
		"change": 0.089
	},
	{
		"year": 1936,
		"change": 0.136
	},
	{
		"year": 1937,
		"change": 0.284
	},
	{
		"year": 1938,
		"change": 0.286
	},
	{
		"year": 1939,
		"change": 0.271
	},
	{
		"year": 1940,
		"change": 0.371
	},
	{
		"year": 1941,
		"change": 0.356
	},
	{
		"year": 1942,
		"change": 0.321
	},
	{
		"year": 1943,
		"change": 0.349
	},
	{
		"year": 1944,
		"change": 0.471
	},
	{
		"year": 1945,
		"change": 0.349
	},
	{
		"year": 1946,
		"change": 0.196
	},
	{
		"year": 1947,
		"change": 0.241
	},
	{
		"year": 1948,
		"change": 0.181
	},
	{
		"year": 1949,
		"change": 0.174
	},
	{
		"year": 1950,
		"change": 0.096
	},
	{
		"year": 1951,
		"change": 0.251
	},
	{
		"year": 1952,
		"change": 0.324
	},
	{
		"year": 1953,
		"change": 0.389
	},
	{
		"year": 1954,
		"change": 0.196
	},
	{
		"year": 1955,
		"change": 0.139
	},
	{
		"year": 1956,
		"change": 0.076
	},
	{
		"year": 1957,
		"change": 0.296
	},
	{
		"year": 1958,
		"change": 0.306
	},
	{
		"year": 1959,
		"change": 0.286
	},
	{
		"year": 1960,
		"change": 0.231
	},
	{
		"year": 1961,
		"change": 0.309
	},
	{
		"year": 1962,
		"change": 0.261
	},
	{
		"year": 1963,
		"change": 0.296
	},
	{
		"year": 1964,
		"change": 0.046
	},
	{
		"year": 1965,
		"change": 0.154
	},
	{
		"year": 1966,
		"change": 0.206
	},
	{
		"year": 1967,
		"change": 0.239
	},
	{
		"year": 1968,
		"change": 0.171
	},
	{
		"year": 1969,
		"change": 0.314
	},
	{
		"year": 1970,
		"change": 0.274
	},
	{
		"year": 1971,
		"change": 0.154
	},
	{
		"year": 1972,
		"change": 0.261
	},
	{
		"year": 1973,
		"change": 0.404
	},
	{
		"year": 1974,
		"change": 0.184
	},
	{
		"year": 1975,
		"change": 0.241
	},
	{
		"year": 1976,
		"change": 0.149
	},
	{
		"year": 1977,
		"change": 0.454
	},
	{
		"year": 1978,
		"change": 0.349
	},
	{
		"year": 1979,
		"change": 0.436
	},
	{
		"year": 1980,
		"change": 0.541
	},
	{
		"year": 1981,
		"change": 0.586
	},
	{
		"year": 1982,
		"change": 0.396
	},
	{
		"year": 1983,
		"change": 0.571
	},
	{
		"year": 1984,
		"change": 0.409
	},
	{
		"year": 1985,
		"change": 0.401
	},
	{
		"year": 1986,
		"change": 0.441
	},
	{
		"year": 1987,
		"change": 0.579
	},
	{
		"year": 1988,
		"change": 0.634
	},
	{
		"year": 1989,
		"change": 0.524
	},
	{
		"year": 1990,
		"change": 0.699
	},
	{
		"year": 1991,
		"change": 0.676
	},
	{
		"year": 1992,
		"change": 0.474
	},
	{
		"year": 1993,
		"change": 0.521
	},
	{
		"year": 1994,
		"change": 0.576
	},
	{
		"year": 1995,
		"change": 0.726
	},
	{
		"year": 1996,
		"change": 0.614
	},
	{
		"year": 1997,
		"change": 0.759
	},
	{
		"year": 1998,
		"change": 0.901
	},
	{
		"year": 1999,
		"change": 0.666
	},
	{
		"year": 2000,
		"change": 0.669
	},
	{
		"year": 2001,
		"change": 0.811
	},
	{
		"year": 2002,
		"change": 0.881
	},
	{
		"year": 2003,
		"change": 0.879
	},
	{
		"year": 2004,
		"change": 0.804
	},
	{
		"year": 2005,
		"change": 0.944
	},
	{
		"year": 2006,
		"change": 0.904
	},
	{
		"year": 2007,
		"change": 0.921
	},
	{
		"year": 2008,
		"change": 0.796
	},
	{
		"year": 2009,
		"change": 0.926
	},
	{
		"year": 2010,
		"change": 0.996
	},
	{
		"year": 2011,
		"change": 0.881
	},
	{
		"year": 2012,
		"change": 0.906
	},
	{
		"year": 2013,
		"change": 0.936
	},
	{
		"year": 2014,
		"change": 1.006
	},
	{
		"year": 2015,
		"change": 1.149
	},
	{
		"year": 2016,
		"change": 1.264
	},
	{
		"year": 2017,
		"change": 1.179
	},
	{
		"year": 2018,
		"change": 1.101
	},
	{
		"year": 2019,
		"change": 1.226
	},
	{
		"year": 2020,
		"change": 1.256
	}
];

// transform data, could be solved more clever ;-)
// https://www.chartjs.org/docs/latest/general/data-structures.html

const chartLabels = [];
const chartValues = [];
for (let dataItem of dataSet) {
	chartLabels.push("" + dataItem.year + "")
	chartValues.push(dataItem.change);
}

console.log({ chartLabels, chartValues })

export const data = {
	labels: chartLabels,
	datasets: [
		{
			label: 'Abweichung der globalen Oberflächentemperatur',
			fill: true,
			lineTension: 0.3,
			backgroundColor: 'rgba(225, 204,230, .3)',
			borderColor: 'rgb(205, 130, 158)',
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			pointBorderColor: 'rgb(205, 130,1 58)',
			pointBackgroundColor: 'rgb(255, 255, 255)',
			pointBorderWidth: 1,
			pointHoverRadius: 5,
			pointHoverBackgroundColor: 'rgb(0, 0, 0)',
			pointHoverBorderColor: 'rgba(220, 220, 220,1)',
			pointHoverBorderWidth: 2,
			pointRadius: 1,
			pointHitRadius: 1,
			data: chartValues,
		},


	],
};

