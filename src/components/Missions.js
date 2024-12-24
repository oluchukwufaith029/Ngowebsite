import Title from './Title';
import { missions } from './data';
import Mission from './Mission';
const Missions = () => {
  return (
    <section className='section missions' id='missions'>
      <Title title='our' subTitle='missions' />

      <div className='section-center missions-center'>
        {missions.map((mission) => {
          return <Mission key={mission.id} {...mission}  />;
        })}
      </div>
    </section>
  );
};
export default Missions;
