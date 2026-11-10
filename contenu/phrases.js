// ============================================================================
//  Lecture guitare — phrases originales dans le style bebop (contenu pédagogique)
//  © 2026 Mickael Le Van – Tous droits réservés (voir LICENSE). Phrases écrites pour cette appli :
//  ce ne sont pas des relevés, elles ne reprennent aucun thème ni solo existant.
//
//  Même écriture que contenu/repertoire.js : Hauteur.Durée, mesures séparées par « | »,
//  hauteur écrite (C4 = Do sous la portée, # dièse, b bémol), durée en douzièmes de noire
//  (3 double croche, 4 croche de triolet, 6 croche, 12 noire, 18 noire pointée, 24 blanche), r = silence.
//  Un accord entre crochets, collé à la note, s'affiche au-dessus de la portée : [Dm7]D4.6
//  swing:true : le réglage « Croches » (droites ou swing) s'applique à la phrase.
//  sig : armure dans laquelle la phrase est écrite ici (+ dièses, − bémols) ; mineur:true si elle est en mineur.
//  transpo:true : l'appli peut la transposer dans les 12 tonalités (réglage « Tonalité de la phrase »).
// ============================================================================
const PHRASES=[
 {id:"bop-251-c-1",c:"Bebop",t:"ii–V–I majeur (1)",met:[4,4],temps:4,sig:0,swing:true,transpo:true,
  n:"[Dm7]D4.6 F4.6 A4.6 C5.6 E5.6 D5.6 C5.6 A4.6 | [G7]B4.6 D5.6 F5.6 A5.6 Ab5.6 F5.6 D5.6 B4.6 | [CMaj7]C5.6 G4.6 E4.6 G4.6 B4.12 A4.6 G4.6 | E4.24 r.24"},
 {id:"bop-251-c-2",c:"Bebop",t:"ii–V–I majeur (2), dominante altérée",met:[4,4],temps:4,sig:0,swing:true,transpo:true,
  n:"[Dm7]r.6 A4.6 C5.6 E5.6 F5.6 E5.6 D5.6 C5.6 | [G7♭9]B4.6 D5.6 F5.6 Ab5.6 G5.6 F5.6 Eb5.6 Db5.6 | [CMaj7]C5.12 r.6 E5.6 D5.4 E5.4 D5.4 B4.6 G4.6 | A4.6 Ab4.6 G4.12 r.24"},
 {id:"bop-bebop-c7",c:"Bebop",t:"Gamme bebop de dominante, puis résolution",met:[4,4],temps:4,sig:-1,swing:true,transpo:true,
  n:"[C7]C5.6 B4.6 Bb4.6 A4.6 G4.6 F4.6 E4.6 D4.6 | C4.6 D4.6 E4.6 F4.6 G4.6 A4.6 Bb4.6 B4.6 | [FMaj7]C5.6 E5.6 G5.6 E5.6 D5.6 C5.6 A4.6 G4.6 | F4.24 r.24"},
 {id:"bop-251-f",c:"Bebop",t:"ii–V–I majeur (3)",met:[4,4],temps:4,sig:-1,swing:true,transpo:true,
  n:"[Gm7]G4.6 Bb4.6 D5.6 F5.6 A5.6 G5.6 F5.6 D5.6 | [C7]E5.6 D5.6 C5.6 B4.6 Bb4.6 G4.6 E4.6 Db4.6 | [FMaj7]C4.6 F4.6 A4.6 C5.6 E5.12 D5.6 C5.6 | A4.18 F4.6 r.24"},
 {id:"bop-251-g",c:"Bebop",t:"ii–V–I majeur (4), avec triolet",met:[4,4],temps:4,sig:1,swing:true,transpo:true,
  n:"[Am7]A4.6 C5.6 E5.6 G5.6 F#5.4 G5.4 F#5.4 E5.6 C5.6 | [D7♭9]C5.6 B4.6 A4.6 F#4.6 Eb4.6 F#4.6 A4.6 C5.6 | [GMaj7]B4.12 D5.6 G5.6 F#5.6 D5.6 B4.6 A4.6 | G4.6 F#4.6 G4.12 r.24"},
 {id:"bop-251-am",c:"Bebop",t:"ii–V–i mineur",met:[4,4],temps:4,sig:0,mineur:true,swing:true,transpo:true,
  n:"[Bm7♭5]B4.6 D5.6 F5.6 A5.6 G5.6 F5.6 E5.6 C5.6 | [E7♭9]D5.6 B4.6 G#4.6 F4.6 E4.6 G#4.6 B4.6 D5.6 | [Am6]C5.6 E5.6 A5.6 G#5.6 A5.12 E5.6 C5.6 | B4.6 A4.6 F#4.6 E4.6 A4.24"},
 {id:"bop-anatole-bb",c:"Bebop",t:"Anatole (I–VI–ii–V)",met:[4,4],temps:4,sig:-2,swing:true,transpo:true,
  n:"[B♭Maj7]Bb4.6 D5.6 F5.6 D5.6 [G7♭9]B4.6 D5.6 F5.6 Ab5.6 | [Cm7]G5.6 Eb5.6 C5.6 Eb5.6 [F7♭9]A4.6 C5.6 Eb5.6 Gb5.6 | [Dm7]F5.6 D5.6 A4.6 C5.6 [G7]B4.6 G4.6 F4.6 D4.6 | [Cm7]Eb4.6 G4.6 Bb4.6 D5.6 [F7]C5.6 A4.6 G4.6 F4.6"},
 {id:"bop-blues-f",c:"Bebop",t:"Blues (12 mesures)",met:[4,4],temps:4,sig:-1,swing:true,transpo:true,
  n:"[F7]r.12 C5.6 D5.6 F5.6 D5.6 C5.6 A4.6 | [B♭7]Ab4.6 Bb4.6 D5.6 F5.6 Ab5.12 G5.6 F5.6 | [F7]Eb5.6 C5.6 A4.6 F4.6 G4.6 A4.6 C5.12 | [F7♭9]r.6 A4.6 C5.6 Eb5.6 Gb5.6 Eb5.6 C5.6 A4.6 | [B♭7]Bb4.12 D5.6 F5.6 Ab5.6 F5.6 D5.6 Bb4.6 | [B°7]B4.6 D5.6 F5.6 D5.6 Ab5.12 r.12 | [F7]r.6 C5.6 A4.6 F4.6 G4.4 A4.4 G4.4 F4.6 D4.6 | [Am7]C4.6 E4.6 G4.6 A4.6 [D7♭9]F#4.6 A4.6 C5.6 Eb5.6 | [Gm7]D5.12 Bb4.6 G4.6 A4.6 Bb4.6 D5.6 F5.6 | [C7♭9]E5.6 G5.6 Bb5.6 A5.6 G5.6 E5.6 Db5.6 Bb4.6 | [F7]A4.6 C5.6 F5.6 A5.6 [D7♭9]F#5.6 Eb5.6 C5.6 A4.6 | [Gm7]Bb4.6 D5.6 F5.6 D5.6 [C7]E5.6 C5.6 Bb4.6 G4.6"}
];
