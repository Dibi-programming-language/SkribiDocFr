
# Création d'une grammaire LL1 pour le Skribi

Ici, en plus des symboles classiques de grammaire, les `{}` seront utilisés pour la répétition, et `..` pour les intervalles les plus logiques. De plus, les `""` et les `''` indiquent des terminaux constitués d'autre chose que des lettres et des chiffres. Enfin, `* -` indique tous les terminaux sauf ceux qui suivent.

Le terminal `\` sera toujours représenté par `\\` pour enlever les confusions. De même pour tout terminal pouvant être confondu avec un symbole de grammaire.

Quand ils ne sont pas indiqués, les espaces, tabulations et retours à la ligne sont ignorés. Dans le cas contraire, le terminal d'espace est indiqué par `" "` et peut être remplacé sans contrainte par une tabulation ou un retour à ligne.

## Motivations

L'algorithme qui avait été envisagé jusqu'à maintenant n'est absolument pas optimisé. C'est pourquoi la création d'une grammaire de type LL1 s'impose comme une deuxième tentative pour parser le code.

Le plus difficile sera de lever certaines ambiguïtés comme pour la déclaration des [Variables](Stockage/Variables.md).

Pour le moment la syntaxe la plus basique est : 

```html
<identifiant> ::= plusieurs types d'identifiants, mais c'est difficile à différencier sans connaitre le reste du code (classes, variables, fonctions, ...)
<dec_var> ::= <identifiant> <identifiant> <identifiant>
<modif_var> ::= <identifiant> <identifiant>
<global_var> ::= fu <dec_var>
<private_var> ::= pu <dec_var>
<const_var> ::= ju <dev_var>
```

Il existe des compatibilités entre les trois dernières règles qui ne sont pas mentionnées ici.

Mais clairement, il n'est pour le moment pas possible de différencier un `dev_var` d'un `modif_var` facilement. De plus, pour le moment, il n'existe pas de séparateur obligatoire entre les instructions. Et si la grammaire est correcte, ce ne sera pas nécessaire.

Ainsi, si j'ai

```html
<identifiant> <identifiant> <identifiant> <identifiant> <identifiant> <identifiant>
```

Il est impossible de dire si c'est 3 `modif_var` ou 2 `dec_var`. Et cela reste un exemple simple.

Il faudrait alors connaitre la valeur des identifiants et retrouver leur déclaration (classe, variables ou fonction existante)… ou exiger un préfixe, une convention de nommage.

Ainsi, je ne connais aucun moyen de rendre cette grammaire LL1.

Mais commençons par les éléments simples non ?

## Lexer

Pour commencer cette page, le fonctionnement du lexer et les différents tokens seront rappelés.

Les tokens seront dans cette partie des non terminaux, constitués uniquement de terminaux. Le Lexer utilise son propre algorithme, il n'est pas nécessaire de respecter les règles d'une grammaire LL1.

### Valeurs builtin

La plupart de ces valeurs sont directement gérées par le Lexer, mais un petit rappel est toujours bon.

Si j'ai oublié des règles, n'hésitez pas à l'indiquer.

```html
T_BOOL ::= io | no
T_INT ::= 0..9 {0..9}
T_FLOAT ::= T_INT "." T_INT
T_STRING ::= '"' {(* - ('"' | \n)) | `\\"`} '"'
```

La différence entre `float` et `int` ne se fait pas dans la grammaire LL1, c'est bien ici le Lexer qui s'occupe de tout. Ainsi, l'ambiguïté n'est pas importante.

### Autres tokens

Ici, les `~` indiquent un contexte nécessaire au token, ces éléments ne font pas partie du token lui-même. L'ordre indiqué est la priorité dans la détection des tokens.

Ici `R_VALUE` indique un token qui est soit :
- Un token de valeur builtin
- Un token d'identifiant
- Un token de fin de parenthèses
- Un token de fin d'ensemble.

```html
T_ADD ::= ~R_VALUE +
T_SUB ::= ~R_VALUE "-"
T_DIV ::= ~R_VALUE /
T_MULT ::= ~R_VALUE "*"
T_POW ::= ~R_VALUE TODO

T_PLUS ::= +
T_MINUS ::= "-"

T_LEFT_P ::= "("
T_RIGHT_P ::= ")"

T_LEFT_E ::= "{"
T_RIGHT_E ::= "}"
T_IN ::= ":"

T_IDENTIFIER ::= (a..z | A..Z | "_") {a..z | A..Z | "_" | 0..9}
T_FUNCTION ::= T_IDENTIFIER ~T_LEFT_P

T_ANY ::= *
```

TODO - Faire la différence entre certains tokens d'identifiant ? + terminer ça

## Opérations

Le nom terminal `value` devra être complété avec le temps.

```html
<value> ::= T_BOOL | T_INT | T_STRING | T_FLOAT | (T_PLUS | T_MINUS) (<value>) | T_IDENTIFIER (<tuple> |)
<opc> ::= <tp2>
<take_prio> ::= "(" <opc> ")" | <value>
<tp> ::= <take_prio>
<mult> ::= "*" <tp1>
<div> ::= "/" <tp1>
<md> ::= <mult> | <div>
<tp1> ::= <tp> | <tp> <md>
<add> ::= "+" <tp2>
<sub> ::= "-" <tp2>
<as> ::= <add> | <sub>
<tp2> ::= <tp1> | <tp1> <as>
```

## Classes

À partir du moment où le token `T_IDENTIFIER` est lu, la classe est considérée définie. `<class_c>` est mis en attente et est lu après que tous les types du même niveau sont déclarés. Ceci n'est pas encore voté ni entièrement débattu.

```html
<class_dec> ::= kat T_IDENTIFIER <scope>
```

## Variables

Le token `T_TYPE_DEF` représente tout type défini par un nom au moment du parsing.

D'autres éléments peuvent être ajoutés à `<type>`, comme un équivalent à `auto` / `let` / … pour détecter le type automatiquement, ou des types sous forme d'ensembles.

De même pour `<nom>`, il est possible de lancer le débat à propos des tuples (ou des déclarations avec ensembles ?).

Pour le moment, value reste simple, mais c'est amené à changer.

```html
<type> ::= T_TYPE_DEF
<name> ::= T_IDENTIFIER
<value> ::= <exp>
<var_dec> ::= <type> " " <name> " " <value>
<var_mod> ::= <name> " " <value>
...
```

## Lignes de code et expressions

Je considère ici que la dernière ligne d'un bloc de code peut être une valeur de retour. Ce n'est pas forcément le cas, et ces erreurs sont gérées au moment de vérifications plus complexes.

<div class="warning">Je prend dans cette partie des libertés sur ce qui a été voté</div>

```html
<sta_l> ::= "{" {<sta>} "}"
<exp> ::= <opc> | <scope> | <var_dec> | <var_mod>
<return> ::= ei <exp>
<sta> ::= <exp> | return
<k_name> ::= T_IDENTIFIER | (* - "{")
<k_start> ::= <sta_l> | <k_name> <sta_l>
<kodi> ::= kodi <k_start>
<biuli> ::= biuli <k_start>
<spoki> ::= spoki <k_start>
<scope> ::= <sta_l> | <kodi> | <spoki> | <biuli> | <sta>
```

L'élément `sta` sera complété plus tard.

## Conditions

```html
<sula> ::= sula (<ij> (<sula> |) | <scope>)
<ij> ::= ij (" " <value> | "(" <scope> ")") <scope>
<cond> ::= <ij> (<sula> |)
```

## Fonctions

Le non-terminal `tuple` est en attente de débat.

```html
<fct_dec> ::= ums T_IDENTIFIER <tuple> <scope>
```
