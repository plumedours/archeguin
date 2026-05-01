# Routes Cloudflare Worker pour l'infolettre

Le site React utilise HashRouter. Les pages visibles sont donc :

- `https://archeguin.ca/#/newsletter/subscribe`
- `https://archeguin.ca/#/newsletter/unsubscribe?status=success`

Le Worker doit utiliser les routes publiques suivantes :

- `archeguin.ca/newsletter/subscribe*`
- `archeguin.ca/newsletter/unsubscribe*`

## Inscription

Le formulaire React envoie une requête `POST` vers :

```text
https://archeguin.ca/newsletter/subscribe
```

Payload JSON envoyé :

```json
{
  "email": "nom@example.com",
  "firstName": "Maxime",
  "lastName": "Bory",
  "phone": "",
  "consent": true,
  "website": "",
  "startedAt": 1710000000000,
  "submittedAt": 1710000005000
}
```

Le Worker devrait retourner du JSON :

```json
{ "status": "success" }
```

Statuts supportés côté site :

- `success`
- `pending`
- `already`
- `invalid`
- `limited`
- `bot`
- `error`

## Désinscription

Le lien dans les courriels devrait pointer vers :

```text
https://archeguin.ca/newsletter/unsubscribe?token=TOKEN
```

Après traitement, le Worker devrait rediriger vers une page React :

```text
https://archeguin.ca/#/newsletter/unsubscribe?status=success
```

Statuts supportés côté site :

- `success`
- `already`
- `invalid`
- `expired`
- `error`

## Sécurité anti-abus

Le site inclut déjà :

- validation courriel côté client ;
- champ invisible honeypot `website` ;
- délai minimal avant soumission ;
- limitation locale via `localStorage` ;
- consentement obligatoire.

Important : ces protections doivent aussi être validées côté Worker, car le JavaScript du navigateur peut être contourné.

Recommandé côté Worker :

- refuser si `website` n'est pas vide ;
- refuser si `submittedAt - startedAt` est trop court ;
- limiter par IP avec Cloudflare Rate Limiting ou KV/D1 ;
- vérifier le format du courriel ;
- stocker l'adresse en minuscule ;
- créer un token unique de désinscription ;
- éventuellement utiliser Cloudflare Turnstile pour une protection plus forte.
