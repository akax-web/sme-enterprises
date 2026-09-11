import { getTelLink } from '../config/businessConfig';
import './ServiceCard.css';

/**
 * Renders one service card. The button behavior depends on
 * `buttonAction` coming from the backend:
 *  - CALL           -> tel: link
 *  - VIEW_HOURLY    -> scrolls to / opens the Hourly Package section
 *  - VIEW_VEHICLES  -> scrolls to the vehicle categories section
 *  - CONTACT        -> tel: link (same as CALL, kept distinct for clarity)
 */
function ServiceCard({ name, description, buttonLabel, buttonAction, onViewHourly }) {
  function renderAction() {
    if (buttonAction === 'VIEW_HOURLY') {
      return (
        <button type="button" className="btn btn-secondary btn-block" onClick={onViewHourly}>
          {buttonLabel || 'View Hourly Packages'}
        </button>
      );
    }

    // CALL, CONTACT, or any other action defaults to a phone link,
    // since every non-hourly service ultimately routes to a call.
    return (
      <a href={getTelLink()} className="btn btn-secondary btn-block">
        {buttonLabel || 'Contact'}
      </a>
    );
  }

  return (
    <article className="card service-card">
      <h3 className="service-card__title">{name}</h3>
      <p className="service-card__desc">{description}</p>
      <div className="service-card__action">{renderAction()}</div>
    </article>
  );
}

export default ServiceCard;
