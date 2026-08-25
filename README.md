<h1 align="center">🍕 Pizza Delicious</h1>

<p align="center">Prototype e-commerce de pizzeria avec catalogue, compte client, panier et commande.</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 18" />
  <img src="https://img.shields.io/badge/Express-4-000000?style=flat-square&logo=express&logoColor=white" alt="Express 4" />
  <img src="https://img.shields.io/badge/MongoDB-local-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Bootstrap-5-7952B3?style=flat-square&logo=bootstrap&logoColor=white" alt="Bootstrap 5" />
</p>

## À propos

Projet full-stack réalisé pour explorer la construction d'un parcours de commande : consultation des pizzas, création de compte, connexion, panier, commande et paiement simulé côté interface.

Le frontend React communique avec une API Express qui persiste les utilisateurs, les pizzas et les commandes dans MongoDB.

## Fonctionnalités

- catalogue et fiche produit ;
- inscription et connexion utilisateur ;
- panier et validation de commande ;
- espace de suivi de commande ;
- composants React Bootstrap et navigation protégée ;
- routes API Express pour les utilisateurs, pizzas et commandes.

## Lancer en local

Prérequis : Node.js, npm et une instance MongoDB locale avec une base pizzeria.

    npm install
    node server/server.js

Dans un second terminal :

    npm start

Le frontend est disponible sur http://localhost:3000 et l'API sur http://localhost:8080.

## Contexte

Projet pédagogique conservé comme exemple d'application React/Express. Les paiements et les données de démonstration ne doivent pas être utilisés en production.

## Auteur

[Christopher Semard](https://github.com/christophersemard)
