import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from gensim import corpora, models
import os
# Download NLTK resources
nltk.download('punkt')
nltk.download('stopwords')

# Function to preprocess text
def preprocess_text(text):
    tokens = word_tokenize(text.lower())
    stop_words = set(stopwords.words('english'))
    tokens = [token for token in tokens if token.isalnum() and token not in stop_words]
    return tokens

# Load text from file
def load_text(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        text = file.read()
    return text

# Main function
def main():
    # Load text data
    file_path = 'transcription.txt'  # Update with the path to your text file
    if not os.path.exists(file_path):
        print("Error: File not found.")
        return

    text = load_text(file_path)

    # Preprocess text
    tokens = preprocess_text(text)

    # Create dictionary and corpus
    dictionary = corpora.Dictionary([tokens])
    corpus = [dictionary.doc2bow(tokens)]

    # Train LDA model
    lda_model = models.LdaModel(corpus, num_topics=10, id2word=dictionary)

    # Ask user for topic
    topic = input("Enter a topic: ")

    # Preprocess user-entered topic
    topic_tokens = preprocess_text(topic)

    # Get topic distribution for user-entered topic
    topic_bow = dictionary.doc2bow(topic_tokens)
    topic_distribution = lda_model.get_document_topics(topic_bow)

    # Print relevancy scores
    print("Relevancy scores for each document:")
    print(topic_distribution)

if __name__ == "__main__":
    main()
