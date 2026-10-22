# ListenUp English — application Android

Application de compréhension orale en anglais, conçue pour fonctionner hors ligne après installation. Elle contient des mini-leçons A1, A2 et B1, des questions de compréhension, un affichage du texte après écoute, un choix de vitesse et un score sauvegardé sur le téléphone.

## Créer l'APK avec GitHub

1. Téléchargez et décompressez ce dossier ZIP.
2. Créez un dépôt sur GitHub, par exemple `listenup-english`.
3. Envoyez **tous les fichiers et dossiers** de ce projet à la racine du dépôt. Le dossier `.github/workflows` doit être conservé.
4. Dans GitHub, ouvrez l'onglet **Actions**. Si GitHub demande d'autoriser les workflows, acceptez.
5. Le workflow **Build Android APK** démarre après l'envoi des fichiers. Vous pouvez aussi l'exécuter dans Actions avec **Run workflow**.
6. Ouvrez l'exécution terminée, descendez jusqu'à **Artifacts**, puis téléchargez `ListenUpEnglish-debug-apk`.
7. Décompressez l'archive téléchargée sur votre téléphone ou ordinateur. Le fichier `app-debug.apk` est l'application installable.
8. Transférez `app-debug.apk` sur votre téléphone Android et ouvrez-le. Android peut demander d'autoriser l'installation depuis cette source.

## Voix anglaise

L'application utilise la synthèse vocale Android, sans audio externe ni clé API. Si la voix ne fonctionne pas, ouvrez les paramètres Android de **Synthèse vocale / Text-to-speech**, installez une voix anglaise (États-Unis ou Royaume-Uni), puis réessayez.

## Contenu actuel

- A1: A Busy Morning, At the Café
- A2: Finding the Train Station, A Weekend in Rabat
- B1: A Small Change at Work, Learning a New Skill
- Écoute à vitesse lente, normale ou rapide
- Quiz avec correction et score
- Texte de l'écoute masqué jusqu'à ce que l'apprenant choisisse de l'afficher
- Progression enregistrée localement sur l'appareil

## Personnaliser

Le contenu des leçons se trouve dans `app/src/main/assets/index.html`, dans le tableau JavaScript `lessons`. Vous pouvez modifier les textes, les questions et les réponses.

## Note

Cette première version est un prototype pédagogique. L'APK produit par GitHub Actions est une version **debug** adaptée aux tests et à l'installation personnelle. Pour publier sur Google Play, il faudra générer une version signée.
