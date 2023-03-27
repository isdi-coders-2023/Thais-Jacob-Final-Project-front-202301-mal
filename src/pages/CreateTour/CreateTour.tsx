import styled from 'styled-components';
import CreateTourForm from '../../features/create-tour/Components/CreateTourForm';

const CreatePlanSectionStyled = styled.section`
  margin-bottom: 5rem;
  overflow-y: auto;
`;

const CreatePlan = () => {
  return (
    <CreatePlanSectionStyled>
      <CreateTourForm />
    </CreatePlanSectionStyled>
  );
};

export default CreatePlan;
