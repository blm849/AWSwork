import urllib2
data = '{"theDate": "12", "cases": "12", "hospitalized": "12","inICU": "12"}'
url = 'https://cfmv3dnntb.execute-api.us-east-1.amazonaws.com/beta'
req = urllib2.Request(url, data, {'Content-Type': 'application/json'})
f = urllib2.urlopen(req)
for x in f:
    print(x)
f.close()

