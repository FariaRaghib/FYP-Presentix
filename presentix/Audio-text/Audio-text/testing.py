import whisper
import language_tool_python
import nltk
import re
import numpy as np
import subprocess
import os

class NLP_RESULTS:
    def __init__(self):
        self.rate = 0
        self.unique_word_count = 0
        self.filler_word_count = {}
        self.repeated_words = {}
        self.grammar_score = 100
        
    def __create_temp_files(self, input_path):
        pre = 'ffmpeg -i '
        post = ' -vn -acodec pcm_s16le -ar 44100 -ac 2 '
        output_path = os.path.join(os.getcwd(), os.path.basename(input_path).split('.')[0] + '.wav')
        command = pre + input_path + post + output_path
        subprocess.run(command, shell=True)
        return output_path
       
    def __text(self, path_to_audio):
        model = whisper.load_model("base")
        result = model.transcribe(path_to_audio)
        transcript = result["text"]
        
        # Tokenizing the transcript using nltk
        nltk.download('punkt')
        transcript = nltk.word_tokenize(transcript)
        
        # Calculating duration using whisper's segment timestamps
        duration = sum(segment["end"] - segment["start"] for segment in result["segments"])
        
        return transcript, duration
    
    def __rate_of_speech(self, transcript, duration):
        rate = len(transcript) / (duration) * 60
        return round(rate)
    
    def __unique_word_count(self, transcript):
        output = {}
        unique_words, counts = np.unique(transcript, return_counts=True)
        
        for i, element in enumerate(unique_words):
            output[element] = counts[i]
        
        count = len(output)
        return output, count
    
    def __filler_word_count(self, unique_words):
        filler_count = {}
        repeated_count = {}
        
        filler_words = np.array(['well', 'like', 'actually', 'and', 'just', 'very', 'really',
                      'basically', 'seriously', 'okay', 'so', 'right', 'totally',
                      'most', 'somehow', 'mean', 'guess', 'oh'])
        
        for word in unique_words.keys():
            if word in filler_words:
                filler_count[word] = unique_words[word]
            else:
                repeated_count[word] = unique_words[word]
        
        keys = np.array(list(repeated_count.keys()))
        values = np.array(list(repeated_count.values()))
        sorted_keys = keys[values.argsort()]
        repeated_count = sorted_keys[-5:]
        
        return filler_count, repeated_count

    def __check_grammar(self, text):
        tool = language_tool_python.LanguageTool('en-US')
        matches = tool.check(text)
        num_errors = len(matches)
        
        # Simple scoring mechanism: start with 100, subtract 1 point for each error
        self.grammar_score = max(100 - num_errors, 0)
        
        return self.grammar_score, matches
    
    def __call__(self, path):
        output_path = self.__create_temp_files(path)
        transcript, duration = self.__text(output_path)
        self.rate = self.__rate_of_speech(transcript, duration)
        unique_dict, self.unique_word_count = self.__unique_word_count(transcript)
        self.filler_word_count, self.repeated_words = self.__filler_word_count(unique_dict)
        os.remove(output_path)
        
        # Join the tokenized transcript back into a string for grammar checking
        transcript_text = ' '.join(transcript)
        self.grammar_score, grammar_issues = self.__check_grammar(transcript_text)
        
        return {
            "rate_of_speech": self.rate,
            "unique_word_count": self.unique_word_count,
            "filler_word_count": self.filler_word_count,
            "repeated_words": self.repeated_words,
            "grammar_score": self.grammar_score,
            "grammar_issues": grammar_issues
        }


if __name__ == "__main__":
    # Example usage:
    input_path = 'harvard.mp3'  # Provide the path to your input file here
    nlp = NLP_RESULTS()
    results = nlp(input_path)
    
    # Print results
    print("Rate of Speech:", results["rate_of_speech"])
    print("Unique Word Count:", results["unique_word_count"])
    print("Filler Word Count:", results["filler_word_count"])
    print("Repeated Words:", results["repeated_words"])
    print("Grammar Score:", results["grammar_score"])
    print("Grammar Issues Found:", results["grammar_issues"])
