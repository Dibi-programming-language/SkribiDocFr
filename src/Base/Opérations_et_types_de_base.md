
# Opérations et types de base

En Skribi, les opérations de base se placent comme dans la plupart des langages entre les deux opérandes. Exemple : `1 + 1`. Rien de bien compliqué…

<div class="warning"> Les notations données en exemples doivent être utilisées dans une instruction valide, une valeur seule n'est pas une instruction valide et génère donc une erreur.</div>

## Entiers

Ou `Integer` en anglais.

Le type pour les nombres entiers en Skribi a pour nom **`int`**. Ce nom est originaire du Dibi `integi`, très proche de l'anglais `integer`.

| Nom | Exemple | Addition | Soustraction | Multiplication |
| ---- | ---- | ---- | ---- | ---- |
| `dar` | `1` | `+` | `-` | `*` |

La division et la puissance ont des cas particuliers non débattus pour le moment, ils seront donc ajoutés plus tard.

## Flottants

Ou `Float` en anglais. Les flottants se disent `daritmi` en Dibi, le nom **`dar`** pour ce type de donnée en est originaire.

| Nom | Exemple | Addition | Soustraction | Multiplication |
| ---- | ---- | ---- | ---- | ---- |
| `dar` | `1.5` | `+` | `-` | `*` |

La division et la puissance ont des cas particuliers non débattus pour le moment, ils seront donc ajoutés plus tard.

## Booléens

Ou `Boolean` en anglais. Se note `ioi` en Skribi.

L'origine de ce nom est simple : `io` signifie `oui` en Dibi et `no` signifie `non`. En Dibi, les mots de même nature sont presque toujours avec le même suffixe. Ainsi, le `i` est le suffixe d'un nom commun. `ioi` est donc le nom commun associé à `oui`.

Pour ce qui est des deux valeurs, `true` / `false` (ou `vrai` / `faux`), elles se notent `ioial` et `noial`. `ial` est le suffixe pour les adjectifs.

Notation :

```skribi
ioial // = vrai
```

```skribi
noial // = faux
```



## Chaînes de caractères

Ou `String` en anglais. Se nomme `skr` en Skribi, nom originaire du mot `Skribi` en Dibi. Et oui ! Skribi en Dibi est un mot lié à l'écriture. C'est une coïncidence à la base que le nom du langage existe en Dibi. 

Pour écrire un `string`, vous pouvez utiliser la notation classique avec des guillemets :

```skribi
"Je suis un string"
```

Si vous voulez mettre des guillemets dans votre chaîne, vous pouvez utiliser un `\"`

```skribi
"\"" // un string valide
```
