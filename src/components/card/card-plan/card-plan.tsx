import "./card-plan.scss";
import TagPromotion from "../../../assets/tag-promotion.svg";

type Props = {
  titulo: string;
  icon: string;
  beneficios: React.ReactElement[];
  precioPlan: number;
  recomendado?: boolean;
};
function CardPlan({
  titulo,
  icon,
  beneficios,
  precioPlan,
  recomendado = false,
}: Props) {
  return (
    <article className={`card__plan ${recomendado ? "card__plan-promo" : ""}`}>
      <div className="card__plan__header">
        {recomendado && (
          <img
            className="card__plan__header__promocion"
            src={TagPromotion}
            alt="tag promocion"
          />
        )}
        <div className="card__plan__header__content">
          <div className="header__content">
            <div className="header">
              <span className="header__title">{titulo}</span>
              <div className="header__costo">
                <span className="header__costo__title">Costo del plan</span>
                <span className="header__costo__precio">
                  ${precioPlan} al mes
                </span>
              </div>
            </div>
            <img className="header__img" src={icon} alt="plan icono" />
          </div>
          <hr className="card__plan__header__divider" />
        </div>
      </div>
      <div className="card__plan__info">
        <ul className="card__plan__info__beneficios">
          {beneficios.map((beneficio) => (
            <li className="beneficios__description">{beneficio}</li>
          ))}
        </ul>
        <button className="card__plan__info__button">
          <span className="card__plan__info__button__text">
            Seleccionar Plan
          </span>
        </button>
      </div>
    </article>
  );
}

export default CardPlan;