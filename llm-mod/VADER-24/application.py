import pandas as pd
import numpy as np
import matplotlib.pylab as plt
import seaborn as sns

plt.style.use('ggplot')

import nltk

# Read in Data
df = pd.read_csv("./llm-mod/VADER-24/Reviews.csv")

# to check the review by index values 
review = df['Text'].values[1]
# print(review)

# dimension of the dataset
dim = df.shape

# let us cutdown the size of the data to 500
df = df.head(500)

# QUICK EDA
ax = df['Score'].value_counts().sort_index().plot(kind="bar", title="Count of reviews by Stars", figsize=(10, 5))
ax.set_xlabel('Review Stars')

plt.show()


