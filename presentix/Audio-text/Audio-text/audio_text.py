import whisper
import nltk
import librosa

def text(path_to_audio):


    model = whisper.load_model("base")

    result = model.transcribe(path_to_audio)
    transcript = result["text"]
    transcript_tokens = nltk.word_tokenize(transcript)

    samples, sample_rate = librosa.load(path_to_audio)
    duration = len(samples) / sample_rate

    return transcript_tokens, duration
path_to_audio = "harvard.mp3"
transcript, audio_duration = text(path_to_audio)
print(transcript)

