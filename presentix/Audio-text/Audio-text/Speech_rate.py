from audio_text import text

def word_count(path_to_file):
    # Get transcript and duration from audio
    transcript, duration = text(path_to_file)
    
    # Calculate words per minute
    wpm = len(transcript) / duration
    

    
    # Return the calculated words per minute
    return wpm
