import requests
from requests import get
import bs4
from bs4 import BeautifulSoup
import re
from pprint import pprint

base_url = 'http://web-16.challs.olicyber.it/'
toVisit = set()
toVisit.add(base_url)
visited = set()
found = False

while not found and len(toVisit) > 0:
    print ("URL da vistitare: " + str(len(toVisit)))
    url = toVisit.pop()
    page = requests.get(url).text
    # print(url)
    visited.add(url)
    start = page.upper().find("FLAG{")
    if (start != -1):
        found = True
        print(url)
        end = page.find("}", start)
        print (page[start:end+1])
    
    soup = BeautifulSoup(page, 'html.parser')    
    # a tag
    for anchor in soup.find_all("a"):
        href = base_url + anchor.get('href')
        if not href in visited:
            toVisit.add(href)
    # link (lo metto per ultimo perchè so che è qui!)
    for link in soup.find_all("link"):
        href = base_url + link.get('href')
        if not href in visited:
            toVisit.add(href)
    # script (lo metto per ultimo perchè so che è qui!)
    for script in soup.find_all("script"):
        href = base_url + script.get('src')
        if not href in visited:
            toVisit.add(href)
