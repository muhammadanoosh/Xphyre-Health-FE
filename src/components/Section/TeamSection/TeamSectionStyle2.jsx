import React from 'react';
import Spacing from '../../Spacing';
import TeamStyle2 from '../../Team/TeamStyle2';

export default function TeamSectionStyle2({ data }) {


  return (
    <div className="container">
      <Spacing md="65" />
      <div className={`cs_team_grid`}>
        {data?.map((item, index) => (
          <TeamStyle2 {...item} key={index} />
        ))}
      </div>
      <Spacing md="90" />
    </div>
  );
}
