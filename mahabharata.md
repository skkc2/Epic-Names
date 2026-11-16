graph TD
    %% Styling Definitions
    classDef ancestral fill:#f8edeb,stroke:#d8b4a0,stroke-width:2px,color:#000;
    classDef elder fill:#e2eafc,stroke:#7b2cbf,stroke-width:2px,color:#000;
    classDef pandava fill:#d8f3dc,stroke:#2d6a4f,stroke-width:2px,color:#000;
    classDef kaurava fill:#ffe5d9,stroke:#b7094c,stroke-width:2px,color:#000;
    classDef ally fill:#fff1e6,stroke:#f77f00,stroke-width:2px,color:#000;
    classDef teacher fill:#ede0d4,stroke:#7f4f24,stroke-width:2px,color:#000;
    classDef divine fill:#ffccd5,stroke:#c9184a,stroke-width:2px,color:#000;

    subgraph Ancestry ["Ancestors: Bhishma's Lineage"]
        Pratipa["King Pratipa (Great-Grandfather)"]:::ancestral
        Sunanda["Queen Sunanda (Great-Grandmother)"]:::ancestral

        Shantanu["King Shantanu (Grandfather)"]:::ancestral
        Bahlika["Bahlika (King of Bahlika)"]:::ancestral
        Devapi["Devapi (Ascetic)"]:::ancestral

        Ganga["Goddess Ganga"]:::divine
        Satyavati["Satyavati (Matsyagandha)"]:::ancestral
        Parashara["Rishi Parashara"]:::ancestral

        Pratipa --- Sunanda
        Pratipa --> Shantanu
        Pratipa --> Bahlika
        Pratipa --> Devapi

        Bahlika --> Somadatta["Somadatta"]:::ancestral
        Somadatta --> Bhurishravas["Bhurishravas"]:::kaurava

        Shantanu --- Ganga
        Shantanu --- Satyavati
        Satyavati --- Parashara
    end

    subgraph Vyasa_Generation ["Second Generation & Lineage Split"]
        Ganga --> Bhishma["Bhishma (Devavrata)"]:::elder
        
        Parashara --> Vyasa["Sage Veda Vyasa"]:::teacher

        Satyavati --> Chitrangada["Chitrangada"]:::ancestral
        Satyavati --> Vichitravirya["Vichitravirya"]:::ancestral

        Ambika["Ambika (Princess of Kashi)"]:::ancestral
        Ambalika["Ambalika (Princess of Kashi)"]:::ancestral
        Parishrami["Parishrami (Maid)"]:::ancestral

        Vichitravirya --- Ambika
        Vichitravirya --- Ambalika

        Vyasa -. Niyoga .-> Ambika
        Vyasa -. Niyoga .-> Ambalika
        Vyasa -. Niyoga .-> Parishrami
    end

    subgraph Royal_House ["The Kuru House of Hastinapura"]
        Ambika --> Dhritarashtra["Dhritarashtra (Blind King)"]:::kaurava
        Ambalika --> Pandu["King Pandu"]:::pandava
        Parishrami --> Vidura["Vidura (Dharmaraja Incarnate)"]:::elder

        Gandhari["Queen Gandhari"]:::kaurava
        Kunti["Queen Kunti (Pritha)"]:::pandava
        Madri["Queen Madri"]:::pandava

        Dhritarashtra --- Gandhari
        Pandu --- Kunti
        Pandu --- Madri

        Shakuni["Shakuni (King of Gandhara)"]:::kaurava
        Gandhari -. Brother .- Shakuni
    end

    subgraph Kaurava_Camp ["The Kauravas & Key Allies"]
        Dhritarashtra --> Duryodhana["Duryodhana (Suyodhana)"]:::kaurava
        Dhritarashtra --> Dushasana["Dushasana"]:::kaurava
        Dhritarashtra --> Vikarna["Vikarna"]:::kaurava
        Dhritarashtra --> Dushala["Dushala (Daughter)"]:::kaurava
        Dhritarashtra --> Yuyutsu["Yuyutsu (Defected to Pandavas)"]:::pandava

        Jayadratha["Jayadratha (King of Sindhu)"]:::kaurava
        Dushala --- Jayadratha

        Karna["Karna (Radheya / Angaraja)"]:::kaurava
        Kunti -. Born of Surya .-> Karna

        Shalya["Shalya (King of Madra)"]:::kaurava
        Madri -. Brother .- Shalya

        Ashwatthama["Ashwatthama"]:::kaurava
    end

    subgraph Teachers_Gurus ["Masters & Gurus"]
        Drona["Guru Dronacharya"]:::teacher
        Kripi["Kripi (Wife of Drona)"]:::teacher
        Kripa["Kripacharya (Kulaguru)"]:::teacher

        Drona --- Kripi
        Drona --> Ashwatthama
    end

    subgraph Pandava_Camp ["The Pandavas & Families"]
        Yudhishthira["Yudhishthira (Dharmaraja)"]:::pandava
        Bhima["Bhima (Vrikodara)"]:::pandava
        Arjuna["Arjuna (Dhananjaya)"]:::pandava
        Nakula["Nakula"]:::pandava
        Sahadeva["Sahadeva"]:::pandava

        Kunti --> Yudhishthira
        Kunti --> Bhima
        Kunti --> Arjuna
        Madri --> Nakula
        Madri --> Sahadeva

        Draupadi["Draupadi (Panchali)"]:::pandava
        Subhadra["Subhadra (Sister of Krishna)"]:::ally
        Hidimbi["Hidimbi (Rakshasi)"]:::ally
        Ulupi["Ulupi (Naga Princess)"]:::ally
        Chitrangada_M["Chitrangada of Manipur"]:::ally

        Yudhishthira --- Draupadi
        Bhima --- Draupadi
        Arjuna --- Draupadi
        Nakula --- Draupadi
        Sahadeva --- Draupadi

        Bhima --- Hidimbi
        Arjuna --- Subhadra
        Arjuna --- Ulupi
        Arjuna --- Chitrangada_M

        Bhima --> Ghatotkacha["Ghatotkacha"]:::pandava
        Arjuna --> Abhimanyu["Abhimanyu"]:::pandava
        Arjuna --> Iravan["Iravan (Aravan)"]:::pandava
        Arjuna --> Babruvahana["Babruvahana"]:::pandava
        Draupadi --> Upapandavas["Upapandavas (5 Sons of Draupadi)"]:::pandava
    end

    subgraph Next_Generation ["Succession to Kali Yuga"]
        Uttara["Uttara (Princess of Matsya)"]:::ally
        Abhimanyu --- Uttara
        Uttara --> Parikshit["King Parikshit"]:::pandava
        Parikshit --> Janamejaya["King Janamejaya (Sarpa Satra)"]:::pandava
    end

    subgraph Key_Allies ["Key Allies & Leaders"]
        Krishna["Lord Sri Krishna (Guide & Charioteer)"]:::divine
        Balarama["Lord Balarama"]:::divine
        Satyaki["Satyaki (Yuyudhana)"]:::pandava

        Drupada["King Drupada (Panchala)"]:::pandava
        Dhrishtadyumna["Dhrishtadyumna (Commander)"]:::pandava
        Shikhandi["Shikhandi (Amba Reborn)"]:::pandava

        Virata["King Virata (Matsya)"]:::pandava
        Virata --> Uttara

        Drupada --> Draupadi
        Drupada --> Dhrishtadyumna
        Drupada --> Shikhandi
    end

    %% Key Mentorships and Battlefield Connections
    Drona -. Trained .-> Pandu
    Drona -. Trained .-> Duryodhana
    Drona -. Trained .-> Arjuna
    Kripa -. Educated .-> Pandavas
    Krishna -. Counsel & Gita .-> Arjuna
    Bhishma -. Commander .-> Kaurava_Camp
    Dhrishtadyumna -. Commander .-> Pandava_Camp
    Karna -. Loyal Ally .-> Duryodhana
