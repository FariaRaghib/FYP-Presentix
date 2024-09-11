import numpy as np
import sys
import os
from articulation import Articulation
class ArticulationScorer:
    def __init__(self, articulation):
        self.articulation = articulation

    def extract_features(self, audio_file):
        features = self.articulation.extract_features_file(audio_file, static=True, plots=False, fmt="npy")
        features = features[0]  # Since features are in a 2D array with shape (1, 488)
        # print(f"Extracted features shape: {features.shape}")
        # print(f"Extracted features: {features}")
        
        return features

    def score_features(self, features):
        scores = {}
        
        num_features = features.shape[0]
        # print(f"Number of features extracted: {num_features}")
        
        # Score F1 if available
        if num_features > 116:
            F1 = features[116]
            scores["Clarity"] = min(max((F1 - 500) / 500, 0), 1) * 10
        else:
            scores["Clarity"] = None

        # Score F2 if available
        if num_features > 119:
            F2 = features[119]
            scores["Smoothness"] = min(max((F2 - 1500) / 500, 0), 1) * 10
        else:
            scores["Smoothness"] = None

        return scores

    def display_scores(self, scores):
        print("Articulation Scores:")
        for feature, score in scores.items():
            if score is not None:
                print(f"{feature}: {score:.2f}/10")
            else:
                print(f"{feature}: Not available")
                

if __name__ == "__main__":
    audio_file = "DisVoice-master/DisVoice-master/disvoice/articulation/presentation.wav"
    articulation = Articulation()
    scorer = ArticulationScorer(articulation)

    features = scorer.extract_features(audio_file)
    scores = scorer.score_features(features)
    scorer.display_scores(scores)
