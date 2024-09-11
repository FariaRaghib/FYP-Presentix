import textstat
import numpy as np
from audio_text import text

class AudioAnalysis:
    def __init__(self, path_to_audio):
        self.path_to_audio = path_to_audio
        self.transcript, self.audio_duration = text(path_to_audio)
        self.rate = 0
        self.unique_word_count = 0
        self.filler_word_count = {}
        self.repeated_words = {}
    
    def calculate_word_count(self):
        # Calculate words per minute
        self.rate = len(self.transcript) / self.audio_duration
    
    def calculate_unique_word_count(self):
        unique_words, counts = np.unique(self.transcript, return_counts=True)
        self.unique_word_count = len(unique_words)
        return dict(zip(unique_words, counts))
    
    def calculate_filler_word_count(self, unique_words_dict):
        filler_words = np.array(['well', 'like', 'actually', 'and', 'just', 'very', 'really',
                                 'basically', 'seriously', 'okay', 'so', 'right', 'totally',
                                 'most', 'somehow', 'mean', 'guess', 'oh'])
        self.filler_word_count = {word: count for word, count in unique_words_dict.items() if word in filler_words}
        repeated_count = {word: count for word, count in unique_words_dict.items() if word not in filler_words}
        
        top_repeated_words = sorted(repeated_count.items(), key=lambda item: item[1], reverse=True)[:5]
        self.repeated_words = dict(top_repeated_words)
    
    def calculate_readability_metrics(self):
        # Convert the list of tokens back to a single string for readability analysis
        transcript_text = ' '.join(self.transcript)
        readability_scores = {
            "Understanding Level": textstat.coleman_liau_index(transcript_text),
            "Ease of Reading": textstat.dale_chall_readability_score(transcript_text),
            "Difficult Words": textstat.difficult_words(transcript_text),
            "Readibility Level": textstat.linsear_write_formula(transcript_text),
            "Text Clarity": textstat.gunning_fog(transcript_text),
            "Text Standard": textstat.text_standard(transcript_text)
        }
        return readability_scores

# Path to the audio file
path_to_audio = "harvard.mp3"

# Create an instance of the AudioAnalysis class
audio_analysis = AudioAnalysis(path_to_audio)

# Perform word count analysis
audio_analysis.calculate_word_count()
print("Words per minute:", audio_analysis.rate)

# Perform unique word count analysis
unique_words_dict = audio_analysis.calculate_unique_word_count()
print("Total unique words:", audio_analysis.unique_word_count)

# Perform filler word count analysis
audio_analysis.calculate_filler_word_count(unique_words_dict)
print("Filler word count:", audio_analysis.filler_word_count)
print("Top repeated words:", audio_analysis.repeated_words)

# Perform readability analysis
readability_scores = audio_analysis.calculate_readability_metrics()
print("Readability scores:", readability_scores)
