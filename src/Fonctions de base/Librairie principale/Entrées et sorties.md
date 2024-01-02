
# Entrées et sorties

## Entrée et sorties standards

Cette partie concerne l'entrée et les sorties standards. Ce sont les moyens de communication avec un élément externe au code les plus basiques.

Ce qui est envoyé dans une sortie standard, et ce qui est reçu depuis une entrée, est affiché dans un endroit nommé **console** ou **terminal**.

Le Skribi ne propose pour le moment pas moyen interne pour rediriger l'entrée et les sorties standards, ce qui est sûrement possible avec d'autres langages. Vous devrez donc passer par des éléments externes au code, au moment de lancer celui-ci. Notez que le Skribi utilise les mêmes entrées et sorties que son langage mère (actuellement Rust).

Pour la suite, nous simplifions le vocabulaire, et utilisons les mots **console** et **terminal** pour désigner cette entrée et ces sorties.

### Sortie standard

<div class="warning">
Cette sortie est communément appelée sortie standard, mais ne doit pas être confondue avec la sortie d'erreur standard, que vous pouvez trouver juste après.

Cette différence explique le s dans le titre.
</div>

Afficher un message dans la console est très simple en Skribi :

```skribi
oste(...):adatali
```

Cette syntaxe affiche la variable dans la console.

Cette syntaxe est inspirée de celle en JavaScript :

```js
console.log(...)
```

<div class="warning">
Ceci est un warning temporaire : tout n'a pas encore été débattu et implémenté. Merci de regarder dans [Appel fonction interpreteur](../../Niveau_interpreteur/Appel%20fonction%20interpreteur.md) pour le moment.
</div>

#### Hello World

```skribi
oste("Modre coAvor daNaku"):adatali
```

OU

```skribi
oste("Avor, naku"):adatali
```

### Entrée standard



### Sortie d'erreur standard
