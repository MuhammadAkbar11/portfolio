import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { PublicContext } from '@app/context/context';
import { ListSkillSkeleton, SkillItem } from '..';

function AboutListSkill() {
  const context = useContext(PublicContext);
  const {
    skill: { skillList, loading, error },
  } = context.publicStore;
  const dispatch = context.publicDispatch;

  useEffect(() => {
    const loadSkills = async () => {
      dispatch({
        type: 'SKILL_LIST_REQ',
      });
      try {
        const getSkillList = await axios.get('/api/skills');

        dispatch({
          type: 'SKILL_LIST_SUCCESS',
          payload: getSkillList.data?.skills,
        });
      } catch (error) {
        dispatch({
          type: 'SKILL_LIST_ERROR',
        });
      }
    };

    loadSkills();
  }, []);

  return (
    <div className='mt-2 pt-2 text-slate  '>
      <div>
        {loading && (
          <div className='text-center'>
            <ListSkillSkeleton />
          </div>
        )}
        {!loading && !error && skillList?.length !== 0 ? (
          <div className=' w-full '>
            <ul className=' text-sm leading-8 xs:flex xs:flex-col md:block'>
              {skillList.map(sk => {
                return (
                  <React.Fragment key={sk._id}>
                    <SkillItem {...sk} />
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AboutListSkill;
