# Table des matières

- [Prérequis](#prérequis)
- [Cloner le dépôt](#cloner-le-dépôt)
- [Installer les dépendances](#installer-les-dépendances)
- [Configuration stripe](#configuration-stripe)
- [Utilisation](#utilisation)
    - [Démarrer les server](#démarer-les-servers)
    - [Effectuer un paiement test](#effectuer-un-paiement-test)
        -[Paiement accepté](#paiement-accepté)
        -[Paiement refusé](#paiement-refusé)

Assurez-vous d'avoir les outils suivants installés sur votre machine :

- [Node.js](https://nodejs.org/) (version 14 ou supérieure)
- [npm](https://www.npmjs.com/) (installé avec Node.js)

# Cloner le dépôt

git clone https://github.com/votre-utilisateur/votre-repo.git
cd votre-repo

# Installer les dépendances

Pour le FrontEnd :

``` 
cd FrontEnd
npm install

```
Pour le BackEnd :

``` 
cd BackEnd
npm install

```

# Configuration Stripe 

- Créez un compte sur Stripe.
- Récupérez votre clé API secrète depuis le tableau de bord Stripe.
- Créez un fichier .env dans le dossier backend et ajoutez-y votre clé API :
```
STRIPE_SECRET_KEY=sk_test_your_secret_key_here

```

# Utilisation

## Démarer les servers

Pour le backend, exécutez la commande suivante dans le dossier backend :

```
node server.js

``` 

Ouvrir un autre terminal pour lancer le frontend  et
exécutez la commande suivante dans le dossier frontend :
```
npm run dev

``` 

## Effectuer un paiement test 

### Paiement accepté 

numéro de carte :  4242 4242 4242 4242 
CVC : 3 chiffres aléatoires
Date : date supérieur à la date du jour

### Paiement refusé

numéro de carte :  4000 0000 0000 0002
CVC : 3 chiffres aléatoires
Date : date supérieur à la date du jour





