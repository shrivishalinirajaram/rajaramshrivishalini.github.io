document.addEventListener("DOMContentLoaded", () => {
    const yearData = {
    2025: [
        { month: "February", content: "🏆 I Place Award for Oral presentation Oral presentation on “Functional Shifts of Toxin-Related Microbial Genes in Dental Caries” in the 2024 James S. and Janice I. Wefel Memorial Fund Graduate/Post-Doctoral Competition at the AADOCR Iowa Section Annual Meeting, University of IA, USA." },
        { month: "March", content: "🎓 Selected for the 2 year fellowship on the  “ASM Future Leaders Mentorship Fellowship (FLMF) program” organized by the American Society for Microbiology. 🏆 2nd Place Award for Oral presentation on “Gene activity changes in oral bacteria during dental caries and treatment” in the Jakobsen Graduate Research Showcase 2025. 🏆 Won Thursday terrace grant $1,500.00 for the Human Toxicology Student Advisory Committee (ToxSAC) and successfully organized "Balance, Bleong and Succeed" mental health event as a part of ToxSAC in collaboration with University Counselling Services (UCS) and the Counselling Psychology Graduate Student Association (CPGSA). 📜 Received [HAWK-AI level 2 certification](https://iiai.uiowa.edu/hawkai-level-2-enrollment) from the Iowa Institute of Artificial Intelligence. 🎓 Completed CIRTL associate-level certification for teaching." },
	{ month: "April", content: "📚 Received $1,600.00 for James.S and Janice I. Wefel Memorial Research Award for Dental Caries (July 1, 2025 - December 31, 2026). 📖 Published "Research at UIowa: Comic Series", successfully at the Synthesis: A digital journal for student science communication." },
	{ month: "May", content: "🎓 Completed "Teaching as Research" series and obtained Practitioner-level certification from CIRTL.
🎓 Selected for the Graduate Teaching Fellowship 2025-2026 at the University of Iowa. 📖 Recognized for serving on the planning committee of the Jakobsen Graduate Research Showcase 2025. 🎓 Successfully completed "Graduate Certificate in Biostatistics", awarded by the University of Iowa." } 
        ],
    2024: [
        { month: "January", content: "🎤 Raised $2,932.00 Chapter development grant for the student organization - Connecting science to society from National Science Policy Network for developing Research at UIowa - A comic series." },
        { month: "February", content: "🏆 I Place Award for Oral presentation with a monetary prize of $500 on “Multi-omics comparison of Oral Mycobiome” in the 2024 Graduate/Post-Doctoral Competition at the AADOCR Iowa Section Annual Meeting, University of Iowa, IA, USA." },
        { month: "March", content: "📚 Received 2 grants for travel - Graduate and Professional Student Government Travel Grant - $400.00; Graduate Student Senate - Presentation and Travel Funds - $626.25. Presented “Multi-omics comparison of bacteria, fungi, and viruses in oral microbiome” in 2024 IADR/AADOCR/CADR General Session and Exhibition, New Orleans, LA, USA." },
        { month: "April", content: "📖 Published a stage play and co-authored a comic book in Synthesis Journal ([more](https://rajaramshrivishalini.com/science.html)). Received $2,500.00 for James.S and Janice I. Wefel Memorial Award for dental caries (July 1, 2024 - December 31, 2025)." },
        { month: "May", content: "🎓 Served on the planning committee for the [International Student Graduation Celebration](https://multicultural.uiowa.edu/international-graduation) Spring 2024." },
        { month: "July", content: "💼 Elected as the Vice President for Human Toxicology Student Advisory Committee (ToxSAC) and Treasurer for Connecting Science to Society (CSTS) student organizations." },
        { month: "September", content: "✅ Passed my comprehensive exam approved by 5 doctoral committee members and became a PhD Candidate." },
        { month: "October", content: "📊 Poster Presentation on “Comprehensive evaluation of differential abundance methods for multi-omics oral microbiome data” at American Society of Microbiology - Conference on Rapid Applied Microbial Next-Generation Sequencing and Bioinformatic Pipelines (ASM NGS). Presented on “Investigating the Changes of Toxin-Related Gene Expression in the Oral Metatranscriptome of Dental Caries” in Central States – Midwest Regional Chapters of Society of Toxicology, 2024 Annual Meeting, AI tools in toxicology, Iowa City, IA, USA." },
        { month: "December", content: "📜 Received [HAWK-AI level 1 certification](https://iiai.uiowa.edu/hawkai-level-1-enrollment) from the Iowa Institute of Artificial Intelligence." }
    ],
2023: [
        { month: "November", content: "📜 Certified in “Engaging across cultures” on developing intercultural insights in academia and demystifying cultural expectations and job search process by the International Student Services at the University of Iowa." },
        { month: "October", content: "📊 Poster Presentation on “Gene expression data and machine learning approaches unveils drug- induced liver injury (DILI) biomarkers” in Central States Regional Chapter of Society of Toxicology, 2023 Annual Meeting, One World, One Health, One Toxicology, Lincoln, NE, USA." },
        { month: "September", content: "🎨 Assigned as the creative lead of the science communication committee and grant reviewer of the grants committee at the National Science Policy Network." },
        { month: "July", content: "💼 Elected as Programming Director of the Toxicology Student Advisory Committee for the academic year 2023-2024." },
        { month: "June", content: "📖 Published a poetry book on cell organelles - [“The little things that run the world”](https://www.store.bookleafpub.com/product-page/the-little-things-that-run-the-world-a-poetry-tribute-to-organelles) and elected as the President of the student organization - Connecting Science to Society affiliated as an official chapter to National Science Policy Network for the academic year 2023-2024." },
        { month: "May", content: "🔬 Joined Dr. Zeng’s [BioComs Lab](https://biocoms.github.io/) for my PhD research journey." },
        { month: "February", content: "🔬 Started third lab rotation under Dr. Kai Wang at the Department of Biostatistics, College of Public Health." }
    ],
    2022: [
        { month: "November", content: "🔬 Started second lab rotation under Dr. Erliang Zeng, Division of Biostatistics and Computational Biology, College of Dentistry." },
        { month: "October", content: "📖 Participated in the “Science through story” course at University of North Carolina at Chapel Hill." },
        { month: "September", content: "🎓 Registered as an active member of the National Science Policy Network." },
        { month: "August", content: "🔬 Began first lab rotation for PhD under Dr. Michael O’Rorke at the Department of Epidemiology, College of Public Health, and started my PhD at [The University of Iowa](https://uiowa.edu/) in the [Interdisciplinary Graduate Program in Human Toxicology](https://toxicology.grad.uiowa.edu/)." }
    ],
2021: [
        { month: "February", content: "💻 Build Geeks became Build Geeks Private Limited, focusing on biology-based gaming as a product and offering bioinformatics training services." }
    ],
    2020: [
        { month: "July", content: "🌟 Founded Build Geeks, my brainchild." },
        { month: "May", content: "🎓 Graduated Masters with 9.84/10 CGPA (3.94/4.0)." },
        { month: "April", content: "📜 Cleared GATE Biotechnology entrance exam with an All India Ranking of 1521 out of 858,023 students." },
        { month: "February", content: "📊 Poster Presentation on “An (incomplete) blueprint on the protein secretion machinery in Mycobacterium tuberculosis” in Mycobacterial heterogeneity and host tissue tropism at India | EMBO symposium 2020, New Delhi, India." }
    ],
    2019: [
        { month: "November", content: "📘 Participated in training programme under RUSA 2.0 scheme on Artificial Intelligence and Machine Learning." },
        { month: "August", content: "🔬 Resumed Master’s thesis work at [Dr. Samal’s lab](https://www.imsc.res.in/~asamal/index.html)." },
        { month: "February", content: "🌐 Attended AVIDADHAM’19 - Metamorphosis from academia to industrialization, an International Conference organized by Center for Biotechnology, Anna University, Chennai." },
        { month: "January", content: "🔬 Started part-time internship in computational biology at [Dr. Areejit Samal’s lab](https://www.imsc.res.in/~asamal/index.html)." }
    ],
2018: [
        { month: "September", content: "🎓 Joined Master of Technology in Computational Biology at Anna University with a Master’s Student scholarship of INR 12,500/month ($150.00) from the Department of Biotechnology, Government of India." },
        { month: "July", content: "📜 Cleared Pondicherry University entrance examination with a state rank of 2 and All India Ranking of 7 out of 44,000 students." },
        { month: "February", content: "🔬 Attended two-day workshop on “Nanomaterials Characterization by Electron Microscopy” at Madurai Kamaraj University, Madurai." },
        { month: "February", content: "📊 Poster Presentation on “Identification of pathways to be targeted for diffuse type Gastric tumors with dysregulated Extracellular Matrix” at the 49th Aqua-Terr Annual Conference on Biological Sciences at Madurai Kamaraj University, Madurai." },
        { month: "February", content: "📊 Poster Presentation on “Functional genomic investigation of HNF4α mediated transcriptional regulation in gastric cancer” at the 49th Aqua-Terr Annual Conference on Biological Sciences at Madurai Kamaraj University, Madurai." }
    ],
    2017: [
        { month: "November", content: "🔬 Joined a research internship at [Dr. Kumerasan Ganesan’s lab](http://oncocellomics.org/index.php) on “Cancer Genetics.”" },
        { month: "May", content: "🎓 Graduated Bachelors with 9.51/10 CGPA (3.8/4.0)." },
        { month: "March", content: "📄 Completed thesis projects at Dr. Shinde’s lab." }
    ],
    2016: [
        { month: "September", content: "🔬 Joined [Dr. Pramod Shinde’s Lab](https://pramodshinde1.wixsite.com/naturalproduct) for Bachelor’s thesis research at Central Salt and Marine Chemicals Research Institute." },
        { month: "July", content: "📚 Completed in-plant training on “Animal Biotechnology” at Kavin Bioresearch, Chennai (15 days)." },
        { month: "June", content: "🧬 Completed a one-month internship in Biotechnology-Concept marketing at Geomarine Biotechnologies Pvt. Ltd., Chennai." },
        { month: "March", content: "🌱 Organized a two-day National-level workshop on “Conservation of Herbs and Herbal Medicines” at Bharath University, Chennai." },
        { month: "March", content: "🧬 Completed in-plant training on “Recombinant DNA Technology” at Indo-American Hybrid Seeds Pvt. Ltd., Bangalore (15 days)." }
    ],
2015: [
        { month: "December", content: "🧬 In-plant training on “Molecular Biology Techniques” at Apex Biotechnology Training and Research Institute, Chennai (20 days)." },
        { month: "September", content: "🔬 One day workshop on “Nested PCR and its industrial applications” in Baba Clinical and Genomic Research Centre, Ticel Biopark, Chennai." },
        { month: "August", content: "📚 Attended Symposium on Genetic Diseases: From Mendelian to Malignancies, Indian Institute of Technology (IIT-Madras), Chennai." },
        { month: "March", content: "🌱 Organized National Conference on Biomolecular Engineering (NCBME- 2015), Bharath University, Chennai." },
        { month: "March", content: "🧬 Attended an after-event 2 days workshop on **“DNA Barcoding.”**" },
        { month: "March", content: "🤝🏻 Engaged with [Dr. Harald zur Hausen](https://www.nobelprize.org/prizes/medicine/2008/hausen/facts/), the Nobel laureate who discovered the role of papilloma viruses in cervical cancer at the [Indian Genetics Congress](http://www.srmgenetics.info/2015/03/indian-genetics-congress-2015.html), SRM University, Chennai, India." },
        { month: "February", content: "🎤 Oral Presentation on “Biosensors-Development Towards Biotechnology; Its Applications and Advantages” in 2nd National Conference On Sustainable Trends In Energy And Environmental Resources (STEER) at SSN College of Engineering, Chennai." },
        { month: "February", content: "🎤 Oral Presentation on “Fenugreek-The Genetical Interest” in National Conference on Recent Advances in Applied Sciences at Chevalier T. Thomas Elizabeth College for Women, Chennai." },
        { month: "January", content: "📊 Poster Presentation on “Turmeric: An Innovative Research Element” in National Conference on Drug Carriers in Medicine and Biology at Bannari Amman Institute of Technology, Sathyamangalam." }
    ],
    2014: [
        { month: "February", content: "🤝🏻 First conference poster presentation on **“Hereditary Cancer”** in the Students Symposium on Bioengineering at the university." }
    ],
    2013: [
        { month: "August", content: "🎓 Joined [Bharath University, Chennai, Tamil Nadu, India](https://www.bharathuniv.ac.in/) for my Bachelors of Technology in Genetic Engineering." }
    ]
};


    const timeline = document.querySelector(".journey-vertical-timeline");
    const years = document.querySelectorAll(".journey-horizontal-timeline .year");
    let activeYear = "2025";

    function renderTimeline(year) {
        const months = [
            "December",
            "November",
            "October",
            "September",
            "August",
            "July",
            "June",
            "May",
            "April",
            "March",
            "February",
            "January"
        ];

        // Render the timeline structure
        timeline.innerHTML = `
            <div class="terminal-marker top"></div>
            <div class="line"></div>
            ${months
                .map(
                    (month) => `
                    <div class="month">
                        <span>${month}</span>
                    </div>`
                )
                .join("")}
            <div class="terminal-marker bottom"></div>
            <div class="content"></div>
        `;

        // Add events dynamically
        const contentContainer = timeline.querySelector(".content");
        const events = yearData[year] || [];
        events.forEach((event) => {
            const monthEl = [...timeline.querySelectorAll(".month span")].find(
                (el) => el.textContent === event.month
            );

            if (monthEl) {
                monthEl.parentElement.classList.add("active");
                const eventEl = document.createElement("div");
                eventEl.className = "event";
                eventEl.innerHTML = `
                    <span class="emoji">${event.content.split(" ")[0]}</span>
                    <span class="text">${event.content.slice(event.content.indexOf(" ") + 1)}</span>
                `;
                const monthPosition =
                    monthEl.getBoundingClientRect().top - timeline.getBoundingClientRect().top;
                eventEl.style.top = `${monthPosition}px`;
                contentContainer.appendChild(eventEl);
            }
        });
    }

    function updateYearHighlight(selectedYear) {
        years.forEach((year) => year.classList.remove("active"));
        const activeYearEl = [...years].find((el) => el.dataset.year === selectedYear);
        if (activeYearEl) activeYearEl.classList.add("active");
    }

    years.forEach((year) => {
        year.addEventListener("click", () => {
            activeYear = year.dataset.year;
            renderTimeline(activeYear);
            updateYearHighlight(activeYear);
        });
    });

    // Initialize default view
    renderTimeline(activeYear);
    updateYearHighlight(activeYear);
});


