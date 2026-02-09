export const TEST_INFO = {
    adhd_rs: {
        fullName: "ADHD Rating Scale-IV (ADHD-RS-IV) with Adult Prompts",
        designedFor: "Adults (18+) being evaluated for ADHD. It measures current symptoms based on DSM-IV criteria.",
        versions: "Based on the original ADHD-RS-IV (DuPaul et al., 1998), adapted with prompts for adult life contexts (work, relationships, home management).",
        scoring: "18 items (9 Inattention, 9 Hyperactivity-Impulsivity). Scored 0-3 (None, Mild, Moderate, Severe). Total score 0-54.",
        validity: "Widely used in clinical trials. High internal consistency and correlation with other ADHD measures like the CAARS.",
        discussion: "This is a 'symptom checklist.' A high score suggests ADHD but requires clinical interview to confirm the symptoms cause 'significant impairment' and were present before age 12."
    },
    wurs: {
        fullName: "Wender Utah Rating Scale (WURS - 61 item version)",
        designedFor: "Adults being evaluated for ADHD (Self-report of childhood behaviors).",
        versions: "Developed by Ward, Wender, & Reimherr (1993). This is the full 61-item version.",
        scoring: "Responses 0-4. Only 25 specific items are typically used for formal scoring (totaling 0-100). Clinical cutoff is usually 46+.",
        validity: "Excellent at distinguishing adults with ADHD from those without, based on retrospective childhood data.",
        discussion: "Because ADHD is a neurodevelopmental disorder, symptoms *must* have been present in childhood. WURS helps capture that history even if an adult wasn't diagnosed as a child."
    },
    sasi: {
        fullName: "Women's ADHD Self-Assessment Symptom Inventory (SASI)",
        designedFor: "Women/AFAB individuals. Captures 'masked' or internalizing ADHD symptoms often missed in traditional tests.",
        versions: "Developed by Dr. Kathleen Nadeau and Dr. Patricia Quinn.",
        scoring: "Checklist format (0-3 scale). Focuses on executive function, internal restlessness, and 'hidden' struggles like emotional dysregulation.",
        validity: "Highly regarded in clinical circles for identifying the specific 'female phenotype' of ADHD.",
        discussion: "Many women are missed by the ADHD-RS because that test was built on observations of hyperactive boys. SASI asks about internal states, messiness, and the massive effort required to 'mask' symptoms."
    },
    aq: {
        fullName: "Autism Spectrum Quotient (AQ-50)",
        designedFor: "Adults (16+) of average intelligence or higher.",
        versions: "Developed by Simon Baron-Cohen and colleagues at the Autism Research Centre (2001).",
        scoring: "50 items across 5 domains. 1 point for each 'autistic' response (Agree on some, Disagree on others). Cutoff of 32+ is significant.",
        validity: "Well-established screening tool. ~80% of adults with ASD score 32+, compared to only 2% of the general population.",
        discussion: "The AQ measures 'traits' rather than 'impairment.' Many high-masking individuals score high on AQ even if they perform well socially due to high effort."
    },
    aspie: {
        fullName: "Aspie Quiz (Final Version 5)",
        designedFor: "Broad Autism Spectrum Traits (Neurodiversity screening).",
        versions: "Developed by Rdos (Leif Ekblad). Continuously updated based on large-scale data (v5).",
        scoring: "Complex multi-domain scoring (Talent, Perception, Communication, Relationships, Social). Generates the famous 'spider' or 'radar' chart.",
        validity: "Based on data from over 50,000 individuals. High correlation with clinical ASD diagnoses.",
        discussion: "Unlike the AQ which focuses on the medical model, the Aspie Quiz looks at 'Neurotypical' vs 'Neurodivergent' traits, including strengths like pattern recognition and intense focus."
    }
};
