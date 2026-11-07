---
title: "Multijoueur"
description: "Joue à Dimensional Chaos avec tes amis : le serveur officiel, Slate Teams, les îles partagées et la réinitialisation de l’inventaire quand tu rejoins une équipe."
tableOfContents: false
---

Utilise la même version du pack que le serveur. Les équipes passent par Slate Teams, déjà inclus dans le modpack.

## Serveur officiel

Envie de jouer avec d’autres ? Rejoins le serveur officiel sur **play-dc.shyzos.xyz**. Dans le modpack, il apparaît dans **Communauté** sur l’écran multijoueur.

## Créer une équipe

Ouvre le menu des équipes de Slate Teams (**K** par défaut) et choisis **Créer une équipe**. Donne-lui un nom, puis clique sur **Fonder l’équipe**. Tu gardes ton île et tes objets, et ton île devient celle de l’équipe. Ça marche que tu sois opérateur ou non.

`/dc team create <nom>` fait la même chose depuis le chat, et `/dc team info` affiche ton équipe et ton île.

## Inviter et rejoindre

Invite des joueurs depuis le menu des équipes avec **Inviter un joueur**, ou avec la commande Slate `/team invite <joueur>`. Les invitations expirent au bout d’un moment.

Le joueur invité accepte depuis son propre menu des équipes, ou avec le lien **[Accepter]** dans le chat.

**Accepter une invitation te fait rejoindre l’équipe tout de suite et réinitialise, une seule fois, ton inventaire, tes accessoires, ton coffre de l’Ender, ton XP et tes tombes non récupérées.** Les blocs et les coffres que tu as posés restent où ils sont. Range tes affaires dans un coffre et termine ton expédition en cours avant d’accepter.

Les joueurs peuvent aussi demander à rejoindre depuis la liste des équipes. Une demande n’ajoute jamais personne toute seule : un membre qui a le droit d’inviter l’approuve, ce qui la transforme en invitation. Si le joueur est connecté, il rejoint tout de suite, avec la même réinitialisation. Les demandes expirent au bout de 30 minutes, et les équipes sur invitation ne les acceptent pas.

## Ce que l’équipe partage

Les membres de l’équipe partagent l’île, le OneBlock et sa réserve de six emplacements, ainsi que le palier de l’île. La progression et les récompenses des quêtes suivent les réglages de quêtes Slate du pack. Chaque joueur a son propre compte à rebours d’expédition.

## Partir, exclure ou céder l’équipe

Passe par le menu des équipes pour partir, exclure un membre, céder la propriété ou dissoudre l’équipe. Slate te demande de confirmer. Les objets, le stockage, l’XP et les tombes sont conservés. Un joueur qui part ou qui se fait exclure retourne sur sa propre île. L’île de l’équipe reste à l’équipe, et le fondateur la récupère si l’équipe est dissoute.

Les mêmes actions existent en commandes : `/dc team leave`, `/dc team kick <membre>`, `/dc team transfer <membre>` et `/dc team disband`. Chacune te demande de confirmer dans les 60 secondes.

Les changements d’équipe sont refusés tant que quelqu’un porte un bloc ou une créature avec Carry On. Pose-le d’abord. Si un changement est refusé pour une autre raison, lis le message et demande au propriétaire du serveur. N’essaie pas de contourner le refus en modifiant les données des joueurs.
