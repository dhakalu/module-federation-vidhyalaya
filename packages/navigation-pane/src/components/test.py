

import requests

x = requests.get('https://www.reddit.com/r/BrandiLove')

print(x.text)