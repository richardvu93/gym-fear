import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleRoof,
  faPeopleGroup,
  faDumbbell,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import history2 from "../images/history2.jpg";
import history2small from "../images/history2-small.jpg";
import history3 from "../images/history3.jpg";
import history3small from "../images/history3-small.jpg";
import history1 from "../images/history1.jpg";
import history1small from "../images/history1-small.jpg";
import history4 from "../images/history4.jpg";
import history4small from "../images/history4-small.jpg";

function History() {
  return (
    <div className='history'>
      <div className='history__container'>
        <div className='history__grid'>
          <div className='history__text'>
            <div className='history__icon'>
              <FontAwesomeIcon icon={faPeopleRoof} />
            </div>
            <h1>Our Goal</h1>
            <p>
              At GYM FEAR, we help you achieve the body of your dreams. Our
              professional trainers will work with you to create a personalized
              fitness and nutrition plan to accomplish your goals.
            </p>
          </div>
          <div
            className='history__blur-load'
            style={{ backgroundImage: `url( ${history1small} )` }}
          >
            <img className='history__img' src={history1} alt='' />
          </div>
          <div
            className='history__blur-load'
            style={{ backgroundImage: `url( ${history2small} )` }}
          >
            <img className='history__img' src={history2} alt='' />
          </div>
          <div className='history__text'>
            <div className='history__icon'>
              <FontAwesomeIcon icon={faPeopleGroup} />
            </div>
            <h1>Our Team</h1>
            <p>
              We have an expert team of coaches that will help you succeed in
              your fitness goals, with personalized guidance and motivation.
            </p>
          </div>
          <div className='history__text'>
            <div className='history__icon'>
              <FontAwesomeIcon icon={faDumbbell} />
            </div>
            <h1>Our Equipment</h1>
            <p>
              You'll have everything you need at GYM FEAR to get that dream body
              you deserve.
            </p>
          </div>
          <div
            className='history__blur-load'
            style={{ backgroundImage: `url( ${history3small} )` }}
          >
            <img className='history__img' src={history3} alt='' />
          </div>
          <div
            className='history__blur-load'
            style={{ backgroundImage: `url( ${history4small} )` }}
          >
            <img className='history__img' src={history4} alt='' />
          </div>

          <div className='history__text'>
            <div className='history__icon'>
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h1>Our Classes</h1>
            <p>
              At GYM FEAR, we help you achieve the body of your dreams. Our
              classes will work with you to create a fun fitness experience to
              accomplish your goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default History;
