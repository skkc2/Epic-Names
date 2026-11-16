graph TD
    %% Styling Definitions
    classDef ayodhya fill:#ffe8d6,stroke:#dd6b20,stroke-width:2px,color:#000;
    classDef vanara fill:#d8f3dc,stroke:#2d6a4f,stroke-width:2px,color:#000;
    classDef lanka fill:#ffe5d9,stroke:#9d0208,stroke-width:2px,color:#000;
    classDef sage fill:#e0aaff,stroke:#5a189a,stroke-width:2px,color:#000;
    classDef divine fill:#ffccd5,stroke:#c9184a,stroke-width:2px,color:#000;

    subgraph Ayodhya_Dynasty ["Ayodhya (Ikshvaku Dynasty)"]
        Dasharatha["King Dasharatha"]:::ayodhya
        Kausalya["Queen Kausalya"]:::ayodhya
        Kaikeyi["Queen Kaikeyi"]:::ayodhya
        Sumitra["Queen Sumitra"]:::ayodhya
        Manthara["Manthara (Maid)"]:::ayodhya
        Sumantra["Sumantra (Charioteer)"]:::ayodhya

        Rama["Lord Rama (Avatar of Vishnu)"]:::divine
        Sita["Sita Devi (Janaki)"]:::divine
        Lakshmana["Lakshmana"]:::ayodhya
        Urmila["Urmila"]:::ayodhya
        Bharata["Bharata"]:::ayodhya
        Mandavi["Mandavi"]:::ayodhya
        Shatrughna["Shatrughna"]:::ayodhya
        Shrutakirti["Shrutakirti"]:::ayodhya

        Lava["Lava"]:::ayodhya
        Kusha["Kusha"]:::ayodhya

        Dasharatha --- Kausalya
        Dasharatha --- Kaikeyi
        Dasharatha --- Sumitra
        Kaikeyi -. Influenced by .- Manthara

        Kausalya --> Rama
        Kaikeyi --> Bharata
        Sumitra --> Lakshmana
        Sumitra --> Shatrughna

        Rama --- Sita
        Lakshmana --- Urmila
        Bharata --- Mandavi
        Shatrughna --- Shrutakirti

        Rama --> Lava
        Rama --> Kusha
        Sita --> Lava
        Sita --> Kusha
    end

    subgraph Mithila_Kingdom ["Mithila"]
        Janaka["King Janaka"]:::ayodhya
        Sunayana["Queen Sunayana"]:::ayodhya
        Janaka --- Sunayana
        Janaka --> Sita
    end

    subgraph Sages_and_Gurus ["Revered Sages"]
        Vasishtha["Sage Vasishtha (Kula Guru)"]:::sage
        Vishvamitra["Sage Vishvamitra (Mentor)"]:::sage
        Agastya["Sage Agastya (Aditya Hridaya)"]:::sage
        Valmiki["Sage Valmiki (Author & Shelter)"]:::sage
        Rishyasringa["Sage Rishyasringa (Putrakameshti)"]:::sage
        Gautama["Sage Gautama"]:::sage
        Ahalya["Ahalya (Redeemed by Rama)"]:::sage
        Shabari["Shabari (Devotee)"]:::sage

        Gautama --- Ahalya
    end

    subgraph Kishkindha_Allies ["Kishkindha (Vanara & Allied Forces)"]
        Vali["Vali (Slain by Rama)"]:::vanara
        Tara["Tara"]:::vanara
        Sugriva["Sugriva (King of Kishkindha)"]:::vanara
        Ruma["Ruma"]:::vanara
        Angada["Angada (Crown Prince)"]:::vanara
        Hanuman["Hanuman (Param Bhakta)"]:::divine
        Jambavan["Jambavan (Bear King)"]:::vanara
        Nala["Nala (Bridge Architect)"]:::vanara
        Nila["Nila (Commander)"]:::vanara
        Jatayu["Jatayu (Martyred)"]:::vanara
        Sampati["Sampati (Brother of Jatayu)"]:::vanara

        Vali --- Tara
        Sugriva --- Ruma
        Vali --> Angada
    end

    subgraph Lanka_Rakshasas ["Lanka (Rakshasa Empire)"]
        Ravana["Ravana (King of Lanka)"]:::lanka
        Mandodari["Mandodari (Chief Queen)"]:::lanka
        Kumbhakarna["Kumbhakarna (Giant Warrior)"]:::lanka
        Vibhishana["Vibhishana (Allied with Rama)"]:::lanka
        Shurpanakha["Shurpanakha (Sister)"]:::lanka
        Indrajit["Indrajit / Meghanada"]:::lanka
        Akshayakumara["Akshayakumara"]:::lanka
        Maricha["Maricha (Golden Deer)"]:::lanka
        Tataka["Tataka"]:::lanka
        Subahu["Subahu"]:::lanka
        Khara["Khara"]:::lanka
        Dushana["Dushana"]:::lanka

        Ravana --- Mandodari
        Ravana --> Indrajit
        Ravana --> Akshayakumara
    end

    %% Key Relationships and Interactions
    Vasishtha -. Spiritual Guide .-> Dasharatha
    Vishvamitra -. Trained & Armed .-> Rama
    Vishvamitra -. Trained & Armed .-> Lakshmana
    Rama -. Redeemed .-> Ahalya
    Rama -. Defeated .-> Tataka
    Rama -. Defeated .-> Subahu
    Valmiki -. Mentored & Sheltered .-> Lava
    Valmiki -. Mentored & Sheltered .-> Kusha

    Rama -. Allies with .-> Sugriva
    Rama -. Devotion .-> Hanuman
    Sugriva -. Commands .-> Nala
    Sugriva -. Commands .-> Nila
    Sugriva -. Commands .-> Angada

    Ravana -. Abducts .-> Sita
    Jatayu -. Attempts Rescue .-> Sita
    Sampati -. Guides search to .-> Lanka
    Vibhishana -. Defects & Surrenders to .-> Rama
    Rama -. Defeats & Slays .-> Ravana
    Rama -. Crowns .-> Vibhishana
