// Test Information - Research-verified details for each screening test
const TEST_INFO = {
    adhd_rs: {
        fullName: "ADHD Rating Scale-IV with Adult Prompts",
        designedFor: "Adults (18+) being evaluated for ADHD. The adult prompts were specifically developed to help explore the extent and severity of ADHD symptoms in adult individuals.",
        versions: "Developed by George J. DuPaul, Thomas J. Power, Arthur D. Anastopoulos, and Robert Reid in 1998. The Adult Prompts were created by Lenard Adler, MD, Thomas Spencer, MD, and Joseph Biederman, MD. Based on DSM-IV-TR criteria for ADHD. Translated into multiple languages.",
        takingTest: "Rate each item based on severity: 0 = None, 1 = Mild, 2 = Moderate, 3 = Severe. The prompts help you think about specific situations. When multiple prompts apply, record the highest score. A score of 2 (Moderate) or higher is considered clinically significant.",
        scoring: `The scale has 18 core items:
• Inattention subscale (items 1-9): Score range 0-27
• Hyperactivity-Impulsivity subscale (items 10-18): Score range 0-27
• Total score range: 0-54

Clinical significance: Higher scores indicate more severe symptoms. The scale measures both frequency and severity of ADHD symptoms and is sensitive to changes following treatment.`,
        validity: "The ADHD-RS-IV demonstrates adequate reliability and validity with acceptable psychometric properties. Studies show good internal consistency (α = 0.86-0.92), test-retest reliability, inter-rater reliability, convergent and divergent validity, and discriminant validity.",
        discussion: "This is a widely used clinical tool for evaluating ADHD symptoms in adults. It adheres to DSM-IV-TR diagnostic criteria. The adult prompts guide more comprehensive exploration of symptom severity and impairment. Results should be interpreted by a qualified healthcare professional alongside other assessment methods."
    },
    wurs: {
        fullName: "Wender Utah Rating Scale (WURS)",
        designedFor: "Adults being evaluated for ADHD who need to document childhood symptoms. Since ADHD diagnosis requires childhood onset, this retrospective scale helps establish early symptom presence.",
        versions: "Developed by Dr. Paul H. Wender and colleagues at the University of Utah School of Medicine in 1993. The full version has 61 items; the WURS-25 is a validated 25-item short form containing the most discriminating items. Translated into multiple languages.",
        takingTest: "Think back to when you were a child (approximately ages 6-12). Rate how much each statement applied to you then, not now. Try to remember how you actually were as a child. Scale: 0 = Not at all or very slightly, 1 = Mildly, 2 = Moderately, 3 = Quite a bit, 4 = Very much.",
        scoring: `Scoring: Sum all item responses.
• Total score range: 0-100 (for WURS-25)

Cutoff scores:
• ≥30: Suggested for community screening
• ≥36: Correctly identifies 96% of adults with ADHD and 96% without
• ≥46: Clinical cutoff - identifies 86% with ADHD, 99% of healthy controls, 81% distinguishing from depression

Subscales measure: Disruptive Mood/Behavior, Inattentive/Hyperactive, and Depression/Anxiety.`,
        validity: "The WURS-25 has excellent discriminant validity, effectively distinguishing between ADHD, non-clinical controls, and those with depression/anxiety. Strong internal consistency demonstrated across studies. Construct validity supported by relationships with objective attention measures.",
        discussion: "This is a retrospective screening tool, not a diagnostic instrument. The main limitation is reliance on memory, which can be affected by current symptoms or mood. Elevated scores may occur in individuals with mood disorders, anxiety, or trauma histories. Ideally corroborate with childhood records, report cards, or family input. Should be used as part of a comprehensive assessment."
    },
    sasi: {
        fullName: "Women's ADHD Self-Assessment Symptom Inventory (SASI)",
        designedFor: "Women with suspected ADHD. Developed to address diagnostic challenges specific to women, capturing symptoms that may present differently than in males.",
        versions: "Developed by psychologist Kathleen Nadeau, PhD and developmental pediatrician Patricia Quinn, MD. Designed as a clinical interview tool for women with ADHD.",
        takingTest: "The questionnaire covers both traditional ADHD symptoms and difficulties specific to women. Answer honestly about your experiences. The inventory covers childhood and current functioning. Scale: 0 = Not at All, 1 = A Little, 2 = A Lot, 3 = Just Like Me.",
        scoring: `The SASI is a comprehensive symptom inventory covering:
• Time management and organization
• Parenting challenges
• Life-maintenance activities
• Hormonal issues and their effects
• Problem eating patterns
• Executive function difficulties

Higher endorsement across domains indicates stronger presence of ADHD-related challenges. Pattern analysis helps identify specific areas of difficulty.`,
        validity: "The SASI was developed from clinical experience to assist in the assessment of ADHD in women. Research to validate the SASI and establish standardized norms is ongoing. It addresses symptoms often missed by scales developed primarily with male populations.",
        discussion: "This inventory is intended to be used as part of a structured clinical interview, not as a standalone diagnostic tool. It specifically captures challenges women with ADHD commonly face, including life management, hormonal influences, and symptoms that may be internalized rather than externalized."
    },
    aq: {
        fullName: "Autism Spectrum Quotient (AQ)",
        designedFor: "Adults aged 16 and over with normal intellectual functioning (IQ of 80+) who want to measure traits associated with autism. Developed as a screening tool for autistic traits in the general population.",
        versions: "Developed by Simon Baron-Cohen and colleagues at the Cambridge Autism Research Centre in 2001. Validated extensively and translated into 20+ languages. Shorter versions exist (AQ-10, AQ-28). Original research published in Journal of Autism and Developmental Disorders.",
        takingTest: "Answer based on what you actually do or feel, not what you think you should do. There are no right or wrong answers. Responses: Definitely Agree, Slightly Agree, Slightly Disagree, Definitely Disagree. Your first instinct is usually most accurate.",
        scoring: `50 items across 5 subscales (10 items each):
• Social Skill: Confidence and ease in social situations
• Attention Switching: Ability to shift focus and adapt to changes
• Attention to Detail: Focus on details and patterns
• Communication: Reciprocal communication and social language
• Imagination: Imaginative thinking and creative scenarios

Scoring: 1 point for each item answered in the autistic direction.
Score range: 0-50

Cutoff scores:
• ≥26: May indicate autistic traits (some studies)
• ≥29: Often considered clinically significant
• ≥32: Original study threshold (Baron-Cohen et al., 2001)

Gender-specific norms exist: Males ≥26, Females ≥27 for "Consistent with Autism."`,
        validity: "Good test-retest reliability and acceptable internal consistency (Cronbach's alpha 0.63-0.77 for subscales). Validated using autistic adults and general population controls. Some criticism regarding potential gender bias and prompt clarity. The AQ quantifies position on the autism-normality continuum.",
        discussion: "The AQ is a screening tool, not a diagnostic instrument. A high score suggests potential benefit from professional evaluation but doesn't confirm autism. Conversely, lower scores don't rule it out, especially in those who mask. Cultural factors may affect responses. Best used as a starting point for discussion with healthcare professionals."
    },
    aspie: {
        fullName: "Aspie Quiz (Version 5)",
        designedFor: "Adults aged 16+ with IQ of 80 or higher who want to assess autistic/neurodiverse traits. Uniquely measures both neurodiverse AND neurotypical traits, providing a comparative profile.",
        versions: "Developed by Leif Ekblad starting in 2004. Evolved through 5 major versions based on statistical analysis and user feedback. Version 5 contains 119 questions. Available in multiple languages including Norwegian, Spanish, Swedish, German, French, Portuguese, Chinese, and others.",
        takingTest: "Answer based on your genuine experiences, not social expectations. The quiz asks about both challenges AND strengths - some questions may seem unusual. Uses a 4-point scale: No/Never, A Little, Yes/Often, Don't Know. Takes approximately 15-20 minutes.",
        scoring: `Version 5 measures 5 domains:

NEURODIVERSE Traits:
• Talent: Special interests, pattern recognition, hyperfocus, collecting information
• Perception: Sensory experiences, need for routine, predictability
• Communication: Atypical nonverbal communication, stimming behaviors
• Relationships: Attachment patterns, social connection styles
• Social: Social processing, group dynamics understanding

NEUROTYPICAL Traits measured in parallel:
• Typical verbal communication, learning by imitation, flexibility

Scoring produces both a neurodiverse and neurotypical score (0-200 scale).
• Score ≥140: Typically indicates 100% probability of being autistic
• Score ~100: 50% probability
• A 35+ point difference between scores typically indicates clear direction.`,
        validity: "The Aspie Quiz has been taken by millions and shows consistent statistical patterns. High neurodiverse scores correlate with autism diagnoses, but it is NOT a clinically validated diagnostic instrument. Results may also indicate other neurodivergencies such as ADHD, dyslexia, or OCD.",
        discussion: "This is a community-developed self-assessment tool, not a clinical instrument. Its unique strength is measuring traits on a spectrum rather than as deficits. The comparative ND/NT scoring helps understand how traits relate to the general population. Many find it useful for self-understanding. Results should not be used for self-diagnosis but can inform discussions with professionals."
    }
};
