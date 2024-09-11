import textstat
from audio_text import text

def readability_metrics(transcript):
    # Calculate readability scores
    coleman_liau = textstat.coleman_liau_index(transcript)
    dale_chall = textstat.dale_chall_readability_score(transcript)
    difficult_words = textstat.difficult_words(transcript)
    linsear_write = textstat.linsear_write_formula(transcript)
    gunning_fog = textstat.gunning_fog(transcript)
    text_standard = textstat.text_standard(transcript)
    
    # Return the readability scores as a dictionary
    return {
        "Readibility Grade Level": coleman_liau,
        "Ease of Reading": dale_chall,
        "Difficult Words": difficult_words,
        "Readibility Level": linsear_write,
        "Text Clarity": gunning_fog,
        "Text Standard": text_standard
    }
