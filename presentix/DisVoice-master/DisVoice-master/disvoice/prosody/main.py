# -*- coding: utf-8 -*-
"""
Created on Sun May 26 10:44:37 2024

@author: Raghib
"""

# main.py
from Prosody import Prosody
from scores import score_prosody_features

def main():
    # Hardcode the path to your audio file here
    audio_file = "DisVoice-master/DisVoice-master/disvoice/articulation/presentation.wav"
    
    prosody = Prosody()
    features = prosody.extract_features_file(audio_file, static=True, plots=False, fmt="npy")
    scores = score_prosody_features(features)
    
    print("Prosody Scores for the Audio File:")
    for feature, score in scores.items():
        print(f"{feature}: {score}")

if __name__ == "__main__":
    main()
