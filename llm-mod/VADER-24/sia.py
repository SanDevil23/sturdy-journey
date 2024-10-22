from nltk.sentiment import SentimentIntensityAnalyzer

# object for SentimentIntensityAnalyzer
sia = SentimentIntensityAnalyzer()

print(sia.polarity_scores("This is the worst thing ever"))
