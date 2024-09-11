def score_phonation_features(features):
    scores = {}

    if 'avg Jitter' in features:
        jitter = features['avg Jitter'].iloc[0]  # Accessing the first element
        normalized_jitter = jitter * 100  # Jitter typically ranges from 0 to 1% (0.01)
        scores['Stability'] = max(0, 100 - min(100, normalized_jitter))

# =============================================================================
#     if 'avg Shimmer' in features:
#         shimmer = features['avg Shimmer'].iloc[0]  # Accessing the first element
#         normalized_shimmer = shimmer * 20  # Shimmer typically ranges from 0 to 5% (0.05)
#         scores['Clarity'] = max(0, 100 - min(100, normalized_shimmer))
# 
# =============================================================================
    if 'avg logE' in features:
        log_energy = features['avg logE'].iloc[0]  # Accessing the first element
        normalized_log_energy = (log_energy + 60) / 60 * 100  # Assuming log energy values range between -60 and 0
        scores['Intensity'] = max(0, min(100, normalized_log_energy))

    return scores
