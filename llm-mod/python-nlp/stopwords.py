# Stopwords are common words that do not add much meaning to a sentence, such as “the,” “is,” and “and.” NLTK 
# provides a stopwords module that contains a list of stop words for various languages. We can use this module to 
# remove stop words from our tokens.

import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

text = "Natural Language Processing is a subfield of artificial intelligence that focuses on the interaction between humans and computers using natural language."
tokens = word_tokenize(text)

stop_words = set(stopwords.words('english'))
filtered_tokens = [word for word in tokens if word.lower() not in stop_words]

print(filtered_tokens)