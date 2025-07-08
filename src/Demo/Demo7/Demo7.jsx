import { useState } from "react";
import { useForm } from "react-hook-form"
import { Movie } from "./Movie";

export const Demo7 = () => {
    //! Forumulaire avec librairie de gestion de formulaires

    // On va récupérer plusieurs choses de la Hook useForm()
    // - register → C'est ce qui va nous permettre de relier un champs à une valeur
    // - handleSubmit → C'est qui va nous permettre de gérer la soumission du formulaire (gère déjà le e.preventDefault)
    // - reset → Permet de remettre le formulaire à 0
    // - formState → Permet de connaître l'état du formulaire → Nous allons surtout récupérer les erreurs du formulaire
    // useForm peut prendre en paramètre des options, mode : 'onChange' permet de déclencher les erreurs dès que le formulaire est modifié et plus au submit
    const { register, handleSubmit, reset, formState : { errors  } } = useForm({ mode : 'onChange' });

    const [movies, setMovies] = useState([
        { 
            id : 1, title : 'Harry Potter à l\'école des sorciers', synopsis : 'Harry Potter, un jeune orphelin, est élevé par son oncle et sa tante qui le détestent. Alors qu\'il était haut comme trois pommes, ces derniers lui ont raconté que ses parents étaient morts dans un accident de voiture. Le jour de son onzième anniversaire, Harry reçoit la visite inattendue d\'un homme gigantesque se nommant Rubeus Hagrid, et celui-ci lui révèle qu\'il est en fait le fils de deux puissants magiciens et qu\'il possède lui aussi d\'extraordinaires pouvoirs.',  director: 'Chris Columbus', year : 2001 
        },
        {
            id : 2, title : 'Harry Potter et la chambre des secrets', synopsis : 'Alors que l\'oncle Vernon, la tante Pétunia et son cousin Dudley reçoivent d\'importants invités à dîner, Harry Potter est contraint de passer la soirée dans sa chambre. Dobby, un elfe, fait alors son apparition. Il lui annonce que de terribles dangers menacent l\'école de Poudlard et qu\'il ne doit pas y retourner en septembre. Harry refuse de le croire. Mais sitôt la rentrée des classes effectuée, ce dernier entend une voix malveillante.', director : 'Chris Columbus', year : 2002 
        }
    ])
    
    const addMovie = (data) => {
        // data vient de la méthode handleSubmit de react-hook-form et est un objet contenant toutes les propriétés qu'on a register avec leur valeur associée
        // handleSubmit fait aussi un preventDefault donc pas besoin de le faire ici

        //Normalement si db, pas besoin de rajouter l'id
        //Pour cela, on va récupérer l'id max et ajouter 1
        //movies.map(movie => movie.id) transforme le tableau de film en tableau de nombres (contenant les id)
        const tabId = movies.map(movie => movie.id);

        //Math.max(...movies.map(movie => movie.id)) -> trouve la valeur max parmi ces id       
        data.id = Math.max(...tabId, 0) + 1 ;

        // Maintenant, y'a plus qu'à l'insérer dans le tableau mais comme on est en React, on doit se complexifier la vie 
        // Imaginons on a un tableau avec ["oui", "non", "peut-être"] et data vaut "sans doute"
        // C'est comme si on faisait 
            // [...["oui", "non", "peut-être"], "sans doute" ] 
            // donc  ["oui", "non", "peut-être", "sans doute" ]
        setMovies(previous => [...previous, data]);

        
    }

    return (
       <>
            <div>
                <h2>Ajouter un film :</h2>
                <form onSubmit={ handleSubmit(addMovie) }>
                    <div>
                        <label htmlFor="title">Titre du film</label>
                        <input id="title" type="text" {...register("title", { required : true, maxLength : 150 }) }/>
                        { errors['title']?.type === 'required' && <span>Ce champs est requis</span> }
                        { errors['title']?.type === 'maxLength' && <span>Maximum 150 caractères</span> }
                    </div>

                    <div>
                        <label htmlFor="synopsis">Synopsis</label>
                        <textarea rows="5" col="50" id="synopsis" {...register("synopsis", { maxLength : 500 }) }/>
                        { errors['synopsis']?.type === 'maxLength' && <span>Maximum 500 caractères</span> }

                    </div>

                    <div>
                        <label htmlFor="director">Réalisateur</label>
                        <input id="director" type="text" {...register("director", { required : true, maxLength : 150 })} />
                        { errors['director']?.type === 'required' && <span>Ce champs est requis</span> }
                        { errors['director']?.type === 'maxLength' && <span>Maximum 150 caractères</span> }
                    </div>
                    
                    <div>
                        <label htmlFor="year">Année de sortie</label>
                        <input id="year" type="number" {...register("year", { required : true, min : 1895, max : new Date().getFullYear() })} />
                        { errors['year']?.type === 'required' && <span>Ce champs est requis</span> }
                        { (errors['year']?.type === 'min' || errors['year']?.type === 'max') && <span>L'année de sortie doit être entre 1895 et { new Date().getFullYear() }</span> }
                    </div>

                    <input type="submit" value="Ajouter"/>
                </form>
            </div>

            <div>
                <h2>Liste des films :</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Réalisateur</th>
                            <th>Année de sortie</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        { movies.map(movie => <Movie movie={movie} key={movie.id}/>) }
                    </tbody>

                </table>
            </div>
       </>
    )
} 