# -*- coding: utf-8 -*-
"""
Created on Sun May 26 11:49:36 2024

@author: Raghib
"""

# Import necessary modules and functions
from Prosody import Prosody
from scores import score_prosody_features
from articulation import Articulation
from phonation import Phonation
from scoring import score_phonation_features

class ArticulationScorer:
    def __init__(self, articulation):
        self.articulation = articulation

    def extract_features(self, audio_file):
        features = self.articulation.extract_features_file(audio_file, static=True, plots=False, fmt="npy")
        features = features[0]  # Since features are in a 2D array with shape (1, 488)
        return features

    def score_features(self, features):
        scores = {}
        num_features = features.shape[0]
        
        if num_features > 116:
            F1 = features[116]
            scores["Clarity"] = min(max((F1 - 500) / 500, 0), 1) * 10
        else:
            scores["Clarity"] = None

        if num_features > 119:
            F2 = features[119]
            scores["Smoothness"] = min(max((F2 - 1500) / 500, 0), 1) * 10
        else:
            scores["Smoothness"] = None

        return scores

    def display_scores(self, scores):
        for feature, score in scores.items():
            if score is not None:
                print()
            else:
                print()

def normalize_score(score, min_score, max_score):
    """Normalize a score to a 0-10 scale."""
    return (score - min_score) / (max_score - min_score) * 10

def main():
    # Hardcoded path to the audio file
    audio_file = "C:/Users/Raghib/Downloads/DisVoice-master/DisVoice-master/disvoice/articulation/presentation.wav"

    # Prosody
    prosody = Prosody()
    prosody_features = prosody.extract_features_file(audio_file, static=True, plots=False, fmt="npy")
    prosody_scores = score_prosody_features(prosody_features)
    prosody_score = sum(prosody_scores.values()) / len(prosody_scores)  # Average score for prosody

    # Articulation
    articulation = Articulation()
    articulation_scorer = ArticulationScorer(articulation)
    articulation_features = articulation_scorer.extract_features(audio_file)
    articulation_scores = articulation_scorer.score_features(articulation_features)
    articulation_scorer.display_scores(articulation_scores)
    valid_articulation_scores = [score for score in articulation_scores.values() if score is not None]
    articulation_score = sum(valid_articulation_scores) / len(valid_articulation_scores) if valid_articulation_scores else 0  # Average score for articulation

    # Phonation
    phonation = Phonation()
    phonation_features = phonation.extract_features_file(audio_file, static=True, plots=False, fmt='dataframe')
    phonation_scores = score_phonation_features(phonation_features)
    phonation_score = sum(phonation_scores.values()) / len(phonation_scores)  # Average score for phonation

    # Normalize phonation score to a 0-10 scale if needed
    phonation_score = normalize_score(phonation_score, min_score=0, max_score=100)

    # Combine the scores into a single overall score
    overall_score = (prosody_score + articulation_score + phonation_score) / 3

    # print(f"Prosody Score: {prosody_score:.2f}/10")
    # print(f"Articulation Score: {articulation_score:.2f}/10")
    # print(f"Phonation Score: {phonation_score:.2f}/10")
    print(f"Audio Score: {overall_score:.2f}/10")

if __name__ == "__main__":
    main()
