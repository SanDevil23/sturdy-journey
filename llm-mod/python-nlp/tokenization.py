# Tokenization is the process of breaking a text into individual words or tokens. NLTK provides a word_tokenize 
# function that performs this task.

import nltk
from nltk.tokenize import word_tokenize


#input from the users
print("Enter the String to be tokenized: ")
text = str(input())

#tokenizing command
tokens = word_tokenize(text)

print(tokens)