
# Création d'une grammaire LL1 pour le Skribi

<div>Cette page est un travail en cours, et le sera pendant un certain temps. Elle demande plus de rigueur que les autres pages, et une adaptation constante aux nouvelles normes</div>

<div>La syntaxe est aussi donnée en latex afin de faciliter la lecture. Notez que la version sans latex sera peut être plus à jour pour le moment.</div>

Ici, en plus des symboles classiques de grammaire, les `{}` seront utilisés pour la répétition, et `..` pour les intervalles les plus logiques. De plus, les `""` et les `''` indiquent des terminaux constitués d'autre chose que des lettres et des chiffres. Enfin, `* -` indique tous les terminaux sauf ceux qui suivent.

Le terminal `\` sera toujours représenté par `\\` pour enlever les confusions. De même pour tout terminal pouvant être confondu avec un symbole de grammaire.

Quand ils ne sont pas indiqués, les espaces, tabulations et retours à la ligne sont ignorés. Dans le cas contraire, le terminal d'espace est indiqué par `" "` et peut être remplacé sans contrainte par une tabulation ou un retour à ligne.

## Motivations

L'algorithme qui avait été envisagé jusqu'à maintenant n'est absolument pas optimisé. C'est pourquoi la création d'une grammaire de type LL1 s'impose comme une deuxième tentative pour parser le code.

Le plus difficile est de lever certaines ambiguïtés comme pour la déclaration des [Variables](Stockage/Variables.md). Cette étape, où nous écrivons une grammaire, permet aussi ne pas être pris au dépourvu au moment de coder.

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

Les intervalles sont des intervalles de caractères. $\epsilon$ représente la fin d'une récursion.

$$
\begin{align}
\text{T\_BOOL} &\to \begin{cases}
\text{io} \\
\text{no}
\end{cases} \\
\text{T\_INT} &\to \begin{cases}
[0, 9] \\
[0, 9] \text{ T\_INT}
\end{cases} \\
\text{T\_FLOAT} &\to \text{T\_INT "." T\_INT} \\
\text{in string} &\to \begin{cases} \begin{cases}
\setminus \setminus \text{ } \setminus
\text{"} \\
\text{anything except } \setminus \text{n and } \setminus \text{"} \\
\end{cases} \text{ in string} \\
\epsilon
\end{cases}\\
\text{T\_STRING} &\to \setminus \text{" in string } \setminus \text{"}
\end{align}
$$

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

T_PLUS ::= +
T_MINUS ::= "-"

T_LEFT_P ::= "("
T_RIGHT_P ::= ")"

T_LEFT_E ::= "{"
T_RIGHT_E ::= "}"
T_IN ::= ":"

T_IDENTIFIER ::= (a..z | A..Z | "_") {a..z | A..Z | "_" | 0..9}

T_SPACE ::= " " | "\t" | "\n"
T_ANY ::= *
```

$$
\begin{align}
\text{T\_ADD} &\to + \text{ with value before} \\
\text{T\_SUB} &\to - \text{ with value before} \\
\text{T\_DIV} &\to / \text{ with value before} \\
\text{T\_MULT} &\to * \text{ with value before}
\end{align}
$$

$$
\begin{align}
\text{T\_PLUS} &\to + \\
\text{T\_MINUS} &\to -
\end{align}
$$

$$
\begin{align}
\text{T\_LEFT\_P} &\to \text{Left parenthesis} \\
\text{T\_RIGHT\_P} &\to \text{Right parenthesis}
\end{align}
$$

$$
\begin{align}
\text{T\_LEFT\_E} &\to \text{Left brace} \\
\text{T\_RIGHT\_E} &\to \text{Right brace} \\
\text{T\_IN} &\to \text{:}
\end{align}
$$

$$
\begin{align}
\text{in identifier} &\to \begin{cases}
\begin{cases}
[\text{a}, \text{z}] \\
[\text{A}, \text{Z}] \\
\text{\_} \\
[0, 9] \\
\end{cases} \text{ in identifier} \\
\epsilon
\end{cases}
\end{align}
$$

$$
\begin{align}

\text{T\_IDENTIFIER} &\to \begin{cases}
[\text{a}, \text{z}] \\
[\text{A}, \text{Z}] \\
\text{\_} \\
\end{cases} \text{ in identifier}
\end{align}
$$

$$
\begin{align}

\text{T\_SPACE} &\to \begin{cases}
\text{space} \\
\text{tab} \\
\text{new line}
\end{cases} \\
\text{T\_ANY} &\to \text{Anything}
\end{align}
$$

## Identifiants et valeurs

Le nom terminal `value` devra être complété avec le temps.

Le token `T_TYPE_DEF` représente tout type défini par un nom au moment du parsing.

```html
<cget> ::= T_TYPE_DEF
<op_in> ::= (T_IN (<id_get> | <cget>) |)
<id_get> ::= T_IDENTIFIER (<tuple> |) <op_in>
<id_set> ::= T_IDENTIFIER <op_in>
```

Remarquez que `op_in` est destiné à un usage local uniquement, et que `id_set` est une variante de `id_get`.

## Opérations

```html
<value> ::=
  T_BOOL | T_INT | T_STRING | T_FLOAT
  | (T_PLUS | T_MINUS) <value>
  | <exp>
<take_prio> ::= "(" <tp2> ")" | <value>
<tp> ::= <take_prio>
<mult> ::= T_MULT <tp1>
<div> ::= T_DIV <tp1>
<md> ::= <mult> | <div>
<tp1> ::= <tp> (<md> |)
<add> ::= T_ADD <tp2>
<sub> ::= T_SUB <tp2>
<as> ::= <add> | <sub>
<tp2> ::= <tp1> (<as> |)
<no_value> ::= (<md> |) (<as> |)
```

## Classes

À partir du moment où le token `T_IDENTIFIER` est lu, la classe est considérée définie. `<class_c>` est mis en attente et est lu après que tous les types du même niveau sont déclarés. Ceci n'est pas encore voté ni entièrement débattu.

```html
<class_dec> ::= kat T_IDENTIFIER <scope>
```

## Variables

D'autres éléments peuvent être ajoutés à `<type>`, comme un équivalent à `auto` / `let` / … pour détecter le type automatiquement, ou des types sous forme d'ensembles.

De même pour `<nom>`, il est possible de lancer le débat à propos des tuples (ou des déclarations avec ensembles ?).

Pour le moment, value reste simple, mais c'est amené à changer.

```html
<type> ::= T_TYPE_DEF
<vd> ::= <type> " " T_IDENTIFIER " " <exp>
<global_var> ::= fu <vd>
<private_var> ::= pu <vd>
<const_var> ::= ju (<private_var> | <global_var> | <vd>)
<var_dec> ::= <const_var> | <private_var> | <global_var> | <vd>

<var_mod> ::= " " <exp>
```

## Lignes de code et expressions

Je considère ici que la dernière ligne d'un bloc de code peut être une valeur de retour. Ce n'est pas forcément le cas, et ces erreurs sont gérées au moment de vérifications plus complexes.

<div class="warning">Je prend dans cette partie des libertés sur ce qui a été voté</div>

```html
<sta_l> ::= "{" {<sta>} "}"
<id_use> ::= <id_set> (<var_mod> | <no_value> |) | <id_get> (<no_value> |)
<exp_tp2> ::= ...
<exp_tp> ::= <exp_tp2> | <scope>
<exp> ::= <scope> | <id_use> | <var_dec> | <tp2>
<return> ::= ei <exp>
<sta> ::= <exp> | <return>
```

```html
<k_name> ::= T_IDENTIFIER | {(* - "{")}
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
# Fichier

La racine de l'AST !

```html
<fichier> ::= {<exp>}
```
