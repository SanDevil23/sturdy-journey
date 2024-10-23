import nltk
from nltk.sentiment import SentimentIntensityAnalyzer
import pandas as pd
import numpy as np
import matplotlib.pylab as plt
import seaborn as sns

plt.style.use('ggplot')

# object for SentimentIntensityAnalyzer
sia = SentimentIntensityAnalyzer()

df = pd.read_csv("./llm-mod/VADER-24/Reviews.csv")

df = df.head(1500)

# calculating the avg of the 500 records
pos = 0
neg = 0
neu = 0 

for i in range(1500):
    text = df['Text'].values[i]
    score = sia.polarity_scores(text)
    # print(score)
    pos+= score['pos']
    neg+= score['neg']
    neu+= score['neu']


print("FINAL DATA")
print("positive sentiments  = ", float(pos/500))
print("neutral sentiments  = ", float(neu/500))
print("negative sentiments  = ", float(neg/500))


