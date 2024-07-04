import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Stepper.css';

const Stepper = () => {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    return (
        <Container className='mt-4'>
            <Row className="justify-content-center">
                <Col md="auto" className="stepper-container">
                    <div className="stepper">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className={`step ${step >= s ? 'active' : ''} ${step > 1 ? 'green' : ''}`}>
                                <div className="circle">{s}</div>
                                {s < 4 && <div className={`line ${step >= s + 1 ? 'active' : ''}`}></div>}
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-3">
                <Col md="auto">
                    <h4>Step {step}</h4>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-3">
                <Col md="auto">
                    {step > 1 && (
                        <Button variant="warning" onClick={handlePrev}>
                            Previous
                        </Button>
                    )}
                    {step < 4 && (
                        <Button variant="primary" onClick={handleNext} className="ms-2">
                            Next
                        </Button>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default Stepper;



// import React, { useState } from 'react';
// import { Button, Container, Row, Col } from 'react-bootstrap';
// import './Stepper.css';

// const Stepper = () => {
//     const [step, setStep] = useState(1);

//     const handleNext = () => {
//         setStep(step + 1);
//     };

//     const handlePrev = () => {
//         setStep(step - 1);
//     };

//     return (
//         <Container className='mt-4'>
//             <Row className="justify-content-center">
//                 <Col md="auto" className="stepper-container">
//                     <div className="stepper">
//                         {[1, 2, 3, 4].map((s) => (
//                             <div key={s} className={`step ${step >= s ? 'active' : ''} ${step > 1 ? 'green' : ''}`}>
//                                 <div className="circle">{s}</div>
//                                 {s < 4 && <div className="line"></div>}
//                             </div>
//                         ))}
//                     </div>
//                 </Col>
//             </Row>
//             <Row className="justify-content-md-center mt-3">
//                 <Col md="auto">
//                     <h4>Step {step}</h4>
//                 </Col>
//             </Row>
//             <Row className="justify-content-md-center mt-3">
//                 <Col md="auto">
//                     {step > 1 && (
//                         <Button variant="warning" onClick={handlePrev}>
//                             Previous
//                         </Button>
//                     )}
//                     {step < 4 && (
//                         <Button variant="primary" onClick={handleNext} className="ms-2">
//                             Next
//                         </Button>
//                     )}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Stepper;
