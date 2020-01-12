import requests
import csv
from bs4 import BeautifulSoup

def get_listings(num=20):
  response = []
  r = requests.get("https://www.kijiji.ca/b-vancouver/apartments/k0l1700287?ll=49.282729%2C-123.120738&address=Vancouver%2C+BC&sort=relevancyDesc&radius=20.0&dc=true")
  page = r.text
  soup = BeautifulSoup(page, "html.parser")
  listing_divs = soup.find_all("div", class_="clearfix")
  i = 0
  for div in listing_divs:
    if i != 0:
      listing = {}
      if i > num:
        break
      try:
        listing["title"] = div.find("a", class_="title").text.strip()
        listing["imgURL"] = div.find("img")["data-src"]
        price = div.find("div", class_="price").text.strip()
        listing["priceStr"] = price
        listing["price"] = int(round(float(price.replace(",", "").replace("$", "").strip()[:12])))
        listing["beds"] = div.find("div", class_="details").text.strip()[5:].strip()
        response.append(listing)
      except Exception:
        pass
    i += 1
  return response

if __name__ == "__main__":
  csv_columns = ["title", "imgURL", "priceStr", "price", "beds"]
  l = get_listings()
  print(l)
  with open("../data/listings.csv", 'w') as csvfile:
    writer = csv.DictWriter(csvfile, fieldnames=csv_columns)
    writer.writeheader()
    for data in l:
        writer.writerow(data)
