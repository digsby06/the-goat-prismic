import React from 'react';
import { Link } from 'react-router-dom';

import './BackButton.scss';

const BackButton = () => (
    <section className="BackButton bg-black">
        <Link className="white f-primary" to="/">Back</Link>
    </section>
);

export default BackButton;
