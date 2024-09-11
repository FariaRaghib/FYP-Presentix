from audio_text import text
import numpy as np

# Path to the audio file
path_to_audio = "harvard.mp3"

# Transcribe the audio and get the result
transcript, audio_duration = text(path_to_audio)

# Function to count unique words
def unique_word_count(transcript):
    unique_words, counts = np.unique(transcript, return_counts=True)
    output = dict(zip(unique_words, counts))
    count = len(output)
    return output, count

# Function to count filler words
def filler_word_count(unique_words):
    filler_count = {}
    repeated_count = {}

    filler_words = np.array(['well', 'like', 'actually', 'and', 'just', 'very', 'really',
                             'basically', 'seriously', 'okay', 'so', 'right', 'totally',
                             'most', 'somehow', 'mean', 'guess', 'oh'])

    for word, count in unique_words.items():
        if word in filler_words:
            filler_count[word] = count
        else:
            repeated_count[word] = count

    repeated_count = sorted(repeated_count, key=repeated_count.get, reverse=True)[:5]
    
    return filler_count, repeated_count

# Get unique word count
unique_words_count, total_unique_words = unique_word_count(transcript)

# Get filler word count
filler_word_count, top_repeated_words = filler_word_count(unique_words_count)

# Print results
print("Duration of the audio:", audio_duration)
print("Total unique words:", total_unique_words)
print("Filler word count:", filler_word_count)
print("Top repeated words:", top_repeated_words)
