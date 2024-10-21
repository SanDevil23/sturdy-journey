# Sentiment analysis is the process of determining the emotional tone of a piece of text. NLTK provides a 
# SentimentIntensityAnalyzer class that analyzes text for its negative, neutral, and positive sentiment.


import nltk
from nltk.sentiment import SentimentIntensityAnalyzer

text = "I love natural language processing! It's so interesting and useful."
analyzer = SentimentIntensityAnalyzer()

sentiment_scores = analyzer.polarity_scores(text)
print(sentiment_scores)


# Output Example
# {'neg': 0.0, 'neu': 0.456, 'pos': 0.544, 'compound': 0.7003}