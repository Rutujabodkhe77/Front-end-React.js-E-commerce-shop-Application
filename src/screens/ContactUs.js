
import React from 'react';
import {Button} from 'react-bootstrap';
import Navbar_Component from '../Components/Navbar_Component';

function Contact() {
    return (
        <div>
          <Navbar_Component />
              <div className="regi_div">
                    <h1 className="text-center"><b>Contact Section</b></h1><br/><br/>
                    <h1 className="text-center"><b>+91-1234567890</b></h1><br/>
              <div className="form-group">
                    <Button className="mx-auto d-block" variant="danger">Call</Button> 
                </div>
                <br/>
</div>

</div>
);
}
export default Contact;