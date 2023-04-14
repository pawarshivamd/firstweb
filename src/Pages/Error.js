import { useNavigate } from 'react-router-dom';
import '../asstes/css/erroecss.css';
const Error = () => {

    const naviget=useNavigate ();
        const GotoHome= () => {
            naviget("/");
        
    }
  return (
    <div className='hello'>
    <div className='imd-eror-section'>
            <div className='col-12 error-img'>
                <img src={require('../asstes/img/dribbble_1.gif')} alt="" />
            </div>
            
            <div className='abbsulet'>
      <h2 class="fourofour2">Page Not Found!</h2>
      <button type="button" class="zoom btn btn-dark" onClick={() =>GotoHome()}>Go To Home</button>
      </div>
</div>
</div>
  )
}


export default Error
