# Presentix - The Ultimate Language and Interview Assistant

## Abstract
Presentix is an innovative AI-powered tool that evaluates communication skills by analyzing body language and speech during presentations. Using advanced deep learning algorithms, it provides users with comprehensive feedback to improve their presentation and interview skills by analyzing voice and body movement.

## Features
- **AI-Powered Assessment**: Uses computer vision and natural language processing (NLP) to evaluate speech and body language.
- **Detailed Feedback**: Provides quantitative scores on voice clarity, body posture, facial expressions, and more.
- **Machine Learning Integration**: Ensures continuous improvement with each use.
- **Adaptable to Various Contexts**: Whether for public speaking or job interviews, Presentix can assess multiple presentation scenarios.

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Video](#video)
4. [Usage](#usage)
5. [Methodology](#methodology)
6. [Features](#features)
7. [Results](#results)
8. [Contributors](#contributors)

## Introduction
Presentix addresses the lack of objective evaluation in communication skills by providing an automated platform. This project was developed by a team from the Department of Computer Engineering, University of Engineering and Technology, Taxila.

## Installation
To install the necessary dependencies:
```bash
pip install -r requirements.txt 
```
## Video:


https://github.com/user-attachments/assets/857a44d8-f7b4-4051-883e-7f5e512cfc65

## Usage
Upload a video presentation to the platform, and Presentix will analyze both your speech and body language, providing detailed feedback.

## For developers:

```bash
python main.py
```

## Methodology:
Presentix uses computer vision and NLP to evaluate key aspects of presentations:

- Audio Analysis: Transcribes and evaluates speech using OpenAI's Whisper model.
- Body Language Analysis: Uses EfficientNet-B3 for facial expression recognition and MediaPipe for posture and feet movement detection.
- Phonation & Articulation: Assesses voice clarity, tone, and steadiness using advanced algorithms.
For more details, see the full Project Report.

## Results
The system provides the following scores:

- Body Language: Analyzes posture, hand movements, and overall confidence.
- Speech Analysis: Measures articulation, phonation, and prosody.
- Emotion Detection: Evaluates emotional states during the presentation.
  
## Sample output:

- Body Language Score: 90%
- Speech Score: 75%
- Emotion Score: 60%

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributors
- Abdul Hannan Tahir (20-CP-19)
- Faria Raghib (20-CP-56)
- Muhammad Ehsanullah (20-CP-57)
