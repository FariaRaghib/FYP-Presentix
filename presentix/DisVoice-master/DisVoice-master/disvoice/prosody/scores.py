# -*- coding: utf-8 -*-
"""
Created on Sun May 26 10:45:34 2024

@author: Raghib
"""

def score_prosody_features(features):
    """
    Assign scores to prosody features based on predefined criteria.
    
    :param features: Array of prosody features.
    :returns: Dictionary with scores for each feature.
    """
    scores = {}
    
    # Scoring criteria
    def score_f0(f0_avg, f0_std):
        if 100 <= f0_avg <= 200:
            avg_score = 5
        elif 80 <= f0_avg < 100 or 200 < f0_avg <= 220:
            avg_score = 4
        else:
            avg_score = 3
            
        if f0_std < 20:
            std_score = 5
        elif 20 <= f0_std < 40:
            std_score = 4
        else:
            std_score = 3
            
        return avg_score, std_score
    
    def score_energy(e_avg, e_std):
        if e_avg > -20:
            avg_score = 5
        elif -30 <= e_avg <= -20:
            avg_score = 4
        else:
            avg_score = 3
            
        if e_std < 10:
            std_score = 5
        elif 10 <= e_std < 20:
            std_score = 4
        else:
            std_score = 3
            
        return avg_score, std_score
    
    # Extracting F0 and energy features
    f0_avg, f0_std = features[0], features[1]
    e_avg, e_std = features[31], features[32]
    
    # Assigning scores
    f0_avg_score, f0_std_score = score_f0(f0_avg, f0_std)
    e_avg_score, e_std_score = score_energy(e_avg, e_std)
    
    scores['Tone'] = f0_avg_score
    scores['Steadiness'] = f0_std_score
    scores['Loudness'] = e_avg_score
    scores['Consistency'] = e_std_score
    
    return scores
