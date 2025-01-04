import React, { useState } from 'react';
import Timeline from '../Utils/Timeline';
import CardTimeline from '../Utils/Card/CardTimeline';
import { experiences } from '../../data/experiences';

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className="flex h-screen">
      <div className="w-1/3">
        <Timeline
          experiences={experiences}
          onExperienceSelect={setSelectedExperience}
        />
      </div>
      <div className="w-2/3">
        <CardTimeline experience={selectedExperience} />
      </div>
    </div>
  );
}
