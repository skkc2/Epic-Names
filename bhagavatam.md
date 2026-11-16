graph TD
    %% Styling Definitions
    classDef frame fill:#f1faee,stroke:#1d3557,stroke-width:2px,color:#000;
    classDef avatar fill:#ffccd5,stroke:#c9184a,stroke-width:2px,color:#000;
    classDef devotee fill:#e0aaff,stroke:#5a189a,stroke-width:2px,color:#000;
    classDef asura fill:#ffe5d9,stroke:#9d0208,stroke-width:2px,color:#000;
    classDef yadu fill:#d8f3dc,stroke:#2d6a4f,stroke-width:2px,color:#000;
    classDef queen fill:#fff1e6,stroke:#f77f00,stroke-width:2px,color:#000;

    subgraph Frame_Narrative ["Frame Story: Transmission of Bhagavatam"]
        Vyasa["Sage Veda Vyasa"]:::frame
        Narada["Devarishi Narada (Spiritual Guide)"]:::frame
        Shukadeva["Shukadeva Gosvami (Son of Vyasa)"]:::frame
        Parikshit_King["King Parikshit (Listening on Ganga bank)"]:::frame
        Suta["Suta Gosvami (Ugrashrava)"]:::frame
        Shaunaka["Shaunaka & Rishis of Naimisharanya"]:::frame

        Narada -. Inspires .- Vyasa
        Vyasa --> Shukadeva
        Shukadeva -. Narrates to .- Parikshit_King
        Suta -. Re-narrates to .- Shaunaka
    end

    subgraph Cosmic_Origins ["Early Cantos: Creation & Cosmic Devotees"]
        Brahma["Lord Brahma"]:::frame
        Svayambhuva["Svayambhuva Manu"]:::frame
        Shatarupa["Shatarupa"]:::frame

        Brahma --> Svayambhuva
        Svayambhuva --- Shatarupa

        Priyavrata["King Priyavrata"]:::frame
        Uttanapada["King Uttanapada"]:::frame
        Svayambhuva --> Priyavrata
        Svayambhuva --> Uttanapada

        Suniti["Queen Suniti"]:::frame
        Suruchi["Queen Suruchi"]:::frame
        Uttanapada --- Suniti
        Uttanapada --- Suruchi

        Dhruva["Dhruva Maharaja (Pole Star)"]:::devotee
        Uttama["Uttama"]:::frame
        Suniti --> Dhruva
        Suruchi --> Uttama

        Daksha["Prajapati Daksha"]:::frame
        Sati["Goddess Sati"]:::avatar
        Shiva["Lord Shiva (Rudra)"]:::avatar
        Svayambhuva --> Daksha
        Daksha --> Sati
        Sati --- Shiva

        Rishabhadeva["Rishabhadeva (Avatar)"]:::avatar
        Jada_Bharata["Bharata / Jada Bharata"]:::devotee
        Prithu["King Prithu (Avatar)"]:::avatar
    end

    subgraph Avatars_and_Bhakti ["Key Leelas & Avatars"]
        Varaha["Varaha (Boar Avatar)"]:::avatar
        Narasimha["Narasimha (Man-Lion)"]:::avatar
        Vamana["Vamana (Dwarf Brahmana)"]:::avatar

        Hiranyaksha["Hiranyaksha"]:::asura
        Hiranyakashipu["Hiranyakashipu"]:::asura
        Prahlada["Prahlada Maharaja"]:::devotee
        Mahabali["King Bali (Mahabali)"]:::devotee

        Varaha -. Slays .- Hiranyaksha
        Narasimha -. Protects .- Prahlada
        Narasimha -. Slays .- Hiranyakashipu
        Prahlada --> Mahabali
        Vamana -. Subdues & Blesses .- Mahabali

        Gajendra["Gajendra (Elephant Devotee)"]:::devotee
        Ambarisha["King Ambarisha"]:::devotee
        Durvasa["Sage Durvasa"]:::frame
        Ambarisha -. Tested by .- Durvasa
    end

    subgraph Vrishni_Dynasty ["The Yadus: Mathura & Gokula"]
        Surasena["King Surasena"]:::yadu
        Ugrasena["King Ugrasena (Mathura)"]:::yadu
        Kamsa["Kamsa (Tyrant King)"]:::asura

        Ugrasena --> Kamsa

        Vasudeva["Vasudeva (Anakadundubhi)"]:::yadu
        Devaki["Devaki (Sister of Kamsa)"]:::yadu
        Rohini["Rohini"]:::yadu

        Surasena --> Vasudeva
        Vasudeva --- Devaki
        Vasudeva --- Rohini

        Nanda["Nanda Maharaja (Gokula)"]:::yadu
        Yashoda["Yashoda Mayi"]:::yadu
        Nanda --- Yashoda

        Balarama["Lord Balarama (Sankarshana)"]:::avatar
        Krishna["Lord Sri Krishna (Svayam Bhagavan)"]:::avatar
        Subhadra_Y["Subhadra"]:::yadu

        Rohini --> Balarama
        Devaki --> Krishna
        Devaki --> Subhadra_Y

        Krishna -. Fostered by .- Nanda
        Krishna -. Fostered by .- Yashoda
        Krishna -. Slays .- Kamsa
        Krishna -. Reinstates .- Ugrasena
    end

    subgraph Vraja_Leela ["Companions of Vrindavan"]
        Radha["Srimati Radharani"]:::avatar
        Gopis["Gopis (Lalita, Vishakha, etc.)"]:::devotee
        Gopas["Gopas (Sridama, Sudama, Subala)"]:::devotee
        Uddhava["Uddhava (Foremost Disciple)"]:::devotee

        Krishna --- Radha
        Krishna -. Inner Circle .- Gopas
        Krishna -. Preaches Uddhava Gita to .- Uddhava
    end

    subgraph Dvaraka_Leela ["The Queens of Dvaraka (Ashta-Bharyas) & Heirs"]
        Rukmini["1. Rukmini (Vidarbha)"]:::queen
        Satyabhama["2. Satyabhama (d/o Satrajit)"]:::queen
        Jambavati["3. Jambavati (d/o Jambavan)"]:::queen
        Kalindi["4. Kalindi (Yamuna)"]:::queen
        Mitravinda["5. Mitravinda"]:::queen
        Nagnajiti["6. Nagnajiti (Satya)"]:::queen
        Bhadra["7. Bhadra"]:::queen
        Lakshmana_Q["8. Lakshmana"]:::queen

        Krishna --- Rukmini
        Krishna --- Satyabhama
        Krishna --- Jambavati
        Krishna --- Kalindi
        Krishna --- Mitravinda
        Krishna --- Nagnajiti
        Krishna --- Bhadra
        Krishna --- Lakshmana_Q

        Pradyumna["Pradyumna (Incarnation of Kama)"]:::yadu
        Rukmini --> Pradyumna

        Mayavati["Mayavati"]:::queen
        Pradyumna --- Mayavati

        Aniruddha["Aniruddha"]:::yadu
        Pradyumna --> Aniruddha

        Usha["Usha (d/o Banasura)"]:::queen
        Aniruddha --- Usha

        Samba["Samba"]:::yadu
        Jambavati --> Samba

        Vajra["Vajra (Survivor King of Yadus)"]:::yadu
        Aniruddha --> Vajra
    end

    subgraph Adversaries_Redeemed ["Enemies Slain & Redeemed"]
        Jarasandha["Jarasandha (Magadha)"]:::asura
        Shishupala["Shishupala (Chedi)"]:::asura
        Dantavakra["Dantavakra (Karusha)"]:::asura
        Banasura["Banasura (Thousand-Armed)"]:::asura

        Krishna -. Slays .- Shishupala
        Krishna -. Slays .- Dantavakra
        Krishna -. Subdues .- Banasura
    end
