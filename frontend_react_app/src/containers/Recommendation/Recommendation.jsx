import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { PortableText} from '@portabletext/react'
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Recommendation.scss';

const Recommendation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Recommendations, setRecommendations] = useState([]);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "recommendations"]';

    client.fetch(query).then((data) => {
      {console.log(data)};
      setRecommendations(data);
    });
  }, []);

  return (
    <>
      {Recommendations.length && (
        <>
          <div className="app__recommendation-item app__flex">
            <img src={urlFor(Recommendations[currentIndex].imageurl)} alt={Recommendations[currentIndex].name} />
            <div className="app__recommendation-content">
              <div className="app__recommendation-feeback">
                <PortableText
                  value={Recommendations[currentIndex].feedback}
                  />
              </div>
              {/*<pre>{JSON.stringify(Recommendations[currentIndex].feedback, null,2)}</pre>
              <p className="p-text">{Recommendations[currentIndex].feedback}</p>*/}
              <div>
                <h4 className="bold-text">{Recommendations[currentIndex].name}</h4>
                <h5 className="p-text">{Recommendations[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__recommendation-btns app__flex">
            <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? Recommendations.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className="app__flex" onClick={() => handleClick(currentIndex === Recommendations.length - 1 ? 0 : currentIndex + 1)}>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Recommendation, 'app__recommendation'),
  'recommendation',
  'app__primarybg',
);