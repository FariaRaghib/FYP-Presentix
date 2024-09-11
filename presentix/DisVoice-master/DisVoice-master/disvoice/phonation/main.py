import sys
from phonation import Phonation  # Ensure that this import works correctly
from scoring import score_phonation_features  # Import the scoring function

def main(audio_file):
    try:
        # print("Initializing Phonation class...")
        phonation = Phonation()  # Initialize the Phonation class
        
        # print("Extracting features from the audio file...")
        features = phonation.extract_features_file(audio_file, static=True, plots=False, fmt='dataframe')
        # print("Features extracted:")
        # print(features)
        
        # print("Scoring the extracted features...")
        scores = score_phonation_features(features)  # Call the imported scoring function
        
        print("Scores computed:")
        for feature, score in scores.items():
            print(f"{feature}: {score}")
    
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    audio_file = "C:/Users/Raghib/Downloads/DisVoice-master/DisVoice-master/disvoice/phonation/Man Screaming - CEEDAY Sound Effect (HD).wav"
    main(audio_file)
