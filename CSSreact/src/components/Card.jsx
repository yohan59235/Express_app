import style from '../style/Card.module.scss'

function Card() {
  return (
    <div>
        <img className={style.hamster} src="/src/assets/hamster.jpg" alt="" />
        <h1>Hamtaro, reviens ! </h1>
        <div className={style.roles}>
            <div className={style.role1}>
                <h4>Réalisateur</h4>
                <p>Thor <br /> Épavumélunette</p>
            </div>
            <div className={style.role2}>
                <h4>Productrice</h4>
                <p>Iléosud <br /> Éléonore</p>
            </div>
            <div className={style.role3}>
                <h4>Scénariste</h4>
                <p>Labrosse <br /> Adam</p>
            </div>
        </div>

        <div className={style.description}>
            <h2>Hamtaro le fugueur</h2>
            <div className={style.notes}>
                <img className={style.star} src="src/assets/star.png" alt="" />
                <img className={style.star} src="src/assets/star.png" alt="" />
                <img className={style.star} src="src/assets/star.png" alt="" />
                <img className={style.star} src="src/assets/star.png" alt="" />
                <img className={style.star} src="src/assets/star.png" alt="" />
                <p>5/5 (3,14)</p>
            </div>
            <h4>En avant-première (1h74min)</h4>

            <p>Le petit furet Hamtaro à décidé de fuguer après s'être bagarré avec Tic et Tac de la Wild Code School, sa propriètaire Tassie Padessu se met en quête de le retrouver</p>

            <hr />
        </div>


        <div className={style.dispo}>
            <h2>En diffusion</h2>
            <div className={style.salles}>
                <article>Salle 1</article>
                <article>Salle 9¾</article>
                <article>Salle 49.3</article>
                <article>Salle 69</article>
            </div>
        </div>

    </div>
  )
}

export default Card