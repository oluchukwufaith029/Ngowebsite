import Title from './Title';
 import {visions} from './data';
 import Vision from './Vision' ;

 const Visions = () => {
  return (
        <section className="section" id="visions">
<Title title='our' subTitle='vision' />

      <div className='section-center vision-center'>
        {visions.map((vision) => {
return <Vision key={vision.id} {...vision} />
        })}

      </div>
    </section>
    
  );
};
export default Visions;