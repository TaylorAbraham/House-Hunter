import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestClassifier

csv_name = "data/listings.csv"

# Predict listing ratings by weighing them against listings with similar features
def rate_listings(provided_listings):
    # Load listing data
    df = pd.read_csv(csv_name, index_col=0)

    ## Define features
    # First, convert the bed list to one hot
    df = pd.concat([df, pd.get_dummies(df['beds'])], axis=1)
    df = df.drop(['beds'], axis=1) # Drop the old EFF feature
    X = df.drop(['price', 'imgURL', 'priceStr'], axis=1)
    y = df.price

    # Create linear regression and fit it on the pre-existing data
    lr_clf = LinearRegression()
    lr_clf.fit(X, y)
    # rfc = RandomForestClassifier(n_jobs=-1,max_features= 'sqrt' , n_estimators=70, oob_score = True, random_state=2)
    # rfc.fit(X, y)

    ## Convert the listing dict to a DataFrame
    df_listings = pd.DataFrame(provided_listings, columns=["title","imgURL","priceStr","price","beds"])
    listings = df_listings
    listings['1 + Den'] = 0
    listings['2 + Den'] = 0
    listings = pd.concat([listings, pd.get_dummies(df_listings['beds']).fillna(0)], axis=1)
    listings = listings.drop(['beds'], axis=1) # Drop the old beds feature
    listings = listings.groupby(lambda x:x, axis=1).sum()
    # Predict costs for each of the listings
    preds = lr_clf.predict(listings.drop(['title', 'price', 'imgURL', 'priceStr'], axis=1))

    ratings = []
    expected_prices = []
    for i in range(len(preds)):
      price_ratio = listings.iloc[i, :].price / preds[i]
      expected_prices.append(preds[i])
      if price_ratio < 0.85:
        ratings.append(5)
      elif price_ratio < 1:
        ratings.append(4)
      elif price_ratio < 1.15:
        ratings.append(3)
      elif price_ratio < 1.3:
        ratings.append(2)
      else:
        ratings.append(1)

    return ratings, expected_prices
