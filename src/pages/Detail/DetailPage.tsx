import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import TourDetail from '../../features/tour/Components/TourDetail';

const DetailContainerPage = styled.section`
  margin-bottom: 5rem;
  overflow-y: auto;
`;

const Detail = () => {
  const { _id } = useParams();
  return (
    <DetailContainerPage>
      <TourDetail tourId={_id ?? ''} />
    </DetailContainerPage>
  );
};

export default Detail;
