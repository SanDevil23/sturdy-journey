# Lemmatization is the process of reducing words to their base form, or lemma. For example, the word “running” would be 
# reduced to “run.” This can help to group together words with similar meanings. NLTK provides a WordNetLemmatizer class 
# that performs lemmatization.


import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import WordNetLemmatizer

text = "Natural Language Processing is a subfield of artificial intelligence that focuses on the interaction between humans and computers using natural language."
tokens = word_tokenize(text)

stop_words = set(stopwords.words('english'))
filtered_tokens = [word for word in tokens if word.lower() not in stop_words]

lemmatizer = WordNetLemmatizer()
lemmatized_tokens = [lemmatizer.lemmatize(token) for token in filtered_tokens]

print(lemmatized_tokens)