/* Array.prototype.map - Exercice 3

Ecrire une fonction getMoviesFreshness qui reçoit comme un argument un tableau
d'objets représentant des films.
Chaque film a deux propriétés:
  - `name` le nom du film
  - `rating` la note qui lui attribuée sur le site rottentomatoes.com

La fonction getMoviesWithFreshness doit renvoyer un tableau contenant les objets du tableau
d'entrée, auxquels on aura ajouté une propriété, dont la clé sera label, et la valeur,
une chaîne, dépendante de la valeur de rating :

* Si `rating` est infériéur à 60, la valeur à attribuer à label sera "rotten".
* Si `rating` est compris entre 60 et 75 (inclus), la valeur à attribuer à label sera "fresh".
* Si `rating` est supérieur à 75, la valeur à attribuer à label sera "certified fresh".

Exemple d'entrée:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93
    },
    {
      name: 'Skyscraper',
      rating: 46
    },
    {
      name: 'Leave No Trace',
      rating: 100
    },
    {
      name: 'White Boy Rick',
      rating: 60
    }
  ]
En sortie:
  [
    {
      name: 'Crazy Rich Asians',
      rating: 93,
      label: 'certified fresh'
    },
    {
      name: 'Skyscraper',
      rating: 46,
      label: 'rotten'
    },
    {
      name: 'Leave No Trace',
      rating: 100,
      label: 'certified fresh'
    },
    {
      name: 'White Boy Rick',
      rating: 60,
      label: 'fresh'
    }
  ]

 */


movies = [
  {
    name: 'Crazy Rich Asians',
    rating: 93
  },
  {
    name: 'Skyscraper',
    rating: 46
  },
  {
    name: 'Leave No Trace',
    rating: 100
  },
  {
    name: 'White Boy Rick',
    rating: 60
  }
]


// const getMoviesFreshness = (movies) => {
//   const rating = movies.map (movies => {
//     if (movies ["rating"] < 60) {
//       return movies["label"] = 'rotten'; 
//     } if (movies ["rating"] > 75) {
//       return movies["label"] = 'certified fresh'; 
//     } else {
//       return movies["label"] = 'fresh'; 
//     }  
//   })
// return rating;
// }


const getMoviesFreshness = (movies) => {
  movies.map (movies => {
    if (movies ["rating"] < 60) {
      return movies["label"] = 'rotten'; 
    } if (movies ["rating"] > 75) {
      return movies["label"] = 'certified fresh'; 
    } else {
      return movies["label"] = 'fresh'; 
    }  
  })
return movies;
}


console.log(getMoviesFreshness(movies));

// function getMoviesFreshness(movies) {
//   movies.map(function(movies) {
//   if(movies['rating'] < 60){
//   return movies['label'] = 'rotten';
//   }
//   if(movies['rating'] >= 60 && movies['rating'] <= 75){
//   return movies['label'] = 'fresh';
//   }
//   if(movies['rating'] > 75){
//   return movies['label'] = 'certified fresh';
//   }
//   });
//   return movies;
//   }




// Ne pas modifier l'export
module.exports = getMoviesFreshness;
